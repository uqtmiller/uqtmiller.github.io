// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 8: Adult Eating Disorders
const MODULE_8_DATA = {
  moduleId: 8,
  title: "Module 8: Adult Eating Disorders",
  subtitle: "Fairburn's Transdiagnostic CBT-E Framework, EDE 17.0D Assessment, Over-Evaluation of Shape & Weight, and Evidence-Based Stepped Care",
  coordinator: "Dr Bonnie Clough (Clinical Psychologist, MAPS, Senior Lecturer)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "Fairburn's Transdiagnostic Cognitive Behavioral Theory (CBT-E)",
      author: "Christopher Fairburn et al. (Oxford Model)",
      summary: "Rather than viewing eating disorders as rigid separate illnesses, Fairburn's transdiagnostic model posits that Anorexia Nervosa, Bulimia Nervosa, and OSFED share a singular central core psychopathology: the over-evaluation of shape and weight and their control. This core belief drives rigid dietary restraint, which precipitates physiological/psychological vulnerability to binge eating, triggering compensatory purging, which reinforces the need for further restraint."
    },
    {
      title: "Assessment Instruments: EDE 17.0D & CIA 3.0",
      author: "Fairburn & Beglin / Bohn & Fairburn",
      summary: "The Eating Disorder Examination (EDE 17.0D) is the investigator-based gold standard interview measuring four clinical subscales: Restraint, Eating Concern, Shape Concern, and Weight Concern across the preceding 28 days and 3 months. The Clinical Impairment Assessment (CIA 3.0) is a 16-item index measuring psychosocial impairment across mood, cognitive, interpersonal, and work domains specifically secondary to eating pathology."
    },
    {
      title: "The Over-Evaluation of Shape & Weight & Dietary Restraint",
      author: "Fairburn / Cooper / Shafran",
      summary: "In healthy individuals, self-worth is derived from multiple life domains (work, relationships, hobbies, values). In eating disorders, self-worth is almost exclusively judged in terms of weight, shape, and eating control. This drives strict, rigid dietary rules (as opposed to flexible guidelines). When an inevitable minor rule infraction occurs, black-and-white thinking ('I've blown it') triggers the Abstinence Violation Effect and objective binge eating."
    },
    {
      title: "Medical Risk, Refeeding Syndrome & Multidisciplinary Stepped Care",
      author: "Royal Australian & New Zealand College of Psychiatrists (RANZCP)",
      summary: "Eating disorders carry the highest mortality rate of any psychiatric condition. Clinicians must continuously monitor physical stability (electrolytes, potassium, QTc interval, core temperature, postural blood pressure). In severely malnourished patients, rapid re-introduction of carbohydrates triggers Refeeding Syndrome (surge in insulin driving phosphate intracellularly, causing fatal cardiac arrest). Requires stepped care with GP, specialist dietitian, and clinical psychologist."
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "AN_R",
      code: "DSM-5 307.1 (F50.01)",
      name: "Anorexia Nervosa — Restricting Type (AN-R)",
      type: "Feeding & Eating Disorder (Restrictive Subtype)",
      ageRange: "Adolescence through Adulthood (Peak onset 14-18 years)",
      coreDefinition: "A life-threatening eating disorder characterized by restriction of energy intake leading to significantly low body weight, an intense fear of gaining weight or becoming fat, and a disturbance in how one's body weight or shape is experienced.",
      dsmCriteria: [
        "Criterion A: Restriction of energy intake relative to requirements, leading to a significantly low body weight in the context of age, sex, developmental trajectory, and physical health (defined as a weight that is less than minimally normal, typically BMI < 18.5 kg/m2 in adults).",
        "Criterion B: Intense fear of gaining weight or of becoming fat, or persistent behavior that interferes with weight gain, even though at a significantly low weight.",
        "Criterion C: Disturbance in the way in which one's body weight or shape is experienced, undue influence of body weight or shape on self-evaluation, or persistent lack of recognition of the seriousness of the current low body weight.",
        "Subtype Specification — Restricting Type: During the last 3 months, the individual has NOT engaged in recurrent episodes of binge eating or purging behavior (i.e., self-induced vomiting or the misuse of laxatives, diuretics, or enemas). Weight loss is accomplished primarily through dieting, fasting, and/or excessive exercise.",
        "Severity Grading (Adult BMI): Mild: BMI >= 17; Moderate: BMI 16-16.99; Severe: BMI 15-15.99; Extreme: BMI < 15."
      ],
      howToDiagnose: [
        "Clinical interview & anthropometric measurement: Height, weight, calculated BMI, and percentage of Expected Body Weight (%EBW).",
        "EDE 17.0D interview assessing Restraint, Shape Concern, and Weight Concern subscales over the past 28 days.",
        "Comprehensive medical examination: Orthostatic vitals (lying and standing BP/pulse), temperature (<35.5C indicates hypothermia), electrocardiogram (ECG for prolonged QTc, bradycardia <50 bpm), full blood count, electrolytes, urea, creatinine, liver function, and serum phosphate.",
        "Collateral history: Family observations of food avoidance, food ritual cutting, wearing oversized baggy clothing to conceal emaciation."
      ],
      factorsLookedFor: [
        "Cognitive Distortions: Magnification of body parts ('my thighs are huge' despite visible ribs), dichotomous all-or-nothing thinking.",
        "Body Checking & Avoidance: Compulsive mirror checking, measuring wrist diameter, pinching skin folds, OR complete avoidance of mirrors and scales.",
        "Neurobiological Starvation Effects (Minnesota Starvation Study): Obsessive thoughts about recipes, collecting cookbooks, social isolation, apathy, emotional blunting, rigidity.",
        "Physical Signs: Lanugo hair (fine downy hair on arms/face), amenorrhea, peripheral cyanosis, dry scaly skin, brittle nails."
      ],
      potentialTreatments: [
        "Medical Stabilization & Monitored Refeeding: Inpatient medical admission if BMI < 14, bradycardia < 40 bpm, postural drop > 20 mmHg, or hypokalemia. Gradual caloric titration with phosphate monitoring to prevent Refeeding Syndrome.",
        "Enhanced Cognitive Behavior Therapy for Eating Disorders (CBT-E, Fairburn 20-40 session protocol): In-session collaborative weighing, regular eating, tackling over-evaluation of shape/weight.",
        "Family-Based Treatment (FBT / Maudsley Model): Gold standard for adolescents and transition-age youth; empowering parents to take charge of nutritional restoration.",
        "Specialist Supportive Clinical Management (SSCM) or Maudsley Anorexia Treatment for Adults (MANTRA)."
      ],
      clinicalPearl: "Always remember: Starvation itself alters the brain. The Minnesota Starvation Study proved that healthy volunteers forced to restrict calories developed intense food obsessions, hoarding, mood lability, and social withdrawal. Many psychological features of anorexia improve automatically once body weight is restored."
    },
    {
      id: "AN_BP",
      code: "DSM-5 307.1 (F50.02)",
      name: "Anorexia Nervosa — Binge-Eating/Purging Type (AN-BP)",
      type: "Feeding & Eating Disorder (Binge/Purge Subtype)",
      ageRange: "Adolescence through Adulthood",
      coreDefinition: "Anorexia Nervosa occurring in an individual with significantly low body weight who also engages in recurrent episodes of binge eating or purging behavior (self-induced vomiting, laxatives, diuretics, enemas).",
      dsmCriteria: [
        "Criterion A, B, and C for Anorexia Nervosa are met (significantly low body weight, intense fear of weight gain, and over-evaluation/disturbance of shape and weight).",
        "Subtype Specification — Binge-Eating/Purging Type: During the last 3 months, the individual HAS engaged in recurrent episodes of binge eating OR purging behavior (i.e., self-induced vomiting or the misuse of laxatives, diuretics, or enemas).",
        "Note on diagnostic hierarchy: The presence of significantly low body weight (Criterion A) ALWAYS trumps a diagnosis of Bulimia Nervosa, even if the person binges and purges daily."
      ],
      howToDiagnose: [
        "Assessment of weight and BMI (must meet Criterion A low body weight threshold, typically BMI < 18.5 in adults).",
        "Detailed timeline of eating episodes: Establishing presence of objective binge episodes (unusually large amount with loss of control) OR subjective binges, followed by compensatory expulsion.",
        "Laboratory evaluation: Serum potassium, sodium, chloride, bicarbonate (hypokalemic hypochloremic metabolic alkalosis resulting from vomiting).",
        "Physical examination: Russell's sign (calluses or abrasions on knuckles from contact with incisors during vomiting), parotid gland hypertrophy ('chipmunk cheeks'), dental perimylolysis (enamel erosion)."
      ],
      factorsLookedFor: [
        "Extreme Medical Vulnerability: High mortality due to the lethal combination of severe emaciation and electrolyte depletion (cardiac dysrhythmias).",
        "Impulsivity & Multimorbidity: Higher co-occurrence of alcohol/substance misuse, non-suicidal self-injury, and affective instability compared to AN-R.",
        "Subjective vs Objective Bingeing: Even small amounts of food (e.g., half an apple or two crackers) may be experienced as an uncontrollable 'binge' due to intense dietary guilt.",
        "Concealment: Elaborate methods of purging in private, running taps to conceal vomiting sounds, hiding bags of vomit in bedroom closets."
      ],
      potentialTreatments: [
        "Urgent Medical Stabilization: Correction of hypokalemia (oral or IV potassium chloride under cardiac telemetry), refeeding under specialist supervision.",
        "CBT-E (Enhanced Cognitive Behavior Therapy): Establishing regular meal patterns (3 meals + 3 snacks), identifying purge triggers, eliminating vomiting.",
        "Dialectical Behavior Therapy (DBT) adapted for Eating Disorders: Distress tolerance skills and emotion regulation to replace impulsive purging behaviors.",
        "Interdisciplinary Stepped Care: Intensive day-program or inpatient eating disorder psychiatric unit."
      ],
      clinicalPearl: "Diagnostic Hierarchy Rule: If a patient binges and purges three times a day, BUT their BMI is 16.2 kg/m2, the diagnosis is NOT Bulimia Nervosa. It is Anorexia Nervosa, Binge-Eating/Purging Type. Body weight is the critical diagnostic boundary."
    },
    {
      id: "BN",
      code: "DSM-5 307.51 (F50.2)",
      name: "Bulimia Nervosa (BN)",
      type: "Feeding & Eating Disorder (Purging / Compensatory Subtype)",
      ageRange: "Late Adolescence through Adulthood (Peak onset 16-20 years)",
      coreDefinition: "An eating disorder characterized by recurrent episodes of binge eating, followed by recurrent inappropriate compensatory behaviors to prevent weight gain, occurring in an individual who is NOT underweight.",
      dsmCriteria: [
        "Criterion A: Recurrent episodes of binge eating. An episode of binge eating is characterized by both of the following: (1) Eating, in a discrete period of time (e.g., within any 2-hour period), an amount of food that is definitely larger than what most individuals would eat in a similar period of time under similar circumstances; (2) A sense of lack of control over eating during the episode (e.g., a feeling that one cannot stop eating or control what or how much one is eating).",
        "Criterion B: Recurrent inappropriate compensatory behaviors in order to prevent weight gain, such as self-induced vomiting; misuse of laxatives, diuretics, or other medications; fasting; or excessive exercise.",
        "Criterion C: The binge eating and inappropriate compensatory behaviors both occur, on average, at least once a week for 3 months.",
        "Criterion D: Self-evaluation is unduly influenced by body shape and weight.",
        "Criterion E: The disturbance does NOT occur exclusively during episodes of anorexia nervosa (the individual is of normal weight or overweight, BMI >= 18.5).",
        "Severity Grading (Compensatory episodes per week): Mild: 1-3; Moderate: 4-7; Severe: 8-13; Extreme: >=14."
      ],
      howToDiagnose: [
        "Semi-structured EDE 17.0D interview: Establishing exact frequency of Objective Bulimic Episodes (OBEs) and compensatory purging episodes over the preceding 28 days.",
        "Weight history and current BMI verification (must be in normal or overweight range, BMI >= 18.5).",
        "Physical and dental examination: Parotid sialadenosis, dental erosion on lingual surfaces, subconjunctival hemorrhages from straining, Russell's sign.",
        "Blood chemistry: Electrolyte panel checking for hypokalemia, hypomagnesemia, and elevated serum amylase (from vomiting-induced salivary gland stimulation)."
      ],
      factorsLookedFor: [
        "The Binge-Purge Cycle: Severe dietary restriction during the day -> unbearable physiological hunger and emotional distress -> loss of control binge -> panic about weight gain -> compensatory vomiting -> temporary relief -> renewed vow to restrict.",
        "Secretiveness & Intense Shame: Binges occur in isolation, consuming foods viewed as strictly 'forbidden' (ice cream, cake, fast food), accompanied by profound disgust.",
        "The Abstinence Violation Effect: Breaking a minor dietary rule ('I ate one chip') leads to the cognition 'I've ruined everything, so I may as well eat the whole cupboard.'",
        "Normal Appearance: Often goes undetected for years because the individual's weight appears healthy or slightly elevated, masking severe internal turmoil."
      ],
      potentialTreatments: [
        "CBT-E (Fairburn 20-Session Protocol / First-Line Gold Standard): Stage 1: Establishing regular eating (3 meals + 2-3 snacks spaced no more than 3-4 hours apart), real-time self-monitoring records, weekly in-session weighing; Stage 2: Joint review of progress; Stage 3: Tackling shape/weight over-evaluation, dietary rules, and mood intolerance; Stage 4: Relapse prevention.",
        "Interpersonal Psychotherapy (IPT for Eating Disorders): Focuses on resolving interpersonal disputes, role transitions, and deficits maintaining emotional distress.",
        "Pharmacotherapy (Adjunctive): High-dose Fluoxetine (60 mg/day, FDA/TGA approved) to reduce binge-purge frequency and improve mood.",
        "Dietetic Support: Normalizing portion sizes, dismantling 'fear food' lists, ensuring adequate macronutrient distribution."
      ],
      clinicalPearl: "In CBT-E, the most powerful initial intervention to stop binge eating is NOT psychological analysis of childhood wounds; it is prescribing 'Regular Eating' (eating every 3 to 4 hours without skipping). Eliminating physiological hunger stops over 70% of binge episodes within four weeks."
    },
    {
      id: "BED",
      code: "DSM-5 307.51 (F50.81)",
      name: "Binge Eating Disorder (BED)",
      type: "Feeding & Eating Disorder (Binge-Only Subtype)",
      ageRange: "Adulthood (Often presents in 20s, 30s, or 40s; equal gender distribution in community samples)",
      coreDefinition: "Recurrent episodes of binge eating characterized by consuming large quantities of food with a sense of lack of control, accompanied by marked distress, in the ABSENCE of recurrent inappropriate compensatory behaviors.",
      dsmCriteria: [
        "Criterion A: Recurrent episodes of binge eating (consuming an objectively large amount of food in a discrete 2-hour window with a subjective sense of lack of control).",
        "Criterion B: The binge-eating episodes are associated with three (or more) of the following: (1) Eating much more rapidly than normal; (2) Eating until feeling uncomfortably full; (3) Eating large amounts of food when not feeling physically hungry; (4) Eating alone because of feeling embarrassed by how much one is eating; (5) Feeling disgusted with oneself, depressed, or very guilty afterward.",
        "Criterion C: Marked distress regarding binge eating is present.",
        "Criterion D: The binge eating occurs, on average, at least once a week for 3 months.",
        "Criterion E: The binge eating is NOT associated with the recurrent use of inappropriate compensatory behavior as in bulimia nervosa and does NOT occur exclusively during the course of bulimia nervosa or anorexia nervosa.",
        "Severity Grading (Binge episodes per week): Mild: 1-3; Moderate: 4-7; Severe: 8-13; Extreme: >=14."
      ],
      howToDiagnose: [
        "EDE 17.0D interview assessing frequency of Objective Bulimic Episodes (OBEs) and confirming complete absence of compensatory behaviors.",
        "Binge Eating Scale (BES) or Eating Disorder Examination Questionnaire (EDE-Q 6.0).",
        "Evaluating mood triggers and emotional regulation: Assessing binge eating as a learned strategy to dissociate from or numb negative emotions (mood intolerance).",
        "Medical screening: Evaluating metabolic consequences (insulin resistance, type 2 diabetes, dyslipidemia, hypertension, sleep apnea)."
      ],
      factorsLookedFor: [
        "Emotional Dissociation During Binges: Described as entering a 'trance-like state' or 'fog' while eating, waking up to find empty packaging.",
        "Absence of Purging: Unlike BN, the individual does NOT vomit, take laxatives, or exercise compulsively; weight typically trends upward over time.",
        "Dieting Failure History: Decades of cycling through commercial weight-loss diets, which trigger physiological deprivation and rebound binge eating.",
        "Severe Weight Stigma: High internalization of weight stigma from healthcare providers, contributing to low self-esteem and further emotional eating."
      ],
      potentialTreatments: [
        "CBT-E for BED: Establishing regular eating patterns, identifying emotional and situational binge triggers, developing alternative emotion regulation strategies, addressing shape/weight concerns.",
        "Mindful Eating & Acceptance and Commitment Therapy (ACT): Developing distress tolerance, defusion from food cravings, and body acceptance.",
        "Pharmacotherapy: Lisdexamfetamine (Vyvanse, FDA/TGA approved for moderate-to-severe BED) or SSRIs.",
        "Non-Diet Weight-Neutral Approach (Health at Every Size / HAES): Prioritizing psychological recovery and intuitive eating over weight-loss diets."
      ],
      clinicalPearl: "Never prescribe a calorie-restricted weight-loss diet as the first step for Binge Eating Disorder! Strict dieting triggers biological starvation alarms and cognitive deprivation, directly catalyzing severe binge relapses. Treat the eating disorder first."
    },
    {
      id: "OSFED",
      code: "DSM-5 307.59 (F50.89)",
      name: "Other Specified Feeding or Eating Disorder (OSFED) / Atypical Anorexia",
      type: "Feeding & Eating Disorder (Subthreshold / Atypical Variant)",
      ageRange: "All Ages (Represents up to 40-50% of community eating disorder presentations)",
      coreDefinition: "Presentations in which symptoms characteristic of a feeding and eating disorder that cause clinically significant distress or impairment predominate but do NOT meet the full criteria for any of the specific disorders.",
      dsmCriteria: [
        "Applies to presentations in which symptoms characteristic of an eating disorder predominate but do not meet full criteria, causing significant distress or impairment. Clinical examples include:",
        "1. Atypical Anorexia Nervosa: All criteria for anorexia nervosa are met, EXCEPT that despite significant weight loss, the individual's weight is within or above the normal range (BMI >= 18.5 kg/m2).",
        "2. Bulimia Nervosa (of low frequency and/or limited duration): Criteria for BN are met, except binge eating and compensatory behaviors occur on average less than once a week and/or for less than 3 months.",
        "3. Binge-Eating Disorder (of low frequency and/or limited duration): Criteria for BED are met, except binge eating occurs on average less than once a week and/or for less than 3 months.",
        "4. Purging Disorder: Recurrent purging behavior to influence weight or shape (e.g., self-induced vomiting, misuse of laxatives) in the ABSENCE of binge eating in a normal-weight individual.",
        "5. Night Eating Syndrome: Recurrent episodes of night eating, manifested by eating after awakening from sleep or by excessive food consumption after the evening meal, accompanied by awareness and distress."
      ],
      howToDiagnose: [
        "Comprehensive EDE 17.0D interview mapping eating disorder psychopathology and clinical impairment (CIA 3.0 score >= 16 indicates clinical severity).",
        "Medical and cardiovascular assessment: In Atypical Anorexia, rapid weight loss (e.g., dropping 20 kg in 4 months) produces the EXACT same life-threatening bradycardia, orthostatic hypotension, and electrolyte shifts as low-weight anorexia.",
        "Detailed dietary record: Tracking caloric restriction, fasting intervals, and purging rituals.",
        "Differentiation from Major Depressive Disorder or General Medical Conditions."
      ],
      factorsLookedFor: [
        "Atypical Anorexia Under-Recognition: Healthcare providers frequently praise the patient for losing weight, completely missing severe starvation physiology and suicidal ideation.",
        "Rate of Weight Loss vs. Absolute Weight: Medical danger is driven by the VELOCITY of weight loss, not just the absolute BMI number.",
        "Purging Disorder Dynamics: The patient consumes a normal or small meal (e.g., a salad or sandwich) and feels an overwhelming urge to vomit due to extreme fullness intolerance.",
        "High Psychosocial Impairment: CIA 3.0 scores in OSFED are frequently equal to or higher than those in full-threshold AN or BN."
      ],
      potentialTreatments: [
        "Identical Evidence-Based Treatment to Full-Threshold Counterparts: CBT-E (Fairburn protocol) or FBT for adolescents.",
        "Urgent Medical Monitoring in Atypical Anorexia: Hospital admission if bradycardic (<40 bpm) or orthostatically unstable, regardless of BMI.",
        "Nutritional Restoration & Weight Stabilization: Halting restriction, re-establishing meal structure, addressing cognitive fears of weight gain.",
        "Psychoeducation on Weight Inclusivity: Validating the severity of the illness and challenging weight stigma."
      ],
      clinicalPearl: "Never let a normal BMI fool you! A patient with Atypical Anorexia who dropped from BMI 32 to BMI 21 through starvation is in acute medical peril: their heart is bradycardic, their bone density is leaching, and their suicide risk is equal to classic anorexia."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "AN_BN": {
      title: "Anorexia Nervosa (Binge-Eating/Purging Type) vs. Bulimia Nervosa",
      commonality: "Both present with recurrent binge eating episodes, compensatory purging (vomiting, laxatives), and intense over-evaluation of shape and weight.",
      distinguishingMarkers: [
        {
          feature: "Body Weight & BMI Threshold",
          conditionA: "Anorexia Nervosa (AN-BP): Body weight is significantly below normal (typically BMI < 18.5 kg/m2 in adults, or <85% expected body weight in youth).",
          conditionB: "Bulimia Nervosa (BN): Body weight is at or above normal range (BMI >= 18.5 kg/m2); patient is of normal weight or overweight."
        },
        {
          feature: "Diagnostic Hierarchy Rule",
          conditionA: "AN-BP: The presence of significantly low body weight TRUMPS Bulimia Nervosa; AN-BP is the primary diagnosis.",
          conditionB: "BN: Can ONLY be diagnosed if the individual is NOT currently underweight (Criterion E exclusion)."
        },
        {
          feature: "Medical Mortality Profile",
          conditionA: "AN-BP: Highest psychiatric mortality rate; fatal synergy of severe tissue emaciation, organ starvation, and hypokalemic cardiac arrhythmias.",
          conditionB: "BN: High medical morbidity from electrolyte disturbances, dental erosion, and esophageal tears, but lower mortality than AN-BP."
        }
      ],
      ruleInRuleOut: {
        ruleInAN: "Rule in AN-BP: Patient binges/purges AND has a BMI < 18.5 kg/m2. The low body weight confirms Anorexia Nervosa as the definitive diagnosis.",
        ruleInBN: "Rule in BN: Patient binges and purges at least once weekly for 3 months AND maintains a BMI >= 18.5 kg/m2.",
        pitfallToAvoid: "Never diagnose Bulimia Nervosa in an emaciated patient who vomits. Regardless of how many binges occur, if the weight is significantly low, it is AN-BP."
      },
      contrastingTreatments: {
        treatmentA_Name: "AN-BP Clinical Treatment Pathway",
        treatmentA_Steps: "Urgent medical stabilization, refeeding protocol to restore body weight, phosphate monitoring for Refeeding Syndrome, followed by CBT-E or MANTRA.",
        treatmentB_Name: "Bulimia Nervosa Treatment Pathway",
        treatmentB_Steps: "Outpatient CBT-E (20 sessions) focused on regular eating (3 meals + 3 snacks), eliminating purging triggers, and optional high-dose Fluoxetine."
      }
    },

    "BN_BED": {
      title: "Bulimia Nervosa vs. Binge Eating Disorder (BED)",
      commonality: "Both conditions feature recurrent objective binge eating episodes accompanied by a feeling of lack of control, secrecy, and profound post-binge distress.",
      distinguishingMarkers: [
        {
          feature: "Compensatory Behaviors",
          conditionA: "Bulimia Nervosa: Recurrent inappropriate compensatory behaviors to prevent weight gain (vomiting, laxatives, diuretics, fasting, extreme exercise).",
          conditionB: "Binge Eating Disorder: ABSENCE of recurrent inappropriate compensatory behaviors; the individual does NOT purge, fast, or exercise excessively."
        },
        {
          feature: "Weight Trajectory & Body Shape",
          conditionA: "Bulimia Nervosa: Weight typically remains within normal to slightly elevated range due to partial caloric absorption before purging.",
          conditionB: "Binge Eating Disorder: Frequently associated with steady weight gain, overweight, or obesity over time due to retained caloric excess."
        },
        {
          feature: "Over-Evaluation of Shape & Weight",
          conditionA: "Bulimia Nervosa: Mandatory diagnostic criterion; self-esteem is overwhelmingly dominated by body shape and weight.",
          conditionB: "Binge Eating Disorder: Frequently present, but NOT a mandatory DSM-5 diagnostic criterion (marked distress about binges is required)."
        }
      ],
      ruleInRuleOut: {
        ruleInBN: "Rule in BN: Objective binge episodes followed by regular compensatory vomiting, laxative abuse, or compensatory fasting/exercise.",
        ruleInBED: "Rule in BED: Objective binge episodes occurring at least once a week for 3 months with NO regular compensatory purging or fasting.",
        pitfallToAvoid: "Do not assume all overweight binge eaters have BED; some have Bulimia Nervosa or Atypical AN if they engage in regular compensatory purging."
      },
      contrastingTreatments: {
        treatmentA_Name: "Bulimia Nervosa Protocol",
        treatmentA_Steps: "CBT-E Stage 1 regular eating to break physiological starvation, cognitive restructuring of shape/weight over-evaluation, purge extinction.",
        treatmentB_Name: "Binge Eating Disorder Protocol",
        treatmentB_Steps: "CBT-E for BED, non-diet intuitive eating approaches, stimulus control, emotion regulation skills, and Lisdexamfetamine consideration."
      }
    },

    "AN_ARFID": {
      title: "Anorexia Nervosa vs. Avoidant/Restrictive Food Intake Disorder (ARFID)",
      commonality: "Both present with severe dietary restriction, significant weight loss, nutritional deficiencies, and anxiety surrounding meal times.",
      distinguishingMarkers: [
        {
          feature: "Core Cognitive Driver & Body Image",
          conditionA: "Anorexia Nervosa: Driven by intense fear of gaining weight/becoming fat, over-evaluation of shape and weight, and body image distortion.",
          conditionB: "ARFID: Driven by sensory aversion, fear of aversive consequences (choking/vomiting), or lack of interest; NO fear of weight gain, NO body distortion."
        },
        {
          feature: "Nature of Restricted Foods",
          conditionA: "Anorexia Nervosa: Avoids foods based on caloric density and fat content; seeks low-calorie diet foods to lose weight.",
          conditionB: "ARFID: Avoids foods based on sensory properties (texture, smell, color); happily eats high-calorie beige foods (chips, nuggets, chocolate)."
        },
        {
          feature: "Attitude Toward Low Body Weight",
          conditionA: "Anorexia Nervosa: Weight loss is viewed as an accomplishment, ego-syntonic proof of willpower, and defended aggressively.",
          conditionB: "ARFID: Weight loss is ego-dystonic or distressing; the individual often wishes they could gain weight or be bigger if food wasn't so difficult to eat."
        }
      ],
      ruleInRuleOut: {
        ruleInAN: "Rule in Anorexia: Preoccupation with body fatness, calorie counting, body checking, feeling fat despite low weight.",
        ruleInARFID: "Rule in ARFID: Food restriction based solely on sensory traits or choking fears; absence of drive for thinness or body checking.",
        pitfallToAvoid: "Beware of somatic rationalizations: Anorexic patients may claim 'I'm not trying to lose weight, food just makes my stomach hurt'. Inquire deeply into fear of weight gain."
      },
      contrastingTreatments: {
        treatmentA_Name: "Anorexia Nervosa Intervention",
        treatmentA_Steps: "Weight restoration, challenging the over-evaluation of shape and weight, body image cognitive therapy, FBT / CBT-E.",
        treatmentB_Name: "ARFID Intervention",
        treatmentB_Steps: "Sensory food chaining, exposure hierarchies to swallowing solids, high-calorie nutritional fortification, CBT-ARFID."
      }
    },

    "ATYPICAL_AN": {
      title: "Atypical Anorexia Nervosa (OSFED) vs. Full-Threshold Anorexia Nervosa",
      commonality: "Both share identical core cognitive psychopathology: extreme fear of weight gain, severe dietary restriction, body image distortion, and high psychological distress.",
      distinguishingMarkers: [
        {
          feature: "Current Body Mass Index (BMI)",
          conditionA: "Atypical Anorexia (OSFED): The individual's current body weight is at or ABOVE normal range (BMI >= 18.5 kg/m2).",
          conditionB: "Full-Threshold Anorexia: The individual's current body weight is significantly below normal (BMI < 18.5 kg/m2 in adults)."
        },
        {
          feature: "Magnitude and Velocity of Weight Loss",
          conditionA: "Atypical Anorexia: Frequently characterized by massive, rapid weight loss from an initially higher weight (e.g., dropping 30 kg in 5 months).",
          conditionB: "Full-Threshold Anorexia: Chronic low weight or sustained drop below the 18.5 BMI mark."
        },
        {
          feature: "Medical Instability Severity",
          conditionA: "Atypical Anorexia: Medically IDENTICAL to low-weight anorexia; rapid starvation causes dangerous sinus bradycardia, orthostatic hypotension, and bone loss.",
          conditionB: "Full-Threshold Anorexia: Overt emaciation with bradycardia, hypothermia, and multi-organ starvation compromise."
        }
      ],
      ruleInRuleOut: {
        ruleInAtypical: "Rule in Atypical AN: Severe cognitive anorexia criteria met, massive weight loss, but current BMI is >= 18.5 kg/m2.",
        ruleInFullAN: "Rule in Full AN: Severe cognitive anorexia criteria met AND current BMI is < 18.5 kg/m2.",
        pitfallToAvoid: "Medical bias danger: Doctors frequently praise atypical anorexia patients for 'healthy weight loss' while their heart rate is dropping to 35 bpm. Always check vitals!"
      },
      contrastingTreatments: {
        treatmentA_Name: "Atypical Anorexia Care Pathway",
        treatmentA_Steps: "Immediate medical monitoring for bradycardia/orthostasis, halting caloric restriction, weight stabilization, CBT-E, dismantling weight stigma.",
        treatmentB_Name: "Full Anorexia Care Pathway",
        treatmentB_Steps: "Medical refeeding to restore BMI above 18.5, intensive nutritional rehabilitation, CBT-E / FBT, preventing Refeeding Syndrome."
      }
    }
  },

  // Interactive Differential Presets
  differentialPresets: [
    { label: "AN-BP vs. Bulimia Nervosa", ids: ["AN_BP", "BN"] },
    { label: "Bulimia vs. Binge Eating Disorder", ids: ["BN", "BED"] },
    { label: "Anorexia vs. ARFID", ids: ["AN_R", "ARFID_SENSORY"] },
    { label: "Typical vs. Atypical Anorexia", ids: ["AN_R", "OSFED"] },
    { label: "All Adult Eating Disorders", ids: ["AN_R", "AN_BP", "BN", "BED", "OSFED"] }
  ],

  // Clinical Practice Scenarios
  scenarios: [
    {
      id: "M8_SCENARIO_1",
      title: "Scenario 1: Sophie (21yo) — Severe Emaciation, Baggy Clothes & Mirror Checking",
      presentation: "Sophie, a 21-year-old university student, is brought to the clinic by her worried housemates. She has lost 14 kg over the past six months and currently weighs 41 kg at a height of 165 cm (BMI = 15.1 kg/m2, severe range). Sophie wears three layers of oversized woolen jumpers even on warm days. When asked about her eating, she insists: 'I'm totally fine, I just eat clean and do intermittent fasting.' She consumes only black coffee, celery sticks, and 100 grams of plain boiled chicken per day, pacing around her apartment to ensure she achieves 25,000 steps daily. She spends hours standing before the mirror checking if her hipbones are visible and pinching her abdomen, tearfully expressing that she feels 'disgustingly fat.' She denies ever vomiting or using laxatives. Her GP records a resting heart rate of 38 bpm (severe sinus bradycardia) and a blood pressure of 82/50 mmHg.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis and severity grading for Sophie?",
        options: [
          { text: "Anorexia Nervosa, Restricting Type (Severe, BMI 15.1 kg/m2)", isCorrect: true },
          { text: "Bulimia Nervosa, Restricting Subtype", isCorrect: false },
          { text: "Avoidant/Restrictive Food Intake Disorder (ARFID)", isCorrect: false },
          { text: "Major Depressive Disorder with somatic wasting", isCorrect: false }
        ],
        hint: "Sophie has a BMI of 15.1 (severe anorexia range), intense fear of weight gain, body image distortion ('feels disgustingly fat'), and engages solely in restriction without purging.",
        explanation: "Sophie meets full DSM-5 criteria for Anorexia Nervosa, Restricting Type. Her BMI of 15.1 kg/m2 places her in the Severe category (BMI 15.0-15.99). She demonstrates severe energy restriction, intense fear of weight gain, profound body image distortion, compulsive exercise, and no history of bingeing or purging."
      },
      step2: {
        prompt: "Step 2: Clinical Management & Medical Safety — What is the immediate, life-preserving priority for Sophie?",
        options: [
          { text: "Immediate inpatient medical admission for cardiac telemetry and monitored nutritional refeeding, with daily serum phosphate checks to prevent Refeeding Syndrome.", isCorrect: true },
          { text: "Starting weekly outpatient psychodynamic therapy to explore family boundary conflicts.", isCorrect: false },
          { text: "Prescribing high-dose Fluoxetine to boost her appetite.", isCorrect: false },
          { text: "Encouraging Sophie to self-monitor her food in an app without medical oversight.", isCorrect: false }
        ],
        hint: "Her resting heart rate is 38 bpm and blood pressure is 82/50 mmHg. This is a medical emergency requiring hospitalization.",
        explanation: "Sophie is medically unstable: severe sinus bradycardia (<40 bpm) and hypotension (BP 82/50) are direct clinical criteria for urgent hospital admission. Outpatient therapy is unsafe. Inpatient refeeding must be initiated cautiously with serum phosphate monitoring to prevent fatal Refeeding Syndrome."
      }
    },
    {
      id: "M8_SCENARIO_2",
      title: "Scenario 2: Jessica (23yo) — Secret Bingeing, Purging & Normal BMI",
      presentation: "Jessica, a 23-year-old law clerk, presents seeking help for what she calls 'a disgusting secret.' For the past 8 months, four to five evenings a week, Jessica experiences overwhelming urges to eat. She drives through three different fast-food outlets, buying large pizzas, burgers, fries, and ice cream, and consumes thousands of calories in her car in a frenzied, trance-like state while feeling completely unable to stop. Immediately afterward, overwhelmed by intense guilt and panic about gaining weight, she goes to the bathroom, sticks her fingers down her throat to induce vomiting, and takes four Senna laxative tablets. Her weight is 62 kg at 168 cm (BMI = 22.0 kg/m2, completely normal range). On oral examination, her dentist recently noted marked erosion of the enamel on the back of her upper front teeth. She bases her entire self-worth on whether her jeans feel tight or loose.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the accurate diagnosis for Jessica?",
        options: [
          { text: "Bulimia Nervosa (Moderate severity, BMI 22.0 kg/m2)", isCorrect: true },
          { text: "Anorexia Nervosa, Binge-Eating/Purging Type", isCorrect: false },
          { text: "Binge Eating Disorder (BED)", isCorrect: false },
          { text: "Obsessive-Compulsive Disorder with contamination rituals", isCorrect: false }
        ],
        hint: "She engages in objective binges 4-5 times per week followed by purging (vomiting and laxatives), over-evaluates shape/weight, and has a normal BMI (22.0).",
        explanation: "Jessica fulfills DSM-5 criteria for Bulimia Nervosa (Moderate severity: 4-7 episodes per week). She exhibits recurrent objective binge eating with loss of control, followed by inappropriate compensatory behaviors (self-induced vomiting, laxatives) at a normal body weight (BMI 22.0 kg/m2, excluding Anorexia Nervosa)."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Psychological Intervention — According to Fairburn's CBT-E manual, what is the crucial first-line clinical strategy for Jessica in Stage 1?",
        options: [
          { text: "Establishing a strict pattern of 'Regular Eating' (3 planned meals + 2-3 planned snacks spaced every 3-4 hours) using real-time self-monitoring records to eliminate physiological starvation triggers.", isCorrect: true },
          { text: "Instructing Jessica to go on an intermittent fasting diet so she has fewer opportunities to eat.", isCorrect: false },
          { text: "Recommending that Jessica weigh herself three times a day to maintain accountability.", isCorrect: false },
          { text: "Focusing entirely on childhood grief without discussing food or vomiting.", isCorrect: false }
        ],
        hint: "Fairburn's CBT-E Stage 1 emphasizes 'Regular Eating' (eating every 3-4 hours) and real-time food records to break the binge-purge cycle.",
        explanation: "In CBT-E Stage 1, the foundational intervention is establishing 'Regular Eating' (3 planned meals and 2-3 snacks per day, never going more than 4 hours without eating). This stabilizes blood glucose, eliminates biological starvation urges that precipitate evening binges, and provides a structured platform to extinguish purging."
      }
    },
    {
      id: "M8_SCENARIO_3",
      title: "Scenario 3: David (44yo) — Late-Night Solitary Binges & Metabolic Strain",
      presentation: "David, a 44-year-old accountant, is referred by his endocrinologist following a diagnosis of Type 2 Diabetes and severe non-alcoholic fatty liver disease. David describes a 10-year history of late-night eating episodes. After his family goes to bed, he raids the kitchen pantry, consuming entire boxes of cereal, family-sized blocks of chocolate, packs of sliced ham, and whole loaves of bread until he feels painfully, uncomfortably bloated and sick. He eats rapidly, standing up at the counter in the dark. He hides the empty food wrappers at the bottom of the outside wheelie bin so his wife will not discover them. David expresses deep self-loathing, shame, and depression. He has never induced vomiting, never used laxatives, and hates exercising. His BMI is 34.5 kg/m2.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the diagnosis for David?",
        options: [
          { text: "Binge Eating Disorder (BED)", isCorrect: true },
          { text: "Bulimia Nervosa, Non-Purging Type", isCorrect: false },
          { text: "Night Eating Syndrome only", isCorrect: false },
          { text: "Bipolar I Disorder with manic over-consumption", isCorrect: false }
        ],
        hint: "He has objective binge episodes with rapid eating, eating until uncomfortably full, secrecy, and guilt, with NO compensatory behaviors (no vomiting, no laxatives).",
        explanation: "David meets full DSM-5 criteria for Binge Eating Disorder (BED). He experiences recurrent objective binge eating with loss of control, marked by eating rapidly, eating until uncomfortably full, eating in secret, and profound post-binge guilt/depression, in the total absence of recurrent compensatory purging behaviors."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Psychological & Medical Treatment — What is the guideline-endorsed management approach for David?",
        options: [
          { text: "CBT-E for BED focusing on regular eating patterns, identifying emotional triggers, and developing non-food coping mechanisms, with consideration of Lisdexamfetamine for severe binge frequency.", isCorrect: true },
          { text: "Prescribing a very low calorie keto diet (800 kcal/day) to force rapid weight loss.", isCorrect: false },
          { text: "Immediate bariatric surgery without any pre-operative eating disorder psychological treatment.", isCorrect: false },
          { text: "Hypnotherapy to make David forget the taste of junk food.", isCorrect: false }
        ],
        hint: "CBT-E for BED is first-line. Severe caloric diets worsen binge eating. Lisdexamfetamine is the only approved pharmacotherapy.",
        explanation: "CBT-E adapted for Binge Eating Disorder is the first-line evidence-based psychological treatment. It targets regular meal spacing, breaking the association between negative emotions and binge eating, and building self-monitoring. Lisdexamfetamine (Vyvanse) is TGA/FDA-approved as an adjunct for moderate-to-severe BED. Calorie-restricted diets must be avoided as they trigger rebound bingeing."
      }
    },
    {
      id: "M8_SCENARIO_4",
      title: "Scenario 4: Emma (19yo) — Massive Weight Loss with 'Normal' BMI",
      presentation: "Emma, a 19-year-old competitive rower, is brought in by her mother. Six months ago, Emma weighed 88 kg at 170 cm (BMI = 30.4 kg/m2). Following a coach's comment that she needed to 'lean down,' Emma embarked on a punishing diet. She cut her daily intake to 400 kcal, completely eliminating carbohydrates and fats, and trained for four hours every day. Over the past 24 weeks, she has lost an astonishing 26 kg, currently weighing 62 kg (BMI = 21.5 kg/m2, which is right in the 'normal' BMI range). Despite being at a normal weight, Emma's periods have stopped entirely (secondary amenorrhea), she fainted twice this week while standing up, and her resting pulse is 41 bpm. In the consultation, Emma cries hysterically, insisting she is 'still massive' and terrified that eating an apple will make her gain 5 kg. Her GP initially congratulated her on 'great weight loss.'",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — Under the DSM-5 classification, what is the precise diagnosis for Emma?",
        options: [
          { text: "Other Specified Feeding or Eating Disorder (OSFED) — Atypical Anorexia Nervosa", isCorrect: true },
          { text: "Typical Anorexia Nervosa, Restricting Type", isCorrect: false },
          { text: "Bulimia Nervosa", isCorrect: false },
          { text: "Adjustment Disorder with depressed mood", isCorrect: false }
        ],
        hint: "Emma meets every cognitive and medical criterion of Anorexia Nervosa (severe restriction, terror of weight gain, body image distortion, bradycardia, amenorrhea), EXCEPT her current BMI (21.5) is within the normal range.",
        explanation: "Emma meets criteria for Atypical Anorexia Nervosa (classified under OSFED in DSM-5). She fulfills all criteria for Anorexia Nervosa (intense fear of weight gain, extreme dietary restriction, body distortion, amenorrhea), except that despite losing 26 kg, her weight is currently within the normal BMI range (21.5 kg/m2)."
      },
      step2: {
        prompt: "Step 2: Clinical Formulation & Medical Risk Awareness — Why is Emma in critical medical danger despite her 'normal' BMI?",
        options: [
          { text: "Medical danger is determined by the velocity and magnitude of weight loss, not just current BMI. Severe starvation has caused dangerous bradycardia (41 bpm) and orthostatic collapse, requiring immediate medical stabilization.", isCorrect: true },
          { text: "Emma is medically completely safe because her BMI is 21.5 kg/m2, so no medical intervention is needed.", isCorrect: false },
          { text: "She only needs to be told to drink more water to raise her blood pressure.", isCorrect: false },
          { text: "She should be encouraged to lose another 5 kg to reach her athletic ideal weight.", isCorrect: false }
        ],
        hint: "Starvation complications (cardiac arrhythmias, organ damage) are driven by the sheer speed of weight loss. Her heart rate is 41 bpm.",
        explanation: "Atypical Anorexia carries identical medical morbidity to low-weight anorexia. Losing nearly 30% of her body mass in 6 months has triggered acute cardiovascular starvation responses (pulse 41 bpm, orthostatic syncope). Clinicians must treat Emma with the exact same medical vigilance and CBT-E protocol as low-weight anorexia."
      }
    }
  ],

  // Short Answer & Essay Practice
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "M8_SAQ_1",
        title: "SAQ 1: The Diagnostic Boundary Between AN-BP and Bulimia Nervosa",
        prompt: "Explain the precise diagnostic criteria that differentiate Anorexia Nervosa (Binge-Eating/Purging Type) from Bulimia Nervosa. Detail the diagnostic hierarchy rule and explain the clinical significance of this boundary. (4 marks)",
        criteria: [
          "Body Weight Criterion: In Anorexia Nervosa (Binge-Eating/Purging Type), the individual has significantly low body weight (typically BMI < 18.5 kg/m2 in adults or <85% expected weight); in Bulimia Nervosa, body weight is at or above the minimally normal range (BMI >= 18.5 kg/m2).",
          "Diagnostic Hierarchy Rule: The diagnosis of Anorexia Nervosa 'trumps' Bulimia Nervosa. DSM-5 Criterion E for Bulimia Nervosa explicitly states that the disturbance must not occur exclusively during episodes of Anorexia Nervosa.",
          "Clinical Significance: AN-BP carries a significantly higher mortality rate due to the combined physical toll of emaciation/starvation and electrolyte shifts from purging; immediate treatment priority in AN-BP is nutritional restoration and medical stabilization, whereas BN prioritizes outpatient regular eating."
        ],
        modelAnswer: "1. The Body Weight Boundary:\n- Anorexia Nervosa, Binge-Eating/Purging Type (AN-BP) requires that the individual meets Criterion A for Anorexia: restriction of energy intake leading to significantly low body weight (typically BMI < 18.5 kg/m2 in adults).\n- Bulimia Nervosa (BN) requires that the individual is NOT underweight (BMI >= 18.5 kg/m2). Bulimic patients maintain a weight in the normal or overweight range.\n\n2. The Diagnostic Hierarchy Rule:\n- Under DSM-5 nosology, Anorexia Nervosa holds diagnostic priority over Bulimia Nervosa. If an individual meets all behavioral criteria for Bulimia (bingeing and purging three times a day) but their BMI is 16.5 kg/m2, the definitive diagnosis is AN-BP, not BN (per BN Criterion E exclusion).\n\n3. Clinical Significance:\n- AN-BP carries the highest mortality rate of all eating disorders due to the lethal combination of severe starvation (cardiac muscle atrophy) and purging-induced hypokalemia.\n- Treatment priorities differ: AN-BP requires urgent medical refeeding and weight restoration, whereas BN is treated with outpatient CBT-E focused on regular eating without needing refeeding protocols."
      },
      {
        id: "M8_SAQ_2",
        title: "SAQ 2: Fairburn's Transdiagnostic CBT-E Model & Four Stages",
        prompt: "Outline the core cognitive maintaining mechanism in Fairburn's transdiagnostic model of eating disorders. Summarize the clinical goals of Stage 1 and Stage 3 in CBT-E. (5 marks)",
        criteria: [
          "Core Maintaining Mechanism: Over-evaluation of shape and weight and their control (self-worth judged almost exclusively on shape/weight), which drives rigid dietary restraint, leading to the binge-purge maintenance cycle.",
          "CBT-E Stage 1 Goals (Starting Well): Establishing the collaborative therapeutic alliance, personalized formulation mapping, psychoeducation, in-session collaborative weighing (weekly), real-time self-monitoring records, and establishing 'Regular Eating' (3 meals + 2-3 snacks every 3-4 hours).",
          "CBT-E Stage 3 Goals (The Body of Treatment): Tackling the primary maintaining mechanisms: addressing the over-evaluation of shape/weight (body checking/avoidance, feeling fat), challenging rigid dietary rules, addressing event-related mood intolerance, and targeting external maintaining mechanisms (clinical perfectionism, core low self-esteem, interpersonal problems)."
        ],
        modelAnswer: "1. Core Maintaining Mechanism:\nFairburn's transdiagnostic model posits that Anorexia Nervosa, Bulimia Nervosa, and OSFED share a central cognitive psychopathology: the over-evaluation of shape and weight and their control. Unlike healthy individuals who base self-esteem on multiple domains, individuals with eating disorders judge their entire self-worth almost exclusively in terms of their body weight, shape, and ability to control food intake. This belief drives extreme, rigid dietary restraint, which precipitates physiological starvation and psychological deprivation, triggering objective binge eating and subsequent compensatory purging.\n\n2. CBT-E Stage 1 Goals (Weeks 1–4, 'Starting Well'):\n- Establishing a personalized collaborative formulation of the patient's maintaining cycle.\n- Introducing in-session collaborative weekly weighing (interpreting weight trends, overcoming weigh-in phobia).\n- Real-time self-monitoring records completed immediately after eating.\n- Implementing 'Regular Eating' (a strict pattern of 3 planned meals and 2–3 snacks spaced 3–4 hours apart) to stabilize biological hunger and eliminate chaotic eating.\n\n3. CBT-E Stage 3 Goals (Weeks 8–16, 'The Core Mechanisms'):\n- Tackling the over-evaluation of shape and weight directly: eliminating compulsive body checking (pinching, measuring) and body avoidance; addressing the cognitive error of 'feeling fat'.\n- Systematically breaking rigid dietary rules (introducing 'fear foods' via behavioral experiments).\n- Addressing mood-driven eating (mood intolerance) and external maintaining factors (clinical perfectionism, core low self-esteem, interpersonal conflict)."
      },
      {
        id: "M8_SAQ_3",
        title: "SAQ 3: Clinical Utility of the EDE 17.0D and CIA 3.0",
        prompt: "Describe the structure and purpose of the Eating Disorder Examination (EDE 17.0D) and the Clinical Impairment Assessment (CIA 3.0). How do these instruments complement each other in clinical assessment? (5 marks)",
        criteria: [
          "EDE 17.0D Structure: Investigator-based semi-structured interview assessing the preceding 28 days and 3 months; generates frequency counts of behavioral episodes (OBEs, SBEs, purges) and four subscales (Restraint, Eating Concern, Shape Concern, Weight Concern).",
          "EDE Purpose: Gold-standard diagnostic assessment of eating disorder psychopathology and behavioral frequency.",
          "CIA 3.0 Structure: 16-item self-report questionnaire focusing on the past 28 days, completed immediately after an eating measure; measures secondary psychosocial impairment across mood/self-perception, cognitive, interpersonal, and work domains (cutoff >=16 indicates clinical impairment).",
          "Complementarity: The EDE measures specific eating disorder psychopathology (symptoms and cognitions); the CIA measures the functional toll and psychosocial disability secondary to those symptoms. Together they provide a complete picture of severity and treatment response."
        ],
        modelAnswer: "1. Eating Disorder Examination (EDE 17.0D):\n- An investigator-based semi-structured interview considered the gold-standard instrument for assessing eating disorders.\n- Structure: Evaluates the past 28 days (and past 3 months for diagnostic criteria). It yields frequency data for key behaviors (Objective Bulimic Episodes, subjective binges, vomiting, laxatives, excessive exercise) and four dimensional subscale scores: Restraint, Eating Concern, Shape Concern, and Weight Concern (rated on 7-point scales).\n- Purpose: Diagnostically maps eating disorder psychopathology and behavioral severity.\n\n2. Clinical Impairment Assessment (CIA 3.0):\n- A 16-item self-report questionnaire specifically designed to measure the severity of psychosocial impairment secondary to eating disorder features over the past 28 days.\n- Structure: Covers four domains: mood and self-perception, cognitive functioning, interpersonal functioning, and work/study performance. Scored from 0 to 48, with a validated global cutoff score of >= 16 indicating clinically significant impairment.\n\n3. Clinical Complementarity:\n- The EDE measures the presence and frequency of eating symptoms and core cognitions (what the patient does and thinks about food/body).\n- The CIA measures how severely those symptoms disable the patient's daily life, relationships, and emotional wellbeing (the functional cost of the disorder).\n- Administering the CIA immediately after the EDE ensures eating features are salient, providing clinicians with both a diagnostic severity metric and a functional disability baseline to track recovery."
      },
      {
        id: "M8_SAQ_4",
        title: "SAQ 4: Refeeding Syndrome — Pathophysiology and Prevention",
        prompt: "Explain the pathophysiology of Refeeding Syndrome in severely malnourished eating disorder patients. Identify the key biochemical marker and state three medical protocols required to prevent it during refeeding. (4 marks)",
        criteria: [
          "Pathophysiology: During prolonged starvation, the body shifts to fat/ketone metabolism, depleting intracellular mineral stores. When carbohydrates are suddenly reintroduced, the pancreas secretes insulin, stimulating cellular uptake of glucose, phosphate, potassium, and magnesium. This causes a precipitous drop in serum phosphate (hypophosphatemia).",
          "Consequences: Acute hypophosphatemia impairs ATP production, causing fatal cardiac arrest, respiratory failure, acute delirium, and rhabdomyolysis.",
          "Key Biochemical Marker: Serum Phosphate (along with Potassium and Magnesium).",
          "Prevention Protocols (any three): (1) Gradual caloric refeeding starting low (e.g., 1000-1200 kcal/day or ~30-40 kcal/kg/day) and titrating up slowly; (2) Daily blood monitoring of electrolytes, phosphate, and magnesium for the first 1-2 weeks; (3) Prophylactic oral or IV phosphate and thiamine (vitamin B1) supplementation prior to refeeding; (4) Continuous cardiac telemetry and fluid balance monitoring."
        ],
        modelAnswer: "1. Pathophysiology:\nIn severe, prolonged starvation (e.g., Anorexia Nervosa), the body shifts from carbohydrate to fat and protein catabolism, depleting total body intracellular mineral stores. When nutrition—particularly carbohydrates—is reintroduced, circulating glucose triggers a rapid surge in pancreatic insulin secretion. Insulin drives glucose, phosphate, potassium, and magnesium out of the bloodstream and into cells for glycogen, protein, and ATP synthesis.\n\n2. Fatal Clinical Consequences:\nThis sudden intracellular shift causes profound, precipitous serum hypophosphatemia (abnormally low phosphate), alongside hypokalemia and hypomagnesemia. Because phosphate is essential for erythrocyte 2,3-DPG and intracellular ATP generation, severe hypophosphatemia leads to acute myocardial failure, cardiac arrhythmias, diaphragmatic respiratory failure, seizures, delirium, and sudden death.\n\n3. Key Biochemical Marker:\nSerum Phosphate (PO4).\n\n4. Prevention Protocols:\n- Gradual Caloric Titration: Initiate refeeding at conservative caloric levels (e.g., 1000–1200 kcal/day) under medical supervision, increasing calories gradually every 2–3 days.\n- Daily Laboratory Monitoring: Test serum phosphate, potassium, magnesium, and electrolytes daily for the first 7 to 14 days of refeeding.\n- Prophylactic Supplementation: Administer prophylactic thiamine (vitamin B1) and oral or IV phosphate supplementation before and during the initial refeeding phase."
      },
      {
        id: "M8_SAQ_5",
        title: "Exam Practice SAQ 1 (5 Marks): Binge Eating & Purging Presentations (Bulimia Nervosa vs Anorexia Nervosa Binge/Purge)",
        prompt: "“You are assessing a 21-year-old university student who reports weekly episodes of consuming objectively large quantities of food accompanied by a sense of loss of control, followed by self-induced vomiting and rigorous exercise. Recurrent binge eating and compensatory purging are key features of the presentation. What eating disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your clinical assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Bulimia Nervosa (BN) and Anorexia Nervosa, Binge-Eating/Purging Type (AN-BP).",
          "1 mark for body weight / BMI diagnostic hierarchy rule: Anorexia Nervosa requires significantly low body weight (BMI < 18.5 in adults); Bulimia Nervosa requires weight at or above normal BMI (>= 18.5); under DSM-5, significantly low body weight trumps BN and commands an AN diagnosis.",
          "1 mark for metric of diagnostic severity: Bulimia Nervosa severity is determined by the weekly frequency of inappropriate compensatory behaviors (mild: 1-3, moderate: 4-7, severe: 8-13, extreme: >=14); Anorexia Nervosa severity is graded by current body mass index (BMI).",
          "1 mark for acute medical complications and Refeeding Syndrome risk: AN-BP carries imminent risk of Refeeding Syndrome (hypophosphatemia) upon nutritional reintroduction; BN carries acute electrolyte derangements from purging (hypokalemic hypochloremic alkalosis, dental erosion, Russell's sign)."
        ],
        modelAnswer: "Part 1: Most Likely Eating Disorders (2 marks)\n1. Bulimia Nervosa (BN) [1 mark]\n2. Anorexia Nervosa, Binge-Eating/Purging Type (AN-BP) [1 mark]\n(Both share the behavioral presentation of objective binge eating and compensatory purging behaviors).\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Body Weight & Diagnostic Hierarchy Rule: The primary diagnostic dividing line between BN and AN-BP is the patient's body weight. Under DSM-5 diagnostic rules, Anorexia Nervosa requires a significantly low body weight relative to age, sex, and developmental trajectory (BMI < 18.5 kg/m2 in adults, or <85% of expected weight). Bulimia Nervosa requires body weight at or above a minimally normal level (BMI >= 18.5). If an individual meets all criteria for BN but is significantly underweight, the diagnosis of Anorexia Nervosa (Binge-Eating/Purging Type) strictly supercedes BN.\n2. Grading Metric for Diagnostic Severity: In Bulimia Nervosa, severity is determined by the average weekly frequency of inappropriate compensatory behaviors (mild: 1–3/wk; moderate: 4–7/wk; severe: 8–13/wk; extreme: >=14/wk). In Anorexia Nervosa (including AN-BP), severity is determined exclusively by the degree of emaciation and body mass index (mild: BMI >= 17; moderate: BMI 16–16.99; severe: BMI 15–15.99; extreme: BMI < 15 kg/m2).\n3. Medical Risk Profiles & Inpatient Admission Criteria: Although both disorders carry severe risks of cardiac arrhythmia due to purging-induced hypokalemia, AN-BP carries the critical physiological danger of Refeeding Syndrome (precipitous intracellular shifts of serum phosphate) upon nutritional restoration, necessitating medical stabilization protocols. Bulimia Nervosa medical assessment focuses primarily on complications of gastric acid purging, including parotid gland enlargement, dental enamel demineralization, esophageal tears (Mallory-Weiss syndrome), and calluses on the dorsum of the hand (Russell's sign)."
      },
      {
        id: "M8_SAQ_6",
        title: "Exam Practice SAQ 2 (5 Marks): Uncontrolled Binge Eating Without Compensation (Binge Eating Disorder vs Bulimia Nervosa)",
        prompt: "“You are assessing a 34-year-old client who reports eating uncontrollable amounts of food in secret, accompanied by severe guilt, distress, and depression. Recurrent binge eating episodes and psychological distress are key features of the presentation. What eating disorders would be most likely (2 marks) and what key features would you use to assess and differentiate them in your assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Binge Eating Disorder (BED) and Bulimia Nervosa (BN).",
          "1 mark for presence versus absence of compensatory behaviors: Bulimia Nervosa requires recurrent inappropriate compensatory behaviors (purging, fasting, laxatives, driven exercise) to prevent weight gain; Binge Eating Disorder explicitly excludes regular compensatory behaviors.",
          "1 mark for behavioral characteristics of the binge episode: BED requires at least 3 of 5 specific behavioral indicators (eating much more rapidly, eating until uncomfortably full, eating large amounts when not hungry, eating alone out of embarrassment, feeling disgusted/guilty); BN does not require these specific behavioral descriptors.",
          "1 mark for cognitive overvaluation of shape and weight (Fairburn CBT-E formulation): In Bulimia Nervosa, overvaluation of shape/weight is a mandatory core diagnostic criterion; in BED, while shape dissatisfaction is common, overvaluation is not required for diagnosis."
        ],
        modelAnswer: "Part 1: Most Likely Eating Disorders (2 marks)\n1. Binge Eating Disorder (BED) [1 mark]\n2. Bulimia Nervosa (BN) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Presence vs. Absence of Inappropriate Compensatory Behaviors: The cardinal diagnostic distinction is that Bulimia Nervosa requires recurrent inappropriate compensatory behaviors (e.g., self-induced vomiting, misuse of laxatives/diuretics, fasting, or driven compulsive exercise) intended to prevent weight gain, occurring at least once weekly for 3 months. Binge Eating Disorder explicitly requires the absence of regular inappropriate compensatory behaviors.\n2. Behavioral Descriptors of Binge Episodes: DSM-5 diagnostic criteria for BED require that binge eating episodes are associated with at least 3 of 5 distinct behavioral indicators: (a) eating much more rapidly than normal, (b) eating until feeling uncomfortably full, (c) eating large amounts of food when not feeling physically hungry, (d) eating alone due to embarrassment over the quantity consumed, and (e) feeling disgusted with oneself, depressed, or very guilty afterward. These specific descriptors are not mandated for BN.\n3. Role of Overvaluation of Shape & Weight: In Bulimia Nervosa, the cognitive over-evaluation of body shape and weight—judging self-worth predominantly or exclusively in terms of shape and weight (Fairburn CBT-E transdiagnostic model)—is an indispensable, mandatory diagnostic criterion (Criterion D). In Binge Eating Disorder, although marked distress regarding binge eating is mandatory, cognitive overvaluation of shape and weight is not required for a diagnosis (though it often signifies greater clinical severity when present)."
      },
      {
        id: "M8_SAQ_7",
        title: "Exam Practice SAQ 3 (5 Marks): Severe Food Restriction Across Body Weights (Atypical Anorexia Nervosa vs Anorexia Nervosa)",
        prompt: "“You are assessing an 18-year-old client who has lost 25 kg in 6 months through severe calorie restriction, intense exercise, and relentless fear of gaining weight, yet their current BMI is 22.0. Intense fear of weight gain, cognitive overvaluation of shape/weight, and restrictive behaviors are key features of the presentation. What eating disorder classifications would be most likely (2 marks) and what key features would you use to assess and differentiate them in your assessment (3 marks)?”",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "1 mark each (max 2 marks) for identifying Other Specified Feeding or Eating Disorder (OSFED) — Atypical Anorexia Nervosa and Anorexia Nervosa (Restricting type).",
          "1 mark for current absolute body weight / BMI cutoff: Anorexia Nervosa requires current significantly low body weight (BMI < 18.5); Atypical Anorexia meets all cognitive and behavioral criteria for AN except that despite substantial weight loss, the individual's weight is within or above the normal range (BMI >= 18.5).",
          "1 mark for medical instability and physiological compromise despite normal BMI: Atypical AN patients experience equivalent or worse medical compromise (severe sinus bradycardia, orthostatic hypotension, hypothermia) driven by the rapid velocity and amount of weight suppression.",
          "1 mark for psychometric severity and treatment equivalency: Assessment on the EDE 17.0D and CIA 3.0 reveals identical or greater eating disorder cognitions, distress, and impairment, mandating identical evidence-based treatment (CBT-E / FBT)."
        ],
        modelAnswer: "Part 1: Most Likely Eating Disorder Classifications (2 marks)\n1. Other Specified Feeding or Eating Disorder (OSFED) — Atypical Anorexia Nervosa [1 mark]\n2. Anorexia Nervosa, Restricting Type (AN-R) [1 mark]\n\nPart 2: Key Distinguishing Features for Assessment (3 marks - 1 mark each for 3 distinct features)\n1. Current Weight / BMI Diagnostic Threshold: Anorexia Nervosa requires that the individual is currently at a 'significantly low body weight' (DSM-5 Criterion A: BMI < 18.5 kg/m2 in adults, or below the 5th percentile in children/adolescents). Atypical Anorexia Nervosa meets all clinical criteria for Anorexia Nervosa (intense fear of gaining weight, persistent restriction of intake, and severe body image disturbance), except that despite significant, medically dangerous weight loss, the individual's current weight remains at or above the normal range (e.g., BMI 22.0).\n2. Severity of Physiological and Cardiovascular Instability: Clinical assessment must not equate a normal BMI with medical safety. Research (Clough, Fairburn) proves that individuals with Atypical AN experience equivalent physiological instability—including severe sinus bradycardia (<40 bpm), orthostatic hypotension, hypothermia, and amenorrhea—as low-weight AN. Medical instability is driven by the absolute amount and rapidity of weight suppression (e.g., losing 25 kg in 6 months) and acute negative energy balance, rather than the absolute BMI number alone.\n3. Psychometric Severity & Clinical Stigma: Comprehensive assessment utilizing the Eating Disorder Examination (EDE 17.0D) and Clinical Impairment Assessment (CIA 3.0) demonstrates that individuals with Atypical AN frequently score higher on cognitive eating pathology (dietary restraint, shape concern, guilt) and suicidal ideation than low-weight AN patients. Furthermore, they face higher clinical stigma and delayed diagnosis because their restrictive illness is often praiseworthy in fat-phobic healthcare settings before acute collapse occurs."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Essay Prompt: The Transdiagnostic Formulation & Stepped Care of Adult Eating Disorders",
      prompt: "Critically examine Fairburn's transdiagnostic cognitive behavioral model of eating disorders. In your essay, delineate the diagnostic boundaries and clinical trajectories between Anorexia Nervosa (Restricting vs. Binge/Purge), Bulimia Nervosa, Binge Eating Disorder, and Atypical Anorexia Nervosa. Furthermore, analyze how the over-evaluation of shape and weight drives rigid dietary restraint, evaluate the medical risks of refeeding, and design a staged, multidisciplinary treatment plan for a patient presenting with severe bulimic symptoms.",
      timeAllowedMinutes: 45,
      suggestedWordCount: "1000 - 1400 words",
      rubricPillars: [
        {
          name: "Pillar 1: Transdiagnostic Theory & Nosology",
          weight: "25%",
          description: "Sophisticated analysis of Fairburn's transdiagnostic CBT-E model; DSM-5 criteria across AN-R, AN-BP, BN, BED, and OSFED (Atypical AN); explaining the diagnostic hierarchy rule and clinical migrations across diagnoses."
        },
        {
          name: "Pillar 2: Maintaining Mechanisms & Psychopathology",
          weight: "25%",
          description: "Detailed dissection of the core over-evaluation of shape and weight; the mechanism of rigid dietary restraint; the Abstinence Violation Effect; mood intolerance; and maintaining external domains (clinical perfectionism, low self-esteem)."
        },
        {
          name: "Pillar 3: Psychometric Assessment & Medical Risk",
          weight: "25%",
          description: "Mastery of assessment instruments (EDE 17.0D interview subscales and CIA 3.0 impairment scale); comprehensive medical risk assessment (QTc, electrolytes, hypokalemia); detailed pathophysiology and prevention of Refeeding Syndrome."
        },
        {
          name: "Pillar 4: Multidisciplinary Stepped Care & Treatment Execution",
          weight: "25%",
          description: "Evidence-based clinical intervention: staging of CBT-E (Stage 1 regular eating and collaborative weighing; Stage 3 mechanism dismantling; Stage 4 relapse prevention); medical oversight; dietetic integration; and pharmacotherapy (Fluoxetine/Lisdexamfetamine)."
        }
      ],
      modelOutline: [
        "1. Introduction: The evolution of eating disorder nosology; Fairburn's transdiagnostic insight (commonality of core cognitive psychopathology); thesis asserting the need for mechanism-targeted CBT-E and vigilant medical risk management.",
        "2. Diagnostic Boundaries & Diagnostic Hierarchies: Systematic contrast of AN-R, AN-BP, BN, and BED; the critical body weight / BMI boundary separating AN-BP from BN; Atypical Anorexia Nervosa (OSFED) and the danger of weight-based diagnostic bias.",
        "3. Cognitive Maintaining Mechanisms: How the over-evaluation of shape and weight leads to rigid dietary rules; the Abstinence Violation Effect and the inevitable transition from restriction to objective binge eating; compensatory purging loops.",
        "4. Assessment & Medical Risk Management: Administering the EDE 17.0D and CIA 3.0; physiological complications of starvation and purging (hypokalemic alkalosis, cardiac arrhythmias); the pathophysiology of Refeeding Syndrome (hypophosphatemia) and preventive protocols.",
        "5. Evidence-Based Multidisciplinary Treatment Plan: Detailed execution of the 4 stages of CBT-E; prioritizing 'Regular Eating' in Stage 1; tackling body image in Stage 3; integrating medical GP monitoring and specialist dietetics."
      ]
    }
  }
};
