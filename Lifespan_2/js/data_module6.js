// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 6: Adult Neurodevelopmental Disorders
const MODULE_6_DATA = {
  moduleId: 6,
  title: "Module 6: Neurodevelopmental Disorders Across the Lifespan",
  subtitle: "Adult ADHD, Autism Spectrum Disorder, FASD, Tourette's Disorder, Intellectual Disability & Adapted Clinical Formulations",
  coordinator: "Dr Erinn Hawkins (Clinical Psychologist, MAPS, Senior Lecturer)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "Neurodevelopmental Continuity & Late Recognition in Adulthood",
      author: "Dr Erinn Hawkins (DSM-5-TR Framework)",
      summary: "Neurodevelopmental differences begin in early development, but clinical recognition frequently occurs in adulthood. Adult presentations often emerge when environmental scaffolds fall away (university, employment, parenting) or when long-standing compensation/masking leads to autistic/ADHD burnout and secondary mental health crises."
    },
    {
      title: "The Camouflaging & Masking Phenomenon",
      author: "Hull et al. / Dr Erinn Hawkins",
      summary: "High-masking individuals (particularly females and those with high verbal intelligence) deploy conscious and unconscious strategies (social scripts, forced eye contact, suppression of stimming) to blend into neurotypical environments. Masking obscures diagnostic behavioral signs, delays diagnosis, and carries severe costs including chronic exhaustion, identity erosion, and suicidality."
    },
    {
      title: "Australian Clinical Practice Guidelines for FASD (2024/2025)",
      author: "Natasha Reid et al. (NHMRC Approved)",
      summary: "Australia's national consensus guideline defines FASD across two clinical pathways: (1) FASD with 3 sentinel facial features (smooth philtrum, thin upper lip, short palpebral fissures) + severe impairment in >=3 neurodevelopmental domains; and (2) FASD with less than 3 sentinel facial features requiring confirmed prenatal alcohol exposure + severe impairment in >=3 domains. Emphasizes multidisciplinary assessment and strengths-based, culturally responsive practice."
    },
    {
      title: "Functional Formulation, Chain Analysis & Adaptive Support",
      author: "Linehan / Young / Dr Erinn Hawkins",
      summary: "Intervention begins with person-led goals rather than 'treating' neurodivergence itself. Behavioral Chain Analysis identifies vulnerability factors, triggers, and maintaining loops for distressing behaviors. Schema Therapy can be adapted (concrete mode maps, predictable structure, limited reparenting) to address secondary shame ('defectiveness', 'failure') without pathologizing neurodivergent traits."
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "ADHD",
      code: "DSM-5 314.00 / 314.01",
      name: "Adult Attention-Deficit/Hyperactivity Disorder (ADHD)",
      type: "Neurodevelopmental Disorder (Persistent Adult Presentation)",
      ageRange: "Lifespan (Symptoms present before age 12; often diagnosed in adulthood)",
      coreDefinition: "A persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development, characterized in adults by executive dysfunction, chronic procrastination, disorganization, emotional dysregulation, and restlessness.",
      dsmCriteria: [
        "Inattention (>=5 symptoms for adults >=17 years): Careless mistakes, difficulty sustaining attention in tasks/conversations, does not seem to listen when spoken to directly, fails to finish duties/workplace tasks, difficulty organizing tasks/activities, avoids sustained mental effort, loses necessary items, easily distracted by extraneous stimuli, forgetful in daily activities.",
        "Hyperactivity/Impulsivity (>=5 symptoms for adults >=17 years): Fidgets with hands/feet or squirming, leaves seat in workplace meetings, feelings of internal restlessness, unable to engage in leisure quietly, 'on the go' or driven by a motor, talks excessively, blurts out answers/interrupts, difficulty waiting turn, intrudes on others.",
        "Several symptoms were present prior to age 12 years (corroborated by school reports or developmental collateral when available).",
        "Symptoms are present in two or more settings (e.g., home, work, social relationships).",
        "Clear evidence of functional impairment in social, academic, or occupational functioning.",
        "Not better explained by another mental disorder (e.g., mood disorder, anxiety disorder, dissociative disorder, personality disorder, substance intoxication/withdrawal)."
      ],
      howToDiagnose: [
        "Semi-structured diagnostic interview: Diagnostic Interview for ADHD in Adults (DIVA-5) mapping childhood and adult criteria.",
        "Standardized rating scales: Adult ADHD Self-Report Scale (ASRS v1.1) and Conners' Adult ADHD Rating Scales (CAARS).",
        "Developmental and collateral history: School report cards, parent/partner report of childhood distractibility and restlessness.",
        "Neuropsychological testing (optional, not diagnostic): Continuous Performance Tests (CPT-3), Trail Making Test Part B, executive function inventories (BRIEF-A)."
      ],
      factorsLookedFor: [
        "Executive Dysfunction: Difficulty with task activation, working memory, time blindness, prioritizing, and organizing complex multistep workflows.",
        "Internalized Hyperactivity: Subjective internal restlessness, racing mind, sensation of being 'driven by a motor', need to doodle or move constantly.",
        "Emotional Lability: Rejection Sensitive Dysphoria (RSD), rapid frustration intolerance, impulsivity in spending or conversational turn-taking.",
        "Hyperfocus: Paradoxical ability to focus intently for hours on highly stimulating, novel, or urgent tasks while unable to initiate routine administrative chores."
      ],
      potentialTreatments: [
        "Pharmacotherapy (First-Line): Psychostimulants (Methylphenidate, Lisdexamfetamine, Dexamfetamine) or non-stimulants (Atomoxetine, Guanfacine).",
        "Adult ADHD-Specific CBT (Safren / Ramsay): Psychoeducation, modular calendar/planner systems, task-breakdown methods, 'chunking', external environmental scaffolding.",
        "Task Activation & Executive Coaching: Pomodoro intervals, body doubling, environmental modification to reduce distractor friction.",
        "Schema Therapy Adaptations: Addressing internalized schemas of 'Defectiveness/Shame' and 'Failure' resulting from years of unaccommodated executive struggles."
      ],
      clinicalPearl: "Adult ADHD hyperactivity rarely looks like a child running around the room; it presents as internal restlessness, chronic racing thoughts, fidgeting, verbal impulsivity, and the subjective exhaustion of fighting constant cognitive derailment."
    },
    {
      id: "ASD",
      code: "DSM-5 299.00 (F84.0)",
      name: "Autism Spectrum Disorder (ASD) in Adulthood",
      type: "Neurodevelopmental Spectrum Disorder",
      ageRange: "Lifespan (Developmental onset; frequently recognized in late adolescence/adulthood)",
      coreDefinition: "A lifelong neurodevelopmental difference characterized by persistent differences in social communication and social interaction across multiple contexts, alongside restricted, repetitive patterns of behavior, interests, activities, and atypical sensory processing.",
      dsmCriteria: [
        "Criterion A: Persistent deficits in social communication and social interaction across multiple contexts: (1) Deficits in social-emotional reciprocity (atypical social approach, difficulty with back-and-forth conversation, reduced sharing of interests/emotions); (2) Deficits in nonverbal communicative behaviors (poorly integrated verbal/nonverbal communication, atypical eye contact and body language, deficits in understanding gestures); (3) Deficits in developing, maintaining, and understanding relationships (difficulty adjusting behavior to social contexts, absence of interest in peers, difficulty making friends).",
        "Criterion B: Restricted, repetitive patterns of behavior, interests, or activities (>=2 of): (1) Stereotyped or repetitive motor movements, use of objects, or speech (echolalia, idiosyncratic phrases, stimming); (2) Insistence on sameness, inflexible adherence to routines, ritualized patterns (extreme distress at small changes, rigid thinking patterns, greeting rituals); (3) Highly restricted, fixated interests abnormal in intensity or focus (deep passion for specific systems/subjects); (4) Hyper- or hyporeactivity to sensory input or unusual interest in sensory aspects of the environment (adverse reactions to specific sounds/textures, visual fascinations, olfactory inspection).",
        "Symptoms must be present in the early developmental period (though may not become fully manifest until social demands exceed limited capacities, or may be masked by learned strategies in later life).",
        "Cause clinically significant impairment in social, occupational, or other important areas of current functioning.",
        "Not better explained by intellectual disability or global developmental delay."
      ],
      howToDiagnose: [
        "Gold-standard comprehensive assessment: Autism Diagnostic Observation Schedule (ADOS-2 Module 4) and Autism Diagnostic Interview-Revised (ADI-R) with developmental caregiver.",
        "Adult screening & camouflaging tools: Camouflaging Autistic Traits Questionnaire (CAT-Q), Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R), Autism-Spectrum Quotient (AQ).",
        "Detailed developmental timeline examining childhood play, peer relationships, sensory sensitivities, and evolution of masking behaviors.",
        "Differential exclusion of Social Anxiety Disorder, Schizoid Personality Disorder, and Borderline Personality Disorder."
      ],
      factorsLookedFor: [
        "Social Reciprocity: Prefers explicit, direct communication; finds neurotypical 'small talk' exhausting and confusing; takes literal interpretations.",
        "Sensory Sensitivities: Tactile defensiveness (clothing tags, textures), auditory overload in noisy restaurants, fluorescent light flicker intolerance.",
        "Restricted Interests & Routines: Profound, immersive mastery of specialized subjects; strong distress or executive paralysis when unexpected routine changes occur.",
        "Autistic Burnout: Severe mental, emotional, or physical exhaustion resulting from chronic camouflaging and unaccommodated sensory overload."
      ],
      potentialTreatments: [
        "Neurodiversity-Affirming Psychoeducation: Re-framing difference from deficit; unmasking safely; processing autistic identity.",
        "Environmental & Sensory Accommodations: Noise-canceling headphones, sensory diet, low-arousal workspaces, explicit written communication in the workplace.",
        "Social Competence & Communication Supports: Focus on double empathy problem (mutual understanding), finding autistic peer communities rather than forced NT assimilation.",
        "Adapted Psychological Therapy: Concrete, structured CBT/ACT with written visual summaries, direct language, and interoception awareness training."
      ],
      clinicalPearl: "Remember Milton's 'Double Empathy Problem': Autistic social communication difficulties are not an intrinsic one-way deficit; communicative breakdowns occur reciprocally between people of different neurotypes who use divergent social cues."
    },
    {
      id: "FASD",
      code: "ICD-11 6A0Y / DSM-5-TR ND-PAE",
      name: "Fetal Alcohol Spectrum Disorder (FASD)",
      type: "Neurodevelopmental Disorder (Prenatal Alcohol-Related)",
      ageRange: "Lifespan (Congenital etiology; clinical manifestations across lifespan)",
      coreDefinition: "A diagnostic term for severe neurodevelopmental impairments resulting from prenatal alcohol exposure, impacting brain architecture and function across multiple cognitive, motor, adaptive, and behavioral domains.",
      dsmCriteria: [
        "Australian Clinical Practice Guidelines (2024/2025) Diagnostic Criteria:",
        "Pathway 1: FASD with 3 Sentinel Facial Features: (1) All 3 sentinel facial features present: smooth philtrum (Rank 4 or 5 on lip-philtrum guide), thin upper lip (Rank 4 or 5), and short palpebral fissure length (<=2 SD below mean); AND (2) Severe neurodevelopmental impairment (defined as score <=2 SD below mean) in at least 3 of 10 specified domains; AND (3) Prenatal alcohol exposure may be confirmed OR unconfirmed.",
        "Pathway 2: FASD with Less Than 3 Sentinel Facial Features: (1) Confirmed prenatal alcohol exposure (detailed maternal consumption history or validated medical records); AND (2) Severe neurodevelopmental impairment (score <=2 SD below mean) in at least 3 of 10 specified domains.",
        "10 Specified Neurodevelopmental Domains: (1) Brain structure/neurology (microcephaly <=2 SD, structural abnormalities); (2) Motor skills; (3) Cognition (General IQ); (4) Language; (5) Academic achievement; (6) Memory; (7) Attention; (8) Executive function (impulse control, working memory); (9) Affect regulation (mood/anxiety lability); (10) Adaptive behavior, social skills, or social communication."
      ],
      howToDiagnose: [
        "Multidisciplinary Assessment Team: Pediatrician/Physician, Clinical Neuropsychologist, Speech Pathologist, Occupational Therapist, Social Worker.",
        "Facial photogrammetry: Standardized digital 2D/3D photography scored using the University of Washington Lip-Philtrum Guide.",
        "Prenatal exposure history: Sensitive, non-judgmental inquiry into maternal drinking pattern, timing, and quantity during gestation.",
        "Comprehensive neurocognitive battery: WISC-V/WAIS-IV, NEPSY-II, CELF-5, Vineland-3 Adaptive Behavior Scales."
      ],
      factorsLookedFor: [
        "Divergent Memory & Learning: Extreme unevenness in cognitive profile; may learn a task on Monday and completely forget it on Tuesday due to consolidation deficits.",
        "Executive & Adaptive Gap: Adaptive functioning (everyday survival, money management, vulnerability to exploitation) is often significantly lower than raw IQ.",
        "Confabulation & Suggestibility: Readily agrees to leading questions, fills memory gaps with confabulation to please authority figures (high vulnerability in legal system).",
        "Secondary Disabilities: High rates of school disruption, juvenile justice contact, substance use, and mental health crises when unaccommodated."
      ],
      potentialTreatments: [
        "External Brain Scaffolding: Concrete visual routines, step-by-step visual checklists, constant repetition, highly predictable living environments.",
        "Multidisciplinary Therapies: Speech therapy for receptive language deficits, OT for sensory motor coordination, adapted behavioral support.",
        "Caregiver & Community Education: Reframing 'can't' vs 'won't' — understanding that challenging behavior represents brain damage, not willful defiance.",
        "NDIS & Legal Advocacy: Environmental accommodations, financial guardianship support, and protective legal representations."
      ],
      clinicalPearl: "The core paradigm shift in FASD: 'Stop trying to change the person; change the environment.' A person with FASD has static neurological injury; behavioral outbursts represent environmental overload exceeding their brain's regulatory capacity."
    },
    {
      id: "TOURETTE",
      code: "DSM-5 307.23 (F95.2)",
      name: "Tourette's Disorder (Tourette Syndrome) & Persistent Tic Disorders",
      type: "Neurodevelopmental Motor / Vocal Tic Disorder",
      ageRange: "Onset before age 18 (typically 4-7 years; may persist or fluctuate into adulthood)",
      coreDefinition: "A neurodevelopmental disorder characterized by both multiple motor tics and at least one vocal tic that have persisted for more than one year, waxing and waning in frequency.",
      dsmCriteria: [
        "Both multiple motor tics and one or more vocal tics have been present at some time during the illness, although not necessarily concurrently.",
        "The tics may wax and wane in frequency but have persisted for more than 1 year since first tic onset.",
        "Onset is before age 18 years.",
        "The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington's disease, postviral encephalitis).",
        "Differential variants: Persistent (Chronic) Motor or Vocal Tic Disorder (only motor OR only vocal tics present for >1 year); Provisional Tic Disorder (<1 year duration)."
      ],
      howToDiagnose: [
        "Clinical interview and observation: Yale Global Tic Severity Scale (YGTSS) assessing number, frequency, intensity, complexity, and interference.",
        "Identification of Premonitory Urge: Premonitory Urge for Tics Scale (PUTS) assessing the uncomfortable somatic sensation preceding the tic.",
        "Video observation and collateral reports: Differentiating voluntary mannerisms, compulsions, and stereotypies.",
        "Screening for common triad comorbidities: ADHD (50-60%) and OCD (30-50%)."
      ],
      factorsLookedFor: [
        "Premonitory Urge: Physical tension, itch, or internal pressure (often in neck, shoulders, or throat) that is temporarily relieved by executing the tic.",
        "Waxing and Waning: Symptom severity naturally fluctuates over weeks and months; exacerbated by stress, fatigue, excitement, and relaxing after sustained suppression.",
        "Tic Suppressibility: Ability to temporarily suppress tics with conscious effort (e.g., during school or a job interview), followed by a rebound burst when alone.",
        "Complex Tics: Coprolalia (involuntary obscene words; only ~10-15% of cases), echolalia, complex gestures, touching objects."
      ],
      potentialTreatments: [
        "Comprehensive Behavioral Intervention for Tics (CBIT / First-Line Psychological): Awareness training + Competing Response Training (HRT) + Functional interventions.",
        "Habit Reversal Training (HRT): Detecting premonitory urges early and voluntarily executing an incompatible physical movement for 1 minute until urge subsides.",
        "Exposure and Response Prevention (ERP) for Tics: Tolerating the premonitory urge for extended intervals without performing the tic to break the negative reinforcement cycle.",
        "Pharmacotherapy (Moderate-Severe): Alpha-2 adrenergic agonists (Clonidine, Guanfacine) or atypical antipsychotics (Aripiprazole, Risperidone)."
      ],
      clinicalPearl: "To distinguish a Tic from an OCD Compulsion: A tic is preceded by an uncomfortable physical sensation ('premonitory urge') and aims to relieve bodily tension; a compulsion is preceded by an intrusive cognitive thought ('bad things will happen') and aims to neutralize dread."
    },
    {
      id: "ID",
      code: "DSM-5 319 (F70-F73)",
      name: "Intellectual Disability (Intellectual Developmental Disorder)",
      type: "Neurodevelopmental Disorder (Adaptive & Cognitive)",
      ageRange: "Onset during the developmental period (prior to age 18)",
      coreDefinition: "A disorder with onset during the developmental period that includes both intellectual and adaptive functioning deficits in conceptual, social, and practical domains.",
      dsmCriteria: [
        "Criterion A: Deficits in intellectual functions, such as reasoning, problem solving, planning, abstract thinking, judgment, academic learning, and learning from experience, confirmed by both clinical assessment and individualized, standardized intelligence testing (typically IQ score >=2 SD below population mean, i.e., <=70 +/- 5).",
        "Criterion B: Deficits in adaptive functioning that result in failure to meet developmental and sociocultural standards for personal independence and social responsibility. Without ongoing support, the adaptive deficits limit functioning in one or more activities of daily life across multiple environments across three domains: Conceptual, Social, and Practical.",
        "Criterion C: Onset of intellectual and adaptive deficits during the developmental period.",
        "Severity Specifiers (Based on Adaptive Functioning, NOT IQ score): Mild, Moderate, Severe, Profound."
      ],
      howToDiagnose: [
        "Standardized Individual Cognitive Testing: WAIS-IV, WISC-V, Stanford-Binet 5 (accounting for measurement error and cultural fairness).",
        "Standardized Adaptive Functioning Assessment: Vineland Adaptive Behavior Scales (Vineland-3) or Adaptive Behavior Assessment System (ABAS-3) completed with primary caregivers.",
        "Clinical observation across settings: Evaluating communicative independence, safety awareness, money handling, and self-care.",
        "Medical and genetic workup: Microarray testing, Fragile X, metabolic screening."
      ],
      factorsLookedFor: [
        "Conceptual Domain: Language, reading, writing, math reasoning, knowledge acquisition, memory, problem-solving in novel situations.",
        "Social Domain: Awareness of others' thoughts/feelings, empathy, interpersonal communication skills, friendship abilities, social judgment, gullibility.",
        "Practical Domain: Self-management, personal care, job responsibilities, money management, recreation, organizing school/work tasks.",
        "Diagnostic Overshadowing: The common clinical error where psychiatric symptoms (e.g., depression, psychosis, anxiety) are mistakenly attributed solely to the intellectual disability."
      ],
      potentialTreatments: [
        "Person-Centered Positive Behavior Support (PBS): Functional analysis of behaviors of concern, environmental modifications, teaching replacement communication skills.",
        "Adapted Psychotherapy: Concrete, visual CBT with Easy-Read materials, short sessions, visual cue cards, behavioral rehearsal, and caregiver involvement.",
        "Adaptive Skills Training: Task-analyzed teaching of practical life skills (cooking, public transport, budgeting, hygiene) using chaining and prompt fading.",
        "Systemic & NDIS Supports: Supported employment, independent living options, social inclusion programs, communication device integration."
      ],
      clinicalPearl: "Beware of 'Diagnostic Overshadowing': If a person with intellectual disability becomes aggressive, withdrawn, or irritable, do NOT simply say 'that's just their ID'. Conduct a medical check for physical pain and assess for mood, anxiety, or trauma disorders adapted to their communication level."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "ADHD_ASD": {
      title: "Adult ADHD vs. Autism Spectrum Disorder (ASD)",
      commonality: "Both are neurodevelopmental conditions involving executive dysfunction, social friction, sensory sensitivities, hyperfocus, and high rates of adult masking/burnout.",
      distinguishingMarkers: [
        {
          feature: "Social Communication & Reciprocity",
          conditionA: "ADHD: Understands intuitive social reciprocity and nonverbal cues, but interrupts, loses train of thought, or misses details due to inattention and conversational impulsivity.",
          conditionB: "ASD: Qualitative difference in intuitive social-emotional reciprocity; difficulty interpreting nonverbal subtext, unwritten social rules, or differing communicative perspectives."
        },
        {
          feature: "Routines & Repetitive Behaviors",
          conditionA: "ADHD: Desperately craves novelty and stimulation; easily bored by routine; struggles to maintain schedules despite wanting structure.",
          conditionB: "ASD: Finds deep comfort, stability, and emotional regulation in predictability and routines; experiences profound distress or meltdown when routines are altered."
        },
        {
          feature: "Hyperfocus vs. Special Interests",
          conditionA: "ADHD: Hyperfocus is state-dependent, novel, and transient — may obsess over a new hobby for two weeks then completely abandon it when dopamine drops.",
          conditionB: "ASD: Special interests are enduring, systematic, lifelong or multi-year deep passions organized around collecting, cataloging, and mastering complex domain knowledge."
        }
      ],
      ruleInRuleOut: {
        ruleInADHD: "Rule in ADHD: Lifelong inattention/restlessness across contexts, dopamine-driven task switching, ability to understand social nuances when paying attention.",
        ruleInASD: "Rule in ASD: Insistence on sameness, sensory hyper/hypo-reactivity, motor stimming, qualitative differences in nonverbal social communication from early childhood.",
        pitfallToAvoid: "Avoid the myth that they are mutually exclusive. Under DSM-5, co-occurring ADHD + ASD ('AuDHD') is common (~30-50% co-occurrence) and requires dual formulation."
      },
      contrastingTreatments: {
        treatmentA_Name: "ADHD-Targeted Intervention Pathway",
        treatmentA_Steps: "First-line psychostimulants (Lisdexamfetamine/Methylphenidate) + CBT for executive dysfunction (organizers, task chunking, Pomodoro, body doubling).",
        treatmentB_Name: "ASD-Targeted Support Pathway",
        treatmentB_Steps: "Neurodiversity-affirming identity work, sensory environmental audits (noise reduction, lighting), explicit communication frameworks, accommodations to prevent autistic burnout."
      }
    },

    "ADHD_BPD": {
      title: "Adult ADHD vs. Borderline Personality Disorder (BPD)",
      commonality: "Both present with intense emotional reactivity, impulsivity, relationship turmoil, and feelings of chronic emptiness or boredom.",
      distinguishingMarkers: [
        {
          feature: "Emotional Dysregulation Trigger & Timeframe",
          conditionA: "ADHD: Emotional shifts are rapid, transient reactions to immediate cognitive frustration or perceived criticism (Rejection Sensitive Dysphoria), lasting minutes to hours.",
          conditionB: "BPD: Emotional instability is deeply tied to interpersonal abandonment fears, self-image fragmentation, and rejection, with sustained dysphoric episodes."
        },
        {
          feature: "Self-Image & Identity",
          conditionA: "ADHD: Identity is stable, though the person may harbor demoralization or shame ('I am lazy/flawed') due to chronic executive underperformance.",
          conditionB: "BPD: Pervasive identity disturbance with unstable self-concept, shifting core values, goals, career plans, and chronic feelings of emptiness."
        },
        {
          feature: "Self-Harm & Suicidality",
          conditionA: "ADHD: Impulsive risk-taking (speeding, binge spending) is driven by stimulation seeking; intentional non-suicidal self-injury (NSSI) is NOT a primary feature.",
          conditionB: "BPD: Recurrent suicidal behavior, gestures, threats, or deliberate non-suicidal self-injury (cutting) to regulate unbearable negative affect."
        }
      ],
      ruleInRuleOut: {
        ruleInADHD: "Rule in ADHD: Clear childhood onset of cognitive inattention and motor/verbal restlessness before age 12; executive disorganization present in non-emotional tasks.",
        ruleInBPD: "Rule in BPD: Frantic efforts to avoid real/imagined abandonment, unstable and intense interpersonal relationships alternating between idealization and devaluation, recurrent NSSI.",
        pitfallToAvoid: "Do not misdiagnose ADHD-driven emotional lability as BPD in women. Women with undiagnosed ADHD are frequently mislabeled with BPD due to emotional reactivity."
      },
      contrastingTreatments: {
        treatmentA_Name: "ADHD Clinical Pathway",
        treatmentA_Steps: "Dopaminergic pharmacotherapy + practical executive skills training, organizational coaching, and cognitive restructuring for ADHD shame.",
        treatmentB_Name: "BPD Clinical Pathway",
        treatmentB_Steps: "Dialectical Behavior Therapy (DBT: distress tolerance, emotion regulation) or Schema Therapy focusing on interpersonal safety and abandonment trauma."
      }
    },

    "ASD_SAD": {
      title: "Autism Spectrum Disorder (Adult) vs. Social Anxiety Disorder (SAD)",
      commonality: "Both conditions present with profound discomfort, avoidance of social gatherings, anxiety during peer interactions, and limited friend circles.",
      distinguishingMarkers: [
        {
          feature: "Intuitive Social Cognition & Theory of Mind",
          conditionA: "ASD: Difficulty understanding nonverbal subtext, unwritten social norms, and intuitive pragmatic communication from early childhood.",
          conditionB: "SAD: Intact intuitive grasp of social cues and subtext; excessive fear of negative evaluation, embarrassment, or scrutiny by others."
        },
        {
          feature: "Social Motivation & Solitude",
          conditionA: "ASD: Solitary activities and restorative alone time are intrinsically satisfying; social interactions cause cognitive/sensory fatigue rather than just fear.",
          conditionB: "SAD: Strong desire for social connection and belonging, but held back by paralyzing dread of being judged, humiliated, or rejected."
        },
        {
          feature: "Sensory & Repetitive Domains",
          conditionA: "ASD: Exhibits sensory sensitivities (auditory/tactile), motor stimming, and restricted circumscribed interests independent of social contexts.",
          conditionB: "SAD: No atypical sensory processing, no stimming behaviors, and no restricted/repetitive behavioral routines."
        }
      ],
      ruleInRuleOut: {
        ruleInASD: "Rule in ASD: Developmental history of atypical nonverbal communication, sensory processing differences, insistence on sameness, and comfort in solitude.",
        ruleInSAD: "Rule in SAD: Onset typically in adolescence; core cognitions center on 'They will see I am sweating/foolish'; normal social reciprocity when relaxed with close family.",
        pitfallToAvoid: "Autistic adults often develop secondary Social Anxiety due to repeated peer rejection and bullying. In Au+SAD, address sensory safety first before standard social exposure."
      },
      contrastingTreatments: {
        treatmentA_Name: "ASD Support Framework",
        treatmentA_Steps: "Accommodating sensory environments, finding neurodiversity-affirming peer groups, learning explicit social mechanics without forcing masking.",
        treatmentB_Name: "SAD Evidence-Based Protocol",
        treatmentB_Steps: "Cognitive therapy (Clark & Wells model) with video feedback, attentional retraining away from self-focus, and behavioral experiments testing feared catastrophe."
      }
    },

    "FASD_ADHD": {
      title: "Fetal Alcohol Spectrum Disorder (FASD) vs. ADHD",
      commonality: "Both present with severe inattention, hyperactivity, impulsivity, poor executive function, and difficulties succeeding in academic and workplace settings.",
      distinguishingMarkers: [
        {
          feature: "Etiological Exposure & Physical Markers",
          conditionA: "FASD: Confirmed prenatal alcohol exposure (or 3 sentinel facial features: smooth philtrum, thin lip, short palpebral fissures); possible microcephaly.",
          conditionB: "ADHD: Polygenic neurodevelopmental etiology; normal physical features, normal cranial circumference, absence of teratogenic facial phenotype."
        },
        {
          feature: "Pervasiveness of Neurocognitive Deficits",
          conditionA: "FASD: Widespread neurological injury across >=3 domains: severe memory consolidation deficits, motor coordination impairment, adaptive survival gap.",
          conditionB: "ADHD: Primary deficits in frontostriatal attention, working memory, and executive inhibitory control; global memory storage and motor domains typically intact."
        },
        {
          feature: "Day-to-Day Learning Consistency",
          conditionA: "FASD: Marked day-to-day fluctuations in cognitive retrieval ('on Monday they know it, on Tuesday it is vanished'); requires permanent external memory scaffolds.",
          conditionB: "ADHD: Information is encoded and retained, but retrieval is blocked by distractibility, low dopamine motivation, or boredom; improves dramatically with stimulant meds."
        }
      ],
      ruleInRuleOut: {
        ruleInFASD: "Rule in FASD: Maternal alcohol exposure confirmed or sentinel facial features present; severe multivariable impairment across >=3 neurodevelopmental domains.",
        ruleInADHD: "Rule in ADHD: No teratogenic facial markers; cognitive deficits circumscribed to attention/impulse control; dramatic response to psychostimulant therapy.",
        pitfallToAvoid: "FASD individuals are frequently misdiagnosed with pure ADHD. Standard ADHD behavioral interventions (reward/consequence charts) often fail in FASD because the memory consolidation deficit prevents linking past actions to consequences."
      },
      contrastingTreatments: {
        treatmentA_Name: "FASD Environmental Accommodation Protocol",
        treatmentA_Steps: "External brain model: permanent visual routines, supervision, multi-modal concrete instruction, avoiding abstract punishment, NDIS lifelong support.",
        treatmentB_Name: "ADHD Executive Function CBT & Medication",
        treatmentB_Steps: "Stimulant pharmacotherapy + skill acquisition in internal self-monitoring, organizational habits, and cognitive reframing."
      }
    }
  },

  // Interactive Differential Presets
  differentialPresets: [
    { label: "ADHD vs. ASD", ids: ["ADHD", "ASD"] },
    { label: "ADHD vs. BPD Features", ids: ["ADHD", "BPD"] },
    { label: "ASD vs. Social Anxiety", ids: ["ASD", "SAD"] },
    { label: "FASD vs. ADHD", ids: ["FASD", "ADHD"] },
    { label: "All Neurodevelopmental Disorders", ids: ["ADHD", "ASD", "FASD", "TOURETTE", "ID"] }
  ],

  // Clinical Practice Scenarios
  scenarios: [
    {
      id: "M6_SCENARIO_1",
      title: "Scenario 1: Chloe (29yo) — The Exhausted Corporate Analyst",
      presentation: "Chloe, a 29-year-old financial analyst, presents to your clinic with severe burnout, chronic fatigue, and depression. She has always been considered 'high achieving' but reports that over the past two years, keeping up with her promotion has left her shattered. She spends hours rehearsing social interactions before work meetings, memorizing jokes, and monitoring her eye contact. In crowded open-plan offices, the humming air conditioner and fluorescent lighting cause her physical headaches, leading her to hide in the bathroom stall to recover. When a sudden change in departmental software was announced, she experienced an overwhelming emotional shutdown, unable to speak for three hours. School reports from childhood note: 'Chloe is an exceptionally bright, quiet girl who prefers reading encyclopedias alone under the tree and becomes distressed when the classroom seating plan is changed.' She has never engaged in self-harm or displayed severe identity shifts.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — Based on Chloe's developmental history, sensory processing differences, social camouflaging, and insistence on sameness, what is the primary diagnosis?",
        options: [
          { text: "Autism Spectrum Disorder (ASD) in Adulthood (Masked / Female Phenotype)", isCorrect: true },
          { text: "Social Anxiety Disorder (SAD)", isCorrect: false },
          { text: "Borderline Personality Disorder (BPD)", isCorrect: false },
          { text: "Persistent Depressive Disorder (Dysthymia)", isCorrect: false }
        ],
        hint: "Notice the lifelong sensory sensitivities (lighting, humming), extreme distress over routine changes, solitary childhood interests, and intentional masking of nonverbal communication.",
        explanation: "Chloe meets DSM-5 criteria for Autism Spectrum Disorder (Level 1). Her presentation illustrates the late-diagnosed adult female phenotype: high masking/camouflaging, deep sensory overload, insistence on sameness, and autistic burnout precipitated by escalating adult corporate demands."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Treatment & Formulation — What is the most appropriate first-line clinical management plan for Chloe?",
        options: [
          { text: "Neurodiversity-affirming psychoeducation, sensory workplace accommodations (noise-canceling headphones, hybrid working), and unmasking support to recover from autistic burnout.", isCorrect: true },
          { text: "Intensive in-vivo social exposure hierarchy targeting meetings and cafeteria lunches to extinguish social avoidance.", isCorrect: false },
          { text: "Dialectical Behavior Therapy (DBT) focusing on interpersonal effectiveness and distress tolerance skills.", isCorrect: false },
          { text: "Immediate referral for psychostimulant titration to improve work processing speed.", isCorrect: false }
        ],
        hint: "Treating autistic burnout requires sensory decompression, workplace accommodations, and validating autistic identity rather than forcing social exposure.",
        explanation: "The priority for Chloe is recovery from autistic burnout via neurodiversity-affirming care. This involves sensory accommodations (auditory protection, lighting adjustments, working from home options), validating her neurodivergent identity, and teaching pacing to reduce camouflaging exhaustion."
      }
    },
    {
      id: "M6_SCENARIO_2",
      title: "Scenario 2: Marcus (34yo) — Disorganization and Procrastination Paralysis",
      presentation: "Marcus, a 34-year-old software project manager, seeks assessment because he is on the verge of losing his job. He describes feeling 'like a Ferrari with bicycle brakes.' He is full of creative ideas and can work for 14 hours straight when a novel, exciting project starts, but as soon as routine documentation or bug tracking is required, he experiences agonizing procrastination. His desk and digital files are completely disorganized, he regularly misses deadlines, forgets appointments, and misplaces his car keys daily. His partner complains that in conversations he constantly interrupts, finishes her sentences, and struggles to sit through a movie without checking his phone or pacing. Marcus remembers being described in primary school report cards as 'bright but constantly daydreaming, messy desk, does not reach potential.' He denies any history of trauma or mood episodes.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the most accurate diagnostic formulation for Marcus?",
        options: [
          { text: "Adult Attention-Deficit/Hyperactivity Disorder (ADHD), Combined Presentation", isCorrect: true },
          { text: "Bipolar II Disorder (Hypomanic episodes alternating with depression)", isCorrect: false },
          { text: "Major Depressive Disorder with executive dysfunction", isCorrect: false },
          { text: "Obsessive-Compulsive Personality Disorder (OCPD)", isCorrect: false }
        ],
        hint: "Review the chronic executive dysfunction, time blindness, disorganization, childhood history before age 12, hyperfocus on novelty, and motor/verbal restlessness.",
        explanation: "Marcus meets full DSM-5 criteria for Adult ADHD (Combined Presentation). His symptoms span inattention (disorganization, forgetfulness, procrastination) and hyperactivity/impulsivity (interrupting, restlessness, difficulty sitting still), with clear developmental roots documented in childhood report cards."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the guideline-recommended multimodal treatment pathway for Marcus?",
        options: [
          { text: "Psychostimulant pharmacotherapy (e.g., Lisdexamfetamine) paired with adult ADHD-specific CBT targeting calendar systems, task chunking, and environmental scaffolding.", isCorrect: true },
          { text: "Long-term psychodynamic psychotherapy to uncover unconscious resistance to workplace authority.", isCorrect: false },
          { text: "High-dose SSRI therapy and weekly relaxation breathing training.", isCorrect: false },
          { text: "Habit Reversal Training (HRT) and exposure to disorganized environments.", isCorrect: false }
        ],
        hint: "Australian and international ADHD guidelines endorse first-line stimulant medication combined with executive function skills CBT.",
        explanation: "Under the Australian Clinical Practice Guideline for ADHD, first-line management combines pharmacological support (psychostimulants to normalize frontostriatal dopamine) with structured adult ADHD CBT (external planners, Pomodoro intervals, task breakdown, and environmental modification)."
      }
    },
    {
      id: "M6_SCENARIO_3",
      title: "Scenario 3: Liam (11yo) — Complex Learning, Memory Lapses & Motor Difficulties",
      presentation: "Liam is an 11-year-old boy in foster care referred by his case manager due to severe academic failure, memory inconsistency, and behavioral outbursts. His teacher notes that on Monday Liam can master a simple math concept, but by Wednesday he acts as though he has never seen it before. He has marked fine-motor coordination deficits (struggles with scissors and handwriting) and poor balance. On physical examination by the community pediatrician, Liam displays a very thin upper lip (Rank 4), a completely smooth philtrum (Rank 5), and short palpebral fissures (all <=2 SD). Historical child protection records confirm heavy maternal binge drinking throughout the pregnancy. Formal neuropsychological testing reveals severe impairments (scores >2 SD below norms) across four domains: motor function, delayed verbal memory consolidation, executive function, and adaptive living skills. His general IQ is 78.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — Applying the Australian Clinical Practice Guidelines (2024/2025), what is the definitive diagnosis for Liam?",
        options: [
          { text: "Fetal Alcohol Spectrum Disorder (FASD) with 3 Sentinel Facial Features", isCorrect: true },
          { text: "Attention-Deficit/Hyperactivity Disorder (ADHD) only", isCorrect: false },
          { text: "Intellectual Disability (Intellectual Developmental Disorder), Mild", isCorrect: false },
          { text: "Developmental Coordination Disorder (DCD)", isCorrect: false }
        ],
        hint: "Liam has all 3 sentinel facial features (thin upper lip, smooth philtrum, short palpebral fissures), confirmed prenatal alcohol exposure, and severe impairment across >=3 neurodevelopmental domains.",
        explanation: "Under the Australian FASD Guidelines, Liam fulfills criteria for FASD with 3 Sentinel Facial Features. He exhibits all three facial markers (thin lip, smooth philtrum, short palpebral fissures), confirmed prenatal alcohol exposure, and severe impairment (>=2 SD below mean) across four neurodevelopmental domains (motor, memory, executive, adaptive)."
      },
      step2: {
        prompt: "Step 2: Clinical Management & Environmental Formulation — What is the most effective clinical framework to support Liam and his foster family?",
        options: [
          { text: "An 'External Brain' scaffolding model: concrete visual step-by-step schedules, constant routine repetition, avoiding abstract punishment, and multi-agency NDIS support.", isCorrect: true },
          { text: "A strict behavioral token economy where privilege loss is enforced whenever Liam forgets his math work.", isCorrect: false },
          { text: "Independent study drills to force memory consolidation through unassisted trial and error.", isCorrect: false },
          { text: "Standard cognitive restructuring targeting Liam's irrational beliefs about academic failure.", isCorrect: false }
        ],
        hint: "Individuals with FASD have static brain damage affecting memory storage; behavioral punishment for memory lapses fails. What they need is permanent environmental scaffolding.",
        explanation: "FASD requires shifting from 'he won't do it' to 'he can't do it without support.' Because memory consolidation is impaired, abstract token economies fail. Liam requires an 'external brain' approach: permanent visual routines, simplified concrete language, environmental consistency, and multidisciplinary occupational and speech therapies."
      }
    },
    {
      id: "M6_SCENARIO_4",
      title: "Scenario 4: Ben (16yo) — Throat Clearing, Neck Jerking & Internal Urges",
      presentation: "Ben, a 16-year-old high school student, presents with involuntary neck jerking and rapid throat clearing that started around age 8. The movements wax and wane; during exams or stressful social events, they become noticeably more frequent. Ben describes that before he jerks his neck, he experiences an intense, uncomfortable 'itch or tightness' inside his collarbone and neck muscles that builds up until he performs the jerk, bringing brief physical relief. He can suppress the movements during class for 20 minutes if he concentrates hard, but feels exhausted and experiences an explosion of jerking as soon as he gets home. He does not experience intrusive thoughts or fears of contamination.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the diagnosis for Ben's presentation?",
        options: [
          { text: "Tourette's Disorder (Tourette Syndrome)", isCorrect: true },
          { text: "Obsessive-Compulsive Disorder (OCD)", isCorrect: false },
          { text: "Functional Neurological Disorder (Conversion Disorder with motor spasms)", isCorrect: false },
          { text: "Autism Spectrum Disorder with motor stereotypies", isCorrect: false }
        ],
        hint: "He has both motor tics (neck jerking) and a vocal tic (throat clearing) lasting >1 year, with onset before age 18 and a classic premonitory urge.",
        explanation: "Ben meets DSM-5 criteria for Tourette's Disorder: presence of both multiple motor tics (neck jerking) and vocal tics (throat clearing) persisting for >1 year with onset in childhood (age 8), accompanied by classic premonitory urges."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Psychological Treatment — What is the first-line evidence-based psychological intervention for Ben?",
        options: [
          { text: "Comprehensive Behavioral Intervention for Tics (CBIT), incorporating Habit Reversal Training (HRT: premonitory urge awareness + competing response training).", isCorrect: true },
          { text: "Psychoanalysis exploring unconscious hostility toward school authorities.", isCorrect: false },
          { text: "Flooding exposure where Ben is forced to perform tics continuously for two hours.", isCorrect: false },
          { text: "Immediate high-dose atypical antipsychotic monotherapy without behavioral intervention.", isCorrect: false }
        ],
        hint: "CBIT and Habit Reversal Training (training an incompatible physical action like isometric neck muscle tensing) are the gold-standard first-line psychological therapies for tics.",
        explanation: "CBIT (incorporating Habit Reversal Training) is the gold-standard first-line behavioral therapy. Ben is taught to identify premonitory urges early (awareness training) and voluntarily execute an incompatible physical response (e.g., contracting opposing neck flexors) for 1 minute until the urge dissipates."
      }
    }
  ],

  // Short Answer & Essay Practice
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "M6_SAQ_1",
        title: "SAQ 1: Adult ADHD vs. BPD Differential Markers",
        prompt: "Contrast the diagnostic profiles of Adult ADHD and Borderline Personality Disorder (BPD) regarding: (1) triggers and timeframes of emotional dysregulation, (2) self-image/identity stability, and (3) clinical features of impulsivity. (4-6 marks)",
        criteria: [
          "Emotional Dysregulation: ADHD emotional lability is rapid, episodic, and triggered by immediate cognitive/environmental frustration (e.g., Rejection Sensitive Dysphoria, lasts minutes to hours); BPD affective instability is pervasive, tied to fears of abandonment/interpersonal rejection, and lasts days.",
          "Self-Image: ADHD patients have stable core identity, though may hold shame/demoralization about executive failure; BPD features severe identity disturbance, chronic feelings of emptiness, and shifting values.",
          "Impulsivity: ADHD impulsivity is driven by executive inhibition deficits and stimulation seeking (interrupting, impulse spending); BPD impulsivity often involves self-damaging acts, recurrent suicidal behavior, or deliberate NSSI (cutting) to regulate unbearable affect.",
          "Childhood Roots: ADHD requires clear symptom onset and impairment prior to age 12 across two or more settings."
        ],
        modelAnswer: "1. Emotional Dysregulation: In Adult ADHD, emotional shifts are rapid and transient, frequently triggered by immediate cognitive hurdles or perceived criticism (Rejection Sensitive Dysphoria), typically resolving within hours. In BPD, emotional instability is profound, driven by pervasive interpersonal abandonment fears, and accompanied by intense dysphoria or anger lasting hours to days.\n\n2. Self-Image & Identity: Adults with ADHD maintain a coherent sense of self, although they frequently harbor secondary demoralization and shame ('I am broken/lazy') due to unaccommodated executive struggles. In contrast, BPD is characterized by marked, persistent identity disturbance, unstable self-concept, and chronic emptiness.\n\n3. Impulsivity: In ADHD, impulsivity stems from frontostriatal inhibitory control deficits (blurting answers, impulsive shopping, sensation-seeking). In BPD, impulsivity is characteristically self-damaging and frequently manifests as non-suicidal self-injury (NSSI) or suicidal gestures in response to perceived rejection.\n\n4. Developmental Course: ADHD requires evidence of persistent inattentive and/or hyperactive symptoms prior to age 12 across multiple settings, whereas BPD symptoms typically emerge in adolescence/early adulthood."
      },
      {
        id: "M6_SAQ_2",
        title: "SAQ 2: Australian FASD Diagnostic Guidelines (2024/2025)",
        prompt: "Outline the two clinical pathways for diagnosing Fetal Alcohol Spectrum Disorder (FASD) according to the Australian Clinical Practice Guidelines. Specify the requirement for sentinel facial features, neurodevelopmental domains, and maternal alcohol confirmation. (5 marks)",
        criteria: [
          "Identification of the two diagnostic pathways: 'FASD with 3 Sentinel Facial Features' and 'FASD with Less Than 3 Sentinel Facial Features'.",
          "Definition of the 3 Sentinel Facial Features: Smooth philtrum (Rank 4/5), thin upper lip (Rank 4/5), and short palpebral fissure length (<=2 SD below mean).",
          "Neurodevelopmental Impairment Requirement: Severe impairment (score <=2 SD below mean) in at least 3 of the 10 specified neurodevelopmental domains for BOTH pathways.",
          "Alcohol Exposure Confirmation: In Pathway 1 (3 sentinel facial features present), maternal alcohol exposure can be confirmed OR unconfirmed; in Pathway 2 (<3 sentinel facial features), maternal alcohol exposure MUST be confirmed.",
          "Emphasis on multidisciplinary assessment (medical, neuropsychological, speech, occupational)."
        ],
        modelAnswer: "Under the Australian Clinical Practice Guidelines for the Assessment and Diagnosis of FASD (2024/2025), two diagnostic pathways exist:\n\n1. Pathway 1: FASD with 3 Sentinel Facial Features:\n- Requires the presence of all three sentinel facial features: (a) smooth philtrum (Rank 4 or 5), (b) thin upper lip (Rank 4 or 5), and (c) short palpebral fissure length (<=2 SD below mean).\n- Requires severe neurodevelopmental impairment (score <=2 SD below mean) across at least 3 of 10 specified domains.\n- Prenatal alcohol exposure may be confirmed OR unconfirmed (because the triad of facial features in combination with multidomain brain impairment is pathognomonic).\n\n2. Pathway 2: FASD with Less Than 3 Sentinel Facial Features:\n- Prenatal alcohol exposure MUST be confirmed through maternal report or verified clinical/child protection records.\n- Requires severe neurodevelopmental impairment (score <=2 SD below mean) across at least 3 of 10 specified domains.\n\nBoth pathways require a comprehensive multidisciplinary assessment evaluating 10 potential neurodevelopmental domains (including brain structure, motor, cognition, language, academic, memory, attention, executive, affect regulation, and adaptive functioning)."
      },
      {
        id: "M6_SAQ_3",
        title: "SAQ 3: Camouflaging in Adult Autism & Diagnostic Implications",
        prompt: "Define autistic camouflaging (masking). Explain two specific mechanisms used by high-masking individuals, and describe three clinical risks associated with prolonged masking. (5 marks)",
        criteria: [
          "Definition: Camouflaging/masking refers to conscious or unconscious strategies deployed by autistic individuals to hide or compensate for autistic traits to navigate neurotypical social environments.",
          "Mechanisms (any two): Assimilation (mimicking gestures, copying laughter, forcing eye contact); Compensation (using learned cognitive scripts, rehearsing conversations, studying social books); Masking (suppressing motor stims, forcing pleasant facial expressions).",
          "Clinical Risks (any three): Late or missed diagnosis (especially in females); extreme diagnostic overshadowing (misdiagnosed as BPD, SAD, or depression); severe autistic burnout / chronic exhaustion; identity erosion / loss of self; increased risk of suicidality."
        ],
        modelAnswer: "Definition: Autistic camouflaging (masking) refers to the use of conscious and unconscious behavioral and cognitive strategies by autistic individuals to suppress autistic traits and mimic neurotypical social behaviors in order to blend in, avoid rejection, and navigate social demands.\n\nMechanisms:\n1. Compensation: Deploying intellectual strategies to overcome social communication differences, such as actively memorizing conversational scripts, researching social etiquette, and consciously calculating eye contact duration.\n2. Assimilation: Forcing oneself into social situations while copying others' postures, mimicking laughs, and putting on a 'social performance'.\n3. Suppression: Deliberately hiding motor stims (e.g., sitting on hands to prevent hand flapping) and enduring sensory pain without reacting.\n\nClinical Risks:\n1. Delayed or Missed Diagnosis: Clinicians relying solely on overt observation miss internal autistic struggles, leading to late diagnosis in adulthood, particularly among women and girls.\n2. Autistic Burnout: Chronic camouflaging demands immense cognitive and emotional effort, resulting in severe nervous system exhaustion, loss of functional skills, and cognitive collapse.\n3. Mental Health Crises & Suicidality: Long-term masking leads to identity alienation ('I don't know who I really am') and is strongly associated with high rates of depression, anxiety, and elevated suicide risk."
      },
      {
        id: "M6_SAQ_4",
        title: "SAQ 4: Behavioral Chain Analysis in Neurodevelopmental Formulation",
        prompt: "Describe the purpose and core components of a Behavioral Chain Analysis when formulating challenging or dysregulated behaviors in neurodevelopmental presentations. (4 marks)",
        criteria: [
          "Purpose: To systematically deconstruct a specific dysregulated incident into an objective timeline to identify vulnerability factors, prompting events, cognitive/emotional/physiological links, and maintaining consequences without assigning blame.",
          "Core Components: (1) Vulnerability Factors (e.g., sensory overload, poor sleep, hunger, executive fatigue); (2) Prompting Event (immediate trigger, e.g., unexpected change in schedule); (3) Links in the Chain (physiological sensations, automatic thoughts, emotional escalation); (4) Problem Behavior (the outburst, meltdown, or avoidance); (5) Consequences (immediate relief, environmental reprimand, maintaining feedback loops).",
          "Intervention Utility: Allows clinician and client to insert specific 'skills breaks' (sensory breaks, My Calm Plan, communication replacement) at specific links before the crisis occurs."
        ],
        modelAnswer: "Purpose: A Behavioral Chain Analysis is a functional behavioral assessment tool used to objectively map the precise step-by-step sequence leading up to and following a challenging behavior or emotional crisis. In neurodevelopmental populations, it shifts focus away from moral blame toward understanding environmental, sensory, and executive triggers.\n\nCore Components:\n1. Vulnerability Factors: Baseline physiological and contextual factors that lowered resilience (e.g., poor sleep, fluorescent light glare, medication wear-off, hunger).\n2. Prompting Event (Trigger): The specific external or internal event that catalyzed the chain (e.g., an unexpected schedule change or difficult verbal instruction).\n3. Links in the Chain: The intermediate cascading sequence of body sensations (tight chest, sensory overload), cognitions ('I can't cope'), and surging affect (panic, rage).\n4. Problem Behavior: The observable outburst, withdrawal, task refusal, or meltdown.\n5. Consequences: Immediate outcomes (task was removed, sensory relief) and long-term fallout (shame, disciplinary action), revealing the maintaining reinforcement loops.\n\nClinical Utility: By mapping the chain, the clinician and individual can identify target links where proactive accommodations (sensory diets, My Calm Plan, visual schedules) can be inserted to prevent behavioral escalation."
      },
      {
        id: "M6_SAQ_5",
        title: "Exam Practice SAQ 1 (5 Marks): Restlessness, Inattention, and Impulsivity in Adulthood (Adult ADHD vs BPD vs Bipolar)",
        prompt: "“You are assessing a 28-year-old adult presenting with lifelong disorganization, difficulties completing work tasks, impulsive decision-making, and emotional lability. Chronic inattention and impulsivity are key features of the client’s presentation. What neurodevelopmental or psychiatric disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Attention-Deficit/Hyperactivity Disorder (ADHD, Adult presentation) and Borderline Personality Disorder (BPD) or Bipolar Disorder (Type II).",
          "1 mark for developmental onset and course: ADHD requires onset of multiple symptoms prior to age 12 with pervasive trait-like continuity across settings (school, home, work); BPD emerges in adolescence/young adulthood, and Bipolar features episodic cyclical mood episodes.",
          "1 mark for nature and triggers of emotional dysregulation: ADHD emotional shifts are transient, short-lived responses to cognitive frustration or perceived criticism (Rejection Sensitive Dysphoria); BPD emotional dysregulation is intensely relational, triggered by fears of abandonment and accompanied by chronic emptiness.",
          "1 mark for impulsivity drivers & behavioral manifestations: ADHD impulsivity stems from executive disinhibition and dopamine/reward-seeking (interrupting, impulse spending); BPD impulsivity often involves self-damaging acts and non-suicidal self-injury (NSSI) to escape emotional pain."
        ],
        modelAnswer: "Part 1: Most Likely Disorders (2 marks)\n1. Attention-Deficit/Hyperactivity Disorder (Adult ADHD) [1 mark]\n2. Borderline Personality Disorder (BPD) OR Bipolar Disorder (Type II) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Developmental Onset & Temporal Trajectory: ADHD requires onset of multiple inattentive or hyperactive-impulsive symptoms prior to age 12 with chronic, trait-like persistence across multiple settings (school, family, work) confirmed via collateral history (e.g., childhood school reports, DIVA-5 interview). In contrast, BPD symptoms typically emerge in adolescence or early adulthood, while Bipolar Disorder displays episodic mood fluctuations (hypomania alternating with depression) with periods of euthymic baseline functioning.\n2. Affective Dysregulation Triggers & Dynamics: In adult ADHD, emotional lability manifests as rapid, short-lived irritability, frustration, or 'rejection-sensitive dysphoria' triggered by cognitive overload or perceived failure, typically resolving within hours. In BPD, emotional storms are intensely interpersonal, ignited by real or perceived abandonment, lasting days, and accompanied by marked identity disturbance and chronic feelings of emptiness.\n3. Drivers of Impulsive Behavior: ADHD impulsivity is driven by frontostriatal response-inhibition deficits and under-arousal (e.g., blurting out thoughts, interrupting conversations, impulsive shopping, reckless driving). In BPD, impulsivity is driven by a desperate attempt to regulate unbearable emotional pain, characteristically manifesting in self-damaging behaviors (non-suicidal self-injury such as cutting, substance abuse, risky sexual behavior) and suicidal threats."
      },
      {
        id: "M6_SAQ_6",
        title: "Exam Practice SAQ 2 (5 Marks): Social Communication Deficits vs Social Anxiety (ASD Level 1 vs Social Anxiety Disorder)",
        prompt: "“You are assessing a 22-year-old university student who experiences extreme distress in social settings, avoids eye contact, has few friends, and feels like an outsider. Social isolation and social communication difficulties are key features of the presentation. What neurodevelopmental and anxiety disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Autism Spectrum Disorder (ASD, Level 1) and Social Anxiety Disorder (SAD).",
          "1 mark for social-emotional reciprocity and Theory of Mind: ASD features intrinsic differences in perspective taking, pragmatic language, and understanding social cues; SAD individuals have intact social intuition and Theory of Mind but are inhibited by intense fear of negative evaluation.",
          "1 mark for presence of Restricted, Repetitive Behaviors and Sensory Sensitivities (Criterion B): ASD requires repetitive behaviors, circumscribed special interests, insistence on sameness, or sensory hyper/hypo-reactivity; SAD does not feature sensory sensitivities or repetitive motor behaviors.",
          "1 mark for developmental history and camouflaging: ASD features early childhood differences (even if masked until adolescence/adulthood when social complexity outstrips compensation); SAD typically emerges in early adolescence without early sensory/developmental abnormalities."
        ],
        modelAnswer: "Part 1: Most Likely Disorders (2 marks)\n1. Autism Spectrum Disorder (ASD, Level 1) [1 mark]\n2. Social Anxiety Disorder (SAD) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Socio-Emotional Reciprocity & Theory of Mind: An individual with Social Anxiety Disorder possesses fully intact social intuition, nonverbal decoding skills, and perspective-taking (Theory of Mind); their social withdrawal is driven by catastrophic cognitions of negative evaluation, embarrassment, or scrutiny by others. An individual with ASD has an intrinsic neurodevelopmental difference in social communication (Criterion A), including atypical social reciprocity, difficulties reading nuanced nonverbal cues/subtext, and idiosyncratic conversational pacing.\n2. Presence of DSM-5 Criterion B (RRBIs & Sensory Sensitivities): The presence of restricted, repetitive patterns of behavior, interests, or activities is mandatory for an ASD diagnosis and absent in isolated SAD. Assessment must investigate intense, circumscribed special interests (hyperfocus), rigid insistence on routines/sameness, motor stimming, and sensory differences (e.g., extreme distress at fluorescent lighting, sound sensitivity, tactile clothing aversions).\n3. Developmental Onset & Camouflaging Burden: ASD is a lifelong neurodevelopmental condition with roots present in the early developmental period (e.g., early sensory preferences, parallel play, difficulty with unwritten peer rules), though intelligent individuals may 'camouflage' or mask symptoms until adulthood. SAD typically has an onset in early-to-mid adolescence, often following a conditioning event (e.g., bullying or public embarrassment), without early childhood sensory or communication differences."
      },
      {
        id: "M6_SAQ_7",
        title: "Exam Practice SAQ 3 (5 Marks): Multidomain Cognitive & Behavioral Impairment (FASD vs ADHD)",
        prompt: "“You are assessing a 12-year-old adolescent exhibiting severe learning difficulties, memory deficits, emotional outbursts, and motor coordination problems. Severe attentional, cognitive, and adaptive regulation deficits are key features of the presentation. What neurodevelopmental disorders would be most likely (2 marks) and what key features would you use to assess them in line with the 2024/2025 Australian National Guidelines (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Fetal Alcohol Spectrum Disorder (FASD) and Attention-Deficit/Hyperactivity Disorder (Combined presentation).",
          "1 mark for Prenatal Alcohol Exposure (PAE) confirmation: FASD requires confirmed maternal alcohol exposure during pregnancy (or all 3 sentinel facial features present); ADHD does not require PAE.",
          "1 mark for multidomain neurodevelopmental impairment (Australian Guidelines criteria): FASD diagnosis requires severe impairment (score <= 2 SD below mean) across at least 3 of 10 specified neurodevelopmental domains; ADHD primarily impacts attention, impulsivity, and executive functioning.",
          "1 mark for differential intervention responsiveness: ADHD typically exhibits robust symptom reduction from first-line psychostimulant monotherapy; FASD requires comprehensive multidisciplinary environmental adaptations, slow-paced visual scaffolding, and life-long disability accommodations."
        ],
        modelAnswer: "Part 1: Most Likely Neurodevelopmental Disorders (2 marks)\n1. Fetal Alcohol Spectrum Disorder (FASD) [1 mark]\n2. Attention-Deficit/Hyperactivity Disorder (Combined presentation) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Confirmation of Prenatal Alcohol Exposure (PAE): In line with the Australian National Guidelines, an FASD diagnosis fundamentally requires verified documentation of maternal alcohol consumption during pregnancy (unless all 3 sentinel facial features—smooth philtrum, thin upper lip, and short palpebral fissures—are physically present). In ADHD, prenatal alcohol exposure is not an etiological requirement.\n2. Breadth of Neurodevelopmental Domain Impairments: Australian guidelines require FASD to demonstrate severe impairment (psychometric scores >= 2 standard deviations below age norms) in at least 3 out of 10 distinct neurodevelopmental domains (brain structure/neurology, motor skills, cognition, language, academic achievement, memory, attention, executive function, affect regulation, or adaptive behavior). While ADHD involves severe attention and executive dysfunction, it does not typically produce pervasive global deficits across motor coordination, memory, and structural neurological domains.\n3. Clinical Response to Evidence-Based Intervention: Children with ADHD typically show significant, rapid behavioral improvement in response to first-line central nervous system psychostimulants (e.g., methylphenidate). In FASD, stimulant response is frequently blunted or variable, and the primary evidence-based approach requires multidisciplinary environmental adaptations (reducing sensory stimulation, utilizing concrete visual cues, reframing behavioral failure as a brain-based disability rather than willful defiance)."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Essay Prompt: Adult Neurodevelopmental Formulation & Differential Diagnosis",
      prompt: "Critically evaluate the diagnostic and clinical challenges of assessing neurodevelopmental disorders in adulthood. In your essay, compare the clinical presentations and differential diagnosis of Adult ADHD and Autism Spectrum Disorder (ASD), examine the role of camouflaging and diagnostic overshadowing, and propose an evidence-based, neurodiversity-affirming multimodal intervention plan for an adult presenting with co-occurring executive dysfunction and sensory distress.",
      timeAllowedMinutes: 45,
      suggestedWordCount: "1000 - 1400 words",
      rubricPillars: [
        {
          name: "Pillar 1: Neurodevelopmental Diagnostic Architecture & Adult Trajectory",
          weight: "25%",
          description: "Comprehensive grasp of DSM-5-TR criteria for Adult ADHD and ASD; understanding adult developmental continuity; differentiating adult executive dysfunction from childhood hyperactive presentations."
        },
        {
          name: "Pillar 2: Differential Diagnosis & Camouflaging Dynamics",
          weight: "25%",
          description: "Rigorous contrast between ADHD and ASD (social reciprocity vs inattention, hyperfocus vs special interests, routines vs novelty); in-depth analysis of camouflaging/masking, female phenotypes, and secondary burnout."
        },
        {
          name: "Pillar 3: Diagnostic Overshadowing & Comorbidity Matrix",
          weight: "25%",
          description: "Critical analysis of diagnostic overshadowing (mislabeling ADHD/ASD as BPD, SAD, or Depression); formulating co-occurring 'AuDHD'; addressing teratogenic exposure (FASD) and intellectual disability."
        },
        {
          name: "Pillar 4: Evidence-Based, Neurodiversity-Affirming Management",
          weight: "25%",
          description: "Formulation-driven multimodal care: psychostimulants, executive function CBT (planners, task breakdown), sensory accommodations, Double Empathy communication adaptations, and Schema Therapy for internalized shame."
        }
      ],
      modelOutline: [
        "1. Introduction: Definition of neurodevelopmental disorders as lifelong brain differences; challenges of adult diagnosis (lack of childhood informants, compensation, burnout); thesis on necessity of multidimensional formulation.",
        "2. Diagnostic Core of Adult ADHD vs. ASD: Systematic comparison of DSM-5-TR criteria; ADHD frontostriatal inattention/hyperactivity vs ASD socio-communicative differences and sensory/behavioral rigidity; the Double Empathy problem.",
        "3. The Masking / Camouflaging Phenomenon: Mechanisms (compensation, assimilation, suppression); gender disparities and high-masking females; clinical costs (burnout, misdiagnosis, depression, suicidality).",
        "4. Differential Diagnosis & Diagnostic Overshadowing: Contrasting ADHD with BPD (affective triggers, NSSI, identity) and ASD with Social Anxiety Disorder; risk of diagnostic overshadowing where distress is dismissed.",
        "5. Multimodal Neurodiversity-Affirming Intervention Plan: Integrating first-line medical therapies (stimulants for ADHD), CBT for executive dysfunction, sensory and workplace accommodations, adapted Schema Therapy for 'defectiveness' schemas, and person-centered goals."
      ]
    }
  }
};
