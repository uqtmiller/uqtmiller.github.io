// Defensive check: ensure window.geminiService always exists even if script order varies
if (typeof window.geminiService === "undefined") {
  window.geminiService = {
    getApiKey() {
      try {
        const match = document.cookie.match(/(?:^|; )gemini_api_key=([^;]*)/);
        if (match) return decodeURIComponent(match[1]);
        return localStorage.getItem("gemini_api_key") || "";
      } catch (e) { return ""; }
    },
    setApiKey(k) {
      const trimmed = (k || "").trim();
      try {
        localStorage.setItem("gemini_api_key", trimmed);
        const isHttps = typeof location !== "undefined" && location.protocol === "https:";
        const sec = isHttps ? "; Secure" : "";
        document.cookie = `gemini_api_key=${encodeURIComponent(trimmed)}; path=/; max-age=31536000; SameSite=Lax${sec}`;
        document.cookie = `gemini_api_key=${encodeURIComponent(trimmed)}; path=/Lifespan_2/; max-age=31536000; SameSite=Lax${sec}`;
      } catch (e) {}
      return trimmed;
    },
    hasApiKey() { return Boolean(this.getApiKey()); },
    getModel() { return "gemini-3.5-flash-lite"; },
    setModel() {},
    async testApiKey(k) {
      return { success: false, error: "Gemini service script is still loading. Please check back in a few seconds." };
    },
    async evaluateShortAnswer() {
      throw new Error("Gemini AI service is loading. Please refresh the page if this persists.");
    },
    async evaluateEssay() {
      throw new Error("Gemini AI service is loading. Please refresh the page if this persists.");
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

// Detect in-page anchor navigation (e.g. user pasting #key=... into address bar)
window.addEventListener("hashchange", () => {
  if (typeof App !== "undefined" && App.checkUrlForApiKey) {
    App.checkUrlForApiKey();
  }
});

const MODULES_DATA = {
  1: typeof MODULE_1_DATA !== 'undefined' ? MODULE_1_DATA : null,
  2: typeof MODULE_2_DATA !== 'undefined' ? MODULE_2_DATA : null,
  3: typeof MODULE_3_DATA !== 'undefined' ? MODULE_3_DATA : null,
  4: typeof MODULE_4_DATA !== 'undefined' ? MODULE_4_DATA : null,
  5: typeof MODULE_5_DATA !== 'undefined' ? MODULE_5_DATA : null,
  6: typeof MODULE_6_DATA !== 'undefined' ? MODULE_6_DATA : null,
  7: typeof MODULE_7_DATA !== 'undefined' ? MODULE_7_DATA : null,
  8: typeof MODULE_8_DATA !== 'undefined' ? MODULE_8_DATA : null,
  9: typeof MODULE_9_DATA !== 'undefined' ? MODULE_9_DATA : null,
  10: typeof MODULE_10_DATA !== 'undefined' ? MODULE_10_DATA : null
};

const App = {
  currentModuleId: 1,
  currentSubTab: "review", // "review", "differential", "quiz", "shortanswer"
  selectedDifferentialIds: [],

  init() {
    this.checkUrlForApiKey();
    this.initModuleState();
    this.renderTopNav();
    this.setupEventListeners();
    this.renderActiveModule();
    this.updateGlobalProgressUI();
    this.updateGeminiStatusUI();
  },

  showToast(message, type = "success") {
    let container = document.getElementById("globalToastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "globalToastContainer";
      container.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 10px; pointer-events: none;";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `toast-pill ${type}`;
    const bg = type === "success" ? "#065f46" : type === "error" ? "#991b1b" : "#1e40af";
    toast.style.cssText = `
      pointer-events: auto;
      background: ${bg};
      color: #ffffff;
      padding: 12px 18px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      font-size: 13.5px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      max-width: 420px;
      transition: all 0.3s ease;
    `;
    toast.innerHTML = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  },

  checkUrlForApiKey() {
    // Check URL fragment (#key=... or #api_key=...) or query string (?key=...)
    let keyToSave = null;
    const hash = window.location.hash || "";
    if (hash) {
      const match = hash.match(/(?:gemini_key|api_key|key)=([A-Za-z0-9_\-]+)/i);
      if (match && match[1]) {
        keyToSave = match[1];
      }
    }

    if (!keyToSave && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      keyToSave = params.get("gemini_key") || params.get("api_key") || params.get("key");
    }

    if (keyToSave) {
      if (typeof geminiService !== "undefined") {
        geminiService.setApiKey(keyToSave);
      }
      if (typeof storageService !== "undefined" && storageService.saveGeminiApiKey) {
        storageService.saveGeminiApiKey(keyToSave);
      }
      this.updateGeminiStatusUI();

      // Immediately sanitize URL address bar so key is not visible or stored in history
      if (window.history && window.history.replaceState) {
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
      this.showToast("✨ <strong>Google Gemini API Key Saved!</strong> Stored in persistent browser storage on this device.", "success");
    }
  },

  getActiveModuleData() {
    return MODULES_DATA[this.currentModuleId] || null;
  },

  initModuleState() {
    const modData = this.getActiveModuleData();
    if (modData && modData.disorders && modData.disorders.length >= 2) {
      this.selectedDifferentialIds = [modData.disorders[0].id, modData.disorders[1].id];
    } else if (modData && modData.disorders && modData.disorders.length === 1) {
      this.selectedDifferentialIds = [modData.disorders[0].id];
    } else {
      this.selectedDifferentialIds = [];
    }
  },

  // -------------------------------------------------------------
  // Navigation & Module Switching
  // -------------------------------------------------------------
  renderTopNav() {
    const navContainer = document.getElementById("moduleNavList");
    if (!navContainer) return;
    navContainer.innerHTML = "";

    ALL_MODULES_METADATA.forEach((mod) => {
      const btn = document.createElement("button");
      btn.className = `module-nav-btn ${mod.id === this.currentModuleId ? "active" : ""} ${mod.status === "active" ? "is-prototype" : ""}`;
      btn.innerHTML = `
        <span class="mod-icon">${mod.icon}</span>
        <span class="mod-title">${mod.shortTitle}</span>
        ${mod.status === "active" ? '<span class="active-badge">Active</span>' : ''}
      `;
      btn.addEventListener("click", () => {
        this.switchModule(mod.id);
      });
      navContainer.appendChild(btn);
    });
  },

  switchModule(moduleId) {
    this.currentModuleId = moduleId;
    this.initModuleState();
    this.renderTopNav();
    this.renderActiveModule();
    this.updateGlobalProgressUI();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  switchSubTab(tabName) {
    this.currentSubTab = tabName;
    document.querySelectorAll(".subtab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tabName);
    });
    document.querySelectorAll(".tab-pane").forEach((p) => {
      p.classList.toggle("active", p.id === `tab-${tabName}`);
    });
  },

  renderActiveModule() {
    const moduleContainer = document.getElementById("activeModuleContainer");
    const previewContainer = document.getElementById("previewModuleContainer");

    const modData = this.getActiveModuleData();
    if (modData) {
      if (moduleContainer) moduleContainer.style.display = "block";
      if (previewContainer) previewContainer.style.display = "none";
      this.renderModuleData(modData);
    } else {
      if (moduleContainer) moduleContainer.style.display = "none";
      if (previewContainer) previewContainer.style.display = "block";
      this.renderBlankModule(this.currentModuleId);
    }
  },

  renderBlankModule(moduleId) {
    const mod = ALL_MODULES_METADATA.find((m) => m.id === moduleId);
    const previewContainer = document.getElementById("previewModuleContainer");
    if (!mod || !previewContainer) return;

    previewContainer.innerHTML = `
      <div class="card preview-card">
        <div class="preview-header">
          <span class="preview-icon">${mod.icon}</span>
          <div>
            <h2>${mod.title}</h2>
            <p class="text-muted">Coordinator/Lecturer: <strong>${mod.lecturer}</strong></p>
          </div>
        </div>
        <div class="prototype-notice-box" style="border-left-color: #64748b; background: #f8fafc;">
          <span class="notice-badge" style="background: #64748b;">Course Foundation / Cultural Context</span>
          <p><strong>${mod.title}</strong> is a foundational, non-disorder module covering overarching diagnostic models, mental state examinations, and cultural formulations (Social & Emotional Wellbeing framework, Cultural Formulation Interview) rather than specific psychiatric disorder categories.</p>
          <p style="margin-top: 8px;">In accordance with course curriculum design, this module does not contain clinical disorder tables or diagnostic scenario quizzes. Please select any clinical module (<strong>Modules 3 through 10</strong>) in the top navigation bar to access interactive disorders tables, contrastive differential diagnosis tools, scenario quizzes, and essay rubrics.</p>
          <div style="margin-top: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(3)">Module 3 (Attachment)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(4)">Module 4 (Older Adults)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(5)">Module 5 (Sleep Disorders)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(6)">Module 6 (Neurodevelopment)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(7)">Module 7 (Child Feeding & ARFID)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(8)">Module 8 (Adult Eating Disorders)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(9)">Module 9 (Personality Disorders)</button>
            <button class="btn btn-primary btn-sm" onclick="App.switchModule(10)">Module 10 (Psychosis)</button>
          </div>
        </div>
        <div class="preview-details-grid">
          <div class="preview-box">
            <h3>Key Concepts & Theories</h3>
            <p>${mod.coreConcepts}</p>
          </div>
          <div class="preview-box">
            <h3>Clinical Focus</h3>
            <p>${mod.disorders}</p>
          </div>
          <div class="preview-box preview-box-full">
            <h3>Course Readings & Materials</h3>
            <p>${mod.readings}</p>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // Active Clinical Module Rendering
  // -------------------------------------------------------------
  renderModuleData(modData) {
    // Update banner
    const bTitle = document.getElementById("moduleBannerTitle");
    const bSub = document.getElementById("moduleBannerSubtitle");
    const bMeta = document.getElementById("moduleBannerMeta");
    if (bTitle) bTitle.textContent = modData.title;
    if (bSub) bSub.textContent = modData.subtitle;
    if (bMeta) bMeta.innerHTML = `Course Coordinator: <strong>${modData.coordinator}</strong> | School of Applied Psychology`;

    this.renderTheoreticalPillars(modData);
    this.renderContentReviewSections(modData);
    this.renderDisorderTable(modData);
    this.renderDifferentialPresets(modData);
    this.renderDifferentialTool(modData);
    this.renderScenarioQuizzes(modData);
    this.renderShortAnswerAndEssay(modData);
  },

  renderTheoreticalPillars(modData) {
    const container = document.getElementById("theoreticalPillarsContainer");
    if (!container || !modData.theoreticalPillars) return;
    container.innerHTML = modData.theoreticalPillars
      .map(
        (p) => `
      <div class="card pillar-card">
        <div class="pillar-author">${p.author}</div>
        <h4 class="pillar-title">${p.title}</h4>
        <p class="pillar-summary">${p.summary}</p>
      </div>
    `
      )
      .join("");
  },

  renderContentReviewSections(modData) {
    const container = document.getElementById("contentReviewSectionsContainer");
    if (!container) return;

    if (!modData.contentReviewSections || modData.contentReviewSections.length === 0) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = `
      <div class="content-review-header" style="margin-top: 36px; margin-bottom: 20px;">
        <h3 class="section-heading" style="margin-bottom: 6px;">
          📚 Core Lecture Review & Clinical Frameworks
        </h3>
        <p class="text-muted" style="font-size: 14px; margin-bottom: 0;">
          Comprehensive lecture topics, diagnostic algorithms, and clinical practice competencies extracted directly from coordinator handouts.
        </p>
      </div>
      <div class="review-sections-list" style="display: flex; flex-direction: column; gap: 24px;">
        ${modData.contentReviewSections.map(sec => `
          <div class="card review-section-card" id="${sec.id}" style="border: 1px solid var(--border-color); border-radius: var(--radius-md); background: #ffffff; box-shadow: var(--shadow-sm); overflow: hidden;">
            <div class="review-section-header" style="background: #f8fafc; border-bottom: 1px solid var(--border-color); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span class="review-icon-pill" style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: var(--primary-light); color: var(--primary); font-size: 15px;">
                  <i class="fa ${sec.icon || 'fa-book-open'}"></i>
                </span>
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: #0f172a;">${sec.title}</h4>
              </div>
              ${sec.badge ? `<span class="badge bg-primary" style="font-size: 12px; font-weight: 600; padding: 5px 12px; border-radius: 12px;">${sec.badge}</span>` : ''}
            </div>
            <div class="review-section-body" style="padding: 20px;">
              ${sec.contentHtml}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Dynamically update the heading of the disorders table
    const tableHeading = document.getElementById("disordersTableHeading");
    if (tableHeading) {
      if (modData.moduleId === 1) {
        tableHeading.textContent = "📋 Differential Diagnostic Protocols & Key Disorders Table";
      } else if (modData.moduleId === 2) {
        tableHeading.textContent = "📋 First Peoples Presentations & Culture-Bound Syndromes Table";
      } else if (modData.moduleId === 3) {
        tableHeading.textContent = "📋 Comprehensive Disorders & Attachment Classifications Table";
      } else {
        tableHeading.textContent = "📋 Comprehensive Disorders & Clinical Criteria Table";
      }
    }
  },

  renderDisorderTable(modData) {
    const tbody = document.getElementById("disordersTableBody");
    if (!tbody || !modData.disorders) return;

    tbody.innerHTML = modData.disorders
      .map((d) => {
        return `
        <tr>
          <td>
            <div class="disorder-name-cell">
              <strong>${d.name}</strong>
              <span class="badge ${d.type.includes('Formal') || d.type.includes('Neuro') || d.type.includes('Cluster') ? 'badge-primary' : 'badge-secondary'}">${d.type}</span>
              <small class="text-muted">${d.code}</small>
              <div class="age-tag">Age: ${d.ageRange}</div>
            </div>
          </td>
          <td>
            <ul class="criteria-list">
              ${d.dsmCriteria.map((c) => `<li>${c}</li>`).join("")}
            </ul>
          </td>
          <td>
            <ul class="factors-list">
              ${d.factorsLookedFor.map((f) => `<li>${f}</li>`).join("")}
            </ul>
            <div class="how-to-box">
              <strong>Assessment:</strong>
              <ul>
                ${d.howToDiagnose.map((h) => `<li>${h}</li>`).join("")}
              </ul>
            </div>
          </td>
          <td>
            <ul class="treatment-list">
              ${d.potentialTreatments.map((t) => `<li>${t}</li>`).join("")}
            </ul>
            <div class="clinical-pearl">
              <span class="pearl-icon">💡</span>
              <em>${d.clinicalPearl}</em>
            </div>
          </td>
        </tr>
      `;
      })
      .join("");
  },

  // -------------------------------------------------------------
  // Interactive Differential Tool
  // -------------------------------------------------------------
  renderDifferentialPresets(modData) {
    const bar = document.getElementById("diffPresetsBar");
    if (!bar) return;
    bar.innerHTML = "";

    const label = document.createElement("span");
    label.className = "preset-label";
    label.textContent = "Quick Presets:";
    bar.appendChild(label);

    // Module-specific presets
    if (modData.differentialPresets && modData.differentialPresets.length > 0) {
      modData.differentialPresets.forEach((p) => {
        const btn = document.createElement("button");
        btn.className = "btn-preset";
        btn.textContent = p.label || p.title;
        btn.addEventListener("click", () => {
          const targetIds = p.ids || p.disorderIds || [];
          this.selectedDifferentialIds = [...targetIds];
          this.renderDifferentialTool(modData);
        });
        bar.appendChild(btn);
      });
    }

    // Always offer "Select All"
    const allBtn = document.createElement("button");
    allBtn.className = "btn-preset";
    allBtn.textContent = `Select All (${modData.disorders.length})`;
    allBtn.addEventListener("click", () => {
      this.selectedDifferentialIds = modData.disorders.map((d) => d.id);
      this.renderDifferentialTool(modData);
    });
    bar.appendChild(allBtn);

    // Always offer "Clear (Empty Table)"
    const clearBtn = document.createElement("button");
    clearBtn.className = "btn-preset";
    clearBtn.style.color = "#b91c1c";
    clearBtn.style.borderColor = "#fca5a5";
    clearBtn.textContent = "Clear (Empty Table)";
    clearBtn.addEventListener("click", () => {
      this.selectedDifferentialIds = [];
      this.renderDifferentialTool(modData);
    });
    bar.appendChild(clearBtn);
  },

  renderDifferentialTool(modData = this.getActiveModuleData()) {
    if (!modData) return;
    const checkboxesContainer = document.getElementById("diffDisordersList");
    if (!checkboxesContainer) return;

    checkboxesContainer.innerHTML = modData.disorders
      .map((d) => {
        const isChecked = this.selectedDifferentialIds.includes(d.id);
        return `
        <label class="diff-chip ${isChecked ? 'active' : ''}">
          <input type="checkbox" value="${d.id}" ${isChecked ? 'checked' : ''} onchange="App.onDifferentialToggle('${d.id}')">
          <span>${d.name}</span>
        </label>
      `;
      })
      .join("");

    this.updateDifferentialOutput(modData);
  },

  onDifferentialToggle(disorderId) {
    if (this.selectedDifferentialIds.includes(disorderId)) {
      this.selectedDifferentialIds = this.selectedDifferentialIds.filter((id) => id !== disorderId);
    } else {
      this.selectedDifferentialIds.push(disorderId);
    }
    const modData = this.getActiveModuleData();
    this.renderDifferentialTool(modData);
  },

  updateDifferentialOutput(modData = this.getActiveModuleData()) {
    const outputContainer = document.getElementById("differentialOutput");
    if (!outputContainer || !modData) return;

    const selectedDisorders = modData.disorders.filter((d) =>
      this.selectedDifferentialIds.includes(d.id)
    );

    // Case 1: 0 diagnoses selected -> Empty table state
    if (selectedDisorders.length === 0) {
      outputContainer.innerHTML = `
        <div class="diff-empty-state card">
          <div class="empty-icon" style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <h4 style="font-size: 16px; margin-bottom: 4px; color: #1e293b;">No Diagnosis Selected</h4>
          <p class="text-muted" style="font-size: 13.5px;">The differential table is currently empty. Select any single disorder above to inspect all of its symptoms and diagnostic criteria, or select two or more to view a contrastive differential comparison.</p>
        </div>
      `;
      return;
    }

    // Case 2: Exactly 1 diagnosis selected -> Complete symptoms dossier
    if (selectedDisorders.length === 1) {
      const d = selectedDisorders[0];
      outputContainer.innerHTML = `
        <div class="card single-disorder-card">
          <div class="single-disorder-header">
            <div>
              <span class="badge ${d.type.includes('Formal') || d.type.includes('Neuro') || d.type.includes('Cluster') ? 'badge-primary' : 'badge-secondary'}">${d.type}</span>
              <span class="badge badge-light">${d.code}</span>
              <h3 style="margin-top: 6px; font-size: 20px; color: #0f172a;">${d.name}</h3>
              <p class="text-muted" style="font-size: 13px;">Typical Presentation Window: <strong>${d.ageRange}</strong></p>
            </div>
          </div>

          <div class="core-definition-box" style="margin: 14px 0; background: #eff6ff; padding: 12px 16px; border-left: 4px solid var(--primary); border-radius: 4px; font-size: 14px;">
            <strong>Core Definition:</strong> ${d.coreDefinition}
          </div>

          <div class="diff-section-title">📋 Comprehensive Diagnostic Symptoms & DSM Criteria</div>
          <div class="table-responsive">
            <table class="table single-symptom-table">
              <thead>
                <tr>
                  <th style="width: 8%;">#</th>
                  <th style="width: 92%;">Diagnostic Criterion / Specific Symptom</th>
                </tr>
              </thead>
              <tbody>
                ${d.dsmCriteria.map((crit, idx) => `
                  <tr>
                    <td><strong>${idx + 1}</strong></td>
                    <td>${crit}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <div class="diff-section-title">🔍 Clinical Markers & Behavioral Factors Looked For</div>
          <div class="table-responsive">
            <table class="table single-symptom-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Domain</th>
                  <th style="width: 75%;">Specific Factor / Observable Behavioral Presentation</th>
                </tr>
              </thead>
              <tbody>
                ${d.factorsLookedFor.map((factor) => {
                  const parts = factor.split(': ');
                  const domain = parts.length > 1 ? parts[0] : 'Clinical Factor';
                  const desc = parts.length > 1 ? parts.slice(1).join(': ') : factor;
                  return `
                    <tr>
                      <td><span class="badge badge-light" style="font-size: 12px;">${domain}</span></td>
                      <td>${desc}</td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>

          <div class="diff-section-title">🩺 Assessment & Diagnostic Instruments</div>
          <ul class="criteria-list" style="margin-bottom: 16px;">
            ${d.howToDiagnose.map((h) => `<li>${h}</li>`).join("")}
          </ul>

          <div class="diff-section-title">💊 Potential Evidence-Based Treatments</div>
          <ul class="treatment-list" style="margin-bottom: 16px;">
            ${d.potentialTreatments.map((t) => `<li>${t}</li>`).join("")}
          </ul>

          <div class="clinical-pearl">
            <span class="pearl-icon">💡</span>
            <strong>Clinical Pearl & Differential Key:</strong> <em>${d.clinicalPearl}</em>
          </div>
        </div>
      `;
      return;
    }

    // Check if we have a special pre-computed pairwise comparison
    const keyPair1 = `${selectedDisorders[0].id}_${selectedDisorders[1].id}`;
    const keyPair2 = `${selectedDisorders[1].id}_${selectedDisorders[0].id}`;
    const precomputed = selectedDisorders.length === 2 && modData.differentialMatrix && (modData.differentialMatrix[keyPair1] || modData.differentialMatrix[keyPair2]);

    if (precomputed) {
      const pm = precomputed;
      const ruleEntries = Object.entries(pm.ruleInRuleOut || {}).filter(([k]) => k.startsWith('ruleIn'));
      const ruleA = ruleEntries[0] ? ruleEntries[0][1] : `Rule in ${selectedDisorders[0].name}: Examine distinctive presentation criteria.`;
      const ruleB = ruleEntries[1] ? ruleEntries[1][1] : `Rule in ${selectedDisorders[1].name}: Examine distinctive presentation criteria.`;
      const pitfall = pm.ruleInRuleOut?.pitfallToAvoid || "Carefully evaluate clinical history and developmental context before confirming diagnosis.";

      const txA_Name = pm.contrastingTreatments?.treatmentA_Name || `Intervention for ${selectedDisorders[0].name}`;
      const txA_Steps = pm.contrastingTreatments?.treatmentA_Steps || selectedDisorders[0].potentialTreatments.join("; ");
      const txB_Name = pm.contrastingTreatments?.treatmentB_Name || `Intervention for ${selectedDisorders[1].name}`;
      const txB_Steps = pm.contrastingTreatments?.treatmentB_Steps || selectedDisorders[1].potentialTreatments.join("; ");

      outputContainer.innerHTML = `
        <div class="diff-result-card card">
          <div class="diff-header">
            <h3>🔬 ${pm.title}</h3>
            <p class="diff-commonality"><strong>Shared Context / Etiology:</strong> ${pm.commonality}</p>
          </div>

          <div class="diff-section-title">1. Distinguishing Diagnostic Markers (How to tell them apart)</div>
          <div class="table-responsive">
            <table class="table diff-compare-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Feature Domain</th>
                  <th style="width: 37.5%;">${selectedDisorders[0].name}</th>
                  <th style="width: 37.5%;">${selectedDisorders[1].name}</th>
                </tr>
              </thead>
              <tbody>
                ${pm.distinguishingMarkers
                  .map(
                    (dm) => `
                  <tr>
                    <td><strong>${dm.feature}</strong></td>
                    <td class="col-a">${dm.conditionA}</td>
                    <td class="col-b">${dm.conditionB}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <div class="diff-section-title">2. Differential Decision Rules (Rule-In / Rule-Out)</div>
          <div class="rule-box-grid">
            <div class="rule-box rule-box-a">
              <h4>Rule In: ${selectedDisorders[0].name}</h4>
              <p>${ruleA}</p>
            </div>
            <div class="rule-box rule-box-b">
              <h4>Rule In: ${selectedDisorders[1].name}</h4>
              <p>${ruleB}</p>
            </div>
            <div class="rule-box rule-box-pitfall">
              <h4>⚠️ Key Diagnostic Pitfall to Avoid</h4>
              <p>${pitfall}</p>
            </div>
          </div>

          <div class="diff-section-title">3. Divergent Treatment Pathways (How treatment differs)</div>
          <div class="tx-compare-grid">
            <div class="tx-box tx-box-a">
              <h4>${txA_Name}</h4>
              <p>${txA_Steps}</p>
            </div>
            <div class="tx-box tx-box-b">
              <h4>${txB_Name}</h4>
              <p>${txB_Steps}</p>
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Dynamic Multi-Way Comparison Generator for 3+ or other pairs
    outputContainer.innerHTML = `
      <div class="diff-result-card card">
        <div class="diff-header">
          <h3>🔬 Multi-Way Differential Matrix (${selectedDisorders.length} Conditions Selected)</h3>
          <p class="diff-commonality">Contrasting: ${selectedDisorders.map((d) => `<strong>${d.name}</strong>`).join(", ")}</p>
        </div>

        <div class="diff-section-title">1. Side-by-Side Diagnostic Profiles</div>
        <div class="table-responsive">
          <table class="table diff-compare-table">
            <thead>
              <tr>
                <th style="width: 20%;">Condition</th>
                <th style="width: 25%;">Core Clinical Presentation</th>
                <th style="width: 25%;">Key Distinguishing Markers</th>
                <th style="width: 30%;">Divergent Treatment Strategy</th>
              </tr>
            </thead>
            <tbody>
              ${selectedDisorders
                .map(
                  (d) => `
                <tr>
                  <td>
                    <strong>${d.name}</strong>
                    <br><span class="badge badge-secondary">${d.type}</span>
                  </td>
                  <td>${d.factorsLookedFor[0] || d.coreDefinition}</td>
                  <td>
                    <ul class="compact-list">
                      <li>${d.factorsLookedFor[1] || ''}</li>
                      <li>${d.factorsLookedFor[2] || ''}</li>
                    </ul>
                  </td>
                  <td>
                    <ul class="compact-list">
                      <li><strong>Goal:</strong> ${d.potentialTreatments[0] || ''}</li>
                      <li>${d.potentialTreatments[1] || ''}</li>
                    </ul>
                  </td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="diff-section-title">2. Differential Clues & Clinical Pearls</div>
        <div class="pearl-grid">
          ${selectedDisorders
            .map(
              (d) => `
            <div class="card pearl-card-item">
              <h4>${d.name}</h4>
              <p><em>${d.clinicalPearl}</em></p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // Two-Step Scenario Quizzes (Diagnose -> Treat)
  // -------------------------------------------------------------
  renderScenarioQuizzes(modData = this.getActiveModuleData()) {
    const container = document.getElementById("scenariosContainer");
    if (!container || !modData.scenarios) return;

    container.innerHTML = modData.scenarios
      .map((sc, scIdx) => {
        const record = storageService.getScenarioRecord(this.currentModuleId, sc.id);
        const passBadge = record.lastResult === "PASS"
          ? `<span class="badge badge-success">Passed (${record.lastScorePercent || 100}%)</span>`
          : record.totalAttempts > 0
          ? `<span class="badge badge-warning">Attempts: ${record.totalAttempts}</span>`
          : `<span class="badge badge-light">Not Attempted</span>`;

        const vignetteText = sc.vignette || sc.presentation || "";
        const ageTag = sc.ageGroup || (sc.title.includes('yo') ? sc.title.split('(')[1]?.split(')')[0] : 'Clinical Case');

        return `
        <div class="card scenario-card" id="card-${sc.id}">
          <div class="scenario-header">
            <div>
              <span class="age-badge">${ageTag}</span>
              <h3>${sc.title}</h3>
            </div>
            <div class="attempt-tracker-box">
              <div class="attempt-counts">
                <span>Attempts: <strong>${record.totalAttempts}</strong></span>
                <span>Correct: <strong class="text-success">${record.correctAttempts}</strong></span>
                <span>Incorrect: <strong class="text-danger">${record.incorrectAttempts}</strong></span>
              </div>
              <div>${passBadge}</div>
            </div>
          </div>

          <div class="vignette-text">
            <p><strong>Clinical Vignette:</strong> ${vignetteText}</p>
          </div>

          <!-- Step 1: Diagnose -->
          <div class="quiz-step" id="${sc.id}-step1">
            <div class="step-badge">Step 1 of 2: Diagnose the Case</div>
            <div class="step-prompt">${sc.step1.prompt}</div>
            <div class="options-list">
              ${sc.step1.options
                .map((opt, optIdx) => {
                  const optId = opt.id || `opt1_${optIdx}`;
                  return `
                  <label class="option-label" id="lbl-${sc.id}-s1-${optId}">
                    <input type="radio" name="${sc.id}-s1" value="${optId}" onchange="App.onSelectStep1('${sc.id}')">
                    <span>${opt.text}</span>
                  </label>
                `;
                })
                .join("")}
            </div>
            <div class="step-actions">
              <button class="btn btn-primary" id="btn-submit-${sc.id}-s1" onclick="App.submitStep1('${sc.id}')" disabled>Confirm Diagnosis</button>
            </div>
            <div class="feedback-box" id="feedback-${sc.id}-s1" style="display: none;"></div>
          </div>

          <!-- Step 2: Treat -->
          <div class="quiz-step locked" id="${sc.id}-step2" style="display: none;">
            <div class="step-badge">Step 2 of 2: Select Treatment Approach</div>
            <div class="step-prompt">${sc.step2.prompt}</div>
            <div class="options-list">
              ${sc.step2.options
                .map((opt, optIdx) => {
                  const optId = opt.id || `opt2_${optIdx}`;
                  return `
                  <label class="option-label" id="lbl-${sc.id}-s2-${optId}">
                    <input type="radio" name="${sc.id}-s2" value="${optId}" onchange="App.onSelectStep2('${sc.id}')">
                    <span>${opt.text}</span>
                  </label>
                `;
                })
                .join("")}
            </div>
            <div class="step-actions">
              <button class="btn btn-primary" id="btn-submit-${sc.id}-s2" onclick="App.submitStep2('${sc.id}')" disabled>Confirm Treatment</button>
              <button class="btn btn-secondary" onclick="App.retryScenario('${sc.id}')">Reset / Try Again</button>
            </div>
            <div class="feedback-box" id="feedback-${sc.id}-s2" style="display: none;"></div>
          </div>
        </div>
      `;
      })
      .join("");
  },

  onSelectStep1(scenarioId) {
    const btn = document.getElementById(`btn-submit-${scenarioId}-s1`);
    if (btn) btn.disabled = false;
  },

  onSelectStep2(scenarioId) {
    const btn = document.getElementById(`btn-submit-${scenarioId}-s2`);
    if (btn) btn.disabled = false;
  },

  submitStep1(scenarioId) {
    const modData = this.getActiveModuleData();
    if (!modData || !modData.scenarios) return;

    const scenario = modData.scenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedInput = document.querySelector(`input[name="${scenarioId}-s1"]:checked`);
    if (!selectedInput) return;

    const selectedVal = selectedInput.value;
    const selectedOption = scenario.step1.options.find((o, idx) => (o.id || `opt1_${idx}`) === selectedVal);
    if (!selectedOption) return;

    const feedbackBox = document.getElementById(`feedback-${scenarioId}-s1`);
    const submitBtn = document.getElementById(`btn-submit-${scenarioId}-s1`);
    const isCorrect = (selectedOption.correct === true || selectedOption.isCorrect === true);

    if (isCorrect) {
      // Correct diagnosis!
      document.querySelectorAll(`input[name="${scenarioId}-s1"]`).forEach((inp) => {
        inp.disabled = true;
      });
      if (submitBtn) submitBtn.disabled = true;

      const lbl = document.getElementById(`lbl-${scenarioId}-s1-${selectedVal}`);
      if (lbl) lbl.classList.add("correct-highlight");

      const rationaleText = selectedOption.rationale || scenario.step1.explanation || "Correct diagnosis identified.";
      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-success";
        feedbackBox.innerHTML = `
          <h4>✅ Correct Diagnosis!</h4>
          <p>${rationaleText}</p>
        `;
      }

      this.updateCardTracker(scenarioId);

      // Reveal Step 2
      const step2El = document.getElementById(`${scenarioId}-step2`);
      if (step2El) {
        step2El.style.display = "block";
        step2El.classList.remove("locked");
        step2El.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    } else {
      // Wrong guess: DO NOT reveal correct answer!
      const wrongLbl = document.getElementById(`lbl-${scenarioId}-s1-${selectedVal}`);
      if (wrongLbl) {
        wrongLbl.classList.add("incorrect-highlight");
        const radio = wrongLbl.querySelector("input[type='radio']");
        if (radio) {
          radio.disabled = true;
          radio.checked = false;
        }
      }

      if (submitBtn) submitBtn.disabled = true;

      // Track wrong guess in storage
      storageService.recordWrongGuess(this.currentModuleId, scenarioId, 1);
      this.updateGlobalProgressUI();
      this.updateCardTracker(scenarioId);

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-warning-guess";
        feedbackBox.innerHTML = `
          <h4>❌ Not quite — guess again!</h4>
          <p>That option does not fit the clinical presentation. Review the scenario details and choose another option.</p>
          ${scenario.step1.hint ? `<div class="hint-pill">💡 <strong>Helpful Hint:</strong> ${scenario.step1.hint}</div>` : ""}
        `;
      }
    }
  },

  submitStep2(scenarioId) {
    const modData = this.getActiveModuleData();
    if (!modData || !modData.scenarios) return;

    const scenario = modData.scenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedInput = document.querySelector(`input[name="${scenarioId}-s2"]:checked`);
    if (!selectedInput) return;

    const selectedVal = selectedInput.value;
    const selectedOption = scenario.step2.options.find((o, idx) => (o.id || `opt2_${idx}`) === selectedVal);
    if (!selectedOption) return;

    const feedbackBox = document.getElementById(`feedback-${scenarioId}-s2`);
    const submitBtn = document.getElementById(`btn-submit-${scenarioId}-s2`);
    const isCorrect = (selectedOption.correct === true || selectedOption.isCorrect === true);

    if (isCorrect) {
      // Correct treatment selection!
      document.querySelectorAll(`input[name="${scenarioId}-s2"]`).forEach((inp) => {
        inp.disabled = true;
      });
      if (submitBtn) submitBtn.disabled = true;

      const lbl = document.getElementById(`lbl-${scenarioId}-s2-${selectedVal}`);
      if (lbl) lbl.classList.add("correct-highlight");

      const rationaleText = selectedOption.rationale || scenario.step2.explanation || "Optimal evidence-based treatment approach confirmed.";
      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-success";
        feedbackBox.innerHTML = `
          <h4>✅ Correct Treatment Selection!</h4>
          <p>${rationaleText}</p>
        `;
      }

      const rec = storageService.getScenarioRecord(this.currentModuleId, scenarioId);
      const hadRetries = (rec.incorrectAttempts > 0);
      storageService.recordScenarioSuccess(this.currentModuleId, scenarioId, hadRetries);
      this.updateGlobalProgressUI();
      this.updateCardTracker(scenarioId);

    } else {
      // Wrong treatment guess: DO NOT reveal correct answer!
      const wrongLbl = document.getElementById(`lbl-${scenarioId}-s2-${selectedVal}`);
      if (wrongLbl) {
        wrongLbl.classList.add("incorrect-highlight");
        const radio = wrongLbl.querySelector("input[type='radio']");
        if (radio) {
          radio.disabled = true;
          radio.checked = false;
        }
      }

      if (submitBtn) submitBtn.disabled = true;

      // Track wrong guess in storage
      storageService.recordWrongGuess(this.currentModuleId, scenarioId, 2);
      this.updateGlobalProgressUI();
      this.updateCardTracker(scenarioId);

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-warning-guess";
        feedbackBox.innerHTML = `
          <h4>❌ Not quite — guess again!</h4>
          <p>That intervention is not the optimal evidence-based approach for this diagnosis. Consider what will specifically address the underlying core mechanisms.</p>
          ${scenario.step2.hint ? `<div class="hint-pill">💡 <strong>Helpful Hint:</strong> ${scenario.step2.hint}</div>` : ""}
        `;
      }
    }
  },

  updateCardTracker(scenarioId) {
    const cardEl = document.getElementById(`card-${scenarioId}`);
    if (!cardEl) return;
    const trackerBox = cardEl.querySelector(".attempt-tracker-box");
    if (!trackerBox) return;

    const updatedRecord = storageService.getScenarioRecord(this.currentModuleId, scenarioId);
    const passBadge = updatedRecord.lastResult === "PASS"
      ? `<span class="badge badge-success">Passed (${updatedRecord.lastScorePercent || 100}%)</span>`
      : updatedRecord.totalAttempts > 0
      ? `<span class="badge badge-warning">Attempts: ${updatedRecord.totalAttempts}</span>`
      : `<span class="badge badge-light">Not Attempted</span>`;

    trackerBox.innerHTML = `
      <div class="attempt-counts">
        <span>Attempts: <strong>${updatedRecord.totalAttempts}</strong></span>
        <span>Correct: <strong class="text-success">${updatedRecord.correctAttempts}</strong></span>
        <span>Incorrect: <strong class="text-danger">${updatedRecord.incorrectAttempts}</strong></span>
      </div>
      <div>${passBadge}</div>
    `;
  },

  retryScenario(scenarioId) {
    const cardEl = document.getElementById(`card-${scenarioId}`);
    if (!cardEl) return;

    cardEl.querySelectorAll('input[type="radio"]').forEach((r) => {
      r.checked = false;
      r.disabled = false;
    });

    cardEl.querySelectorAll(".option-label").forEach((lbl) => {
      lbl.classList.remove("correct-highlight", "incorrect-highlight");
    });

    const fb1 = document.getElementById(`feedback-${scenarioId}-s1`);
    if (fb1) fb1.style.display = "none";
    const fb2 = document.getElementById(`feedback-${scenarioId}-s2`);
    if (fb2) fb2.style.display = "none";

    const s2El = document.getElementById(`${scenarioId}-step2`);
    if (s2El) {
      s2El.style.display = "none";
      s2El.classList.add("locked");
    }

    const btn1 = document.getElementById(`btn-submit-${scenarioId}-s1`);
    if (btn1) btn1.disabled = true;
    const btn2 = document.getElementById(`btn-submit-${scenarioId}-s2`);
    if (btn2) btn2.disabled = true;

    cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
  },

  // -------------------------------------------------------------
  // Short Answer & Essay Practice
  // -------------------------------------------------------------
  renderShortAnswerAndEssay(modData = this.getActiveModuleData()) {
    this.renderShortAnswerQuestions(modData);
    this.renderEssaySection(modData);
  },

  renderShortAnswerQuestions(modData = this.getActiveModuleData()) {
    const container = document.getElementById("shortAnswerList");
    if (!container || !modData.shortAnswerAndEssay) return;

    const questions = modData.shortAnswerAndEssay.shortAnswerQuestions || [];
    container.innerHTML = questions
      .map((sa, idx) => {
        const saved = storageService.getShortAnswer(this.currentModuleId, sa.id);
        const criteriaList = sa.keyCriteria || sa.criteria || [];
        const promptText = (sa.prompt || sa.question || "").replace(/\n/g, '<br>');

        return `
        <div class="card short-answer-card" id="sa-card-${sa.id}">
          <div class="sa-header">
            <h4>${sa.title}</h4>
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              ${saved.selfScore ? `<span class="badge badge-success">Rated: ${saved.selfScore} / 5</span>` : ""}
              ${saved.aiFeedback?.gradeBand ? `<span class="ai-grade-badge ${this.getGradeBadgeClass(saved.aiFeedback.gradeBand)}" style="font-size: 12px; padding: 3px 10px;">AI Grade: ${saved.aiFeedback.score || (saved.aiFeedback.scoreOutOf5 + ' / 5')}</span>` : ""}
            </div>
          </div>
          <div class="sa-prompt">
            <p>${promptText}</p>
          </div>

          <div class="sa-response-box">
            <textarea id="ta-${sa.id}" class="form-control" rows="6" placeholder="Type your practice short-answer response here...">${saved.draft || ""}</textarea>
            <div class="sa-actions" style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
              <button class="btn btn-primary btn-sm" onclick="App.saveShortAnswerDraft('${sa.id}')">💾 Save Response</button>
              <button class="btn btn-ai-grade btn-sm" id="btn-ai-sa-${sa.id}" onclick="App.submitShortAnswerToGemini('${sa.id}')">✨ Grade with Gemini</button>
              <button class="btn btn-outline-primary btn-sm" onclick="App.toggleModelAnswer('${sa.id}')">👁️ Show Model Answer & Marking Criteria</button>
              <span id="save-status-${sa.id}" class="save-status text-muted"></span>
            </div>
          </div>

          <!-- AI Feedback Card (Dynamically shown) -->
          <div id="ai-feedback-sa-${sa.id}" class="ai-feedback-container" style="${saved.aiFeedback ? '' : 'display: none;'}">
            ${saved.aiFeedback ? this.renderSaqAiFeedbackContent(sa.id, saved.aiFeedback) : ''}
          </div>

          <!-- Collapsible Official Model Answer -->
          <div class="model-answer-box" id="model-${sa.id}" style="display: none;">
            <div class="criteria-section">
              <h5>Key Marking Points (Criteria Checklist):</h5>
              <ul>
                ${criteriaList.map((kc) => `<li>✔️ ${kc}</li>`).join("")}
              </ul>
            </div>
            <div class="model-text-section">
              <h5>Model Examiner Response:</h5>
              <div class="model-content">${sa.modelAnswer.replace(/\n\n/g, '<br><br>')}</div>
            </div>
            <div class="self-score-bar">
              <span><strong>Self-Rating:</strong> How well did you cover the criteria?</span>
              <div class="rating-buttons">
                ${[1, 2, 3, 4, 5]
                  .map(
                    (score) => `
                  <button class="rating-btn ${saved.selfScore === score ? 'active' : ''}" onclick="App.rateShortAnswer('${sa.id}', ${score})">${score} / 5</button>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  },

  saveShortAnswerDraft(saId) {
    const ta = document.getElementById(`ta-${saId}`);
    if (!ta) return;
    storageService.saveShortAnswer(this.currentModuleId, saId, ta.value);
    const statusEl = document.getElementById(`save-status-${saId}`);
    if (statusEl) {
      statusEl.textContent = "Saved to local storage at " + new Date().toLocaleTimeString();
      setTimeout(() => { statusEl.textContent = ""; }, 3000);
    }
  },

  toggleModelAnswer(saId) {
    const box = document.getElementById(`model-${saId}`);
    if (box) {
      box.style.display = box.style.display === "none" ? "block" : "none";
    }
  },

  rateShortAnswer(saId, score) {
    const ta = document.getElementById(`ta-${saId}`);
    const draftText = ta ? ta.value : "";
    storageService.saveShortAnswer(this.currentModuleId, saId, draftText, score);
    this.renderShortAnswerQuestions();
  },

  renderEssaySection(modData = this.getActiveModuleData()) {
    const container = document.getElementById("essaySectionContainer");
    if (!container || !modData.shortAnswerAndEssay) return;

    const essayData = modData.shortAnswerAndEssay.essayPrompt;
    if (!essayData) return;

    const saved = storageService.getEssay(this.currentModuleId);
    const rubricList = essayData.scoringRubric || essayData.rubricPillars || [];
    const outlineText = essayData.modelEssayOutline || (Array.isArray(essayData.modelOutline) ? essayData.modelOutline.join('\n\n') : essayData.modelOutline) || '';

    container.innerHTML = `
      <div class="card essay-card">
        <div class="essay-header">
          <h3>📝 ${essayData.title}</h3>
          <div class="essay-badges" style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            <span class="badge badge-primary">Target: ${essayData.suggestedWordCount}</span>
            ${essayData.timeAllowedMinutes ? `<span class="badge badge-secondary">Timed: ${essayData.timeAllowedMinutes} mins</span>` : ''}
            ${saved.aiFeedback?.gradeBand ? `<span class="ai-grade-badge ${this.getGradeBadgeClass(saved.aiFeedback.gradeBand)}" style="font-size: 12px; padding: 4px 12px;">AI Grade: ${saved.aiFeedback.estimatedScorePercent}% (${saved.aiFeedback.gradeBand})</span>` : ''}
          </div>
        </div>

        <div class="essay-prompt-box">
          <p class="essay-prompt-text">${essayData.prompt.replace(/\n/g, '<br>')}</p>
        </div>

        <div class="essay-editor-wrapper">
          <div class="editor-header-bar">
            <strong>Your Essay Practice Canvas:</strong>
            <span id="essayWordCount" class="badge badge-light">Word count: 0 words</span>
          </div>
          <textarea id="essayTextArea" class="form-control" rows="12" placeholder="Write your essay practice response here...">${saved.draft || ""}</textarea>
          <div class="essay-action-bar" style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
            <button class="btn btn-primary" onclick="App.saveEssayDraft()">💾 Save Essay Draft</button>
            <button class="btn btn-ai-grade" id="btn-ai-essay" onclick="App.submitEssayToGemini()">✨ Grade Essay with Gemini</button>
            <button class="btn btn-outline-primary" onclick="App.toggleEssayModel()">👁️ Toggle Model Essay Outline & Rubric</button>
            <span id="essaySaveStatus" class="save-status text-muted"></span>
          </div>
        </div>

        <!-- AI Feedback Card for Essay -->
        <div id="ai-feedback-essay" class="ai-feedback-container essay-ai-container" style="${saved.aiFeedback ? '' : 'display: none;'}">
          ${saved.aiFeedback ? this.renderEssayAiFeedbackContent(saved.aiFeedback) : ''}
        </div>

        <!-- Collapsible Model Essay & Rubric -->
        <div id="essayModelBox" class="essay-model-container" style="display: none;">
          <div class="rubric-section">
            <h4>Evaluation Rubric (Core Marking Criteria):</h4>
            <div class="rubric-grid">
              ${rubricList
                .map((r, idx) => {
                  const criterionName = r.criterion || r.name;
                  const indicatorText = r.indicators || r.description;
                  const weightBadge = r.weight ? `<span class="badge badge-light">${r.weight}</span> ` : '';
                  return `
                  <div class="card rubric-item-card">
                    <div class="rubric-title">
                      <label>
                        <input type="checkbox" id="rubric-chk-${idx}" ${saved.checkedRubric && saved.checkedRubric[idx] ? 'checked' : ''} onchange="App.onRubricCheck(${idx})">
                        <strong>${weightBadge}${criterionName}</strong>
                      </label>
                    </div>
                    <p class="rubric-indicators">${indicatorText}</p>
                  </div>
                `;
                })
                .join("")}
            </div>
          </div>

          <div class="model-essay-text-section">
            <h4>Model Essay Architecture & Key Content:</h4>
            <div class="model-outline-content">${outlineText.replace(/# /g, '<h3>').replace(/## /g, '<h4>').replace(/\n\n/g, '<br><br>')}</div>
          </div>
        </div>
      </div>
    `;

    // Word counter listener
    const ta = document.getElementById("essayTextArea");
    if (ta) {
      ta.addEventListener("input", () => {
        this.updateWordCount(ta.value);
      });
      this.updateWordCount(ta.value);
    }
  },

  updateWordCount(text) {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const count = text.trim().length === 0 ? 0 : words.length;
    const badge = document.getElementById("essayWordCount");
    if (badge) {
      badge.textContent = `Word count: ${count} words`;
    }
  },

  saveEssayDraft() {
    const ta = document.getElementById("essayTextArea");
    if (!ta) return;
    const currentEssay = storageService.getEssay(this.currentModuleId);
    storageService.saveEssay(this.currentModuleId, ta.value, currentEssay.checkedRubric || {});
    const statusEl = document.getElementById("essaySaveStatus");
    if (statusEl) {
      statusEl.textContent = "Saved to local storage at " + new Date().toLocaleTimeString();
      setTimeout(() => { statusEl.textContent = ""; }, 3000);
    }
  },

  toggleEssayModel() {
    const box = document.getElementById("essayModelBox");
    if (box) {
      box.style.display = box.style.display === "none" ? "block" : "none";
    }
  },

  onRubricCheck(idx) {
    const chk = document.getElementById(`rubric-chk-${idx}`);
    if (!chk) return;
    const currentEssay = storageService.getEssay(this.currentModuleId);
    const checked = currentEssay.checkedRubric || {};
    checked[idx] = chk.checked;
    const ta = document.getElementById("essayTextArea");
    storageService.saveEssay(this.currentModuleId, ta ? ta.value : "", checked);
  },

  // -------------------------------------------------------------
  // Gemini AI Written Grading Integration
  // -------------------------------------------------------------
  // Gemini AI Written Grading Integration
  // -------------------------------------------------------------
  _pendingAiCallback: null,

  updateGeminiStatusUI() {
    const hasKey = geminiService.hasApiKey();
    const pill = document.getElementById("geminiStatusPill");
    const pillText = document.getElementById("geminiStatusPillText");

    if (pill && pillText) {
      if (hasKey) {
        pill.className = "gemini-status-pill active";
        pillText.textContent = "✨ Gemini AI Ready";
        pill.title = "Google Gemini API Key is configured in cookies & local storage. Click to modify.";
      } else {
        pill.className = "gemini-status-pill inactive";
        pillText.textContent = "⚠️ Set Gemini Key";
        pill.title = "Click to enter your Google Gemini API Key to enable AI grading.";
      }
    }

    const currentKey = geminiService.getApiKey();
    const kInput = document.getElementById("geminiApiKeyInput");
    if (kInput && !kInput.value) kInput.value = currentKey;
    const qInput = document.getElementById("quickGeminiApiKeyInput");
    if (qInput && !qInput.value) qInput.value = currentKey;
    const mSelect = document.getElementById("geminiModelSelect");
    if (mSelect) mSelect.value = geminiService.getModel();
  },

  openQuickGeminiModal(onSuccessCallback) {
    this._pendingAiCallback = onSuccessCallback;
    const modal = document.getElementById("quickGeminiModal");
    if (modal) {
      modal.style.display = "flex";
      const input = document.getElementById("quickGeminiApiKeyInput");
      if (input) {
        input.value = geminiService.getApiKey() || "";
        setTimeout(() => input.focus(), 100);
      }
      const notice = document.getElementById("quickGeminiSaveNotice");
      if (notice) notice.style.display = "none";
    }
  },

  closeQuickGeminiModal() {
    const modal = document.getElementById("quickGeminiModal");
    if (modal) modal.style.display = "none";
    this._pendingAiCallback = null;
  },

  async testQuickApiKey() {
    const input = document.getElementById("quickGeminiApiKeyInput");
    const key = input ? input.value.trim() : "";
    const notice = document.getElementById("quickGeminiSaveNotice");
    const btn = document.getElementById("testQuickGeminiBtn");

    if (!key) {
      if (notice) {
        notice.style.display = "block";
        notice.style.background = "#fffbeb";
        notice.style.color = "#92400e";
        notice.style.border = "1px solid #fde68a";
        notice.innerHTML = "⚠️ Please paste or enter your Google Gemini API Key first.";
      }
      if (input) input.focus();
      return;
    }

    if (btn) {
      btn.disabled = true;
      btn.textContent = "Testing... ⏳";
    }
    if (notice) {
      notice.style.display = "block";
      notice.style.background = "#eff6ff";
      notice.style.color = "#1e40af";
      notice.style.border = "1px solid #bfdbfe";
      notice.innerHTML = "⏳ Verifying API key with Google Gemini...";
    }

    const res = await geminiService.testApiKey(key);

    if (btn) {
      btn.disabled = false;
      btn.textContent = "🧪 Test Key";
    }

    if (res.success) {
      if (notice) {
        notice.style.display = "block";
        notice.style.background = "#ecfdf5";
        notice.style.color = "#065f46";
        notice.style.border = "1px solid #a7f3d0";
        notice.innerHTML = `✅ <strong>Key Verified!</strong> Model <code>${res.model}</code> responded successfully. Click "Save & Continue Grading" to proceed.`;
      }
    } else {
      if (notice) {
        notice.style.display = "block";
        notice.style.background = "#fef2f2";
        notice.style.color = "#991b1b";
        notice.style.border = "1px solid #fecaca";
        notice.innerHTML = `❌ <strong>Verification Failed:</strong> ${res.error}`;
      }
    }
  },

  saveQuickGeminiKey() {
    const input = document.getElementById("quickGeminiApiKeyInput");
    const key = input ? input.value.trim() : "";
    if (!key) {
      alert("Please enter a valid Google Gemini API Key.");
      if (input) input.focus();
      return;
    }

    geminiService.setApiKey(key);
    if (typeof storageService !== "undefined" && storageService.saveGeminiApiKey) {
      storageService.saveGeminiApiKey(key);
    }
    this.updateGeminiStatusUI();

    const notice = document.getElementById("quickGeminiSaveNotice");
    if (notice) {
      notice.style.display = "block";
      notice.style.background = "#ecfdf5";
      notice.style.color = "#065f46";
      notice.style.border = "1px solid #a7f3d0";
      notice.innerHTML = "✅ <strong>API Key Saved!</strong> Initializing AI grading...";
    }
    this.showToast("✅ <strong>Gemini API Key Saved!</strong> Starting grading...", "success");

    const cb = this._pendingAiCallback;
    setTimeout(() => {
      this.closeQuickGeminiModal();
      if (cb && typeof cb === "function") {
        cb();
      }
    }, 450);
  },

  toggleGeminiKeyVisibility() {
    const input = document.getElementById("geminiApiKeyInput");
    const btn = document.getElementById("toggleGeminiKeyVisBtn");
    if (!input || !btn) return;
    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "🔒 Hide";
    } else {
      input.type = "password";
      btn.textContent = "👁️ Show";
    }
  },

  toggleQuickGeminiKeyVisibility() {
    const input = document.getElementById("quickGeminiApiKeyInput");
    const btn = document.getElementById("toggleQuickGeminiKeyVisBtn");
    if (!input || !btn) return;
    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "🔒 Hide";
    } else {
      input.type = "password";
      btn.textContent = "👁️ Show";
    }
  },

  async testSettingsApiKey() {
    const keyInput = document.getElementById("geminiApiKeyInput");
    const key = keyInput ? keyInput.value.trim() : "";
    const noticeEl = document.getElementById("geminiSaveNotice");
    const btn = document.getElementById("testGeminiConfigBtn");

    if (!key) {
      if (noticeEl) {
        noticeEl.style.display = "block";
        noticeEl.style.background = "#fffbeb";
        noticeEl.style.color = "#92400e";
        noticeEl.style.border = "1px solid #fde68a";
        noticeEl.innerHTML = "⚠️ Please paste or enter your Google Gemini API Key first.";
      }
      if (keyInput) keyInput.focus();
      return;
    }

    if (btn) {
      btn.disabled = true;
      btn.textContent = "Testing... ⏳";
    }
    if (noticeEl) {
      noticeEl.style.display = "block";
      noticeEl.style.background = "#eff6ff";
      noticeEl.style.color = "#1e40af";
      noticeEl.style.border = "1px solid #bfdbfe";
      noticeEl.innerHTML = "⏳ Connecting to Google Gemini API to verify key...";
    }

    const res = await geminiService.testApiKey(key);

    if (btn) {
      btn.disabled = false;
      btn.textContent = "🧪 Test Connection";
    }

    if (res.success) {
      if (noticeEl) {
        noticeEl.style.display = "block";
        noticeEl.style.background = "#ecfdf5";
        noticeEl.style.color = "#065f46";
        noticeEl.style.border = "1px solid #a7f3d0";
        noticeEl.innerHTML = `✅ <strong>Key Verified & Working!</strong> Successfully connected to <code>${res.model}</code>. Click "Save Gemini Key & Settings" to store it.`;
      }
    } else {
      if (noticeEl) {
        noticeEl.style.display = "block";
        noticeEl.style.background = "#fef2f2";
        noticeEl.style.color = "#991b1b";
        noticeEl.style.border = "1px solid #fecaca";
        noticeEl.innerHTML = `❌ <strong>Verification Failed:</strong> ${res.error}`;
      }
    }
  },

  saveGeminiConfig() {
    const keyInput = document.getElementById("geminiApiKeyInput");
    const modelSelect = document.getElementById("geminiModelSelect");
    const statusMsg = document.getElementById("geminiStatusMsg");
    const noticeEl = document.getElementById("geminiSaveNotice");

    const key = keyInput ? keyInput.value.trim() : "";
    const model = modelSelect ? modelSelect.value : "gemini-3.5-flash-lite";

    geminiService.setApiKey(key);
    geminiService.setModel(model);
    if (typeof storageService !== "undefined") {
      if (storageService.saveGeminiApiKey) storageService.saveGeminiApiKey(key);
      if (storageService.saveGeminiModel) storageService.saveGeminiModel(model);
    }

    this.updateGeminiStatusUI();

    if (key) {
      if (statusMsg) {
        statusMsg.className = "text-success font-weight-bold";
        statusMsg.textContent = "Saved to Cookies & Local Storage! ✅";
      }
      if (noticeEl) {
        noticeEl.style.display = "block";
        noticeEl.style.background = "#ecfdf5";
        noticeEl.style.color = "#065f46";
        noticeEl.style.border = "1px solid #a7f3d0";
        noticeEl.innerHTML = "✅ <strong>API Key Saved Successfully!</strong> Stored in persistent browser cookies and local storage. Your key will stay active even after refreshing the page.";
      }
      this.showToast("✅ <strong>Google Gemini API Key Saved!</strong> Stored in private browser storage.", "success");
      setTimeout(() => {
        this.closeSettingsModal();
      }, 900);
    } else {
      if (statusMsg) {
        statusMsg.className = "text-muted";
        statusMsg.textContent = "API key cleared.";
      }
      if (noticeEl) {
        noticeEl.style.display = "block";
        noticeEl.style.background = "#fffbeb";
        noticeEl.style.color = "#92400e";
        noticeEl.style.border = "1px solid #fde68a";
        noticeEl.innerHTML = "⚠️ API Key cleared. AI grading will be paused until a key is entered.";
      }
      this.showToast("⚠️ API Key cleared.", "info");
    }
  },

  getGradeBadgeClass(band) {
    const b = (band || "").toLowerCase();
    if (b.includes("high distinction") || b.includes("hd") || b.includes("excellent")) return "badge-hd";
    if (b.includes("distinction") || b.includes("proficient")) return "badge-d";
    if (b.includes("credit") || b.includes("competent")) return "badge-c";
    if (b.includes("pass") || b.includes("developing")) return "badge-p";
    if (b.includes("fail") || b.includes("unsatisfactory")) return "badge-f";
    return "badge-primary";
  },

  getCriteriaPillClass(status) {
    const s = (status || "").toLowerCase();
    if (s.includes("partially") || s.includes("partial") || s.includes("developing") || s.includes("competent")) return "partially-met";
    if (s.includes("miss") || s.includes("not") || s.includes("unsatisfactory")) return "missed";
    return "met";
  },

  async submitShortAnswerToGemini(saId) {
    const modData = this.getActiveModuleData();
    if (!modData || !modData.shortAnswerAndEssay) {
      alert("This module does not have written practice questions configured.");
      return;
    }

    const sa = modData.shortAnswerAndEssay.shortAnswerQuestions.find((q) => q.id === saId);
    if (!sa) {
      alert("Question not found: " + saId);
      return;
    }

    const ta = document.getElementById(`ta-${saId}`);
    const answerText = ta ? ta.value.trim() : "";

    if (!answerText) {
      alert("Please write your answer into the practice box before submitting for AI grading.");
      if (ta) {
        ta.focus();
        ta.classList.add("input-attention");
        setTimeout(() => ta.classList.remove("input-attention"), 1500);
      }
      return;
    }

    if (!geminiService.hasApiKey()) {
      this.openQuickGeminiModal(() => this.submitShortAnswerToGemini(saId));
      return;
    }

    // Save draft first
    this.saveShortAnswerDraft(saId);

    const submitBtn = document.getElementById(`btn-ai-sa-${saId}`);
    const feedbackBox = document.getElementById(`ai-feedback-sa-${saId}`);

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "✨ Grading... ⏳";
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="ai-loading-box">
          <div class="ai-spinner"></div>
          <div class="ai-loading-text">✨ Gemini is evaluating your clinical response against the official criteria...</div>
          <div class="ai-loading-subtext">Assessing diagnostic accuracy, criteria coverage, and evidence-based rationale</div>
        </div>
      `;
      feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    try {
      const criteriaList = sa.keyCriteria || sa.criteria || [];
      const questionPrompt = sa.prompt || sa.question || "";

      const result = await geminiService.evaluateShortAnswer({
        moduleTitle: modData.title,
        academicLead: modData.coordinator || modData.lecturer || "Course Coordinator",
        questionTitle: sa.title,
        questionPrompt: questionPrompt,
        criteriaList: criteriaList,
        modelAnswer: sa.modelAnswer,
        studentAnswer: answerText
      });

      // Save to storage
      storageService.saveShortAnswer(this.currentModuleId, saId, answerText, null, result);

      // Render feedback card
      if (feedbackBox) {
        feedbackBox.innerHTML = this.renderSaqAiFeedbackContent(saId, result);
      }

      // Update SAQ header badge if present
      const card = document.getElementById(`sa-card-${saId}`);
      if (card) {
        const headerBadgeWrap = card.querySelector(".sa-header div");
        if (headerBadgeWrap && result.gradeBand) {
          headerBadgeWrap.innerHTML = `
            ${storageService.getShortAnswer(this.currentModuleId, saId).selfScore ? `<span class="badge badge-success">Rated: ${storageService.getShortAnswer(this.currentModuleId, saId).selfScore} / 5</span>` : ""}
            <span class="ai-grade-badge ${this.getGradeBadgeClass(result.gradeBand)}" style="font-size: 12px; padding: 3px 10px;">AI Grade: ${result.score || (result.scoreOutOf5 + ' / 5')}</span>
          `;
        }
      }
    } catch (err) {
      console.error("Gemini evaluation error:", err);
      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div class="feedback-box feedback-warning-guess" style="margin: 0;">
            <h4>⚠️ AI Grading Notice</h4>
            <p>${err.message}</p>
            <div style="margin-top: 10px; display: flex; gap: 8px;">
              <button class="btn btn-secondary btn-sm" onclick="App.openSettingsModal()">⚙️ Check Gemini Settings</button>
              <button class="btn btn-primary btn-sm" onclick="App.submitShortAnswerToGemini('${saId}')">Try Again</button>
            </div>
          </div>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "✨ Grade with Gemini";
      }
    }
  },

  renderSaqAiFeedbackContent(saId, fb) {
    if (!fb) return "";
    const scoreText = fb.score || (fb.scoreOutOf5 !== undefined ? `${fb.scoreOutOf5} / 5` : "Evaluated");
    const gradeBand = fb.gradeBand || "Assessed";
    const badgeClass = this.getGradeBadgeClass(gradeBand);

    return `
      <div class="ai-feedback-header">
        <div class="ai-title-wrap">
          <span class="ai-sparkle-icon">✨</span>
          <div>
            <h4>Gemini Clinical Assessment</h4>
            <span class="text-muted" style="font-size: 12px;">Evaluated against official marking rubric checklist</span>
          </div>
        </div>
        <div class="ai-grade-badge ${badgeClass}">
          Score: <strong>${scoreText}</strong> &bull; ${gradeBand}
        </div>
      </div>

      <div class="ai-summary-box">
        <strong>Executive Assessment:</strong> ${fb.summary || "Response evaluated against clinical criteria."}
      </div>

      ${fb.criteriaAssessment && fb.criteriaAssessment.length > 0 ? `
        <div class="ai-section-heading">📋 Official Marking Points Evaluation</div>
        <div class="ai-criteria-list">
          ${fb.criteriaAssessment.map((c) => `
            <div class="ai-criteria-item">
              <div class="ai-crit-top">
                <span class="ai-crit-name">${c.criterion}</span>
                <span class="ai-status-pill ${this.getCriteriaPillClass(c.status)}">${c.status}</span>
              </div>
              <div class="ai-crit-comment">${c.feedback}</div>
            </div>
          `).join("")}
        </div>
      ` : ""}

      <div class="ai-feedback-columns">
        <div class="ai-column-card strengths">
          <h5 class="text-success">✅ Clinical Strengths</h5>
          <ul>
            ${(fb.strengths && fb.strengths.length > 0 ? fb.strengths : ["Clear articulation of clinical details."]).map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>
        <div class="ai-column-card improvements">
          <h5 style="color: #d97706;">🎯 Actionable Exam Improvements</h5>
          <ul>
            ${(fb.areasForImprovement && fb.areasForImprovement.length > 0 ? fb.areasForImprovement : ["Review the model answer for subtle differential distinctions."]).map((i) => `<li>${i}</li>`).join("")}
          </ul>
        </div>
      </div>

      ${fb.examinerTip ? `
        <div class="ai-tip-box">
          <span style="font-size: 18px;">💡</span>
          <div><strong>Examiner's Tip for Timed Exam:</strong> ${fb.examinerTip}</div>
        </div>
      ` : ""}

      <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px;">
        <button class="btn btn-outline-primary btn-sm" onclick="App.clearSaqAiFeedback('${saId}')">Clear AI Feedback</button>
        <button class="btn btn-ai-grade btn-sm" onclick="App.submitShortAnswerToGemini('${saId}')">🔄 Regrade Response</button>
      </div>
    `;
  },

  clearSaqAiFeedback(saId) {
    const ta = document.getElementById(`ta-${saId}`);
    const draftText = ta ? ta.value : "";
    const saved = storageService.getShortAnswer(this.currentModuleId, saId);
    storageService.saveShortAnswer(this.currentModuleId, saId, draftText, saved.selfScore, null);
    const box = document.getElementById(`ai-feedback-sa-${saId}`);
    if (box) {
      box.style.display = "none";
      box.innerHTML = "";
    }
    this.renderShortAnswerQuestions();
  },

  async submitEssayToGemini() {
    const modData = this.getActiveModuleData();
    if (!modData || !modData.shortAnswerAndEssay) return;

    const essayData = modData.shortAnswerAndEssay.essayPrompt;
    if (!essayData) return;

    const ta = document.getElementById("essayTextArea");
    const essayText = ta ? ta.value.trim() : "";

    if (!essayText) {
      alert("Please write your essay into the practice canvas before submitting for AI grading.");
      if (ta) ta.focus();
      return;
    }

    if (!geminiService.hasApiKey()) {
      this.openQuickGeminiModal(() => this.submitEssayToGemini());
      return;
    }

    // Save draft first
    this.saveEssayDraft();

    const submitBtn = document.getElementById("btn-ai-essay");
    const feedbackBox = document.getElementById("ai-feedback-essay");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "✨ Grading Full Essay... ⏳";
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="ai-loading-box">
          <div class="ai-spinner"></div>
          <div class="ai-loading-text">✨ Gemini is evaluating your essay across all 4 rubric pillars...</div>
          <div class="ai-loading-subtext">Reviewing theoretical synthesis, diagnostic formulation, clinical interventions, and critical reflection</div>
        </div>
      `;
      feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    try {
      const rubricPillars = essayData.scoringRubric || essayData.rubricPillars || [];
      const outlineText = essayData.modelEssayOutline || (Array.isArray(essayData.modelOutline) ? essayData.modelOutline.join('\n\n') : essayData.modelOutline) || '';

      const result = await geminiService.evaluateEssay({
        moduleTitle: modData.title,
        academicLead: modData.coordinator || modData.lecturer || "Course Coordinator",
        essayTitle: essayData.title,
        essayPrompt: essayData.prompt,
        suggestedWordCount: essayData.suggestedWordCount,
        rubricPillars: rubricPillars,
        modelOutline: outlineText,
        studentAnswer: essayText
      });

      // Save to storage
      const currentEssay = storageService.getEssay(this.currentModuleId);
      storageService.saveEssay(this.currentModuleId, essayText, currentEssay.checkedRubric, result);

      // Render feedback card
      if (feedbackBox) {
        feedbackBox.innerHTML = this.renderEssayAiFeedbackContent(result);
      }

      // Update essay header badge
      const headerBadges = document.querySelector(".essay-badges");
      if (headerBadges && result.gradeBand) {
        headerBadges.innerHTML = `
          <span class="badge badge-primary">Target: ${essayData.suggestedWordCount}</span>
          ${essayData.timeAllowedMinutes ? `<span class="badge badge-secondary">Timed: ${essayData.timeAllowedMinutes} mins</span>` : ''}
          <span class="ai-grade-badge ${this.getGradeBadgeClass(result.gradeBand)}" style="font-size: 12px; padding: 4px 12px;">AI Grade: ${result.estimatedScorePercent}% (${result.gradeBand})</span>
        `;
      }
    } catch (err) {
      console.error("Gemini essay evaluation error:", err);
      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div class="feedback-box feedback-warning-guess" style="margin: 0;">
            <h4>⚠️ Essay AI Grading Notice</h4>
            <p>${err.message}</p>
            <div style="margin-top: 10px; display: flex; gap: 8px;">
              <button class="btn btn-secondary btn-sm" onclick="App.openSettingsModal()">⚙️ Check Gemini Settings</button>
              <button class="btn btn-primary btn-sm" onclick="App.submitEssayToGemini()">Try Again</button>
            </div>
          </div>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "✨ Grade Essay with Gemini";
      }
    }
  },

  renderEssayAiFeedbackContent(fb) {
    if (!fb) return "";
    const scorePct = fb.estimatedScorePercent !== undefined ? `${fb.estimatedScorePercent}%` : "Evaluated";
    const gradeBand = fb.gradeBand || "Assessed";
    const badgeClass = this.getGradeBadgeClass(gradeBand);

    return `
      <div class="ai-feedback-header">
        <div class="ai-title-wrap">
          <span class="ai-sparkle-icon">✨</span>
          <div>
            <h4>Gemini Comprehensive Essay Assessment</h4>
            <span class="text-muted" style="font-size: 12px;">Assessed across 4 core marking rubric pillars &bull; ${fb.wordCountAssessed || 'Standard'} words</span>
          </div>
        </div>
        <div class="ai-grade-badge ${badgeClass}">
          Grade: <strong>${scorePct}</strong> &bull; ${gradeBand}
        </div>
      </div>

      <div class="ai-summary-box">
        <strong>Lead Examiner Verdict:</strong> ${fb.overallVerdict || "Comprehensive review completed."}
      </div>

      ${fb.rubricAssessment && fb.rubricAssessment.length > 0 ? `
        <div class="ai-section-heading">🏛️ 4-Pillar Marking Rubric Assessment</div>
        <div class="essay-rubric-eval-grid">
          ${fb.rubricAssessment.map((r) => `
            <div class="essay-rubric-eval-card">
              <div class="essay-rubric-eval-header">
                <span class="essay-pillar-name">${r.pillar} ${r.weight ? '(' + r.weight + ')' : ''}</span>
                <span class="ai-status-pill ${this.getCriteriaPillClass(r.rating)}">${r.rating}</span>
              </div>
              <p class="ai-crit-comment">${r.feedback}</p>
            </div>
          `).join("")}
        </div>
      ` : ""}

      <div class="ai-feedback-columns">
        <div class="ai-column-card strengths">
          <h5 class="text-success">✅ Essay Strengths & Academic Rigor</h5>
          <ul>
            ${(fb.keyStrengths && fb.keyStrengths.length > 0 ? fb.keyStrengths : ["Well-structured clinical discussion."]).map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>
        <div class="ai-column-card improvements">
          <h5 style="color: #d97706;">🎯 High-Yield Exam Improvements</h5>
          <ul>
            ${(fb.highYieldImprovements && fb.highYieldImprovements.length > 0 ? fb.highYieldImprovements : ["Integrate more explicit theoretical mechanisms."]).map((i) => `<li>${i}</li>`).join("")}
          </ul>
        </div>
      </div>

      ${fb.examSynthesisAdvice ? `
        <div class="ai-tip-box">
          <span style="font-size: 18px;">💡</span>
          <div><strong>Exam Synthesis Advice:</strong> ${fb.examSynthesisAdvice}</div>
        </div>
      ` : ""}

      <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px;">
        <button class="btn btn-outline-primary btn-sm" onclick="App.clearEssayAiFeedback()">Clear AI Feedback</button>
        <button class="btn btn-ai-grade btn-sm" onclick="App.submitEssayToGemini()">🔄 Regrade Essay</button>
      </div>
    `;
  },

  clearEssayAiFeedback() {
    const ta = document.getElementById("essayTextArea");
    const currentEssay = storageService.getEssay(this.currentModuleId);
    storageService.saveEssay(this.currentModuleId, ta ? ta.value : "", currentEssay.checkedRubric, null);
    const box = document.getElementById("ai-feedback-essay");
    if (box) {
      box.style.display = "none";
      box.innerHTML = "";
    }
    this.renderEssaySection();
  },

  // -------------------------------------------------------------
  // Progress Bar & Global UI
  // -------------------------------------------------------------
  updateGlobalProgressUI() {
    const modData = this.getActiveModuleData();
    const stats = storageService.getModuleStats(this.currentModuleId);
    const totalScenarios = (modData && modData.scenarios) ? modData.scenarios.length : 0;

    const accuracyEl = document.getElementById("statAccuracy");
    const masteredEl = document.getElementById("statMastered");
    const totalAttemptsEl = document.getElementById("statAttempts");
    const progressBar = document.getElementById("moduleProgressBar");

    if (accuracyEl) accuracyEl.textContent = `${stats.accuracyPercent}%`;
    if (masteredEl) masteredEl.textContent = `${stats.masteredCount} / ${totalScenarios}`;
    if (totalAttemptsEl) totalAttemptsEl.textContent = `${stats.totalAttempts}`;

    if (progressBar) {
      const pct = totalScenarios > 0 ? Math.round((stats.masteredCount / totalScenarios) * 100) : 0;
      progressBar.style.width = `${pct}%`;
      progressBar.setAttribute("aria-valuenow", pct);
    }
  },

  // -------------------------------------------------------------
  // Settings & Firebase Modal
  // -------------------------------------------------------------
  setupEventListeners() {
    const settingsBtn = document.getElementById("openSettingsBtn");
    if (settingsBtn) {
      settingsBtn.addEventListener("click", () => this.openSettingsModal());
    }

    const closeSettingsBtn = document.getElementById("closeSettingsModal");
    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener("click", () => this.closeSettingsModal());
    }

    // Gemini Settings Listeners
    const saveGeminiBtn = document.getElementById("saveGeminiConfigBtn");
    if (saveGeminiBtn) {
      saveGeminiBtn.addEventListener("click", () => this.saveGeminiConfig());
    }

    const testGeminiBtn = document.getElementById("testGeminiConfigBtn");
    if (testGeminiBtn) {
      testGeminiBtn.addEventListener("click", () => this.testSettingsApiKey());
    }

    const toggleGeminiVisBtn = document.getElementById("toggleGeminiKeyVisBtn");
    if (toggleGeminiVisBtn) {
      toggleGeminiVisBtn.addEventListener("click", () => this.toggleGeminiKeyVisibility());
    }

    const geminiKeyInput = document.getElementById("geminiApiKeyInput");
    if (geminiKeyInput) {
      geminiKeyInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.saveGeminiConfig();
        }
      });
      geminiKeyInput.addEventListener("input", (e) => {
        const val = (e.target.value || "").trim();
        const noticeEl = document.getElementById("geminiSaveNotice");
        if (val.length >= 20 && noticeEl) {
          noticeEl.style.display = "block";
          noticeEl.style.background = "#eff6ff";
          noticeEl.style.color = "#1e40af";
          noticeEl.style.border = "1px solid #bfdbfe";
          noticeEl.innerHTML = "🔑 <strong>API Key entered:</strong> Press <em>Enter</em>, click <em>🧪 Test Connection</em> to verify, or click <em>Save Gemini Key</em> to store.";
        }
      });
    }

    // Quick Gemini Modal Listeners
    const closeQuickModalBtn = document.getElementById("closeQuickGeminiModal");
    if (closeQuickModalBtn) {
      closeQuickModalBtn.addEventListener("click", () => this.closeQuickGeminiModal());
    }

    const cancelQuickModalBtn = document.getElementById("cancelQuickGeminiBtn");
    if (cancelQuickModalBtn) {
      cancelQuickModalBtn.addEventListener("click", () => this.closeQuickGeminiModal());
    }

    const testQuickModalBtn = document.getElementById("testQuickGeminiBtn");
    if (testQuickModalBtn) {
      testQuickModalBtn.addEventListener("click", () => this.testQuickApiKey());
    }

    const toggleQuickVisBtn = document.getElementById("toggleQuickGeminiKeyVisBtn");
    if (toggleQuickVisBtn) {
      toggleQuickVisBtn.addEventListener("click", () => this.toggleQuickGeminiKeyVisibility());
    }

    const saveQuickModalBtn = document.getElementById("saveQuickGeminiBtn");
    if (saveQuickModalBtn) {
      saveQuickModalBtn.addEventListener("click", () => this.saveQuickGeminiKey());
    }

    const quickKeyInput = document.getElementById("quickGeminiApiKeyInput");
    if (quickKeyInput) {
      quickKeyInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.saveQuickGeminiKey();
        }
      });
      quickKeyInput.addEventListener("input", (e) => {
        const val = (e.target.value || "").trim();
        const notice = document.getElementById("quickGeminiSaveNotice");
        if (val.length >= 20 && notice) {
          notice.style.display = "block";
          notice.style.background = "#eff6ff";
          notice.style.color = "#1e40af";
          notice.style.border = "1px solid #bfdbfe";
          notice.innerHTML = "🔑 <strong>API Key entered:</strong> Press <em>Enter</em>, click <em>🧪 Test Key</em>, or click <em>Save & Continue Grading</em>.";
        }
      });
    }

    const exportBtn = document.getElementById("exportDataBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportData());
    }

    const importInput = document.getElementById("importFileInput");
    if (importInput) {
      importInput.addEventListener("change", (e) => this.importData(e));
    }

    const resetBtn = document.getElementById("resetDataBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.resetData());
    }

    const saveFirebaseBtn = document.getElementById("saveFirebaseConfigBtn");
    if (saveFirebaseBtn) {
      saveFirebaseBtn.addEventListener("click", () => this.saveFirebaseConfig());
    }
  },

  openSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (!modal) return;
    modal.style.display = "flex";

    this.updateGeminiStatusUI();

    const noticeEl = document.getElementById("geminiSaveNotice");
    if (noticeEl) noticeEl.style.display = "none";
    const statusMsg = document.getElementById("geminiStatusMsg");
    if (statusMsg) statusMsg.textContent = "";

    // Populate Firebase Settings
    const conf = storageService.data.settings.firebaseConfig;
    if (conf) {
      document.getElementById("fbApiKey").value = conf.apiKey || "";
      document.getElementById("fbAuthDomain").value = conf.authDomain || "";
      document.getElementById("fbProjectId").value = conf.projectId || "";
      document.getElementById("fbStorageBucket").value = conf.storageBucket || "";
      document.getElementById("fbMessagingSenderId").value = conf.messagingSenderId || "";
      document.getElementById("fbAppId").value = conf.appId || "";
    }
  },

  closeSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (modal) modal.style.display = "none";
  },

  async saveFirebaseConfig() {
    const apiKey = document.getElementById("fbApiKey").value.trim();
    const authDomain = document.getElementById("fbAuthDomain").value.trim();
    const projectId = document.getElementById("fbProjectId").value.trim();
    const storageBucket = document.getElementById("fbStorageBucket").value.trim();
    const messagingSenderId = document.getElementById("fbMessagingSenderId").value.trim();
    const appId = document.getElementById("fbAppId").value.trim();

    const statusEl = document.getElementById("firebaseStatusMsg");

    if (!apiKey || !projectId) {
      if (statusEl) {
        statusEl.className = "text-danger";
        statusEl.textContent = "API Key and Project ID are required.";
      }
      return;
    }

    const config = {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId
    };

    if (statusEl) {
      statusEl.className = "text-info";
      statusEl.textContent = "Connecting to Google Firebase...";
    }

    try {
      await storageService.initFirebase(config);
      if (statusEl) {
        statusEl.className = "text-success";
        statusEl.textContent = "Connected & Synced with Firebase Firestore!";
      }
      setTimeout(() => this.closeSettingsModal(), 1800);
    } catch (e) {
      if (statusEl) {
        statusEl.className = "text-danger";
        statusEl.textContent = "Connection failed: " + e.message;
      }
    }
  },

  exportData() {
    const jsonStr = storageService.exportDataJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lifespan_psych_study_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        storageService.importDataJSON(e.target.result);
        alert("Study progress successfully imported!");
        window.location.reload();
      } catch (err) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);
  },

  resetData() {
    if (confirm("Are you sure you want to reset all quiz attempts and practice drafts? This cannot be undone.")) {
      storageService.resetAllData();
      alert("All progress reset.");
      window.location.reload();
    }
  }
};

window.App = App;
