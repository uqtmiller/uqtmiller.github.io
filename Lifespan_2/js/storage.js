// Hybrid persistence layer: LocalStorage by default + optional Google Firebase Firestore sync

const STORAGE_KEY = "lifespan_psych_study_app_v1";

class StorageService {
  constructor() {
    this.data = this.loadFromLocalStorage();
    this.firebaseApp = null;
    this.firestoreDb = null;
    this.isFirebaseReady = false;
  }

  getDefaultStructure() {
    return {
      settings: {
        userId: "student_wife_" + Math.random().toString(36).substring(2, 8),
        firebaseConfig: null,
        theme: "light"
      },
      modules: {
        3: {
          scenarios: {},
          shortAnswers: {},
          essay: {
            draft: "",
            checkedRubric: {},
            lastSavedAt: null
          }
        }
      }
    };
  }

  loadFromLocalStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!parsed.modules) parsed.modules = {};
        if (!parsed.modules[3]) {
          parsed.modules[3] = { scenarios: {}, shortAnswers: {}, essay: { draft: "", checkedRubric: {}, lastSavedAt: null } };
        }
        return parsed;
      }
    } catch (e) {
      console.warn("Error reading localStorage, using defaults", e);
    }
    return this.getDefaultStructure();
  }

  saveToLocalStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
    // Also trigger cloud sync if configured
    if (this.isFirebaseReady) {
      this.syncToFirebase();
    }
  }

  // --- Scenario Attempt Tracking (Mango Languages Simple Attempt Counter) ---
  getScenarioRecord(moduleId, scenarioId) {
    this.ensureModule(moduleId);
    if (!this.data.modules[moduleId].scenarios[scenarioId]) {
      this.data.modules[moduleId].scenarios[scenarioId] = {
        totalAttempts: 0,
        correctAttempts: 0,
        incorrectAttempts: 0,
        lastResult: null, // "PASS" or "RETRY"
        lastScorePercent: null,
        lastAttemptDate: null
      };
    }
    return this.data.modules[moduleId].scenarios[scenarioId];
  }

  recordWrongGuess(moduleId, scenarioId, stepNum) {
    const rec = this.getScenarioRecord(moduleId, scenarioId);
    rec.totalAttempts += 1;
    rec.incorrectAttempts += 1;
    rec.lastResult = "IN PROGRESS";
    rec.lastAttemptDate = new Date().toISOString();
    this.saveToLocalStorage();
    return rec;
  }

  recordScenarioSuccess(moduleId, scenarioId, hadWrongGuesses) {
    const rec = this.getScenarioRecord(moduleId, scenarioId);
    rec.totalAttempts += 1;
    rec.correctAttempts += 1;
    rec.lastResult = "PASS";
    rec.lastScorePercent = hadWrongGuesses ? 80 : 100;
    rec.lastAttemptDate = new Date().toISOString();
    this.saveToLocalStorage();
    return rec;
  }

  recordScenarioCompletion(moduleId, scenarioId, step1Passed, step2Passed) {
    const rec = this.getScenarioRecord(moduleId, scenarioId);
    rec.totalAttempts += 1;
    
    const fullyPassed = step1Passed && step2Passed;
    if (fullyPassed) {
      rec.correctAttempts += 1;
      rec.lastResult = "PASS";
      rec.lastScorePercent = 100;
    } else {
      rec.incorrectAttempts += 1;
      rec.lastResult = "PARTIAL/RETRY";
      rec.lastScorePercent = (step1Passed || step2Passed) ? 50 : 0;
    }
    rec.lastAttemptDate = new Date().toISOString();

    this.saveToLocalStorage();
    return rec;
  }

  getModuleStats(moduleId) {
    this.ensureModule(moduleId);
    const scenarios = this.data.modules[moduleId].scenarios;
    let totalAttemptsAll = 0;
    let correctAttemptsAll = 0;
    let masteredCount = 0;

    const scenarioKeys = Object.keys(scenarios);
    for (const key of scenarioKeys) {
      const s = scenarios[key];
      totalAttemptsAll += s.totalAttempts;
      correctAttemptsAll += s.correctAttempts;
      if (s.lastResult === "PASS") {
        masteredCount++;
      }
    }

    const accuracy = totalAttemptsAll > 0 
      ? Math.round((correctAttemptsAll / totalAttemptsAll) * 100) 
      : 0;

    return {
      totalAttempts: totalAttemptsAll,
      correctAttempts: correctAttemptsAll,
      masteredCount: masteredCount,
      accuracyPercent: accuracy
    };
  }

  // --- Short Answer and Essay Methods ---
  saveShortAnswer(moduleId, saId, draftText, selfScore = null) {
    this.ensureModule(moduleId);
    this.data.modules[moduleId].shortAnswers[saId] = {
      draft: draftText,
      selfScore: selfScore,
      updatedAt: new Date().toISOString()
    };
    this.saveToLocalStorage();
  }

  getShortAnswer(moduleId, saId) {
    this.ensureModule(moduleId);
    return this.data.modules[moduleId].shortAnswers[saId] || { draft: "", selfScore: null, updatedAt: null };
  }

  saveEssay(moduleId, draftText, checkedRubric = {}) {
    this.ensureModule(moduleId);
    this.data.modules[moduleId].essay = {
      draft: draftText,
      checkedRubric: checkedRubric,
      lastSavedAt: new Date().toISOString()
    };
    this.saveToLocalStorage();
  }

  getEssay(moduleId) {
    this.ensureModule(moduleId);
    return this.data.modules[moduleId].essay || { draft: "", checkedRubric: {}, lastSavedAt: null };
  }

  ensureModule(moduleId) {
    if (!this.data.modules) this.data.modules = {};
    if (!this.data.modules[moduleId]) {
      this.data.modules[moduleId] = {
        scenarios: {},
        shortAnswers: {},
        essay: { draft: "", checkedRubric: {}, lastSavedAt: null }
      };
    }
  }

  // --- Firebase Firestore Sync ---
  async initFirebase(config) {
    if (!config || !config.apiKey || !config.projectId) {
      throw new Error("Invalid Firebase configuration: apiKey and projectId required.");
    }

    try {
      if (typeof firebase === "undefined") {
        throw new Error("Firebase SDK script not detected in browser window.");
      }

      if (!firebase.apps.length) {
        this.firebaseApp = firebase.initializeApp(config);
      } else {
        this.firebaseApp = firebase.app();
      }

      this.firestoreDb = firebase.firestore();
      this.isFirebaseReady = true;

      // Save valid config
      this.data.settings.firebaseConfig = config;
      this.saveToLocalStorage();

      // Pull existing cloud data if available
      await this.pullFromFirebase();
      return true;
    } catch (err) {
      this.isFirebaseReady = false;
      console.error("Firebase init failed:", err);
      throw err;
    }
  }

  async syncToFirebase() {
    if (!this.isFirebaseReady || !this.firestoreDb) return;
    try {
      const userId = this.data.settings.userId || "student_user";
      const docRef = this.firestoreDb.collection("lifespan_study_records").doc(userId);
      await docRef.set({
        lastSyncTime: firebase.firestore.FieldValue.serverTimestamp(),
        modules: this.data.modules,
        clientSettings: {
          theme: this.data.settings.theme,
          userId: userId
        }
      }, { merge: true });
      console.log("Synced successfully to Firebase Firestore!");
    } catch (e) {
      console.warn("Firestore sync failed (offline or permissions):", e);
    }
  }

  async pullFromFirebase() {
    if (!this.isFirebaseReady || !this.firestoreDb) return;
    try {
      const userId = this.data.settings.userId || "student_user";
      const docRef = this.firestoreDb.collection("lifespan_study_records").doc(userId);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        const cloudData = snapshot.data();
        if (cloudData.modules) {
          // Merge modules
          this.data.modules = Object.assign({}, this.data.modules, cloudData.modules);
          this.saveToLocalStorage();
          console.log("Merged cloud progress into local store!");
        }
      } else {
        // First time on cloud: push current local state
        await this.syncToFirebase();
      }
    } catch (e) {
      console.warn("Firestore pull failed:", e);
    }
  }

  exportDataJSON() {
    return JSON.stringify(this.data, null, 2);
  }

  importDataJSON(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === "object") {
        this.data = parsed;
        this.saveToLocalStorage();
        return true;
      }
    } catch (e) {
      throw new Error("Invalid JSON file format.");
    }
    return false;
  }

  resetAllData() {
    this.data = this.getDefaultStructure();
    this.saveToLocalStorage();
  }
}

const storageService = new StorageService();
