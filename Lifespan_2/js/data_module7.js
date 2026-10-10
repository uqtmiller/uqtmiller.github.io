// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 7: Childhood Feeding Disorders & ARFID
const MODULE_7_DATA = {
  moduleId: 7,
  title: "Module 7: Childhood Feeding Disorders & ARFID",
  subtitle: "Pediatric Feeding Disorder, ARFID Phenotypes, Bio-Behavioral Formulations, and Multidisciplinary Interventions",
  coordinator: "Dr Erinn Hawkins (Clinical Psychologist, MAPS, Senior Lecturer)",

  // High-yield Theoretical Core
  theoreticalPillars: [
    {
      title: "The Goday Consensus Model of Pediatric Feeding Disorder (PFD)",
      author: "Goday et al. (2019) International Consensus",
      summary: "PFD provides an overarching functional umbrella defined as impaired oral intake that is not age-appropriate and is associated with dysfunction in at least one of four domains: Medical (cardiorespiratory, aspiration, GI pain), Nutritional (faltering growth, micronutrient deficiency), Feeding Skill (oral-motor dysfunction, modified texture needs), and/or Psychosocial (avoidance, mealtime distress, parent-child conflict). Requires symptoms daily for >=2 weeks (acute <3 months, chronic >=3 months)."
    },
    {
      title: "ARFID Phenotypes & The Nine-Item ARFID Screen (NIAS)",
      author: "DSM-5-TR / Thomas & Eddy / Zickgraf et al.",
      summary: "Avoidant/Restrictive Food Intake Disorder (ARFID) represents restrictive eating leading to nutritional deficiency or psychosocial impairment without body shape/weight distortion. Clinically formulated across three core driver phenotypes: (1) Sensory sensitivity (taste, texture, smell, appearance), (2) Fear of aversive consequences (choking, vomiting, pain, allergic reaction), and (3) Lack of interest in eating/food (low appetite, early satiety, forgetting to eat). Screened using the Nine-Item ARFID Screen (NIAS)."
    },
    {
      title: "Bio-Behavioral Maintenance Cycles in Childhood Feeding",
      author: "Berlin et al. (2009) / Dr Erinn Hawkins",
      summary: "Feeding problems become self-maintaining via operant feedback loops. Vulnerability (sensory hypersensitivity, medical trauma) combines with a triggering event (choking, reflux pain). The child displays mealtime refusal/distress; anxious caregivers accommodate by removing feared food or offering preferred high-sugar liquids to maintain calories. Short-term relief negatively reinforces child avoidance and caregiver accommodation, cementing chronic dietary restriction."
    },
    {
      title: "Multidisciplinary Evidence-Based Interventions",
      author: "Thomas & Eddy (CBT-ARFID) / Lock et al. (FBT-ARFID)",
      summary: "Treatment matches the maintaining mechanisms: Family-Based Treatment (FBT-ARFID) empowers parents to re-establish regular mealtime structure and externalize meal anxiety; CBT-ARFID utilizes gradual exposure hierarchies, sensory tasting ladders, and interoceptive exposure; while Pediatric Feeding Disorder requires Speech Pathology/OT for oral-motor mechanics."
    }
  ],

  // Clinical Table of Disorders
  disorders: [
    {
      id: "ARFID_SENSORY",
      code: "DSM-5 307.59 (F50.82)",
      name: "ARFID — Sensory Sensitivity Phenotype",
      type: "Feeding & Eating Disorder (Sensory-Avoidant Subtype)",
      ageRange: "Early Childhood through Adulthood (Frequently co-occurs with ASD & ADHD)",
      coreDefinition: "Restrictive food intake driven by heightened sensitivity to the sensory characteristics of food (taste, texture, smell, temperature, visual appearance, brand packaging), resulting in an extremely narrow range of accepted foods ('safe foods').",
      dsmCriteria: [
        "An eating or feeding disturbance (e.g., apparent lack of interest in eating or food; avoidance based on the sensory characteristics of food; concern about aversive consequences of eating) as manifested by persistent failure to meet appropriate nutritional and/or energy needs associated with one (or more) of the following:",
        "1. Significant weight loss (or failure to achieve expected weight gain or faltering growth in children).",
        "2. Significant nutritional deficiency (e.g., scurvy, zinc, iron, vitamin deficiencies).",
        "3. Dependence on enteral feeding or oral nutritional supplements.",
        "4. Marked interference with psychosocial functioning (inability to eat with peers, attend camps, or eat outside the home).",
        "The disturbance is not better explained by lack of available food or by an associated culturally sanctioned practice.",
        "The eating disturbance does not occur exclusively during the course of anorexia nervosa or bulimia nervosa, and there is NO evidence of a disturbance in the way in which one's body weight or shape is experienced.",
        "Not attributable to a concurrent medical condition or another mental disorder (or exceeds what would normally be expected)."
      ],
      howToDiagnose: [
        "Comprehensive clinical mealtime interview and dietary log assessing total number of accepted foods (often <10-15 foods, typically bland, dry, beige carbohydrates).",
        "Standardized screening: Nine-Item ARFID Screen (NIAS - Sensory Sensitivity subscale), Behavioral Pediatrics Feeding Assessment Scale (BPFAS).",
        "Sensory processing evaluation (Sensory Profile 2) assessing tactile, olfactory, and gustatory hyper-reactivity.",
        "Crucial negative rule-out: Detailed inquiry confirming complete absence of drive for thinness, fear of weight gain, or body image distortion."
      ],
      factorsLookedFor: [
        "Texture Aversion: Extreme gagging, vomiting, or panic when encountering mixed textures (e.g., casseroles, soup with chunks), slimy textures, wet vegetables, or meat gristle.",
        "Brand Rigidity: Accepts only one exact brand and preparation (e.g., only Inghams chicken nuggets cooked for exactly 18 minutes; refuses if packaging or recipe changes).",
        "Mealtime Battles: Intense behavioral meltdowns if non-preferred foods touch safe foods on the plate ('food touching contamination').",
        "High Neurodevelopmental Overlap: Highly prevalent in autistic individuals (up to 70% exhibit atypical eating) and those with sensory processing sensitivities."
      ],
      potentialTreatments: [
        "Food Chaining (Fraker et al.): Systematic behavioral method introducing new foods that share sensory properties (color, shape, crunch) with current safe foods.",
        "CBT-ARFID Sensory Tasting Ladder: Stepwise exposure protocol (Look -> Smell -> Touch -> Kiss -> Lick -> Chew & Spit -> Swallow).",
        "Environmental Accommodations: Dividing plates, predictable meal structure, separating tasting exposures from primary nutritional meal times.",
        "Dietitian Collaboration: Micronutrient supplementation (powders, unflavored vitamins) to prevent deficiencies while expanding food range."
      ],
      clinicalPearl: "Never force an autistic child with sensory ARFID to 'just take one bite' of a terrifying texture at dinnertime. High sensory distress activates the sympathetic freeze/flight response, exacerbating gagging and solidifying mealtime trauma."
    },
    {
      id: "ARFID_AVERSIVE",
      code: "DSM-5 307.59 (F50.82)",
      name: "ARFID — Fear of Aversive Consequences Phenotype",
      type: "Feeding & Eating Disorder (Conditioned Avoidance Subtype)",
      ageRange: "All Ages (Acute onset often follows an index traumatic event)",
      coreDefinition: "Acute restriction of food intake driven by intense fear and conditioned avoidance of aversive physical consequences such as choking, vomiting (emetophobia), severe abdominal pain, or anaphylactic allergic reactions.",
      dsmCriteria: [
        "Meets general DSM-5 ARFID criteria (insufficient nutritional/caloric intake causing weight loss, nutritional deficiency, supplement dependence, or psychosocial impairment).",
        "Eating avoidance is specifically characterized by acute dread of catastrophic bodily harm following ingestion (choking to death, vomiting, suffocating, gastrointestinal rupture).",
        "Dietary restriction typically involves refusing solid foods, filtering liquids, chewing food endlessly and spitting it out, or subsisting entirely on smooth purees/liquids.",
        "No drive for thinness, no body image preoccupation.",
        "Symptoms persist despite medical clearance confirming normal swallowing anatomy and physiology."
      ],
      howToDiagnose: [
        "Detailed chronological history identifying the triggering event (e.g., choking on a piece of meat, severe viral gastroenteritis, observing another person vomit).",
        "Medical and swallowing clearance: Pediatric gastroenterology consult and videofluoroscopic swallow study (VFSS) confirming anatomically intact, safe swallow.",
        "NIAS Fear of Aversive Consequences subscale; PediEAT or BPFAS.",
        "Observation of mealtime behaviors: Hypervigilant scanning of food, excessive chewing (pocketing food in cheeks for 30 minutes), panic upon swallowing solid bolus."
      ],
      factorsLookedFor: [
        "Index Event: Acute onset clearly traced to an acute traumatic choking, vomiting, or severe pain episode.",
        "Rapid Weight Loss: Marked, rapid weight loss over weeks due to sudden cessation of solid food intake.",
        "Safety Behaviors: Diluting food with water, cutting food into microscopic pieces, refusing to eat when home alone, carrying water everywhere.",
        "Reassurance Seeking: Constantly asking parents: 'Is this food safe? Am I going to choke? Is this expired?'"
      ],
      potentialTreatments: [
        "CBT-ARFID for Aversive Consequences (Exposure & Response Prevention): Interoceptive exposure to throat sensations and gradual hierarchy of solid food textures.",
        "Parental Coaching & Reassurance Reduction: Training parents to eliminate safety behaviors, cease offering pureed alternatives, and provide calm behavioral coaching.",
        "In-Vivo Food Exposures: Guided practice swallowing soft solids (banana, yogurt with soft fruit, bread) progressing to challenging dense meats and vegetables.",
        "Diaphragmatic Breathing & Somatic Regulation: Down-regulating sympathetic hyperarousal prior to and during meal times."
      ],
      clinicalPearl: "The hallmark of post-choking ARFID is the contrast between the child's desperate hunger and their terror of swallowing. They genuinely want to eat, but their throat muscles clench in anticipatory panic, creating a 'globus' sensation that they misinterpret as actual physical choking."
    },
    {
      id: "ARFID_INTEREST",
      code: "DSM-5 307.59 (F50.82)",
      name: "ARFID — Lack of Interest in Eating / Food Phenotype",
      type: "Feeding & Eating Disorder (Appetite & Satiety Subtype)",
      ageRange: "Infancy through Adulthood (Common in ADHD and children with poor interoception)",
      coreDefinition: "Restrictive eating characterized by an apparent absence of appetite, lack of interest in eating or food, rapid early satiety, and viewing meal times as an unpleasant chore that interrupts preferred activities.",
      dsmCriteria: [
        "Meets general DSM-5 ARFID criteria (failure to meet nutritional/caloric needs with associated faltering growth, weight loss, or psychosocial impairment).",
        "Primary behavioral manifestation is extreme difficulty finishing meals, eating tiny quantities, easily distracted away from the table, and forgetting to eat.",
        "Absence of hunger cues (poor interoceptive awareness of hunger and fullness).",
        "No body shape/weight distortion, no fear of choking/vomiting, and no marked sensory aversions to specific food textures."
      ],
      howToDiagnose: [
        "Mealtime behavioral observation: Eating extremely slowly, wandering away from the table, taking 60+ minutes to consume a small snack.",
        "NIAS Lack of Interest subscale; 24-hour food and fluid intake recall.",
        "Screening for co-occurring ADHD (distractibility, dopamine deficiency affecting reward value of eating) or depression.",
        "Growth chart review showing chronic faltering growth curve (e.g., dropping across percentiles since toddlerhood)."
      ],
      factorsLookedFor: [
        "Poor Interoceptive Awareness: Does not feel hungry; can go an entire day without eating until reminded by parents; reports feeling 'full' after two bites.",
        "Distractibility at Meals: Talks continuously, plays with utensils, stares out the window, easily drawn away by screens or toys.",
        "Eating as a Burden: Explicitly states: 'Eating is so boring; I wish there was just a pill I could swallow so I didn't have to waste time eating.'",
        "Parent-Child Conflict: Endless parental prompting ('take another bite'), bargaining, and meals stretching over an hour."
      ],
      potentialTreatments: [
        "Predictable Meal Scheduling: Strict 3-meals + 2-snacks schedule (no grazing) to allow true biological appetite cycles to develop.",
        "Time-Limited Meals: Capping meals at 25-30 minutes to prevent exhausting parent-child negotiations and negative associations.",
        "Calorie Boosting (Enriching Safe Foods): Adding healthy fats (olive oil, avocado, nut butters, whole milk) to small portion volumes.",
        "Appetite Stimulants (Medical): In severe faltering growth, pediatric specialist consideration of Cyproheptadine in conjunction with behavioral therapy."
      ],
      clinicalPearl: "Children with the 'lack of interest' phenotype are perpetual grazers if permitted. Sipping juice or snacking on two crackers every hour suppresses the ghrelin appetite surge. Enforcing a strict 3-hour fast between scheduled meals is essential to let them experience biological hunger."
    },
    {
      id: "PFD",
      code: "ICD-10-CM R63.39 / International Consensus",
      name: "Pediatric Feeding Disorder (PFD)",
      type: "Multidimensional Functional Feeding Disorder",
      ageRange: "Infancy to 18 years (Peak onset in infants and young children)",
      coreDefinition: "Impaired oral intake that is not age-appropriate and is associated with medical, nutritional, feeding-skill, and/or psychosocial dysfunction, present daily for at least 2 weeks.",
      dsmCriteria: [
        "Consensus Diagnostic Criteria (Goday et al., 2019): Impaired oral intake that is not age-appropriate, lasting >=2 weeks (acute <3 months, chronic >=3 months), associated with disruption in >=1 of the following 4 domains:",
        "1. Medical Dysfunction: Cardiorespiratory compromise during oral feeding; aspiration or recurrent lower respiratory illness; GI conditions causing feeding disruption.",
        "2. Nutritional Dysfunction: Malnutrition; specific nutrient deficiency; reliance on enteral tube feeding or oral supplements to sustain growth/hydration.",
        "3. Feeding Skill Dysfunction: Need for modified food texture or liquid thickness; reliance on specialized feeding equipment (adaptive nipples, cups); modified caregiver feeding position; unsafe oral-motor bolus management.",
        "4. Psychosocial Dysfunction: Active avoidance behaviors during feeding; disruptive mealtime behaviors; mealtime distress in child and/or caregiver; disruption of family mealtime routines.",
        "Absence of cognitive processes consistent with anorexia nervosa or bulimia nervosa."
      ],
      howToDiagnose: [
        "Interdisciplinary team evaluation: Pediatrician, Speech Pathologist (SLP), Occupational Therapist (OT), Dietitian, and Pediatric Clinical Psychologist.",
        "Videofluoroscopic Swallow Study (VFSS) or Fiberoptic Endoscopic Evaluation of Swallowing (FEES) to evaluate silent aspiration and pharyngeal phase dysphagia.",
        "Oral-motor skills examination: Assessing tongue lateralization, lip closure, chewing pattern, and biting mechanics.",
        "PediEAT (Pediatric Eating Assessment Tool) and BPFAS (Behavioral Pediatrics Feeding Assessment Scale)."
      ],
      factorsLookedFor: [
        "Physical Signs of Aspiration: Coughing, choking, wet/gurgly vocal quality during or immediately after swallowing liquids, recurrent chest infections.",
        "Texture Incompetence: Gagging caused by mechanical inability to chew or form a food bolus (rather than purely sensory distress).",
        "Early Medical Adversity: History of extreme prematurity, prolonged neonatal intensive care (NICU), tracheostomy, cardiac surgery, or prolonged nasogastric (NG) tube feeding.",
        "Caregiver Mealtime Stress: High parental anxiety, forced feeding attempts, exhaustion from tube feeding weaning failures."
      ],
      potentialTreatments: [
        "Speech Pathology Oral-Motor Therapy: Re-training mastication, jaw stability, tongue coordination, and bolus control.",
        "Texture Modification & Fluid Thickening: Utilizing the IDDSI (International Dysphagia Diet Standardisation Initiative) framework for safe swallow levels.",
        "Multidisciplinary Tube Weaning: Controlled reduction of enteral formula under medical/dietetic supervision paired with behavioral positive reinforcement.",
        "Behavioral Feeding Therapy: Positive reinforcement, non-removal of spoon with guidance, differential attention, and playful non-pressured exploration."
      ],
      clinicalPearl: "Always distinguish PFD from pure ARFID: PFD incorporates organic medical and oral-motor skill deficits (e.g., dysphagia, neurological incoordination), whereas ARFID focuses on psychological and behavioral food avoidance in the absence of primary swallowing skill incompetence."
    },
    {
      id: "PICA",
      code: "DSM-5 307.52 (F98.3 / F50.8)",
      name: "Pica",
      type: "Feeding & Eating Disorder (Non-Food Ingestion)",
      ageRange: "Lifespan (Minimum age >=2 years; highly prevalent in ID and ASD)",
      coreDefinition: "The persistent eating of non-nutritive, non-food substances over a period of at least 1 month, inappropriate to the developmental level of the individual and not culturally or socially normative.",
      dsmCriteria: [
        "Persistent eating of nonnutritive, nonfood substances over a period of at least 1 month.",
        "The eating of nonnutritive, nonfood substances is inappropriate to the developmental level of the individual (not diagnosed in infants <2 years where mouthing objects is developmentally normative).",
        "The eating behavior is not part of a culturally supported or socially normative practice (e.g., geophagy practiced in certain cultural traditions).",
        "If the eating behavior occurs in the context of another mental disorder (e.g., intellectual disability, autism spectrum disorder, schizophrenia) or medical condition (including pregnancy), it is sufficiently severe to warrant independent clinical attention."
      ],
      howToDiagnose: [
        "Direct clinical observation and caregiver collateral interview regarding items ingested (dirt, stones, clay, paint chips, paper, chalk, hair, string, metal, feces).",
        "Urgent medical and laboratory screening: Serum iron, ferritin, and zinc levels (nutritional deficiencies often trigger pica cravings); blood lead level testing; abdominal imaging (rule out bezoar, bowel obstruction, perforation, or parasitic infection).",
        "Functional Behavioral Assessment (FBA): Determining behavioral maintaining function (automatic sensory reinforcement, attention seeking, or escape).",
        "Developmental assessment: Establishing developmental age versus chronological age."
      ],
      factorsLookedFor: [
        "Substances Ingested: Earth/soil (geophagy), raw starch (amylophagy), ice (pagophagia), hair (trichophagia — high risk for trichobezoar/Rapunzel syndrome), paint chips (plumbism/lead poisoning).",
        "Sensory Feedback: The tactile, oral, or olfactory sensation of chewing crunch, gritty, or cold textures.",
        "Nutritional Deficiencies: Iron deficiency anemia or zinc deficiency acting as underlying biological drivers.",
        "Environmental Vulnerabilities: Ingestion occurring when unsupervised or in specific settings with accessible non-food items."
      ],
      potentialTreatments: [
        "Medical Treatment of Deficiencies: High-dose oral iron or zinc repletion (pica symptoms frequently resolve rapidly once iron stores normalize).",
        "Applied Behavior Analysis (ABA) & Competing Stimuli: Providing safe, non-toxic oral alternatives that match the sensory property (e.g., crunchy celery, chewing necklaces, ice chips).",
        "Environmental Sweeps & Secure Storage: Removing toxic substances, paint removal, securing laundry pods and hazardous items.",
        "Differential Reinforcement of Alternative/Other Behavior (DRA/DRO): Rewarding engagement in hands-busy activities and non-ingestion intervals."
      ],
      clinicalPearl: "Rule out nutritional deficiencies first! In a child or pregnant woman presenting with pagophagia (ice chewing) or geophagy (soil eating), always order ferritin and iron studies. Correcting severe iron deficiency can eliminate the urge within days."
    },
    {
      id: "RUMINATION",
      code: "DSM-5 307.53 (F98.21)",
      name: "Rumination Disorder",
      type: "Feeding & Eating Disorder (Regurgitation Subtype)",
      ageRange: "Lifespan (Infancy through Adulthood)",
      coreDefinition: "Repeated regurgitation of food occurring for at least 1 month, where regurgitated food is re-chewed, re-swallowed, or spat out, without an underlying gastrointestinal condition.",
      dsmCriteria: [
        "Repeated regurgitation of food over a period of at least 1 month. Regurgitated food may be re-chewed, re-swallowed, or spit out.",
        "The repeated regurgitation is not attributable to an associated gastrointestinal or other medical condition (e.g., gastroesophageal reflux disease [GERD], gastroparesis, pyloric stenosis).",
        "The eating disturbance does not occur exclusively during the course of anorexia nervosa, bulimia nervosa, binge-eating disorder, or avoidant/restrictive food intake disorder.",
        "If symptoms occur in the context of another mental disorder (e.g., intellectual disability or other neurodevelopmental disorder), they are sufficiently severe to warrant independent clinical attention."
      ],
      howToDiagnose: [
        "Caregiver report and direct post-prandial observation: Effortless regurgitation typically occurring within 10 to 30 minutes following meals.",
        "Pediatric gastroenterology evaluation: Upper endoscopy and high-resolution esophageal manometry to exclude GERD, achalasia, and rumination-like syndromes.",
        "Key clinical distinction: Rumination is effortless and painless (often described as pleasurable or rhythmic), whereas vomiting in GERD involves retching, nausea, and burning distress.",
        "Monitoring nutritional impact: Tracking weight loss, tooth enamel erosion, halitosis, and social isolation."
      ],
      factorsLookedFor: [
        "Post-Prandial Timing: Regurgitation occurs reliably during or shortly after eating, before gastric acid has soured the food, meaning the regurgitated food still tastes relatively intact.",
        "Absence of Nausea/Retching: No abdominal retching, dry heaves, or distress; movements involve rhythmic contracting of the abdominal wall and diaphragm.",
        "Self-Soothing in Infancy / ID: Often accompanied by arching of the back, sucking movements, and a sense of calm satisfaction.",
        "Social Embarrassment in Adolescents/Adults: Secretive regurgitation into napkins, spitting into cups, and avoiding dining in public."
      ],
      potentialTreatments: [
        "Diaphragmatic Breathing Training (Gold-Standard First-Line): Deep, slow abdominal breathing practiced immediately after finishing meals for 10-15 minutes to physically prevent voluntary/involuntary diaphragmatic elevation.",
        "Biofeedback: Visualizing abdominal wall movement via surface EMG to teach voluntary relaxation of the abdominothoracic muscles.",
        "Behavioral Conditioning (Infants / ID): Providing undivided social attention and engaging activities immediately following meals; contingent praise for non-rumination.",
        "Dental & Nutritional Care: Fluoride rinses to protect teeth from gastric acidity; dietary modifications to slow eating pace."
      ],
      clinicalPearl: "Diaphragmatic breathing is remarkably effective for rumination! You cannot physically elevate the intragastric pressure to regurgitate while actively engaging in deep diaphragmatic breathing. Ten minutes of post-meal abdominal breathing terminates the reflex loop."
    }
  ],

  // Interactive Differential Diagnosis Matrix
  differentialMatrix: {
    "ARFID_PFD": {
      title: "ARFID (Fear of Aversive Consequences) vs. Pediatric Feeding Disorder (PFD)",
      commonality: "Both present in children with food refusal, weight loss, severe mealtime distress, and nutritional faltering.",
      distinguishingMarkers: [
        {
          feature: "Oral-Motor & Swallowing Mechanics",
          conditionA: "ARFID: Anatomically and neurologically normal swallow; normal videofluoroscopic swallow study (VFSS); avoidance is driven by conditioned fear/panic.",
          conditionB: "PFD: True feeding skill or medical dysfunction (e.g., pharyngeal phase dysphagia, laryngeal penetration, aspiration risk, oral-motor hypotonia)."
        },
        {
          feature: "Domain Architecture (Goday Consensus)",
          conditionA: "ARFID: Restricted to psychological avoidance and consequence (psychosocial/nutritional); lacks primary medical/oral-motor impairment.",
          conditionB: "PFD: Encompasses four interrelated domains (Medical, Nutritional, Feeding Skill, Psychosocial); requires dysfunction in skill/medical domains."
        },
        {
          feature: "Onset Trigger",
          conditionA: "ARFID: Frequently triggered by an acute traumatic episode (choking, severe vomiting) that results in conditioned phobic avoidance of swallowing.",
          conditionB: "PFD: Chronic neurodevelopmental or anatomical etiology (e.g., prematurity, cerebral palsy, prolonged intubation, chronic reflux)."
        }
      ],
      ruleInRuleOut: {
        ruleInARFID: "Rule in ARFID: Normal swallow study, sudden onset following choking/vomiting, child terrified of swallowing solids but easily swallows purees with identical oral-motor demands.",
        ruleInPFD: "Rule in PFD: Coughing/choking during swallowing liquids, wet vocal quality, abnormal VFSS showing penetration/aspiration, developmental oral-motor incompetence.",
        pitfallToAvoid: "Never assume a child who choked has pure psychological ARFID without first obtaining pediatric medical and swallowing clearance to rule out foreign body obstruction or esophageal stricture."
      },
      contrastingTreatments: {
        treatmentA_Name: "ARFID Psychological Exposure Protocol",
        treatmentA_Steps: "CBT-ARFID / ERP: gradual solid food hierarchy, extinction of safety behaviors (pureeing food), parent reassurance reduction, interoceptive throat exposures.",
        treatmentB_Name: "PFD Multidisciplinary Skill Protocol",
        treatmentB_Steps: "Speech Pathology / OT oral-motor rehabilitation, fluid thickening (IDDSI), specialized positioning, texture adaptation, and medical reflux control."
      }
    },

    "ARFID_AN": {
      title: "ARFID (Sensory Phenotype) vs. Anorexia Nervosa (AN)",
      commonality: "Both disorders involve extreme restriction of dietary intake, significant weight loss, nutritional deficiencies, and mealtime battles.",
      distinguishingMarkers: [
        {
          feature: "Cognitive Driver & Body Image",
          conditionA: "ARFID: Driven by sensory aversion (taste, texture, smell) or appetite lack; NO fear of weight gain, NO desire for thinness, NO body image distortion.",
          conditionB: "Anorexia: Driven by intense fear of gaining weight or becoming fat, over-evaluation of shape and weight, and pervasive body image distortion."
        },
        {
          feature: "Types of Food Avoided",
          conditionA: "ARFID: Avoids foods based on sensory properties; happily consumes high-calorie, ultra-processed 'safe foods' (chips, biscuits, chicken nuggets, chocolate).",
          conditionB: "Anorexia: Avoids foods based on caloric density and fat content; meticulously seeks out low-calorie foods (salad greens, diet drinks) to lose weight."
        },
        {
          feature: "Reaction to Weight Loss",
          conditionA: "ARFID: Patient is often distressed or indifferent about being underweight; genuinely wants to gain weight or be 'normal' if they didn't have to eat scary textures.",
          conditionB: "Anorexia: Weight loss is experienced as a major triumph and proof of self-control; terrified of any weight restoration."
        }
      ],
      ruleInRuleOut: {
        ruleInARFID: "Rule in ARFID: Diet restricted to specific beige/dry textures regardless of calories; absence of drive for thinness; distress about being scrawny or unable to eat with friends.",
        ruleInAN: "Rule in AN: Explicit restriction of caloric density; intense body-checking; weighing rituals; dread of becoming fat; self-esteem tied to scale weight.",
        pitfallToAvoid: "Do not misdiagnose a teenager who has lost weight as Anorexia Nervosa without verifying shape/weight over-evaluation. Prescribing standard ED therapies that challenge fat phobia will alienate an ARFID patient."
      },
      contrastingTreatments: {
        treatmentA_Name: "ARFID Sensory Chaining Protocol",
        treatmentA_Steps: "Sensory food chaining, systematic low-demand tasting ladders (look, touch, lick, swallow), desensitization, nutritional fortification.",
        treatmentB_Name: "Anorexia Evidence-Based Treatment",
        treatmentB_Steps: "Family-Based Treatment (FBT / Maudsley) or CBT-E: full caloric refeeding, challenging the over-evaluation of shape/weight, addressing body image."
      }
    },

    "ARFID_PICKY": {
      title: "ARFID vs. Developmentally Typical 'Picky Eating'",
      commonality: "Both involve reluctance to eat vegetables, strong food preferences, and complaints about unfamiliar foods.",
      distinguishingMarkers: [
        {
          feature: "Nutritional & Physical Impact",
          conditionA: "ARFID: Results in clinically significant weight loss, faltering growth, micronutrient deficiencies, or dependence on supplements.",
          conditionB: "Picky Eating: Growth curves, BMI, and overall development remain completely normal; child maintains steady weight on their growth percentile."
        },
        {
          feature: "Number & Variety of Accepted Foods",
          conditionA: "ARFID: Highly restricted, often <10-15 foods; will starve rather than eat non-preferred food; severe distress if safe food brand is unavailable.",
          conditionB: "Picky Eating: Accepts >25-30 different foods across categories; will eventually eat an acceptable alternative when hungry; brand substitutions tolerated."
        },
        {
          feature: "Psychosocial Impairment",
          conditionA: "ARFID: Marked disruption: unable to attend birthday parties, eat school lunch, or travel; family experiences profound distress and isolation.",
          conditionB: "Picky Eating: Mild mealtime friction; child eats adequately at school or social gatherings; minimal overall family lifestyle disruption."
        }
      ],
      ruleInRuleOut: {
        ruleInARFID: "Rule in ARFID: Faltering growth curve, severe nutritional deficiency, extreme rigidity, total food repertoire under 15 foods, persistent mealtime panic.",
        ruleInPicky: "Rule in Picky Eating: Normal growth trajectory, healthy micronutrient profile, child eats when hungry without functional crisis.",
        pitfallToAvoid: "Avoid pathologizing typical toddler neophobia (peak at 2-4 years). True ARFID involves persistent functional impairment and growth failure."
      },
      contrastingTreatments: {
        treatmentA_Name: "Clinical ARFID Pathway",
        treatmentA_Steps: "Structured clinical intervention: FBT-ARFID, sensory tasting ladders, dietitian-guided calorie supplementation, psychological exposure.",
        treatmentB_Name: "Parental Guidance for Picky Eating",
        treatmentB_Steps: "Parental education on Ellyn Satter's Division of Responsibility: parent provides what/when/where, child decides whether/how much to eat; repeated neutral exposure."
      }
    },

    "PICA_RUMINATION": {
      title: "Pica vs. Rumination Disorder",
      commonality: "Both are feeding disorders characterized by atypical ingestion or regurgitation behaviors, often seen in developmental disabilities.",
      distinguishingMarkers: [
        {
          feature: "Primary Action",
          conditionA: "Pica: Ingestion of non-nutritive, non-food substances (dirt, chalk, paint chips, paper, hair, pebbles).",
          conditionB: "Rumination: Regurgitation of previously swallowed edible food, which is then re-chewed, re-swallowed, or spat out."
        },
        {
          feature: "Immediate Medical Risks",
          conditionA: "Pica: Heavy metal toxicity (lead poisoning from paint), gastrointestinal obstruction/perforation (bezoars), parasitic infection.",
          conditionB: "Rumination: Severe dental erosion from stomach acid, electrolyte imbalances, halitosis, social isolation, aspiration pneumonia."
        },
        {
          feature: "Etiological Triggers & Biological Drivers",
          conditionA: "Pica: Frequently associated with micronutrient deficiencies (iron, zinc) or automatic sensory stimulation in neurodevelopmental conditions.",
          conditionB: "Rumination: Habitual learned behavioral response or somatic self-soothing, maintained by conditioned relaxation of the lower esophageal sphincter."
        }
      ],
      ruleInRuleOut: {
        ruleInPica: "Rule in Pica: Persistent consumption of non-food items for >=1 month; check blood lead and iron levels.",
        ruleInRumination: "Rule in Rumination: Effortless post-prandial regurgitation without nausea/retching; food re-chewed or spat out.",
        pitfallToAvoid: "Do not diagnose pica in infants <2 years of age where exploratory oral mouthing is developmentally expected."
      },
      contrastingTreatments: {
        treatmentA_Name: "Pica Treatment Pathway",
        treatmentA_Steps: "Correcting nutritional deficiencies (iron/zinc supplementation), functional behavioral assessment, offering competing chewable sensory items, environmental safeguarding.",
        treatmentB_Name: "Rumination Treatment Pathway",
        treatmentB_Steps: "Post-prandial diaphragmatic breathing training (10-15 min after meals), habit reversal training, biofeedback, and oral hygiene preservation."
      }
    }
  },

  // Interactive Differential Presets
  differentialPresets: [
    { label: "ARFID vs. Pediatric Feeding Disorder (PFD)", ids: ["ARFID_AVERSIVE", "PFD"] },
    { label: "ARFID vs. Anorexia Nervosa", ids: ["ARFID_SENSORY", "ARFID_INTEREST"] },
    { label: "All Three ARFID Phenotypes", ids: ["ARFID_SENSORY", "ARFID_AVERSIVE", "ARFID_INTEREST"] },
    { label: "Pica vs. Rumination Disorder", ids: ["PICA", "RUMINATION"] },
    { label: "All Childhood Feeding Disorders", ids: ["ARFID_SENSORY", "ARFID_AVERSIVE", "ARFID_INTEREST", "PFD", "PICA", "RUMINATION"] }
  ],

  // Clinical Practice Scenarios
  scenarios: [
    {
      id: "M7_SCENARIO_1",
      title: "Scenario 1: Ava (8yo) — Acute Food Refusal Post-Choking Incident",
      presentation: "Ava, an 8-year-old girl, presents with acute refusal of solid food lasting 3 months. Her parents report that three months ago Ava choked on a piece of chicken at a restaurant, requiring back blows from her father. Since that evening, she refuses to eat any solid foods, meats, vegetables, or bread, crying hysterically if pressured. She now subsists exclusively on smooth chocolate milk, pureed fruit pouches, and strained broth. Over the past 12 weeks, she has lost 2.5 kg, appears visibly fatigued, and her parents must prepare separate pureed liquids for every meal. Ava repeatedly asks her parents: 'Is this smooth? Will it get stuck in my throat?' A comprehensive pediatric gastroenterology swallow study (VFSS) confirmed normal anatomical swallowing function with no mechanical obstruction. Ava expresses sadness about her weight loss and misses eating pizza with her friends.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the definitive diagnosis for Ava?",
        options: [
          { text: "Avoidant/Restrictive Food Intake Disorder (ARFID) — Fear of Aversive Consequences Phenotype", isCorrect: true },
          { text: "Pediatric Feeding Disorder (PFD) with skill dysfunction", isCorrect: false },
          { text: "Early-Onset Anorexia Nervosa, Restricting Type", isCorrect: false },
          { text: "Somatic Symptom Disorder with swallowing complaints", isCorrect: false }
        ],
        hint: "Notice the acute onset following a choking event, refusal driven by fear of choking, normal swallowing mechanics on VFSS, and complete absence of body image concerns.",
        explanation: "Ava fulfills full DSM-5 criteria for ARFID (Fear of Aversive Consequences phenotype). The food restriction was precipitated by an acute traumatic choking incident, is maintained by conditioned phobic fear of choking, has led to significant weight loss and nutritional compromise, and features normal anatomical swallowing mechanics without body image disturbance."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the most appropriate first-line treatment plan for Ava?",
        options: [
          { text: "CBT-ARFID utilizing a graduated solid-food exposure hierarchy, interoceptive throat exposures, and parent coaching to eliminate reassurance-seeking and pureed safety foods.", isCorrect: true },
          { text: "Speech pathology therapy focused on oral-motor tongue chewing exercises.", isCorrect: false },
          { text: "Prescribing a pureed-only diet indefinitely to maintain her daily caloric intake.", isCorrect: false },
          { text: "Family-Based Treatment for Anorexia to challenge Ava's denial of thinness.", isCorrect: false }
        ],
        hint: "Because her swallowing anatomy is intact, the primary maintaining mechanism is avoidance learning and fear of choking. Treatment requires CBT exposure therapy.",
        explanation: "The evidence-based treatment for post-choking ARFID is CBT-ARFID (Exposure and Response Prevention). Ava needs psychoeducation regarding normal swallow mechanics, interoceptive exposure to throat tightness, a gradual hierarchy of solid foods (puree -> soft solid -> dense solid), and parent coaching to stop offering pureed safety alternatives."
      }
    },
    {
      id: "M7_SCENARIO_2",
      title: "Scenario 2: Leo (6yo) — The 'Beige Diet' & Autistic Sensory Selectivity",
      presentation: "Leo, a 6-year-old boy recently diagnosed with Autism Spectrum Disorder (Level 1), is brought in by his mother due to extreme dietary restriction. Leo eats only five specific foods: White Wonder Bread (crusts cut off), Inghams chicken nuggets, Smith's salted potato chips, dry Cheerios, and whole milk from a blue cup. If a food has any specks of pepper, is slightly overcooked, or touches another food on his plate, Leo experiences severe sensory gagging, retching, and an intense emotional meltdown. He has never eaten a fresh fruit or vegetable in his life. His mother notes that Leo's growth is faltering (dropped from the 50th to the 9th weight percentile), and blood tests reveal iron deficiency anemia and borderline zinc deficiency. Leo denies any fear of choking, vomiting, or gaining weight, stating: 'Vegetables smell like garbage and make my tongue burn.'",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis for Leo's feeding presentation?",
        options: [
          { text: "Avoidant/Restrictive Food Intake Disorder (ARFID) — Sensory Sensitivity Phenotype", isCorrect: true },
          { text: "Pica", isCorrect: false },
          { text: "Typical Developmental Picky Eating", isCorrect: false },
          { text: "Pediatric Feeding Disorder — Medical Dysfunction only", isCorrect: false }
        ],
        hint: "Leo's restriction is driven entirely by sensory features (smell, texture, appearance), has caused growth failure and micronutrient deficiencies, and is far beyond typical picky eating.",
        explanation: "Leo meets DSM-5 criteria for ARFID (Sensory Sensitivity phenotype). His food restriction is driven by extreme sensory processing differences (tactile, olfactory, gustatory hypersensitivity), has resulted in faltering growth and iron/zinc deficiencies, and restricts his total accepted repertoire to only 5 foods."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Intervention — What is the most effective clinical framework to expand Leo's dietary repertoire?",
        options: [
          { text: "Food Chaining combined with a low-demand sensory tasting ladder, micronutrient supplementation, and separating food exploration from regular meal times.", isCorrect: true },
          { text: "A strict behavioral extinction protocol: leaving vegetables on his plate until he eats them without crying.", isCorrect: false },
          { text: "Immediate high-dose appetite stimulant medication without sensory modifications.", isCorrect: false },
          { text: "Cognitive therapy challenging Leo's irrational thoughts about food smells.", isCorrect: false }
        ],
        hint: "Autistic children with sensory ARFID require neurodiversity-affirming food chaining (linking safe foods to similar new foods) and low-demand sensory exposure without force.",
        explanation: "Leo requires sensory-based Food Chaining and a graduated tasting ladder (Look -> Touch -> Smell -> Lick). Forcing bites causes intense autonomic distress and worsens food aversion. New foods should be introduced that closely match the sensory properties of his safe foods (e.g., trying a different brand of nugget or cracker) outside high-pressure meal times, alongside iron supplementation."
      }
    },
    {
      id: "M7_SCENARIO_3",
      title: "Scenario 3: Toby (14mo) — Prematurity, Nasogastric Tube & Swallowing Dysfunction",
      presentation: "Toby, a 14-month-old infant born extremely prematurely at 27 weeks gestation, has a history of prolonged neonatal intensive care, mechanical ventilation, and nasogastric (NG) tube dependence. His pediatric team attempted to wean him off the NG tube, but whenever offered smooth purees or baby cereals, Toby coughs persistently, displays stridor, turns red in the face, and develops a wet, gurgly voice. His mother is terrified to feed him orally. An instrumental videofluoroscopic swallow study (VFSS) demonstrates laryngeal penetration and silent trace aspiration of thin liquids due to immature pharyngeal swallowing coordination and delayed laryngeal elevation. Toby has failed to gain adequate weight for three months without enteral supplementation.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — According to the international consensus framework (Goday et al., 2019), what is the definitive diagnosis for Toby?",
        options: [
          { text: "Pediatric Feeding Disorder (PFD) with Feeding Skill, Medical, and Nutritional Dysfunction", isCorrect: true },
          { text: "Avoidant/Restrictive Food Intake Disorder (ARFID) — Fear of Aversive Consequences", isCorrect: false },
          { text: "Rumination Disorder", isCorrect: false },
          { text: "Non-Accidental Trauma / Failure to Thrive", isCorrect: false }
        ],
        hint: "Notice the organic anatomical and neurological dysfunction: VFSS confirms true aspiration, impaired pharyngeal mechanics, and prematurity history. This is a skill/medical disorder.",
        explanation: "Toby meets criteria for Pediatric Feeding Disorder (PFD). His feeding impairment is driven by organic feeding skill dysfunction (pharyngeal phase dysphagia, aspiration) and medical complications resulting from extreme prematurity, falling directly under the Goday et al. consensus framework across Skill, Medical, and Nutritional domains."
      },
      step2: {
        prompt: "Step 2: Multidisciplinary Clinical Management — What is the essential immediate clinical intervention for Toby?",
        options: [
          { text: "Speech Pathology oral-motor therapy, fluid thickening according to IDDSI standards to prevent aspiration, and continued enteral nutrition support while oral safety is rehabilitated.", isCorrect: true },
          { text: "Psychological exposure therapy forcing Toby to swallow thin liquids until the cough reflex extinguishes.", isCorrect: false },
          { text: "Immediate complete cessation of all NG tube feeding to force hunger-driven oral intake.", isCorrect: false },
          { text: "Parental behavioral management using timeout for coughing behaviors.", isCorrect: false }
        ],
        hint: "Aspiration is medically life-threatening. The priority is protecting his airway with Speech Pathology thickened liquids and oral-motor therapy.",
        explanation: "Because Toby is experiencing documented aspiration, safety is paramount. He requires Speech Pathology intervention to determine the safe liquid thickness (IDDSI level) to prevent aspiration pneumonia, oral-motor skill training, and continuation of monitored enteral nutrition by a pediatric dietitian until oral feeding is safe."
      }
    },
    {
      id: "M7_SCENARIO_4",
      title: "Scenario 4: Sam (5yo) — Ingesting Soil, Chalk and Foam",
      presentation: "Sam, a 5-year-old boy attending kindergarten, is referred because his teachers repeatedly catch him eating garden soil, chalk, and pieces of foam plucked from classroom cushions over the past 3 months. When teachers intervene, Sam cries and immediately tries to find another non-food item to place in his mouth. At home, his mother has caught him chewing drywall and peeling wallpaper. Routine pediatric blood work ordered by the GP reveals severe microcytic iron deficiency anemia (ferritin 4 ug/L, Hb 88 g/L). Sam's developmental milestones are otherwise within normal limits, and he eats regular meals with his family without sensory food avoidance. He has had two episodes of severe abdominal cramping.",
      step1: {
        prompt: "Step 1: Clinical Diagnosis — What is the primary diagnosis for Sam?",
        options: [
          { text: "Pica", isCorrect: true },
          { text: "Rumination Disorder", isCorrect: false },
          { text: "ARFID — Sensory Sensitivity", isCorrect: false },
          { text: "Obsessive-Compulsive Disorder (OCD)", isCorrect: false }
        ],
        hint: "Sam persistently ingests non-nutritive, non-food substances (soil, foam, chalk) for >1 month, well past the toddler mouthing age of 2 years, with associated iron deficiency.",
        explanation: "Sam meets full DSM-5 criteria for Pica. He is 5 years old (well above the developmental threshold of 2 years), persistently ingests non-food substances (soil, foam, chalk) for >1 month, and has developed medical complications (iron deficiency anemia and abdominal cramps)."
      },
      step2: {
        prompt: "Step 2: Evidence-Based Clinical Management — What is the necessary first-line multimodal management plan for Sam?",
        options: [
          { text: "Medical iron repletion therapy, abdominal imaging to rule out bezoars/lead toxicity, environmental safety sweeps, and providing safe chewable competing stimuli (e.g., crunchy snacks, sensory chewelry).", isCorrect: true },
          { text: "Psychodynamic therapy to interpret the unconscious symbolic meaning of eating dirt.", isCorrect: false },
          { text: "Applying bitter-tasting chemicals to all classroom furniture as an aversive punishment.", isCorrect: false },
          { text: "Ignoring the behavior completely so as not to provide secondary social attention.", isCorrect: false }
        ],
        hint: "Pica is frequently driven by severe iron deficiency. Medical iron repletion combined with environmental safety and replacement chewables is first-line.",
        explanation: "First-line management for Pica requires immediate medical treatment of his severe iron deficiency anemia (which often rapidly reduces pica urges), blood lead testing, and checking for gastrointestinal bezoars. Behaviorally, environmental sweeps must secure foam/chalk while providing competing oral-sensory chewables."
      }
    }
  ],

  // Short Answer & Essay Practice
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "M7_SAQ_1",
        title: "SAQ 1: Pediatric Feeding Disorder (PFD) vs. ARFID",
        prompt: "Compare and contrast Pediatric Feeding Disorder (PFD; Goday et al., 2019) and Avoidant/Restrictive Food Intake Disorder (ARFID; DSM-5). Detail the four domains of PFD and explain how ARFID differs conceptually. (5 marks)",
        criteria: [
          "Identification of the four PFD domains: Medical (cardiorespiratory compromise, GI pain, aspiration); Nutritional (faltering growth, micronutrient deficits); Feeding Skill (oral-motor incompetence, texture modification); Psychosocial (mealtime distress, avoidance).",
          "PFD diagnostic timeline: Impaired oral intake daily for >=2 weeks (acute <3 months, chronic >=3 months).",
          "Conceptual distinction: PFD is an overarching diagnostic umbrella that explicitly includes organic/neurological feeding skill and medical dysfunctions; ARFID is primarily a psychiatric/psychological diagnosis centered on restrictive intake without primary oral-motor incompetence.",
          "Overlap: A child with PFD can have co-occurring ARFID features, but they are not interchangeable."
        ],
        modelAnswer: "1. The Four Domains of PFD (Goday et al., 2019):\n- Medical Dysfunction: Impaired intake linked to cardiorespiratory compromise, aspiration risk, gastroesophageal pathology, or structural anatomical defects.\n- Nutritional Dysfunction: Inadequate caloric or micronutrient intake resulting in faltering growth curve, malnutrition, or reliance on oral supplements/enteral tube feeding.\n- Feeding Skill Dysfunction: Deficits in oral-motor mechanics (mastication, tongue lateralization, bolus formation, swallowing coordination), requiring modified textures (IDDSI) or adaptive equipment.\n- Psychosocial Dysfunction: Problematic mealtime behaviors, active food refusal, child/caregiver distress, and severe disruption of family mealtimes.\n\n2. Conceptual Distinction from ARFID:\n- ARFID (DSM-5) is classified as a psychiatric/eating disorder focused on restrictive food intake driven by psychological mechanisms (sensory aversion, fear of aversive consequences, or lack of interest) without body image distortion.\n- PFD is a broader interdisciplinary diagnosis that explicitly includes organic medical and oral-motor skill deficits (e.g., dysphagia, neurological incoordination), which are excluded from pure ARFID definitions.\n- In clinical practice, while both share nutritional and psychosocial consequences, PFD requires medical/skill intervention (Speech Pathology/OT), whereas ARFID primarily requires behavioral exposure and parental management."
      },
      {
        id: "M7_SAQ_2",
        title: "SAQ 2: The Three ARFID Phenotypes & NIAS Screening",
        prompt: "Describe the three core clinical phenotypes of ARFID and identify the standardized screening tool used to assess them. Outline the key behavioral markers of each phenotype. (5 marks)",
        criteria: [
          "Identification of the Nine-Item ARFID Screen (NIAS) as the standardized tool measuring the three phenotypic subscales.",
          "Phenotype 1: Sensory Sensitivity (aversion to taste, texture, smell, color, appearance; narrow 'safe foods' repertoire, mostly bland/beige carbohydrates; gagging).",
          "Phenotype 2: Fear of Aversive Consequences (acute conditioned fear of choking, vomiting, or pain following an index event; avoidance of solids, filtering liquids, hypervigilance).",
          "Phenotype 3: Lack of Interest in Eating/Food (low appetite, poor interoceptive hunger cues, forgets to eat, easily distracted at meals, eating viewed as a chore).",
          "Universal rule-out: Absolute absence of drive for thinness, fear of weight gain, or body image distortion across all phenotypes."
        ],
        modelAnswer: "The Nine-Item ARFID Screen (NIAS) is the validated screening instrument that operationalizes the three core clinical phenotypes of ARFID:\n\n1. Sensory Sensitivity Phenotype:\n- Driven by heightened sensory sensitivity to the texture, taste, smell, temperature, or visual presentation of foods.\n- Behavioral markers: Severe dietary selectivity (often <10-15 foods), extreme reliance on 'safe' beige/dry carbohydrates, intense gagging or panic if foods touch on the plate, and refusal if packaging or brand recipes change.\n\n2. Fear of Aversive Consequences Phenotype:\n- Driven by conditioned anxiety following an index traumatic event (e.g., choking, severe vomiting, or acute allergic reaction).\n- Behavioral markers: Acute cessation of solid food intake, hypervigilant checking of food safety, chewing food into tiny pieces or pocketing food, and subsisting on smooth purees or liquids despite normal swallowing anatomy.\n\n3. Lack of Interest in Food / Eating Phenotype:\n- Driven by neurobiological differences in appetite regulation and poor interoceptive awareness of hunger and fullness.\n- Behavioral markers: Chronic low appetite, rapid early satiety ('full after two bites'), taking over 45 minutes to eat, easily distracted by toys/screens, and explicitly viewing meal times as an unwelcome chore.\n\nAcross all three phenotypes, there is a total absence of body shape/weight over-evaluation or drive for thinness."
      },
      {
        id: "M7_SAQ_3",
        title: "SAQ 3: Bio-Behavioral Maintenance Loops in Childhood Feeding Refusal",
        prompt: "Diagram and explain how an acute triggering event can evolve into a chronic, self-maintaining childhood feeding disorder through operant conditioning and caregiver accommodation. (4 marks)",
        criteria: [
          "Vulnerability & Trigger: Child biological vulnerability (sensory sensitivity, prematurity) interacts with an acute physical trigger (e.g., choking on meat or painful reflux).",
          "Child Behavioral Reaction: Food refusal, crying, gagging, or throwing food away when presented with feared/uncomfortable foods.",
          "Caregiver Response (Accommodation): Caregiver experiences intense anxiety about malnutrition/dehydration and accommodates by removing the difficult food and offering high-calorie preferred liquids or 'safe' alternatives.",
          "Operant Reinforcement Loops: (a) Child experiences immediate relief (negative reinforcement of food refusal); (b) Caregiver experiences relief that the child consumed calories (negative reinforcement of accommodation); leading to chronic entrenched restriction."
        ],
        modelAnswer: "Childhood feeding disorders become self-maintaining through interlocking operant conditioning feedback loops (Berlin et al., 2009):\n\n1. Vulnerability + Trigger: A child with sensory sensitivity or medical vulnerability experiences an acute distressing event (e.g., choking on chicken or severe gastrointestinal reflux pain).\n2. Child Avoidance: Subsequent presentations of solid food trigger anticipatory panic. The child engages in refusal behaviors (crying, clenching teeth, spitting, pushing plate away).\n3. Caregiver Accommodation: The parents, terrified that their child will starve, drop weight, or suffer, immediately remove the challenging food and substitute preferred foods (e.g., chocolate milk, chips, purees).\n4. Two-Way Negative Reinforcement:\n- Child Loop: The removal of the feared solid food brings immediate emotional relief, negatively reinforcing mealtime refusal behaviors.\n- Parent Loop: Seeing the child drink the preferred substitute relieves parental panic about starvation, negatively reinforcing parental accommodation.\n5. Long-Term Maintenance: Over time, the child never has the opportunity to learn that swallowing solids is safe, physical desensitization never occurs, and the child's diet becomes chronically restricted."
      },
      {
        id: "M7_SAQ_4",
        title: "SAQ 4: Differential Diagnosis & Treatment of Pica and Rumination Disorder",
        prompt: "Contrast Pica and Rumination Disorder in terms of: (1) core clinical behavior, (2) primary medical complications, and (3) evidence-based behavioral interventions. (4-6 marks)",
        criteria: [
          "Core Behavior: Pica involves persistent ingestion of non-nutritive, non-food substances (dirt, foam, hair) for >=1 month (developmental age >=2 years); Rumination involves effortless, repeated post-prandial regurgitation of food (which is re-chewed, re-swallowed, or spat out) for >=1 month without primary GERD.",
          "Medical Complications: Pica risks lead poisoning (paint), bowel obstruction/perforation, bezoars (trichobezoar), and parasitic infections; Rumination risks severe dental enamel erosion, electrolyte imbalances, halitosis, and malnutrition.",
          "Treatment: Pica requires medical correction of nutritional deficiencies (iron/zinc), environmental sweeps, and competing oral-sensory substitutes (chewelry, crunchy food); Rumination requires post-prandial diaphragmatic breathing training (10-15 minutes post-meal) and habit reversal.",
          "Rule-outs: Exclude developmental mouthing (<2 years) for Pica; exclude organic gastrointestinal disorders (GERD, gastroparesis) for Rumination."
        ],
        modelAnswer: "1. Core Clinical Behavior:\n- Pica: Persistent ingestion of non-nutritive, non-food substances (e.g., soil, paint chips, chalk, foam, hair) for at least 1 month, occurring in an individual with a developmental age of at least 2 years, not culturally sanctioned.\n- Rumination Disorder: Repeated, effortless regurgitation of previously swallowed food occurring for at least 1 month. The regurgitated food is re-chewed, re-swallowed, or spat out, without nausea, retching, or underlying gastrointestinal disease.\n\n2. Primary Medical Complications:\n- Pica: High risk of heavy metal toxicity (lead poisoning from paint), gastrointestinal perforation or obstruction from non-digestible items (e.g., hair bezoars), and parasitic infestations.\n- Rumination Disorder: High risk of severe dental enamel erosion from repeated exposure to gastric acid, electrolyte derangement, halitosis, and malnutrition/weight loss.\n\n3. Evidence-Based Interventions:\n- Pica: First-line medical investigation and high-dose repletion of iron or zinc deficiencies (which frequently eliminates the craving), paired with Applied Behavior Analysis (ABA) using competing sensory chewable stimuli (e.g., chewy necklaces, crunchy celery) and environmental safety sweeps.\n- Rumination Disorder: First-line behavioral treatment is post-prandial diaphragmatic breathing training (10-15 minutes of slow abdominal breathing immediately following meals) which physically prevents the contraction of abdominothoracic muscles that drives regurgitation, combined with biofeedback."
      }
    ],

    essayPrompt: {
      title: "Comprehensive Essay Prompt: Clinical Formulation & Multidisciplinary Management of Childhood Feeding Disorders",
      prompt: "Critically evaluate the diagnostic distinctions, bio-behavioral maintenance mechanisms, and multidisciplinary treatment approaches for childhood feeding disorders. In your essay, compare Avoidant/Restrictive Food Intake Disorder (ARFID) with Pediatric Feeding Disorder (PFD) and Anorexia Nervosa, analyze the role of parental accommodation and operant conditioning in maintaining feeding avoidance, and formulate an evidence-based intervention plan for a child presenting with severe sensory food selectivity and faltering growth.",
      timeAllowedMinutes: 45,
      suggestedWordCount: "1000 - 1400 words",
      rubricPillars: [
        {
          name: "Pillar 1: Diagnostic Architecture & Nosology",
          weight: "25%",
          description: "Precise delineation of DSM-5 ARFID (the 3 phenotypes: sensory, aversive, lack of interest; NIAS screening) and Goday et al. (2019) PFD 4-domain model (Medical, Nutritional, Skill, Psychosocial). Rigorous distinction from Anorexia Nervosa (absence of shape/weight over-evaluation)."
        },
        {
          name: "Pillar 2: Bio-Behavioral Maintenance Mechanisms",
          weight: "25%",
          description: "In-depth formulation of operant conditioning cycles, two-way negative reinforcement between child food refusal and parental accommodation, sensory hyper-reactivity, and trauma conditioning following choking/medical procedures."
        },
        {
          name: "Pillar 3: Differential Diagnostics & High-Risk Populations",
          weight: "25%",
          description: "Detailed differential analysis contrasting ARFID with typical picky eating, Pica (iron deficiency links), Rumination Disorder (diaphragmatic mechanics), and neurodevelopmental co-occurrences (ASD, ADHD, prematurity)."
        },
        {
          name: "Pillar 4: Multidisciplinary, Evidence-Based Treatment Plan",
          weight: "25%",
          description: "Comprehensive formulation-driven management: Food Chaining, CBT-ARFID sensory ladders, FBT-ARFID parental empowerment, Speech Pathology/OT oral-motor therapy (IDDSI), dietetic fortification, and medical safety oversight."
        }
      ],
      modelOutline: [
        "1. Introduction: Emergence of pediatric feeding disorders as distinct clinical entities; shift from generic 'failure to thrive' to mechanistic classification; thesis on the necessity of multidisciplinary bio-behavioral formulation.",
        "2. Diagnostic Boundaries: Contrasting ARFID (DSM-5) and Pediatric Feeding Disorder (Goday et al., 2019 4-domain consensus); detailing the three ARFID phenotypes (Sensory, Aversive, Lack of Interest); ruling out Anorexia Nervosa (caloric vs sensory restriction, shape/weight over-evaluation).",
        "3. Bio-Behavioral Maintenance Cycles: Operant conditioning loops in mealtimes; how child distress and parental panic create a feedback loop of negative reinforcement and dietary entrenchment; neurodevelopmental sensory processing differences in ASD.",
        "4. Related Pediatric Disorders: Pica (etiological link to iron deficiency and lead toxicity risks) and Rumination Disorder (effortless post-prandial regurgitation, diaphragmatic mechanics).",
        "5. Multidisciplinary Clinical Intervention Design: Integrating pediatric medical/dietetic stabilization (micronutrient repletion), Speech Pathology for oral-motor mechanics, FBT-ARFID for parent structure, and CBT-ARFID sensory food chaining and exposure ladders."
      ]
    }
  }
};
