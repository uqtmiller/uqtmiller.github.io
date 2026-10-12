# Terrain — Dance Exam Study Helper & Socratic Coach

An interactive study application built for students studying **Bangarra Dance Theatre's *Terrain* (2012)**, choreographed by **Frances Rings**, and preparing for high-school dance analysis exams.

---

## 🌟 Core Features Included

### 1. Front & Centre Narrative Arc
* **3-Act Ecological & Cultural Journey:**
  * **Act I: Human & Cultural Connection** (*1. Red Brick, 2. Shields, 3. Reborn*) — From urban pressures and ancestral calling, through political resistance, to generational lineage.
  * **Act II: The Arid Land & Human Impact** (*4. Spinifex, 5. Salt, 6. Scar*) — Ancient spirit flora, treacherous acidic salt crusts, and environmental trauma.
  * **Act III: Regeneration & The Water Cycle** (*7. Landform, 8. Reflect, 9. Deluge*) — Earth healing over millennia, sacred horizon mirages, and torrential flood transformation.
* **Interactive Section Explorer:** Click on any of the 9 sections to view its stated meaning, Frances Rings' inspiration, dancer setup, and cultural context.

### 2. Somatic Movement Metaphors
* Explores how each section translates abstract ideas into physical movement:
  * **Space:** Levels (Low/Med/High), Shapes (Angular/Curved/Twisted), Formations, Pathways.
  * **Dynamics & Effort Actions:** Float, Punch, Flowy, Dab, Slash, Glide, Push, Slice, Flick, and Movement Qualities (Suspended, Sustained, Percussive, Vibratory, Swinging, Collapse).
  * **Relationships:** Partner manipulation, counterbalances, group solidarity.
  * **Production Elements:** Jennifer Irwin's textured costumes, Karen Norris's evocative lighting, David Page's soundscapes, and Jacob Nash's sets.

### 3. "Cause & Effect" Narrative Sequencer (Year 7 Friendly)
* Move beyond rote memorisation with interactive storytelling challenges:
  * *Why does Terrain start with Red Brick in an urban city instead of Lake Eyre?*
  * *Why is Shields placed before exploring the natural features?*
  * *In Spinifex, what are the spirit women waiting for, and which section delivers the answer?*
  * *Why are Salt crystals depicted with sharp, percussive dynamics rather than soft gliding?*
  * *Why does Scar lead directly into Landform?*
  * *Why do the dancers slowly leave the stage at the end of Deluge?*
* Provides instant positive feedback and deeper choreographic insights.

### 4. Exam Simulator & Socratic Coach
* **On-Demand Question Generator:** Generates curriculum-authentic exam questions (via Google Gemini) for any chosen section of *Terrain* and specific dance concepts (Elements of Dance, Choreographic Devices, Production Elements, or Mixed).
* **Free-Form Answer Box:** Students write their full analytical response.
* **Socratic Feedback & Grading:**
  * **Approximate Grade (out of 10):** Evaluated against Year 7–10 dance analysis criteria.
  * **What You DID Well:** Celebrates specific concepts identified, movement descriptions, and strengths.
  * **Questions to Deepen Your Thinking:** Socratic coaching that gently prompts the student on what they are missing or how to expand their analysis.
  * **Inspiration Sentence Idea:** A model phrase to inspire revision.
* **Practice History (Newest on Top):** Keeps a full log of questions, answers, and evaluations, always displaying newest attempts first.

### 5. Dance Concepts & Skills Theory Reference
* Instant search and reference for the 4 core pillars from `Dance_concepts_and_skills.docx`:
  1. Elements of Dance (Space, Time, Dynamics, Relationships)
  2. Choreographic Devices (Unison, Canon, Accumulation, Contrast, Motif, Mirroring, Form)
  3. Production Elements (Costume, Lighting, Sound Design, Sets/Props)
  4. Technical & Expressive Skills (Balance, Alignment, Focus, Eyeline, Projection)

---

## 🔑 Gemini API Key & Cookie Storage

* To use the on-demand exam generator and Socratic coach, click **"Gemini Key"** in the top navigation bar.
* Enter your Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com/app/apikey)).
* The key is automatically stored in a secure **browser cookie** (and localStorage backup) with a 1-year lifespan, so she only needs to enter it once!
* All API calls happen **directly from your browser** to Google's official Gemini endpoint.

---

## 🚀 How to Run & Deploy

### Quick Local Preview (No Node.js Required!)
Simply double-click `index.html` in Windows Explorer or open it in Google Chrome / Microsoft Edge. All interactive features, puzzles, theory toolkits, and Gemini API capabilities are 100% functional out of the box!

### Deploying to GitHub Pages (`github.io`)
This repository is configured for both deployment options:

#### Option A: Direct Static GitHub Pages (Easiest)
1. Push this folder to a GitHub repository (e.g. `github.com/<username>/dance-study`).
2. Go to repository **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Your app will be live immediately at `https://<username>.github.io/<repo-name>/`!

#### Option B: Next.js Static Export via GitHub Actions
* The included `.github/workflows/deploy.yml` automatically triggers on push to build the Next.js static export (`npm run build`) and deploys the static files to GitHub Pages with the appropriate `basePath`.
