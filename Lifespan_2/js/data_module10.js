// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 10: Psychosis & Schizophrenia Spectrum Disorders
const MODULE_10_DATA = {
  moduleId: 10,
  title: "Module 10: Psychosis & Schizophrenia Spectrum Disorders",
  subtitle: "Impaired Reality Testing, Clinical Staging (McGorry), CBT for Psychosis (CBTp), and Recovery-Oriented Care",
  coordinator: "Dr Bonnie Clough (Clinical Psychologist, MAPS, Senior Lecturer)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "Psychosis as Impaired Reality Testing & The Continuum Model",
      author: "Freudenreich / Orygen (2016) / Dr Bonnie Clough",
      summary: "Conceptually, psychosis represents impaired reality testing — misinterpretation of the nature of reality manifested across perceptual disturbances (hallucinations), belief interpretation (delusions), and disorganized communication (formal thought disorder). Research confirms psychotic experiences exist on a continuous spectrum in the general population, emerging from a stress-vulnerability (diathesis-stress) interaction rather than an all-or-nothing brain defect."
    },
    {
      title: "The Clinical Staging Model of Psychosis",
      author: "Patrick McGorry et al. (Orygen National Centre)",
      summary: "A paradigm shift moving away from late-stage pessimism: Stage 0 (Asymptomatic at-risk / family history); Stage 1a/1b (Ultra-High Risk [UHR] / Attenuated Psychosis Syndrome: subthreshold symptoms, distress, assessed via CAARMS); Stage 2 (First Episode Psychosis [FEP]: full-threshold positive symptoms); Stage 3 (Critical Period of 2–5 years post-onset: incomplete recovery, relapse risk); Stage 4 (Severe, chronic disability). Early intervention in Stages 1 and 2 significantly halts long-term neurocognitive decline."
    },
    {
      title: "CBT for Psychosis (CBTp): The 4-Phase Protocol",
      author: "Hagan et al. / Australian Clinical Practice Guidelines",
      summary: "CBTp is an evidence-based intervention delivered across four phases: (1) Engagement & Collaborative Alliance: establishing non-judgmental rapport and empathy; (2) Normalization & Psychoeducation: framing symptoms as misattributed cognitive intrusions on a human continuum; (3) Belief Modification & Coping: generating alternative non-threatening explanations for delusions using gentle curiosity ('Columbo technique') and developing voice-coping strategies; (4) Relapse Prevention & Recovery: identifying early warning signs, managing stress, and social reintegration."
    },
    {
      title: "Antipsychotic Complications, High Expressed Emotion & Physical Health Disparities",
      author: "Castle et al. / Allison et al. / Hjorthoj et al.",
      summary: "First-generation antipsychotics cause extrapyramidal symptoms (EPS: acute dystonia, parkinsonian rigidity, akathisia, tardive dyskinesia). Second-generation agents frequently induce severe metabolic syndrome (rapid weight gain, diabetes, cardiovascular illness). Schizophrenia is associated with a 14.5-year reduction in life expectancy. Psychosocially, families high in Expressed Emotion (EE: hostility, emotional over-involvement, frequent criticism) double patient relapse rates compared to low-EE families."
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "SCHIZOPHRENIA",
      code: "DSM-5 295.90 (F20.9)",
      name: "Schizophrenia",
      type: "Psychotic Spectrum Disorder (Chronic Full-Threshold)",
      ageRange: "Late Adolescence to Early Adulthood (Peak: Males 18-25, Females 25-35)",
      coreDefinition: "A chronic, debilitating neuropsychiatric disorder characterized by persistent disturbances in reality testing, cognition, affect, and behavior lasting for at least 6 months, with active-phase symptoms lasting at least 1 month.",
      dsmCriteria: [
        "Criterion A (Active Phase): Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated). At least one of these must be (1), (2), or (3):",
        "1. Delusions (firmly held idiosyncratic false beliefs resistant to counter-evidence).",
        "2. Hallucinations (perceptions occurring in the absence of external sensory stimuli, most commonly auditory).",
        "3. Disorganized speech (e.g., frequent derailment, loose associations, or incoherence/word salad).",
        "4. Grossly disorganized or catatonic behavior.",
        "5. Negative symptoms (i.e., diminished emotional expression, avolition, alogia, anhedonia, asociality).",
        "Criterion B: Level of functioning in one or more major areas (work, interpersonal relations, self-care) is markedly below the level achieved prior to the onset.",
        "Criterion C (Duration): Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of active-phase symptoms (or less if successfully treated) and may include prodromal or residual periods.",
        "Criterion D: Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out.",
        "Criterion E: The disturbance is not attributable to the physiological effects of a substance or another medical condition.",
        "Criterion F: If there is a history of ASD or communication disorder, the additional diagnosis of schizophrenia is made only if prominent delusions or hallucinations are present for at least 1 month."
      ],
      howToDiagnose: [
        "Comprehensive psychiatric diagnostic interview and longitudinal history.",
        "Assessment of Prodrome / At-Risk Mental State: Comprehensive Assessment of At Risk Mental States (CAARMS) or Structured Interview for Psychosis-Risk Syndromes (SIPS).",
        "Positive and Negative Syndrome Scale (PANSS) or Brief Psychiatric Rating Scale (BPRS).",
        "Medical and toxicological clearance: Urine drug screen (cannabis, amphetamines, synthetic cannabinoids), MRI brain (rule out tumor, stroke, encephalitis), autoimmune encephalitis panel (anti-NMDA receptor antibodies)."
      ],
      factorsLookedFor: [
        "Positive Symptoms: Persecutory delusions, delusions of reference (believing the TV/radio is sending hidden messages), audible running commentary voices, thought broadcast/insertion.",
        "Negative Symptoms: Flat blunted affect, avolition (inability to initiate goal-directed action), poverty of speech (alogia), profound apathy and hygiene decline.",
        "Cognitive Deficits: Marked impairment in working memory, executive function, processing speed, and verbal episodic memory.",
        "High Relapse Vulnerability: 70-82% experience another psychotic episode within 5 years of the first episode, heavily precipitated by cannabis misuse, medication discontinuation, and high family Expressed Emotion."
      ],
      potentialTreatments: [
        "Antipsychotic Pharmacotherapy: Atypical antipsychotics (Aripiprazole, Risperidone, Olanzapine; Clozapine for treatment-resistant presentations).",
        "Cognitive Behavioral Therapy for Psychosis (CBTp): Normalizing experiences, reattributing voices, developing coping mechanisms, testing alternative non-persecutory explanations.",
        "Family Psychoeducation & High Expressed Emotion (EE) Intervention: Training families to reduce criticism, hostile remarks, and over-involvement to halve relapse rates.",
        "Supported Employment & Social Recovery: Individual Placement and Support (IPS) vocational models, cognitive remediation, and peer support."
      ],
      clinicalPearl: "The Clinician's Illusion: Because psychologists and psychiatrists in acute inpatient units repeatedly treat the small fraction of chronic, relapsing patients, they develop a pessimistic bias that schizophrenia has 'no cure'. Long-term community follow-up studies (e.g., Vermont Study) show that over 60% of individuals achieve substantial recovery."
    },
    {
      id: "SCHIZOPHRENIFORM",
      code: "DSM-5 295.40 (F20.81)",
      name: "Schizophreniform Disorder",
      type: "Psychotic Spectrum Disorder (Intermediate Duration)",
      ageRange: "Late Adolescence to Early Adulthood",
      coreDefinition: "A psychotic disorder that exhibits the exact same symptomatic profile as schizophrenia (Criterion A symptoms), but where the total duration of the disturbance is at least 1 month but less than 6 months.",
      dsmCriteria: [
        "Criterion A: Two (or more) of the following, each present for a significant portion of time during a 1-month period. At least one must be (1), (2), or (3): (1) Delusions; (2) Hallucinations; (3) Disorganized speech; (4) Grossly disorganized or catatonic behavior; (5) Negative symptoms.",
        "Criterion B (Duration Boundary): An episode of the disorder lasts at least 1 month but LESS than 6 months. When the diagnosis must be made without waiting for recovery, it should be qualified as 'provisional'.",
        "Criterion C: Schizoaffective disorder and depressive/bipolar disorder with psychotic features have been excluded.",
        "Criterion D: Not attributable to the physiological effects of a substance or another medical condition.",
        "Specifiers: With good prognostic features (onset of prominent psychotic symptoms within 4 weeks of first noticeable change, confusion/perplexity, good premorbid social functioning, absence of blunted affect) vs Without good prognostic features."
      ],
      howToDiagnose: [
        "Chronological symptom tracking: Establishing exact onset date of prodromal or psychotic symptoms.",
        "Structured interview evaluating Criterion A symptom severity.",
        "Continuous monitoring: If symptoms persist beyond the 6-month mark (including residual functional impairment), the diagnosis MUST be updated to Schizophrenia.",
        "Toxicology and organic screening to rule out drug-induced psychosis."
      ],
      factorsLookedFor: [
        "The 1-to-6 Month Diagnostic Window: Symptoms have lasted longer than 1 month (excluding Brief Psychotic Disorder) but have not yet reached 6 months (excluding Schizophrenia).",
        "Provisional Status: Frequently assigned as a provisional diagnosis during First Episode Psychosis while observing the patient's recovery trajectory.",
        "Social/Occupational Impairment: Unlike schizophrenia, marked social/occupational dysfunction is NOT a required criterion (though commonly present).",
        "Outcome Trajectory: Approximately one-third of individuals recover within 6 months and retain the diagnosis of schizophreniform disorder; two-thirds will ultimately progress to Schizophrenia or Schizoaffective Disorder."
      ],
      potentialTreatments: [
        "Early Psychosis Intervention Service (EPI / Orygen model): Immediate multimodal care to reduce the Duration of Untreated Psychosis (DUP).",
        "Low-Dose Second-Generation Antipsychotic: Titrated cautiously to resolve positive symptoms while minimizing metabolic and neurological side effects.",
        "Phase 1 & 2 CBTp: Supportive engagement, psychoeducation, and stress management.",
        "Supportive Family Engagement: Crisis stabilization and hope-instilling psychoeducation."
      ],
      clinicalPearl: "Always watch the calendar! Schizophreniform is a diagnostic 'waiting room'. If the client reaches Day 181 (6 months + 1 day) with residual social withdrawal or negative symptoms, the diagnosis officially converts to Schizophrenia."
    },
    {
      id: "BRIEF_PSYCHOTIC",
      code: "DSM-5 298.8 (F23)",
      name: "Brief Psychotic Disorder",
      type: "Psychotic Spectrum Disorder (Acute / Short Duration)",
      ageRange: "Lifespan (Average onset in 30s; more common in females)",
      coreDefinition: "An acute, sudden-onset psychotic condition characterized by delusions, hallucinations, or disorganized speech lasting at least 1 day but less than 1 month, followed by eventual full return to premorbid functioning.",
      dsmCriteria: [
        "Criterion A: Presence of one (or more) of the following symptoms. At least one of these must be (1), (2), or (3):",
        "1. Delusions.",
        "2. Hallucinations.",
        "3. Disorganized speech (e.g., frequent derailment or incoherence).",
        "4. Grossly disorganized or catatonic behavior.",
        "Criterion B (Duration): Duration of an episode of the disturbance is at least 1 day but LESS than 1 month, with eventual full return to the premorbid level of functioning.",
        "Criterion C: Not better explained by major depressive or bipolar disorder with psychotic features, schizoaffective disorder, or schizophrenia, and not attributable to physiological effects of a substance or another medical condition.",
        "Specifiers: With marked stressor(s) ('brief reactive psychosis' in response to overwhelming traumatic events); Without marked stressor(s); With postpartum onset (during pregnancy or within 4 weeks postpartum)."
      ],
      howToDiagnose: [
        "Detailed chronological history confirming acute sudden onset (change from non-psychotic to clearly psychotic state within 2 weeks).",
        "Confirmation of resolution: Documenting complete return to baseline functioning within 30 days.",
        "Comprehensive differential screening: Ruling out substance-induced states (e.g., methamphetamine, synthetic cathinones), delirium, and neurological conditions (temporal lobe epilepsy).",
        "Assessment of psychosocial precipitants: Identifying catastrophic life stressors (bereavement, severe trauma, acute relationship collapse)."
      ],
      factorsLookedFor: [
        "Acute Turmoil & Perplexity: Rapid onset of intense emotional turmoil, confusion, bizarre delusions, and hallucinatory experiences over hours or days.",
        "Reactive Context: Frequently precipitated by overwhelming, extreme psychosocial stress (e.g., war, natural disaster, sudden death of a child).",
        "Absence of Negative Symptoms: Negative symptoms (flat affect, avolition) are NOT part of the diagnostic criteria for Brief Psychotic Disorder.",
        "Complete Premorbid Recovery: Once the acute episode remits, the individual regains full cognitive, emotional, and occupational capacity."
      ],
      potentialTreatments: [
        "Crisis Safety & Short-Term Inpatient Admission: Ensuring immediate physical protection from bizarre behaviors or persecutory panic.",
        "Short-Term Antipsychotic & Benzodiazepine Pharmacotherapy: Low-dose atypical antipsychotic paired with short-term benzodiazepine to restore sleep and terminate acute agitation.",
        "Crisis CBT & Supportive Psychotherapy: Validating the terrifying nature of the episode, debriefing the trauma of acute psychosis, and restoring a sense of safety.",
        "Gradual Tapering of Medication: Withdrawing antipsychotics once stability and full remission are maintained for several months."
      ],
      clinicalPearl: "Brief Psychotic Disorder has an excellent prognosis! Unlike Schizophrenia, it has no negative symptoms and requires a 100% full return to premorbid functioning within 30 days."
    },
    {
      id: "SCHIZOAFFECTIVE",
      code: "DSM-5 295.70 (F25.0 / F25.1)",
      name: "Schizoaffective Disorder",
      type: "Psychotic Spectrum Disorder (Psychosis + Mood Concurrent)",
      ageRange: "Early Adulthood (Prevalence ~0.3%)",
      coreDefinition: "A disorder characterized by an uninterrupted period of illness during which there is a major mood episode (depressive or manic) concurrent with Criterion A symptoms of schizophrenia, alongside at least 2 weeks of delusions or hallucinations in the absence of a major mood episode.",
      dsmCriteria: [
        "Criterion A: An uninterrupted period of illness during which there is a major mood episode (major depressive or manic) concurrent with Criterion A of schizophrenia (delusions, hallucinations, disorganized speech, disorganized behavior, negative symptoms). Note: If depressive, must include depressed mood (Criterion A1).",
        "Criterion B (The Critical 2-Week Rule): Delusions or hallucinations for 2 or more weeks in the ABSENCE of a major mood episode (depressive or manic) during the lifetime duration of the illness.",
        "Criterion C: Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness.",
        "Criterion D: The disturbance is not attributable to the effects of a substance or another medical condition.",
        "Subtype Specifiers: Bipolar Type (includes manic episodes, with or without major depressive episodes) vs Depressive Type (includes only major depressive episodes)."
      ],
      howToDiagnose: [
        "Meticulous longitudinal mood and psychotic timeline: Constructing a life chart mapping mood episodes against psychotic symptoms.",
        "Verification of Criterion B: Clinician MUST prove that the patient experienced delusions or hallucinations for at least 2 continuous weeks when their mood was completely normal (euthymic).",
        "SCID-5-PD or SCID-5-CT interview.",
        "Differentiating from Bipolar/Depressive Disorder with Psychotic Features (where psychosis ONLY ever occurs during an active mood episode)."
      ],
      factorsLookedFor: [
        "The Diagnostic Bridge: Represents a nosological hybrid between pure schizophrenia and affective mood disorders.",
        "The 2-Week Psychotic Window: The definitive clinical marker; hearing voices or harboring persecutory delusions when mood is completely euthymic.",
        "Mood Predominance: Mood episodes must occupy the majority (>50%) of the total lifetime illness course.",
        "Prognosis: Intermediate prognosis — generally better functional outcomes than pure Schizophrenia, but more persistent chronic disability than Bipolar I Disorder."
      ],
      potentialTreatments: [
        "Dual Pharmacotherapy: Atypical antipsychotics (Paliperidone is FDA/TGA approved specifically for schizoaffective disorder) combined with Mood Stabilizers (Lithium, Valproate for Bipolar type) or SSRIs/SNRIs (for Depressive type).",
        "Integrated CBT for Psychosis and Mood: Combining CBTp (belief modification, voice reattribution) with behavioral activation and cognitive therapy for depression.",
        "Interpersonal and Social Rhythm Therapy (IPSRT): Maintaining strict circadian regularity to prevent affective triggers.",
        "Caregiver & High Expressed Emotion Interventions."
      ],
      clinicalPearl: "The Golden Differential Rule: Ask the patient: 'Have you ever heard voices or had special beliefs when your mood was completely normal, happy, and not depressed?' If YES for >=2 weeks -> Schizoaffective Disorder. If NO (psychosis only happens when severely depressed or manic) -> Mood Disorder with Psychotic Features!"
    },
    {
      id: "DELUSIONAL",
      code: "DSM-5 297.1 (F22)",
      name: "Delusional Disorder",
      type: "Psychotic Spectrum Disorder (Encapsulated Delusional)",
      ageRange: "Middle to Late Adulthood (Peak onset ~40-50 years)",
      coreDefinition: "A psychotic disorder characterized by the presence of one or more delusions persisting for at least 1 month, in an individual whose functioning is NOT markedly impaired and whose behavior is not obviously bizarre or odd outside the specific delusional belief.",
      dsmCriteria: [
        "Criterion A: The presence of one (or more) delusions with a duration of 1 month or longer.",
        "Criterion B: Criterion A for schizophrenia has NEVER been met. Note: Hallucinations, if present, are not prominent and are related to the delusional theme (e.g., sensation of insects crawling on skin in delusional parasitosis).",
        "Criterion C: Apart from the impact of the delusion(s) or its ramifications, functioning is NOT markedly impaired, and behavior is not obviously bizarre or odd.",
        "Criterion D: If manic or major depressive episodes have occurred, these have been brief relative to the duration of the delusional periods.",
        "Criterion E: The disturbance is not attributable to physiological effects of a substance or another medical condition.",
        "Subtype Specifiers: Erotomanic (another person is in love with them); Grandiose (having great unrecognized talent/insight); Jealous (spouse/lover is unfaithful); Persecutory (being conspired against, spied on, poisoned); Somatic (bodily functions/sensations, parasitosis); Mixed; Unspecified."
      ],
      howToDiagnose: [
        "Comprehensive mental state examination: Evaluating the encapsulation of the delusion.",
        "Assessment of general functioning: Verifying that occupational skills, speech coherence, personal hygiene, and interpersonal manners remain completely intact outside the delusion.",
        "Absence of prominent hallucinations, negative symptoms, or formal thought disorder.",
        "Careful organic screening: Late-onset delusions require neuroimaging (MRI) and metabolic screening to rule out stroke, early frontotemporal dementia, or endocrine disorders."
      ],
      factorsLookedFor: [
        "Encapsulated Delusional System: The delusion is often logically constructed, systematized, and tightly organized; the patient argues their case with compelling forensic detail.",
        "Intact General Functioning: The patient continues to run businesses, manage accounts, and converse normally, until the specific topic of the delusion is raised.",
        "Subtype Features: Erotomanic (stalking celebrities or bosses); Jealous (accusing spouse of infidelity based on a speck of dust on the bedsheet); Somatic (obsessed with foul body odor or parasites under skin).",
        "Litigious Behavior: Frequent lawsuits, complaints to ombudsmen, and letters to government ministers regarding their perceived persecution."
      ],
      potentialTreatments: [
        "CBTp Adapted for Delusions: Therapeutic alliance is paramount; NEVER directly confront or validate the delusion. Adopt the 'Columbo Technique' (gentle curiosity and confusion).",
        "Working on Peripheral Beliefs: Exploring distress and consequences of the belief ('It sounds exhausting having to check the locks all night; can we work on your sleep?').",
        "Pharmacotherapy: Second-generation antipsychotics (e.g., Aripiprazole, Risperidone), though treatment adherence is notoriously poor due to complete lack of insight.",
        "Harm Reduction & Legal Counseling: Preventing stalking, lawsuits, or violent retaliation against suspected infidel partners or persecutors."
      ],
      clinicalPearl: "Never argue with a delusion! Directly telling a patient with Delusional Disorder that their belief is impossible will immediately get you incorporated into the conspiracy as an enemy agent. Use the Columbo Technique: 'Help me understand how you discovered this...'"
    },
    {
      id: "SUBSTANCE_PSYCHOSIS",
      code: "DSM-5 293.9 (F10-F19)",
      name: "Substance/Medication-Induced Psychotic Disorder",
      type: "Substance-Related & Secondary Psychotic Disorder",
      ageRange: "All Ages (High prevalence in adolescents and young adults)",
      coreDefinition: "Psychotic disorder characterized by prominent delusions and/or hallucinations that develop during or soon after substance intoxication, withdrawal, or exposure to a medication known to induce psychosis.",
      dsmCriteria: [
        "Criterion A: Presence of one or both of the following symptoms: (1) Delusions; (2) Hallucinations.",
        "Criterion B: Evidence from history, physical exam, or lab findings of both: (1) The symptoms in Criterion A developed during or soon after substance intoxication or withdrawal, or after exposure to a medication; (2) The involved substance/medication is capable of producing the symptoms in Criterion A.",
        "Criterion C: The disturbance is NOT better explained by a psychotic disorder that is not substance/medication-induced (e.g., psychotic symptoms preceded the onset of substance use; symptoms persist for a substantial period, typically >1 month, after cessation of acute withdrawal or intoxication).",
        "Criterion D: Does not occur exclusively during the course of a delirium.",
        "Criterion E: Causes clinically significant distress or impairment.",
        "Common Etiological Agents: Methamphetamine, Cannabis (especially high-potency synthetic cannabinoids), Cocaine, Alcohol withdrawal (delirium tremens/alcoholic hallucinosis), Phencyclidine (PCP), Ketamine, Corticosteroids, Dopamine agonists."
      ],
      howToDiagnose: [
        "Immediate comprehensive urine and blood toxicological screening.",
        "Detailed timeline of substance ingestion versus psychotic symptom emergence.",
        "Observation period during cessation: Re-evaluating mental state over 2 to 4 weeks of verified abstinence in a secure/monitored environment.",
        "Dual Diagnosis Evaluation: Determining whether substance use was an attempt to self-medicate a pre-existing prodrome versus the primary causal agent."
      ],
      factorsLookedFor: [
        "Methamphetamine / Stimulant Psychosis: Intense paranoid delusions of persecution, formication (tactile hallucinations of bugs under the skin / 'crank bugs'), extreme agitation, hypervigilance.",
        "Cannabis-Induced Psychosis: Referential ideas, auditory perceptual distortions, depersonalization, depersonalization-derealization, panic.",
        "Rapid Resolution Upon Abstinence: Most substance-induced psychoses resolve completely within several days to a few weeks once toxic metabolites clear.",
        "Persistence Warning: In genetically vulnerable individuals, substance-induced psychotic episodes can catalyze the permanent onset of chronic Schizophrenia."
      ],
      potentialTreatments: [
        "Acute Medical De-escalation: Low-stimulus environment, short-term atypical antipsychotic (Olanzapine/Risperidone), and benzodiazepines (Diazepam) for acute agitation.",
        "Motivational Interviewing & Harm Reduction: Exploring the link between substance use and terrifying psychotic experiences.",
        "Integrated Dual Diagnosis Treatment (IDDT): Treating substance use disorder concurrently with mental health interventions.",
        "Long-Term Relapse Prevention: Ongoing substance monitoring and psychoeducation regarding the neurotoxic risk of cannabis and stimulants on dopamine pathways."
      ],
      clinicalPearl: "The 1-Month Rule: If delusions and hallucinations continue unabated 4 weeks after complete, verified toxicological clearance of the substance, you are no longer dealing with a simple substance-induced psychosis; the drug has likely unmasked an underlying Schizophrenia Spectrum Disorder."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "PSYCHOSIS_TIMEFRAME": {
      title: "Brief Psychotic vs. Schizophreniform vs. Schizophrenia (The Duration Spectrum)",
      commonality: "All three disorders can present with identical active-phase psychotic symptoms: delusions, hallucinations, and disorganized speech.",
      distinguishingMarkers: [
        {
          feature: "Duration Threshold Boundary",
          conditionA: "Brief Psychotic Disorder: Lasts at least 1 day but LESS than 1 month, followed by 100% full return to premorbid functioning.",
          conditionB: "Schizophreniform Disorder: Lasts at least 1 month but LESS than 6 months (provisional until 6 months is reached).",
          conditionC: "Schizophrenia: Continuous signs of the disturbance persist for at least 6 months (including at least 1 month of active symptoms)."
        },
        {
          feature: "Negative Symptoms & Functional Impairment",
          conditionA: "Brief Psychotic: Negative symptoms are ABSENT; functional return is complete.",
          conditionB: "Schizophreniform: Negative symptoms may be present; functional decline is common but not strictly required.",
          conditionC: "Schizophrenia: Negative symptoms (flat affect, avolition) are prominent; severe functional decline is a mandatory criterion."
        },
        {
          feature: "Typical Etiological Precipitants",
          conditionA: "Brief Psychotic: Frequently triggered by acute severe traumatic psychosocial stressors or postpartum onset.",
          conditionB: "Schizophreniform: Mixed; early stage of neurodevelopmental emergence.",
          conditionC: "Schizophrenia: Complex genetic neurodevelopmental diathesis interacting with developmental stress/substances."
        }
      ],
      ruleInRuleOut: {
        ruleInBrief: "Rule in Brief Psychotic: Full remission within 30 days; sudden onset following trauma; no negative symptoms.",
        ruleInSchizophreniform: "Rule in Schizophreniform: Active symptoms have persisted between 1 and 6 months; monitor trajectory.",
        ruleInSchizophrenia: "Rule in Schizophrenia: Continuous signs of illness (including prodromal/residual decline) exceed 6 months.",
        pitfallToAvoid: "Never diagnose Schizophrenia on week 3 of a first episode! A client must be followed longitudinally; until 6 months of total disturbance elapse, the correct diagnosis is Schizophreniform (Provisional)."
      },
      contrastingTreatments: {
        treatmentA_Name: "Brief Psychotic Care Pathway",
        treatmentA_Steps: "Short-term crisis stabilization, low-dose antipsychotic/benzodiazepine, trauma-informed debriefing, gradual medication taper.",
        treatmentB_Name: "Schizophrenia Comprehensive Model",
        treatmentB_Steps: "Long-term atypical antipsychotic, 4-phase CBTp, family High-EE psychoeducation, supported employment (IPS), and relapse prevention."
      }
    },

    "SCHIZOAFFECTIVE_MOOD": {
      title: "Schizoaffective Disorder vs. Mood Disorder with Psychotic Features",
      commonality: "Both feature major depressive or manic episodes co-occurring with delusions and hallucinations.",
      distinguishingMarkers: [
        {
          feature: "The 2-Week Psychotic Independence Rule",
          conditionA: "Schizoaffective Disorder: Delusions or hallucinations MUST persist for at least 2 consecutive weeks in the ABSENCE of any major mood episode.",
          conditionB: "Mood Disorder with Psychosis: Psychosis occurs EXCLUSIVELY during active depressive or manic episodes; vanishes when mood normalizes."
        },
        {
          feature: "Lifetime Proportion of Mood Symptoms",
          conditionA: "Schizoaffective Disorder: Mood episodes must be present for the majority (>50%) of the total active/residual illness course.",
          conditionB: "Mood Disorder with Psychosis: Mood symptoms are the primary driver; psychotic symptoms are secondary mood-congruent or mood-incongruent features."
        },
        {
          feature: "Prognosis & Functional Trajectory",
          conditionA: "Schizoaffective Disorder: Intermediate trajectory; between-episode residual cognitive and psychotic symptoms are common.",
          conditionB: "Mood Disorder with Psychosis: Favorable inter-episode recovery; reality testing is 100% intact when euthymic."
        }
      ],
      ruleInRuleOut: {
        ruleInSchizoaffective: "Rule in Schizoaffective: Patient reports hearing voices or having delusions during a multi-week period when their mood was completely stable/euthymic.",
        ruleInMoodPsychosis: "Rule in Mood Disorder with Psychosis: Hallucinations and delusions disappear entirely whenever the depression or mania resolves.",
        pitfallToAvoid: "Do not confuse mood-incongruent delusions with schizoaffective disorder. A depressed patient with delusions of alien control still has Depression with Psychosis if those delusions ONLY happen while severely depressed."
      },
      contrastingTreatments: {
        treatmentA_Name: "Schizoaffective Dual Treatment",
        treatmentA_Steps: "Dual-target pharmacotherapy (Paliperidone or Atypical Antipsychotic + Mood Stabilizer/SSRI) + CBTp + Social Rhythm therapy.",
        treatmentB_Name: "Mood Disorder with Psychosis Protocol",
        treatmentB_Steps: "Primary mood stabilization (Antidepressant + Antipsychotic or ECT for severe psychotic depression), tapering antipsychotic after mood remits."
      }
    },

    "DELUSIONAL_SCHIZOPHRENIA": {
      title: "Delusional Disorder vs. Schizophrenia",
      commonality: "Both disorders feature firmly entrenched delusional beliefs that persist over months or years.",
      distinguishingMarkers: [
        {
          feature: "Encapsulation & General Functioning",
          conditionA: "Delusional Disorder: Delusions are tightly encapsulated; functioning outside the specific delusional topic is remarkably preserved and intact.",
          conditionB: "Schizophrenia: Pervasive, severe impairment across work, relationships, self-care, and daily functioning across all life domains."
        },
        {
          feature: "Hallucinations & Formal Thought Disorder",
          conditionA: "Delusional Disorder: No prominent auditory hallucinations; no formal thought disorder (speech is articulate, logical, and coherent).",
          conditionB: "Schizophrenia: Prominent hallucinations (voices commenting/arguing), disorganized speech (derailment, loose associations, word salad)."
        },
        {
          feature: "Negative Symptoms",
          conditionA: "Delusional Disorder: ABSENCE of negative symptoms (no avolition, no flat affect, no social blunting).",
          conditionB: "Schizophrenia: Negative symptoms are prominent and often the primary driver of lifelong disability."
        }
      ],
      ruleInRuleOut: {
        ruleInDelusional: "Rule in Delusional Disorder: Non-bizarre or bizarre delusions lasting >=1 month; clean speech, normal grooming, intact career, zero negative symptoms.",
        ruleInSchizophrenia: "Rule in Schizophrenia: Meets full Criterion A (hallucinations, thought disorder, negative symptoms, avolition) with global functional decline.",
        pitfallToAvoid: "Do not assume all delusions mean schizophrenia. An individual who functions brilliantly as an accountant but believes their spouse is cheating has Delusional Disorder."
      },
      contrastingTreatments: {
        treatmentA_Name: "Delusional Disorder Alliance Pathway",
        treatmentA_Steps: "CBTp with Columbo curiosity on peripheral distress; avoiding direct reality confrontation; low-dose antipsychotic trials; harm reduction.",
        treatmentB_Name: "Schizophrenia Multimodal Pathway",
        treatmentB_Steps: "Comprehensive antipsychotic pharmacotherapy, CBTp for voices/beliefs, family High-EE psychoeducation, NDIS psychosocial support."
      }
    },

    "SUBSTANCE_PRIMARY": {
      title: "Substance-Induced Psychosis vs. Primary Psychosis (Schizophrenia)",
      commonality: "Both present with intense persecutory delusions, auditory or visual hallucinations, and severe behavioral agitation.",
      distinguishingMarkers: [
        {
          feature: "Timeline of Onset & Offset",
          conditionA: "Substance-Induced Psychosis: Directly coincides with substance intoxication or acute withdrawal; completely resolves within days to weeks of abstinence.",
          conditionB: "Primary Psychosis: Persists long after toxic metabolites clear; symptoms frequently preceded the onset of substance use.",
        },
        {
          feature: "The 1-Month Persistence Rule",
          conditionA: "Substance-Induced Psychosis: DSM-5 specifies that if psychotic symptoms persist for more than 1 month after confirmed abstinence, primary psychosis must be considered.",
          conditionB: "Primary Psychosis: Continuous course enduring for months/years regardless of verified negative toxicology."
        },
        {
          feature: "Premorbid History & Basic Symptoms",
          conditionA: "Substance-Induced Psychosis: Normal premorbid social functioning and school performance prior to heavy drug initiation.",
          conditionB: "Primary Psychosis: Clear history of prodromal neurodevelopmental decline (social withdrawal, dropping grades, basic symptoms) before drug use."
        }
      ],
      ruleInRuleOut: {
        ruleInSubstance: "Rule in Substance-Induced: Positive toxicology screen, rapid onset during binge, rapid clearance within 7-14 days of supervised detox.",
        ruleInPrimary: "Rule in Primary Psychosis: Psychosis persists >4 weeks into verified abstinence, or prodromal symptoms preceded drug initiation.",
        pitfallToAvoid: "Beware the dual diagnosis trap: Up to 50% of schizophrenia patients use cannabis/amphetamines. Do not dismiss schizophrenia as 'just drugs' if prodromal decline was evident."
      },
      contrastingTreatments: {
        treatmentA_Name: "Substance-Induced Protocol",
        treatmentA_Steps: "Medical detoxification, short-term atypical antipsychotic taper, motivational interviewing, dual diagnosis addiction rehabilitation.",
        treatmentB_Name: "Primary Schizophrenia Protocol",
        treatmentB_Steps: "Maintenance antipsychotic pharmacotherapy, long-term CBTp, family support, relapse prevention monitoring."
      }
    }
  },

  // Interactive Differential Presets
  differentialPresets: [
    { label: "Duration Spectrum (Brief vs. Schizophreniform vs. Schizophrenia)", ids: ["BRIEF_PSYCHOTIC", "SCHIZOPHRENIFORM", "SCHIZOPHRENIA"] },
    { label: "Schizoaffective vs. Primary Mood Psychosis", ids: ["SCHIZOAFFECTIVE", "SCHIZOPHRENIA"] },
    { label: "Delusional Disorder vs. Schizophrenia", ids: ["DELUSIONAL", "SCHIZOPHRENIA"] },
    { label: "Substance-Induced vs. Primary Psychosis", ids: ["SUBSTANCE_PSYCHOSIS", "SCHIZOPHRENIA"] },
    { label: "All Psychotic Spectrum Disorders", ids: ["SCHIZOPHRENIA", "SCHIZOPHRENIFORM", "BRIEF_PSYCHOTIC", "SCHIZOAFFECTIVE", "DELUSIONAL", "SUBSTANCE_PSYCHOSIS"] }
  ],

  // Clinical Practice Scenarios
  scenarios: [
    {
      id: "M10_SCENARIO_1",
      title: "Scenario 1: Tyler (19yo) — The Slipping Student & Whispering Radiators",
      presentation: "Tyler, a 19-year-old engineering student, is brought to the university mental health service by his mother. Over the past eight months, Tyler has transformed from an active, social student into a recluse. His grades have plummeted from distinctions to fails because he cannot concentrate. He spends days sitting in his darkened bedroom with foil over the windows, explaining that he feels 'electrically scrutinized by the university Wi-Fi.' For the last three months, Tyler has heard quiet, muffled whispering coming from the wall radiator when he is alone at night, though he cannot make out distinct words. When asked whether he thinks the Wi-Fi is definitely spying on him, Tyler pauses perplexedly and says: 'I know it sounds crazy, but it just feels so real and terrifying. What else could explain why my skin prickles?' He has never had a full manic or depressive episode and urine toxicology is completely negative for drugs.",
      step1: {
        prompt: "Step 1: Clinical Staging & Diagnosis — Utilizing the Orygen Clinical Staging Model (McGorry) and DSM-5 framework, how should Tyler's presentation be classified?",
        options: [
          { text: "Stage 1b: Ultra-High Risk (UHR) / Attenuated Psychosis Syndrome (At-Risk Mental State)", isCorrect: true },
          { text: "Stage 2: Chronic Schizophrenia", isCorrect: false },
          { text: "Brief Psychotic Disorder", isCorrect: false },
          { text: "Social Anxiety Disorder with somatic worries", isCorrect: false }
        ],
        hint: "Tyler has subthreshold/attenuated psychotic symptoms (perceptual abnormalities, suspiciousness) with preserved insight ('I know it sounds crazy'), falling into the prodromal/UHR stage.",
        explanation: "Tyler fits the criteria for Stage 1b in McGorry's Clinical Staging Model: Ultra-High Risk (UHR) for psychosis / Attenuated Psychosis Syndrome. He presents with attenuated positive symptoms (perceptual whispers, referential suspiciousness about Wi-Fi) with intact or fluctuating insight, cognitive decline, and social withdrawal, evaluated clinically via the CAARMS."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Early Intervention — What is the guideline-recommended intervention plan for Tyler at Stage 1b?",
        options: [
          { text: "Early intervention CBT for psychosis (CBTp) focusing on normalization, stress reduction, and cognitive reappraisal, combined with omega-3 fatty acids and close clinical monitoring, avoiding high-dose antipsychotics.", isCorrect: true },
          { text: "Immediate high-dose Haloperidol and involuntary hospital admission.", isCorrect: false },
          { text: "Reassuring Tyler that he is completely fine and discharging him with no follow-up.", isCorrect: false },
          { text: "Exposure therapy forcing Tyler to sit next to the Wi-Fi router for 4 hours.", isCorrect: false }
        ],
        hint: "At the Ultra-High Risk prodromal stage, clinical practice guidelines recommend CBTp and supportive psychosocial care; high-dose antipsychotics are not first-line.",
        explanation: "In Stage 1b (UHR prodrome), international guidelines (Orygen/NICE) recommend CBTp (normalizing intrusive experiences, stress management, sleep hygiene) and monitoring. High-dose antipsychotics are avoided due to metabolic side effects and because up to 60-70% of UHR individuals will not transition to full psychosis if given early psychological support."
      }
    },
    {
      id: "M10_SCENARIO_2",
      title: "Scenario 2: Liam (22yo) — The Acute Exam Breakdown",
      presentation: "Liam, a 22-year-old law graduate, is admitted to an acute psychiatric unit following an incident at his law firm. During final bar exam preparations, while sleeping only 2 hours a night, Liam suddenly stood up, announced that his colleagues were MI6 operatives poisoning the water cooler, and ran into the street screaming that drones were scanning his brain. On admission, Liam is terrified, hypervigilant, and experiencing audible running commentary voices: 'He is sitting down now; he is guilty.' Urine toxicology is clean. After 5 days of low-dose Risperidone and sleep restoration, Liam's hallucinations and persecutory delusions begin to recede. By Day 21, all psychotic symptoms have completely vanished. Liam expresses profound embarrassment, has full insight into the irrationality of his beliefs, and displays warm, normal affect. Total duration of the psychotic episode from onset to complete resolution was exactly 22 days.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the definitive DSM-5 diagnosis for Liam?",
        options: [
          { text: "Brief Psychotic Disorder, with marked stressor (Duration 22 days)", isCorrect: true },
          { text: "Schizophreniform Disorder", isCorrect: false },
          { text: "Schizophrenia, Paranoid Type", isCorrect: false },
          { text: "Substance-Induced Psychotic Disorder", isCorrect: false }
        ],
        hint: "The episode lasted more than 1 day but less than 1 month (22 days) and resolved with a 100% full return to premorbid functioning following an extreme stressor.",
        explanation: "Liam meets full DSM-5 criteria for Brief Psychotic Disorder (with marked stressor). The total duration of active psychotic symptoms was 22 days (strictly within the 1-day to 1-month boundary), was precipitated by catastrophic exam stress and sleep deprivation, and ended with a complete return to premorbid functioning with zero negative symptoms."
      },
      step2: {
        prompt: "Step 2: Post-Acute Management & Recovery — What is the appropriate treatment strategy for Liam following discharge?",
        options: [
          { text: "Short-term continuation of low-dose antipsychotic for a few months, psychological debriefing of the psychotic trauma (CBTp Phase 1 & 2), and a planned gradual medication taper with a relapse prevention plan.", isCorrect: true },
          { text: "Informing Liam he has incurable schizophrenia and must take lifelong antipsychotic injections.", isCorrect: false },
          { text: "Immediate abrupt cessation of all medications on the day of discharge.", isCorrect: false },
          { text: "Prescribing high-dose stimulants to help him finish his bar exams.", isCorrect: false }
        ],
        hint: "Brief Psychotic Disorder has an excellent prognosis; management involves short-term stabilization, processing the trauma, and a planned taper.",
        explanation: "Because Liam has fully recovered from a Brief Psychotic Disorder, prognosis is excellent. Management involves continuing low-dose antipsychotic for a brief consolidation period (e.g., 3-6 months), psychological therapy to process the trauma of the acute breakdown, sleep hygiene, stress inoculation, and a planned gradual medication taper under medical supervision."
      }
    },
    {
      id: "M10_SCENARIO_3",
      title: "Scenario 3: Sarah (28yo) — Voices in Euthymia & Depressive Crashes",
      presentation: "Sarah, a 28-year-old librarian, is referred for comprehensive diagnostic clarification. For the past two years, Sarah has experienced daily auditory hallucinations (hearing two male voices arguing outside her bedroom window about whether she should be executed) and persecutory delusions that her telephone is tapped. During these two years, Sarah experienced two distinct 8-week episodes of severe Major Depressive Episodes (profound sadness, psychomotor retardation, insomnia, feelings of worthlessness, active suicidal intent). However, after both depressive episodes remitted with antidepressant therapy, Sarah's auditory hallucinations and persecutory delusions continued unabated for five consecutive months while her mood was completely euthymic, cheerful, and stable.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — Applying the DSM-5 differential criteria, what is Sarah's diagnosis?",
        options: [
          { text: "Schizoaffective Disorder, Depressive Type", isCorrect: true },
          { text: "Major Depressive Disorder with Psychotic Features", isCorrect: false },
          { text: "Bipolar I Disorder with psychotic features", isCorrect: false },
          { text: "Delusional Disorder, Persecutory Type", isCorrect: false }
        ],
        hint: "Notice that Sarah experienced delusions and hallucinations for 5 consecutive months when her mood was completely normal (fulfilling Criterion B's 2-week rule), co-occurring with major depressive episodes.",
        explanation: "Sarah meets DSM-5 criteria for Schizoaffective Disorder, Depressive Type. She satisfies Criterion B (the critical 2-week rule): she experienced delusions and hallucinations for at least 2 weeks (in her case, 5 continuous months) in the complete ABSENCE of a major depressive episode, alongside major depressive episodes occupying a substantial portion of the total illness."
      },
      step2: {
        prompt: "Step 2: Multimodal Treatment Architecture — What is the evidence-based management plan for Sarah?",
        options: [
          { text: "Combination pharmacotherapy (Atypical Antipsychotic + Antidepressant) paired with CBT for psychosis (CBTp) targeting voice reattribution and mood monitoring.", isCorrect: true },
          { text: "Antidepressant monotherapy alone without any antipsychotic medication.", isCorrect: false },
          { text: "Psychoanalysis exploring unconscious hostility toward the voices.", isCorrect: false },
          { text: "Advising Sarah to ignore the voices without any clinical treatment.", isCorrect: false }
        ],
        hint: "Schizoaffective disorder requires dual-target pharmacotherapy (antipsychotic for reality testing + antidepressant for mood) combined with CBTp.",
        explanation: "Schizoaffective disorder requires dual-target management: an atypical antipsychotic (such as Paliperidone, which is specifically approved for schizoaffective disorder) to control hallucinations and delusions, combined with an antidepressant (SSRI/SNRI) for mood stability. Psychologically, CBTp helps Sarah reattribute the voices as internal cognitive events and develop voice-coping strategies."
      }
    },
    {
      id: "M10_SCENARIO_4",
      title: "Scenario 4: Arthur (54yo) — The Dental Filling Conspiracy",
      presentation: "Arthur, a 54-year-old senior corporate auditor, is referred by his GP at the request of his dentist. Arthur has presented to six different dental surgeries demanding that all four of his silver amalgam fillings be extracted. He calmly and systematically explains to you that three years ago, during an audit of a defense contractor, Australian intelligence operatives secretly implanted micro-transmitters in his fillings to monitor his thoughts. He presents a 40-page dossier containing detailed flight logs, radio frequencies, and dates that he claims prove the surveillance. Outside of this belief, Arthur lives a completely functional life: he has worked at his accounting firm for 25 years without any performance issues, manages complex million-dollar budgets, grooms himself immaculately, speaks eloquently without any loose associations, and denies ever hearing voices. His wife confirms that outside of his obsession with his fillings, Arthur is a loving, rational, and responsible husband.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the diagnosis for Arthur?",
        options: [
          { text: "Delusional Disorder, Persecutory Type (Somatic/Persecutory theme)", isCorrect: true },
          { text: "Schizophrenia, Paranoid Type", isCorrect: false },
          { text: "Paranoid Personality Disorder", isCorrect: false },
          { text: "Obsessive-Compulsive Disorder", isCorrect: false }
        ],
        hint: "Arthur has a firmly held delusion lasting >1 month, but his cognitive functioning, speech, employment, and interpersonal manners outside the delusion are completely intact. No hallucinations, no negative symptoms.",
        explanation: "Arthur fulfills full DSM-5 criteria for Delusional Disorder (Persecutory Type). His delusion has persisted for 3 years, is tightly encapsulated, and does not markedly impair his daily functioning or behavior outside the delusion. He has never met Criterion A for schizophrenia (no hallucinations, no formal thought disorder, no negative symptoms)."
      },
      step2: {
        prompt: "Step 2: Therapeutic Engagement & CBTp Technique — How should the psychologist approach Arthur's delusional belief in therapy?",
        options: [
          { text: "Adopt the 'Columbo Technique' of gentle curiosity and confusion; avoid directly confronting or validating the delusion; focus on peripheral distress and sleep/stress management.", isCorrect: true },
          { text: "Immediately tell Arthur that his belief is medically and scientifically impossible and demand that he shred his dossier.", isCorrect: false },
          { text: "Validate Arthur's belief and offer to help him sue the defense contractor.", isCorrect: false },
          { text: "Refer Arthur for immediate involuntary electroconvulsive therapy (ECT).", isCorrect: false }
        ],
        hint: "In CBTp for Delusional Disorder, head-on confrontation triggers intense defensive resistance. The clinician uses the Columbo technique to explore evidence with gentle curiosity.",
        explanation: "In Delusional Disorder, head-on confrontation of the delusion destroys the therapeutic alliance and causes the patient to incorporate the therapist into the conspiracy. The gold-standard CBTp approach is the 'Columbo Technique': adopting a stance of gentle curiosity and confusion ('Help me understand how you discovered this...'), focusing on peripheral distress (dental health, stress), and gently exploring alternative explanations."
      }
    }
  ],

  // Short Answer & Essay Practice
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "M10_SAQ_1",
        title: "SAQ 1: The Duration Differential in Psychotic Disorders",
        prompt: "Differentiate Brief Psychotic Disorder, Schizophreniform Disorder, and Schizophrenia based on: (1) duration thresholds, (2) requirement of negative symptoms, and (3) expected functional recovery. (5 marks)",
        criteria: [
          "Brief Psychotic Disorder: Duration is at least 1 day but less than 1 month (<30 days); negative symptoms are ABSENT; requires 100% full return to premorbid functioning.",
          "Schizophreniform Disorder: Duration is at least 1 month but less than 6 months; negative symptoms MAY be present; functional decline is common but not mandatory; ~1/3 recover, ~2/3 progress to Schizophrenia.",
          "Schizophrenia: Continuous signs of illness persist for at least 6 months (including >=1 month of active Criterion A symptoms); negative symptoms are prominent; marked decline in social/occupational functioning is a mandatory diagnostic requirement.",
          "Clinical practice implication: Use 'Schizophreniform (Provisional)' during the first 6 months of a first episode before assigning Schizophrenia."
        ],
        modelAnswer: "1. Duration Threshold Boundaries:\n- Brief Psychotic Disorder: An episode lasts at least 1 day but less than 1 month (under 30 days).\n- Schizophreniform Disorder: The disturbance lasts at least 1 month but less than 6 months. If a client is assessed before 6 months have elapsed and has not recovered, the diagnosis is designated as 'Provisional'.\n- Schizophrenia: Continuous signs of the disturbance must persist for at least 6 months, which must include at least 1 month of active-phase symptoms (delusions, hallucinations, disorganized speech).\n\n2. Negative Symptoms Requirement:\n- Brief Psychotic Disorder: Negative symptoms (flat affect, avolition, alogia) are NOT included in the diagnostic criteria.\n- Schizophreniform Disorder: Negative symptoms may be present as one of the Criterion A indicators.\n- Schizophrenia: Negative symptoms are a core feature of the illness and represent the primary driver of long-term disability.\n\n3. Expected Functional Recovery:\n- Brief Psychotic Disorder: Full, 100% return to the individual's premorbid level of functioning is mandatory.\n- Schizophreniform Disorder: Approximately one-third of individuals recover fully within 6 months, while the remaining two-thirds ultimately progress to a diagnosis of Schizophrenia or Schizoaffective Disorder.\n- Schizophrenia: Marked social and occupational impairment (work, relationships, self-care) below premorbid levels is a mandatory criterion (Criterion B), with chronic or relapsing course in the majority of patients."
      },
      {
        id: "M10_SAQ_2",
        title: "SAQ 2: Schizoaffective Disorder & The 2-Week Rule",
        prompt: "State the critical diagnostic rule that differentiates Schizoaffective Disorder from a Major Depressive or Bipolar Disorder with Psychotic Features. Provide a clinical vignette illustrating this rule. (4 marks)",
        criteria: [
          "The Critical Diagnostic Rule (Criterion B): In Schizoaffective Disorder, delusions or hallucinations MUST be present for at least 2 consecutive weeks in the ABSENCE of a major mood episode (depressive or manic) during the lifetime course of the illness.",
          "Differentiating Feature: In Major Depressive or Bipolar Disorder with Psychotic Features, psychotic symptoms occur EXCLUSIVELY during active mood episodes and disappear completely once the mood returns to normal (euthymia).",
          "Clinical Vignette: Clear example illustrating a patient hearing voices or holding delusions while their mood is euthymic for >=2 weeks.",
          "Lifetime Mood Proportion: In schizoaffective disorder, mood episodes must also be present for the majority (>50%) of the total illness duration."
        ],
        modelAnswer: "1. The Critical Diagnostic Rule (Criterion B):\nTo diagnose Schizoaffective Disorder, the patient must experience delusions or hallucinations for at least two consecutive weeks in the complete ABSENCE of a major mood episode (major depressive or manic) at some point during the lifetime course of the illness. In contrast, in a Major Depressive Disorder or Bipolar Disorder with Psychotic Features, psychosis occurs EXCLUSIVELY during the acute mood episode; when the depression or mania resolves, reality testing normalizes completely.\n\n2. Illustrative Clinical Vignette:\n- Presentation A (Schizoaffective Disorder): Michael suffers from major depressive episodes lasting several months. However, during a six-month period between depressive episodes—when his mood is completely euthymic, cheerful, and stable—he continues to hear running commentary voices and believes the CIA is tracking his movements for three consecutive months. Because psychosis persisted for >2 weeks without any mood disorder, he meets criteria for Schizoaffective Disorder.\n- Presentation B (Depression with Psychosis): Lisa only hears persecutory voices and believes she is damned to hell when her depression is severe (HAM-D score >24). As soon as her depression remits, the voices and delusions vanish completely. She has Major Depressive Disorder with Psychotic Features."
      },
      {
        id: "M10_SAQ_3",
        title: "SAQ 3: The 4 Phases of CBT for Psychosis (CBTp)",
        prompt: "Describe the four sequential phases of Cognitive Behavioral Therapy for Psychosis (CBTp). Explain the 'Columbo Technique' used when working with delusional beliefs. (5 marks)",
        criteria: [
          "Phase 1: Engagement & Developing the Therapeutic Alliance (empathy, active listening, validating distress without colluding with delusions, rolling with resistance).",
          "Phase 2: Normalization & Psychoeducation (placing psychotic experiences on a continuum of human experiences, reducing stigma, exploring stress-vulnerability).",
          "Phase 3: Belief Modification & Coping Strategies (collaborative exploration of delusions, generating alternative non-threatening explanations, voice-coping diaries, reattributing voices to internal thoughts).",
          "Phase 4: Relapse Prevention & Recovery (identifying early warning signs / signature relapses, building action plans, social/vocational recovery).",
          "The Columbo Technique: A therapeutic stance of gentle curiosity, naivety, and confusion where the clinician explores the evidence for a delusion without directly confronting or validating it ('Help me understand how you knew that...')."
        ],
        modelAnswer: "1. The Four Phases of CBTp (Hagan et al. / Australian Clinical Practice Guidelines):\n- Phase 1: Engagement and Development of the Alliance: The foundation of therapy. The therapist establishes an empathetic, non-judgmental, transparent relationship, validating the client's emotional distress and fear without directly validating or attacking delusional beliefs.\n- Phase 2: Education and Normalization: Framing psychotic symptoms as existing on a continuum with normal human experiences (e.g., misattributed intrusive thoughts, sensory misperceptions under sleep deprivation). Destigmatizes the illness and introduces the stress-vulnerability model.\n- Phase 3: Working with Beliefs and Coping Strategies:\n  * For Delusions: Exploring precipitating triggers, identifying evidence for and against beliefs, and generating plausible alternative explanations.\n  * For Hallucinations: Reattributing voices to internal cognitive processes, voice monitoring diaries, and developing behavioral coping strategies (earplugs, subvocal counting, listening to music).\n- Phase 4: Relapse Prevention and Recovery: Mapping the client's unique 'early warning signs' (e.g., insomnia, irritability, social withdrawal), creating a collaborative crisis action plan, and pursuing personal recovery goals.\n\n2. The 'Columbo Technique':\nNamed after the TV detective, this is an engagement technique for exploring delusions without confrontation. Rather than directly challenging an impossible belief ('That makes no sense'), the clinician adopts a stance of gentle, humble curiosity and mild confusion ('I'm really trying to understand this, but I'm a bit confused... how did you discover that the radio was broadcasting your thoughts? Could there be another explanation?'). This invites the client to reflect on their own evidence without feeling judged or defensive."
      },
      {
        id: "M10_SAQ_4",
        title: "SAQ 4: Antipsychotic Side Effects & Family Expressed Emotion (EE)",
        prompt: "Contrast the primary adverse neurological and metabolic side effects of first- vs. second-generation antipsychotics. Define High Expressed Emotion (EE) in families and explain its clinical impact on relapse. (4 marks)",
        criteria: [
          "First-Generation Antipsychotics (FGAs): High risk of Extrapyramidal Symptoms (EPS) due to D2 dopamine blockade: acute dystonia (muscle spasms), parkinsonism (tremor, cogwheel rigidity, shuffling gait), akathisia (motor restlessness), and tardive dyskinesia (irreversible involuntary orofacial movements).",
          "Second-Generation Antipsychotics (SGAs): Lower EPS risk, but high risk of Metabolic Syndrome: rapid weight gain, dyslipidemia, insulin resistance, type 2 diabetes, and cardiovascular morbidity (e.g., Clozapine, Olanzapine).",
          "High Expressed Emotion (EE) Definition: A family communication pattern characterized by: (1) Frequent Critical Comments, (2) Hostility, and (3) Emotional Over-Involvement.",
          "Clinical Impact: Patients returning to high-EE families have MORE THAN DOUBLE the relapse rate of those living in low-EE families; family psychoeducation is a mandatory guideline-endorsed intervention."
        ],
        modelAnswer: "1. Antipsychotic Adverse Effect Profiles:\n- First-Generation Antipsychotics (FGAs / Typical, e.g., Haloperidol): Act primarily via potent D2 dopamine receptor antagonism. They cause high rates of Extrapyramidal Symptoms (EPS), including: (a) Acute dystonia (painful muscle spasms of the neck/tongue), (b) Parkinsonism (tremor, cogwheel rigidity, masked facies, shuffling gait), (c) Akathisia (agonizing subjective motor restlessness), and (d) Tardive dyskinesia (potentially permanent involuntary lip-smacking and facial grimacing).\n- Second-Generation Antipsychotics (SGAs / Atypical, e.g., Olanzapine, Clozapine): Cause lower EPS rates but carry severe risks of Metabolic Syndrome, characterized by rapid, profound weight gain (mean 4.5 kg in 10 weeks for Clozapine), type 2 diabetes mellitus, hyperlipidemia, and accelerated cardiovascular disease, driving a 14.5-year reduction in life expectancy.\n\n2. High Expressed Emotion (EE) and Relapse:\n- Definition: High Expressed Emotion is a validated measure of familial emotional climate, defined by three key dimensions: (1) Critical comments (frequent harsh disapproval of the patient's behaviors), (2) Hostility (rejection and anger directed at the patient as a person), and (3) Emotional over-involvement (intrusive, smothering, overprotective behaviors).\n- Clinical Impact: Research demonstrates that patients with schizophrenia discharged to high-EE family environments experience MORE THAN DOUBLE the rate of psychotic relapse within 9 to 12 months compared to those in low-EE environments. High EE acts as a chronic biological stressor that triggers dopamine dysregulation. Family psychoeducation to reduce EE is therefore a mandatory evidence-based intervention."
      },
      {
        id: "M10_SAQ_5",
        title: "Exam Practice SAQ 1 (5 Marks): First-Episode Psychosis & Duration Boundaries (Brief Psychotic vs Schizophreniform vs Schizophrenia)",
        prompt: "“You are assessing a 20-year-old university student who was brought to the clinic by their family after experiencing auditory hallucinations (hearing commentary voices) and paranoid delusions for the past 3 weeks. Positive psychotic symptoms and functional disturbance are key features of the client’s presentation. What psychotic spectrum disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Brief Psychotic Disorder and Schizophreniform Disorder (or Schizophrenia [Provisional]).",
          "1 mark for duration threshold of symptoms: Brief Psychotic Disorder requires symptoms lasting at least 1 day but less than 1 month (<30 days); Schizophreniform Disorder requires duration between 1 month and 6 months; Schizophrenia requires continuous signs for at least 6 months (with >=1 month active Criterion A).",
          "1 mark for requirement and trajectory of functional impairment / recovery: Brief Psychotic Disorder mandates a complete, 100% return to premorbid functioning; Schizophrenia requires marked, persistent social/occupational deterioration below premorbid levels; Schizophreniform does not mandate social/occupational decline (though common), and approximately 1/3 recover fully while 2/3 transition to Schizophrenia/Schizoaffective.",
          "1 mark for negative symptoms and prodrome: Brief Psychotic Disorder explicitly excludes negative symptoms (avolition, flat affect, alogia); Schizophrenia and Schizophreniform include negative symptoms as core Criterion A features and frequently display a prolonged insidious prodromal phase."
        ],
        modelAnswer: "Part 1: Most Likely Psychotic Spectrum Disorders (2 marks)\n1. Brief Psychotic Disorder [1 mark]\n2. Schizophreniform Disorder (or Schizophrenia - Provisional) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Total Duration of Illness / Time Boundaries: The core differential boundary is duration. At 3 weeks of symptoms, if the episode resolves within 1 month (under 30 days), the diagnosis is Brief Psychotic Disorder. If symptoms persist beyond 1 month but resolve within 6 months, the diagnosis is Schizophreniform Disorder. If continuous signs of disturbance persist for at least 6 months (including at least 1 month of active Criterion A symptoms), the diagnosis transitions to Schizophrenia.\n2. Expected Trajectory of Functional Recovery vs. Impairment: Brief Psychotic Disorder strictly requires an eventual full return to the premorbid level of functioning (100% recovery). In Schizophrenia, marked functional decline in one or more major life domains (work, interpersonal relationships, self-care) is a mandatory diagnostic criterion (Criterion B). Schizophreniform disorder does not mandate functional decline (though it frequently occurs); approximately one-third of individuals recover fully within 6 months, whereas two-thirds will ultimately progress to Schizophrenia or Schizoaffective Disorder.\n3. Presence of Negative Symptoms and Prodromal Course: Brief Psychotic Disorder typically has an acute, sudden onset (often triggered by marked psychosocial stressors) and explicitly excludes negative symptoms (flat affect, avolition, alogia, anhedonia). In contrast, Schizophrenia and Schizophreniform disorder frequently feature prominent negative symptoms alongside positive symptoms, often preceded by an insidious prodrome of declining social and academic functioning."
      },
      {
        id: "M10_SAQ_6",
        title: "Exam Practice SAQ 2 (5 Marks): Psychosis with Mood Disturbance (Schizoaffective Disorder vs Bipolar I with Psychotic Features)",
        prompt: "“You are assessing a 26-year-old client who presents with active persecutory delusions and auditory hallucinations co-occurring with grandiosity, decreased need for sleep, pressured speech, and elevated mood. Psychotic symptoms and concurrent severe mood disturbance are key features of the presentation. What clinical disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Schizoaffective Disorder (Bipolar type) and Bipolar I Disorder with Psychotic Features.",
          "1 mark for Criterion B (The 2-Week Rule): In Schizoaffective Disorder, delusions or hallucinations must persist for at least 2 consecutive weeks in the ABSENCE of a major mood episode (mania or depression) during the lifetime course of the illness; in Bipolar I with Psychotic Features, psychosis occurs exclusively during acute mood episodes and disappears completely during euthymia.",
          "1 mark for lifetime proportion of mood episodes: In Schizoaffective Disorder, symptoms meeting criteria for a major mood episode must be present for the majority (>50%) of the total duration of the active and residual portions of the illness; in Bipolar I, the primary illness is an affective disorder where psychotic features are episodic complications.",
          "1 mark for mood congruence of psychotic themes and longitudinal functional trajectory: In Bipolar I, psychotic symptoms are frequently mood-congruent (grandiose delusions, special mission) during mania, and cognitive/interpersonal functioning between episodes tends to recover; in Schizoaffective Disorder, bizarre or persecutory delusions often persist, with enduring functional impairment similar to schizophrenia."
        ],
        modelAnswer: "Part 1: Most Likely Clinical Disorders (2 marks)\n1. Schizoaffective Disorder, Bipolar Type [1 mark]\n2. Bipolar I Disorder, with Psychotic Features [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Temporal Relationship of Psychosis to Mood (Criterion B / The 2-Week Rule): The definitive diagnostic discriminator is the presence of psychotic symptoms outside of mood episodes. Under DSM-5 Criterion B for Schizoaffective Disorder, the client must have experienced delusions or hallucinations for at least 2 consecutive weeks in the complete absence of a major mood episode (manic or major depressive) at some point during the lifetime course of the illness. In contrast, in Bipolar I Disorder with Psychotic Features, delusions and hallucinations occur EXCLUSIVELY during active manic (or depressive) episodes; once mood normalizes (euthymia), reality testing recovers completely and psychosis disappears.\n2. Lifetime Duration Proportion of Mood Disturbance: For Schizoaffective Disorder, symptoms that meet criteria for a major mood episode must be present for the majority (greater than 50%) of the total duration of the active and residual phases of the psychotic illness (Criterion C). If mood symptoms occupy only a brief, minor percentage of the total psychotic illness, the diagnosis is Schizophrenia with secondary mood symptoms rather than Schizoaffective Disorder.\n3. Mood Congruence of Psychosis and Interpersonal Recovery: In Bipolar I Disorder with Psychotic Features, psychotic content is frequently mood-congruent (e.g., grandiose delusions of being a prophet, supernatural powers, or infinite wealth during manic phases), and inter-episodic psychosocial functioning typically shows substantial recovery. In Schizoaffective Disorder, delusions and hallucinations are frequently bizarre, persecutory, or mood-incongruent, and enduring negative symptoms or residual cognitive impairments often persist even between acute mood spikes."
      },
      {
        id: "M10_SAQ_7",
        title: "Exam Practice SAQ 3 (5 Marks): Encapsulated Delusions & Preserved Functioning (Delusional Disorder vs Schizophrenia)",
        prompt: "“You are assessing a 52-year-old accountant who firmly believes that their colleagues are secretly poisoning the office air conditioning to ruin their career. Despite this fixed unshakeable belief, the client has maintained steady employment, dresses neatly, speaks coherently, and has never experienced hallucinations or disorganized speech. A fixed persecutory belief and preserved daily functioning are key features of the client’s presentation. What psychotic spectrum disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Delusional Disorder (Persecutory Type) and Schizophrenia (Paranoid presentation).",
          "1 mark for presence versus absence of other Criterion A psychotic symptoms: Delusional Disorder requires >=1 delusion for >=1 month, but Criterion A for Schizophrenia has NEVER been met (prominent auditory/visual hallucinations, disorganized speech/thought disorder, and grossly disorganized or catatonic behavior are absent).",
          "1 mark for degree of functional impairment and behavioral encapsulation: In Delusional Disorder, apart from the direct impact of the delusion or its ramifications, psychosocial and occupational functioning is NOT markedly impaired, and behavior is not obviously bizarre or odd; in Schizophrenia, pervasive functional deterioration across work, interpersonal relations, or self-care is a hallmark criterion.",
          "1 mark for presence of negative symptoms and cognitive deterioration: Schizophrenia typically involves prominent negative symptoms (avolition, flat affect, alogia, anhedonia) and neurocognitive decline; Delusional Disorder characteristically lacks negative symptoms, and premorbid intelligence and cognitive faculties remain intact."
        ],
        modelAnswer: "Part 1: Most Likely Psychotic Spectrum Disorders (2 marks)\n1. Delusional Disorder, Persecutory Type [1 mark]\n2. Schizophrenia (or early/paranoid presentation) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Concomitant Criterion A Psychotic Symptoms: The primary diagnostic dividing line is the presence or absence of other core psychotic features. In Delusional Disorder, Criterion A for Schizophrenia has NEVER been met: hallucinations (if present at all) are not prominent and are strictly related to the delusional theme (e.g., olfactory sensation of poison smell), and disorganized speech (formal thought disorder), grossly disorganized behavior, and catatonia are completely absent. In Schizophrenia, diagnosis requires at least two Criterion A symptoms, commonly involving prominent auditory hallucinations or loose associations alongside delusions.\n2. Degree of Global Functional Impairment and Behavioral Encapsulation: In Delusional Disorder, functioning outside the immediate sphere of the delusion is remarkably preserved. The belief is 'encapsulated'—apart from actions directly related to the belief (e.g., lodging complaints about the air conditioner), the client's occupational performance, grooming, manners, and daily living remain intact and uncompromised. In Schizophrenia, Criterion B mandates marked, widespread deterioration in major areas of functioning (work, interpersonal relationships, self-care) well below premorbid levels.\n3. Negative Symptoms and Neurocognitive Profile: Schizophrenia is characterized by persistent negative symptoms (avolition, affective flattening, alogia, asociality) that drive chronic morbidity and neurocognitive deficits in executive functioning and working memory. Delusional Disorder characteristically features an absence of negative symptoms; the patient remains intellectually articulate, motivated, and emotionally reactive outside the context of the encapsulated delusion."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Essay Prompt: Clinical Staging, Differential Nosology & Psychological Recovery in Psychosis",
      prompt: "Critically evaluate the clinical staging model, differential diagnostics, and psychological treatment of psychotic spectrum disorders. In your essay, contrast Patrick McGorry's Clinical Staging Model with traditional categorical DSM-5 nosology, differentiate Schizophrenia, Schizoaffective Disorder, and Brief Psychotic Disorder across temporal and affective boundaries, and formulate a comprehensive, recovery-oriented Cognitive Behavioral Therapy for Psychosis (CBTp) intervention plan for a young person experiencing First Episode Psychosis.",
      timeAllowedMinutes: 45,
      suggestedWordCount: "1000 - 1400 words",
      rubricPillars: [
        {
          name: "Pillar 1: Clinical Staging & Paradigm Evolution",
          weight: "25%",
          description: "In-depth critique of McGorry's Clinical Staging Model (Stages 0, 1a/1b UHR, Stage 2 FEP, Stage 3 critical period, Stage 4) versus traditional DSM-5 categorical classification; utility of CAARMS; overcoming the clinician's illusion."
        },
        {
          name: "Pillar 2: Diagnostic Boundaries & Temporal Matrices",
          weight: "25%",
          description: "Precise differential analysis of psychotic disorders: Brief Psychotic (<1 mo) vs Schizophreniform (1-6 mos) vs Schizophrenia (>6 mos); rigorous application of the 2-week rule in Schizoaffective Disorder; Delusional Disorder encapsulation; substance rule-outs."
        },
        {
          name: "Pillar 3: Psychopharmacology, Physical Health & Systemic Dynamics",
          weight: "25%",
          description: "Critical analysis of antipsychotic adverse effects (EPS vs metabolic syndrome); physical health disparities (14.5-year mortality gap); and the profound impact of family High Expressed Emotion (criticism, hostility, over-involvement) on relapse."
        },
        {
          name: "Pillar 4: Recovery-Oriented Psychological Intervention (CBTp)",
          weight: "25%",
          description: "Comprehensive formulation and execution of the 4-phase CBTp model: therapeutic engagement, normalization, cognitive reappraisal of delusions (Columbo technique), voice-coping strategies, and relapse signature prevention."
        }
      ],
      modelOutline: [
        "1. Introduction: Deconstructing the historical stigma of schizophrenia; the shift from 'dementia praecox' to the modern stress-vulnerability and recovery models; thesis asserting the clinical necessity of early staging and CBTp.",
        "2. Clinical Staging vs Categorical Nosology: Analyzing Patrick McGorry's Staging Framework (Stage 0 to 4); the Ultra-High Risk (UHR) prodrome and the CAARMS; preventing transition without premature neuroleptic exposure; overcoming the 'Clinician's Illusion'.",
        "3. Differential Diagnostic Architecture: The duration continuum (Brief Psychotic vs Schizophreniform vs Schizophrenia); the critical 2-week rule separating Schizoaffective Disorder from Mood Disorder with Psychotic Features; Delusional Disorder encapsulation.",
        "4. Somatic and Systemic Contexts: First- vs second-generation antipsychotic adverse effects (extrapyramidal symptoms vs metabolic syndrome); the physical health crisis in severe mental illness; the role of family High Expressed Emotion (EE) in doubling relapse rates.",
        "5. Evidence-Based CBTp Intervention Blueprint: A staged 4-phase clinical plan for First Episode Psychosis: building the alliance in Phase 1; normalizing hallucinations in Phase 2; deploying the Columbo technique for delusions in Phase 3; creating early warning relapse signatures in Phase 4."
      ]
    }
  }
};
