// Overview data for all 10 modules in Lifespan Psychopathology
const ALL_MODULES_METADATA = [
  {
    id: 1,
    title: "1. Intro & Psychopathology",
    shortTitle: "1. Intro & Diagnosis",
    icon: "🧠",
    status: "active",
    lecturer: "Dr. Bonnie Clough",
    coreConcepts: "Differential diagnosis trees, MSE domains, First's 6-step differential process, Transdiagnostic vs disorder-specific models (Barlow's UP, Fairburn's CBT-E).",
    disorders: "Panic Disorder, Malingering vs Factitious Disorder, Adjustment Disorders, Transdiagnostic Emotional Disorders.",
    readings: "Nolen-Hoeksema & Watkins (2011) - Heuristic for transdiagnostic models, multifinality & divergent trajectories."
  },
  {
    id: 2,
    title: "2. Cultural Context",
    shortTitle: "2. Cultural Context",
    icon: "🌏",
    status: "active",
    lecturer: "Dale Rowland & Dr. Bonnie Clough",
    coreConcepts: "Social & Emotional Wellbeing (SEWB), Cultural Formulation Interview (CFI), culturally safe practice, overcoming Western diagnostic bias.",
    disorders: "Culture-bound syndromes, Indigenous distress manifestations ('spirit presence', 'grief work', 'manggari'), acculturative stress, intergenerational trauma.",
    readings: "Westerman (2021) Culture-bound syndromes; Kilcullen & Day (2018); Westerman & Dear (2023, 2024 WASC-Y); Working Together (2014)."
  },
  {
    id: 3,
    title: "3. Attachment Across the Lifespan",
    shortTitle: "3. Attachment",
    icon: "🔗",
    status: "active",
    lecturer: "Dr. Matthew McKenzie / Kendall",
    coreConcepts: "Strange Situation, Adult Attachment Interview (AAI), Reflective Functioning (RFQ-8), Internal Working Models, Circle of Security, Mentalization-Based Therapy (MBT), Affect Regulation.",
    disorders: "Reactive Attachment Disorder (RAD), Disinhibited Social Engagement Disorder (DSED), Insecure-Avoidant / Dismissing, Insecure-Ambivalent / Preoccupied, Insecure-Disorganized / Unresolved (Complex Trauma & BPD vulnerability).",
    readings: "Adult Attachment Interview Protocol (Mary Main); Abbreviated AAI (George et al., 1996); Reflective Functioning Questionnaire (RFQ-8)."
  },
  {
    id: 4,
    title: "4. Older Adults",
    shortTitle: "4. Older Adults",
    icon: "👵",
    status: "active",
    lecturer: "Assoc. Prof. Kerryn Pike",
    coreConcepts: "Normal aging vs pathological decline, Subjective Cognitive Decline (SCD), Mild Cognitive Impairment (MCI), neuropsychological testing, cognitive rehabilitation.",
    disorders: "Alzheimer's Disease (AD), Vascular Dementia, Frontotemporal Dementia (FTD), Lewy Body Dementia (LBD), Late-life Depression (pseudodementia).",
    readings: "Pike & Kinsella - Alzheimer's Disease: Prodromal stages and dementia (Chapter 2)."
  },
  {
    id: 5,
    title: "5. Sleep Disorders",
    shortTitle: "5. Sleep Disorders",
    icon: "🌙",
    status: "active",
    lecturer: "Prof. Caroline Donovan",
    coreConcepts: "Pediatric sleep architecture, sleep hygiene, BEARS screening, extinction protocols, camping out, bedtime pass, positive routines.",
    disorders: "Behavioral Insomnia of Childhood (Sleep-Onset Association & Limit-Setting types), Parasomnias (Nightmare Disorder vs Non-REM Sleep Terrors/Sleepwalking), Obstructive Sleep Apnea.",
    readings: "Treating Sleep Problems in Children Workshop (Caroline Donovan)."
  },
  {
    id: 6,
    title: "6. Neurodevelopment Disorders",
    shortTitle: "6. Neurodevelopment",
    icon: "🧩",
    status: "active",
    lecturer: "Dr. Erinn Hawkins",
    coreConcepts: "Adult neurodevelopmental presentations, masking/camouflaging, executive dysfunction, Functional Behavioral Assessment, Chain Analysis, My Calm Plan.",
    disorders: "Adult ADHD, Autism Spectrum Disorder (ASD), Fetal Alcohol Spectrum Disorder (FASD), Intellectual Disability, Tic Disorders / Tourette's.",
    readings: "Australian FASD Diagnostic Guidelines; Chain Analysis Worksheet; My Calm Plan."
  },
  {
    id: 7,
    title: "7. Eating Disorders (Childhood & ARFID)",
    shortTitle: "7. Childhood Feeding & ARFID",
    icon: "🍎",
    status: "active",
    lecturer: "Dr. Erinn Hawkins",
    coreConcepts: "Pediatric Feeding Disorder vs ARFID, sensory sensitivity, fear of aversive consequences, lack of interest, Nine-Item ARFID Screen (NIAS), FBT-ARFID, CBT-ARFID.",
    disorders: "Avoidant/Restrictive Food Intake Disorder (ARFID), Pediatric Feeding Disorder (PFD), Pica, Rumination Disorder.",
    readings: "Schermbrucker et al. (2017) ARFID Case Study; Mulkens et al. (2025) Screening & Cross-cultural considerations in ARFID."
  },
  {
    id: 8,
    title: "8. Adult Eating Disorders",
    shortTitle: "8. Adult Eating Disorders",
    icon: "⚖️",
    status: "active",
    lecturer: "Dr. Bonnie Clough",
    coreConcepts: "Fairburn's Transdiagnostic CBT-E model, over-evaluation of shape/weight, clinical perfectionism, core low self-esteem, mood intolerance, EDE 17.0D interview, CIA 3.0 impairment scale.",
    disorders: "Anorexia Nervosa (Restricting & Binge/Purge), Bulimia Nervosa, Binge Eating Disorder (BED), Other Specified Feeding or Eating Disorder (OSFED).",
    readings: "Fairburn et al. Eating Disorder Examination (EDE 17.0D); Clinical Impairment Assessment (CIA 3.0 & scoring guide); ED Monitoring Form."
  },
  {
    id: 9,
    title: "9. Personality Disorders",
    shortTitle: "9. Personality Disorders",
    icon: "🎭",
    status: "active",
    lecturer: "Ned Chandler-Mather",
    coreConcepts: "DSM-5 3-Cluster framework, Alternative Model for Personality Disorders (AMPD), Millon's biosocial learning model, PAI, MCMI-IV, Dialectical Behavior Therapy (DBT), Schema Therapy.",
    disorders: "Cluster A (Paranoid, Schizoid, Schizotypal), Cluster B (Antisocial, Borderline, Histrionic, Narcissistic), Cluster C (Avoidant, Dependent, OCPD).",
    readings: "Personality Disorders & DBT Workshop (Chandler-Mather); PAI & MCMI-IV guides."
  },
  {
    id: 10,
    title: "10. Psychosis",
    shortTitle: "10. Psychosis",
    icon: "⚡",
    status: "active",
    lecturer: "Dr. Bonnie Clough",
    coreConcepts: "Impaired reality testing, positive vs negative symptoms, Clinical Staging Model (McGorry: Stage 0 to 4), Ultra-High Risk (UHR) prodrome, CBT for Psychosis (CBTp 4-phase model), metabolic side effects of antipsychotics.",
    disorders: "Schizophrenia, Schizophreniform Disorder, Brief Psychotic Disorder, Schizoaffective Disorder, Delusional Disorder, Substance/Medication-Induced Psychotic Disorder.",
    readings: "Psychotic Disorders Master Clinical Workshop (Bonnie Clough)."
  }
];
