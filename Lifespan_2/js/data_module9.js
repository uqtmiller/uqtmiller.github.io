// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 9: Personality Disorders & DBT
const MODULE_9_DATA = {
  moduleId: 9,
  title: "Module 9: Personality Disorders & Dialectical Behavior Therapy",
  subtitle: "Cluster A/B/C Nosology, PAI / MMPI-3 / MCMI-IV Assessment, Biosocial Theory, DBT Skills & Schema Therapy",
  coordinator: "Ned Chandler-Mather (Clinical Psychologist, MAPS, Lecturer)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "The 3-Cluster Framework & General Personality Disorder Criteria",
      author: "DSM-5-TR / Ned Chandler-Mather",
      summary: "Personality disorders represent enduring patterns of inner experience and behavior that deviate markedly from cultural expectations, pervasive and inflexible across contexts, with onset in adolescence or early adulthood, leading to distress or impairment. Classified into 3 clusters: Cluster A (Odd/Eccentric: Paranoid, Schizoid, Schizotypal), Cluster B (Dramatic/Emotional/Erratic: Antisocial, Borderline, Histrionic, Narcissistic), and Cluster C (Anxious/Fearful: Avoidant, Dependent, OCPD). The Alternative Model (AMPD, Section III) evaluates personality functioning (Self & Interpersonal) and 5 maladaptive trait domains."
    },
    {
      title: "Psychometric Assessment: PAI, MMPI-3 & MCMI-IV",
      author: "Morey (PAI) / Ben-Porath (MMPI-3) / Millon (MCMI-IV)",
      summary: "Multi-scale objective inventories provide empirical profiling: The Personality Assessment Inventory (PAI, 344 items, 22 non-overlapping scales) features the Borderline Features (BOR) scale measuring affective instability, identity problems, negative relationships, and self-harm. The MCMI-IV (195 items) aligns with Millon's evolutionary model and DSM categories using base rate scores and Grossman Facet scales. Psychometrics guide formulation but must never replace longitudinal clinical interviews."
    },
    {
      title: "Linehan's Biosocial Theory & Dialectical Behavior Therapy (DBT)",
      author: "Marsha Linehan / Ned Chandler-Mather",
      summary: "BPD arises from a transaction between a biological emotional vulnerability (high sensitivity, high reactivity, slow return to baseline) and a pervasively invalidating developmental environment. DBT synthesizes behavioral change with radical acceptance/validation across four modular skills: Mindfulness, Distress Tolerance (TIPP, STOP, ACCEPTS), Emotion Regulation, and Interpersonal Effectiveness (DEAR MAN). Prioritizes a strict treatment hierarchy: Life-threatening > Therapy-interfering > Quality-of-life behaviors."
    },
    {
      title: "Young's Schema Therapy Mode Model & Limited Reparenting",
      author: "Jeffrey Young / Arnoud Arntz",
      summary: "For complex characterological problems, Schema Therapy maps active emotional states ('modes'): Vulnerable Child (abandonment, defectiveness), Angry Child, Punitive/Demanding Parent (internalized criticism), and Detached Protector (numbing, substance use, avoidance). The therapist deploys 'Limited Reparenting' within professional boundaries, experiential imagery rescripting, and chair work to strengthen the Healthy Adult mode."
    },
    {
      title: "Millon's Evolutionary Biosocial Model of Personality",
      author: "Theodore Millon (MCMI-IV Framework)",
      summary: "Personality styles are conceptualized as evolutionary ecological adaptations along three polarities: Pleasure-Pain (survival/enhancement), Active-Passive (adaptation mode), and Self-Other (reproductive strategies). The MCMI-IV operationalizes this model with 15 clinical personality pattern scales, 7 clinical syndrome scales, and Grossman Facet subscales reflecting behavioral, interpersonal, and cognitive levels of personality expression."
    }
  ],

  // Deep-Dive Content Review Sections (Extracted directly from Ned Chandler-Mather's Lecture Handouts)
  contentReviewSections: [
    {
      id: "mod9_biosocial_dbt_hierarchy",
      title: "Linehan's Biosocial Theory & DBT Behavioral Target Hierarchy",
      icon: "⚡",
      badge: "DBT Foundations (Slides 54–55)",
      contentHtml: `
        <p style="margin-bottom: 12px;">Borderline Personality Disorder is formulated through Marsha Linehan's <strong>Biosocial Theory</strong>:</p>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 14px;">
          <strong style="color: #0f172a; font-size: 14.5px;">The Transactional Biosocial Loop:</strong>
          <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">BPD emerges from a continuous, reciprocal transaction between: (1) <strong>Biological Emotional Vulnerability</strong> (innate high sensitivity to emotional stimuli, extreme emotional intensity, and slow return to baseline); and (2) A <strong>Pervasively Invalidating Environment</strong> (caregivers dismiss, punish, or trivialize emotional expressions, or respond erratically only to extreme escalations). The individual never learns to modulate arousal, self-validate, or tolerate distress, leading to pervasive emotion dysregulation.</p>
        </div>
        <div style="background: #fff; border-left: 4px solid var(--primary); padding: 14px 18px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <strong style="color: #0f172a; font-size: 14.5px;">Linehan's Stage 1 DBT Treatment Target Hierarchy (Slide 55):</strong>
          <ol style="font-size: 13.5px; color: #475569; margin-left: 20px; margin-top: 6px; line-height: 1.6;">
            <li><strong>Life-Threatening Behaviors:</strong> Imminent suicidal ideation, intent, planning, self-harm, and cutting must be targeted first before any other session agenda.</li>
            <li><strong>Therapy-Interfering Behaviors:</strong> Behaviors by client or therapist that compromise therapy (missing sessions, coming late, non-compliance with diary cards, emotional burnout).</li>
            <li><strong>Quality-of-Life Interfering Behaviors:</strong> Severe issues maintaining housing, severe substance abuse, extreme relationship crises, financial insolvency.</li>
            <li><strong>Skills Acquisition:</strong> Generalizing core DBT skills into daily life (Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness).</li>
          </ol>
        </div>
      `
    },
    {
      id: "mod9_psychometric_profiling",
      title: "Comparative Psychometric Profiling: PAI, MMPI-3 & MCMI-IV",
      icon: "📊",
      badge: "Assessment Instruments (Slides 31–34)",
      contentHtml: `
        <p style="margin-bottom: 12px;">Psychologists utilize multi-scale standardized inventories to profile personality dysfunction. Each instrument offers unique strengths:</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14px;">Personality Assessment Inventory (PAI)</strong>
            <p style="font-size: 13px; color: #475569; margin-top: 4px;">
              &bull; <strong>Length:</strong> 344 items (50–60 mins).<br>
              &bull; <strong>Scales:</strong> 22 non-overlapping scales (4 validity, 11 clinical, 5 treatment, 2 interpersonal).<br>
              &bull; <strong>Clinical Utility:</strong> Outstanding validity indicators (Negative Impression Management). The <em>Borderline Features (BOR)</em> scale specifically evaluates affective instability, identity problems, negative relationships, and self-harm.
            </p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14px;">MMPI-3 (Ben-Porath)</strong>
            <p style="font-size: 13px; color: #475569; margin-top: 4px;">
              &bull; <strong>Length:</strong> 344 items (1–2 hours).<br>
              &bull; <strong>Scales:</strong> 10 clinical scales, 9 validity scales (faking good/bad), and content scales.<br>
              &bull; <strong>Clinical Utility:</strong> Deep assessment of demoralization, dysfunctional negative emotions, internalizing vs externalizing behavior, and somatic complaints.
            </p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14px;">MCMI-IV (Millon)</strong>
            <p style="font-size: 13px; color: #475569; margin-top: 4px;">
              &bull; <strong>Length:</strong> 195 items (25–30 mins).<br>
              &bull; <strong>Scales:</strong> 25 scales (15 clinical personality patterns, 7 clinical syndromes, 3 modifying indices).<br>
              &bull; <strong>Clinical Utility:</strong> Direct alignment with Millon's evolutionary personality theory and DSM clusters, utilizing Base Rate (BR) scores and Grossman Facet scales.
            </p>
          </div>
        </div>
      `
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "BPD",
      code: "DSM-5 301.83 (F60.3)",
      name: "Borderline Personality Disorder (BPD)",
      type: "Cluster B Personality Disorder (Emotional / Erratic)",
      ageRange: "Adolescence through Adulthood (Prevalence 1.6 - 5.9%)",
      coreDefinition: "A pervasive pattern of instability of interpersonal relationships, self-image, and affects, and marked impulsivity, beginning by early adulthood and present in a variety of contexts.",
      dsmCriteria: [
        "A pervasive pattern of instability of interpersonal relationships, self-image, and affects, and marked impulsivity, as indicated by 5 (or more) of the following:",
        "1. Frantic efforts to avoid real or imagined abandonment (excluding suicidal or self-mutilating behavior).",
        "2. A pattern of unstable and intense interpersonal relationships characterized by alternating between extremes of idealization and devaluation ('splitting').",
        "3. Identity disturbance: markedly and persistently unstable self-image or sense of self.",
        "4. Impulsivity in at least two areas that are potentially self-damaging (e.g., spending, sex, substance abuse, reckless driving, binge eating).",
        "5. Recurrent suicidal behavior, gestures, or threats, or self-mutilating behavior (non-suicidal self-injury).",
        "6. Affective instability due to a marked reactivity of mood (e.g., intense episodic dysphoria, irritability, or anxiety usually lasting a few hours and only rarely more than a few days).",
        "7. Chronic feelings of emptiness.",
        "8. Inappropriate, intense anger or difficulty controlling anger (e.g., frequent displays of temper, constant anger, recurrent physical fights).",
        "9. Transient, stress-related paranoid ideation or severe dissociative symptoms."
      ],
      howToDiagnose: [
        "Structured clinical interview: SCID-5-PD (Structured Clinical Interview for DSM-5 Personality Disorders).",
        "Personality Assessment Inventory (PAI): Elevated Borderline Features (BOR) scale (specifically BOR-A Affective Instability, BOR-I Identity Problems, BOR-N Negative Relationships, BOR-S Self-Harm).",
        "Millon Clinical Multiaxial Inventory-IV (MCMI-IV): Clinically elevated Borderline Scale (Scale C).",
        "Longitudinal assessment over time: Differentiating baseline affective lability from episodic mood disorders (e.g., Bipolar II)."
      ],
      factorsLookedFor: [
        "Rejection & Abandonment Hypersensitivity: A perceived slight (e.g., therapist ending session on time, partner texting late) triggers intense panic and abandonment terror.",
        "Splitting (Black-and-White Dichotomy): Viewing individuals as all-good angels or all-bad persecutors with rapid flipping.",
        "Emotion Dysregulation: Emotions escalate from 0 to 100 within seconds; prolonged recovery back to physiological baseline.",
        "Non-Suicidal Self-Injury (NSSI): Cutting, burning, or hitting self utilized as an emotion regulation strategy to relieve unbearable psychic pain or terminate dissociation."
      ],
      potentialTreatments: [
        "Dialectical Behavior Therapy (DBT / First-Line Gold Standard): Full comprehensive model (weekly individual therapy, weekly 2.5-hour skills training group, 24/7 between-session phone coaching, therapist consultation team).",
        "Schema Therapy (Young / Arntz): Mode work targeting the Vulnerable Child, evicting the Punitive Parent, and building the Healthy Adult through limited reparenting.",
        "Mentalization-Based Treatment (MBT, Bateman & Fonagy): Enhancing the capacity to mentalize (understand mental states underlying behavior) during interpersonal arousal.",
        "Transference-Focused Psychotherapy (TFP, Kernberg): Resolving internalized split object representations."
      ],
      clinicalPearl: "Core Dialectic: Always balance Radical Validation with an uncompromising demand for Behavioral Change. If you only validate, the patient feels understood but never learns new skills; if you only push change, the patient feels invalidated, precipitating crisis."
    },
    {
      id: "ASPD",
      code: "DSM-5 301.7 (F60.2)",
      name: "Antisocial Personality Disorder (ASPD)",
      type: "Cluster B Personality Disorder (Dramatic / Erratic)",
      ageRange: "Adulthood (Must be at least 18 years; evidence of Conduct Disorder before age 15)",
      coreDefinition: "A pervasive pattern of disregard for and violation of the rights of others, occurring since age 15 years, characterized by deceitfulness, impulsivity, aggressiveness, and lack of remorse.",
      dsmCriteria: [
        "Criterion A: A pervasive pattern of disregard for and violation of the rights of others, occurring since age 15 years, as indicated by 3 (or more) of the following:",
        "1. Failure to conform to social norms with respect to lawful behaviors, as indicated by repeatedly performing acts that are grounds for arrest.",
        "2. Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure.",
        "3. Impulsivity or failure to plan ahead.",
        "4. Irritability and aggressiveness, as indicated by repeated physical fights or assaults.",
        "5. Reckless disregard for safety of self or others.",
        "6. Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behavior or honor financial obligations.",
        "7. Lack of remorse, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another.",
        "Criterion B: The individual is at least 18 years of age.",
        "Criterion C: There is evidence of Conduct Disorder with onset before age 15 years.",
        "Criterion D: The occurrence of antisocial behavior is not exclusively during the course of schizophrenia or bipolar disorder."
      ],
      howToDiagnose: [
        "Collateral records and historical verification: Child protection files, criminal history, school records confirming Conduct Disorder before age 15.",
        "Psychopathy Checklist-Revised (PCL-R, Hare): Assessing Factor 1 (Interpersonal/Affective: glibness, grandiosity, pathological lying, callous lack of empathy) and Factor 2 (Social Deviance: impulsivity, irresponsibility, early behavioral problems).",
        "PAI: Elevated Antisocial Features (ANT) scale (ANT-A Antisocial Behaviors, ANT-E Egocentricity, ANT-S Sensation Seeking).",
        "Crucial caution: Differentiating true characterological ASPD from criminal/survival behavior driven by systemic poverty or cultural oppression."
      ],
      factorsLookedFor: [
        "Callous-Unemotional Traits: Complete indifference to the pain of victims; rationalizing exploitation ('If they were stupid enough to leave their door unlocked, they deserved it').",
        "Superficial Charm & Manipulation: Highly engaging, glib, flattering presentation initially designed to secure personal advantage or deceive evaluators.",
        "Impulsive Stimulation-Seeking: Low physiological autonomic arousal leading to sensation seeking through high-risk gambling, substance abuse, and dangerous driving.",
        "History of Childhood Animal Cruelty / Truancy: Diagnostic requirement for childhood Conduct Disorder features before age 15."
      ],
      potentialTreatments: [
        "Contingency Management & Structured Behavioral Programs: Strict, immediate, transparent rules and tangible positive/negative contingencies; appeal to enlightened self-interest.",
        "Cognitive Behavioral Therapy (CBT for Offending): Targeting cognitive distortions that justify criminal behavior; problem-solving skills training.",
        "Relapse Prevention & Substance Abuse Treatment: Addressing comorbid substance dependence which heavily exacerbates violent recidivism.",
        "Risk Assessment & Multi-Agency Management: Realistic expectations; focus on public safety, harm minimization, and behavioral boundary enforcement."
      ],
      clinicalPearl: "Do not appeal to empathy or guilt in ASPD; it is ineffective. Instead, frame therapeutic goals in terms of enlightened self-interest: 'Following this parole plan keeps you out of prison and in control of your own life.'"
    },
    {
      id: "NPD",
      code: "DSM-5 301.81 (F60.81)",
      name: "Narcissistic Personality Disorder (NPD)",
      type: "Cluster B Personality Disorder (Dramatic / Erratic)",
      ageRange: "Adulthood (Prevalence up to 6.2%, more common in males)",
      coreDefinition: "A pervasive pattern of grandiosity (in fantasy or behavior), need for admiration, and lack of empathy, beginning by early adulthood and present in a variety of contexts.",
      dsmCriteria: [
        "A pervasive pattern of grandiosity (in fantasy or behavior), need for admiration, and lack of empathy, as indicated by 5 (or more) of the following:",
        "1. Has a grandiose sense of self-importance (e.g., exaggerates achievements and talents, expects to be recognized as superior without commensurate achievements).",
        "2. Is preoccupied with fantasies of unlimited success, power, brilliance, beauty, or ideal love.",
        "3. Believes that he or she is 'special' and unique and can only be understood by, or should associate with, other special or high-status people.",
        "4. Requires excessive admiration.",
        "5. Has a sense of entitlement (i.e., unreasonable expectations of especially favorable treatment or automatic compliance with his/her expectations).",
        "6. Is interpersonally exploitative (i.e., takes advantage of others to achieve his or her own ends).",
        "7. Lacks empathy: is unwilling to recognize or identify with the feelings and needs of others.",
        "8. Is often envious of others or believes that others are envious of him or her.",
        "9. Shows arrogant, haughty behaviors or attitudes."
      ],
      howToDiagnose: [
        "SCID-5-PD interview; MCMI-IV Narcissistic Scale (Scale 5).",
        "Assessment of two primary clinical subtypes: (1) Overt / Grandiose Narcissism (arrogant, entitled, exploitative, charming), and (2) Covert / Vulnerable Narcissism (hypersensitive, defensive, harboring hidden grandiose entitlement masked by martyrdom and resentment).",
        "Response to perceived criticism or failure: Assessing for 'narcissistic injury' followed by intense 'narcissistic rage' or sudden collapse into severe depression.",
        "Evaluating interpersonal history: Pattern of using colleagues, partners, and subordinates as 'narcissistic supply' to validate self-worth."
      ],
      factorsLookedFor: [
        "Fragile Underlying Self-Esteem: Grandiosity serves as a psychological defense armor shielding a fragile, shame-filled core.",
        "Entitlement: Expects queues to be bypassed, appointments to be rescheduled around them, and rules to apply only to 'ordinary' people.",
        "Empathy Deficits: Able to intellectualize others' emotions (cognitive empathy) but unwilling/unable to resonate with their emotional pain (affective empathy).",
        "Devaluation of Therapists: May initially flatter the therapist ('I only see the top expert') and subsequently devalue them when the therapist fails to provide total admiration."
      ],
      potentialTreatments: [
        "Schema Therapy for Narcissism (Young / Bamelis): Bypassing the Self-Aggrandizer coping mode to access the Lonely, Deprived Child mode; empathic confrontation.",
        "Mentalization-Based Therapy (MBT): Developing true curiosity about the independent internal mental states of other people.",
        "Transference-Focused Psychotherapy (TFP): Working with grandiosity and devaluation within the therapeutic relationship.",
        "Cognitive Restructuring: Challenging core beliefs of exceptionalism ('I am only worthwhile if I am the most brilliant person in the room')."
      ],
      clinicalPearl: "Use 'Empathic Confrontation' in Schema Therapy: Validate the emotional vulnerability beneath the grandiosity before pointing out the interpersonal harm: 'I can see how terrified you were of being ordinary, but when you humiliated your assistant, you destroyed a working relationship.'"
    },
    {
      id: "HPD",
      code: "DSM-5 301.50 (F60.4)",
      name: "Histrionic Personality Disorder (HPD)",
      type: "Cluster B Personality Disorder (Dramatic / Emotional)",
      ageRange: "Adulthood (Prevalence ~1.8%, equal gender distribution)",
      coreDefinition: "A pervasive pattern of excessive emotionality and attention seeking, beginning by early adulthood and present in a variety of contexts.",
      dsmCriteria: [
        "A pervasive pattern of excessive emotionality and attention seeking, as indicated by 5 (or more) of the following:",
        "1. Is uncomfortable in situations in which he or she is not the center of attention.",
        "2. Interaction with others is often characterized by inappropriate sexually seductive or provocative behavior.",
        "3. Displays rapidly shifting and shallow expression of emotions.",
        "4. Consistently uses physical appearance to draw attention to self.",
        "5. Has a style of speech that is excessively impressionistic and lacking in detail (e.g., strong opinions expressed dramatically with zero concrete supporting facts).",
        "6. Shows self-dramatization, theatricality, and exaggerated expression of emotion.",
        "7. Is suggestible (i.e., easily influenced by others or circumstances).",
        "8. Considers relationships to be more intimate than they actually are (e.g., referring to a casual acquaintance as 'my dearest, closest soulmate')."
      ],
      howToDiagnose: [
        "SCID-5-PD interview; MCMI-IV Histrionic Scale (Scale 4).",
        "Clinical observation during interview: Theatrical delivery, dramatic sighing, seductive or overly familiar rapport, emotional displays that vanish in seconds.",
        "Speech analysis: Impressionistic speech (e.g., describes a movie as 'utterly transcendent and life-altering' but cannot name a single plot point).",
        "Differential exclusion of BPD: Absence of self-harm, chronic emptiness, identity disintegration, or severe dissociative paranoia."
      ],
      factorsLookedFor: [
        "Center of Attention Drive: Feels deeply uncomfortable, depressed, or invisible when not holding court in a social gathering.",
        "Shallow Affect: Emotions are expressed at theatrical volume but lack genuine emotional depth; can laugh through tears within seconds.",
        "Seductive Charm: Uses flirtatious charm and physical appearance to secure validation and prevent being ignored.",
        "Overestimating Intimacy: Quickly assumes intense intimacy with new therapists, doctors, or acquaintances, causing interpersonal boundary problems."
      ],
      potentialTreatments: [
        "Cognitive Therapy for Histrionic Personality (Beck): Identifying automatic thoughts ('I must be the center of attention or I am unlovable'); training in objective, fact-based communication.",
        "Clarification Therapy: Gently prompting the patient to provide concrete details when using impressionistic generalizations.",
        "Assertiveness & Interpersonal Boundaries Training: Learning direct, honest communication rather than seductive manipulation to meet emotional needs.",
        "Emotion Regulation Skills: Learning to tolerate being one of many rather than the central figure in a group."
      ],
      clinicalPearl: "When interviewing someone with HPD, always ask for concrete details: 'You said the party was horrific; what specifically happened?' Gently training them to replace impressionistic theatricality with factual grounding is therapeutic."
    },
    {
      id: "AVPD",
      code: "DSM-5 301.82 (F60.6)",
      name: "Avoidant Personality Disorder (AvPD)",
      type: "Cluster C Personality Disorder (Anxious / Fearful)",
      ageRange: "Adulthood (Prevalence ~2.4%; equal gender ratio)",
      coreDefinition: "A pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation, beginning by early adulthood and present in a variety of contexts.",
      dsmCriteria: [
        "A pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation, as indicated by 4 (or more) of the following:",
        "1. Avoids occupational activities that involve significant interpersonal contact because of fears of criticism, disapproval, or rejection.",
        "2. Is unwilling to get involved with people unless certain of being liked.",
        "3. Shows restraint within intimate relationships because of the fear of being shamed or ridiculed.",
        "4. Is preoccupied with being criticized or rejected in social situations.",
        "5. Is inhibited in new interpersonal situations because of feelings of inadequacy.",
        "6. Views self as socially inept, personally unappealing, or inferior to others.",
        "7. Is unusually reluctant to take personal risks or to engage in any new activities because they may prove embarrassing."
      ],
      howToDiagnose: [
        "SCID-5-PD; MCMI-IV Avoidant Scale (Scale 2A); PAI Social Detachment / Anxiety scales.",
        "Developmental timeline: History of profound childhood shyness that worsens in adolescence and crystalizes into characterological avoidance in adulthood.",
        "Core cognitive evaluation: Inquiring into whether the patient WANTS friends (crucial distinction from Schizoid PD). AvPD patients yearn desperately for closeness but are terrified of rejection.",
        "Distinction from Social Anxiety Disorder (SAD): AvPD involves a pervasive, deeply held belief of being fundamentally defective, unappealing, and inferior across all life domains."
      ],
      factorsLookedFor: [
        "Longing for Connection: The tragedy of AvPD is deep loneliness; they desperately crave love and companionship, unlike Schizoid individuals who prefer solitude.",
        "Core Defectiveness Schema: Firm conviction that 'If people really get to know me, they will see how pathetic, boring, and repulsive I am.'",
        "Hypervigilance for Rejection: Scans social interactions for microscopic signs of disinterest, taking a distracted glance as absolute proof of contempt.",
        "Occupational Underachievement: Refuses promotions or higher-paying roles because the new position would involve managing meetings or giving presentations."
      ],
      potentialTreatments: [
        "Cognitive Behavioral Therapy for AvPD: Cognitive restructuring of core defectiveness beliefs; in-vivo behavioral experiments testing feared social rejection.",
        "Schema Therapy (Young): Direct work on the 'Defectiveness/Shame' and 'Social Isolation' schemas through imagery rescripting of early childhood bullying.",
        "Graduated Social Skills & Assertiveness Training: Group CBT providing a safe laboratory for experiential social risk-taking.",
        "Compassion-Focused Therapy (CFT, Gilbert): Cultivating self-soothing and self-compassion to soften intense internalized self-criticism."
      ],
      clinicalPearl: "The golden diagnostic key: 'Do you want friends?' A person with Schizoid PD says: 'No, I prefer being alone; people are exhausting.' A person with Avoidant PD says: 'More than anything in the world, but I'm terrified they'll realize how defective I am.'"
    },
    {
      id: "OCPD",
      code: "DSM-5 301.4 (F60.5)",
      name: "Obsessive-Compulsive Personality Disorder (OCPD)",
      type: "Cluster C Personality Disorder (Anxious / Fearful)",
      ageRange: "Adulthood (Prevalence 2.1 - 7.9%, most common PD in general population)",
      coreDefinition: "A pervasive pattern of preoccupation with orderliness, perfectionism, and mental and interpersonal control, at the expense of flexibility, openness, and efficiency.",
      dsmCriteria: [
        "A pervasive pattern of preoccupation with orderliness, perfectionism, and mental and interpersonal control, as indicated by 4 (or more) of the following:",
        "1. Is preoccupied with details, rules, lists, order, organization, or schedules to the extent that the major point of the activity is lost.",
        "2. Shows perfectionism that interferes with task completion (e.g., is unable to complete a project because his/her own overly strict standards are not met).",
        "3. Is excessively devoted to work and productivity to the exclusion of leisure activities and friendships (not accounted for by obvious economic necessity).",
        "4. Is overconscientious, scrupulous, and inflexible about matters of morality, ethics, or values (not accounted for by cultural or religious identification).",
        "5. Is unable to discard worn-out or worthless objects even when they have no sentimental value.",
        "6. Is reluctant to delegate tasks or to work with others unless they submit to exactly his or her way of doing things.",
        "7. Adopts a miserly spending style toward both self and others; money is viewed as something to be hoarded for future catastrophes.",
        "8. Shows rigidity and stubbornness."
      ],
      howToDiagnose: [
        "SCID-5-PD; MCMI-IV Compulsive Scale (Scale 7).",
        "Ego-Syntonic Verification: Inquiring whether the patient views their rules as sensible and correct ('If everyone did things my way, the world would work properly') — distinguishing it from the ego-dystonic distress of OCD.",
        "Collateral reports from spouse or coworkers: Complaining of micro-management, moral tyranny, workaholism, and emotional withholding.",
        "Absence of true obsessions and compulsions: No intrusive ego-dystonic thoughts of contamination, harm, or magical neutralizing rituals."
      ],
      factorsLookedFor: [
        "Ego-Syntonic vs Ego-Dystonic: OCPD traits are seen as virtues (orderly, principled, thorough); OCD obsessions are experienced as alien, intrusive, and unwelcome.",
        "Delegation Inability: Cannot delegate a simple chore (e.g., loading the dishwasher) because others do not do it 'correctly.'",
        "Workaholism: Sacrifices family holidays and weekends for work, feeling immense anxiety when attempting to relax without productive output.",
        "Miserliness & Hoarding: Extreme reluctance to spend money even when wealthy; hoarding broken items because 'they might come in handy one day.'"
      ],
      potentialTreatments: [
        "Cognitive Behavioral Therapy for OCPD: Challenging 'should' and 'must' cognitions; behavioral experiments intentionally producing imperfect work (80% rule).",
        "Acceptance and Commitment Therapy (ACT): Cultivating psychological flexibility; connecting with values beyond work and control.",
        "Schema Therapy: Targeting the 'Unrelenting Standards' and 'Punitiveness' schemas, softening the Demanding Parent mode.",
        "Couples / Family Therapy: Addressing interpersonal friction caused by rigid micro-management and emotional withholding."
      ],
      clinicalPearl: "OCD vs OCPD mnemonic: OCD has True Obsessions and Compulsions that make the patient miserable (ego-dystonic). OCPD has Rules and Rigidity that make everyone else around them miserable (ego-syntonic)!"
    },
    {
      id: "CLUSTER_A",
      code: "DSM-5 301.0 / 301.20 / 301.22",
      name: "Cluster A Personality Disorders (Paranoid, Schizoid, Schizotypal)",
      type: "Cluster A Personality Disorders (Odd / Eccentric Spectrum)",
      ageRange: "Adulthood (Lifetime continuity with schizophrenia spectrum)",
      coreDefinition: "A cluster of disorders characterized by odd, eccentric, detached, or suspicious behavioral patterns that do not reach the threshold of active psychosis.",
      dsmCriteria: [
        "Paranoid Personality Disorder (301.0): Pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent (suspects without basis that others exploit them; preoccupied with loyalty doubts; reads hidden demeaning meanings into benign remarks; bears persistent grudges; perceives attacks on character).",
        "Schizoid Personality Disorder (301.20): Pervasive pattern of detachment from social relationships and restricted range of emotional expression (neither desires nor enjoys close relationships; almost always chooses solitary activities; little interest in sexual experiences; takes pleasure in few activities; lacks close friends; indifferent to praise/criticism; emotional coldness/flattened affect).",
        "Schizotypal Personality Disorder (301.22): Pervasive pattern of social and interpersonal deficits marked by acute discomfort with close relationships, as well as cognitive or perceptual distortions and eccentricities of behavior (ideas of reference; odd beliefs or magical thinking; unusual perceptual experiences; odd thinking and speech; suspiciousness/paranoid ideation; inappropriate affect; eccentric behavior; lack of close friends; excessive social anxiety linked to paranoid fears rather than negative self-evaluation)."
      ],
      howToDiagnose: [
        "SCID-5-PD; MCMI-IV Schizoid (1), Avoidant (2A), and Schizotypal (S) scales.",
        "Critical exclusion criterion: Symptoms must NOT occur exclusively during the course of schizophrenia, bipolar disorder with psychosis, or autism spectrum disorder.",
        "Assessment of reality testing: Delusions and hallucinations are ABSENT (or restricted to transient, stress-related ideas of reference and perceptual illusions lasting minutes to hours).",
        "Differential from ASD: Schizotypal features involve magical thinking and eccentric beliefs; ASD involves sensory processing differences and early childhood developmental onset."
      ],
      factorsLookedFor: [
        "Paranoid PD: Constantly expecting betrayal; reluctant to confide in therapists due to fear information will be used against them; hypervigilant body posture.",
        "Schizoid PD: 'You can knock, but nobody's home'; genuine lack of interest in romance, friendship, or social praise; bland, monotone, passive presentation.",
        "Schizotypal PD: Telepathic beliefs, belief in clairvoyance, odd metaphors, unkempt mismatched clothing, severe paranoid social anxiety that does not diminish with familiarity.",
        "Premorbid Antecedent: Cluster A conditions frequently represent the premorbid personality structure of individuals who later develop full psychotic episodes."
      ],
      potentialTreatments: [
        "Cluster A Adapted Supportive Psychotherapy: Low-demand, respectful, non-intrusive stance; honoring the patient's need for personal space and emotional distance.",
        "CBT for Paranoid Ideation: Gentle reality-testing without challenging delusions directly ('Columbo technique' of gentle curiosity); building basic trust.",
        "Social Skills Training for Schizoid / Schizotypal: Concrete, pragmatic skills for navigating medical appointments, employment, and daily living without forcing emotional intimacy.",
        "Low-Dose Atypical Antipsychotics (for Schizotypal): Considered when severe ideas of reference or distressing perceptual illusions occur."
      ],
      clinicalPearl: "Process issue in Cluster A: Never force warmth, intense eye contact, or emotional exploration early on. Individuals with Cluster A feel deeply threatened by forced closeness. Maintain respectful neutrality, predictable structure, and professional distance."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "BPD_BIPOLAR": {
      title: "Borderline Personality Disorder (BPD) vs. Bipolar II Disorder",
      commonality: "Both present with severe mood swings, emotional volatility, impulsivity, relationship disruption, and high risk of suicidality.",
      distinguishingMarkers: [
        {
          feature: "Trigger & Duration of Mood Shifts",
          conditionA: "Borderline Personality Disorder: Mood shifts are reactive to immediate interpersonal events (perceived rejection, abandonment); fluctuate rapidly within hours.",
          conditionB: "Bipolar II Disorder: Mood episodes (hypomania >=4 days, depression >=2 weeks) emerge autonomously, independent of immediate interpersonal triggers, and endure for weeks."
        },
        {
          feature: "Sleep & Energy Architecture",
          conditionA: "BPD: Sleep disturbance is common due to anxiety/nightmares, but patient feels tired and exhausted the next day.",
          conditionB: "Bipolar II (Hypomania): Decreased NEED for sleep (e.g., sleeps 3 hours and wakes up bursting with boundless goal-directed energy)."
        },
        {
          feature: "Identity & Chronic Emptiness",
          conditionA: "BPD: Pervasive, enduring identity disturbance, unstable self-image, and chronic feelings of emptiness across baseline functioning.",
          conditionB: "Bipolar II: Coherent, stable core identity between mood episodes; absence of chronic feelings of emptiness during euthymia."
        }
      ],
      ruleInRuleOut: {
        ruleInBPD: "Rule in BPD: Mood shifts occur within minutes/hours triggered by interpersonal slights; chronic abandonment terror; recurrent NSSI; chronic emptiness.",
        ruleInBipolar: "Rule in Bipolar II: Clear periods of hypomania lasting >=4 days with grandiosity, decreased need for sleep, and flight of ideas, alternating with major depression.",
        pitfallToAvoid: "Beware of treating BPD solely with mood stabilizers. Pharmacotherapy does not heal characterological abandonment trauma or teach emotion regulation skills; DBT is essential."
      },
      contrastingTreatments: {
        treatmentA_Name: "BPD Clinical Treatment Pathway",
        treatmentA_Steps: "Dialectical Behavior Therapy (DBT: distress tolerance, emotion regulation skills) or Schema Therapy; limited, targeted PRN pharmacotherapy.",
        treatmentB_Name: "Bipolar II Medical Treatment Pathway",
        treatmentB_Steps: "First-line mood stabilizers (Lithium, Lamotrigine) or atypical antipsychotics (Quetiapine) paired with Interpersonal and Social Rhythm Therapy (IPSRT)."
      }
    },

    "AVPD_SCHIZOID": {
      title: "Avoidant Personality Disorder vs. Schizoid Personality Disorder",
      commonality: "Both present with profound social isolation, absence of close friendships, solitary lifestyles, and aloof social presentations.",
      distinguishingMarkers: [
        {
          feature: "Desire for Close Relationships",
          conditionA: "Avoidant PD: Deeply yearns for companionship, love, and social connection; feels intensely lonely, but withdraws out of paralyzing fear of rejection.",
          conditionB: "Schizoid PD: Has NO desire for close relationships or intimacy; is genuinely indifferent to connection and experiences true peace in solitude."
        },
        {
          feature: "Response to Social Evaluation",
          conditionA: "Avoidant PD: Hypersensitive to criticism, disapproval, or humiliation; constantly worries about being judged as foolish or inferior.",
          conditionB: "Schizoid PD: Completely indifferent to the praise or criticism of others; immune to social embarrassment or approval."
        },
        {
          feature: "Emotional Capacity & Affect",
          conditionA: "Avoidant PD: Experiences rich, intense emotional life (high anxiety, shame, emotional pain, longing); affect is expressive when comfortable.",
          conditionB: "Schizoid PD: Restricted emotional expression, blunted affect, anhedonia; takes pleasure in few, if any, sensory or bodily activities."
        }
      ],
      ruleInRuleOut: {
        ruleInAvoidant: "Rule in Avoidant: Patient expresses deep loneliness and grief over lack of friends, avoids gatherings due to fear of humiliation, holds defectiveness beliefs.",
        ruleInSchizoid: "Rule in Schizoid: Patient chooses solitary life without distress, has no interest in dating or making friends, shows emotional coldness and detachment.",
        pitfallToAvoid: "Never assume an isolated client is Schizoid without asking about loneliness. Most socially isolated individuals have Avoidant PD or Social Anxiety and suffer in secret."
      },
      contrastingTreatments: {
        treatmentA_Name: "Avoidant PD Treatment Protocol",
        treatmentA_Steps: "CBT exposure to social situations, Schema Therapy for Defectiveness/Shame, assertiveness training, cultivating self-compassion.",
        treatmentB_Name: "Schizoid PD Supportive Protocol",
        treatmentB_Steps: "Low-demand supportive therapy, respecting boundaries, pragmatic daily living skills, without forcing intimate interpersonal exposure."
      }
    },

    "OCPD_OCD": {
      title: "Obsessive-Compulsive Personality Disorder (OCPD) vs. OCD",
      commonality: "Both conditions involve excessive rituals, checking, preoccupation with perfection, order, and control.",
      distinguishingMarkers: [
        {
          feature: "Ego-Syntonic vs. Ego-Dystonic Stance",
          conditionA: "OCPD (Ego-Syntonic): The individual views their perfectionism and strict rules as desirable, correct, moral, and superior ('My way is the right way').",
          conditionB: "OCD (Ego-Dystonic): The individual recognizes that their intrusive obsessions and repetitive compulsions are irrational, exhausting, and unwelcome."
        },
        {
          feature: "Nature of Symptoms",
          conditionA: "OCPD: Pervasive personality style characterized by workaholism, reluctance to delegate, miserliness, and preoccupation with lists/rules; NO true obsessions.",
          conditionB: "OCD: Specific intrusive egodystonic thoughts/images/urges (e.g., contamination, hitting someone with a car) followed by neutralizing compulsions (washing, checking)."
        },
        {
          feature: "Primary Source of Interpersonal Friction",
          conditionA: "OCPD: Causes profound distress to family and colleagues due to rigid micro-management, moral tyranny, and inability to compromise.",
          conditionB: "OCD: Causes primary distress to the patient themselves, who feels trapped in endless exhausting ritualized behaviors."
        }
      ],
      ruleInRuleOut: {
        ruleInOCPD: "Rule in OCPD: Preoccupation with rules/order, perfectionism interfering with completion, workaholism, hoarding, miserliness, all experienced as ego-syntonic.",
        ruleInOCD: "Rule in OCD: Presence of true intrusive obsessions and ritualistic neutralizing compulsions that the individual desperately wishes to be free of.",
        pitfallToAvoid: "Do not confuse OCPD hoarding (saving items 'just in case' driven by miserliness/efficiency) with OCD hoarding (saving items out of magical thinking or emotional dread)."
      },
      contrastingTreatments: {
        treatmentA_Name: "OCPD Characterological Pathway",
        treatmentA_Steps: "CBT for cognitive rigidity, ACT for psychological flexibility, Schema Therapy for Unrelenting Standards, couples therapy to soften control.",
        treatmentB_Name: "OCD Evidence-Based Protocol",
        treatmentB_Steps: "Exposure and Response Prevention (ERP / First-Line Gold Standard) paired with high-dose SSRIs (e.g., Sertraline 200 mg) to extinguish neutralizing rituals."
      }
    },

    "BPD_HPD": {
      title: "Borderline Personality Disorder (BPD) vs. Histrionic Personality Disorder (HPD)",
      commonality: "Both belong to Cluster B, featuring dramatic emotionality, intense interpersonal reactivity, impulsivity, and high relational demands.",
      distinguishingMarkers: [
        {
          feature: "Self-Harm, Suicidality & Emptiness",
          conditionA: "Borderline PD: Recurrent suicidal gestures, self-harm (cutting), chronic feelings of emptiness, and deep identity fragmentation.",
          conditionB: "Histrionic PD: ABSENCE of recurrent self-harm, absence of chronic emptiness, and absence of identity disintegration; self-esteem is sustained through charm."
        },
        {
          feature: "Emotional Style & Depth",
          conditionA: "Borderline PD: Emotions are painfully intense, agonizing, dysphoric, and rageful; interpersonal conflict leads to emotional destruction.",
          conditionB: "Histrionic PD: Emotions are theatrical, impressionistic, seductive, and rapidly shifting, but emotionally shallow without deep dysphoria."
        },
        {
          feature: "Interpersonal Approach",
          conditionA: "Borderline PD: Alternates between frantic idealization and venomous devaluation ('splitting'); terrified of being abandoned.",
          conditionB: "Histrionic PD: Gregarious, flirtatious, charming, seeking to be the center of attention; considers casual acquaintances to be 'intimate soulmates'."
        }
      ],
      ruleInRuleOut: {
        ruleInBPD: "Rule in BPD: Non-suicidal self-injury, chronic emptiness, abandonment panic, rage outbursts, paranoid stress-related dissociation.",
        ruleInHPD: "Rule in HPD: Seductive attention-seeking, theatrical shallow affect, impressionistic speech, discomfort when not the center of attention, no self-harm.",
        pitfallToAvoid: "Do not diagnose BPD simply because someone is emotionally dramatic. Without self-harm, chronic emptiness, identity loss, and abandonment terror, consider HPD."
      },
      contrastingTreatments: {
        treatmentA_Name: "BPD Crisis & Regulation Protocol",
        treatmentA_Steps: "Comprehensive DBT (distress tolerance, crisis survival, TIPP) and Schema Therapy for abandonment trauma.",
        treatmentB_Name: "HPD Cognitive & Boundary Protocol",
        treatmentB_Steps: "Cognitive therapy challenging attention-seeking assumptions, factual grounding of impressionistic speech, assertive boundary training."
      }
    }
  },

  // Interactive Differential Presets
  differentialPresets: [
    { label: "BPD vs. Bipolar II", ids: ["BPD", "BIPOLAR"] },
    { label: "Avoidant vs. Schizoid PD", ids: ["AVPD", "CLUSTER_A"] },
    { label: "OCPD vs. OCD", ids: ["OCPD", "OCD"] },
    { label: "BPD vs. Histrionic PD", ids: ["BPD", "HPD"] },
    { label: "All Personality Disorders", ids: ["BPD", "ASPD", "NPD", "HPD", "AVPD", "OCPD", "CLUSTER_A"] }
  ],

  // Clinical Practice Scenarios
  scenarios: [
    {
      id: "M9_SCENARIO_1",
      title: "Scenario 1: Maya (27yo) — Interpersonal Storms, Cutting & Abandonment Panic",
      presentation: "Maya, a 27-year-old hospitality manager, is referred by the hospital emergency department following superficial wrist lacerations. Her presenting issues include depressed mood, extreme emotional volatility, and relationship crises. She recently separated from her partner of six months; when he announced he was moving out, Maya experienced blinding panic, smashed dinner plates, threatened suicide, and locked herself in the bathroom to cut her forearms. In the clinical interview, Maya rapidly forms an intense, idealized rapport with you ('You are the first psychologist who has ever truly understood me!'), but when you inform her that sessions must end strictly at 50 minutes, her face darkens and she accuses you of being cold and uncaring. On the PAI, her Borderline Features (BOR) scale is clinically elevated at T=82, with prominent spikes in Affective Instability and Negative Relationships. The MCMI-IV shows high elevations on the Borderline scale (BR=88). She reports that she has no idea who she really is, stating: 'I feel completely empty inside, like a chameleon who just mimics whoever I'm with.'",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the definitive personality disorder diagnosis for Maya?",
        options: [
          { text: "Borderline Personality Disorder (BPD)", isCorrect: true },
          { text: "Bipolar I Disorder with psychotic features", isCorrect: false },
          { text: "Histrionic Personality Disorder (HPD)", isCorrect: false },
          { text: "Major Depressive Disorder with borderline traits", isCorrect: false }
        ],
        hint: "Review the frantic efforts to avoid abandonment, alternating idealization and devaluation (splitting), NSSI cutting, chronic emptiness, and identity disturbance.",
        explanation: "Maya fulfills full DSM-5 criteria for Borderline Personality Disorder (Cluster B). She presents with frantic abandonment avoidance, intense relationship instability with splitting, marked identity disturbance ('chameleon'), recurrent self-harm (cutting), affective instability, and chronic feelings of emptiness, corroborated by clinically elevated PAI BOR and MCMI-IV Borderline scales."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Intervention & Hierarchy — What is the gold-standard treatment framework and immediate clinical priority for Maya?",
        options: [
          { text: "Comprehensive Dialectical Behavior Therapy (DBT), strictly adhering to the Linehan treatment hierarchy by targeting life-threatening behaviors (self-harm/suicide threats) before therapy-interfering behaviors.", isCorrect: true },
          { text: "Unstructured psychodynamic psychoanalysis allowing Maya to free-associate without setting firm session time limits.", isCorrect: false },
          { text: "Prescribing high-dose mood stabilizers and advising her to avoid all romantic relationships forever.", isCorrect: false },
          { text: "Immediate exposure therapy confronting Maya with abandonment triggers.", isCorrect: false }
        ],
        hint: "Linehan's DBT is the gold standard for BPD, following a strict behavioral hierarchy prioritizing life-threatening behaviors (self-harm) first.",
        explanation: "Comprehensive DBT is the first-line gold standard treatment for BPD. Under Linehan's biosocial model, treatment follows a strict behavioral hierarchy: (1) Life-threatening behaviors (suicidality and NSSI cutting), followed by (2) Therapy-interfering behaviors (session boundary testing, splitting the therapist), and (3) Quality-of-life behaviors. Maya requires individual therapy, skills group (TIPP, STOP, DEAR MAN), and between-session phone coaching."
      }
    },
    {
      id: "M9_SCENARIO_2",
      title: "Scenario 2: Greg (48yo) — The Perfectionist Partner with Unrelenting Standards",
      presentation: "Greg, a 48-year-old senior commercial litigation partner, is coerced into therapy by his wife, who has threatened divorce. Greg cannot understand why his wife is unhappy: 'I provide an immaculate home, I work 80 hours a week to ensure financial security, and I run our household with complete precision.' At his law firm, Greg refuses to delegate legal research to associates because 'they never do it to my exact standard; if you want it done right, you must do it yourself.' Consequently, he works every weekend, misses his children's sporting events, and has not taken an annual leave day in seven years. In his home office, he has color-coded spreadsheets detailing every domestic chore down to 15-minute increments. When his wife loaded the dishwasher with the spoons facing up instead of down, Greg re-sorted the entire dishwasher and gave her a 45-minute lecture on hygiene protocols. He refuses to replace his 12-year-old threadbare suit because 'it still functions, and wasting money is morally reprehensible.' He experiences no intrusive contamination obsessions or magical harm rituals.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the diagnosis for Greg?",
        options: [
          { text: "Obsessive-Compulsive Personality Disorder (OCPD)", isCorrect: true },
          { text: "Obsessive-Compulsive Disorder (OCD)", isCorrect: false },
          { text: "Autism Spectrum Disorder, Level 1", isCorrect: false },
          { text: "Narcissistic Personality Disorder (NPD)", isCorrect: false }
        ],
        hint: "Notice the pervasive ego-syntonic perfectionism, workaholism, refusal to delegate, miserly style, and moral rigidity, in the absence of intrusive ego-dystonic obsessions.",
        explanation: "Greg meets full DSM-5 criteria for Obsessive-Compulsive Personality Disorder (OCPD, Cluster C). His symptoms are ego-syntonic (he believes his strict rules are morally correct), characterized by perfectionism interfering with life, excessive devotion to work, refusal to delegate, miserly spending, and interpersonal rigidity, with no true OCD obsessions."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the most appropriate therapeutic approach for Greg?",
        options: [
          { text: "CBT and Schema Therapy targeting 'Unrelenting Standards' and 'Punitiveness' schemas, cultivating psychological flexibility (ACT), and running behavioral experiments with intentional imperfection ('the 80% rule').", isCorrect: true },
          { text: "Exposure and Response Prevention (ERP) forcing Greg to touch dirty doorknobs.", isCorrect: false },
          { text: "Recommending that Greg's wife learn to submit to his household rules to reduce marital friction.", isCorrect: false },
          { text: "Prescribing high-dose Clomipramine to extinguish his spreadsheets.", isCorrect: false }
        ],
        hint: "OCPD requires challenging unrelenting standards, developing psychological flexibility, and practicing deliberate imperfection.",
        explanation: "Greg requires CBT and Schema Therapy to soften his Demanding Parent mode and 'Unrelenting Standards' schema. Using Acceptance and Commitment Therapy (ACT), the therapist helps Greg realize that his obsession with control is destroying his core values of marriage and family. Behavioral experiments test deliberate imperfection (e.g., leaving a minor legal typo or delegating a small brief) to prove catastrophic collapse does not occur."
      }
    },
    {
      id: "M9_SCENARIO_3",
      title: "Scenario 3: Julian (31yo) — Paralyzed by Fear of Rejection and Defectiveness",
      presentation: "Julian, a 31-year-old database administrator, presents with chronic loneliness and social isolation. For the past eight years, he has lived entirely alone, ordering groceries online and working from home. He has zero friends and has never been on a date. When asked about this, Julian becomes visibly tearful and confesses: 'More than anything in the world, I want a partner and a group of friends to play board games with. But I am fundamentally unappealing, awkward, and defective. If anyone spends ten minutes with me, they will see how boring and pathetic I am and laugh at me.' Last month, his employer invited him to a celebration dinner for a team achievement; Julian spent three days agonizing over what to wear, experienced intense nausea, and ultimately called in sick because he was convinced he would spill food or say something stupid. School records indicate Julian was an excruciatingly shy child who was bullied by peers and retreated into solitary computer gaming.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the accurate personality disorder diagnosis for Julian?",
        options: [
          { text: "Avoidant Personality Disorder (AvPD)", isCorrect: true },
          { text: "Schizoid Personality Disorder", isCorrect: false },
          { text: "Schizotypal Personality Disorder", isCorrect: false },
          { text: "Agoraphobia with Panic Disorder", isCorrect: false }
        ],
        hint: "Julian desperately desires social relationships (excluding Schizoid PD) but avoids them because he views himself as socially inept and inferior, fearing ridicule and rejection.",
        explanation: "Julian fulfills full DSM-5 criteria for Avoidant Personality Disorder (Cluster C). Unlike Schizoid PD (where the individual does not desire connection), Julian yearns deeply for companionship but avoids social contact due to pervasive feelings of inadequacy, a core defectiveness schema, and hypersensitivity to negative evaluation."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the most effective psychological treatment strategy for Julian?",
        options: [
          { text: "Schema Therapy addressing the 'Defectiveness/Shame' and 'Social Isolation' schemas through imagery rescripting of childhood bullying, paired with gradual in-vivo behavioral experiments in social connection.", isCorrect: true },
          { text: "Acceptance-based validation that Julian is indeed unappealing, helping him make peace with lifelong solitude.", isCorrect: false },
          { text: "Flooding therapy by pushing Julian onto a stage to perform stand-up comedy.", isCorrect: false },
          { text: "Supportive psychotherapy that never encourages him to leave his apartment.", isCorrect: false }
        ],
        hint: "Schema Therapy targeting defectiveness and shame, combined with gradual behavioral experiments, heals the underlying characterological rejection wound.",
        explanation: "Julian benefits most from Schema Therapy (Young) integrated with CBT. Imagery rescripting of early childhood bullying experiences helps heal his 'Defectiveness/Shame' and 'Social Isolation' schemas. In-vivo behavioral experiments (e.g., attending a local board game meetup for 30 minutes) allow Julian to test his catastrophe cognitions in a supportive, graduated hierarchy."
      }
    },
    {
      id: "M9_SCENARIO_4",
      title: "Scenario 4: Brett (24yo) — Callous Exploitation, Fraud & Zero Remorse",
      presentation: "Brett, a 24-year-old mechanic, is mandated to attend a forensic psychological assessment following his third conviction for credit card fraud, identity theft, and assault causing bodily harm. According to police reports, Brett befriended elderly neighbors, gained access to their internet banking under the guise of helping them with garden chores, and drained over $80,000 from their life savings. When asked by the magistrate how he felt about leaving pensioners without grocery money, Brett shrugged and laughed: 'They had plenty saved up, and if they're dumb enough to write their passwords in a notebook, they deserve to lose it.' Collateral records from child safety and juvenile justice reveal a severe childhood history: expelled from three high schools before age 14 for setting fire to lockers, extorting younger students, and torturing neighborhood cats. In the interview, Brett is charming, confident, and glib, attempting to flatter the psychologist by praising their intelligence and offering to 'make a deal.'",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the definitive diagnosis for Brett?",
        options: [
          { text: "Antisocial Personality Disorder (ASPD)", isCorrect: true },
          { text: "Borderline Personality Disorder (BPD)", isCorrect: false },
          { text: "Narcissistic Personality Disorder only", isCorrect: false },
          { text: "Intermittent Explosive Disorder", isCorrect: false }
        ],
        hint: "He is >18 years old, has documented Conduct Disorder before age 15 (animal cruelty, arson, extortion), demonstrates pervasive deceit, fraud, lawbreaking, and a complete lack of remorse.",
        explanation: "Brett meets full DSM-5 criteria for Antisocial Personality Disorder (Cluster B). He is over 18 years old, has verifiable historical evidence of Conduct Disorder with onset before age 15, and displays persistent disregard for the rights of others, deceitfulness, lawbreaking, aggressive assaults, and a callous, cold lack of remorse."
      },
      step2: {
        prompt: "Step 2: Clinical Management & Forensic Formulation — What is the appropriate, realistic clinical stance when working with Brett?",
        options: [
          { text: "Firm behavioral boundaries, contingency management appealing to enlightened self-interest (e.g., compliance keeps him out of prison), multi-agency risk assessment, and avoiding appeals to empathy.", isCorrect: true },
          { text: "Empathic psychodynamic therapy encouraging Brett to weep over the pain he inflicted on his victims.", isCorrect: false },
          { text: "Unconditional trust, sharing personal contact details with Brett to model intimacy.", isCorrect: false },
          { text: "Prescribing high-dose benzodiazepines to reduce his aggressive drives.", isCorrect: false }
        ],
        hint: "Appeals to empathy fail in ASPD. Management requires strict boundaries, forensic contingency frameworks, and framing goals around his enlightened self-interest.",
        explanation: "In forensic psychology, clinical work with ASPD requires strict professional boundaries, explicit rules, and contingency management. Appealing to empathy or remorse is clinically ineffective due to callous-unemotional traits. Interventions succeed only by framing prosocial compliance around his enlightened self-interest ('following the rules keeps you out of maximum security prison')."
      }
    }
  ],

  // Short Answer & Essay Practice
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "M9_SAQ_1",
        title: "SAQ 1: Affective Instability & Mood Shifts Differential Markers",
        prompt: "Contrast the diagnostic profiles of Borderline Personality Disorder (BPD) and Bipolar II Disorder regarding: (1) nature and duration of affective shifts, (2) sleep architecture, and (3) identity/self-concept. (4-6 marks)",
        criteria: [
          "Nature & Duration of Affective Shifts: BPD mood shifts are reactive to immediate interpersonal cues (rejection/abandonment fears), shifting rapidly within hours or minutes; Bipolar II mood episodes (hypomania >=4 days, depression >=2 weeks) emerge autonomously and endure for sustained weeks.",
          "Sleep Architecture: BPD patients often experience insomnia from anxiety/rumination but feel exhausted; Bipolar II hypomanic patients experience a true 'decreased need for sleep' (wake up refreshed and energetic after 2-3 hours).",
          "Identity & Self-Concept: BPD features chronic identity disturbance, shifting self-image, and chronic feelings of emptiness; Bipolar II patients maintain a coherent, stable core identity between mood episodes.",
          "Treatment Divergence: BPD requires psychological therapy (DBT/Schema); Bipolar II requires first-line pharmacotherapy (mood stabilizers/antipsychotics) with IPSRT."
        ],
        modelAnswer: "1. Nature and Duration of Mood Shifts:\n- Borderline Personality Disorder: Affective instability is characterized by rapid, intense emotional reactivity to immediate environmental and interpersonal triggers (especially perceived rejection or abandonment). Shifts from dysphoria to rage or anxiety occur over hours, rarely lasting more than a few days.\n- Bipolar II Disorder: Affective episodes are sustained and autonomous, often emerging without clear interpersonal precipitants. Hypomanic episodes must persist for at least 4 consecutive days, while major depressive episodes last at least 2 consecutive weeks.\n\n2. Sleep Architecture:\n- BPD: Patients frequently suffer from insomnia, nightmares, or fragmented sleep due to hyperarousal and rumination, and feel exhausted the following day.\n- Bipolar II: During hypomanic episodes, patients exhibit a distinct decreased need for sleep, sleeping for only 2 to 4 hours while feeling fully rested and bursting with high goal-directed energy.\n\n3. Identity and Self-Concept:\n- BPD: Pervasive, severe identity disturbance, an unstable sense of self ('chameleon effect'), and chronic feelings of internal emptiness are core baseline features.\n- Bipolar II: Core identity and self-image remain stable and coherent between episodes (during euthymic periods), without chronic feelings of emptiness."
      },
      {
        id: "M9_SAQ_2",
        title: "SAQ 2: Linehan's Biosocial Theory & The DBT Treatment Hierarchy",
        prompt: "Explain the two components of Linehan's Biosocial Theory of Borderline Personality Disorder. Outline the strict three-tier treatment hierarchy used in individual DBT therapy. (5 marks)",
        criteria: [
          "Biosocial Theory Component 1: Biological Vulnerability (innate emotional sensitivity, high physiological reactivity, and slow return to baseline emotional arousal).",
          "Biosocial Theory Component 2: Pervasively Invalidating Environment (caregivers punish, dismiss, or trivialize the child's private emotional experiences, teaching the child to oscillate between extreme emotional outbursts and emotional suppression).",
          "Transaction: The continuous bidirectional transaction between biological vulnerability and environmental invalidation produces pervasive emotion dysregulation.",
          "DBT Treatment Hierarchy Tier 1: Life-Threatening Behaviors (suicidal ideation, suicide attempts, non-suicidal self-injury).",
          "DBT Treatment Hierarchy Tier 2: Therapy-Interfering Behaviors (arriving late, missing sessions, non-compliance with diary cards, testing boundaries).",
          "DBT Treatment Hierarchy Tier 3: Quality-of-Life-Interfering Behaviors (substance misuse, relationship crises, housing instability, employment problems)."
        ],
        modelAnswer: "1. Linehan's Biosocial Theory:\nLinehan posits that BPD develops through a continuous, transactional relationship between two factors:\n- Biological Emotional Vulnerability: An innate neurobiological predisposition characterized by: (a) high sensitivity to emotional stimuli, (b) extreme emotional reactivity, and (c) a slow return to emotional baseline.\n- Pervasively Invalidating Environment: A developmental context where the child's emotional experiences, thoughts, and physical sensations are chronically dismissed, trivialized, punished, or judged as invalid. The environment intermittently reinforces extreme emotional escalations, preventing the child from learning to label, modulate, or trust their own emotions.\n\n2. The Individual DBT Treatment Hierarchy:\nIn individual DBT sessions, the therapist adheres strictly to a three-tier behavioral target hierarchy:\n- Target 1: Life-Threatening Behaviors: Immediate priority is given to assessing and intervening in suicidal ideation, suicide attempts, and non-suicidal self-injury (cutting/burning).\n- Target 2: Therapy-Interfering Behaviors: Behaviors by either patient or therapist that jeopardize treatment delivery, including arriving late, skipping sessions, refusing to complete diary cards, or boundary ruptures.\n- Target 3: Quality-of-Life Behaviors: Severe Axis I comorbidities, substance misuse, severe interpersonal crises, housing instability, and employment challenges that undermine functioning."
      },
      {
        id: "M9_SAQ_3",
        title: "SAQ 3: Obsessional Patterns & The Ego-Syntonic / Ego-Dystonic Distinction",
        prompt: "Explain why Obsessive-Compulsive Personality Disorder (OCPD) is considered 'ego-syntonic' whereas Obsessive-Compulsive Disorder (OCD) is 'ego-dystonic'. Detail how this distinction alters patient insight, motivation for change, and interpersonal impact. (4 marks)",
        criteria: [
          "Ego-Syntonic Definition (OCPD): The individual experiences their perfectionism, rigidity, and strict rules as desirable, sensible, morally correct, and integral to who they are ('My standards are correct; others are lazy/sloppy').",
          "Ego-Dystonic Definition (OCD): The individual experiences their intrusive obsessions and ritualistic compulsions as alien, irrational, exhausting, and unwelcome ('I know washing my hands 50 times makes no sense, but I cannot stop the terror').",
          "Insight & Motivation: OCD patients have intact or fair insight, recognize their suffering, and are motivated to seek relief; OCPD patients lack insight into their own rigidity, rarely seek help voluntarily, and enter therapy only when coerced by partners or employers.",
          "Interpersonal Impact: OCD causes primary internal distress to the patient; OCPD causes severe interpersonal misery to spouses, children, and colleagues who are subjected to micro-management."
        ],
        modelAnswer: "1. The Ego-Syntonic vs. Ego-Dystonic Distinction:\n- OCPD is Ego-Syntonic: The individual views their perfectionism, orderliness, workaholism, and rigid rules as virtues. They believe their standards are rational, morally superior, and necessary for an orderly society ('If everyone did things my way, the world would run efficiently').\n- OCD is Ego-Dystonic: The individual's obsessions (e.g., intrusive thoughts of contamination or stabbing someone) and neutralizing compulsions (checking locks 20 times) are experienced as alien, distressing, irrational, and inconsistent with their true self-concept.\n\n2. Clinical Consequences:\n- Patient Insight & Motivation: OCD patients generally possess insight that their thoughts are excessive and actively seek therapy to escape the torment of their rituals. In contrast, OCPD patients lack insight into the pathological nature of their perfectionism, rarely seek therapy for their personality traits, and usually present only when coerced by a spouse threatening divorce or an employer addressing workplace friction.\n- Interpersonal Impact: In OCD, the patient bears the primary psychological torment of the rituals. In OCPD, the patient feels fine as long as their rules are followed, while their family members and colleagues suffer under relentless criticism, micro-management, and emotional withholding."
      },
      {
        id: "M9_SAQ_4",
        title: "SAQ 4: Multi-Scale Personality Assessment — PAI and MCMI-IV",
        prompt: "Describe the specific scales and clinical utility of the Personality Assessment Inventory (PAI) and Millon Clinical Multiaxial Inventory-IV (MCMI-IV) when evaluating personality pathology. (4 marks)",
        criteria: [
          "PAI Structure & Scales: 344 items, 22 non-overlapping scales; 4 validity scales (Inconsistency, Infrequency, Negative Impression, Positive Impression); 11 clinical scales; 5 treatment scales (Suicidal Ideation, Treatment Rejection); 2 interpersonal scales. Specifically highlights the Borderline Features (BOR) scale and its 4 subscales (BOR-A Affective Instability, BOR-I Identity Problems, BOR-N Negative Relationships, BOR-S Self-Harm).",
          "MCMI-IV Structure & Scales: 195 items, 25 clinical scales aligned with Millon's evolutionary theory and DSM categories; uses Base Rate (BR) scores; includes 15 clinical personality pattern scales (e.g., Schizoid, Avoidant, Borderline) and Grossman Facet scales measuring expressive, interpersonal, and cognitive facets.",
          "Clinical Utility: Both instruments provide objective psychometric profiles, assess response validity (malingering vs defensiveness), quantify symptom severity, and guide treatment planning, while reducing clinician diagnostic bias."
        ],
        modelAnswer: "1. Personality Assessment Inventory (PAI):\n- Developed by Leslie Morey, the PAI is a 344-item self-report questionnaire with 22 non-overlapping scales.\n- Validity Scales: Includes Negative Impression Management (NIM) and Positive Impression Management (PIM) to detect malingering or defensive faking.\n- Clinical Utility in PD: Features the Borderline Features (BOR) scale, which breaks into four high-yield subscales: Affective Instability (BOR-A), Identity Problems (BOR-I), Negative Relationships (BOR-N), and Self-Harm (BOR-S). It also provides critical treatment scales including Suicidal Ideation (SUI) and Treatment Rejection (RXR) to predict therapeutic alliance ruptures.\n\n2. Millon Clinical Multiaxial Inventory-IV (MCMI-IV):\n- Comprises 195 true/false items mapped directly onto Theodore Millon's evolutionary biosocial model and DSM personality disorder criteria.\n- Structure: Utilizes Base Rate (BR) scores rather than standard T-scores, where BR >= 75 indicates the presence of a personality pattern and BR >= 85 indicates prominence/disorder. It measures 15 Clinical Personality Pattern scales and Grossman Facet Scales (which delineate cognitive style, interpersonal conduct, and self-image facets for each personality pattern).\n\n3. Integration:\nTogether, the PAI and MCMI-IV provide empirical validation of personality traits, rule out symptom exaggeration, identify high-risk safety concerns (suicidality/aggression), and guide whether DBT or Schema Therapy is indicated."
      },
      {
        id: "M9_SAQ_5",
        title: "Exam Practice SAQ 1 (5 Marks): Emotion Dysregulation & Impulsivity",
        prompt: "“You are assessing a client for possible presence of a personality disorder. Impulsivity and difficulties with emotion regulation are key features of the client’s presentation. What personality disorders would be most likely (2 marks) and what key features would you use to assess them in your assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Borderline Personality Disorder (BPD) and Antisocial Personality Disorder (ASPD). Possible 1 mark for Narcissistic (NPD) or Histrionic (HPD) Personality Disorder depending on justification.",
          "1 mark for motivational driver/trigger of impulsivity: In ASPD, impulsivity is often associated with reward seeking, sensation seeking, or personal gain; in BPD, impulsivity is typically in response to strong negative emotions, fear of abandonment, or intolerable internal distress.",
          "1 mark for disregard for social norms / legal boundaries: In ASPD, there is chronic, pervasive disregard for and violation of social norms, laws, and the rights of others; this pattern is less likely to be seen as a primary driver in BPD (where boundary breaches are usually secondary to emotional crises).",
          "1 mark for internal conflict, shame, and remorse: Significant internal conflict, chronic emptiness, intense shame, and acute remorse are prominent in BPD; these are generally absent or minimal in ASPD (marked by callous-unemotional traits and lack of remorse).",
          "Note regarding HPD/NPD: Impulsivity in Histrionic or Narcissistic PD is usually related to seeking attention, admiration, or validation—less likely driving the core impulsivity seen in BPD or ASPD."
        ],
        modelAnswer: "Part 1: Most Likely Personality Disorders (2 marks)\n1. Borderline Personality Disorder (BPD) [1 mark]\n2. Antisocial Personality Disorder (ASPD) [1 mark]\n(Alternative consideration: Narcissistic Personality Disorder [NPD] or Histrionic Personality Disorder [HPD] could receive 1 mark if sound justification is provided, e.g., grandiosity-driven impulsive behavior or dramatic attention-seeking emotionality).\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Motivational Driver / Trigger of Impulsivity: In ASPD, impulsive actions (e.g., substance misuse, reckless driving, fighting, financial theft) are primarily driven by immediate sensation-seeking, pursuit of tangible rewards, instrumental gain, or boredom intolerance. In BPD, impulsivity (e.g., self-harm, reckless spending, binge eating, explosive outbursts) is typically affective-driven—triggered by intense distress, intolerable negative emotion, interpersonal rejection, or perceived abandonment as an attempt to modulate unendurable feelings.\n2. Disregard for Social Norms and Rights of Others: ASPD requires a pervasive pattern of disregard for and violation of the rights of others, recurring illegal behaviors, deceitfulness, and repeated violation of social norms from early adolescence (evidenced by Conduct Disorder before age 15). While individuals with BPD may engage in disruptive behaviors during crises, their actions are driven by desperation rather than a pervasive, callous disregard for legal and societal rules.\n3. Internal Conflict, Shame, and Capacity for Remorse: Individuals with BPD experience severe, agonizing internal conflict, chronic feelings of emptiness, pervasive shame, and acute remorse following impulsive outbursts. In contrast, individuals with ASPD exhibit callous-unemotional traits, lack of empathy, rationalization of hurting others ('they had it coming'), and an absence of genuine remorse or internal suffering regarding the impact of their behaviors on others.\n(Note regarding HPD/NPD: Impulsivity in HPD and NPD is typically oriented toward securing external attention, praise, or preserving narcissistic status, rather than affective agony or sensation-seeking aggression)."
      },
      {
        id: "M9_SAQ_6",
        title: "Exam Practice SAQ 2 (5 Marks): Chronic Social Withdrawal & Isolation",
        prompt: "“You are assessing a 29-year-old client who has lived in almost complete social isolation for several years, has no close friends or romantic partners, and spends all non-working hours alone. Marked social withdrawal and interpersonal detachment are key features of the client’s presentation. What personality disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Avoidant Personality Disorder (AvPD) and Schizoid Personality Disorder (SzPD). Possible 1 mark for Schizotypal or Paranoid PD if justified.",
          "1 mark for desire for interpersonal relationships vs indifference ('The Golden Key'): AvPD patients intensely yearn for close relationships, warmth, and intimacy but avoid contact due to overwhelming fear of rejection, ridicule, and shame; Schizoid PD individuals genuinely lack desire for close relationships and prefer solitary existence.",
          "1 mark for core cognitive beliefs / self-concept: In AvPD, core beliefs center on defectiveness, inferiority, and inadequacy ('I am socially inept, unappealing, and defective'); in Schizoid PD, there are no defectiveness schemas—others are simply perceived as intrusive, demanding, or unnecessary.",
          "1 mark for emotional reactivity and sensitivity to praise/criticism: AvPD individuals are hypervigilant to negative evaluation and deeply hurt by perceived rejection; Schizoid individuals display emotional blunting, flat affect, and genuine indifference to both praise and criticism."
        ],
        modelAnswer: "Part 1: Most Likely Personality Disorders (2 marks)\n1. Avoidant Personality Disorder (AvPD) [1 mark]\n2. Schizoid Personality Disorder (SzPD) [1 mark]\n(Alternative consideration: Schizotypal Personality Disorder or Paranoid Personality Disorder could be considered if odd perceptual distortions or persecutory beliefs are highlighted).\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Desire for Interpersonal Closeness vs. Indifference (The Diagnostic Golden Key): The single most decisive differential feature is the client's internal desire for relationships. An individual with Avoidant Personality Disorder desperately yearns for friendship, romantic intimacy, and social belonging, but avoids contact out of crippling anxiety and fear of rejection, ridicule, or disapproval ('lonely yearning'). In sharp contrast, an individual with Schizoid Personality Disorder genuinely neither desires nor enjoys close relationships (including family or romantic ties) and experiences authentic contentment in solitude ('detached indifference').\n2. Core Cognitive Schemas and Self-View: In AvPD, the cognitive profile is dominated by core schemas of personal defectiveness, social ineptitude, and unappealability ('If people really get to know me, they will see how pathetic and flawed I am'). In Schizoid PD, there is an absence of defectiveness or shame schemas; the individual views themselves as self-sufficient and views social interaction as unrewarding, exhausting, or an unwelcome intrusion on their peace.\n3. Emotional Reactivity and Sensitivity to Evaluation: Individuals with AvPD are hypersensitive to social evaluation, constantly scanning interpersonal cues for micro-signs of disapproval or rejection, which trigger intense emotional distress. Individuals with Schizoid PD exhibit a constricted range of emotional expression (flattened affect, emotional coldness) and appear characteristically indifferent to both praise and criticism from others."
      },
      {
        id: "M9_SAQ_7",
        title: "Exam Practice SAQ 3 (5 Marks): Rigid Perfectionism & Control",
        prompt: "“You are assessing a 42-year-old manager whose daily life is dominated by meticulous lists, rigid routines, extreme perfectionism that delays projects, and an inability to delegate tasks to colleagues. Excessive preoccupation with orderliness, perfectionism, and control are key features of the presentation. What conditions would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Obsessive-Compulsive Personality Disorder (OCPD) and Obsessive-Compulsive Disorder (OCD).",
          "1 mark for ego-syntonicity vs ego-dystonicity: In OCPD, traits, rules, and perfectionism are ego-syntonic (perceived as rational, morally superior, and correct); in OCD, obsessions and compulsions are ego-dystonic (experienced as intrusive, alien, irrational, and distressing).",
          "1 mark for presence versus absence of true obsessions and compulsions: OCD requires recurrent intrusive, unwanted obsessions (e.g., contamination, harm) and neutralizing rituals/compulsions; OCPD lacks intrusive obsessions and ritualistic neutralizations, consisting instead of a pervasive characterological lifestyle of orderliness, workaholism, and control.",
          "1 mark for locus of distress and interpersonal impact: In OCD, distress is primarily experienced internally by the patient who suffers from ritual exhaustion; in OCPD, the patient experiences little personal distress from their rules but causes severe interpersonal friction and distress for spouses, family, and colleagues due to rigid micromanagement and moral inflexibility."
        ],
        modelAnswer: "Part 1: Most Likely Conditions (2 marks)\n1. Obsessive-Compulsive Personality Disorder (OCPD) [1 mark]\n2. Obsessive-Compulsive Disorder (OCD) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Ego-Syntonic vs. Ego-Dystonic Nature: In OCPD, the preoccupation with orderliness, perfectionism, and strict adherence to rules is ego-syntonic. The individual perceives their exacting standards and rigid methods as sensible, virtuous, and correct ('If everyone did things my way, the organization would run efficiently'). In OCD, the symptoms are ego-dystonic; the individual recognizes that their intrusive obsessions and repetitive compulsions are irrational, unwelcome, and alien to their true self, causing marked subjective distress.\n2. Presence of True Obsessions and Compulsions: OCD is defined by the presence of true recurrent, intrusive obsessions (e.g., fears of contamination, doubts about causing harm, unacceptable taboo thoughts) and repetitive neutralizing compulsions (e.g., handwashing rituals, checking locks 30 times, counting) aimed at reducing acute anxiety. OCPD is characterized by pervasive characterological traits across multiple life domains—excessive devotion to work, preoccupation with rules and schedules to the point of losing the main point, miserliness, and hoarding—without specific intrusive ego-dystonic obsessions or neutralizing rituals.\n3. Primary Locus of Distress and Interpersonal Friction: In OCD, the patient directly suffers from their symptoms, feeling tormented by the time-consuming and exhausting nature of their rituals, which drives voluntary treatment-seeking. In OCPD, the client rarely experiences distress from their own traits (often feeling pride in their perfectionism) but generates profound distress, conflict, and burnout among romantic partners and coworkers who are subjected to relentless micromanagement, moral rigidity, and emotional withholding."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Essay Prompt: Personality Disorder Nosology, Etiology & Dialectical Intervention",
      prompt: "Critically evaluate the classification, biosocial etiology, and evidence-based treatment of personality disorders. In your essay, compare the DSM-5 categorical 3-cluster framework with the Alternative Model for Personality Disorders (AMPD), critically analyze Linehan's Biosocial Theory of Borderline Personality Disorder, and design a comprehensive Dialectical Behavior Therapy (DBT) intervention plan for a patient presenting with severe affective instability, splitting, and recurrent non-suicidal self-injury.",
      timeAllowedMinutes: 45,
      suggestedWordCount: "1000 - 1400 words",
      rubricPillars: [
        {
          name: "Pillar 1: Nosology & Dimensional Models",
          weight: "25%",
          description: "Rigorous critique of the DSM-5 categorical 3-cluster framework (Cluster A, B, C; diagnostic overlap, comorbidity rates, arbitrary cutoffs) versus the Section III Alternative Model for Personality Disorders (Criterion A levels of personality functioning and Criterion B maladaptive trait domains)."
        },
        {
          name: "Pillar 2: Biosocial Etiology & Characterological Formulation",
          weight: "25%",
          description: "In-depth analysis of Linehan's Biosocial Theory (biological vulnerability interacting with pervasive environmental invalidation); Young's Schema mode formulation (Vulnerable Child, Punitive Parent); Millon's evolutionary model; and attachment roots."
        },
        {
          name: "Pillar 3: Differential Diagnostics & Objective Profiling",
          weight: "25%",
          description: "Mastery of differential boundaries: BPD vs Bipolar II, Avoidant vs Schizoid PD, and OCPD vs OCD (ego-syntonicity). Integration of psychometric inventories (PAI BOR scale and MCMI-IV Base Rates)."
        },
        {
          name: "Pillar 4: Evidence-Based Clinical DBT Protocol",
          weight: "25%",
          description: "Full execution of comprehensive DBT: adhering to Linehan's treatment hierarchy (life-threatening > therapy-interfering > quality-of-life); delivery across 4 modes (individual, skills group, phone coaching, consultation team); and mastering the dialectic of validation and change."
        }
      ],
      modelOutline: [
        "1. Introduction: The evolution of personality disorder nosology; limitations of categorical diagnostic clusters; thesis arguing that formulation-driven, dialectical approaches provide superior clinical outcomes.",
        "2. Nosological Models: Contrasting the traditional DSM-5 3-Cluster framework (A-Mad, B-Bad, C-Sad) with the Alternative Model for Personality Disorders (AMPD: Self/Interpersonal functioning + Trait domains); addressing high comorbidity.",
        "3. Etiological Foundations: Linehan's Biosocial Theory (biological vulnerability + invalidating developmental milieu); Young's Schema modes and coping responses; neurobiological emotion dysregulation.",
        "4. Differential Diagnosis & Psychometrics: Differentiating BPD from Bipolar II (affective timescales, autonomous vs reactive); OCPD vs OCD (ego-syntonic rules vs ego-dystonic obsessions); utilizing the PAI (BOR scale) and MCMI-IV.",
        "5. Comprehensive DBT Intervention Architecture: Structure of standard DBT (individual therapy, skills group, phone coaching, consultation team); deploying the 4 skill modules (Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness); managing suicidal crises via the behavioral hierarchy."
      ]
    }
  }
};
