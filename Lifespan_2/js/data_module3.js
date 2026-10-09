// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 3
const MODULE_3_DATA = {
  moduleId: 3,
  title: "Module 3: Attachment Across the Lifespan",
  subtitle: "Developmental Foundations, Diagnostic Classifications, Differential Markers, and Clinical Interventions",
  coordinator: "Dr Matthew McKenzie (Clinical Psychologist & Senior Lecturer)",
  
  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "Evolutionary Function & Internal Working Models",
      author: "John Bowlby",
      summary: "Attachment is an innate, biologically driven survival system designed to maintain proximity to a protective caregiver. Repeated caregiver interactions form 'Internal Working Models' (cognitive-affective schemas of self as worthy/unworthy of care, and others as reliable/rejecting), which filter perceptions throughout life."
    },
    {
      title: "Strange Situation Protocol & Infant Classifications",
      author: "Mary Ainsworth",
      summary: "A 21-minute laboratory procedure observing 12–18 month-old infants across 8 episodes of caregiver separation and reunion. Identified 3 primary patterns: Secure (Group B), Insecure-Avoidant (Group A), and Insecure-Ambivalent/Resistant (Group C). Main & Solomon later identified Insecure-Disorganized (Group D)."
    },
    {
      title: "Adult Attachment Interview (AAI) & Discourse Analysis",
      author: "Mary Main",
      summary: "A semi-structured clinical interview assessing an adult's current 'state of mind with respect to attachment' rather than actual history. Evaluates coherence of narrative using Grice's Maxims of Cooperative Discourse (Quality, Quantity, Relation, Manner)."
    },
    {
      title: "Reflective Functioning & Mentalization",
      author: "Peter Fonagy & Mary Target",
      summary: "The capacity to interpret self and others in terms of underlying mental states (needs, intentions, beliefs, emotions). Secure attachment promotes robust reflective functioning, which acts as a profound resilience factor buffer against borderline pathology and trauma."
    }
  ],

  // Clinical Table of Disorders & Attachment Classifications
  disorders: [
    {
      id: "RAD",
      code: "DSM-5 313.89 (F94.1)",
      name: "Reactive Attachment Disorder (RAD)",
      type: "Formal DSM-5 Disorder",
      ageRange: "Early Childhood (diagnosed between 9 months and 5 years)",
      coreDefinition: "A persistent pattern of emotionally withdrawn, inhibited behavior toward adult caregivers, characterized by rarely or minimally seeking comfort when distressed, and rarely responding to comfort when offered.",
      dsmCriteria: [
        "Consistent pattern of inhibited, emotionally withdrawn behavior toward adult caregivers (rarely seeks or responds to comfort when distressed).",
        "Persistent social and emotional disturbance with at least 2 of: (1) Minimal social/emotional responsiveness to others; (2) Limited positive affect; (3) Episodes of unexplained irritability, sadness, or fearfulness during nonthreatening interactions.",
        "Experienced extreme insufficient care (pathogenic neglect/deprivation, repeated caregiver changes, or institutional rearing with high child-to-caregiver ratios).",
        "Criteria are NOT met for Autism Spectrum Disorder (ASD).",
        "Disturbance is evident before age 5 years; developmental age of at least 9 months."
      ],
      howToDiagnose: [
        "Direct observation of child-caregiver interactions across separation, distress, and reunion contexts.",
        "Comprehensive developmental history documenting severe institutional rearing or gross neglect.",
        "Structured developmental assessment to rule out Autism Spectrum Disorder (look for intact social reciprocity capabilities once safety is established).",
        "Assessment of emotional availability and sensitivity in current primary caregiver."
      ],
      factorsLookedFor: [
        "Affect Regulation: Chronic hypoactivation of social signaling; 'frozen watchfulness' or emotional constriction.",
        "Distress response: Does NOT seek comfort when hurt or distressed; turns inward or appears emotionally numb.",
        "Reactions to comfort: Resists, avoids, or freezes if caregiver attempts physical soothing.",
        "Social engagement: Aloof, watchful, unexplained aggressive or fearful outbursts in benign settings."
      ],
      potentialTreatments: [
        "Primary Goal: Facilitate a secure attachment bond with a single, stable, consistent caregiver.",
        "Caregiver Sensitivity Coaching: Circle of Security (COS) or Video-feedback Intervention to Promote Positive Parenting (VIPP).",
        "Child-Parent Psychotherapy (CPP): Dyadic therapy processing early relational trauma and building mutual trust.",
        "Environmental Stability: Absolute priority on permanence, safety, predictability, and emotional warmth.",
        "CAUTION / CONTRAINDICATION: Coercive 'holding therapies' or rebirthing techniques are strictly contraindicated, dangerous, and scientifically disproven."
      ],
      clinicalPearl: "Children with RAD can engage in reciprocal social interactions and imaginative play in structured non-relational settings, ruling out ASD. Their core breakdown is an inability to use a caregiver as a safe haven when distressed."
    },
    {
      id: "DSED",
      code: "DSM-5 313.89 (F94.2)",
      name: "Disinhibited Social Engagement Disorder (DSED)",
      type: "Formal DSM-5 Disorder",
      ageRange: "Early Childhood through Adolescence",
      coreDefinition: "A persistent pattern of behavior in which a child actively approaches and interacts with unfamiliar adults with an absence of normal reticence, displaying overly familiar verbal or physical behavior.",
      dsmCriteria: [
        "Pattern of behavior in which a child approaches and interacts with unfamiliar adults and exhibits at least 2 of: (1) Reduced or absent reticence in approaching unfamiliar adults; (2) Overly familiar verbal or physical behavior; (3) Diminished or absent checking back with adult caregiver; (4) Willingness to go off with an unfamiliar adult with minimal or no hesitation.",
        "Behaviors are not limited to impulsivity (as in ADHD), but involve socially disinhibited attachment behavior.",
        "Experienced extreme insufficient care (social neglect, repeated foster placement changes, institutional rearing).",
        "Developmental age of at least 9 months."
      ],
      howToDiagnose: [
        "Observational assessment in public or novel settings (e.g., clinic waiting room, park) watching stranger interaction.",
        "Caregiver reporting on boundary violations, wandering off without looking back, and physical clinginess to strangers.",
        "Differential screening against ADHD (ADHD causes situational motor impulsivity; DSED specifically targets interpersonal boundary erasure).",
        "Developmental history confirming severe early institutionalization or caregiver deprivation."
      ],
      factorsLookedFor: [
        "Affect Regulation: Indiscriminate social proximity seeking without deep affective bonding.",
        "Social boundary violations: Sitting on strangers' laps, hugging unfamiliar adults, asking inappropriate personal questions.",
        "Checking back: Completely fails to look back or monitor primary caregiver's presence when exploring novel environments.",
        "Persistence into adolescence: In older children, manifests as superficial peer relationships, high vulnerability to exploitation, and physical boundary confusion."
      ],
      potentialTreatments: [
        "Primary Goal: Establish boundary discrimination, selective attachment to primary caregivers, and stranger awareness.",
        "Relational Dyadic Therapy (CPP / Dyadic Developmental Psychotherapy [DDP]): Strengthening primary caregiver as the exclusive secure base.",
        "Behavioral Boundary Training: Concrete environmental guidelines and visual boundary rules regarding who is safe.",
        "Caregiver psychoeducation: Helping foster/adoptive parents understand that stranger-friendliness is not true security, but unorganized attachment searching.",
        "Consistent Caregiving Environment: Long-term permanence and reduction of caregiver turnover."
      ],
      clinicalPearl: "Unlike RAD, which often improves significantly once placed in a loving, stable home, DSED symptoms frequently persist into middle childhood and adolescence even after high-quality caregiving is provided."
    },
    {
      id: "SECURE",
      code: "Attachment Classification (Infant: B / Adult: F)",
      name: "Secure (Infant) / Autonomous (Adult AAI)",
      type: "Healthy Lifespan Attachment Pattern",
      ageRange: "Infancy through Adulthood",
      coreDefinition: "A flexible, integrated capacity to seek proximity when distressed and explore when safe, underpinned by coherent metacognitive monitoring and robust reflective functioning.",
      dsmCriteria: [
        "Not a DSM disorder; the gold-standard healthy attachment organization across the lifespan.",
        "Infancy (Ainsworth Group B): Uses caregiver as secure base for exploration; visibly distressed by separation; seeks immediate contact upon reunion; easily soothed and returns promptly to play.",
        "Adulthood (AAI Autonomous 'F'): Coherent, collaborative, balanced narrative regarding childhood; values attachment relationships; objective about negative experiences without defensive idealization or anger."
      ],
      howToDiagnose: [
        "Infancy: Strange Situation Protocol (SSP) - clear balance between attachment seeking and exploratory drive.",
        "Adulthood: Adult Attachment Interview (AAI) - high scores on Coherence of Transcript and Coherence of Mind; adherence to Grice's Maxims of Quality, Quantity, Relation, Manner.",
        "Reflective Functioning: High RF scores (RFQ-8 scores reflecting genuine, realistic understanding of mental states without hypercertainty or total doubt)."
      ],
      factorsLookedFor: [
        "Affect Regulation: Flexible, dual-capacity affect regulation; acknowledges both positive and painful emotions without denial or flooding.",
        "Discourse in therapy: Reflective, open, able to explore feelings, acknowledge mixed feelings ('I felt angry with my mother, but I knew she loved me').",
        "Therapeutic alliance: Readily forms trusting, collaborative working relationship; accepts therapist boundaries without feeling rejected."
      ],
      potentialTreatments: [
        "Clinical Focus: Typically does not seek treatment for primary attachment pathology; may present for situational stressors, grief, or adjustment.",
        "Therapy Model: Standard CBT, ACT, or supportive psychotherapy; high therapeutic responsiveness and fast therapeutic alliance formation.",
        "Preventive: Circle of Security parenting education to maintain intergenerational transmission of security."
      ],
      clinicalPearl: "On the AAI, 'Earned Secure' individuals may have suffered severely abusive or neglectful childhoods, yet developed adult autonomy through later corrective relational experiences, therapy, or reflective processing."
    },
    {
      id: "AVOIDANT",
      code: "Attachment Classification (Infant: A / Adult: Ds)",
      name: "Insecure-Avoidant (Infant) / Dismissing (Adult AAI)",
      type: "Deactivating / Hypoactivating Relational Style",
      ageRange: "Infancy through Adulthood",
      coreDefinition: "An organized attachment strategy relying on the chronic suppression, deactivation, and down-regulation of attachment needs and vulnerable affects to prevent anticipated rejection.",
      dsmCriteria: [
        "Infancy (Ainsworth Group A): Does not show distress during separation; avoids or ignores caregiver upon reunion; focuses defensively on toys/objects; heart rate monitors show marked internal physiological arousal despite cool exterior.",
        "Adulthood (AAI Dismissing 'Ds'): Downplays importance of attachment; idealizes parents without supporting evidence (or dismisses them outright); claims lack of memory ('I don't remember childhood'); violates Grice's Maxim of Quality and Quantity."
      ],
      howToDiagnose: [
        "Infancy: Strange Situation Protocol - gaze aversion, physical turning away upon caregiver entry, hyperfocus on toys.",
        "Adulthood: Adult Attachment Interview - highly restricted narrative, normalization of harsh treatment ('It made me strong'), lack of episodic recall.",
        "In Session Behavior: Intellectualizes emotions, answers feeling questions with thoughts or explanations, presents as fiercely independent."
      ],
      factorsLookedFor: [
        "Affect Regulation: Chronic hypoactivation / deactivation of emotional distress; high somatic symptoms (tension, headaches, GI issues).",
        "Discourse marker: Gives glowing positive adjectives (e.g., 'Mother was wonderful, an angel') followed by contradictory or absent memories.",
        "Therapy presentation: Presents for somatic tension, performance anxiety, or depression; frequently dismisses emotional depth or therapist empathy ('I just want practical tools, not to talk about feelings')."
      ],
      potentialTreatments: [
        "Primary Goal: Safely activate vulnerable affect and expand tolerance for emotional closeness and interdependence.",
        "Experiential & Affect-Focused Therapy (EFT / Emotion-Focused Therapy): Guiding client down from intellectualized head narratives into bodily felt emotions.",
        "Relational Psychoeducation: Helping client recognize that asking for support is not weakness.",
        "Therapeutic Alliance as Attachment Figure: Therapist provides consistent, non-intrusive emotional availability, gently highlighting contradictions between thoughts and feelings.",
        "Caution: Pushing emotional exposure too fast will trigger defensive withdrawal or premature drop-out."
      ],
      clinicalPearl: "When you ask a Dismissing client how they feel, they typically tell you what they thought. Notice the non-verbals: cool, self-reliant composure masking deep cardiovascular and autonomic activation."
    },
    {
      id: "AMBIVALENT",
      code: "Attachment Classification (Infant: C / Adult: E)",
      name: "Insecure-Ambivalent/Resistant (Infant) / Preoccupied (Adult AAI)",
      type: "Hyperactivating Relational Style",
      ageRange: "Infancy through Adulthood",
      coreDefinition: "An organized attachment strategy characterized by hyperactivation of the attachment system, continuous vigilance for abandonment, affective flooding, and entangled preoccupation with early caregivers.",
      dsmCriteria: [
        "Infancy (Ainsworth Group C): Clings anxiously before separation; intensely distressed upon separation; on reunion, seeks proximity but combines it with angry resistance (hitting, arching away, unable to settle).",
        "Adulthood (AAI Preoccupied 'E'): Overwhelmed, entangled, and angry or passively rambling about parents; gives excessively long, rambling, incoherent narratives violating Grice's Maxim of Quantity and Relation; emotionally flooded."
      ],
      howToDiagnose: [
        "Infancy: Strange Situation Protocol - failure to use caregiver as secure base, persistent crying, petulant anger, inability to be soothed.",
        "Adulthood: Adult Attachment Interview - uncontained emotional discourse, run-on sentences, talking about childhood conflicts as if they are actively happening in the room today.",
        "Clinical Presentation: High relational anxiety, fear of abandonment, demands excessive reassurance, emotional whirlwind in session."
      ],
      factorsLookedFor: [
        "Affect Regulation: Chronic hyperactivation of attachment; exaggerates vulnerability to coerce caregiver proximity.",
        "In Session: Floods the room with words, talks over anxiety, powers through topics, struggles to pause and reflect.",
        "Transference: Views therapist as rescuer, then feels easily abandoned or panicked by session boundaries or weekend breaks."
      ],
      potentialTreatments: [
        "Primary Goal: Containment, down-regulation of emotional arousal, and development of reflective functioning.",
        "Interrupting the Whirlwind: As Dr. McKenzie emphasizes, the therapist must gently interrupt rambling with informed consent: 'I'm noticing anxiety coming up right now. Let's pause and notice what that anxiety is making you do.'",
        "Mentalization-Based Therapy (MBT): Teaching the client to step back, slow down, and differentiate internal feelings from external reality.",
        "Dialectical Behavior Therapy (DBT) Skills: Distress tolerance, radical acceptance, and emotion regulation modules.",
        "Consistent Boundaried Frame: Clear, predictable session start/end times to prevent boundary-testing."
      ],
      clinicalPearl: "If you don't interrupt a Preoccupied client when they are being a whirlwind, you are doing them a clinical disservice. Help them develop the capacity to notice anxiety rising before it drives verbal flooding."
    },
    {
      id: "DISORGANIZED",
      code: "Attachment Classification (Infant: D / Adult: U/CC)",
      name: "Insecure-Disorganized (Infant) / Unresolved (Adult AAI)",
      type: "Disorganized / Trauma-Related Relational Pattern",
      ageRange: "Infancy through Adulthood",
      coreDefinition: "A breakdown in organized attachment strategy caused by a caregiver who is simultaneously the source of fear and the only biological haven of safety ('fright without solution'), leading to severe dissociation and borderline vulnerability.",
      dsmCriteria: [
        "Infancy (Main & Solomon Group D): Display of contradictory, disorganized, or apprehensive behaviors in caregiver's presence (e.g., freezing mid-motion, approaching while looking away, falling prone, sudden trance-like immobility).",
        "Adulthood (AAI Unresolved/Disorganized 'U' or Cannot Classify 'CC'): Lapses in the monitoring of reasoning or discourse when discussing loss or abuse (e.g., believing deceased person is physically alive, sudden prolonged silences, falling into dissociative states)."
      ],
      howToDiagnose: [
        "Infancy: Strange Situation Protocol - overt behavioral disorganization (stereotypies, freezing, simultaneous approach-avoidance).",
        "Adulthood: Adult Attachment Interview - disorientation in time/space during trauma narratives, sudden linguistic collapse.",
        "RFQ-8: Severe hypercertainty ('I know exactly what evil thoughts they have') alternating with complete hypomentalizing ('People's minds are complete blank mysteries').",
        "Comorbidities: Borderline Personality Disorder (BPD), Complex PTSD, Dissociative Disorders."
      ],
      factorsLookedFor: [
        "Affect Regulation: Complete failure of organized affect regulation; severe swings between shut-down dissociation and explosive panic/rage.",
        "Relational Dynamic: The 'Karpman Drama Triangle' / borderline oscillation: therapist is idealized as a savior, then rapidly perceived as an abuser or persecutor.",
        "Non-verbal markers: Sudden blank stares, postural freezing, disorientation, somatic numbing when relational vulnerability is triggered."
      ],
      potentialTreatments: [
        "Primary Goal: Relational safety, stabilization, affect regulation, and restoration of mentalizing.",
        "Mentalization-Based Therapy (MBT) for Borderline Pathology: Explicitly addresses the breakdown in reflective capacity under emotional arousal.",
        "Child-Parent Psychotherapy (CPP) / Dyadic Developmental Psychotherapy: For young children, repairing trauma and helping caregiver resolve their own unresolved fright.",
        "Dialectical Behavior Therapy (DBT): Distress tolerance, crisis survival skills, and interpersonal effectiveness to manage self-harm.",
        "Therapeutic Frame: Highly structured, transparent, boundaried relationship where ruptures are explicitly named, normalized, and repaired without retaliation."
      ],
      clinicalPearl: "Disorganized attachment creates an impossible biological dilemma: the instinct to flee toward the caregiver for safety collides with the instinct to flee away from the caregiver in fear. In therapy, intimacy triggers threat alarms."
    }
  ],

  // Interactive Differential Diagnosis & Treatment Matrix
  // Provides direct contrastive comparisons for pairwise or multiple selections
  differentialMatrix: {
    // Specific pre-computed high-yield pairs
    "RAD_DSED": {
      title: "Reactive Attachment Disorder (RAD) vs. Disinhibited Social Engagement Disorder (DSED)",
      commonality: "Both stem from early severe pathogenic care, social neglect, or institutional deprivation occurring before age 2. Both require a developmental age of at least 9 months.",
      distinguishingMarkers: [
        {
          feature: "Proximity Seeking with Primary Caregivers",
          conditionA: "RAD: Markedly absent or inhibited. Rarely seeks or responds to comfort from anyone, even when severely injured or terrified.",
          conditionB: "DSED: Variable or absent checking back. The child treats caregivers and complete strangers with equal, superficial familiarity."
        },
        {
          feature: "Behavior with Unfamiliar Strangers",
          conditionA: "RAD: Guarded, hypervigilant, aloof, withdrawn, or fearful in nonthreatening settings.",
          conditionB: "DSED: Completely lacks normal stranger wariness; approaches strangers, sits on their laps, leaves the area with unknown adults without hesitation."
        },
        {
          feature: "Affective Presentation",
          conditionA: "RAD: Blunted positive affect, depressive withdrawal, irritability, sudden bouts of unexplained fear or rage.",
          conditionB: "DSED: Appears superficially cheerful, socially extroverted, hyper-verbal, and attention-seeking."
        },
        {
          feature: "Prognosis in Stable Loving Homes",
          conditionA: "RAD: Often exhibits marked and rapid improvement once placed in an enduring, highly sensitive, safe foster/adoptive home.",
          conditionB: "DSED: Symptoms often persist stubbornly into middle childhood and adolescence despite excellent adoptive caregiving."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Child completely avoids comfort, shows frozen watchfulness, blunted positive affect, and turns away when distressed.",
        ruleInDSED: "Child approaches strangers indiscriminately, fails to look back at caregiver, and shows zero reticence with unfamiliar adults.",
        pitfallToAvoid: "Do not mistake DSED for simple ADHD hyperactivity or extroversion; DSED is specifically characterized by the violation of social boundaries with unfamiliar adults."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for RAD",
        treatmentA_Steps: "Focus on creating an intensely predictable, warm, and emotionally safe environment. Utilize dyadic interventions like Child-Parent Psychotherapy (CPP) and Circle of Security to coach the caregiver in decoding subtle cues and offering attuned comfort without demanding intimacy. Never use coercive holding.",
        treatmentB_Name: "Intervention for DSED",
        treatmentB_Steps: "Focus on concrete boundary setting and selective attachment reinforcement. Use behavioral safety frameworks (e.g., 'Safe Circle' rules about who can be touched/approached) combined with dyadic therapies (DDP/CPP) that establish the primary caregiver as the sole source of privileges, comfort, and exploration permission."
      }
    },

    "AVOIDANT_AMBIVALENT": {
      title: "Insecure-Avoidant / Dismissing vs. Insecure-Ambivalent / Preoccupied",
      commonality: "Both represent organized secondary attachment strategies designed to maximize proximity or minimize rejection from inconsistently or rejecting attachment figures.",
      distinguishingMarkers: [
        {
          feature: "Affect Regulation Strategy",
          conditionA: "Dismissing (Avoidant): Chronic deactivation / hypoactivation. Suppresses feelings, downplays distress, and relies entirely on self-reliance.",
          conditionB: "Preoccupied (Ambivalent): Chronic hyperactivation. Amplifies distress, broadcasts helplessness, and hyper-focuses on threat."
        },
        {
          feature: "Discourse Style on the AAI",
          conditionA: "Dismissing: Terse, restricted, claimed memory gaps ('I don't recall childhood'), praises parents with zero concrete evidence, violates Maxim of Quality & Quantity.",
          conditionB: "Preoccupied: Rambling, lengthy, emotionally entangled, expresses active uncontained anger toward parents, violates Maxim of Quantity & Relation."
        },
        {
          feature: "In-Session Response to Therapist",
          conditionA: "Dismissing: Intellectualizes emotional queries, answers feelings with thoughts, resists vulnerability, keeps therapist at an emotional distance.",
          conditionB: "Preoccupied: Floods the room with words, demands constant reassurance, tests availability, fears session endings and breaks."
        }
      ],
      ruleInRuleOut: {
        ruleInAvoidant: "Client minimizes the importance of relationships, normalizes harsh treatment, shows physiological arousal despite cool demeanor, and intellectualizes.",
        ruleInAmbivalent: "Client presents as an emotional whirlwind, expresses ongoing resentment about early caregivers as if the events happened yesterday, and cannot be soothed.",
        pitfallToAvoid: "Don't accept a Dismissing client's claim that their childhood was 'perfect' without asking for 5 specific adjectives and episodic proof."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for Dismissing / Avoidant",
        treatmentA_Steps: "Gently deconstruct defenses. Do not collude with intellectualization; connect physical bodily sensations to underlying emotions. Provide steady, non-demanding presence that allows the client to experience vulnerability without facing anticipated rejection.",
        treatmentB_Name: "Intervention for Preoccupied / Ambivalent",
        treatmentB_Steps: "Active containment. Interrupt verbal whirlwinds with empathy and consent. Train self-soothing, distress tolerance (DBT), and reflective functioning (MBT) so the client can pause and examine feelings rather than being swept away by them."
      }
    },

    "RAD_DISORGANIZED": {
      title: "Reactive Attachment Disorder (RAD) vs. Insecure-Disorganized / Unresolved",
      commonality: "Both involve profound relational trauma and disruption in early caregiving, often displaying extreme emotional dysregulation and mistrust.",
      distinguishingMarkers: [
        {
          feature: "DSM Category vs Attachment Classification",
          conditionA: "RAD: A discrete DSM-5 psychiatric disorder defined by early childhood social/emotional inhibition following gross deprivation.",
          conditionB: "Disorganized: An attachment classification (and adult unresolved state) representing a biological collapse of strategy in the face of a terrifying caregiver."
        },
        {
          feature: "Behavioral Manifestation Under Stress",
          conditionA: "RAD: Rigid, organized withdrawal. Consistently avoids comfort and remains guarded across situations.",
          conditionB: "Disorganized: Chaotic, contradictory, and disoriented behaviors (freezing, approaching while turned away, sudden outbursts alternating with dissociation)."
        },
        {
          feature: "Adult Presentation",
          conditionA: "RAD: Diagnosed specifically in early childhood; in adults, developmental sequelae manifest as severe personality detachment or sociopathy if untreated.",
          conditionB: "Disorganized: Directly predicts adult Borderline Personality Disorder, Complex PTSD, dissociative symptoms, and lapses in reasoning on the AAI."
        }
      ],
      ruleInRuleOut: {
        ruleInRAD: "Marked, consistent absence of comfort seeking and comfort responding, blunted affect, stemming from severe early deprivation.",
        ruleInDisorganized: "Bizarre, conflicting behaviors (approaching while averting gaze, freezing mid-motion) showing simultaneous fear of and pull toward caregiver.",
        pitfallToAvoid: "Do not assume all traumatized children have RAD; disorganized attachment is much more common than formal RAD."
      },
      contrastingTreatments: {
        treatmentA_Name: "Intervention for RAD",
        treatmentA_Steps: "Establish basic caregiver safety, non-coercive comfort routines, and repair early social signaling through dyadic therapies (CPP).",
        treatmentB_Name: "Intervention for Disorganized / Complex Trauma",
        treatmentB_Steps: "Focus on trauma processing, stabilizing dissociation, and rebuilding reflective functioning (Mentalization-Based Therapy). Address internal working models where attachment triggers flight-fight paralysis."
      }
    }
  },

  // 6 Lifespan Clinical Scenarios with 2-Step Decision Flow (Diagnose -> Treat)
  scenarios: [
    {
      id: "scenario_01",
      title: "Case Vignette 1: 3-Year-Old Leo in Foster Care",
      ageGroup: "Early Childhood (Toddler)",
      vignette: "Leo is a 3-year-old boy who was removed from his biological home at age 2 due to profound physical and emotional neglect. His foster mother reports that when Leo falls down and scrapes his knee, he walks away from her, sits silently in a corner, and will not make eye contact. If she approaches him with arms open to soothe him, he stiffens, turns his back, and appears emotionally numb. During routine play, he shows almost no smiles or joy, but occasionally displays sudden, intense bouts of crying or rage when the foster mother is merely offering him lunch. Pediatric screening rules out Autism Spectrum Disorder, noting Leo makes appropriate eye contact and copies social gestures during structured developmental block tests when no comfort is required.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the most accurate diagnosis for Leo's presentation?",
        hint: "Pay attention to whether Leo is turning inward and withdrawing from comfort, or actively approaching strangers. Also note that his social reciprocity is intact during structured block play (ruling out ASD).",
        options: [
          {
            id: "opt_rad",
            text: "Reactive Attachment Disorder (RAD)",
            correct: true,
            rationale: "Correct! Leo exhibits the hallmark features of RAD: marked emotional withdrawal, failure to seek or respond to comfort when distressed, blunted positive affect, unexplained episodes of fear/rage in benign settings, a verified history of pathogenic neglect, and intact social reciprocity when comfort is not demanded (ruling out ASD)."
          },
          {
            id: "opt_dsed",
            text: "Disinhibited Social Engagement Disorder (DSED)",
            correct: false,
            rationale: "Incorrect. DSED presents with indiscriminate sociability and lack of stranger wariness, which is the exact opposite of Leo's withdrawn, inhibited, and aloof presentation."
          },
          {
            id: "opt_asd",
            text: "Autism Spectrum Disorder (ASD)",
            correct: false,
            rationale: "Incorrect. Leo demonstrated intact social reciprocity and eye contact during structured non-relational testing. In RAD, social withdrawal is specific to attachment and comfort contexts rather than pervasive communicative deficits."
          },
          {
            id: "opt_avoidant",
            text: "Insecure-Avoidant Attachment Pattern only (non-clinical)",
            correct: false,
            rationale: "Incorrect. While Leo demonstrates avoidant behaviors, his severe emotional disturbance, persistent lack of positive affect, episodes of unexplained rage, and severe pathogenic deprivation cross the clinical threshold into DSM-5 Reactive Attachment Disorder."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which clinical intervention is the gold-standard recommendation for Leo?",
        hint: "Consider whether early developmental attachment repairs require dyadic caregiver attunement or individual cognitive restructuring, and remember that coercive holding therapies are strictly discredited.",
        options: [
          {
            id: "tx_cpp_cos",
            text: "Dyadic therapy (e.g., Child-Parent Psychotherapy / Circle of Security) to build caregiver sensitivity, predictability, and attunement, avoiding any coercive holding.",
            correct: true,
            rationale: "Correct! The evidence-based treatment for RAD focuses on supporting the primary caregiver to provide consistent, sensitive, non-coercive attunement, allowing the child to gradually learn that comfort is safe."
          },
          {
            id: "tx_holding",
            text: "Attachment 'holding therapy' where the caregiver physically holds Leo until his emotional resistance is broken.",
            correct: false,
            rationale: "Incorrect! Coercive holding therapies are strictly contraindicated, dangerous, unethical, and scientifically discredited."
          },
          {
            id: "tx_cbt_indiv",
            text: "Individual Cognitive Behavioral Therapy to challenge Leo's cognitive distortions about rejection.",
            correct: false,
            rationale: "Incorrect. At age 3, individual cognitive restructuring is developmentally inappropriate. Interventions must be dyadic and caregiver-mediated."
          },
          {
            id: "tx_exposure_stranger",
            text: "Social skills training in group preschool settings to force social interaction.",
            correct: false,
            rationale: "Incorrect. Group pressure does not repair fundamental attachment security and may increase traumatic dysregulation."
          }
        ]
      }
    },

    {
      id: "scenario_02",
      title: "Case Vignette 2: 4-Year-Old Maya at the Clinic",
      ageGroup: "Preschooler",
      vignette: "Maya is a 4-year-old girl adopted from an overseas institutional orphanage 14 months ago where caregiver turnover was extreme. In the psychology clinic waiting room, Maya immediately approaches an unknown adult male patient, climbs onto his lap, hugs him, and begins playing with his watch. When her adoptive mother leaves the waiting room to use the restroom, Maya does not look up, express concern, or check her mother's whereabouts. When a male delivery courier enters the building, Maya takes his hand and happily begins walking out the exit door with him before the receptionist intervenes. Her mother is exhausted, noting Maya treats complete strangers exactly like family members.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis indicated by Maya's behavior?",
        hint: "Notice the child's complete lack of stranger reticence, overly familiar physical approach with unfamiliar adults, and absence of checking back with her caregiver.",
        options: [
          {
            id: "opt_dsed",
            text: "Disinhibited Social Engagement Disorder (DSED)",
            correct: true,
            rationale: "Correct! Maya shows the definitive diagnostic criteria for DSED: reduced reticence with unfamiliar adults, overly familiar physical/verbal behavior, failure to check back with her caregiver, and willingness to leave with a complete stranger without hesitation, following severe early institutional deprivation."
          },
          {
            id: "opt_rad",
            text: "Reactive Attachment Disorder (RAD)",
            correct: false,
            rationale: "Incorrect. RAD is characterized by emotional withdrawal and failure to seek comfort, whereas Maya demonstrates indiscriminate, overly familiar social approach behavior."
          },
          {
            id: "opt_adhd",
            text: "Attention-Deficit/Hyperactivity Disorder (ADHD) - Hyperactive/Impulsive Type",
            correct: false,
            rationale: "Incorrect. While children with DSED may exhibit concurrent impulsivity, climbing into strangers' laps and departing with unknown adults represents disinhibited social attachment behavior, not mere motor impulsivity."
          },
          {
            id: "opt_secure",
            text: "Healthy, socially outgoing temperament (Extroversion)",
            correct: false,
            rationale: "Incorrect. Departing with strangers and complete absence of caregiver checking-back represents a serious safety hazard and severe clinical attachment disinhibition."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which treatment strategy should be prioritized for Maya and her family?",
        hint: "The treatment must establish clear interpersonal boundaries (who is a stranger vs. caregiver) and reinforce the adoptive parents as the exclusive secure base.",
        options: [
          {
            id: "tx_dsed_boundaries",
            text: "Dyadic relational therapy (e.g., CPP/DDP) combined with concrete social boundary protocols to establish the adoptive parents as the exclusive source of safety and intimacy.",
            correct: true,
            rationale: "Correct! Treatment must establish clear, consistent boundaries (teaching who is in the 'family circle' vs strangers) while reinforcing the adoptive parents as the primary secure base through dyadic therapy."
          },
          {
            id: "tx_stimulant",
            text: "Immediate initiation of stimulant medication (e.g., Methylphenidate) to suppress her impulsive approach behavior.",
            correct: false,
            rationale: "Incorrect. Pharmacotherapy does not address the underlying attachment disruption or social boundary confusion resulting from institutionalization."
          },
          {
            id: "tx_isolation",
            text: "Isolating Maya from all public outings until she learns to stay close to her mother.",
            correct: false,
            rationale: "Incorrect. Total isolation prevents real-world social coaching and does not resolve attachment insecurity."
          },
          {
            id: "tx_rad_holding",
            text: "Attachment holding therapy to enforce obedience.",
            correct: false,
            rationale: "Incorrect. Coercive therapies are dangerous and ineffective."
          }
        ]
      }
    },

    {
      id: "scenario_03",
      title: "Case Vignette 3: Marcus, a 38-Year-Old Corporate Executive",
      ageGroup: "Adult",
      vignette: "Marcus (38) is referred for therapy by his physician for chronic tension headaches and insomnia. When the therapist asks about his early family life, Marcus quickly dismisses the topic: 'My childhood was completely fine, completely normal. My parents were great, absolutely flawless.' However, when asked to provide 5 adjectives describing his mother and give specific childhood memories for each, Marcus goes silent. He cannot produce a single specific memory of being comforted, saying, 'I don't really remember my childhood, who does? It doesn't matter anyway. My dad was strict, he made me tough, and that's why I'm successful today.' When asked how he feels about recent marital conflict, Marcus shifts posture and explains: 'Logically speaking, people are inefficient. I don't feel anything about it; I just need a rational sleep strategy so I can work 14 hours a day.'",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — Which adult attachment classification and relational style does Marcus represent?",
        hint: "Notice the client's defensive deactivation of affect, intellectualization of emotional topics, and claim of a 'flawless' childhood with memory gaps.",
        options: [
          {
            id: "opt_dismissing",
            text: "Insecure-Avoidant / Dismissing (AAI Classification Ds)",
            correct: true,
            rationale: "Correct! Marcus demonstrates the classic markers of a Dismissing state of mind: idealization of parents ('flawless') without supporting episodic memory, claiming lack of childhood recall, downplaying attachment needs ('doesn't matter anyway'), deactivating affect, and intellectualizing emotional distress."
          },
          {
            id: "opt_preoccupied",
            text: "Insecure-Ambivalent / Preoccupied (AAI Classification E)",
            correct: false,
            rationale: "Incorrect. Preoccupied individuals produce lengthy, emotionally flooded, angry, rambling narratives about their parents, whereas Marcus is terse, dismissive, and claims complete lack of memory."
          },
          {
            id: "opt_unresolved",
            text: "Unresolved/Disorganized (AAI Classification U)",
            correct: false,
            rationale: "Incorrect. Marcus does not show lapses in the monitoring of reasoning or disorientation regarding trauma/loss; he exhibits organized, defensive deactivation."
          },
          {
            id: "opt_autonomous",
            text: "Autonomous / Secure (AAI Classification F)",
            correct: false,
            rationale: "Incorrect. Autonomous narratives are coherent, balanced, and open about both positive and painful childhood experiences, which Marcus defensively rejects."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — How should the clinician structure psychotherapy for Marcus?",
        hint: "The goal is to help the client safely reconnect thoughts to bodily felt emotions (experiential affect work) without prematurely attacking their defenses or colluding with avoidance.",
        options: [
          {
            id: "tx_affect_eft",
            text: "Experiential, affect-focused work (e.g., Emotion-Focused Therapy) that gently bypasses intellectualization, tracks bodily somatic tension, and provides a dependable, non-intrusive relational container.",
            correct: true,
            rationale: "Correct! Dismissing clients intellectualize. As Dr. McKenzie highlights, the therapist must gently invite the client to notice feelings rather than substituting thoughts, tracking somatic tension to help them safely tolerate vulnerable affects."
          },
          {
            id: "tx_rambling_stop",
            text: "Aggressively confronting Marcus on his memory gaps in the first session to break through his denial.",
            correct: false,
            rationale: "Incorrect. Prematurely attacking avoidant defenses causes high anxiety, rupture of alliance, and immediate treatment dropout."
          },
          {
            id: "tx_sleep_pure",
            text: "Giving him only sleep hygiene tips without ever discussing his relationships or feelings, matching his avoidance.",
            correct: false,
            rationale: "Incorrect. Colluding with his emotional avoidance ignores the maintaining relational stressors driving his somatic tension."
          },
          {
            id: "tx_dbt_crisis",
            text: "Full comprehensive DBT for severe borderline crisis management.",
            correct: false,
            rationale: "Incorrect. Marcus is not experiencing borderline crisis, self-harm, or affect flooding."
          }
        ]
      }
    },

    {
      id: "scenario_04",
      title: "Case Vignette 4: Chloe, a 22-Year-Old University Student",
      ageGroup: "Young Adult",
      vignette: "Chloe (22) presents with intense relationship distress following a fight with her partner. From the opening minutes of the consultation, Chloe speaks rapidly without taking a breath, leaping from her current fight to vivid, furious grievances about how her mother criticized her clothing when she was 11 years old. She mimics her mother's voice in an angry, sarcastic tone, using run-on sentences that fill 15 minutes without pause. When the therapist attempts to reflect a reflection of her emotion, Chloe talks right over the therapist, saying, 'And another thing! She never listened, exactly like my partner doesn't listen, and I'm just sitting there dying inside!' Chloe feels constantly terrified that people will leave her, yet her overwhelming fury and demands for non-stop validation exhaust her friends.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — Which adult attachment classification and relational style does Chloe display?",
        hint: "Notice the uncontained, rapid verbal 'whirlwind', affective flooding, and active ongoing anger regarding childhood caregivers.",
        options: [
          {
            id: "opt_preoccupied",
            text: "Insecure-Ambivalent / Preoccupied (AAI Classification E)",
            correct: true,
            rationale: "Correct! Chloe exhibits the classic Preoccupied pattern: hyperactivation of attachment distress, uncontained active anger regarding childhood figures ('whirlwind' narrative), run-on discourse violating Grice's Maxims of Quantity and Relation, and severe fear of abandonment."
          },
          {
            id: "opt_dismissing",
            text: "Insecure-Avoidant / Dismissing (AAI Classification Ds)",
            correct: false,
            rationale: "Incorrect. Dismissing individuals minimize emotions, claim lack of memory, and intellectualize, whereas Chloe is emotionally flooded and hyper-expressive."
          },
          {
            id: "opt_rad",
            text: "Reactive Attachment Disorder (RAD)",
            correct: false,
            rationale: "Incorrect. RAD is an early childhood DSM disorder involving emotional withdrawal, not adult anxious/ambivalent hyperactivation."
          },
          {
            id: "opt_secure",
            text: "Autonomous / Secure (AAI Classification F)",
            correct: false,
            rationale: "Incorrect. Chloe's discourse lacks coherence, collaboration, and perspective-taking."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — In line with Dr. McKenzie's clinical lecture guidelines, what is the therapist's critical task when working with Chloe?",
        hint: "Recall Dr. McKenzie's clinical guideline: when a client becomes an uncontained whirlwind, the therapist must gently interrupt with informed consent to regulate anxiety and build reflective capacity.",
        options: [
          {
            id: "tx_interrupt_whirlwind",
            text: "Gently interrupt the verbal 'whirlwind' with consent, help Chloe notice her physiological anxiety in the room, and build mentalizing capacity to deconstruct repeating patterns.",
            correct: true,
            rationale: "Correct! As Dr. McKenzie highlights: 'If you don't interrupt the client when they are a whirlwind, you are doing them a disservice.' The therapist must compassionately pause the flooding, seek informed consent to regulate anxiety, and build reflective functioning."
          },
          {
            id: "tx_let_talk_full",
            text: "Remain completely silent for the entire 50 minutes so Chloe can exhaust all her pent-up emotional energy without interruption.",
            correct: false,
            rationale: "Incorrect. Allowing uninterrupted rambling reinforces hyperactivation and emotional dysregulation without facilitating therapeutic change."
          },
          {
            id: "tx_join_anger",
            text: "Actively validate that her mother and partner are terrible people to build rapport.",
            correct: false,
            rationale: "Incorrect. Colluding with one-sided blame undermines mentalization and prevents Chloe from recognizing her own role in interpersonal cycles."
          },
          {
            id: "tx_exposure_abandon",
            text: "Expose her to deliberate abandonment by canceling upcoming sessions without warning.",
            correct: false,
            rationale: "Incorrect. Unethical and severely harmful."
          }
        ]
      }
    },

    {
      id: "scenario_05",
      title: "Case Vignette 5: Sam, a 26-Year-Old with Relational Instability",
      ageGroup: "Young Adult",
      vignette: "Sam (26) enters therapy following repeated self-inflicted cutting during interpersonal crises. Sam experienced severe childhood physical abuse and unpredictable terror from an alcoholic caregiver. In early sessions, Sam professes deep admiration for the therapist: 'You are the only person on earth who truly understands me.' However, when the therapist announces an upcoming conference absence two weeks in advance, Sam suddenly freezes in the chair, stares blankly at the wall for two full minutes without responding, and then abruptly shouts: 'You're just another abuser who wants me to suffer!' On the RFQ-8, Sam scores extreme hypercertainty ('I know exactly what evil thoughts you are having about me') alternating with complete confusion about their own feelings. During the interview, Sam speaks of their deceased abuser in the present tense as though they are actively standing in the room.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What attachment and clinical pathology pattern is most evident?",
        hint: "Look for signs of disorientation in reasoning, dissociation/freezing, and rapid oscillation between idealizing and demonizing the therapist following relational trauma.",
        options: [
          {
            id: "opt_disorganized",
            text: "Insecure-Disorganized / Unresolved (AAI Classification U) & Borderline Personality / Relational Trauma Vulnerability",
            correct: true,
            rationale: "Correct! Sam shows hallmarks of Unresolved/Disorganized attachment: lapses in reasoning and temporal orientation (speaking of deceased abuser in present tense), postural freezing/dissociation, rapid oscillation between idealizing and demonizing the therapist, and profound mentalization collapse under abandonment threat."
          },
          {
            id: "opt_dismissing",
            text: "Insecure-Avoidant / Dismissing Pattern",
            correct: false,
            rationale: "Incorrect. Dismissing individuals maintain stable deactivation and emotional control; Sam exhibits profound disorganization, dissociation, and intense rage."
          },
          {
            id: "opt_rad_only",
            text: "Reactive Attachment Disorder (RAD)",
            correct: false,
            rationale: "Incorrect. RAD is diagnosed in early childhood (under age 5). In adults, unresolved relational trauma manifests in borderline and dissociative symptoms."
          },
          {
            id: "opt_dsed",
            text: "Disinhibited Social Engagement Disorder (DSED)",
            correct: false,
            rationale: "Incorrect. Sam does not exhibit indiscriminate stranger friendliness."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — Which clinical therapy model is specially designed to treat this pattern of mentalization breakdown and relational trauma?",
        hint: "Look for an evidence-based therapy specifically designed to restore reflective functioning under emotional arousal (mentalization) and stabilize emotional dysregulation.",
        options: [
          {
            id: "tx_mbt_dbt",
            text: "Mentalization-Based Therapy (MBT) and Dialectical Behavior Therapy (DBT), providing structured relational containment, distress tolerance, and explicit rupture-and-repair processing.",
            correct: true,
            rationale: "Correct! MBT (Bateman & Fonagy) directly restores reflective functioning during relational arousal, while DBT targets life-threatening impulsive behaviors, offering clear relational boundaries where therapist ruptures can be safely processed."
          },
          {
            id: "tx_psychoanalysis_silent",
            text: "Classic unstructured psychoanalysis with 4 sessions per week and a completely silent, neutral therapist.",
            correct: false,
            rationale: "Incorrect. An unstructured, silent analytic stance induces severe panic, paranoia, and dissociative regression in clients with disorganized attachment."
          },
          {
            id: "tx_rebirthing",
            text: "Attachment rebirthing therapy to recreate infant birth attachment bonds.",
            correct: false,
            rationale: "Incorrect. Rebirthing is dangerous, unscientific, and illegal in many jurisdictions."
          },
          {
            id: "tx_stimulant",
            text: "High-dose psychostimulant therapy.",
            correct: false,
            rationale: "Incorrect. Does not treat relational trauma or attachment disorganization."
          }
        ]
      }
    },

    {
      id: "scenario_06",
      title: "Case Vignette 6: 14-Month-Old Lucas in the Strange Situation",
      ageGroup: "Infancy",
      vignette: "Lucas (14 months) is participating in a developmental research laboratory with his mother. During free play, Lucas explores a pile of colorful blocks, frequently looking back at his mother to make eye contact, smile, and show her a toy before returning to play. When the mother leaves the room, Lucas stops playing, vocalizes distress, and crawls to the door, crying softly. When the mother returns after 3 minutes, Lucas immediately reaches up to be held. His mother lifts him, rocks him gently, and speaks softly. Within 45 seconds, Lucas ceases crying, his posture relaxes, and he points back toward the block pile, eagerly crawling down to resume happy exploration.",
      
      step1: {
        prompt: "Step 1: Clinical Diagnosis — How is Lucas classified in the Strange Situation Protocol?",
        hint: "Notice how the infant uses the parent as a secure base for exploration, shows appropriate distress on separation, and is quickly comforted on reunion.",
        options: [
          {
            id: "opt_secure_infant",
            text: "Secure Attachment Pattern (Ainsworth Group B)",
            correct: true,
            rationale: "Correct! Lucas demonstrates the ideal balance of attachment and exploration: uses mother as a secure base, expresses appropriate distress upon separation, actively seeks proximity upon reunion, is quickly comforted, and resumes exploratory play."
          },
          {
            id: "opt_avoidant_infant",
            text: "Insecure-Avoidant Pattern (Ainsworth Group A)",
            correct: false,
            rationale: "Incorrect. Avoidant infants do not express overt distress on separation and actively turn away or ignore the parent upon reunion."
          },
          {
            id: "opt_ambivalent_infant",
            text: "Insecure-Ambivalent / Resistant Pattern (Ainsworth Group C)",
            correct: false,
            rationale: "Incorrect. Ambivalent infants cannot be soothed upon reunion, displaying petulant anger (pushing, kicking, crying continuously)."
          },
          {
            id: "opt_disorganized_infant",
            text: "Insecure-Disorganized Pattern (Group D)",
            correct: false,
            rationale: "Incorrect. Disorganized infants exhibit freezing, bizarre posturing, or fear of the parent, which Lucas does not show."
          }
        ]
      },

      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the appropriate clinical recommendation for this family?",
        hint: "Is clinical pathology present here, or should healthy, sensitive caregiving be validated and supported without unnecessary interventions?",
        options: [
          {
            id: "tx_reinforce_secure",
            text: "No psychiatric intervention required; validate and encourage the caregiver's sensitive, attuned caregiving as a protective foundation for lifespan resilience.",
            correct: true,
            rationale: "Correct! Lucas and his mother exhibit healthy, secure attachment. Supporting parental confidence and ongoing responsive caregiving reinforces lifelong psychological wellbeing."
          },
          {
            id: "tx_rad_cpp",
            text: "Intensive Child-Parent Psychotherapy for developmental delay.",
            correct: false,
            rationale: "Incorrect. Lucas displays healthy development; intensive therapy is unnecessary."
          },
          {
            id: "tx_sleep_cry",
            text: "Immediate extinction training to eliminate separation distress.",
            correct: false,
            rationale: "Incorrect. Mild separation distress at 14 months is an evolutionarily normal, healthy attachment response."
          },
          {
            id: "tx_stranger_training",
            text: "Teaching him not to cry when mother leaves by introducing unfamiliar babysitters without transition.",
            correct: false,
            rationale: "Incorrect. Crying upon separation from a primary caregiver at 14 months is developmentally expected."
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
        title: "SAQ 1: Strange Situation Infant Classifications & Strange Situation Dynamics",
        question: "Describe the four infant attachment classifications identified by Mary Ainsworth and Mary Main in the Strange Situation Protocol. Detail the specific infant behaviors observed during separation and reunion for each classification.",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Identifies all 4 patterns: Secure (Group B), Insecure-Avoidant (Group A), Insecure-Ambivalent/Resistant (Group C), Insecure-Disorganized (Group D).",
          "Secure (B): Uses caregiver as secure base to explore; distressed upon separation; seeks contact and is easily comforted upon reunion, returning to play.",
          "Insecure-Avoidant (A): Explores without using parent as secure base; shows minimal outward distress on separation; actively avoids or ignores caregiver upon reunion; internal physiological arousal is high.",
          "Insecure-Ambivalent (C): Clings before separation; intensely distressed on separation; on reunion, seeks proximity but combines it with angry resistance/refusal to be soothed; fails to resume exploration.",
          "Insecure-Disorganized (D): Displays contradictory, disoriented, or apprehensive behaviors (freezing, approaching while turned away, falling prone); lacks an organized strategy ('fright without solution')."
        ],
        modelAnswer: "The Strange Situation Protocol (Ainsworth; Main & Solomon) identifies four infant attachment classifications based on the infant's ability to balance exploration and attachment proximity under stress:\n\n1. Secure (Group B): The infant uses the caregiver as a secure base from which to explore the environment. Upon separation, the infant shows visible distress. Upon reunion, the infant actively seeks physical contact or proximity, is readily comforted and calmed by the caregiver, and smoothly resumes exploratory play.\n\n2. Insecure-Avoidant (Group A): The infant focuses defensively on toys and the physical environment, demonstrating minimal outward distress upon separation. Upon reunion, the infant actively avoids, ignores, or turns away from the caregiver, maintaining physical distance. Heart rate and cortisol data demonstrate high internal physiological arousal despite the calm exterior.\n\n3. Insecure-Ambivalent/Resistant (Group C): The infant shows anxiety even prior to separation, clinging to the parent and failing to explore. Separation triggers intense, vocal distress. Upon reunion, the infant seeks proximity but displays petulant anger, resisting comforting (e.g., hitting, arching away), remaining inconsolable and unable to return to play.\n\n4. Insecure-Disorganized (Group D): The infant lacks a coherent, organized behavioral strategy. When distressed, they exhibit contradictory or alarmed behaviors in the caregiver's presence—such as freezing mid-motion, approaching while averting gaze, or dropping to the floor. This occurs when the caregiver is experienced as frightening or frightened ('fright without solution')."
      },
      {
        id: "sa_02",
        title: "SAQ 2: Adult Attachment Interview (AAI) Discourse Analysis & Grice's Maxims",
        question: "Explain how Mary Main's Adult Attachment Interview (AAI) evaluates an adult's state of mind with respect to attachment. Contrast the linguistic discourse markers of Dismissing (Ds) and Preoccupied (E) individuals with reference to Grice's Maxims of Cooperative Discourse.",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Defines AAI as assessing current state of mind / representation of attachment rather than historical accuracy of events.",
          "Mentions Grice's 4 Maxims: Quality (be truthful/have evidence), Quantity (be succinct yet complete), Relation (be relevant), Manner (be clear and orderly).",
          "Dismissing (Ds): Violates Quality (claims parents were 'wonderful' with no evidence, or contradicts positive adjectives with memories of harshness) and Quantity (overly brief, claims inability to remember childhood).",
          "Preoccupied (E): Violates Quantity (excessively long, rambling narratives, run-on sentences) and Relation (loses track of question, brings past grievances into present room, uncontained anger)."
        ],
        modelAnswer: "The Adult Attachment Interview (AAI; Mary Main) evaluates an adult's current 'state of mind with respect to attachment' rather than the objective historical facts of childhood. Coding is rooted in the structural coherence of the participant's narrative, evaluated against H.P. Grice's four Maxims of Cooperative Discourse: Quality (truthfulness and empirical grounding), Quantity (succinctness and completeness), Relation (relevance), and Manner (clarity and orderliness).\n\nDismissing (Ds) individuals employ deactivating attachment strategies. In their discourse, they violate the Maxim of Quality by idealizing parents (e.g., 'Mother was an angel') while failing to provide supporting episodic memories, or recounting events that directly contradict the claim. They also violate the Maxim of Quantity by offering overly terse responses, downplaying the significance of relationships, and repeatedly claiming an inability to recall early childhood.\n\nPreoccupied (E) individuals employ hyperactivating strategies. In their discourse, they violate the Maxim of Quantity by providing excessively long, rambling, uncontained narratives filled with run-on sentences. They violate the Maxim of Relation by digressing into angry, fresh grievances against parents as if childhood conflicts are occurring in the room today. Their speech is characterized by vague jargon, grammatical entanglements, and affective flooding that derails conversational relevance."
      },
      {
        id: "sa_03",
        title: "SAQ 3: Reflective Functioning, Mentalization, and the RFQ-8",
        question: "Define the construct of Reflective Functioning (Fonagy & Target) and explain how it moderates the impact of early adverse attachment experiences. How does the Reflective Functioning Questionnaire (RFQ-8) assess certainty and uncertainty regarding mental states?",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Defines Reflective Functioning (RF) / Mentalization: The operational capacity to understand behavior (self and others) in terms of intentional internal mental states (desires, beliefs, feelings, thoughts).",
          "Explains moderating / resilience role: Robust RF prevents the automatic intergenerational transmission of trauma; allows an individual to understand abusive parents without identifying with them.",
          "Explains RFQ-8 subscales: Measures (1) Certainty about mental states and (2) Uncertainty about mental states.",
          "Distinguishes adaptive RF (healthy curiosity, recognizing minds are somewhat opaque) from pathological hypercertainty (teleological/psychic equivalence: 'I know what you're thinking') and hypomentalizing (complete bafflement: 'People's minds are complete mysteries')."
        ],
        modelAnswer: "Reflective Functioning (RF), formulated by Peter Fonagy and Mary Target, is the operationalized cognitive-affective capacity to mentalize—that is, to perceive and interpret human behavior (one's own and others') in terms of intentional mental states such as feelings, desires, beliefs, goals, and intentions.\n\nRF serves as a powerful resilience mechanism and developmental buffer against adversity. When a child experiences insensitive or abusive parenting, robust RF allows them to differentiate their own inner reality from the caregiver's pathology (e.g., 'My father shouted because he was distressed, not because I am inherently bad'). Furthermore, parents who have achieved high reflective functioning can break the intergenerational transmission of insecure attachment, raising secure children despite their own difficult upbringings ('earned security').\n\nThe Reflective Functioning Questionnaire (RFQ-8) assesses this capacity across two 4-item subscales: Certainty (RFQ_C) and Uncertainty (RFQ_U) about mental states. \n- Adaptive mentalizing is marked by moderate certainty: an awareness that one's own feelings are knowable, coupled with a genuine humility that another person's inner experience cannot be known with 100% certainty.\n- Pathological distortions appear at the extremes: Hypercertainty (excessive certainty where the individual presumes telepathic knowledge of others' motives, seen in BPD/paranoia) and Hypomentalizing / Chronic Uncertainty (scoring high on items like 'People's thoughts are a mystery to me', reflecting an inability to comprehend relational motives)."
      },
      {
        id: "sa_04",
        title: "SAQ 4: Differential Diagnosis of Reactive Attachment Disorder (RAD) vs. Disinhibited Social Engagement Disorder (DSED)",
        question: "Critically contrast Reactive Attachment Disorder (RAD) and Disinhibited Social Engagement Disorder (DSED) in terms of clinical presentation, behavioral markers, and long-term trajectory following placement in a nurturing environment.",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Identifies shared etiology: Both require severe pathogenic care / gross social deprivation before age 2 (developmental age $\\ge 9$ months).",
          "RAD presentation: Inhibited, emotionally withdrawn behavior toward caregivers; rarely seeks comfort when distressed and rarely responds to comfort; blunted positive affect; episodes of unexplained fear/sadness.",
          "DSED presentation: Disinhibited, indiscriminate social friendliness; absence of reticence with unfamiliar adults; overly familiar physical/verbal behavior; fails to check back with caregiver; leaves with strangers.",
          "Differential trajectory: RAD symptoms typically remediate significantly once placed in a stable, sensitive, secure caregiving home; DSED symptoms frequently persist into adolescence even with high-quality parenting."
        ],
        modelAnswer: "Although both Reactive Attachment Disorder (RAD) and Disinhibited Social Engagement Disorder (DSED) arise from severe early pathogenic neglect or institutional deprivation in infancy (DSM-5 Criterion C), they represent distinct clinical and behavioral phenotypes with divergent developmental trajectories:\n\n1. Clinical Presentation & Proximity Seeking:\n- RAD is characterized by an internalizing, inhibited failure of attachment signaling. The child rarely or minimally seeks comfort when hurt or frightened, and rarely responds to comfort when offered. They display 'frozen watchfulness', blunted positive affect, and unprovoked bouts of fear or irritability during benign interactions.\n- DSED is characterized by an externalizing, indiscriminate disinhibition of social boundaries. The child shows an absence of normal stranger reticence, displaying overly familiar physical or verbal boundaries (e.g., hugging strangers, sitting on unfamiliar adults' laps), failing to check back with the caregiver, and willingly departing with unfamiliar adults.\n\n2. Differential Trajectory:\n- Clinical research demonstrates that when children with RAD are placed into a permanent, highly responsive, and nurturing adoptive/foster home, their withdrawn behaviors generally remediate substantially and relatively quickly as an attachment bond forms.\n- In contrast, DSED behaviors often show persistent stability into middle childhood and adolescence despite excellent caregiving. In older children, DSED manifests as superficial, intrusively peer relationships, difficulty with social boundaries, and increased vulnerability to interpersonal exploitation."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Exam Essay Prompt",
      prompt: "“Attachment theory provides a powerful developmental framework for understanding human distress and psychopathology across the lifespan.”\n\nCritically evaluate this statement. In your answer, you must:\n1. Outline the developmental trajectory of attachment from infancy through adulthood, detailing the translation of infant behavioral patterns into adult states of mind on the Adult Attachment Interview (AAI).\n2. Discuss how attachment disruptions and affect regulation failures contribute to adult psychopathology (with specific reference to Borderline Personality traits or relational trauma).\n3. Detail the clinical implications for psychotherapy, including how the therapist functions as an attachment figure, the management of ruptures and endings, and evidence-based interventions.\n4. Critically reflect on the limitations of Western attachment paradigms when applied across diverse cultural contexts.",
      suggestedWordCount: "1200 - 1500 words (40-45 minutes in exam)",
      scoringRubric: [
        {
          criterion: "Theoretical Foundations & Lifespan Trajectory (25%)",
          indicators: "Accurately articulates Bowlby's internal working models; Ainsworth's Strange Situation (Groups A, B, C, D); Mary Main's AAI classifications (Autonomous, Dismissing, Preoccupied, Unresolved); explains Grice's Maxims of discourse coherence."
        },
        {
          criterion: "Psychopathology & Affect Regulation (25%)",
          indicators: "Explains hypoactivation (avoidant/dismissing) vs hyperactivation (anxious/preoccupied); details disorganized attachment as 'fright without solution' leading to mentalization failure (Fonagy) and borderline personality/complex trauma vulnerabilities."
        },
        {
          criterion: "Therapeutic Process & Interventions (25%)",
          indicators: "Examines therapist as a temporary attachment figure / secure base; explores managing ruptures, interruptions, and terminations; cites specific evidence-based treatments (Circle of Security, Mentalization-Based Therapy [MBT], Child-Parent Psychotherapy [CPP], DBT skills); references clinical wisdom (e.g. interrupting the whirlwind, decoding somatic states)."
        },
        {
          criterion: "Critical Evaluation & Cultural Context (25%)",
          indicators: "Identifies limitations of standard Western attachment models (e.g., Westerman's critique regarding Indigenous Australian kinship, collective child-rearing, and multiple caregivers); discusses how Western attachment instruments can pathologize culturally normative interdependence."
        }
      ],
      modelEssayOutline: `
# Model Essay Structure & Key Theoretical Content

## Introduction (~150 words)
- Define attachment theory as an ethological-developmental framework (Bowlby) mapping proximity-seeking for survival into internal working models (IWMs) of self and others.
- Thesis: Early attachment organizations fundamentally shape lifespan affect regulation, social cognition (mentalizing), and psychopathological vulnerabilities, providing clinicians with both a diagnostic map and a relational mechanism for therapeutic change.

## 1. Developmental Trajectory: Infancy to Adult Discourse (~350 words)
- **Infant Strange Situation (Ainsworth & Main)**:
  - Secure (B) -> Explores from secure base; soothed upon reunion.
  - Insecure-Avoidant (A) -> Suppresses outward distress; avoids caregiver; high internal cortisol/cardiac tone.
  - Insecure-Ambivalent (C) -> Clings, distressed; resistant/inconsolable on reunion.
  - Insecure-Disorganized (D) -> Behavioral breakdown, freezing, approaching while turned away ('fright without solution').
- **Translation to Adult Attachment Interview (Mary Main)**:
  - Secure -> Autonomous (F): Coherent, collaborative discourse grounded in Grice's Maxims.
  - Avoidant -> Dismissing (Ds): Deactivation; violates Maxim of Quality (unsubstantiated idealization) and Quantity (claimed memory gaps).
  - Ambivalent -> Preoccupied (E): Hyperactivation; violates Maxim of Quantity (rambling, uncontained discourse) and Relation (entangled active anger).
  - Disorganized -> Unresolved (U): Lapses in monitoring reasoning and discourse during discussions of trauma/loss.

## 2. Attachment Disruption, Affect Regulation, and Psychopathology (~350 words)
- **Affect Regulation Models**:
  - Deactivating / Hypoactivating: Shuts down affect, intellectualizes, somatic vulnerabilities (tension, insomnia).
  - Hyperactivating: Amplifies distress, broadcasts helplessness, chronic abandonment panic.
- **Mentalization & Borderline Pathology (Fonagy & Target)**:
  - Secure attachment fosters reflective functioning (understanding minds in terms of mental states).
  - Disorganized attachment shatters reflective functioning. Under interpersonal threat, the individual falls into psychic equivalence (internal feelings = concrete reality) and pretend mode (empty intellectualization).
  - Predicts Borderline Personality Disorder: severe affective lability, fear of abandonment, and trauma-reenactment in relationships.

## 3. Clinical Implications: The Therapeutic Relationship & Interventions (~350 words)
- **Therapist as Attachment Figure (Dr. Matthew McKenzie's framework)**:
  - Therapy provides a 'secure base and safe haven' (Bowlby) allowing corrective emotional experiences.
  - Clients will activate their attachment models with the therapist: Preoccupied clients demand reassurance and become a 'whirlwind'; Dismissing clients intellectualize and maintain distance; Disorganized clients alternate between idealizing the therapist as a savior and fearing them as an abuser.
  - **Clinical Technique**:
    - *For Preoccupied*: The therapist must gently interrupt the verbal whirlwind with consent ('I notice anxiety rising right now; let's pause and observe what it is making you do') rather than colluding with flooding.
    - *For Dismissing*: Connect thoughts back to emotional bodily sensations without premature pressure.
  - **Ruptures, Interruptions, and Termination**: Ruptures are inevitable and crucial for growth; repairing ruptures proves that anger does not destroy relationships. Terminations must be processed as significant attachment separations.
  - **Evidence-Based Models**: Circle of Security (parental sensitivity), Mentalization-Based Therapy (MBT for BPD), Child-Parent Psychotherapy (CPP for dyadic trauma).

## 4. Cultural Critique: Western Bias vs. Collective Caregiving (~200 words)
- Western attachment theory assumes a single, nuclear maternal attachment figure (monotropy).
- **First Nations & Cross-Cultural Critiques (Tracy Westerman, 2026; Dudgeon et al.)**:
  - In Aboriginal Australian and collectivist cultures, child-rearing is shared across an extended kinship network (grandmothers, aunties, community elders).
  - Distributing attachment across multiple caregivers is protective, not diffuse or disorganized.
  - Clinicians must avoid misdiagnosing healthy Indigenous collective child-rearing as DSED or maternal neglect.

## Conclusion (~100 words)
- Summarize that attachment theory across the lifespan is not deterministic but probabilistic.
- Its greatest clinical gift is shifting clinical inquiry from 'What is wrong with you?' to 'What happened to your attachment bonds, and how can we rebuild relational safety today?'
`
    }
  }
};
