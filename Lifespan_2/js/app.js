// Main application controller for Lifespan Psychology Study Companion

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  currentModuleId: 3,
  currentSubTab: "review", // "review", "differential", "quiz", "shortanswer"
  selectedDifferentialIds: ["RAD", "DSED"],

  init() {
    this.renderTopNav();
    this.setupEventListeners();
    this.renderActiveModule();
    this.updateGlobalProgressUI();
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
    this.renderTopNav();
    this.renderActiveModule();
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

    if (this.currentModuleId === 3) {
      if (moduleContainer) moduleContainer.style.display = "block";
      if (previewContainer) previewContainer.style.display = "none";
      this.renderModule3();
    } else {
      if (moduleContainer) moduleContainer.style.display = "none";
      if (previewContainer) previewContainer.style.display = "block";
      this.renderPreviewModule(this.currentModuleId);
    }
  },

  renderPreviewModule(moduleId) {
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
        <div class="prototype-notice-box">
          <span class="notice-badge">Prototype Note</span>
          <p><strong>Module 3 (Attachment Across the Lifespan)</strong> is currently prioritized and fully interactive with interactive diagnostic tables, contrastive differential diagnosis, scenario quizzes, and essay rubrics. This module follows the exact same clinical architecture.</p>
          <button class="btn btn-primary" onclick="App.switchModule(3)">Jump to Active Module 3 (Attachment)</button>
        </div>
        <div class="preview-details-grid">
          <div class="preview-box">
            <h3>Key Concepts & Theories</h3>
            <p>${mod.coreConcepts}</p>
          </div>
          <div class="preview-box">
            <h3>Disorders Covered</h3>
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
  // Module 3 Rendering
  // -------------------------------------------------------------
  renderModule3() {
    this.renderTheoreticalPillars();
    this.renderDisorderTable();
    this.renderDifferentialTool();
    this.renderScenarioQuizzes();
    this.renderShortAnswerAndEssay();
  },

  renderTheoreticalPillars() {
    const container = document.getElementById("theoreticalPillarsContainer");
    if (!container) return;
    container.innerHTML = MODULE_3_DATA.theoreticalPillars
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

  renderDisorderTable() {
    const tbody = document.getElementById("disordersTableBody");
    if (!tbody) return;

    tbody.innerHTML = MODULE_3_DATA.disorders
      .map((d) => {
        return `
        <tr>
          <td>
            <div class="disorder-name-cell">
              <strong>${d.name}</strong>
              <span class="badge ${d.type.includes('Formal') ? 'badge-primary' : 'badge-secondary'}">${d.type}</span>
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
  renderDifferentialTool() {
    const checkboxesContainer = document.getElementById("diffDisordersList");
    if (!checkboxesContainer) return;

    checkboxesContainer.innerHTML = MODULE_3_DATA.disorders
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

    this.updateDifferentialOutput();
  },

  onDifferentialToggle(disorderId) {
    if (this.selectedDifferentialIds.includes(disorderId)) {
      this.selectedDifferentialIds = this.selectedDifferentialIds.filter((id) => id !== disorderId);
    } else {
      this.selectedDifferentialIds.push(disorderId);
    }
    this.renderDifferentialTool();
  },

  setDifferentialPreset(presetName) {
    if (presetName === "RAD_DSED") {
      this.selectedDifferentialIds = ["RAD", "DSED"];
    } else if (presetName === "AVOIDANT_AMBIVALENT") {
      this.selectedDifferentialIds = ["AVOIDANT", "AMBIVALENT"];
    } else if (presetName === "RAD_DISORGANIZED") {
      this.selectedDifferentialIds = ["RAD", "DISORGANIZED"];
    } else if (presetName === "ALL_INSECURE") {
      this.selectedDifferentialIds = ["AVOIDANT", "AMBIVALENT", "DISORGANIZED"];
    } else if (presetName === "ALL_SIX") {
      this.selectedDifferentialIds = ["RAD", "DSED", "SECURE", "AVOIDANT", "AMBIVALENT", "DISORGANIZED"];
    } else if (presetName === "CLEAR_ALL") {
      this.selectedDifferentialIds = [];
    }
    this.renderDifferentialTool();
  },

  updateDifferentialOutput() {
    const outputContainer = document.getElementById("differentialOutput");
    if (!outputContainer) return;

    const selectedDisorders = MODULE_3_DATA.disorders.filter((d) =>
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
              <span class="badge ${d.type.includes('Formal') ? 'badge-primary' : 'badge-secondary'}">${d.type}</span>
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
    const precomputed = selectedDisorders.length === 2 && (MODULE_3_DATA.differentialMatrix[keyPair1] || MODULE_3_DATA.differentialMatrix[keyPair2]);

    if (precomputed) {
      const pm = precomputed;
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
              <p>${pm.ruleInRuleOut.ruleInRAD || pm.ruleInRuleOut.ruleInAvoidant}</p>
            </div>
            <div class="rule-box rule-box-b">
              <h4>Rule In: ${selectedDisorders[1].name}</h4>
              <p>${pm.ruleInRuleOut.ruleInDSED || pm.ruleInRuleOut.ruleInAmbivalent || pm.ruleInRuleOut.ruleInDisorganized}</p>
            </div>
            <div class="rule-box rule-box-pitfall">
              <h4>⚠️ Key Diagnostic Pitfall to Avoid</h4>
              <p>${pm.ruleInRuleOut.pitfallToAvoid}</p>
            </div>
          </div>

          <div class="diff-section-title">3. Divergent Treatment Pathways (How treatment differs)</div>
          <div class="tx-compare-grid">
            <div class="tx-box tx-box-a">
              <h4>${pm.contrastingTreatments.treatmentA_Name}</h4>
              <p>${pm.contrastingTreatments.treatmentA_Steps}</p>
            </div>
            <div class="tx-box tx-box-b">
              <h4>${pm.contrastingTreatments.treatmentB_Name}</h4>
              <p>${pm.contrastingTreatments.treatmentB_Steps}</p>
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
                <th style="width: 25%;">Core Affect Regulation</th>
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
                  <td>${d.factorsLookedFor[0] || 'N/A'}</td>
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
              <p>💡 <em>${d.clinicalPearl}</em></p>
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
  renderScenarioQuizzes() {
    const container = document.getElementById("scenariosContainer");
    if (!container) return;

    container.innerHTML = MODULE_3_DATA.scenarios
      .map((sc, idx) => {
        const record = storageService.getScenarioRecord(3, sc.id);
        const passBadge = record.lastResult === "PASS"
          ? `<span class="badge badge-success">Passed (${record.lastScorePercent}%)</span>`
          : record.totalAttempts > 0
          ? `<span class="badge badge-warning">Retry Needed</span>`
          : `<span class="badge badge-light">Not Attempted</span>`;

        return `
        <div class="card scenario-card" id="card-${sc.id}">
          <div class="scenario-header">
            <div>
              <span class="age-badge">${sc.ageGroup}</span>
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
            <p><strong>Clinical Vignette:</strong> ${sc.vignette}</p>
          </div>

          <!-- Step 1: Diagnose -->
          <div class="quiz-step" id="${sc.id}-step1">
            <div class="step-badge">Step 1 of 2: Diagnose the Case</div>
            <div class="step-prompt">${sc.step1.prompt}</div>
            <div class="options-list">
              ${sc.step1.options
                .map(
                  (opt) => `
                <label class="option-label" id="lbl-${sc.id}-s1-${opt.id}">
                  <input type="radio" name="${sc.id}-s1" value="${opt.id}" onchange="App.onSelectStep1('${sc.id}')">
                  <span>${opt.text}</span>
                </label>
              `
                )
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
                .map(
                  (opt) => `
                <label class="option-label" id="lbl-${sc.id}-s2-${opt.id}">
                  <input type="radio" name="${sc.id}-s2" value="${opt.id}" onchange="App.onSelectStep2('${sc.id}')">
                  <span>${opt.text}</span>
                </label>
              `
                )
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
    const scenario = MODULE_3_DATA.scenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedInput = document.querySelector(`input[name="${scenarioId}-s1"]:checked`);
    if (!selectedInput) return;

    const selectedOption = scenario.step1.options.find((o) => o.id === selectedInput.value);
    const feedbackBox = document.getElementById(`feedback-${scenarioId}-s1`);
    const submitBtn = document.getElementById(`btn-submit-${scenarioId}-s1`);

    if (selectedOption.correct) {
      // Correct diagnosis!
      // Disable all inputs in Step 1
      document.querySelectorAll(`input[name="${scenarioId}-s1"]`).forEach((inp) => {
        inp.disabled = true;
      });
      if (submitBtn) submitBtn.disabled = true;

      // Highlight the correct option in green
      const lbl = document.getElementById(`lbl-${scenarioId}-s1-${selectedOption.id}`);
      if (lbl) lbl.classList.add("correct-highlight");

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-success";
        feedbackBox.innerHTML = `
          <h4>✅ Correct Diagnosis!</h4>
          <p>${selectedOption.rationale}</p>
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
      // Wrong guess: DO NOT reveal what the correct answer is!
      // Highlight and disable only the wrong option chosen
      const wrongLbl = document.getElementById(`lbl-${scenarioId}-s1-${selectedOption.id}`);
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
      storageService.recordWrongGuess(3, scenarioId, 1);
      this.updateGlobalProgressUI();
      this.updateCardTracker(scenarioId);

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-warning-guess";
        feedbackBox.innerHTML = `
          <h4>❌ Not quite — guess again!</h4>
          <p>That option doesn't fit the clinical presentation. Review the scenario details and choose another option.</p>
          ${scenario.step1.hint ? `<div class="hint-pill">💡 <strong>Helpful Hint:</strong> ${scenario.step1.hint}</div>` : ""}
        `;
      }
    }
  },

  submitStep2(scenarioId) {
    const scenario = MODULE_3_DATA.scenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedInput = document.querySelector(`input[name="${scenarioId}-s2"]:checked`);
    if (!selectedInput) return;

    const selectedOption = scenario.step2.options.find((o) => o.id === selectedInput.value);
    const feedbackBox = document.getElementById(`feedback-${scenarioId}-s2`);
    const submitBtn = document.getElementById(`btn-submit-${scenarioId}-s2`);

    if (selectedOption.correct) {
      // Correct treatment selection!
      // Disable all inputs in Step 2
      document.querySelectorAll(`input[name="${scenarioId}-s2"]`).forEach((inp) => {
        inp.disabled = true;
      });
      if (submitBtn) submitBtn.disabled = true;

      // Highlight the correct option in green
      const lbl = document.getElementById(`lbl-${scenarioId}-s2-${selectedOption.id}`);
      if (lbl) lbl.classList.add("correct-highlight");

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-success";
        feedbackBox.innerHTML = `
          <h4>✅ Correct Treatment Selection!</h4>
          <p>${selectedOption.rationale}</p>
        `;
      }

      // Record scenario completion in storage
      const rec = storageService.getScenarioRecord(3, scenarioId);
      const hadRetries = (rec.incorrectAttempts > 0);
      storageService.recordScenarioSuccess(3, scenarioId, hadRetries);
      this.updateGlobalProgressUI();
      this.updateCardTracker(scenarioId);

    } else {
      // Wrong treatment guess: DO NOT reveal what the correct answer is!
      const wrongLbl = document.getElementById(`lbl-${scenarioId}-s2-${selectedOption.id}`);
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
      storageService.recordWrongGuess(3, scenarioId, 2);
      this.updateGlobalProgressUI();
      this.updateCardTracker(scenarioId);

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box feedback-warning-guess";
        feedbackBox.innerHTML = `
          <h4>❌ Not quite — guess again!</h4>
          <p>That intervention is not the optimal evidence-based approach for this diagnosis. Consider what will specifically address the core attachment difficulty.</p>
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

    const updatedRecord = storageService.getScenarioRecord(3, scenarioId);
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

    // Reset radio buttons
    cardEl.querySelectorAll('input[type="radio"]').forEach((r) => {
      r.checked = false;
      r.disabled = false;
    });

    // Reset highlights
    cardEl.querySelectorAll(".option-label").forEach((lbl) => {
      lbl.classList.remove("correct-highlight", "incorrect-highlight");
    });

    // Hide feedback
    const fb1 = document.getElementById(`feedback-${scenarioId}-s1`);
    const fb2 = document.getElementById(`feedback-${scenarioId}-s2`);
    if (fb1) { fb1.style.display = "none"; fb1.innerHTML = ""; }
    if (fb2) { fb2.style.display = "none"; fb2.innerHTML = ""; }

    // Reset buttons
    const btn1 = document.getElementById(`btn-submit-${scenarioId}-s1`);
    const btn2 = document.getElementById(`btn-submit-${scenarioId}-s2`);
    if (btn1) btn1.disabled = true;
    if (btn2) btn2.disabled = true;

    // Hide Step 2
    const step2El = document.getElementById(`${scenarioId}-step2`);
    if (step2El) {
      step2El.style.display = "none";
      step2El.classList.add("locked");
    }
  },

  // -------------------------------------------------------------
  // Short Answer & Essay Practice
  // -------------------------------------------------------------
  renderShortAnswerAndEssay() {
    this.renderShortAnswerQuestions();
    this.renderEssaySection();
  },

  renderShortAnswerQuestions() {
    const container = document.getElementById("shortAnswerList");
    if (!container) return;

    container.innerHTML = MODULE_3_DATA.shortAnswerAndEssay.shortAnswerQuestions
      .map((sa, idx) => {
        const saved = storageService.getShortAnswer(3, sa.id);
        return `
        <div class="card sa-card" id="sa-${sa.id}">
          <div class="sa-header">
            <h4>${sa.title}</h4>
            <span class="time-badge">⏱️ Suggested Time: ${sa.suggestedTime}</span>
          </div>
          <div class="sa-prompt">${sa.question}</div>

          <div class="sa-editor-box">
            <label><strong>Your Practice Response:</strong></label>
            <textarea id="ta-${sa.id}" class="form-control" rows="5" placeholder="Type your revision response here...">${saved.draft || ""}</textarea>
            <div class="sa-save-bar">
              <button class="btn btn-secondary btn-sm" onclick="App.saveShortAnswerDraft('${sa.id}')">💾 Save Response</button>
              <button class="btn btn-outline-primary btn-sm" onclick="App.toggleModelAnswer('${sa.id}')">👁️ Show / Hide Model Answer & Rubric</button>
              <span id="save-status-${sa.id}" class="save-status text-muted"></span>
            </div>
          </div>

          <div class="model-answer-box" id="model-${sa.id}" style="display: none;">
            <div class="criteria-section">
              <h5>Key Marking Points (Criteria Checklist):</h5>
              <ul>
                ${sa.keyCriteria.map((kc) => `<li>✔️ ${kc}</li>`).join("")}
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
    storageService.saveShortAnswer(3, saId, ta.value);
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
    storageService.saveShortAnswer(3, saId, draftText, score);
    this.renderShortAnswerQuestions();
  },

  renderEssaySection() {
    const container = document.getElementById("essaySectionContainer");
    if (!container) return;

    const essayData = MODULE_3_DATA.shortAnswerAndEssay.essayPrompt;
    const saved = storageService.getEssay(3);

    container.innerHTML = `
      <div class="card essay-card">
        <div class="essay-header">
          <h3>📝 ${essayData.title}</h3>
          <div class="essay-badges">
            <span class="badge badge-primary">Target: ${essayData.suggestedWordCount}</span>
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
          <div class="essay-action-bar">
            <button class="btn btn-primary" onclick="App.saveEssayDraft()">💾 Save Essay Draft</button>
            <button class="btn btn-outline-primary" onclick="App.toggleEssayModel()">👁️ Toggle Model Essay Outline & Rubric</button>
            <span id="essaySaveStatus" class="save-status text-muted"></span>
          </div>
        </div>

        <!-- Collapsible Model Essay & Rubric -->
        <div id="essayModelBox" class="essay-model-container" style="display: none;">
          <div class="rubric-section">
            <h4>Evaluation Rubric (4 Core Marking Criteria):</h4>
            <div class="rubric-grid">
              ${essayData.scoringRubric
                .map(
                  (r, idx) => `
                <div class="card rubric-item-card">
                  <div class="rubric-title">
                    <label>
                      <input type="checkbox" id="rubric-chk-${idx}" ${saved.checkedRubric && saved.checkedRubric[idx] ? 'checked' : ''} onchange="App.onRubricCheck(${idx})">
                      <strong>${r.criterion}</strong>
                    </label>
                  </div>
                  <p class="rubric-indicators">${r.indicators}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="model-essay-text-section">
            <h4>Model Essay Architecture & Key Content:</h4>
            <div class="model-outline-content">${essayData.modelEssayOutline.replace(/# /g, '<h3>').replace(/## /g, '<h4>').replace(/\n\n/g, '<br><br>')}</div>
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
    const countEl = document.getElementById("essayWordCount");
    if (!countEl) return;
    const words = text.trim().split(/\s+/).filter((w) => w.length > 0).length;
    countEl.textContent = `Word count: ${words} words`;
  },

  saveEssayDraft() {
    const ta = document.getElementById("essayTextArea");
    if (!ta) return;
    const saved = storageService.getEssay(3);
    storageService.saveEssay(3, ta.value, saved.checkedRubric || {});
    const statusEl = document.getElementById("essaySaveStatus");
    if (statusEl) {
      statusEl.textContent = "Saved draft at " + new Date().toLocaleTimeString();
      setTimeout(() => { statusEl.textContent = ""; }, 3000);
    }
  },

  toggleEssayModel() {
    const box = document.getElementById("essayModelBox");
    if (box) {
      box.style.display = box.style.display === "none" ? "block" : "none";
    }
  },

  onRubricCheck(index) {
    const ta = document.getElementById("essayTextArea");
    const draftText = ta ? ta.value : "";
    const saved = storageService.getEssay(3);
    const checked = saved.checkedRubric || {};
    const chk = document.getElementById(`rubric-chk-${index}`);
    checked[index] = chk ? chk.checked : false;
    storageService.saveEssay(3, draftText, checked);
  },

  // -------------------------------------------------------------
  // Progress Bar & Global UI
  // -------------------------------------------------------------
  updateGlobalProgressUI() {
    const stats = storageService.getModuleStats(3);
    const totalScenarios = MODULE_3_DATA.scenarios.length;
    const accuracyEl = document.getElementById("statAccuracy");
    const masteredEl = document.getElementById("statMastered");
    const totalAttemptsEl = document.getElementById("statAttempts");
    const progressBar = document.getElementById("moduleProgressBar");

    if (accuracyEl) accuracyEl.textContent = `${stats.accuracyPercent}%`;
    if (masteredEl) masteredEl.textContent = `${stats.masteredCount} / ${totalScenarios}`;
    if (totalAttemptsEl) totalAttemptsEl.textContent = `${stats.totalAttempts}`;

    if (progressBar) {
      const pct = Math.round((stats.masteredCount / totalScenarios) * 100);
      progressBar.style.width = `${pct}%`;
      progressBar.setAttribute("aria-valuenow", pct);
    }
  },

  // -------------------------------------------------------------
  // Settings & Firebase Modal
  // -------------------------------------------------------------
  setupEventListeners() {
    // Settings modal button
    const settingsBtn = document.getElementById("openSettingsBtn");
    if (settingsBtn) {
      settingsBtn.addEventListener("click", () => this.openSettingsModal());
    }

    const closeSettingsBtn = document.getElementById("closeSettingsModal");
    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener("click", () => this.closeSettingsModal());
    }

    // Export/Import/Reset buttons
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

    // Load existing Firebase config
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
