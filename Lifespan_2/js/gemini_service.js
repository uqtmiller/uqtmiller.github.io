// Gemini AI Integration Service for Lifespan Psychopathology Study Companion
// Communicates directly with Google Gemini REST API from the browser
// Supports multi-tier persistence (Browser Cookies + LocalStorage + SessionStorage + storageService)
// with automatic cross-storage synchronization and robust model fallback chain.

class GeminiService {
  constructor() {
    this.defaultModel = "gemini-3.5-flash-lite";
    this.fallbackModels = ["gemini-3.7-flash", "gemini-3.5-flash", "gemini-3.8-flash", "gemini-3.1-pro-preview", "gemini-2.5-flash"];
    this._memoryKey = "";
    // Synchronize across storage layers on initialization
    this.syncStorage();
  }

  // --- Cookie Helpers (365 days persistence on github.io or localhost) ---
  getCookie(name) {
    try {
      const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : "";
    } catch (e) {
      return "";
    }
  }

  setCookie(name, value, days = 365) {
    try {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      const isHttps = typeof location !== "undefined" && location.protocol === "https:";
      const secureFlag = isHttps ? "; Secure" : "";
      const encoded = encodeURIComponent(value);
      // Set for root path and subpath for max compatibility
      document.cookie = `${name}=${encoded}; expires=${expires}; path=/; SameSite=Lax${secureFlag}`;
      document.cookie = `${name}=${encoded}; expires=${expires}; path=/Lifespan_2/; SameSite=Lax${secureFlag}`;
    } catch (e) {
      console.warn("Could not set cookie:", e);
    }
  }

  deleteCookie(name) {
    try {
      const isHttps = typeof location !== "undefined" && location.protocol === "https:";
      const secureFlag = isHttps ? "; Secure" : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax${secureFlag}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/Lifespan_2/; SameSite=Lax${secureFlag}`;
    } catch (e) {}
  }

  // --- Multi-Tier API Key Retrieval ---
  getApiKey() {
    if (this._memoryKey) return this._memoryKey;
    if (typeof window !== "undefined" && window._geminiApiKey) {
      this._memoryKey = window._geminiApiKey;
      return this._memoryKey;
    }

    // 1. Try Cookie
    const cookieKey = this.getCookie("gemini_api_key");
    if (cookieKey) {
      this._memoryKey = cookieKey;
      return cookieKey;
    }

    // 2. Try Dedicated LocalStorage
    try {
      const lsKey = localStorage.getItem("gemini_api_key");
      if (lsKey) {
        this._memoryKey = lsKey;
        this.setCookie("gemini_api_key", lsKey, 365);
        return lsKey;
      }
    } catch (e) {}

    // 3. Try Dedicated SessionStorage
    try {
      const ssKey = sessionStorage.getItem("gemini_api_key");
      if (ssKey) {
        this._memoryKey = ssKey;
        return ssKey;
      }
    } catch (e) {}

    // 4. Try Main storageService
    if (typeof storageService !== "undefined" && storageService.getGeminiApiKey) {
      const stKey = storageService.getGeminiApiKey();
      if (stKey) {
        this._memoryKey = stKey;
        this.setCookie("gemini_api_key", stKey, 365);
        try { localStorage.setItem("gemini_api_key", stKey); } catch (e) {}
        return stKey;
      }
    }

    return "";
  }

  // --- Multi-Tier API Key Saving ---
  setApiKey(key) {
    const trimmed = (key || "").trim();
    this._memoryKey = trimmed;
    if (typeof window !== "undefined") {
      window._geminiApiKey = trimmed;
    }

    // 1. Save to Cookie
    if (trimmed) {
      this.setCookie("gemini_api_key", trimmed, 365);
    } else {
      this.deleteCookie("gemini_api_key");
    }

    // 2. Save to Dedicated LocalStorage
    try {
      if (trimmed) {
        localStorage.setItem("gemini_api_key", trimmed);
      } else {
        localStorage.removeItem("gemini_api_key");
      }
    } catch (e) {}

    // 3. Save to Dedicated SessionStorage
    try {
      if (trimmed) {
        sessionStorage.setItem("gemini_api_key", trimmed);
      } else {
        sessionStorage.removeItem("gemini_api_key");
      }
    } catch (e) {}

    // 4. Save to Main storageService
    if (typeof storageService !== "undefined" && storageService.saveGeminiApiKey) {
      storageService.saveGeminiApiKey(trimmed);
    }

    return trimmed;
  }

  // Synchronize found keys into all storage layers so it never gets lost
  syncStorage() {
    const key = this.getApiKey();
    if (key) {
      this.setApiKey(key);
    }
  }

  // Detects obsolete/retired models (such as gemini-2.0-*, 1.5-*, etc.)
  isDeprecatedModel(model) {
    if (!model || typeof model !== "string") return true;
    const lower = model.trim().toLowerCase();
    return (
      lower.includes("gemini-2.0") ||
      lower.includes("gemini-1.5") ||
      lower.includes("gemini-1.0") ||
      lower.includes("flash-lite-2") ||
      lower === "gemini-pro"
    );
  }

  // Lightweight test verification of API key
  async testApiKey(candidateKey) {
    const key = (candidateKey || this.getApiKey() || "").trim();
    if (!key) {
      return { success: false, error: "Please enter a Google Gemini API Key to test." };
    }
    const model = this.getModel() || this.defaultModel;
    const testUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
    try {
      const resp = await fetch(testUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: "Hello, reply with OK" }] }],
          generationConfig: { maxOutputTokens: 5 }
        })
      });
      if (resp.ok) {
        return { success: true, model: model };
      }
      const data = await resp.json().catch(() => ({}));
      const msg = data.error?.message || `HTTP ${resp.status} (${resp.statusText})`;
      if (resp.status === 400 && msg.toLowerCase().includes("api key not valid")) {
        return { success: false, error: "API key is not valid or expired. Please check your key at Google AI Studio." };
      }
      if (resp.status === 403) {
        return {
          success: false,
          error: `HTTP 403 Permission Denied: ${msg}. If your Google Cloud API key has website/referrer restrictions, ensure 'https://*.github.io/*' is included in the allowed referrers.`
        };
      }
      if (resp.status === 429) {
        return { success: false, error: "HTTP 429: Quota or rate limit exceeded. Please wait a moment." };
      }
      return { success: false, error: `Google API Error (${resp.status}): ${msg}` };
    } catch (e) {
      return { success: false, error: `Connection failed: ${e.message}. Check your internet connection or browser security settings.` };
    }
  }

  getModel() {
    let model = "";
    // 1. Try Cookie
    model = this.getCookie("gemini_model");
    if (model && !this.isDeprecatedModel(model)) return model;

    // 2. Try Dedicated LocalStorage
    try {
      model = localStorage.getItem("gemini_model");
      if (model && !this.isDeprecatedModel(model)) return model;
    } catch (e) {}

    // 3. Try storageService
    if (typeof storageService !== "undefined" && storageService.getGeminiModel) {
      model = storageService.getGeminiModel();
      if (model && !this.isDeprecatedModel(model)) return model;
    }

    // If deprecated or unset, automatically migrate to default active model
    this.setModel(this.defaultModel);
    return this.defaultModel;
  }

  setModel(model) {
    const targetModel = (model && !this.isDeprecatedModel(model)) ? model : this.defaultModel;
    this.setCookie("gemini_model", targetModel, 365);
    try {
      localStorage.setItem("gemini_model", targetModel);
    } catch (e) {}
    if (typeof storageService !== "undefined" && storageService.saveGeminiModel) {
      storageService.saveGeminiModel(targetModel);
    }
  }

  hasApiKey() {
    return Boolean(this.getApiKey());
  }

  // Extract generated text from modern Interactions API response
  extractInteractionsText(data) {
    if (!data) return "";
    if (typeof data.output_text === "string" && data.output_text) {
      return data.output_text;
    }
    if (data.interaction && typeof data.interaction.output_text === "string" && data.interaction.output_text) {
      return data.interaction.output_text;
    }
    const steps = data.steps || data.interaction?.steps || [];
    for (let i = steps.length - 1; i >= 0; i--) {
      const step = steps[i];
      if (step && step.content && Array.isArray(step.content)) {
        const text = step.content.filter((c) => c && c.text).map((c) => c.text).join("");
        if (text) return text;
      }
    }
    return "";
  }

  // Dual-mode API call: attempts standard REST generateContent with active model,
  // and seamlessly falls back to modern Interactions API REST endpoint if needed.
  async callGemini(systemInstruction, userPrompt, preferredModel = null) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error("NO_API_KEY: Please enter your Google Gemini API Key in Settings or the prompt modal.");
    }

    let requestedModel = preferredModel || this.getModel() || this.defaultModel;
    if (this.isDeprecatedModel(requestedModel)) {
      requestedModel = this.defaultModel;
    }

    const validModels = [this.defaultModel, ...this.fallbackModels];
    const modelsToTry = [requestedModel, ...validModels.filter((m) => m !== requestedModel)];

    let lastError = null;

    for (const currentModel of modelsToTry) {
      // --- Strategy A: Standard REST generateContent ---
      try {
        const genUrl = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const requestBody = {
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }]
            }
          ],
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 2500,
            responseMimeType: "application/json"
          }
        };

        const response = await fetch(genUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        });

        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0];
          if (candidate) {
            const textOutput = candidate.content?.parts?.map((p) => p.text).join("") || "";
            if (textOutput) {
              return this.parseGeminiJson(textOutput);
            }
          }
        } else {
          const errData = await response.json().catch(() => ({}));
          const errMsg = errData.error?.message || `HTTP ${response.status} (${response.statusText})`;

          if (response.status === 400 && errMsg.toLowerCase().includes("api key not valid")) {
            throw new Error("INVALID_API_KEY: The Google Gemini API Key entered is invalid or expired. Please check your key at Google AI Studio.");
          }
          if (response.status === 403) {
            throw new Error(`PERMISSION_DENIED (HTTP 403): ${errMsg}. If your API key has website referrer restrictions in Google Cloud / AI Studio, ensure 'https://*.github.io/*' is allowed, or set Application Restrictions to 'None'.`);
          }
          if (response.status === 429) {
            throw new Error("RATE_LIMIT: Quota exceeded or rate limited. Please wait a few seconds and try again.");
          }

          console.warn(`generateContent for ${currentModel} returned HTTP ${response.status}: ${errMsg}. Trying fallback model...`);
        }
      } catch (err) {
        if (err.message.startsWith("NO_API_KEY") || err.message.startsWith("INVALID_API_KEY") || err.message.startsWith("PERMISSION_DENIED") || err.message.startsWith("RATE_LIMIT")) {
          throw err;
        }
        lastError = err;
      }

      // --- Strategy B: Modern Interactions API REST Endpoint ---
      try {
        const interactUrl = `https://generativelanguage.googleapis.com/v1beta/interactions?key=${encodeURIComponent(apiKey)}`;
        const interactBody = {
          model: currentModel,
          input: userPrompt,
          system_instruction: systemInstruction,
          response_format: [{ type: "json_object" }]
        };

        const intResponse = await fetch(interactUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Api-Revision": "2026-05-20"
          },
          body: JSON.stringify(interactBody)
        });

        if (intResponse.ok) {
          const intData = await intResponse.json();
          const textOutput = this.extractInteractionsText(intData);
          if (textOutput) {
            return this.parseGeminiJson(textOutput);
          }
        } else {
          const errData = await intResponse.json().catch(() => ({}));
          const errMsg = errData.error?.message || `HTTP ${intResponse.status} (${intResponse.statusText})`;

          if (intResponse.status === 400 && errMsg.toLowerCase().includes("api key not valid")) {
            throw new Error("INVALID_API_KEY: The Google Gemini API Key entered is invalid or expired. Please check your key at Google AI Studio.");
          }
          if (intResponse.status === 403) {
            throw new Error(`PERMISSION_DENIED (HTTP 403): ${errMsg}. If your API key has website referrer restrictions in Google Cloud / AI Studio, ensure 'https://*.github.io/*' is allowed, or set Application Restrictions to 'None'.`);
          }
          if (intResponse.status === 429) {
            throw new Error("RATE_LIMIT: Quota exceeded or rate limited. Please wait a few seconds and try again.");
          }

          console.warn(`Interactions API for ${currentModel} returned HTTP ${intResponse.status}: ${errMsg}.`);
          lastError = new Error(`API_ERROR (${intResponse.status}): ${errMsg}`);
        }
      } catch (err) {
        if (err.message.startsWith("NO_API_KEY") || err.message.startsWith("INVALID_API_KEY") || err.message.startsWith("PERMISSION_DENIED") || err.message.startsWith("RATE_LIMIT")) {
          throw err;
        }
        lastError = err;
      }
    }

    throw lastError || new Error("Failed to connect to Gemini API after trying available models.");
  }

  // Robust parsing of JSON returned by model (cleans markdown fence blocks if present)
  parseGeminiJson(rawText) {
    if (!rawText) return null;
    let clean = rawText.trim();

    // Strip markdown json fences ```json ... ```
    if (clean.startsWith("```")) {
      clean = clean.replace(/^```(json)?\s*/i, "").replace(/\s*```$/, "").trim();
    }

    try {
      return JSON.parse(clean);
    } catch (e) {
      console.warn("JSON parsing failed on raw Gemini output, extracting first JSON object:", e);
      // Attempt to extract the first balanced { ... }
      const firstBrace = clean.indexOf("{");
      const lastBrace = clean.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        try {
          return JSON.parse(clean.substring(firstBrace, lastBrace + 1));
        } catch (innerErr) {
          console.error("Secondary JSON extraction failed:", innerErr);
        }
      }
      // If structured JSON fails completely, wrap text as a readable summary
      return {
        score: "Evaluated",
        summary: clean,
        criteriaAssessment: [],
        strengths: ["Detailed clinical submission"],
        areasForImprovement: ["Review model answer and criteria for comparison."],
        examinerTip: "Refer to the model answer for exact grading alignment."
      };
    }
  }

  // -----------------------------------------------------------------
  // 1. Evaluate Short Answer Question
  // -----------------------------------------------------------------
  async evaluateShortAnswer({
    moduleTitle,
    academicLead,
    questionTitle,
    questionPrompt,
    criteriaList,
    modelAnswer,
    studentAnswer
  }) {
    if (!studentAnswer || studentAnswer.trim().length === 0) {
      throw new Error("EMPTY_ANSWER: Please write your answer before submitting for AI grading.");
    }

    const systemInstruction = `You are an expert Clinical Psychology examiner and university professor grading postgraduate / master's level written examination answers in Lifespan Psychopathology.
Your job is to objectively, rigorously, and constructively assess the student's written response against the provided official marking criteria and model answer.

You must return a valid JSON object matching this exact schema:
{
  "score": "string (e.g. '4.5 / 5')",
  "scoreOutOf5": number (between 0.0 and 5.0, in 0.5 increments),
  "gradeBand": "string (High Distinction | Distinction | Credit | Pass | Fail)",
  "summary": "string (1-2 sentence executive assessment of clinical accuracy and depth)",
  "criteriaAssessment": [
    {
      "criterion": "string (name or summary of the criterion)",
      "status": "string ('Met' | 'Partially Met' | 'Missed')",
      "feedback": "string (brief specific observation of how student addressed or omitted this point)"
    }
  ],
  "strengths": [
    "string (specific accurate clinical concepts, correct diagnostic terminology, or valid mechanisms)"
  ],
  "areasForImprovement": [
    "string (specific omitted criteria, vague wording to sharpen, or misconceptions to correct)"
  ],
  "examinerTip": "string (a high-yield 1-2 sentence exam tip to score full marks in the actual exam)"
}

Grading Standards:
- 4.5 - 5.0 / 5 (High Distinction): Comprehensive, clinically precise, accurately integrates all criteria, utilizes formal DSM-5 and lecture terminology.
- 4.0 / 5 (Distinction): Strong clinical grasp, satisfies all major criteria with minor omissions in nuance or secondary details.
- 3.0 - 3.5 / 5 (Credit): Satisfactory understanding of the core concept, but misses 1-2 notable criteria or lacks specific clinical terminology.
- 2.0 - 2.5 / 5 (Pass): Basic familiarity demonstrated, but significant omissions, overly colloquial language, or vague generalizations.
- 0.0 - 1.5 / 5 (Fail): Fundamental misunderstanding, major clinical errors, or leaves core questions unanswered.`;

    const userPrompt = `MODULE: ${moduleTitle} (Academic Lead: ${academicLead})
QUESTION: ${questionTitle}
PROMPT:
${questionPrompt}

OFFICIAL MARKING CRITERIA CHECKLIST:
${criteriaList.map((c, i) => `${i + 1}. ${c}`).join("\n")}

OFFICIAL MODEL EXAMINER ANSWER:
${modelAnswer}

STUDENT'S WRITTEN RESPONSE:
"""
${studentAnswer}
"""

Please grade this response strictly against the official criteria and model answer, and return the structured JSON assessment.`;

    return await this.callGemini(systemInstruction, userPrompt);
  }

  // -----------------------------------------------------------------
  // 2. Evaluate Comprehensive Essay
  // -----------------------------------------------------------------
  async evaluateEssay({
    moduleTitle,
    academicLead,
    essayTitle,
    essayPrompt,
    suggestedWordCount,
    rubricPillars,
    modelOutline,
    studentAnswer
  }) {
    if (!studentAnswer || studentAnswer.trim().length === 0) {
      throw new Error("EMPTY_ANSWER: Please write your essay before submitting for AI grading.");
    }

    const wordCount = studentAnswer.trim().split(/\s+/).filter(Boolean).length;

    const systemInstruction = `You are a Professor of Clinical Psychology and lead examiner grading a master's level comprehensive essay on Lifespan Psychopathology.
Evaluate the student's essay rigorously against the provided 4-pillar evaluation rubric, developmental frameworks, DSM-5 criteria, and model essay outline.

You must return a valid JSON object matching this exact schema:
{
  "estimatedScorePercent": number (integer between 0 and 100),
  "gradeBand": "string (High Distinction [85-100%] | Distinction [75-84%] | Credit [65-74%] | Pass [50-64%] | Fail [<50%])",
  "wordCountAssessed": number (${wordCount}),
  "overallVerdict": "string (2-3 sentences summarizing the diagnostic formulation, academic rigor, and clinical maturity of the essay)",
  "rubricAssessment": [
    {
      "pillar": "string (name of the rubric pillar)",
      "weight": "string (e.g. '25%')",
      "rating": "string ('Excellent' | 'Proficient' | 'Competent' | 'Developing' | 'Unsatisfactory')",
      "feedback": "string (detailed critique of how the student addressed this pillar with reference to theory and evidence)"
    }
  ],
  "keyStrengths": [
    "string (specific theoretical synthesis, clinical nuance, or well-formulated arguments)"
  ],
  "highYieldImprovements": [
    "string (critical omissions in models, treatment pathways, differential considerations, or structure)"
  ],
  "examSynthesisAdvice": "string (concise master-class advice for achieving top marks in the actual timed exam)"
}

Scoring Benchmarks:
- 85-100% (High Distinction): Masterful integration of developmental psychopathology, diagnostic criteria, empirical mechanisms, and nuanced treatment pathways with critical reflection.
- 75-84% (Distinction): Thorough, well-structured, covers all required prompt components with strong clinical accuracy.
- 65-74% (Credit): Sound essay covering core concepts, but lacks deeper empirical depth, omits secondary theoretical nuances, or has minor structural imbalance.
- 50-64% (Pass): Addresses prompt superficially, relies on descriptive rather than analytical explanations, or contains notable gaps in treatment/diagnostic specificity.
- <50% (Fail): Major inaccuracies, fails to address key requirements of the prompt, or insufficient length/substance.`;

    const rubricFormatted = rubricPillars
      .map((r, i) => {
        const name = r.criterion || r.name || `Pillar ${i + 1}`;
        const indicators = r.indicators || r.description || "";
        const weight = r.weight || "25%";
        return `Pillar ${i + 1}: ${name} (${weight})\nIndicators: ${indicators}`;
      })
      .join("\n\n");

    const userPrompt = `MODULE: ${moduleTitle} (Academic Lead: ${academicLead})
ESSAY TITLE: ${essayTitle}
TARGET WORD COUNT: ${suggestedWordCount}
STUDENT'S CURRENT WORD COUNT: ${wordCount} words

ESSAY PROMPT:
${essayPrompt}

OFFICIAL 4-PILLAR EVALUATION RUBRIC:
${rubricFormatted}

MODEL ESSAY OUTLINE & ARCHITECTURE:
${modelOutline}

STUDENT'S SUBMITTED ESSAY:
"""
${studentAnswer}
"""

Please grade this essay comprehensively against the 4 rubric pillars and model outline, and return the structured JSON evaluation.`;

    return await this.callGemini(systemInstruction, userPrompt);
  }
}

// Global instance
window.geminiService = new GeminiService();
