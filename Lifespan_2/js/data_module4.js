// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 4: Older Adults
const MODULE_4_DATA = {
  moduleId: 4,
  title: "Module 4: Working with Older Adults & Neurocognitive Disorders",
  subtitle: "Cognitive Aging, Prodromal Stages, Differential Neurodegenerative Diagnoses, and Evidence-Based Care",
  coordinator: "Assoc. Prof. Kerryn Pike (Clinical Neuropsychologist, MAPS, FCCN)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "Normal Cognitive Aging vs. Pathological Decline",
      author: "Pike & Kinsella",
      summary: "Normal aging involves subtle slowing of processing speed, reduced divided attention, and mild word-finding lapses, but general knowledge (crystallized intelligence) and everyday functional independence (IADLs) remain robust. Pathological decline impairs episodic consolidation and functional independence."
    },
    {
      title: "The Neurocognitive Spectrum: SCD to MCI to Dementia",
      author: "NIA-AA & DSM-5 Framework",
      summary: "Cognitive decline occurs along a continuum: Subjective Cognitive Decline (SCD: perceived decline with normal psychometric testing) -> Mild Cognitive Impairment (MCI: objective deficit >1.5 SD below norms with preserved independence) -> Major Neurocognitive Disorder (Dementia: cognitive loss severe enough to compromise IADLs)."
    },
    {
      title: "Neuropsychological Profile of Alzheimer's Disease",
      author: "McKhann et al. (NIA-AA Criteria)",
      summary: "AD is defined neuropathologically by amyloid-beta plaques and neurofibrillary tau tangles beginning in the entorhinal cortex and hippocampus. Clinically, it presents with a distinctive 'amnestic syndrome': rapid forgetting, failure to benefit from semantic cues, and defective delayed recall."
    },
    {
      title: "Cognitive Rehabilitation & Non-Pharmacological Care",
      author: "Clare et al. / Pike",
      summary: "Interventions focus on personalized compensatory memory strategies (external memory aids, spaced retrieval, errorless learning), environmental modifications, maintaining cognitive reserve, and addressing caregiver burden to optimize quality of life."
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "AD",
      code: "DSM-5 331.0 (G30.9)",
      name: "Major Neurocognitive Disorder due to Alzheimer's Disease (AD)",
      type: "Neurodegenerative Disorder",
      ageRange: "Older Adulthood (typically >65 years; early onset <65)",
      coreDefinition: "An insidious, progressive neurodegenerative disorder marked by early, prominent deficits in episodic memory consolidation followed by executive dysfunction, word-finding impairment (anomia), and progressive loss of independent living skills.",
      dsmCriteria: [
        "Evidence of significant cognitive decline from a previous level of performance in one or more cognitive domains (learning/memory, executive, language, perceptual-motor).",
        "Cognitive deficits interfere with independence in everyday activities (requires assistance with complex IADLs like medication management, finances, cooking).",
        "Insidious onset and gradual progression of impairment.",
        "Meets criteria for Probable or Possible Alzheimer's Disease (evidence of causative genetic mutation, or clear decline in memory/learning plus at least one other domain, without extended plateaus).",
        "Not better explained by cerebrovascular disease, other neurodegenerative disorders, substance use, or systemic medical conditions."
      ],
      howToDiagnose: [
        "Comprehensive neuropsychological test battery (e.g., Rey Auditory Verbal Learning Test [RAVLT], WMS-IV Logical Memory, Trail Making Test, Boston Naming Test).",
        "Key psychometric signature: Defective delayed recall with failure to benefit from recognition or categorical cueing (consolidation storage deficit).",
        "Caregiver report of functional decline on validated IADL scales (e.g., Lawton IADL Scale).",
        "Neuroimaging (MRI showing bilateral hippocampal and medial temporal atrophy; amyloid/tau PET or CSF biomarkers if available)."
      ],
      factorsLookedFor: [
        "Episodic Memory: Rapid forgetting of recent events, repeating questions, misplacing items in bizarre locations.",
        "Executive Function: Inability to plan complex tasks, organize bills, or problem-solve novel issues.",
        "Language: Anomia (circumlocution, saying 'the thing you write with' for pen) progressing to reduced verbal fluency.",
        "Awareness: Anosognosia (diminished insight into cognitive deficits) commonly develops as disease progresses."
      ],
      potentialTreatments: [
        "Cognitive Rehabilitation: Individualized goal-directed compensatory strategies (memory notebooks, smartphone calendar alerts, whiteboards).",
        "Spaced Retrieval & Errorless Learning: Teaching essential routines without permitting error generation.",
        "Caregiver Support & Psychoeducation: Training family members in communication strategies, reducing confrontation, and mitigating caregiver burnout.",
        "Environmental Adaptation: Simplifying living spaces, labeling drawers, medication blister packs.",
        "Pharmacological: Acetylcholinesterase inhibitors (Donepezil, Rivastigmine, Galantamine) and NMDA receptor antagonist (Memantine)."
      ],
      clinicalPearl: "In true AD amnestic deficits, providing multiple-choice cues during memory testing does NOT help the patient recall items because the information was never consolidated into the cortex. In depression or vascular disease, cueing typically normalizes recall."
    },
    {
      id: "MCI",
      code: "DSM-5 331.83 (G31.84)",
      name: "Mild Neurocognitive Disorder / Mild Cognitive Impairment (MCI)",
      type: "Prodromal Neurocognitive State",
      ageRange: "Middle to Older Adulthood (typically >60 years)",
      coreDefinition: "A clinical syndrome characterized by objective cognitive impairment beyond what is expected for age and education, but with intact functional independence in basic and instrumental activities of daily living.",
      dsmCriteria: [
        "Evidence of modest cognitive decline from a previous level of performance in one or more cognitive domains.",
        "Cognitive deficits do NOT interfere with capacity for independence in everyday activities (complex IADLs preserved, though may require greater effort, compensatory strategies, or accommodation).",
        "Deficits do not occur exclusively in the context of a delirium.",
        "Not better explained by another mental disorder (e.g., Major Depressive Disorder)."
      ],
      howToDiagnose: [
        "Neuropsychological evaluation documenting performance between 1.0 and 2.0 standard deviations (typically >1.5 SD) below age/education-matched normative means.",
        "Subtyping into: (1) Amnestic MCI (single or multi-domain; high risk of progression to AD), or (2) Non-Amnestic MCI (executive/language/visuospatial; higher risk of progression to Vascular, FTD, or Lewy Body dementia).",
        "Verification through collateral interview that client remains functionally independent with finances, driving, and self-care."
      ],
      factorsLookedFor: [
        "Subjective Concern: Patient, informant, or clinician notices modest cognitive slip-ups.",
        "Effortful Compensation: Takes longer to pay bills, relies heavily on detailed lists, occasional forgotten appointments.",
        "Emotional Impact: High anxiety or demoralization regarding fear of developing dementia; insight remains completely preserved."
      ],
      potentialTreatments: [
        "Early Memory Intervention Programs (e.g., Memory Support System, La Trobe Memory Bridge).",
        "Cardiovascular & Lifestyle Risk Reduction: Aerobic exercise, Mediterranean-DASH diet, Mediterranean diet, blood pressure control.",
        "Cognitive Training & Active Engagement: Stimulating leisure activities, cognitive reserve building.",
        "Routine Clinical Monitoring: Re-assessment every 12 months to track stability vs. conversion."
      ],
      clinicalPearl: "The critical boundary separating MCI from Dementia is functional independence. If an older adult still manages their own medications, finances, and home safely (even with lists), they have MCI, not Dementia."
    },
    {
      id: "VASCULAR",
      code: "DSM-5 290.40 (F01.50)",
      name: "Vascular Neurocognitive Disorder (VaD)",
      type: "Cerebrovascular Cognitive Disorder",
      ageRange: "Older Adulthood (history of stroke, TIA, hypertension)",
      coreDefinition: "Cognitive decline resulting from ischemic or hemorrhagic cerebrovascular disease, classically presenting with prominent executive dysfunction, slowed processing speed, and a step-wise or fluctuating trajectory.",
      dsmCriteria: [
        "Meets criteria for Major or Mild Neurocognitive Disorder.",
        "Clinical features are consistent with a vascular etiology, evidenced by either: (1) Onset temporally related to one or more stroke events; or (2) Prominent decline in complex attention (processing speed) and frontal-executive function.",
        "Evidence of cerebrovascular disease from history, physical neurological exam (e.g., focal signs, pseudobulbar affect), and neuroimaging (infarcts, extensive white matter hyperintensities)."
      ],
      howToDiagnose: [
        "MRI brain imaging showing subcortical ischemic lesions, lacunar infarcts, or extensive periventricular leukoaraiosis.",
        "Neuropsychological testing demonstrating severe deficits in processing speed (Digit Symbol Coding, Trail Making Test Part B) and executive retrieval, with relatively better recognition memory than AD.",
        "Medical history of cardiovascular risk factors: hypertension, diabetes, hyperlipidemia, smoking, atrial fibrillation."
      ],
      factorsLookedFor: [
        "Trajectory: Step-wise progression (sudden drops followed by plateaus) or gradual fluctuating subcortical decline.",
        "Neurological Signs: Gait abnormalities (magnetic or wide-based gait), motor clumsiness, urinary urgency, emotional lability (pseudobulbar affect).",
        "Cognitive Profile: Slowness of thought (bradyphrenia), difficulty initiating tasks, perseveration, retrieval failure that improves with cues."
      ],
      potentialTreatments: [
        "Secondary Cardiovascular Prevention: Blood pressure optimization, statin therapy, antiplatelet/anticoagulant therapy to prevent recurrent strokes.",
        "Executive Strategy Training: Pacing techniques, breaking complex tasks into small sequential steps.",
        "Physical Exercise & Physical Therapy: Improving balance, gait stability, and cerebral perfusion.",
        "Supportive Care & Environmental Structure."
      ],
      clinicalPearl: "Unlike Alzheimer's, where memory consolidation is lost, patients with subcortical vascular cognitive impairment can consolidate memories but struggle to retrieve them spontaneously due to damaged frontal-striatal circuits. Semantic cues help them retrieve the information."
    },
    {
      id: "FTD",
      code: "DSM-5 331.19 (G31.09)",
      name: "Frontotemporal Neurocognitive Disorder (FTD)",
      type: "Early-Onset Neurodegenerative Disorder",
      ageRange: "Late Middle Age (typically 45–65 years; younger than AD)",
      coreDefinition: "A neurodegenerative disease caused by focal degeneration of the frontal and temporal lobes, presenting primarily with profound behavioral disinhibition, apathy, loss of empathy, or progressive language degeneration with relative preservation of episodic memory and visuospatial skills.",
      dsmCriteria: [
        "Insidious onset and gradual progression of Major or Mild Neurocognitive Disorder.",
        "Presents as either (1) Behavioral variant (bvFTD), or (2) Language variant (Primary Progressive Aphasia [PPA]).",
        "Behavioral variant requires at least 3 of: (a) Early behavioral disinhibition; (b) Early apathy or inertia; (c) Early loss of sympathy or empathy; (d) Early perseverative, stereotyped, or compulsive behavior; (e) Hyperorality and dietary changes (craving sweets).",
        "Prominent decline in social cognition and executive abilities with relative sparing of learning/memory and perceptual-motor function."
      ],
      howToDiagnose: [
        "Collateral clinical interview: Informants report dramatic personality changes, inappropriate social remarks, shoplifting, tactlessness, or cold emotional detachment.",
        "Neuropsychological evaluation: Marked executive deficits (inhibition, set-shifting) and social cognition impairments (Faux Pas test, Reading the Mind in the Eyes), while memory recall and visual construction remain surprisingly intact in early stages.",
        "Neuroimaging: MRI/PET showing prominent bilateral or asymmetric frontal and/or anterior temporal lobe atrophy."
      ],
      factorsLookedFor: [
        "Disinhibition: Inappropriate sexual comments, touching strangers, breaching personal space, spending reckless sums.",
        "Apathy & Loss of Empathy: Complete indifference to family distress, coldness, withdrawal from hobbies without sadness.",
        "Dietary Changes: Inflexible binging on carbohydrates, sweets, or putting non-food items in mouth.",
        "Stereotypies: Ritualistic pacing, checking, repetitive clapping or counting words."
      ],
      potentialTreatments: [
        "Behavioral Management & Environmental Safety: Securing bank accounts, locking pantries, creating predictable daily schedules.",
        "Caregiver Support: FTD causes extreme caregiver strain due to disinhibition and lack of empathy; high need for respite care.",
        "Speech Pathology (for PPA variants): Alternative and augmentative communication (AAC) devices.",
        "CAUTION: Cholinesterase inhibitors used in AD frequently worsen behavioral agitation in FTD and are generally not recommended."
      ],
      clinicalPearl: "If an adult in their 50s presents with sudden shoplifting, crude social comments, loss of warmth toward their spouse, and compulsive sweet-eating, but can still remember what they had for breakfast and navigate roads, suspect bvFTD over AD."
    },
    {
      id: "DLB",
      code: "DSM-5 331.82 (G31.83)",
      name: "Neurocognitive Disorder with Lewy Bodies (DLB)",
      type: "Alpha-Synuclein Neurodegenerative Disorder",
      ageRange: "Older Adulthood (>65 years)",
      coreDefinition: "A progressive neurodegenerative disorder caused by abnormal alpha-synuclein protein deposits (Lewy bodies), characterized by fluctuating cognition and attention, recurrent detailed visual hallucinations, spontaneous motor parkinsonism, and REM sleep behavior disorder.",
      dsmCriteria: [
        "Insidious onset and gradual progression of Major or Mild Neurocognitive Disorder.",
        "Core Diagnostic Features (need at least 2 for probable DLB): (1) Fluctuating cognition with pronounced variations in attention and alertness; (2) Recurrent, well-formed, detailed visual hallucinations; (3) REM sleep behavior disorder (acting out dreams with violent motor movements); (4) One or more spontaneous cardinal features of parkinsonism (bradykinesia, resting tremor, rigidity).",
        "Severe neuroleptic sensitivity (extreme adverse reactions to typical antipsychotics)."
      ],
      howToDiagnose: [
        "Clinical history of fluctuating 'good days and bad days' or dramatic hourly swings in daytime alertness/lucidity.",
        "Detailed inquiry into visual hallucinations (typically people, children, or animals, often emotionally neutral or benign).",
        "Sleep study / history of dream enactment during REM sleep (kicking, punching in sleep years before cognitive onset).",
        "Neurological examination for extrapyramidal motor signs (cogwheel rigidity, masked facies, shuffling gait)."
      ],
      factorsLookedFor: [
        "Attention Fluctuations: Staring blankly into space, daytime somnolence despite full night sleep, incoherent speech that clears an hour later.",
        "Hallucinations: Patient calmly reports seeing small children or deceased relatives sitting on the sofa.",
        "Autonomic Dysfunction: Orthostatic hypotension, unexplained falls, syncopal episodes."
      ],
      potentialTreatments: [
        "Cognitive: Cholinesterase inhibitors (Donepezil, Rivastigmine) have strong efficacy for attention and reducing visual hallucinations in DLB.",
        "Motor: Low-dose levodopa for parkinsonian motor disability (used cautiously as it can exacerbate hallucinations).",
        "CRITICAL SAFETY WARNING: First-generation typical antipsychotics (e.g., Haloperidol) are STRICTLY CONTRAINDICATED; they can cause irreversible parkinsonism, neuroleptic malignant syndrome, and acute mortality.",
        "Environmental adaptations to prevent falls and manage night-time dream enactment injuries."
      ],
      clinicalPearl: "Three clinical red flags for DLB: (1) Lucid morning followed by stuporous afternoon; (2) Detailed, non-threatening hallucinations of people or animals; (3) Violent dream enactment during sleep."
    },
    {
      id: "PSEUDODEMENTIA",
      code: "DSM-5 296.3x / Secondary Cognitive Deficit",
      name: "Late-Life Depression with Cognitive Impairment ('Pseudodementia')",
      type: "Affective-Cognitive Presentation",
      ageRange: "Older Adulthood (>60 years)",
      coreDefinition: "A reversible or treatable cognitive impairment secondary to a severe major depressive episode in older adults, characterized by prominent lack of motivation, executive slowing, and disproportionate distress over cognitive slips.",
      dsmCriteria: [
        "Meets criteria for Major Depressive Episode (depressed mood, anhedonia, sleep disturbance, feelings of worthlessness, fatigue).",
        "Cognitive complaints coincide temporally with the onset of mood symptoms.",
        "Absence of progressive cortical neurodegenerative biomarker evidence.",
        "Cognitive performance improves substantially upon successful remission of the depressive episode."
      ],
      howToDiagnose: [
        "Geriatric Depression Scale (GDS) or Cornell Scale for Depression in Dementia.",
        "Test behavior signature: Frequent 'I don't know' responses, quick to give up on challenging tasks, poor effort without trying, but performance is normal when gently coaxed.",
        "Memory profile: Impaired free recall, but intact recognition memory and normal learning curve when cueing is provided.",
        "High subjective complaint: Patient complains bitterly about memory loss, in stark contrast to the anosognosia (unawareness) of Alzheimer's patients."
      ],
      factorsLookedFor: [
        "Onset: Relatively rapid, acute onset coinciding with retirement, bereavement, or physical illness (vs. insidious years in AD).",
        "Affect: Psychomotor retardation, flat or tearful affect, pervasive vegetative depressive signs.",
        "Insight: Intact or exaggerated awareness of cognitive limitations ('My brain is completely gone')."
      ],
      potentialTreatments: [
        "Evidence-Based Psychological Therapy: Behavioral Activation and Modified CBT for Older Adults (addressing cognitive distortions and ageist beliefs).",
        "Social Prescribing & Engagement: Re-establishing social connections, community participation, and routine.",
        "Pharmacological: Antidepressants with favorable side-effect profiles in older adults (SSRIs like Sertraline/Escitalopram; avoiding anticholinergic tricyclics).",
        "Cognitive Re-testing Post-Treatment: Re-evaluating cognition once mood lifts to rule out underlying prodromal neurodegeneration."
      ],
      clinicalPearl: "When testing: A patient with Alzheimer's tries hard, makes guesses, confabulates, and laughs off errors. A patient with depression-related cognitive impairment throws up their hands, says 'I can't do it, I don't know', and requires encouragement to demonstrate their intact memory."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "AD_PSEUDODEMENTIA": {
      title: "Alzheimer's Disease (AD) vs. Late-Life Depression ('Pseudodementia')",
      commonality: "Both present in older adults with memory complaints, difficulty concentrating, social withdrawal, and reduced everyday functional productivity.",
      distinguishingMarkers: [
        {
          feature: "Onset and Awareness (Insight)",
          conditionA: "Alzheimer's: Insidious onset over months to years; patient minimizes or is unaware of deficits (anosognosia), often brought in by worried family.",
          conditionB: "Depression: Rapid or acute onset (weeks to months); patient complains intensely of cognitive loss and expresses severe distress about memory."
        },
        {
          feature: "Neuropsychological Testing Behavior",
          conditionA: "Alzheimer's: Tries hard to answer; may make near-miss guesses or confabulate; unconcerned about errors.",
          conditionB: "Depression: Gives up easily; frequent 'I don't know' responses; variable effort; performs normally with firm encouragement."
        },
        {
          feature: "Memory Consolidation vs. Retrieval",
          conditionA: "Alzheimer's: True consolidation failure; delayed recall is severely impaired and does NOT improve with multiple-choice cueing.",
          conditionB: "Depression: Retrieval slowness due to inattention; delayed recall significantly improves or normalizes with recognition cues."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Rule in AD: Rapid forgetting over time, failure of recognition cueing, family reports functional decline that the patient minimizes.",
        ruleInAvoidant: "Rule in Depression: Onset linked to depressive episode, bitter complaints about failing memory, recognition cueing intact, 'I don't know' responses.",
        pitfallToAvoid: "Never assume late-life depression is 'just normal aging'. Depression is treatable, but also represents a recognized risk factor that requires post-recovery cognitive follow-up."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for Alzheimer's Disease",
        treatmentA_Steps: "Focus on compensatory memory strategies (external aids, routine), errorless learning, caregiver communication training, environmental safety, and cholinesterase inhibitors.",
        treatmentB_Name: "Intervention for Late-Life Depression",
        treatmentB_Steps: "Focus on Behavioral Activation, modified CBT for older adults, social reconnection, and SSRI pharmacotherapy. Re-test cognition once depressive episode remits."
      }
    },

    "AD_VASCULAR": {
      title: "Alzheimer's Disease vs. Vascular Neurocognitive Disorder",
      commonality: "Both are primary causes of dementia in older adults and can co-occur as 'mixed dementia'.",
      distinguishingMarkers: [
        {
          feature: "Clinical Trajectory",
          conditionA: "Alzheimer's: Insidious, steady, gradual decline without abrupt drops or extended remissions.",
          conditionB: "Vascular: Step-wise progression (sudden drops following infarcts, followed by periods of stable recovery) or fluctuating subcortical decline."
        },
        {
          feature: "Primary Cognitive Signature",
          conditionA: "Alzheimer's: Prominent cortical episodic memory impairment (rapid forgetting) preceding other deficits.",
          conditionB: "Vascular: Prominent subcortical executive dysfunction, mental slowness (bradyphrenia), and impaired processing speed with relatively preserved memory."
        },
        {
          feature: "Neurological & Physical Signs",
          conditionA: "Alzheimer's: Motor examination is typically normal until advanced late stages of the disease.",
          conditionB: "Vascular: Early focal neurological deficits, gait changes (magnetic gait), pseudobulbar affect (emotional incontinence), and cardiovascular history."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Rule in AD: Gradual decline, storage/consolidation memory loss, hippocampal atrophy on MRI.",
        ruleInAvoidant: "Rule in Vascular: Stroke history, focal neurological signs, extensive white matter disease on MRI, step-wise deterioration, severe processing speed drop.",
        pitfallToAvoid: "Mixed dementia is very common; presence of vascular disease does not rule out concurrent Alzheimer's pathology."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for Alzheimer's",
        treatmentA_Steps: "Cholinesterase inhibitors, NMDA antagonists, cognitive rehabilitation for memory loss, caregiver burden management.",
        treatmentB_Name: "Intervention for Vascular Dementia",
        treatmentB_Steps: "Aggressive secondary stroke prevention (blood pressure control, anticoagulants, diabetes management), physical therapy for gait, executive compensation."
      }
    },

    "AD_FTD": {
      title: "Alzheimer's Disease vs. Behavioral Variant Frontotemporal Dementia (bvFTD)",
      commonality: "Both are progressive neurodegenerative disorders causing irreversible loss of independence.",
      distinguishingMarkers: [
        {
          feature: "Age of Onset",
          conditionA: "Alzheimer's: Typically develops in individuals over 65 years of age.",
          conditionB: "bvFTD: Frequently develops earlier, typically between 45 and 65 years of age."
        },
        {
          feature: "First Presenting Symptoms",
          conditionA: "Alzheimer's: Short-term memory loss (forgetting conversations, losing items, repetitive questions).",
          conditionB: "bvFTD: Dramatic personality and behavioral changes (disinhibition, loss of empathy, apathy, tactlessness) with memory intact."
        },
        {
          feature: "Dietary and Stereotypic Behaviors",
          conditionA: "Alzheimer's: Eating habits generally unchanged until late stages.",
          conditionB: "bvFTD: Early hyperorality, insatiable craving for sweets, compulsive rituals, repetitive motor mannerisms."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Rule in AD: Late onset, memory consolidation failure, spatial disorientation, frontal lobes relatively spared early.",
        ruleInAvoidant: "Rule in bvFTD: Early onset, socially inappropriate behavior, emotional coldness to family, frontal/temporal atrophy on imaging, memory preserved early.",
        pitfallToAvoid: "Do NOT prescribe cholinesterase inhibitors (Donepezil) to FTD patients; it often exacerbates behavioral agitation."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for Alzheimer's",
        treatmentA_Steps: "Memory aids, routine orientation, cholinesterase inhibitors, caregiver support.",
        treatmentB_Name: "Intervention for Frontotemporal Dementia",
        treatmentB_Steps: "Strict environmental behavior management (locking food/finances), intensive caregiver respite, avoiding cholinesterase inhibitors, speech therapy for language variants."
      }
    }
  },

  // 6 Lifespan Clinical Scenarios with 2-Step Decision Flow (Diagnose -> Treat)
  scenarios: [
    {
      id: "scenario_01",
      title: "Case Vignette 1: 72-Year-Old Eleanor with Forgetfulness",
      ageGroup: "Older Adult (72 years)",
      vignette: "Eleanor is a 72-year-old retired schoolteacher brought to the memory clinic by her daughter. Her daughter notes Eleanor has been repeating the same questions several times a day and recently forgot to turn off the stove twice. Eleanor smiles warmly and says, 'My daughter worries too much, I'm just getting a bit older, my memory is fine!' On the RAVLT word list test, Eleanor learns 6 of 15 words after 5 trials. Following a 20-minute delay, she recalls 0 words. When provided with a multiple-choice recognition list of the words, she scores 2 out of 15 and makes multiple false-positive errors. Her MRI shows prominent bilateral medial temporal and hippocampal volume loss.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the most accurate diagnosis for Eleanor's clinical presentation?",
        hint: "Notice the insidious onset, lack of insight (anosognosia), severe delayed recall with total failure to benefit from recognition cueing, and hippocampal atrophy.",
        options: [
          {
            id: "opt_ad",
            text: "Major Neurocognitive Disorder due to Alzheimer's Disease (AD)",
            correct: true,
            rationale: "Correct! Eleanor displays the classic amnestic profile of Alzheimer's disease: lack of insight (anosognosia), insidious onset, functional safety compromise (stove incidents), and failure of memory consolidation (0 delayed recall with failure to improve on multiple-choice cueing), corroborated by hippocampal atrophy."
          },
          {
            id: "opt_pseudodementia",
            text: "Late-Life Depression ('Pseudodementia')",
            correct: false,
            rationale: "Incorrect. Patients with depression typically complain bitterly about their memory loss, show distress, and their recall improves significantly with multiple-choice cueing."
          },
          {
            id: "opt_mci",
            text: "Mild Cognitive Impairment (MCI)",
            correct: false,
            rationale: "Incorrect. Eleanor has compromised everyday safety and functional independence (stove safety failures, inability to manage home activities independently), crossing the threshold from MCI into Major Neurocognitive Disorder."
          },
          {
            id: "opt_ftd",
            text: "Behavioral Variant Frontotemporal Dementia (bvFTD)",
            correct: false,
            rationale: "Incorrect. Eleanor does not present with social disinhibition, apathy, or dietary changes; her primary deficit is an episodic memory consolidation failure."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which clinical intervention package is most appropriate for Eleanor and her family?",
        hint: "Consider evidence-based non-pharmacological memory compensation, caregiver communication coaching, and safety modifications.",
        options: [
          {
            id: "tx_ad_rehab",
            text: "Cognitive rehabilitation focusing on compensatory external aids (automated stove shut-offs, memory calendar), errorless learning routines, caregiver education, and cholinesterase inhibitor evaluation.",
            correct: true,
            rationale: "Correct! Gold-standard dementia management combines non-pharmacological compensatory memory strategies, home safety adaptations (auto shut-off devices), caregiver psychoeducation to reduce confrontation, and medical evaluation for acetylcholinesterase inhibitors."
          },
          {
            id: "tx_cbt_distortions",
            text: "Weekly cognitive restructuring to challenge Eleanor's irrational cognitive distortions about being healthy.",
            correct: false,
            rationale: "Incorrect. Challenging insight in a patient with organic anosognosia creates frustration and anxiety without improving memory function."
          },
          {
            id: "tx_drill_memory",
            text: "Intensive computerized brain-training drills for 2 hours daily to restore damaged hippocampal neurons.",
            correct: false,
            rationale: "Incorrect. Computerized restorative drills do not generalize to real-world function in neurodegenerative dementia; compensatory strategies are required."
          },
          {
            id: "tx_haloperidol",
            text: "Immediate initiation of typical antipsychotics to prevent future cognitive loss.",
            correct: false,
            rationale: "Incorrect. Antipsychotics do not treat memory loss and carry a black-box mortality warning in dementia."
          }
        ]
      }
    },

    {
      id: "scenario_02",
      title: "Case Vignette 2: 67-Year-Old Robert with Effortful Work",
      ageGroup: "Older Adult (67 years)",
      vignette: "Robert (67) is an accountant who visits the clinic independently. He reports that over the past 9 months, he has noticed he needs to double-check his calculations and keep a detailed planner to remember client meetings. His wife confirms he is slightly more forgetful of names, but emphasizes that he still prepares meals, drives safely, pays all household bills without error, and manages his own medications accurately. On testing, Robert scores 1.6 standard deviations below age norms on delayed logical memory, but his executive functioning, language, and visual skills are within normal limits. His basic and instrumental activities of daily living are completely intact.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — How should Robert's condition be classified?",
        hint: "Notice that objective testing shows modest memory impairment (>1.5 SD below norms), but his everyday functional independence (IADLs) is fully preserved.",
        options: [
          {
            id: "opt_mci_amnestic",
            text: "Mild Cognitive Impairment (Amnestic MCI, Single Domain)",
            correct: true,
            rationale: "Correct! Robert exhibits objective memory impairment (>1.5 SD below norms on logical memory) with preserved general cognition and intact independence in instrumental activities of daily living (IADLs), which defines Amnestic Mild Cognitive Impairment."
          },
          {
            id: "opt_major_ad",
            text: "Major Neurocognitive Disorder due to Alzheimer's Disease",
            correct: false,
            rationale: "Incorrect. Major Neurocognitive Disorder requires that cognitive deficits significantly interfere with independence in everyday activities, which is not the case for Robert."
          },
          {
            id: "opt_normal_aging",
            text: "Normal Age-Related Cognitive Aging",
            correct: false,
            rationale: "Incorrect. Scoring 1.6 SD below normative age and education expectations exceeds typical cognitive aging."
          },
          {
            id: "opt_delirium",
            text: "Subacute Delirium",
            correct: false,
            rationale: "Incorrect. Delirium presents with acute fluctuating disturbances in attention and awareness, not a 9-month gradual memory change with intact attention."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the optimal clinical recommendation for Robert?",
        hint: "Focus on proactive lifestyle risk mitigation, structured memory support systems, and longitudinal cognitive tracking.",
        options: [
          {
            id: "tx_mci_proactive",
            text: "Structured memory support system training, cardiovascular/lifestyle risk factor reduction (exercise, Mediterranean diet), and annual neuropsychological monitoring.",
            correct: true,
            rationale: "Correct! Evidence-based care for MCI focuses on strengthening compensatory habits (e.g., Memory Support System), managing cardiovascular risk factors to protect brain health, and longitudinal monitoring to track potential conversion."
          },
          {
            id: "tx_nursing_home",
            text: "Immediate placement on a nursing home waitlist because dementia is inevitable within 6 months.",
            correct: false,
            rationale: "Incorrect. Many individuals with MCI remain stable for years, and some even revert to normal cognition; institutionalization is unnecessary and harmful."
          },
          {
            id: "tx_high_dose_antipsychotic",
            text: "Prophylactic high-dose antipsychotic therapy.",
            correct: false,
            rationale: "Incorrect. Inappropriate, unindicated, and harmful."
          },
          {
            id: "tx_stop_working_all",
            text: "Advising him to immediately quit his job and cease all cognitive activities.",
            correct: false,
            rationale: "Incorrect. Mental and social engagement builds cognitive reserve; disengagement accelerates decline."
          }
        ]
      }
    },

    {
      id: "scenario_03",
      title: "Case Vignette 3: 76-Year-Old Frank with Fluctuations and Hallucinations",
      ageGroup: "Older Adult (76 years)",
      vignette: "Frank (76) is brought in by his partner because of unpredictable cognitive changes. On Monday morning, Frank was sharp and played chess with his grandson; by Monday afternoon, he was disoriented, staring blankly out the window, and could barely form a coherent sentence. Frank calmly mentions that on three occasions this week, he saw small children in colorful Victorian coats playing quietly in his hallway, acknowledging with a chuckle, 'I know they can't be real, but they look so vivid!' His partner notes Frank has been thrashing and punching in his sleep for the past 4 years. On physical exam, Frank exhibits mild resting tremor, stooped posture, and cogwheel rigidity in his wrists.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis indicated by Frank's presentation?",
        hint: "Look for the classic triad: fluctuating attention, well-formed benign visual hallucinations, spontaneous parkinsonism, and a history of REM sleep behavior disorder.",
        options: [
          {
            id: "opt_dlb",
            text: "Neurocognitive Disorder with Lewy Bodies (DLB)",
            correct: true,
            rationale: "Correct! Frank demonstrates core features of probable DLB: fluctuating cognition and alertness, recurrent detailed visual hallucinations, spontaneous parkinsonian motor signs, and REM sleep behavior disorder (acting out dreams)."
          },
          {
            id: "opt_ad_pure",
            text: "Pure Alzheimer's Disease",
            correct: false,
            rationale: "Incorrect. Pure AD does not feature early pronounced cognitive fluctuations, vivid well-formed hallucinations, or early spontaneous parkinsonian motor signs."
          },
          {
            id: "opt_schizophrenia",
            text: "Late-Onset Schizophrenia",
            correct: false,
            rationale: "Incorrect. Schizophrenia features bizarre delusions and auditory hallucinations, not benign well-formed visual hallucinations with fluctuating alertness and motor parkinsonism."
          },
          {
            id: "opt_bipolar",
            text: "Bipolar I Disorder with Psychosis",
            correct: false,
            rationale: "Incorrect. There is no history of mania, flight of ideas, or grandiosity; this is an organic alpha-synuclein neurodegenerative presentation."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which clinical principle is CRITICAL when treating Frank?",
        hint: "Remember the severe, life-threatening medication sensitivity specific to Lewy Body disease.",
        options: [
          {
            id: "tx_dlb_safe",
            text: "Consider cholinesterase inhibitors for cognitive/hallucinatory symptoms, low-dose levodopa for motor symptoms, and STRICTLY AVOID first-generation typical antipsychotics due to extreme neuroleptic sensitivity.",
            correct: true,
            rationale: "Correct! In DLB, cholinesterase inhibitors improve attention and hallucinations. First-generation antipsychotics (e.g., Haloperidol) are strictly contraindicated because up to 50% of DLB patients suffer severe, irreversible neuroleptic reactions with high mortality risk."
          },
          {
            id: "tx_haloperidol_high",
            text: "Administer high-dose Haloperidol immediately to eliminate the visual hallucinations.",
            correct: false,
            rationale: "Incorrect! Typical antipsychotics are life-threatening in DLB due to extreme neuroleptic hypersensitivity."
          },
          {
            id: "tx_ignore_hallucinations",
            text: "Confront Frank aggressively every time he sees figures to break his delusions.",
            correct: false,
            rationale: "Incorrect. Confrontation causes distress; Frank already has insight that the figures are not real."
          },
          {
            id: "tx_stop_sleep",
            text: "Keep Frank awake for 24 hours to reset his circadian rhythm.",
            correct: false,
            rationale: "Incorrect. Sleep deprivation severely worsens cognitive fluctuations and delirium risk."
          }
        ]
      }
    },

    {
      id: "scenario_04",
      title: "Case Vignette 4: 70-Year-Old Arthur After Bereavement",
      ageGroup: "Older Adult (70 years)",
      vignette: "Arthur (70) lost his wife of 45 years six months ago. He presents to the clinic stating, 'My mind has deteriorated completely, I think I have advanced Alzheimer's.' He reports waking at 3:00 AM unable to sleep, feeling exhausted, having zero appetite, and losing 6 kg. When administered the MMSE and memory tests, Arthur throws his hands up on the first question, saying, 'I don't know, my brain is gone, don't ask me.' However, when the psychologist gently encourages him to take his time and guess, Arthur correctly identifies all orientation items, and on multiple-choice recognition of a 10-word list, he scores 9 out of 10. His Geriatric Depression Scale (GDS) score is 24/30.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the most accurate formulation of Arthur's cognitive difficulties?",
        hint: "Notice the acute onset following loss, bitter complaints about memory, frequent 'I don't know' responses, intact recognition memory with cueing, and severe depressive symptoms.",
        options: [
          {
            id: "opt_pseudodementia_dep",
            text: "Late-Life Depression with Cognitive Impairment ('Pseudodementia')",
            correct: true,
            rationale: "Correct! Arthur presents with depression-related cognitive impairment: acute onset linked to bereavement, severe subjective memory distress, 'I don't know' responses reflecting low motivation, intact memory consolidation demonstrated by near-perfect recognition cueing, and a high GDS score."
          },
          {
            id: "opt_ad_dementia",
            text: "Major Neurocognitive Disorder due to Alzheimer's Disease",
            correct: false,
            rationale: "Incorrect. Alzheimer's patients typically minimize deficits, attempt answers rather than saying 'I don't know', and fail recognition cueing."
          },
          {
            id: "opt_vascular_step",
            text: "Vascular Neurocognitive Disorder",
            correct: false,
            rationale: "Incorrect. There is no stroke history or focal signs; his cognitive complaints correlate with bereavement and vegetative depressive signs."
          },
          {
            id: "opt_ftd_bv",
            text: "Behavioral Variant Frontotemporal Dementia",
            correct: false,
            rationale: "Incorrect. Arthur is experiencing severe depressive grief and intact social awareness, not disinhibition or emotional apathy."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the primary treatment approach for Arthur?",
        hint: "Target the underlying affective disorder with evidence-based depression interventions for older adults, followed by cognitive re-evaluation.",
        options: [
          {
            id: "tx_cbt_depression_older",
            text: "Behavioral Activation and modified Cognitive Behavioral Therapy for late-life depression, grief support, medical evaluation for an SSRI, and cognitive re-testing after mood improvement.",
            correct: true,
            rationale: "Correct! Treating the primary affective disturbance through Behavioral Activation, modified CBT for older adults, and safe pharmacotherapy (e.g., SSRI) resolves pseudodementia. Re-assessing cognition post-remission ensures no underlying neurodegeneration was masked."
          },
          {
            id: "tx_nursing_ad_plan",
            text: "Accepting that Arthur has incurable Alzheimer's disease and moving him to residential care.",
            correct: false,
            rationale: "Incorrect. Pseudodementia is reversible when the underlying depression is treated effectively."
          },
          {
            id: "tx_high_dose_sedatives",
            text: "High-dose benzodiazepines nightly for sleep.",
            correct: false,
            rationale: "Incorrect. Benzodiazepines cause cognitive impairment, daytime sedation, and severe fall risks in older adults."
          },
          {
            id: "tx_confront_grief",
            text: "Instructing Arthur to stop crying and focus on memory puzzle books.",
            correct: false,
            rationale: "Incorrect. Dismissing grief worsens depressive despair and cognitive withdrawal."
          }
        ]
      }
    }
  ],

  // Short Answer & Essay Practice Bank
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "sa_01",
        title: "SAQ 1: Differentiating Alzheimer's Disease from Depression ('Pseudodementia')",
        question: "Contrast the clinical presentation and neuropsychological testing performance of an older adult with Alzheimer's Disease versus an older adult with depression-related cognitive impairment ('pseudodementia').",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Onset & Course: AD has an insidious, gradual onset over years; depression-related cognitive impairment has a more rapid/acute onset coinciding with mood changes.",
          "Subjective Awareness & Insight: AD patients typically exhibit anosognosia (lack of awareness, minimizing deficits, brought in by family); depressed patients complain bitterly and exaggerate cognitive loss.",
          "Test Behavior: AD patients try hard, make guesses, confabulate, and unconcernedly dismiss errors; depressed patients show variable effort, give up quickly with 'I don't know' responses.",
          "Memory Profile: AD patients fail consolidation (poor delayed recall with failure to improve on multiple-choice cueing); depressed patients have retrieval slowing but intact consolidation (delayed recall normalizes with cues)."
        ],
        modelAnswer: "Differentiating Alzheimer's Disease (AD) from depression-related cognitive impairment ('pseudodementia') is a fundamental clinical challenge in geropsychology:\n\n1. Onset and Trajectory: AD has an insidious, gradual onset over several years without clear temporal boundaries. In contrast, depression-related impairment typically has a more acute or identifiable onset (weeks to months), often precipitated by life stressors such as bereavement or retirement.\n\n2. Insight and Subjective Complaints: Patients with AD characteristically display anosognosia—they minimize memory slips, lack insight, and are usually brought in by concerned family members. Conversely, depressed older adults complain bitterly about their cognitive decline, express severe distress over memory loss, and may exaggerate their deficits.\n\n3. Testing Behaviors: During neuropsychological evaluation, AD patients generally try hard, cooperate, make near-miss guesses, and may confabulate to cover memory gaps. Depressed patients exhibit poor motivation and reduced effort, frequently answering 'I don't know' or giving up on challenging items, but perform accurately when firmly coaxed.\n\n4. Memory Consolidation vs. Retrieval: The hallmark of AD is an episodic consolidation deficit; because information is never stored in the cortex, delayed recall is severely impaired and does NOT improve with recognition or categorical cueing. In depression, the deficit is one of attention and retrieval slowness; the memory was encoded, so recognition testing or multiple-choice cueing significantly improves or normalizes recall."
      },
      {
        id: "sa_02",
        title: "SAQ 2: Diagnostic Boundary Between Normal Aging, MCI, and Dementia",
        question: "Explain the diagnostic criteria and functional boundaries that separate normal cognitive aging, Mild Cognitive Impairment (MCI), and Major Neurocognitive Disorder (Dementia).",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Normal Aging: Modest slowing in processing speed and divided attention; crystallized intelligence, semantic knowledge, and everyday functional independence (IADLs) remain intact.",
          "Mild Cognitive Impairment (MCI): Objective cognitive decline on psychometric tests (typically 1.0 to 2.0 SD below age/education norms); subjective cognitive concern; everyday functional independence (IADLs) remains preserved, though tasks may require greater compensatory effort.",
          "Major Neurocognitive Disorder (Dementia): Substantial cognitive decline across one or more cognitive domains that significantly impairs independent living (requires assistance with complex IADLs such as finances, medications, cooking, or driving).",
          "Identifies IADL functional independence as the key dividing line between MCI and Dementia."
        ],
        modelAnswer: "The distinction between normal cognitive aging, Mild Cognitive Impairment (MCI), and Major Neurocognitive Disorder (Dementia) is determined by the severity of psychometric impairment and its impact on functional independence:\n\n1. Normal Cognitive Aging: Represents expected physiological decline, primarily characterized by mild psychomotor slowing, reduced divided attention, and occasional word-finding pauses. Memory consolidation, crystallized intelligence (vocabulary, general knowledge), and everyday functioning remain completely intact.\n\n2. Mild Cognitive Impairment (MCI): Defined as an intermediate state where an individual has subjective cognitive complaints and objective psychometric impairment (typically >1.5 standard deviations below age- and education-matched norms) in one or more cognitive domains (e.g., memory, executive, language). Critically, independence in daily activities is preserved; the person may take longer or require compensatory lists, but they manage their own finances, medications, and household independently.\n\n3. Major Neurocognitive Disorder (Dementia): Differentiated from MCI by the loss of functional independence. Cognitive deficits are severe enough to interfere with independent performance of Instrumental Activities of Daily Living (IADLs). The individual requires regular assistance from others to safely manage complex daily affairs (e.g., cooking, medication schedules, bill paying)."
      },
      {
        id: "sa_03",
        title: "SAQ 3: Clinical Features of Dementia with Lewy Bodies (DLB)",
        question: "Describe the core clinical diagnostic features of Neurocognitive Disorder with Lewy Bodies (DLB). Why are first-generation typical antipsychotics strictly contraindicated in this condition?",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Identifies alpha-synuclein pathology.",
          "Core Feature 1: Fluctuating cognition and pronounced variations in attention and alertness (daytime somnolence, staring spells, lucid intervals).",
          "Core Feature 2: Recurrent, detailed, well-formed visual hallucinations (often animals or people, typically non-threatening).",
          "Core Feature 3: REM sleep behavior disorder (acting out vivid dreams with motor activity).",
          "Core Feature 4: Spontaneous cardinal parkinsonism (bradykinesia, rigidity, resting tremor).",
          "Antipsychotic Contraindication: Severe neuroleptic hypersensitivity; up to 50% of DLB patients experience acute worsening of parkinsonism, neuroleptic malignant syndrome, irreversible sedation, and doubled mortality."
        ],
        modelAnswer: "Dementia with Lewy Bodies (DLB) is an alpha-synuclein neurodegenerative disease characterized by four cardinal core clinical features:\n\n1. Fluctuating Cognition and Attention: Pronounced variations in attention and alertness occurring across days, hours, or minutes. Patients experience staring spells, unprovoked daytime somnolence, and transient confusion alternating with periods of lucidity.\n2. Recurrent Detailed Visual Hallucinations: Highly vivid, well-formed, and colorful hallucinations, typically featuring people, children, or animals. Patients often observe them calmly without acute panic.\n3. REM Sleep Behavior Disorder (RBD): Loss of normal muscle atonia during REM sleep, causing patients to physically act out vivid dreams through punching, thrashing, or shouting, often beginning years before cognitive decline.\n4. Spontaneous Parkinsonism: Extrapyramidal motor signs (bradykinesia, resting tremor, masked facies, cogwheel rigidity, shuffling gait) that develop spontaneously and concurrent with cognitive onset.\n\nContraindication of Typical Antipsychotics: First-generation typical neuroleptics (such as Haloperidol) are strictly contraindicated due to severe neuroleptic hypersensitivity. Up to 50% of individuals with DLB exposed to typical antipsychotics experience catastrophic adverse reactions, including irreversible rigidity, sudden postural collapse, neuroleptic malignant syndrome, and markedly increased mortality."
      },
      {
        id: "sa_04",
        title: "SAQ 4: Behavioral Variant Frontotemporal Dementia (bvFTD) vs. Alzheimer's Disease",
        question: "How does Behavioral Variant Frontotemporal Dementia (bvFTD) differ from Alzheimer's Disease in terms of age of onset, initial presenting symptoms, and cognitive profile?",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Age of Onset: bvFTD has an earlier peak onset (typically 45–65 years) compared to AD (predominantly >65 years).",
          "Initial Presentation: bvFTD presents with prominent personality, social, and behavioral changes (disinhibition, apathy, loss of empathy, dietary changes); AD presents with insidious short-term episodic memory loss.",
          "Cognitive Profile: bvFTD features marked executive dysfunction and impaired social cognition (theory of mind), with relative preservation of episodic memory and visuospatial orientation early on; AD features early hippocampal consolidation memory failure with preserved social decorum early on.",
          "Dietary/Motor: bvFTD shows hyperorality, sweet cravings, and stereotyped/compulsive behaviors."
        ],
        modelAnswer: "Behavioral Variant Frontotemporal Dementia (bvFTD) differs profoundly from Alzheimer's Disease (AD) across epidemiology, presentation, and neuropsychology:\n\n1. Age of Onset: bvFTD is a leading cause of early-onset dementia, typically manifesting between ages 45 and 65. In contrast, sporadic AD predominantly develops after age 65.\n\n2. Initial Clinical Presentation: The earliest symptoms of AD are cognitive—specifically, short-term episodic memory lapses, repeating questions, and spatial disorientation, while social manners and interpersonal warmth are preserved. In bvFTD, initial symptoms are psychiatric and behavioral: dramatic personality changes, social disinhibition (tactless comments, shoplifting), early loss of empathy for loved ones, severe apathy, and hyperorality (insatiable cravings for carbohydrates and sweets).\n\n3. Cognitive Profile: On neuropsychological assessment, early AD patients fail delayed recall and recognition tests due to medial temporal/hippocampal atrophy, but perform relatively well on social cognition tests. In contrast, early bvFTD patients have frontal-temporal atrophy; they exhibit severe executive dysfunction (poor inhibition, set-shifting) and impaired social cognition (inability to perceive social faux pas), but their episodic memory and visuospatial abilities are remarkably preserved."
      },
      {
        id: "sa_05",
        title: "Exam Practice SAQ 1 (5 Marks): Acute Fluctuation & Inattention in Older Adults (Delirium vs Alzheimer's Dementia)",
        prompt: "“You are assessing an 78-year-old hospital inpatient whose family reports sudden memory failure, disorientation, and inability to follow simple conversations. Inattention and fluctuating cognitive impairment are key features of the client’s presentation. What neurocognitive conditions would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Delirium and Major Neurocognitive Disorder due to Alzheimer's Disease (Dementia) (possible 1 mark for Dementia with Lewy Bodies if justified).",
          "1 mark for contrasting onset and course: Delirium has acute onset (hours to days) with marked hour-to-hour fluctuation and circadian worsening (sundowning); Alzheimer's has insidious, gradual onset over months/years with stable progression.",
          "1 mark for contrasting core cognitive domain: Delirium primary deficit is inattention, reduced awareness, and altered level of consciousness; Alzheimer's primary deficit is episodic memory consolidation and retrieval with alertness preserved until late stages.",
          "1 mark for contrasting underlying etiology and reversibility: Delirium is secondary to acute physiological/medical conditions (UTI, pneumonia, polypharmacy, metabolic disturbance) and is potentially reversible; Alzheimer's is primary neurodegenerative and irreversible."
        ],
        modelAnswer: "Part 1: Most Likely Neurocognitive Conditions (2 marks)\n1. Delirium [1 mark]\n2. Major Neurocognitive Disorder due to Alzheimer's Disease (Dementia) [1 mark]\n(Possible 1 mark for Dementia with Lewy Bodies if spontaneous motor/hallucinatory features are justified).\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Onset & Course Trajectory: Delirium has an acute or subacute onset developing over hours or days, characterized by a fluctuating course where attention and alertness wax and wane dramatically throughout the day (frequently worsening at night/'sundowning'). In contrast, Alzheimer's Disease has an insidious, gradual onset over months to years with a slowly progressive, consistent decline.\n2. Primary Cognitive Domain Impairment: The cardinal feature of Delirium is a disturbance in attention (inability to direct, focus, sustain, or shift attention) and reduced awareness of the environment/clouded consciousness. In early-to-moderate Alzheimer's Disease, attention and alertness are relatively preserved; the defining primary deficit is impaired episodic memory encoding and rapid forgetting.\n3. Etiological Mechanism & Reversibility: Delirium is a medical emergency directly caused by an underlying physiological disturbance, acute medical illness (e.g., urinary tract infection, pneumonia), medication toxicity/anticholinergic burden, or electrolyte imbalance, and is typically reversible with prompt medical treatment. Alzheimer's Disease is a chronic, irreversible neurodegenerative condition characterized by amyloid-beta plaques and tau neurofibrillary tangles."
      },
      {
        id: "sa_06",
        title: "Exam Practice SAQ 2 (5 Marks): Progressive Memory Impairment (Amnestic MCI vs Alzheimer's Dementia)",
        prompt: "“You are assessing a 71-year-old retired accountant who presents with progressive short-term memory complaints, forgetting appointments and misplacing keys. Objective episodic memory impairment on neuropsychological testing is evident. What diagnostic classifications along the cognitive ageing spectrum would be most likely (2 marks) and what key features would you use to assess and differentiate them in your assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Amnestic Mild Cognitive Impairment (aMCI) and Major Neurocognitive Disorder / Mild Alzheimer's Dementia (possible 1 mark for Subjective Cognitive Decline / Normal Aging if justified).",
          "1 mark for functional independence in Instrumental Activities of Daily Living (IADLs): aMCI preserves independence in complex daily activities (may require compensatory lists/cues); Major NCD (Dementia) requires assistance with complex IADLs (finances, medication management, transport).",
          "1 mark for psychometric impairment threshold: aMCI typically scores 1.0 to 1.5 standard deviations below age/education-matched norms in the memory domain; Dementia typically exhibits decline >2.0 standard deviations across multiple cognitive domains.",
          "1 mark for diagnostic trajectory / clinical status: aMCI is an intermediate, high-risk transitional state (10–15% annual conversion rate to dementia); Alzheimer's Dementia represents an established neurodegenerative disorder commanding multidisciplinary palliative and caregiving support."
        ],
        modelAnswer: "Part 1: Most Likely Diagnostic Classifications (2 marks)\n1. Amnestic Mild Cognitive Impairment (aMCI) [1 mark]\n2. Major Neurocognitive Disorder due to Alzheimer's Disease (Mild Dementia) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Functional Independence in Everyday Life (IADLs): The pivotal diagnostic dividing line between MCI and Dementia is the impact on independent daily functioning. An individual with aMCI maintains independence in complex Instrumental Activities of Daily Living (managing finances, handling medications, driving, cooking), although they may take longer or employ compensatory strategies (such as diaries or phone alerts). In Major Neurocognitive Disorder (Dementia), cognitive deficits directly interfere with independence, requiring regular assistance from others to perform complex IADLs safely.\n2. Severity and Breadth of Psychometric Impairment: In aMCI, objective cognitive impairment is typically circumscribed to episodic memory, scoring between 1.0 and 1.5 standard deviations below age- and education-matched norms on standardized tests (e.g., delayed recall on the Rey Auditory Verbal Learning Test). In Alzheimer's Dementia, cognitive decline is more severe (typically >2.0 standard deviations) and spreads beyond memory into executive functioning, language (anomia), or visuospatial abilities.\n3. Diagnostic Implication & Trajectory: aMCI represents a prodromal, high-risk transitional state rather than inevitable dementia (approximately 10–15% convert per year, but some remain stable or revert). Confirming Major NCD (Dementia) establishes an active neurodegenerative threshold requiring caregiver education, enduring power of attorney planning, and formal care scaffolding."
      },
      {
        id: "sa_07",
        title: "Exam Practice SAQ 3 (5 Marks): Cognitive Decline with Hallucinations & Motor Signs (Dementia with Lewy Bodies vs Alzheimer's vs PDD)",
        prompt: "“You are assessing a 74-year-old client with progressive cognitive decline whose spouse reports vivid visual hallucinations of small animals, spontaneous daytime drowsiness episodes, and mild resting tremor with muscle stiffness. Cognitive impairment and movement/perceptual changes are key features of the presentation. What neurocognitive disorders would be most likely (2 marks) and what key features would you use to assess them in your assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Dementia with Lewy Bodies (DLB) and Alzheimer's Disease (with atypical features) or Parkinson's Disease Dementia (PDD).",
          "1 mark for timing of cognitive vs motor symptoms ('one-year rule'): DLB cognitive decline occurs before, concurrently with, or within 1 year of parkinsonism; PDD well-established motor Parkinson's exists for years (>1 year) before dementia develops.",
          "1 mark for core clinical triad of DLB: Recurrent formed visual hallucinations, marked spontaneous fluctuations in attention/alertness, and REM Sleep Behavior Disorder (RBD).",
          "1 mark for severe neuroleptic hypersensitivity: DLB patients have dangerous sensitivity to typical antipsychotics (acute parkinsonism worsening, neuroleptic malignant syndrome, increased mortality), which is absent in standard Alzheimer's."
        ],
        modelAnswer: "Part 1: Most Likely Neurocognitive Disorders (2 marks)\n1. Dementia with Lewy Bodies (DLB) [1 mark]\n2. Alzheimer's Disease (with neuropsychiatric features) OR Parkinson's Disease Dementia (PDD) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. The 'One-Year Rule' for Motor vs. Cognitive Onset: In Dementia with Lewy Bodies (DLB), cognitive decline occurs prior to, concurrently with, or within 12 months of the emergence of parkinsonian extrapyramidal motor signs (bradykinesia, rigidity, tremor). In Parkinson's Disease Dementia (PDD), a well-established diagnosis of Parkinson's Disease with motor features precedes cognitive decline and dementia by several years.\n2. Core Neuropsychiatric & Perceptual Features: DLB is uniquely characterized by the spontaneous co-occurrence of recurrent, detailed, well-formed visual hallucinations (typically people or animals), pronounced spontaneous fluctuations in cognitive alertness and daytime somnolence, and REM Sleep Behavior Disorder (acting out vivid dreams). In typical Alzheimer's Disease, visual hallucinations are uncommon in early-to-moderate stages and spontaneous cognitive fluctuations are absent.\n3. Neuroleptic Hypersensitivity: Up to 50% of individuals with DLB demonstrate severe, potentially fatal neuroleptic hypersensitivity reactions when administered first-generation dopamine antagonists (typical antipsychotics such as haloperidol), precipitating sudden motor rigidity, acute cognitive collapse, neuroleptic malignant syndrome, and mortality. Standard Alzheimer's patients do not exhibit this profound extrapyramidal sensitivity."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Geropsychology Exam Essay Prompt",
      prompt: "“Accurate differential diagnosis of neurocognitive disorders in older adults is essential because aetiology dictates prognosis, risk management, and clinical intervention.”\n\nCritically evaluate this statement. In your answer, you must:\n1. Contrast the clinical and neuropsychological profiles of Alzheimer's Disease, Vascular Neurocognitive Disorder, and Frontotemporal Dementia.\n2. Detail the differential diagnostic process for distinguishing organic neurodegenerative dementia from late-life depression ('pseudodementia').\n3. Discuss evidence-based non-pharmacological interventions for older adults with cognitive impairment, including cognitive rehabilitation and caregiver support.\n4. Address clinical challenges relating to ageism, diagnostic disclosure, and ethical considerations when working with older adults.",
      suggestedWordCount: "1200 - 1500 words (40-45 minutes in exam)",
      scoringRubric: [
        {
          criterion: "Differential Neurodegenerative Profiles (25%)",
          indicators: "Accurately contrasts AD (hippocampal consolidation failure, insidious onset), Vascular Dementia (step-wise, processing speed/executive deficits, neurological signs), and FTD (early behavioral disinhibition, apathy, loss of empathy, younger onset)."
        },
        {
          criterion: "Dementia vs. Late-Life Depression / Pseudodementia (25%)",
          indicators: "Details differences in onset, insight/complaint, test behaviors ('I don't know' responses), memory consolidation vs retrieval cueing, and cognitive re-testing post-mood recovery."
        },
        {
          criterion: "Non-Pharmacological & Caregiver Interventions (25%)",
          indicators: "Articulates evidence-based cognitive rehabilitation (external aids, errorless learning, spaced retrieval), environmental modifications, and structured caregiver psychoeducation to mitigate burden and burnout."
        },
        {
          criterion: "Ethical, Ageist, & Diagnostic Nuances (25%)",
          indicators: "Critically reflects on combating ageism, ethical handling of driving/financial safety vs autonomy, transparent and compassionate diagnostic disclosure, and cultural considerations in geropsychology."
        }
      ],
      modelEssayOutline: `
# Model Essay Structure & Key Theoretical Content

## Introduction (~150 words)
- With population aging, neurocognitive disorders represent the leading cause of disability in older adults.
- Differentiating between neurodegenerative etiologies and reversible conditions is clinically imperative because treatments that benefit one condition (e.g., cholinesterase inhibitors in AD) can be ineffective or hazardous in others (e.g., FTD or DLB).
- Thesis: An accurate clinical formulation integrates neuropsychological testing, medical history, behavioral observation, and functional assessments to guide individualized care.

## 1. Differential Profiles: Alzheimer's, Vascular, and Frontotemporal Dementia (~400 words)
- **Alzheimer's Disease (AD)**:
  - Neuropathology: Amyloid plaques and tau neurofibrillary tangles starting in medial temporal lobes.
  - Neuropsychology: Distinctive amnestic syndrome—rapid forgetting, failure of delayed recall, and inability to benefit from recognition or categorical cueing.
  - Functional Impact: Gradual, insidious loss of IADLs; anosognosia common.
- **Vascular Neurocognitive Disorder (VaD)**:
  - Etiology: Ischemic or hemorrhagic cerebrovascular disease; subcortical white matter hyperintensities.
  - Profile: Step-wise or fluctuating trajectory; prominent slowing of processing speed and executive retrieval failure, with memory consolidation relatively preserved (cues help). Early focal neurological and gait signs.
- **Behavioral Variant Frontotemporal Dementia (bvFTD)**:
  - Etiology: Frontal and anterior temporal atrophy; younger onset (45-65).
  - Profile: Early profound changes in personality, disinhibition, loss of empathy, apathy, hyperorality, with relative sparing of episodic memory and spatial navigation early on.

## 2. Organic Dementia vs. Late-Life Depression ('Pseudodementia') (~350 words)
- **Clinical Presentation**:
  - Depressed older adults complain bitterly of memory failure, show high anxiety, and have an acute onset linked to life events (bereavement, medical illness).
  - AD patients minimize problems, are brought in by family, and exhibit insidious onset.
- **Neuropsychological Dissociation**:
  - Test Behavior: Depression leads to poor effort, giving up, and 'I don't know' responses; AD leads to earnest effort, guesses, and confabulation.
  - Memory Architecture: Depressed patients have retrieval/attention deficits, but their recognition memory is intact when cued; AD patients fail recognition cueing because information was never consolidated.
- **Treatment Implication**:
  - Treat depression with Behavioral Activation, modified CBT, and SSRIs; re-test cognition after mood lifts.

## 3. Evidence-Based Non-Pharmacological Interventions (~350 words)
- **Cognitive Rehabilitation (Clare; Pike)**:
  - Individualized, goal-directed compensatory strategies rather than artificial restorative brain drills.
  - External memory aids: Memory notebooks, smartphone alarms, whiteboards, labeled environments.
  - Errorless learning and spaced retrieval for essential daily tasks.
- **Caregiver Support & Psychoeducation**:
  - High rates of caregiver depression and burden; interventions must train caregivers in non-confrontational communication, validating feelings rather than arguing facts, and accessing respite care.
- **Lifestyle and Brain Health**:
  - Aerobic exercise, social engagement, and cardiovascular management to preserve remaining cognitive reserve.

## 4. Ethical, Ageist, and Practical Challenges (~200 words)
- **Overcoming Ageism**: Avoiding the nihilistic assumption that memory loss is 'just normal aging' or that older adults cannot learn or benefit from psychotherapy.
- **Balancing Autonomy vs. Safety**: Managing driving cessation, financial vulnerability, and cooking safety with dignity and least restrictive care.
- **Compassionate Diagnostic Disclosure**: Transparent, collaborative feedback that provides hope, practical planning, and support rather than an abrupt catastrophic pronouncement.

## Conclusion (~100 words)
- Conclude that accurate geropsychological diagnosis transforms an ambiguous, terrifying presentation into an actionable, humane roadmap for patients and families.
`
    }
  }
};
