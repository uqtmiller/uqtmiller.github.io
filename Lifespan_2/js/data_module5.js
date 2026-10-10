// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 5: Sleep Disorders
const MODULE_5_DATA = {
  moduleId: 5,
  title: "Module 5: Pediatric Sleep Disorders",
  subtitle: "Sleep Architecture, Behavioral Insomnias of Childhood, Parasomnias, and Evidence-Based Interventions",
  coordinator: "Prof. Caroline Donovan (Clinical Psychologist & Professor of Psychology)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "Pediatric Sleep Architecture & Developmental Transitions",
      author: "Prof. Caroline Donovan",
      summary: "Sleep cycles evolve dramatically across childhood. Infants and children cycle through sleep every 50–60 minutes (vs. 90 mins in adults). Normal brief nighttime arousals occur 4–6 times per night; children only develop insomnia if they lack the self-soothing skills to return to sleep autonomously without parental intervention."
    },
    {
      title: "BEARS Sleep Screening & Assessment Hierarchy",
      author: "Owens & Dalzell / Donovan",
      summary: "Comprehensive assessment evaluates the 5 BEARS domains: B (Bedtime problems), E (Excessive daytime sleepiness), A (Awakenings during the night), R (Regularity and duration of sleep), and S (Snoring / respiratory sounds). Prospective 2-week sleep diaries represent the clinical gold standard for baseline measurement."
    },
    {
      title: "Behavioral Extinction Paradigms & Stimulus Control",
      author: "Mindell & Owens / Donovan",
      summary: "Behavioral interventions target conditioned sleep associations and parental reinforcement traps. Protocols range from unmodified extinction ('cry it out'), gradual extinction ('controlled crying'), and parental presence fading ('camping out') to positive bedtime routines and the Bedtime Pass."
    },
    {
      title: "REM vs. Non-REM Parasomnia Differentiation",
      author: "AASM / Donovan",
      summary: "Parasomnias diverge by sleep stage: Nightmares occur during late-night REM sleep (vivid recall, rapid full awakening, alert, comfort accepted), whereas Sleep Terrors occur during early-night slow-wave N3 Non-REM sleep (autonomic arousal, inconsolable, partial awakening, morning amnesia)."
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "BIC_ONSET",
      code: "ICSD-3 / DSM-5 Insomnia Subtype",
      name: "Behavioral Insomnia of Childhood (BIC) – Sleep-Onset Association Type",
      type: "Pediatric Behavioral Insomnia",
      ageRange: "Infancy and Early Childhood (6 months – 3 years)",
      coreDefinition: "A sleep disturbance occurring when a child develops a conditioned dependency on specific stimulating circumstances, objects, or parental behaviors (e.g., rocking, nursing, parental presence, driving) to initiate sleep or return to sleep following normal nocturnal awakenings.",
      dsmCriteria: [
        "Sleep-onset association requirements: Sleep onset is impaired in the absence of a specific condition, object, or caregiver presence.",
        "Sleep-onset associations are highly demanding or untenable (e.g., requires active parental rocking, holding, feeding, or co-sleeping for 45+ minutes).",
        "Nighttime awakenings are prolonged if the association is absent: When the child experiences normal brief arousals, they are unable to self-soothe without the re-establishment of the conditioned association.",
        "Sleep quality and duration are normal once the required association is provided.",
        "Symptoms cause significant distress or daytime impairment for the child and caregivers."
      ],
      howToDiagnose: [
        "Detailed clinical interview exploring the exact sequence of events from bedtime routine to lights-out.",
        "2-week prospective sleep diary documenting bedtime, time to fall asleep, frequency and duration of nocturnal awakenings, and parental response.",
        "Inquiry into whether the child can fall asleep independently in their own bed without a parent in the room."
      ],
      factorsLookedFor: [
        "Sleep Initiation: Inability to fall asleep alone; crying, distress, or refusal if parent attempts to leave the room.",
        "Nocturnal Arousals: Wakes 3 to 6 times per night demanding the exact same condition (e.g., breastfeeding, bottle, rocking) to resume sleep.",
        "Daytime Affect: Irritability, clinginess, parental exhaustion, and chronic caregiver sleep deprivation."
      ],
      potentialTreatments: [
        "Gradual Extinction / Controlled Crying: Parent leaves the room and checks on the child at predetermined, gradually increasing time intervals (e.g., 2 mins, 5 mins, 10 mins) providing brief (1-minute) reassurance without picking the child up.",
        "Camping Out (Parental Presence Fading): Parent sits on a chair next to the child's bed until asleep, moving the chair progressively closer to the bedroom door over 7–14 nights until exiting the room entirely.",
        "Unmodified Extinction ('Cry It Out'): Parent puts child to bed drowsy but awake, leaves the room, and does not return unless safety/illness is suspected (fastest efficacy, but higher parental stress).",
        "Introduction of Transitional Objects: Soft blanket or safe stuffed animal to bridge autonomy."
      ],
      clinicalPearl: "Every human wakes up 4 to 6 times a night as sleep cycles transition. Adults roll over and fall back asleep because our sleep associations (pillow, bed) haven't changed. If a toddler fell asleep in mother's arms, waking up alone in a dark crib triggers panic because their sleep association is missing."
    },
    {
      id: "BIC_LIMIT",
      code: "ICSD-3 / DSM-5 Insomnia Subtype",
      name: "Behavioral Insomnia of Childhood (BIC) – Limit-Setting Type",
      type: "Pediatric Behavioral Insomnia",
      ageRange: "Preschool and School-Age Children (2 – 6+ years)",
      coreDefinition: "A sleep disturbance characterized by bedtime stalling, verbal protests, refusal to go to bed, or repeated curtain calls resulting from caregiver difficulty or inconsistency in establishing and enforcing firm, predictable bedtime limits.",
      dsmCriteria: [
        "Bedtime resistance: Child actively stalls, negotiates, makes repeated demands ('curtain calls' for water, another story, bathroom, hugs), or refuses to go to bed.",
        "Caregiver difficulty in limit setting: Caregivers demonstrate inconsistent enforcement of bedtime rules, frequently giving in to child demands or permitting prolonged negotiations.",
        "Delayed sleep onset: Sleep onset is significantly delayed (often by 1–2 hours) due to behavioral resistance.",
        "Once sleep is finally initiated, sleep maintenance is generally normal unless limits are also tested during nocturnal awakenings."
      ],
      howToDiagnose: [
        "Caregiver interview mapping evening schedule and parental discipline style around bedtime.",
        "Quantification of 'curtain calls' (number of times child emerges from bedroom or calls out after lights-out).",
        "Assessment of parental consistency: Parents often report exhaustion, frustration, and alternating between angry shouting and permissive surrender."
      ],
      factorsLookedFor: [
        "Bedtime Resistance: Tantrums, endless questions, negotiating bedtime minutes, repeatedly leaving the bedroom.",
        "Parental Inconsistency: One parent is strict while the other yields; child exploits parental division.",
        "Daytime Behavior: May also display oppositional or limit-testing behaviors during daytime routines."
      ],
      potentialTreatments: [
        "Positive Bedtime Routine: Consistent, calming 20–30 minute predictable routine (e.g., Bath, Book, Bed) with clear visual routine charts.",
        "The Bedtime Pass Protocol: Child is given 1 (or 2) tangible cards ('Passes') that can be exchanged for one brief request (drink of water, quick hug). Once the pass is used, it is surrendered for the night, and subsequent curtain calls are ignored.",
        "Parent Management Training: Coaching parents in unified, calm, non-negotiable bedtime boundary enforcement.",
        "Bedtime Fading: Temporarily shifting bedtime later to match the child's natural sleepiness, then gradually moving it earlier by 15 minutes every few nights."
      ],
      clinicalPearl: "The Bedtime Pass is highly effective for limit-setting insomnia because it gives the child a sense of autonomy and control while establishing an absolute, non-negotiable ceiling on curtain calls."
    },
    {
      id: "NIGHTMARE",
      code: "DSM-5 307.47 (F51.5)",
      name: "Nightmare Disorder",
      type: "REM Sleep Parasomnia",
      ageRange: "Preschool through Adulthood (peak onset 3 – 6 years)",
      coreDefinition: "Repeated occurrences of extended, extremely dysphoric, and well-remembered dreams that usually involve threats to survival, security, or physical integrity, occurring during rapid eye movement (REM) sleep in the later half of the night.",
      dsmCriteria: [
        "Repeated occurrences of extended, extremely frightening, well-remembered dreams that usually involve threats to survival or physical integrity.",
        "On awakening from the frightening dream, the individual rapidly becomes fully oriented and alert.",
        "The sleep disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.",
        "The nightmare symptoms are not attributable to substance use or a general medical condition.",
        "Typically occurs during the second half of the sleep period (when REM sleep is longest and most intense)."
      ],
      howToDiagnose: [
        "Clinical interview: Child wakes up terrified, calls out for parent, can vividly describe the monster, danger, or threat.",
        "Timing in night: Almost always occurs in the middle-to-late part of the night or early morning hours.",
        "Arousal state: Child is immediately alert upon awakening, recognizes parents immediately, and welcomes parental soothing.",
        "Daytime recall: Child remembers the frightening dream the next morning."
      ],
      factorsLookedFor: [
        "Timing: Late-night emergence (REM sleep stage).",
        "Arousal: Instant full lucidity and clear orientation.",
        "Recall: Detailed narrative recall of dream content.",
        "Comfort Acceptance: Clings to parent, soothed by hugs, reassurance, and nightlights; difficulty falling back asleep due to fear of the dream returning."
      ],
      potentialTreatments: [
        "Parental Reassurance & Emotional Containment: Comforting the child, validating fear, checking closets/under beds calmly without drama.",
        "Sleep Hygiene & Stress Reduction: Eliminating scary media, evening relaxation routines, nightlight.",
        "Image Rehearsal Therapy (IRT) for older children/adults: Mentally rewriting the nightmare with a positive or empowering ending and rehearsing the new script during the day.",
        "Desensitization & Drawing: Having the child draw the nightmare figure and adding funny or silly features (e.g., giving the monster pink bunny ears)."
      ],
      clinicalPearl: "Nightmares vs. Sleep Terrors test question rule: If the child wakes up completely, recognizes their mother, cries for a hug, and remembers the monster in the morning, it is a NIGHTMARE (REM). If they scream with eyes open, push mother away, and remember nothing, it is a SLEEP TERROR (Non-REM)."
    },
    {
      id: "SLEEP_TERROR",
      code: "DSM-5 307.46 (F51.4)",
      name: "Non-REM Sleep Arousal Disorder – Sleep Terror Type",
      type: "Non-REM Slow-Wave Parasomnia",
      ageRange: "Childhood (peak onset 4 – 12 years; typically outgrown)",
      coreDefinition: "A parasomnia arising from slow-wave deep sleep (Stage N3 Non-REM), characterized by recurrent episodes of abrupt awakening from sleep accompanied by a panicky scream, intense autonomic arousal, motor agitation, and relative unresponsiveness to comforting efforts.",
      dsmCriteria: [
        "Recurrent episodes of incomplete awakening from sleep, usually occurring during the first third of the major sleep episode (slow-wave Non-REM sleep).",
        "Sleep terror presentation: Abrupt terror awakening, typically beginning with a panicky scream.",
        "Intense autonomic arousal: Tachycardia, rapid breathing, dilated pupils, diaphoresis (profuse sweating), and piloerection.",
        "Relative unresponsiveness to efforts of others to comfort the individual during the episode.",
        "No or little dream imagery recalled (only a single static terrifying image, if any).",
        "Amnesia for the episode: Complete amnesia for the event the following morning."
      ],
      howToDiagnose: [
        "Timing: Occurs 1 to 3 hours after falling asleep during slow-wave Stage 3/4 Non-REM sleep.",
        "Clinical observation: Child sits bolt upright in bed, eyes wide open and staring, screams inconsolably, does not register parents in the room.",
        "Reactions to physical contact: Attempting to hold or restrain the child often causes them to thrash, kick, or scream louder.",
        "Morning verification: Next morning, child has zero recollection of the event, while parents are terrified and exhausted."
      ],
      factorsLookedFor: [
        "State of Consciousness: Partial, incomplete arousal; child is functionally asleep despite open eyes.",
        "Autonomic Signs: Profuse sweating, racing heart, flushing, hyperventilation.",
        "Unresponsiveness: Words do not reach the child; parental comforting fails.",
        "Duration: Episodes typically last 5 to 20 minutes before child abruptly falls back into deep, peaceful sleep."
      ],
      potentialTreatments: [
        "Parental Psychoeducation & Reassurance: Reassuring parents that sleep terrors are benign, developmental, do not cause psychological trauma to the child, and are usually outgrown.",
        "Do NOT Attempt to Wake the Child: Trying to shake or wake the child prolongs the episode and causes disorientation; parents should gently protect the child from physical injury and wait it out.",
        "Scheduled Awakenings: If terrors occur at a predictable time (e.g., 2 hours after bedtime), waking the child gently 15–30 minutes prior to the usual onset time for 2–4 weeks resets sleep cycles.",
        "Address Sleep Deprivation Triggers: Preventing overtiredness, irregular sleep schedules, or febrile illness, which increase slow-wave sleep depth."
      ],
      clinicalPearl: "Parents are often deeply traumatized by sleep terrors because their child looks terrified and refuses comfort. The most therapeutic intervention is educating parents: 'Your child is sound asleep, feels no pain or distress, and will remember nothing tomorrow. Keep them physically safe and let the episode pass.'"
    },
    {
      id: "OSA",
      code: "DSM-5 327.23 (G47.33)",
      name: "Pediatric Obstructive Sleep Apnea (OSA)",
      type: "Medical Respiratory Sleep Disorder",
      ageRange: "Childhood across the lifespan (peak 2 – 8 years; adenotonsillar hypertrophy)",
      coreDefinition: "A breathing-related sleep disorder characterized by repeated episodes of partial or complete upper airway obstruction during sleep, resulting in oxygen desaturation, disrupted sleep architecture, and daytime behavioral or neurocognitive impairments.",
      dsmCriteria: [
        "Signs of upper airway resistance during sleep: Habitual loud snoring, labored breathing, witnessed apneas, gasping, snorting, or mouth breathing.",
        "Nocturnal symptoms: Restless sleep, unusual sleeping positions (neck hyperextension), nocturnal enuresis (bedwetting), profuse night sweating.",
        "Daytime sequelae: Excessive daytime sleepiness, morning headaches, inattention, hyperactivity, impulsivity, or irritability mimicking ADHD.",
        "Polysomnography (PSG) confirmation: Obstructive apnea-hypopnea index (AHI) >= 1 event per hour."
      ],
      howToDiagnose: [
        "Clinical screening using the 'S' in the BEARS assessment (Snoring, choking, gasping).",
        "Physical examination checking for enlarged palatine tonsils and adenoid tissue, high-arched palate, and mouth breathing facies.",
        "Overnight in-lab Polysomnography (PSG) to quantify apnea-hypopnea index and nocturnal oxygen desaturation."
      ],
      factorsLookedFor: [
        "Auditory signs: Snoring loudly on >= 3 nights per week, pauses in breathing followed by a loud snort.",
        "Postural signs: Sleeps with head tipped back over the pillow to open airway.",
        "Daytime Behavioral Impairment: Restlessness, poor school concentration, emotional lability (often misdiagnosed as ADHD)."
      ],
      potentialTreatments: [
        "Medical / Surgical Referral: ENT surgical evaluation for Adenotonsillectomy (first-line curative treatment in children with adenotonsillar hypertrophy).",
        "Continuous Positive Airway Pressure (CPAP): For children with persistent OSA post-surgery or anatomical craniofacial anomalies.",
        "Allergy & Nasal Management: Nasal corticosteroids or saline irrigation for allergic rhinitis.",
        "Differential Warning: Do NOT treat pediatric OSA with behavioral extinction; behavioral sleep interventions cannot resolve physical airway obstruction."
      ],
      clinicalPearl: "A child referred for ADHD assessment who snores loudly and sleeps with an extended neck should be evaluated for OSA first. Resolving the airway obstruction frequently eliminates daytime hyperactivity and inattention entirely."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "ONSET_LIMIT": {
      title: "Sleep-Onset Association Insomnia vs. Limit-Setting Insomnia",
      commonality: "Both are common Behavioral Insomnias of Childhood (BIC) causing delayed sleep onset, disrupted bedtime routines, and significant parental stress.",
      distinguishingMarkers: [
        {
          feature: "Primary Presenting Problem",
          conditionA: "Sleep-Onset: Inability to fall asleep without a specific object, person, or physical condition (nursing, rocking, holding).",
          conditionB: "Limit-Setting: Bedtime resistance, stalling, tantrums, repeated requests for drinks/hugs ('curtain calls'), refusal to stay in bed."
        },
        {
          feature: "Typical Age Group",
          conditionA: "Sleep-Onset: Typically infants and toddlers (6 months to 3 years).",
          conditionB: "Limit-Setting: Typically preschool and school-age children (2 to 6+ years)."
        },
        {
          feature: "Night Waking Profile",
          conditionA: "Sleep-Onset: Multiple prolonged awakenings per night requiring the parent to recreate the exact sleep-onset association.",
          conditionB: "Limit-Setting: Primarily a bedtime initiation problem; night awakenings are few unless bedtime stalling repeats in the night."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Rule in Sleep-Onset: Child requires active parent presence (rocking/nursing) to fall asleep and cannot self-soothe when waking in the night.",
        ruleInAvoidant: "Rule in Limit-Setting: Child stalls, negotiates, makes repeated demands to leave bed, and parent struggles to enforce firm bedtime boundaries.",
        pitfallToAvoid: "Mixed BIC (Combined Type) is very common in toddlers where the child both stalls and requires rocking."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for Sleep-Onset Association",
        treatmentA_Steps: "Gradual extinction (controlled crying) or camping out (presence fading) to teach independent self-soothing skills at bedtime and night wakings.",
        treatmentB_Name: "Intervention for Limit-Setting",
        treatmentB_Steps: "Establish a positive bedtime routine, implement the Bedtime Pass protocol, enforce consistent non-negotiable bedtime rules, and ignore curtain calls."
      }
    },

    "NIGHTMARE_TERROR": {
      title: "Nightmare Disorder (REM) vs. Sleep Terror Disorder (Non-REM)",
      commonality: "Both are pediatric parasomnias characterized by nocturnal awakenings accompanied by intense distress and fear.",
      distinguishingMarkers: [
        {
          feature: "Sleep Stage & Night Timing",
          conditionA: "Nightmares: Occur during REM sleep, predominantly in the second half of the night (early morning).",
          conditionB: "Sleep Terrors: Occur during slow-wave N3 Non-REM sleep, typically 1 to 3 hours after sleep onset (first third of the night)."
        },
        {
          feature: "State of Consciousness & Arousal",
          conditionA: "Nightmares: Full, rapid awakening; immediately alert and oriented; recognizes environment and parents.",
          conditionB: "Sleep Terrors: Partial arousal / asleep; eyes open with blank stare; disoriented; does not recognize parents."
        },
        {
          feature: "Autonomic Signs & Comfort Response",
          conditionA: "Nightmares: Mild autonomic arousal; actively seeks and is comforted by parental holding and soothing.",
          conditionB: "Sleep Terrors: Extreme autonomic storm (tachycardia, profuse sweating, screaming); inconsolable; thrashing if touched."
        },
        {
          feature: "Morning Dream Recall",
          conditionA: "Nightmares: Vivid, detailed recall of the scary dream content the following morning.",
          conditionB: "Sleep Terrors: Complete amnesia for the entire episode the following morning."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Rule in Nightmares: Late night, child fully awake, remembers scary dream, soothed by parent's hug.",
        ruleInAvoidant: "Rule in Sleep Terrors: Early night, child screaming with glassy eyes, inconsolable, pushes parents away, zero recall next morning.",
        pitfallToAvoid: "Do NOT attempt to shake or forcibly awaken a child having a sleep terror; this increases confusion and prolongs the episode."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for Nightmares",
        treatmentA_Steps: "Parental comfort, nightlights, stress reduction, and Image Rehearsal Therapy (rewriting dream endings).",
        treatmentB_Name: "Intervention for Sleep Terrors",
        treatmentB_Steps: "Parental education (terrors are benign), protecting physical safety, scheduled awakenings, and ensuring adequate sleep to reduce deep slow-wave rebound."
      }
    }
  },

  // 6 Lifespan Clinical Scenarios with 2-Step Decision Flow (Diagnose -> Treat)
  scenarios: [
    {
      id: "scenario_01",
      title: "Case Vignette 1: 14-Month-Old Noah Who Cannot Sleep Alone",
      ageGroup: "Infant / Toddler (14 months)",
      vignette: "Noah is a 14-month-old toddler whose parents are on the verge of breakdown. Every night, Noah must be rocked vigorously in his mother's arms while breastfeeding for 45 minutes until he is in a deep sleep. His mother then tiptoes to transfer him into his crib. Between 11:00 PM and 5:00 AM, Noah wakes up 4 to 5 times. Each time he awakens in the crib, he stands up, grips the bars, and screams hysterically until his mother picks him up, nurses him, and rocks him back to sleep. If his father attempts to comfort him without nursing or rocking, Noah screams uncontrollably for over an hour. Noah is healthy, developing normally, and naps only in a moving stroller.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis for Noah's sleep problem?",
        hint: "Notice that Noah requires specific parental behaviors (rocking and nursing) to initiate sleep, and cannot return to sleep during normal nocturnal arousals without them.",
        options: [
          {
            id: "opt_bic_onset",
            text: "Behavioral Insomnia of Childhood – Sleep-Onset Association Type",
            correct: true,
            rationale: "Correct! Noah demonstrates classic Sleep-Onset Association Insomnia: he has learned a conditioned dependence on rocking and nursing to fall asleep, and when he experiences normal nocturnal sleep cycle arousals, he cannot self-soothe without the re-establishment of these associations."
          },
          {
            id: "opt_bic_limit",
            text: "Behavioral Insomnia of Childhood – Limit-Setting Type",
            correct: false,
            rationale: "Incorrect. Limit-setting insomnia typically occurs in older children (preschool/school age) who stall, make verbal demands, and refuse to stay in bed, whereas Noah is an infant with a sleep association dependency."
          },
          {
            id: "opt_nightmare",
            text: "Nightmare Disorder",
            correct: false,
            rationale: "Incorrect. Noah is not waking up from vivid REM dreams; he is waking repeatedly due to the absence of his conditioned sleep associations."
          },
          {
            id: "opt_osa",
            text: "Obstructive Sleep Apnea",
            correct: false,
            rationale: "Incorrect. There is no mention of snoring, gasping, or respiratory distress."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which evidence-based behavioral protocol should be recommended to Noah's parents?",
        hint: "Consider behavioral extinction methods (such as gradual extinction or camping out) that teach independent self-soothing without abrupt maternal abandonment.",
        options: [
          {
            id: "tx_gradual_extinction",
            text: "Implement Gradual Extinction ('Controlled Crying') or Camping Out (presence fading), putting Noah into his crib drowsy but awake so he learns autonomous self-soothing.",
            correct: true,
            rationale: "Correct! The evidence-based treatment for sleep-onset association insomnia is putting the child down drowsy but awake, allowing them to learn autonomous self-soothing using gradual extinction (checking at increasing intervals) or camping out (gradual chair fading)."
          },
          {
            id: "tx_co_sleeping_indefinite",
            text: "Bring Noah into the parental bed permanently and nurse on demand throughout the night.",
            correct: false,
            rationale: "Incorrect. While co-sleeping is a personal cultural choice, if parents are experiencing breakdown and seek treatment, continuing the association reinforces the maintaining mechanism."
          },
          {
            id: "tx_sedatives",
            text: "Prescribe pediatric antihistamines or sedatives nightly.",
            correct: false,
            rationale: "Incorrect. Sedative medication is not indicated for pediatric behavioral insomnia and does not teach self-soothing skills."
          },
          {
            id: "tx_bedtime_pass",
            text: "Provide Noah with a Bedtime Pass card to hand to his mother.",
            correct: false,
            rationale: "Incorrect. A 14-month-old toddler lacks the cognitive and verbal maturity to understand the Bedtime Pass protocol, which is designed for children aged 3+."
          }
        ]
      }
    },

    {
      id: "scenario_02",
      title: "Case Vignette 2: 4-Year-Old Chloe and the Endless Bedtime Stalling",
      ageGroup: "Preschooler (4 years)",
      vignette: "Chloe (4) turns bedtime into a 2-hour battle every evening. When her parents announce bedtime at 7:30 PM, Chloe runs away, hides under furniture, and screams. Once in bed, she repeatedly calls out: 'I need water!', 'I need to pee!', 'There's a crumb on my sheet!', 'One more hug!'. If her parents refuse, Chloe throws massive tantrums, slamming her door and crying until her exhausted father gives in and reads three more stories, often staying in her room until 10:00 PM. Chloe's mother admits they have no consistent bedtime routine and constantly argue about how strict to be.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis for Chloe?",
        hint: "Notice the prominent bedtime resistance, verbal stalling, repeated curtain calls, and parental difficulty in enforcing consistent bedtime limits.",
        options: [
          {
            id: "opt_bic_limit",
            text: "Behavioral Insomnia of Childhood – Limit-Setting Type",
            correct: true,
            rationale: "Correct! Chloe exhibits definitive Limit-Setting Insomnia: active bedtime resistance, stalling, repeated 'curtain calls', and inconsistent parental boundary enforcement delaying sleep onset by hours."
          },
          {
            id: "opt_sleep_terror",
            text: "Sleep Terror Disorder",
            correct: false,
            rationale: "Incorrect. Chloe is awake and actively negotiating during bedtime; she is not waking from slow-wave sleep in a panic."
          },
          {
            id: "opt_rad",
            text: "Reactive Attachment Disorder",
            correct: false,
            rationale: "Incorrect. Chloe shows strong attachment and verbal engagement with parents; testing limits is a behavioral sleep difficulty, not attachment failure."
          },
          {
            id: "opt_adhd_only",
            text: "ADHD only",
            correct: false,
            rationale: "Incorrect. While behavioral stalling can occur in ADHD, the primary presentation here is behavioral limit-setting insomnia."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which clinical intervention package is most effective for Chloe?",
        hint: "Combine a predictable visual bedtime routine with an evidence-based behavioral tool like the Bedtime Pass.",
        options: [
          {
            id: "tx_bedtime_pass_pkg",
            text: "Establish a consistent 20-30 minute positive bedtime routine (visual schedule) combined with the Bedtime Pass protocol and unified, calm parental limit enforcement.",
            correct: true,
            rationale: "Correct! The evidence-based intervention for limit-setting insomnia combines a predictable positive bedtime routine with the Bedtime Pass (giving the child 1–2 cards for allowable requests) and strict, non-negotiable extinction of further curtain calls."
          },
          {
            id: "tx_lock_door",
            text: "Locking Chloe's bedroom door from the outside until morning.",
            correct: false,
            rationale: "Incorrect. Locking a child in their room is punitive, unsafe, and induces severe panic."
          },
          {
            id: "tx_unlimited_negotiation",
            text: "Giving in to all requests immediately to prevent tantrums.",
            correct: false,
            rationale: "Incorrect. Surrendering reinforces the intermittent schedule of curtain calls, worsening limit-setting resistance."
          },
          {
            id: "tx_sleep_medication",
            text: "Initiating high-dose melatonin and Clonidine.",
            correct: false,
            rationale: "Incorrect. Pharmacotherapy does not solve parental boundary inconsistency or behavioral curtain calls."
          }
        ]
      }
    },

    {
      id: "scenario_03",
      title: "Case Vignette 3: 5-Year-Old Liam's Midnight Screaming Episodes",
      ageGroup: "Child (5 years)",
      vignette: "Liam (5) has terrified his parents with episodes that occur around 10:30 PM (roughly 90 minutes after falling asleep). His parents hear a blood-curdling scream and rush into his room to find Liam sitting upright in bed, eyes wide open, breathing heavily, drenched in sweat, and screaming continuously. When his mother attempts to hug and rock him, Liam violently arches away, thrashes his arms, and screams louder as if looking right through her. After 12 minutes of intense autonomic agitation, Liam abruptly lies down, pulls his blanket up, and falls into a peaceful snore. The next morning at breakfast, Liam happily eats cereal and has zero memory of the episode.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the diagnosis indicated by Liam's episodes?",
        hint: "Notice the timing (first third of the night), open glassy eyes, intense autonomic sweating/screaming, inconsolability, and complete morning amnesia.",
        options: [
          {
            id: "opt_sleep_terror_nrem",
            text: "Non-REM Sleep Arousal Disorder – Sleep Terror Type",
            correct: true,
            rationale: "Correct! Liam demonstrates classic Sleep Terrors: emergence during early-night slow-wave Non-REM sleep (90 mins post-sleep onset), panicky scream, intense autonomic arousal (sweating, rapid breathing), unresponsiveness to comforting, and complete morning amnesia."
          },
          {
            id: "opt_nightmare_disorder",
            text: "Nightmare Disorder",
            correct: false,
            rationale: "Incorrect. Nightmares occur during late-night REM sleep, the child wakes up fully, recognizes parents, welcomes comfort, and vividly remembers the scary dream."
          },
          {
            id: "opt_nocturnal_panic",
            text: "Panic Disorder with Nocturnal Attacks",
            correct: false,
            rationale: "Incorrect. Panic attacks involve full awakenings with vivid catastrophic cognitions, not partial slow-wave sleep arousal with morning amnesia."
          },
          {
            id: "opt_bic_onset",
            text: "Behavioral Insomnia of Childhood – Sleep-Onset Type",
            correct: false,
            rationale: "Incorrect. Liam does not have trouble falling asleep at bedtime; he is experiencing an NREM parasomnia."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — How should the clinician advise and intervene with Liam's parents?",
        hint: "Reassure parents about the benign nature of terrors, advise against shaking or waking during an episode, and consider scheduled awakenings if frequent.",
        options: [
          {
            id: "tx_terror_psychoed",
            text: "Reassure parents that sleep terrors are benign developmental events; instruct them NOT to attempt to wake or restrain Liam during episodes (keep him safe), and implement Scheduled Awakenings if episodes persist.",
            correct: true,
            rationale: "Correct! Gold-standard management involves reassuring parents that the child is asleep and not distressed, advising them not to shake/wake the child (which prolongs confusion), maintaining physical safety, and using Scheduled Awakenings (waking 15–30 mins before usual onset) if episodes are frequent."
          },
          {
            id: "tx_shake_wake_ice",
            text: "Splash cold water on Liam's face to snap him out of the terror immediately.",
            correct: false,
            rationale: "Incorrect. Forcibly waking a child from slow-wave sleep causes intense disorientation, panic, and behavioral prolongation."
          },
          {
            id: "tx_image_rehearsal",
            text: "Administer Image Rehearsal Therapy by having Liam draw his nightmare monsters.",
            correct: false,
            rationale: "Incorrect. Liam has complete amnesia for the event and recalls no dream imagery; Image Rehearsal Therapy is only for REM nightmares."
          },
          {
            id: "tx_antipsychotics",
            text: "Prescribe typical neuroleptics for night hallucinations.",
            correct: false,
            rationale: "Incorrect. Inappropriate, dangerous, and unindicated."
          }
        ]
      }
    },

    {
      id: "scenario_04",
      title: "Case Vignette 4: 6-Year-Old Lucas with Loud Snoring and Daytime Inattention",
      ageGroup: "Child (6 years)",
      vignette: "Lucas (6) is referred by his primary school for an ADHD assessment due to hyperactivity, poor concentration, and aggressive irritability in class. During the clinical intake, the psychologist inquires about sleep. Lucas's father reports that Lucas snores loudly almost every night, often gasping or snorting in his sleep, and frequently sleeps with his neck tilted far back over his pillow. He tosses and turns all night, sweats heavily, and wakes up irritable with morning dry mouth. Physical examination reveals massive 4+ enlarged tonsils almost touching at the midline.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary underlying condition responsible for Lucas's symptoms?",
        hint: "Notice the habitual loud snoring, witnessed gasping/snorting, neck hyperextension, enlarged tonsils, and daytime ADHD-like behaviors.",
        options: [
          {
            id: "opt_pediatric_osa",
            text: "Pediatric Obstructive Sleep Apnea (OSA)",
            correct: true,
            rationale: "Correct! Lucas displays classic signs of pediatric OSA: habitual loud snoring, snorting/gasping, neck hyperextension, restless sleep, enlarged tonsils (adenotonsillar hypertrophy), and daytime executive/behavioral problems that mimic ADHD."
          },
          {
            id: "opt_adhd_pure",
            text: "Primary ADHD (Combined Type) only",
            correct: false,
            rationale: "Incorrect. The prominent respiratory sleep signs (snoring, gasping, tonsillar hypertrophy) indicate that his daytime inattention is secondary to sleep-disordered breathing."
          },
          {
            id: "opt_bic_limit_stalling",
            text: "Behavioral Insomnia of Childhood – Limit-Setting Type",
            correct: false,
            rationale: "Incorrect. Lucas does not have behavioral bedtime stalling; he has a physical airway obstruction during sleep."
          },
          {
            id: "opt_sleep_terror",
            text: "Sleep Terror Disorder",
            correct: false,
            rationale: "Incorrect. Lucas is not having episodic screams from slow-wave sleep; he has chronic nocturnal respiratory obstruction."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the essential clinical management step for Lucas?",
        hint: "Identify the definitive first-line medical/surgical treatment for pediatric OSA caused by enlarged tonsils.",
        options: [
          {
            id: "tx_ent_adenotonsillectomy",
            text: "Urgent referral to an Ear, Nose, and Throat (ENT) specialist for surgical evaluation (Adenotonsillectomy) and overnight polysomnography, holding behavioral ADHD diagnoses until airway resolution.",
            correct: true,
            rationale: "Correct! Adenotonsillectomy is the first-line curative treatment for pediatric OSA with adenotonsillar hypertrophy. Resolving airway obstruction and restoring restorative sleep frequently eliminates daytime inattention and hyperactivity entirely."
          },
          {
            id: "tx_stimulant_adhd",
            text: "Immediately start high-dose stimulant medication for ADHD without addressing the airway.",
            correct: false,
            rationale: "Incorrect. Stimulants do not treat airway obstruction and will exacerbate insomnia and cardiovascular strain."
          },
          {
            id: "tx_cry_it_out",
            text: "Behavioral extinction ('cry it out') to train him to stop snoring.",
            correct: false,
            rationale: "Incorrect. Snoring is a physical airway collapse, not a learned behavior; extinction is harmful and impossible."
          },
          {
            id: "tx_bedtime_pass",
            text: "Give Lucas a Bedtime Pass card.",
            correct: false,
            rationale: "Incorrect. Completely irrelevant to respiratory airway obstruction."
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
        title: "SAQ 1: Contrasting Nightmares (REM) and Sleep Terrors (Non-REM)",
        question: "Critically contrast Nightmare Disorder and Non-REM Sleep Terrors in terms of sleep stage, timing during the night, state of consciousness upon awakening, and morning recall.",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Sleep Stage: Nightmares occur during REM sleep; Sleep Terrors occur during slow-wave Stage N3 Non-REM sleep.",
          "Timing: Nightmares occur predominantly in the second half of the night (early morning); Sleep Terrors occur in the first third of the night (1–3 hours post-sleep onset).",
          "Consciousness & Responsiveness: Nightmares involve rapid full awakening, alert, oriented, seeks/welcomes parental comforting; Sleep Terrors involve incomplete/partial arousal, glassy staring eyes, disoriented, unresponsive or thrashing against parental comforting.",
          "Recall & Autonomic: Nightmares feature vivid recall of frightening dream imagery and mild autonomic arousal; Sleep Terrors feature extreme autonomic storm (sweating, tachycardia) and complete morning amnesia."
        ],
        modelAnswer: "Differentiating Nightmares from Sleep Terrors is a core clinical task in pediatric sleep assessment:\n\n1. Sleep Stage and Night Timing: Nightmares arise from Rapid Eye Movement (REM) sleep, occurring predominantly during the second half of the night when REM periods are longest and most intense. In contrast, Sleep Terrors arise from slow-wave deep sleep (Stage N3 Non-REM), characteristically occurring in the first third of the sleep period (1 to 3 hours after sleep onset).\n\n2. State of Consciousness and Arousal: A child awakening from a nightmare wakes up fully and rapidly; they are lucid, oriented to their room, recognize their parents immediately, and seek comfort. A child experiencing a sleep terror is in a state of partial arousal—they are functionally asleep despite having wide-open, glassy eyes, remain disoriented, and do not perceive their parents.\n\n3. Autonomic Response and Comforting: Nightmares provoke moderate autonomic arousal; the child is readily soothed by parental holding, nightlights, and reassurance. Sleep Terrors provoke an intense autonomic storm (tachycardia, profuse diaphoresis, hyperventilation, dilated pupils); attempts to hold or restrain the child are ineffective and frequently cause violent thrashing.\n\n4. Dream Recall and Amnesia: The next morning, a child who had a nightmare retains vivid, detailed narrative recall of the scary dream content. A child who had a sleep terror has complete amnesia for the episode, waking up refreshed with zero recollection of their distress."
      },
      {
        id: "sa_02",
        title: "SAQ 2: Behavioral Insomnia of Childhood (BIC): Sleep-Onset vs. Limit-Setting",
        question: "Differentiate between the Sleep-Onset Association type and Limit-Setting type of Behavioral Insomnia of Childhood (BIC). Detail the maintaining mechanisms and evidence-based interventions for each.",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Sleep-Onset Association: Conditioned dependency on specific parental presence/behaviors (rocking, nursing) to fall asleep; multiple prolonged night awakenings when association is absent; treated with Gradual Extinction (controlled crying) or Camping Out (fading).",
          "Limit-Setting Type: Bedtime resistance, stalling, tantrums, repeated curtain calls due to inconsistent parental boundaries; treated with positive bedtime routines, the Bedtime Pass protocol, and firm boundary enforcement.",
          "Age differences: Sleep-onset is more common in infants/toddlers (6mo–3yr); limit-setting is more common in preschool/school-age children (2–6+ yr)."
        ],
        modelAnswer: "Behavioral Insomnia of Childhood (BIC) encompasses two distinct clinical subtypes based on the primary maintaining mechanism:\n\n1. Sleep-Onset Association Type:\n- Maintaining Mechanism: The child has developed a conditioned dependency on specific external conditions, objects, or active parental behaviors (e.g., breastfeeding to sleep, rocking, driving, co-sleeping) to initiate sleep. When the child naturally experiences normal brief nocturnal sleep-cycle arousals, they are unable to self-soothe without the parent recreating the exact initial sleep conditions, resulting in frequent, prolonged night wakings.\n- Interventions: Treatment focuses on teaching independent self-soothing skills by putting the child down 'drowsy but awake'. Evidence-based protocols include Gradual Extinction (Controlled Crying: checking at increasing intervals without picking up) and Camping Out (Parental Presence Fading: gradually moving a chair farther from the bed over 1–2 weeks).\n\n2. Limit-Setting Type:\n- Maintaining Mechanism: The child displays bedtime resistance, stalling, verbal negotiations, and repeated 'curtain calls' (demanding water, hugs, another story) because caregivers struggle to establish, communicate, and consistently enforce bedtime boundaries.\n- Interventions: Treatment focuses on establishing a predictable 20–30 minute Positive Bedtime Routine (e.g., bath, story, bed), combined with the Bedtime Pass protocol (providing 1–2 tangible passes for allowable requests, after which further demands are ignored), and coaching parents in unified, non-negotiable limit setting."
      },
      {
        id: "sa_03",
        title: "SAQ 3: The BEARS Sleep Screening Tool and Pediatric Assessment",
        question: "Outline the five domains of the BEARS pediatric sleep screening tool. Explain how this screening guides differential diagnosis between behavioral insomnias and medical sleep disorders such as Obstructive Sleep Apnea (OSA).",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Identifies all 5 BEARS domains: B (Bedtime problems), E (Excessive daytime sleepiness), A (Awakenings during the night), R (Regularity and duration of sleep), S (Snoring / respiratory sounds).",
          "Explains screening utility: Rapid clinical screening across developmental age groups (toddler, school-age, adolescent).",
          "Differential diagnosis: If 'B' and 'A' are elevated without 'S', suspect Behavioral Insomnia; if 'S' (snoring, gasping, labored breathing) is elevated with 'E' (daytime sleepiness/hyperactivity), suspect medical OSA requiring ENT referral rather than behavioral extinction."
        ],
        modelAnswer: "The BEARS pediatric sleep screening tool (Owens & Dalzell) is a structured clinical framework assessing five essential sleep domains:\n\n1. B - Bedtime Problems: Difficulties falling asleep, bedtime resistance, stalling, bedtime anxiety, or prolonged sleep latency.\n2. E - Excessive Daytime Sleepiness: Difficulty waking in the morning, daytime fatigue, falling asleep in school or cars, or paradoxical behavioral hyperactivity.\n3. A - Awakenings During the Night: Frequency, duration, and causes of nocturnal awakenings, and the parental actions required to settle the child.\n4. R - Regularity and Duration of Sleep: Consistency of bedtimes and wake times between weekdays and weekends, and total hours of sleep relative to developmental norms.\n5. S - Snoring: Habitual loud snoring, gasping, choking, mouth breathing, or pauses in breathing.\n\nDifferential Utility: The BEARS tool critically separates behavioral sleep disorders from medical pathology. When screening reveals elevated 'B' (stalling) or 'A' (awakenings) in the absence of 'S', the clinician targets behavioral insomnia (sleep-onset or limit-setting). However, if the 'S' domain is positive (loud snoring >= 3 nights per week, gasping, restless sleep), the child must be investigated for Obstructive Sleep Apnea (OSA) via ENT examination and polysomnography. Behavioral extinction is strictly contraindicated for OSA because sleep disruption is driven by physical airway obstruction rather than conditioned behaviors."
      },
      {
        id: "sa_04",
        title: "SAQ 4: Pediatric Obstructive Sleep Apnea (OSA) and ADHD Misdiagnosis",
        question: "Why is pediatric Obstructive Sleep Apnea (OSA) frequently misdiagnosed as Attention-Deficit/Hyperactivity Disorder (ADHD)? What clinical features distinguish them?",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Mechanism: Sleep fragmentation and intermittent nocturnal hypoxia impair prefrontal cortex executive functions, leading to daytime paradoxical hyperactivity, emotional lability, and inattention.",
          "Clinical Clues for OSA: Habitual loud snoring, witnessed gasping/snorting, mouth breathing, sleeping with hyperextended neck, morning headaches, enlarged tonsils (adenotonsillar hypertrophy).",
          "Treatment Implication: Treating with stimulants misses the physical airway collapse; surgical adenotonsillectomy resolves airway obstruction and often cures the daytime ADHD-like behaviors."
        ],
        modelAnswer: "Pediatric Obstructive Sleep Apnea (OSA) is frequently misdiagnosed as Attention-Deficit/Hyperactivity Disorder (ADHD) due to the unique developmental manifestation of sleep deprivation in children:\n\n1. Neurocognitive Mechanism: Unlike adults, who respond to sleep deprivation with overt lethargy and hypersomnolence, children often respond to sleep fragmentation and intermittent hypoxia with paradoxical hyperactivity, behavioral disinhibition, executive dysfunction, and emotional lability. Disrupted slow-wave sleep impairs prefrontal cortical circuits, directly producing inattention, impulsivity, and restlessness that mimic DSM-5 ADHD criteria.\n\n2. Distinguishing Clinical Features: Clinicians must screen for the nocturnal signs of upper airway resistance:\n- Habitual loud snoring (>= 3 nights/week) and witnessed breathing pauses or gasps.\n- Mouth breathing and dry mouth upon waking.\n- Postural sleep signs: Sleeping in bizarre postures, particularly with the neck tilted backward (hyperextended) to open the pharyngeal airway.\n- Physical examination showing adenotonsillar hypertrophy (enlarged 'kissing' tonsils) or craniofacial abnormalities.\n\n3. Clinical Implication: Initiating psychostimulant medication for presumed ADHD without screening for sleep-disordered breathing exacerbates cardiovascular strain and fails to resolve nocturnal hypoxia. Surgical adenotonsillectomy cures pediatric OSA in the majority of cases and frequently eliminates the daytime inattentive and hyperactive behaviors completely."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Pediatric Sleep Exam Essay Prompt",
      prompt: "“Sleep disturbances in childhood are not merely nocturnal inconveniences; they represent critical developmental vulnerabilities that influence emotional regulation, family functioning, and daytime psychopathology.”\n\nCritically evaluate this statement. In your answer, you must:\n1. Outline pediatric sleep architecture and developmental changes in sleep cycles from infancy through childhood.\n2. Detail the assessment and behavioral intervention pathways for the two primary subtypes of Behavioral Insomnia of Childhood (BIC).\n3. Contrast the pathophysiology, presentation, and management of REM vs. Non-REM parasomnias.\n4. Examine the systemic impact of pediatric sleep problems on caregiver mental health, and discuss how to navigate parental guilt and cultural variations in sleep practices.",
      suggestedWordCount: "1200 - 1500 words (40-45 minutes in exam)",
      scoringRubric: [
        {
          criterion: "Sleep Architecture & Developmental Dynamics (25%)",
          indicators: "Accurately details sleep cycle transitions (50-60 min cycles in infants vs 90 min in adults); explains normal nocturnal micro-arousals (4-6 per night) and development of autonomous self-soothing."
        },
        {
          criterion: "Behavioral Insomnia Assessment & Protocols (25%)",
          indicators: "Distinguishes Sleep-Onset Association from Limit-Setting BIC; details evidence-based interventions: Gradual Extinction, Camping Out, Positive Bedtime Routines, and the Bedtime Pass protocol."
        },
        {
          criterion: "Parasomnias & Medical Differentials (25%)",
          indicators: "Contrasts REM Nightmares (late-night, full alert, vivid recall, comfort accepted) with Non-REM Sleep Terrors (early-night, slow-wave N3, autonomic storm, inconsolable, amnesia); highlights OSA screening."
        },
        {
          criterion: "Family System, Caregiver Burden & Culture (25%)",
          indicators: "Critically reflects on maternal depression, marital strain, parental exhaustion; addresses cultural variations in co-sleeping vs solitary sleeping; navigates parental guilt regarding extinction methods."
        }
      ],
      modelEssayOutline: `
# Model Essay Structure & Key Theoretical Content

## Introduction (~150 words)
- Sleep is the primary physiological activity of the brain in early childhood, essential for synaptic plasticity, memory consolidation, and emotional regulation.
- Pediatric sleep problems affect up to 25–40% of children, producing profound bidirectional impacts on child emotional lability and caregiver mental health.
- Thesis: Effective clinical management requires understanding developmental sleep architecture, applying precise behavioral protocols, and maintaining systemic family attunement.

## 1. Pediatric Sleep Architecture & Developmental Physiology (~350 words)
- **Sleep Cycle Dynamics**:
  - Infant/toddler sleep cycles are short (50–60 minutes) compared to adult cycles (90–100 minutes).
  - Every child experiences 4 to 6 brief nocturnal micro-arousals per night between cycles.
  - The developmental milestone is not sleeping uninterrupted for 10 hours, but mastering autonomous self-soothing to bridge micro-arousals back into sleep.
- **Sleep Need Evolution**:
  - Drops from 14–17 hours in neonates to 11–14 hours in toddlers, and 9–11 hours in school-age children, alongside consolidation of daytime naps into a single nocturnal block.

## 2. Behavioral Insomnias of Childhood (BIC): Assessment & Intervention (~400 words)
- **Sleep-Onset Association Subtype**:
  - Mechanism: Conditioned dependency on untenable caregiver actions (rocking, nursing, holding).
  - Protocol 1: Gradual Extinction ('Controlled Crying') — parent leaves room, checking at increasing intervals (2, 5, 10 mins) with brief non-stimulating reassurance.
  - Protocol 2: Camping Out (Parental Presence Fading) — chair fading method; highly acceptable for anxious parents.
- **Limit-Setting Subtype**:
  - Mechanism: Bedtime resistance, stalling, and curtain calls maintained by intermittent parental surrender.
  - Protocol 1: Positive Bedtime Routine (20–30 mins of predictable calming steps).
  - Protocol 2: The Bedtime Pass Protocol — giving tangible passes for allowable requests, extinguishing subsequent curtain calls.

## 3. Parasomnias & Medical Differentials: REM vs. Non-REM (~350 words)
- **REM Nightmares**:
  - Second half of night, vivid dream imagery, immediate full awakening, comforted by parents, clear morning recall. Treated with comfort, nightlights, Image Rehearsal Therapy.
- **Non-REM Sleep Terrors**:
  - First third of night (slow-wave Stage N3), blood-curdling scream, autonomic storm, partial arousal, inconsolable, complete morning amnesia. Treated with parental reassurance, avoiding shaking/waking, Scheduled Awakenings.
- **Medical Differential: Pediatric OSA**:
  - Loud snoring, gasping, tonsillar hypertrophy; produces daytime ADHD-like hyperactivity; requires surgical adenotonsillectomy rather than behavioral extinction.

## 4. Family Systems, Parental Wellbeing & Cultural Sensitivity (~200 words)
- **Caregiver Burden**: Chronic sleep disruption predicts maternal postpartum depression, marital hostility, and abusive discipline. Resolving child sleep directly resolves maternal depressive symptoms.
- **Navigating Parental Guilt**: Guilt over hearing a child cry during extinction must be reframed: extinction is not abandonment; it is supporting the acquisition of an essential lifelong self-regulation skill.
- **Cultural Perspectives on Sleep**: Western clinical paradigms prioritize solitary sleeping and early independence. In many Asian, African, and Indigenous cultures, co-sleeping is normative and protective. Clinicians must distinguish culturally harmonious co-sleeping from distressed, untenable sleep disruption.

## Conclusion (~100 words)
- Summarize that childhood sleep problems are treatable developmental hurdles.
- Evidence-based behavioral interventions restore restorative rest to the child and emotional equilibrium to the entire family system.
`
    }
  }
};
