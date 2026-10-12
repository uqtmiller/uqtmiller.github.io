export interface ExamFeedback {
  score: number; // out of 10
  scoreLabel: string;
  praise: string[]; // What the student DID well!
  socraticQuestions: string[]; // Thoughtful questions prompting what they might be missing
  modelSuggestions: string; // A warm, inspiring thought or snippet to inspire their next revision
}

export interface GeneratedQuestion {
  id: string;
  sectionTitle: string;
  sectionId: number;
  actTitle: string;
  focusArea: string;
  questionText: string;
  statedMeaning: string;
  hints: string[];
  createdAt: string;
}

export interface ExamAttempt {
  id: string;
  timestamp: string;
  question: GeneratedQuestion;
  studentAnswer: string;
  feedback?: ExamFeedback;
  isLoadingFeedback?: boolean;
}

// Available Gemini models with automatic fallback if one is busy (503) or deprecated (404)
export const GEMINI_MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-flash-latest",
  "gemini-3.8-flash",
  "gemini-flash-lite-latest",
  "gemini-pro-latest"
];

// Cookie helpers for storing API key safely in the browser
export function getStoredApiKey(): string {
  if (typeof window === "undefined") return "";
  
  // Check cookie first
  const match = document.cookie.match(new RegExp("(^| )gemini_api_key=([^;]+)"));
  if (match && match[2]) {
    return decodeURIComponent(match[2]);
  }
  
  // Fallback to localStorage
  try {
    const local = localStorage.getItem("terrain_gemini_api_key");
    if (local) return local;
  } catch (e) {
    // ignore
  }
  return "";
}

export function storeApiKey(key: string): void {
  if (typeof window === "undefined") return;
  const trimmed = key.trim();
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `gemini_api_key=${encodeURIComponent(trimmed)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  try {
    localStorage.setItem("terrain_gemini_api_key", trimmed);
  } catch (e) {
    // ignore
  }
}

export function clearApiKey(): void {
  if (typeof window === "undefined") return;
  document.cookie = "gemini_api_key=; path=/; max-age=0; SameSite=Lax";
  try {
    localStorage.removeItem("terrain_gemini_api_key");
  } catch (e) {
    // ignore
  }
}

// Generic Gemini caller with automatic fallback across models
export async function callGeminiWithFallback(
  apiKey: string,
  prompt: string,
  jsonMode: boolean = true
): Promise<string> {
  let lastError: Error | null = null;

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
      const payload: any = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: jsonMode ? 0.5 : 0.7
        }
      };
      if (jsonMode) {
        payload.generationConfig.responseMimeType = "application/json";
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      }

      // If error is 404 (model not found) or 503 (model overloaded), try next model
      if (response.status === 404 || response.status === 503) {
        console.warn(`Model ${model} returned ${response.status}, attempting fallback model...`);
        continue;
      }

      const errorText = await response.text();
      // If unauthorized or bad key, no need to retry models
      if (response.status === 400 || response.status === 401 || response.status === 403) {
        throw new Error(`API Key error (${response.status}): ${errorText}`);
      }

      lastError = new Error(`Gemini error on ${model} (${response.status}): ${errorText}`);
    } catch (err: any) {
      if (err.message?.includes("API Key error")) {
        throw err;
      }
      lastError = err;
    }
  }

  throw lastError || new Error("Failed to connect to Gemini API with all available models.");
}

// System prompt grounding the model in the actual exam curriculum
const TERRAIN_CONTEXT = `
You are an encouraging, expert Year 7–10 Dance Education Coach evaluating answers on Bangarra Dance Theatre's production 'Terrain' (2012), choreographed by Frances Rings.

The 9 sections of Terrain and their meanings are:
1. RED BRICK: Looking beyond the urban landscape to hear an ancestral Calling to Country. Solo female manipulated and lifted by four male dancers.
2. SHIELDS: Reflecting on the struggle for Land Rights and Recognition that continues to affect Indigenous people today. Grounded male ensemble, strong unison and barricades.
3. REBORN: Land is passed down through lineage along with knowledge and customs. Generational continuity, accumulation, fluid passing of weight and traditions.
4. SPINIFEX: Inspired by contorted spinifex trees resembling gatherings of spirit women waiting suspended in time for rains to arrive. Fringed costumes integral.
5. SALT: Beyond white vastness lies an abstract landscape resonating ancient power. Acidic crystals that burn skin and create blinding mirages. Male duo, angular sharp shapes, percussive dynamics.
6. SCAR: Impact of man's actions scars and disrupts delicate balance between man and environment. Mining/industrial trauma, collapsing dynamics, disjointed fractured pathways.
7. LANDFORM: Land's capacity to heal itself, regenerate after trauma across millennia. Low floor levels, undulating bodies rolling as living geological strata, sustained dynamics.
8. REFLECT: Traversing horizon to glimpse sacred realm where earth and sky meet. Shimmering mirage, horizontal planes, floating/sustained dynamics, serene contemplation.
9. DELUGE: Waters travelling down ancient channels to fill Lake Eyre with transformative life, then evaporating as the cycle continues. Dancers move in wave-like canons and slowly exit the stage.

DANCE THEORY CATEGORIES:
- Elements of Dance:
  * Space (Levels: Low, Med, High; Shapes: Angular, Curved, Twisted; Formations; Planes; Dimension; Pathways; Direction; Positive/Negative Space)
  * Time (Tempo fast/slow, Rhythm, Accents)
  * Dynamics (Effort actions: Float, Punch, Flowy, Dab, Slash, Glide, Push, Slice, Flick; Movement qualities: Suspended, Sustained, Percussive, Vibratory, Swinging, Collapse)
  * Relationships (With body, With others, With space, With props)
- Choreographic Devices: Unison, Accumulation, Retrograde, Canon, Motif, Repetition, Call and Response, Abstraction, Mirroring, Solos, Duos, Contrast, Form (Ternary, Rondo, Binary, Narrative).
- Production Elements: Lighting, Makeup, Costume, Music/Sound, Props, Stage, Set, Multimedia.
- Technical & Expressive Skills: Balance, Flexibility, Strength, Alignment, Agility, Control, Facial Expression, Eyeline, Projection, Musicality, Focus.
`;

export async function generateExamQuestion(
  apiKey: string,
  preferredSectionSlug?: string,
  preferredFocus?: string
): Promise<GeneratedQuestion> {
  const prompt = `
${TERRAIN_CONTEXT}

Task: Generate a high-school dance exam question in the exact style of the sample questions.
Sample question format from curriculum:
"Question: Analyse and evaluate Rings' use of elements of dance to communicate the stated meaning. Refer to multiple dance concepts and skills to demonstrate a discerning understanding of concepts."
Or
"Question: Analyse and evaluate Rings' use of choreographic devices to communicate the stated meaning. Refer to multiple dance concepts and skills to demonstrate a discerning understanding of concepts."

Requirements for this question:
- Preferred Section: ${preferredSectionSlug ? preferredSectionSlug : "Choose any of the 9 sections of Terrain"}
- Preferred Focus: ${preferredFocus ? preferredFocus : "Elements of Dance, Choreographic Devices, or Production Elements"}
- Include the stated meaning of that section for the student to reference.
- Provide 2–3 encouraging hints for what concepts they could connect to.

Respond ONLY with valid JSON matching this schema:
{
  "sectionTitle": string,
  "sectionId": number,
  "actTitle": string,
  "focusArea": string,
  "questionText": string,
  "statedMeaning": string,
  "hints": [string, string, string]
}
`;

  const text = await callGeminiWithFallback(apiKey, prompt, true);
  const parsed = JSON.parse(text);
  return {
    id: "q-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
    sectionTitle: parsed.sectionTitle,
    sectionId: parsed.sectionId || 1,
    actTitle: parsed.actTitle || "Act I",
    focusArea: parsed.focusArea,
    questionText: parsed.questionText,
    statedMeaning: parsed.statedMeaning,
    hints: parsed.hints || [],
    createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
}

export async function evaluateStudentAnswer(
  apiKey: string,
  question: GeneratedQuestion,
  studentAnswer: string
): Promise<ExamFeedback> {
  const prompt = `
${TERRAIN_CONTEXT}

The student was asked the following exam question:
SECTION: ${question.sectionTitle}
STATED MEANING: ${question.statedMeaning}
FOCUS AREA: ${question.focusArea}
QUESTION: ${question.questionText}

STUDENT'S ANSWER:
"""
${studentAnswer}
"""

YOUR TASK AS AN ENCOURAGING SOCRATIC COACH:
1. Provide an approximate grade out of 10 based on Year 7-10 dance criteria:
   - 9-10: Discerning analysis linking multiple specific dance concepts to the stated meaning, with vivid movement description and evaluative judgment.
   - 7-8: Effective analysis identifying concepts and meaning, with good description.
   - 5-6: Developing answer that mentions a concept or the meaning, but needs more movement description or explanation of *how* the choice works.
   - 1-4: Very brief or incomplete attempt.
2. CELEBRATE WHAT THEY DID WELL ("praise"):
   - Identify 2-3 specific positive things the student did well (e.g. "Great job identifying the contrasting levels!", "You clearly understood that the women represent spirit trees waiting for rain!").
   - Be genuinely warm and affirming.
3. ASK SOCRATIC QUESTIONS TO DEEPEN THEIR THINKING ("socraticQuestions"):
   - Instead of bluntly stating "You forgot X", formulate 2-3 thoughtful, guiding questions that prompt the student on what they are missing or could expand.
   - Examples of Socratic questions:
     * "How might you describe the exact movement quality (e.g. sustained vs percussive) to help the reader see how the dancers embody the texture of the salt crystals?"
     * "What choreographic device could you mention to explain how the dancers work together as an ensemble?"
     * "Could you add a sentence explaining WHY this choice was effective in making the audience feel the ancient power of Country?"
4. Provide an inspiring, brief "modelSuggestions" idea showing how one of those missing pieces could look in a sentence.

Respond ONLY with valid JSON matching this schema:
{
  "score": number,
  "scoreLabel": string,
  "praise": [string, string],
  "socraticQuestions": [string, string],
  "modelSuggestions": string
}
`;

  const text = await callGeminiWithFallback(apiKey, prompt, true);
  return JSON.parse(text) as ExamFeedback;
}
