// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 2: Cultural Context & First Peoples Psychology
const MODULE_2_DATA = {
  moduleId: 2,
  title: "Module 2: Cultural Context & First Peoples Psychology",
  subtitle: "Cultural Determinants of Mental Health, Hays' ADDRESSING Framework, Social & Emotional Wellbeing (SEWB), and Culturally Safe Practice",
  coordinator: "Dr Bonnie Clough & Dale Rowland (School of Applied Psychology)",

  // High-yield Theoretical Core (VERBATIM LECTURE NOTES)
  theoreticalPillars: [
    {
      title: "Biocultural Cognitive Schema Model of Culture",
      author: "Tseng (2017) / Nikapota & Rutter (2008)",
      summary: "Culture relates to shared behavioral patterns, value systems, and meanings distinctly different from other cultures. Exists on two levels: (1) Observable patterns of life within a community, and (2) An internal organized realm of knowledge and beliefs. Enculturation structures neural networks—the organization of culture has its psychobiological correlates in the mind-brain, shaping individual cognitive schemas. Assessed via Emic (within-culture) vs. Etic (outside-culture) perspectives."
    },
    {
      title: "The Cultural Influences on Mental Health Model",
      author: "Hwang et al. (2008)",
      summary: "Culture influences psychopathology across 6 core domains: (1) Prevalence of mental illness; (2) Aetiology and course of disease; (3) Phenomenology or expression of distress (e.g. content of delusions, experience of shame vs guilt, culture-bound syndromes); (4) Diagnostic and assessment biases; (5) Coping styles and help-seeking pathways; and (6) Treatment acceptability and intervention efficacy."
    },
    {
      title: "Hays' ADDRESSING Multidimensional Cultural Framework",
      author: "Pamela A. Hays (2001, 2016)",
      summary: "A clinical framework emphasizing that individuals possess multi-layered, intersecting identities that are often equally or more influential than race or ethnicity. Spans 9 dimensions: Age/generational influences, Developmental or acquired Disabilities, Religion/spiritual orientation, Ethnicity, Socioeconomic status, Sexual orientation, Indigenous heritage, National origin, and Gender."
    },
    {
      title: "Social and Emotional Wellbeing (SEWB) Multidimensional Model",
      author: "Gee, Dudgeon, Schultz, Hart & Kelly (2014) / NAHS (1989)",
      summary: "A holistic First Nations definition of health: not merely the absence of disease, but the social, emotional, and cultural wellbeing of the whole community. Grounded in 7 interconnected domains of wellness: connection to Body, Mind and Emotions, Family and Kinship, Community, Culture, Country, and Spirit, Spirituality and Ancestors, buffered by historical, political, and social determinants."
    },
    {
      title: "Westerman's Cultural Competency & Assessment Framework",
      author: "Dr Tracy Westerman (2020, 2021)",
      summary: "Clinical assessment of Aboriginal people requires culture to be treated as proximal (central) rather than distal to the assessment process. Clinicians must validate symptoms culturally and clinically, recognize culture-bound syndromes (e.g., spirit visits, sorry grief, being cursed), and utilize culturally derived tools (WASC-Y, WASC-A) rather than unvalidated Western standardized measures."
    }
  ],

  // Deep-Dive Content Review Sections (Verbatim Lecture Handouts)
  contentReviewSections: [
    {
      id: "mod2_what_is_culture",
      title: "What is Culture? Conceptual Boundaries & Cognitive Schemas",
      icon: "🌏",
      badge: "Foundations (Tseng, 2017)",
      contentHtml: `
        <p style="margin-bottom: 12px;"><strong>What do we mean by Culture?</strong> In clinical psychopathology, culture relates to shared behavioral patterns, meanings, and value systems (Tseng, 2017) that produce distinct practices, beliefs, and worldviews (Nikapota & Rutter, 2008).</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-top: 14px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Culture vs. Race vs. Ethnicity</strong>
            <ul style="font-size: 13.5px; color: #475569; margin-left: 18px; margin-top: 6px;">
              <li><strong>Culture:</strong> Shared behavioral patterns, value systems, knowledge, and meanings. Common for individuals to identify with multiple cultures.</li>
              <li><strong>Race:</strong> Socially constructed groups characterized by physical traits (may or may not coincide with shared cultural systems).</li>
              <li><strong>Ethnicity:</strong> Social groups with common historical paths, behavioral norms, and group identity sharing a culture.</li>
            </ul>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">The Two Levels of Culture & Neural Schemas</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">Culture exists on two distinct levels (Tseng, 2017):<br>
            1. <strong>Observable Phenomena:</strong> Patterns of daily life, community interactions, rituals.<br>
            2. <strong>Internal Realm:</strong> The organized system of knowledge and beliefs structuring experience.<br>
            <strong>Enculturation:</strong> Every individual internalizes a cultural meaning system. This has <em>direct psychobiological correlates in mind-brain neural networks</em>, shaping individual cognitive schemas.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Four Modes of Cultural Behavior</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">In clinical assessment, clinicians evaluate four cultural behavioral spheres (Tseng, 2017):<br>
            &bull; <strong>Ideal</strong> cultural behavior (prescribed values)<br>
            &bull; <strong>Actual</strong> cultural behavior (real-world practice)<br>
            &bull; <strong>Stereotypical</strong> cultural behavior (external assumptions)<br>
            &bull; <strong>Deviated</strong> cultural behavior (distress or dysfunction).</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Etic vs. Emic Evaluation</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">
            &bull; <strong>Etic Evaluation:</strong> Assessment conducted from the outside of the cultural system (risk of applying Western ethnocentric diagnostic assumptions).<br>
            &bull; <strong>Emic Evaluation:</strong> Assessment conducted from within the cultural system, utilizing indigenous meanings and local explanatory models.</p>
          </div>
        </div>
      `
    },
    {
      id: "mod2_culture_mental_health",
      title: "How Culture Contributes to Mental Health & Psychopathology",
      icon: "🧠",
      badge: "6 Influences (Hwang et al., 2008)",
      contentHtml: `
        <p style="margin-bottom: 12px;">Culture is a major determinant of psychological functioning. Hwang et al. (2008) outline 6 primary avenues of cultural influence:</p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="background: #fff; border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0f172a;">1. Differences in Prevalence:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Variations in epidemiologic rates driven by systemic disadvantage, poverty, geographical trends, and discrimination (Nikapota & Rutter, 2008).</p>
          </div>
          <div style="background: #fff; border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0f172a;">2. Aetiology & Course of Disease:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Cultural role expectations (e.g. rigid gender roles), social safety nets, family structures, and acculturative stress alter the onset and prognosis of disorders.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0f172a;">3. Phenomenology & Expression of Distress:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Culture shapes symptom content: delusions often reflect cultural fears (religious guilt vs surveillance); shame vs guilt salience; and cross-cultural variations like <em>'non-fat concerned anorexia'</em> in Hong Kong or <em>'taijin kyofusho'</em> (interpersonal phobia of offending others) in Japan (DSM-5 Glossary of Cultural Concepts of Distress; Tseng, 2017).</p>
          </div>
          <div style="background: #fff; border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0f172a;">4. Diagnostic & Assessment Issues:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">The culture of the clinician directly affects interpretation of behaviors. Western clinicians risk misdiagnosing culturally normative experiences (e.g., talking with ancestors) as psychotic hallucinations.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0f172a;">5. Coping Styles & Help-Seeking Pathways:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Different cultural norms govern whether distress is expressed somatically, addressed through traditional healers, contained within the family, or brought to Western health services.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0f172a;">6. Treatment & Intervention Issues:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Treatment efficacy depends on cultural acceptability, aligning goals with family/kinship expectations, and utilizing culturally adapted modalities (CFI, Hwang, 2006).</p>
          </div>
        </div>
      `
    },
    {
      id: "mod2_addressing_framework",
      title: "Hays' (2001) ADDRESSING Framework",
      icon: "🎯",
      badge: "Multidimensional Assessment",
      contentHtml: `
        <p style="margin-bottom: 12px;">Pamela A. Hays (2001) formulated the <strong>ADDRESSING</strong> framework to assist clinicians in recognizing that every individual holds multiple complex, intersecting identities that influence power, privilege, and mental health:</p>
        <div class="table-responsive">
          <table class="table" style="font-size: 13.5px;">
            <thead>
              <tr style="background: #f1f5f9;">
                <th style="width: 25%;">Domain Acronym</th>
                <th style="width: 35%;">Cultural Identity Dimension</th>
                <th style="width: 40%;">Clinical Formulation Consideration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A</strong></td>
                <td><strong>Age & Generational Influences</strong></td>
                <td>Cohort experiences, developmental stage, generational trauma, historical events shaping worldviews.</td>
              </tr>
              <tr>
                <td><strong>D</strong></td>
                <td><strong>Developmental Disabilities</strong></td>
                <td>Neurodivergence, congenital conditions, lifelong cognitive or social impacts.</td>
              </tr>
              <tr>
                <td><strong>D</strong></td>
                <td><strong>Disabilities Acquired Later in Life</strong></td>
                <td>Sensory loss, mobility impairment, traumatic injury, adaptation to physical limitations.</td>
              </tr>
              <tr>
                <td><strong>R</strong></td>
                <td><strong>Religion & Spiritual Orientation</strong></td>
                <td>Beliefs about illness causes, healing practices, connection to higher power or ancestors.</td>
              </tr>
              <tr>
                <td><strong>E</strong></td>
                <td><strong>Ethnicity & Race</strong></td>
                <td>Shared cultural background, language, migration history, experiences of systemic racism.</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td><strong>Socioeconomic Status (SES)</strong></td>
                <td>Financial stability, access to housing and healthcare, education level, current resource strain.</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td><strong>Sexual Orientation</strong></td>
                <td>LGBTIQA+ identity, disclosure status, minority stress, family/community acceptance.</td>
              </tr>
              <tr>
                <td><strong>I</strong></td>
                <td><strong>Indigenous Heritage</strong></td>
                <td>Connection to Country, impact of colonization, intergenerational trauma, kinship systems.</td>
              </tr>
              <tr>
                <td><strong>N</strong></td>
                <td><strong>National Origin</strong></td>
                <td>Citizenship status, refugee experiences, acculturation trajectory, language spoken at home.</td>
              </tr>
              <tr>
                <td><strong>G</strong></td>
                <td><strong>Gender & Gender Identity</strong></td>
                <td>Gender role expectations, power differentials, transgender/non-binary experience.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "mod2_clinical_competencies",
      title: "Clinical Cultural Competencies & Humility to Demonstrate",
      icon: "🤝",
      badge: "Hwang (2006) & Kickett",
      contentHtml: `
        <p style="margin-bottom: 12px;">Hwang (2006) highlights six vital clinical domains to target when working cross-culturally:</p>
        <ul style="font-size: 13.5px; color: #475569; margin-left: 20px; line-height: 1.6;">
          <li><strong>Dynamic Cultural Complexities:</strong> Avoiding treating cultural groups as homogenous; recognizing within-group heterogeneity.</li>
          <li><strong>Orienting Clients to Therapy:</strong> Explaining psychological processes clearly and demystifying therapy rules, roles, and expectations.</li>
          <li><strong>Understanding Cultural Beliefs about Mental Illness:</strong> Exploring client and family explanatory models regarding causes and what constitutes appropriate healing.</li>
          <li><strong>Improving the Therapeutic Relationship:</strong> Establishing rapport through warmth, unconditional positive regard, cultural curiosity, and shared decision-making.</li>
          <li><strong>Understanding Cultural Communication of Distress:</strong> Decoding idioms of distress, somatic expressions, and non-verbal cues.</li>
          <li><strong>Addressing Population-Specific Issues:</strong> Incorporating historical trauma, systemic discrimination, and specific cultural values into formulation.</li>
        </ul>
        <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 14px 18px; border-radius: 6px; margin-top: 14px;">
          <strong style="color: #991b1b; font-size: 14.5px;">Cultural Humility vs False Competence (Prof. Marion Kickett):</strong>
          <p style="font-style: italic; color: #7f1d1d; margin-top: 6px; font-size: 13.5px;">“My experience with people who believe they are competent is that they also believe they do not need to learn anymore, and such people are quite dangerous.” — Professor Marion Kickett (Noongar – Balardong)</p>
          <p style="font-size: 13px; color: #991b1b; margin-top: 6px;">Clinicians must practice continuous self-reflection (reflexivity), acknowledge clinician-client power imbalances, utilize authentic self-disclosure where appropriate, and embrace active, humble <strong>relational repairs</strong> when cultural missteps occur.</p>
        </div>
      `
    },
    {
      id: "mod2_first_peoples_intake",
      title: "First Peoples Intake, Assessment & Treatment Best Practices",
      icon: "🪃",
      badge: "Dale Rowland / AIPEP-2",
      contentHtml: `
        <p style="margin-bottom: 12px;">Working with Australia's First Peoples follows the same core clinical principles as Western psychology but is <strong>substantially more comprehensive, collaborative, and grounded through a cultural lens</strong> (Dale Rowland):</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <strong style="color: #0f172a; font-size: 14.5px;">Intake & Engagement Elements</strong>
            <ul style="font-size: 13px; color: #475569; margin-left: 18px; margin-top: 6px; line-height: 1.55;">
              <li><strong>Collaborative & Client-Guided:</strong> Treat the client as the expert in their own life; address structural power imbalances.</li>
              <li><strong>First Peoples Genogram:</strong> Map extended family lines, kinship connections, and skin groupings.</li>
              <li><strong>Culture & Community Map:</strong> Identify connection to Country, clan, language groups, and local elders.</li>
              <li><strong>Broad Roles:</strong> Capture the full role and responsibilities of family members (not just paid employment).</li>
              <li><strong>Attachment Mapping:</strong> In children, explore where attachment needs are met and by whom across the kinship network.</li>
              <li><strong>Identify Languages:</strong> Document traditional languages or Aboriginal English spoken at home.</li>
            </ul>
          </div>
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <strong style="color: #0f172a; font-size: 14.5px;">Activating Supports & Treatment</strong>
            <ul style="font-size: 13px; color: #475569; margin-left: 18px; margin-top: 6px; line-height: 1.55;">
              <li><strong>Multidisciplinary Linkage:</strong> Actively engage Aboriginal Health Workers (AHWs), cultural consultants, case managers, and Aboriginal Community Controlled Health Services (ACCHSs / AMS).</li>
              <li><strong>Traditional Healers (Ngangkari):</strong> Respect and integrate traditional healing practices and traditional lore where client desires.</li>
              <li><strong>Culturally Grounded Behavioral Activation:</strong> Frame homework as celebrating achievement by attending sessions, symbolic of starting a healing journey, and reconnecting with community/Country.</li>
              <li><strong>Men's & Women's Business:</strong> Strictly respect sacred gendered customs, roles, and boundaries.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: "mod2_assessment_challenges",
      title: "Assessment Challenges & Culturally Validated Instruments",
      icon: "⚖️",
      badge: "Measurement Validity (Westerman, 2020)",
      contentHtml: `
        <p style="margin-bottom: 12px;"><strong>Assessment Challenges with First Peoples (Slide 29):</strong></p>
        <ul style="font-size: 13.5px; color: #475569; margin-left: 20px; line-height: 1.6;">
          <li><strong>Invalid Measurement & Mainstream Bias:</strong> Mainstream Western tests (e.g., standard WISC, WAIS, BDI) carry linguistic and cultural biases and lack normative standardization for Aboriginal populations.</li>
          <li><strong>Inappropriate Test Adaptation:</strong> High incidence of clinicians informally modifying Western tests without establishing psychometric validity.</li>
          <li><strong>Lack of Uniform Accepted Tools:</strong> Few instruments are standardized across all diverse Aboriginal nations (over 250 distinct language groups).</li>
          <li><strong>Culture as Proximal:</strong> Mainstream assessment treats culture as distal (secondary contextual background); culturally safe practice places culture <strong>proximal (central)</strong> to the entire assessment process.</li>
          <li><strong>Acuity & Comorbidity:</strong> Higher rates of complex trauma, intergenerational grief, and systemic disadvantage require sophisticated dual validation.</li>
        </ul>
        <div style="margin-top: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
          <strong style="color: var(--primary); font-size: 14.5px;">Culturally Derived vs Culturally Adapted Tools:</strong>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px; font-size: 13px;">
            <div>
              <strong>Culturally Derived Measures (Developed with Community):</strong>
              <ul style="margin-left: 18px; margin-top: 4px; color: #475569;">
                <li><strong>WASC-Y & WASC-A:</strong> Westerman Aboriginal Symptom Checklist (53 items: depression, suicide risk, substance use, impulsivity, anxiety, and cultural resilience).</li>
                <li><strong>AIMhi Stay Strong App:</strong> Visual holistic wellbeing planning tool.</li>
                <li><strong>Strong Souls Assessment Tool:</strong> Social-emotional screen.</li>
                <li><strong>The Tracking Cube:</strong> Tiered neurodevelopmental tool assessing 10 domains, co-designed with community for AHW administration.</li>
              </ul>
            </div>
            <div>
              <strong>Culturally Adapted Measures:</strong>
              <ul style="margin-left: 18px; margin-top: 4px; color: #475569;">
                <li><strong>KICA-dep:</strong> Kimberley Assessment of Depression of Older Indigenous Australians.</li>
                <li><strong>IRIS:</strong> Indigenous Risk Impact Screen (alcohol, drugs, mental health).</li>
                <li><strong>KMMS:</strong> Kimberley Mum's Mood Scale (perinatal depression).</li>
                <li><strong>Modified Kessler (MK-K5) / aPHQ:</strong> Adapted distress screens.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "mod2_differentials_culture_bound",
      title: "First Peoples Diagnostic Differentials & Culture-Bound Presentations",
      icon: "🔍",
      badge: "Clinical Differential (Slide 46)",
      contentHtml: `
        <p style="margin-bottom: 12px;">Clinicians must distinguish genuine psychiatric pathology from normative cultural practices and culture-bound distress syndromes (Dale Rowland, Slide 46; Westerman, 2021):</p>
        <div class="table-responsive">
          <table class="table" style="font-size: 13px;">
            <thead>
              <tr style="background: #f1f5f9;">
                <th>Cultural Presentation</th>
                <th>Cultural Meaning & Manifestation</th>
                <th>Critical Differential Contrast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>'Visits' (Spirit Presence / Communication)</strong></td>
                <td>Deceased ancestors, relatives, or spirit beings appearing or communicating with the person to provide guidance, comfort, or warning. Fully recognized and valued within community.</td>
                <td><strong>NOT Psychotic Hallucinations:</strong> The experience is culturally congruent, does not cause terror, lacks thought disorder/negative symptoms, and is validated by family/elders.</td>
              </tr>
              <tr>
                <td><strong>'Being Sung' / 'Being Cursed'</strong></td>
                <td>Belief that traditional spiritual lore or a curse has been directed at the individual, causing physical wasting, profound anxiety, dread, and illness.</td>
                <td><strong>NOT Delusional Disorder:</strong> Grounded in traditional lore and community belief systems. Requires consultation with cultural elders and traditional healers (Ngangkari).</td>
              </tr>
              <tr>
                <td><strong>'Longing for Country' / 'Sick for Country'</strong></td>
                <td>Profound somatic, emotional, and spiritual distress occurring when an individual is displaced or separated from ancestral homelands and sacred sites.</td>
                <td><strong>NOT Major Depressive Disorder:</strong> Rapidly resolves upon returning to Country or engaging in cultural ceremony; reflects spiritual disconnection rather than cognitive triad.</td>
              </tr>
              <tr>
                <td><strong>'Sorry Grief' / 'Sorry Time' / 'Sorry Cutting'</strong></td>
                <td>Ceremonial grief practice involving community mourning, rituals, and in some traditional groups, physical cutting to express intense grief over a loss.</td>
                <td><strong>NOT Non-Suicidal Self-Injury (BPD):</strong> Time-limited, ritualized bereavement practice performed within communal funerary lore, lacking characterological dysregulation.</td>
              </tr>
              <tr>
                <td><strong>'Wrong Way'</strong></td>
                <td>Transgression of traditional skin or kinship marriage laws, resulting in profound community sanctions, guilt, and social ostracism.</td>
                <td><strong>NOT Paranoia / Social Phobia:</strong> Realistic apprehension based on actual community kinship rules and traditional lore consequences.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],

  // Clinical Table of Disorders & Formulations
  disorders: [
    {
      id: "SEWB_DISRUPTION",
      code: "SEWB Framework Construct",
      name: "Social and Emotional Wellbeing (SEWB) Disruption",
      type: "First Peoples Holistic Formulation",
      ageRange: "All Ages",
      coreDefinition: "A multi-dimensional disruption across relational, cultural, or spiritual domains (disconnection from Country, family breakdown, cultural disconnection) presenting with dysphoria and withdrawal.",
      dsmCriteria: [
        "Clinical presentation reflecting distress across the 7 SEWB domains: Body, Mind/Emotions, Family/Kinship, Community, Culture, Country, and Spirit/Ancestors.",
        "Symptoms occur in the context of unresolved intergenerational trauma, systemic discrimination, or cultural dislocation.",
        "Presentation must be evaluated using culturally validated instruments (WASC-Y, AIMhi Stay Strong, Strong Souls) rather than solely relying on DSM-5 categorical depression criteria."
      ],
      howToDiagnose: [
        "Comprehensive First Peoples Intake: First Peoples Genogram, Culture & Community Map, language assessment.",
        "Administer WASC-A / WASC-Y or AIMhi Stay Strong App.",
        "Collaborate with Aboriginal Health Worker (AHW) or Cultural Consultant to evaluate kinship and community factors."
      ],
      factorsLookedFor: [
        "Connection to Country: Physical or spiritual displacement.",
        "Kinship Obligations: Stressors within family networks, caring burdens.",
        "Historical & Political Determinants: Intergenerational trauma, Stolen Generations impacts."
      ],
      potentialTreatments: [
        "Reconnection to Country, cultural camps, and community cultural ceremonies.",
        "Culturally adapted CBT / narrative therapy incorporating traditional storytelling.",
        "Liaison with Aboriginal Community Controlled Health Services (ACCHSs) and elder mentorship."
      ],
      clinicalPearl: "SEWB is broader than mental health; a client may experience SEWB distress from community sorrow even if they do not meet psychiatric criteria for Major Depression."
    },
    {
      id: "BEING_SUNG",
      code: "Culture-Bound Syndrome (Westerman, 2021)",
      name: "Being Sung / Being Cursed",
      type: "First Peoples Culture-Bound Presentation",
      ageRange: "Adolescence to Older Adulthood",
      coreDefinition: "A profound psycho-spiritual condition occurring when an individual believes that traditional spiritual punishment or cursing has been directed against them, leading to extreme dread, somatic wasting, and panic.",
      dsmCriteria: [
        "Acute onset of terror, physical deterioration, or subjective paralysis following a perceived cultural transgression or curse.",
        "Belief system is deeply rooted in traditional Aboriginal lore and shared by members of the community.",
        "Absence of bizarre, fragmented non-cultural delusions, formal thought disorder, or auditory commentary."
      ],
      howToDiagnose: [
        "Emic evaluation in consultation with Aboriginal Health Workers and respected community elders.",
        "Rule out toxicological ingestion, organic delirium, and general medical illnesses.",
        "Assess whether the client and family share an explanatory model of spiritual payback or cursed song."
      ],
      factorsLookedFor: [
        "Traditional Lore Transgression: Violating sacred sites, breaking kinship marriage laws.",
        "Community Confirmation: Whether family or elders validate that singing has occurred.",
        "Somatic Symptoms: Acute weight loss, intractable insomnia, severe panic."
      ],
      potentialTreatments: [
        "Immediate involvement of Traditional Healers (Ngangkari) for spiritual cleansing and curse removal.",
        "Cultural brokerage and resolution of community conflict through elder mediation.",
        "Supportive medical and psychological stabilization in a culturally safe environment."
      ],
      clinicalPearl: "Treating 'being sung' solely with antipsychotics is ineffective and culturally unsafe; Western clinicians must partner with traditional healers (Ngangkari) to achieve recovery."
    },
    {
      id: "VISITS",
      code: "Cultural Spiritual Phenomenon (Slide 46)",
      name: "Spirit Visits & Ancestral Communication",
      type: "Normative Cultural Spiritual Experience",
      ageRange: "All Ages",
      coreDefinition: "Perceptual experiences where deceased family members or ancestral spirits appear, communicate, or provide comfort, guidance, or protection to the individual.",
      dsmCriteria: [
        "Visual, auditory, or somatic perception of a deceased relative or spiritual ancestor.",
        "The experience is culturally congruent, sanctioned, and valued within the individual's family and clan.",
        "Does NOT meet criteria for Schizophrenia or Psychotic Disorder: absence of formal thought disorder, negative symptoms, cognitive decline, or paranoid bizarreness.",
        "The experience brings comfort or culturally expected warning, rather than persecutory terror."
      ],
      howToDiagnose: [
        "Cultural Formulation Interview (CFI) exploring cultural meaning of perceptual experiences.",
        "Consultation with Aboriginal Health Worker to confirm whether 'visits' are normative within the clan.",
        "MSE: Verify intact cognitive abstraction, logical thought form, and absence of psychotic prodrome."
      ],
      factorsLookedFor: [
        "Affective Reaction: Sense of comfort, reassurance, or familial guidance.",
        "Context: Frequently occurs during Sorry Time, anniversaries of deaths, or major life decisions.",
        "Congruence: Family members often share or validate the spirit presence."
      ],
      potentialTreatments: [
        "Psychoeducation for non-Indigenous clinicians to prevent inappropriate neuroleptic prescription.",
        "Validation of the cultural experience as a meaningful spiritual connection.",
        "Facilitate cultural ceremonies or Sorry Business rituals if the spirit communication involves unfinished grief."
      ],
      clinicalPearl: "Misdiagnosing ancestral spirit visits as psychotic hallucinations is a serious cultural diagnostic error. If the community recognizes the experience and thought processes are intact, it is NOT psychosis."
    },
    {
      id: "SICK_FOR_COUNTRY",
      code: "Cultural Geographic Syndrome (Slide 46)",
      name: "Longing for Country / Sick for Country",
      type: "First Peoples Relational-Spiritual Syndrome",
      ageRange: "All Ages",
      coreDefinition: "Profound psychological, somatic, and spiritual distress triggered by physical separation or forced relocation from traditional ancestral lands, waters, and sacred sites.",
      dsmCriteria: [
        "Persistent feelings of emptiness, deep melancholy, physical fatigue, and spiritual disconnection emerging after leaving traditional homelands.",
        "Symptoms show swift alleviation or marked improvement when returning to Country or engaging with earth/natural elements.",
        "Does not represent standard MDD: lacks self-blame, cognitive worthlessness, or generalized vegetative anhedonia."
      ],
      howToDiagnose: [
        "Timeline mapping: Correlate symptom onset with relocation away from Country (e.g. urban relocation for medical care, study, or employment).",
        "Assessment of SEWB Country domain using the AIMhi Stay Strong App or Cultural Information Gathering Tool (CIGT).",
        "Evaluate relief experienced when visiting parklands, natural waterways, or returning home."
      ],
      factorsLookedFor: [
        "Ancestral Connection: In Aboriginal ontology, Country is a living entity; being away is like being separated from a vital organ.",
        "Somatic Expressions: Heaviness in chest, fatigue, inability to settle.",
        "Relocation Drivers: Hospitalization, prison, education."
      ],
      potentialTreatments: [
        "Facilitating physical return trips to Country for healing and rejuvenation.",
        "If return is physically impossible, connecting with local Indigenous community centers and traditional custodians.",
        "Incorporating natural grounding elements and storytelling into therapy sessions."
      ],
      clinicalPearl: "An Aboriginal patient in an urban hospital presenting with 'depression' may be suffering from acute Sick for Country. Facilitating connection to earth and community is the first-line intervention."
    },
    {
      id: "SORRY_CUTTING",
      code: "Cultural Grief Practice (Slide 46)",
      name: "Sorry Grief & Sorry Cutting",
      type: "Traditional Bereavement Practice",
      ageRange: "Adolescents to Older Adults",
      coreDefinition: "A traditional, ritualized ceremonial grief practice in some Aboriginal communities where individuals inflict superficial cuts on their body as a culturally sanctioned physical expression of profound grief over the death of a loved one.",
      dsmCriteria: [
        "Self-inflicted cuts occurring exclusively within the context of 'Sorry Business' following the death of a family or community member.",
        "The behavior is understood and accepted within the community as an expression of love, respect, and deep shared grief.",
        "Does NOT meet criteria for Non-Suicidal Self-Injury (NSSI) or Borderline Personality Disorder: lacks chronic emotion dysregulation, interpersonal instability, impulsivity, or suicidal intent."
      ],
      howToDiagnose: [
        "Forensic grief history: Confirm active community Sorry Business / death of relative.",
        "Collateral interview with family or Aboriginal Health Worker regarding local grief customs.",
        "Assess longitudinal history: In the absence of a death, does the individual engage in self-harm? (If yes, evaluate NSSI; if no, this is Sorry Cutting)."
      ],
      factorsLookedFor: [
        "Context: Confined strictly to the bereavement mourning period.",
        "Absence of Borderline Features: Normal identity stability, absence of chronic abandonment terror.",
        "Communal Sharing: Often performed collectively with other grieving relatives."
      ],
      potentialTreatments: [
        "Culturally safe wound care and medical evaluation without punitive psychiatric labeling.",
        "Supportive participation in communal Sorry Business rituals.",
        "Culturally responsive grief support in partnership with local community elders."
      ],
      clinicalPearl: "Labeling traditional Sorry Cutting as 'Borderline self-harm' is an ethnocentric misdiagnosis. Look at the context: if it occurs during mourning and follows traditional custom, it is grief expression."
    },
    {
      id: "NON_FAT_AN",
      code: "Cross-Cultural Variant (Tseng, 2017)",
      name: "Non-Fat Concerned Anorexia & Taijin Kyofusho",
      type: "Cross-Cultural Psychiatric Variants",
      ageRange: "Adolescents to Young Adults",
      coreDefinition: "Culturally shaped manifestations of psychopathology where core distress is channeled into idioms different from Western criteria: food refusal without fat phobia, or social phobia centered on offending others.",
      dsmCriteria: [
        "Non-Fat Concerned Anorexia: Severe food restriction and emaciation justified by epigastric fullness, throat blockage, or somatic pain, without Western fear of fatness or body shape over-evaluation.",
        "Taijin Kyofusho (TKS): Severe interpersonal fear focused not on being embarrassed (Western Social Anxiety), but on offending, displeasing, or embarrassing others via blushing, body odor, or eye contact."
      ],
      howToDiagnose: [
        "DSM-5 Cultural Formulation Interview (CFI) examining the client's cultural explanatory model.",
        "Determine whether food refusal is driven by Western thin-ideal internalization vs somatic/cultural rationales.",
        "Assess whether social avoidance is self-focused (Western SAD) vs other-focused (TKS offensive type)."
      ],
      factorsLookedFor: [
        "Cultural Schemas: Interdependent cultural self-construal vs Western independent individualism.",
        "Idioms of Distress: Epigastric discomfort, bodily odor sensitivity.",
        "Acculturation Level: Generational shifts in symptom presentation."
      ],
      potentialTreatments: [
        "Culturally adapted cognitive-behavioral therapy addressing interdependent cultural values.",
        "Family-inclusive systemic therapy aligning goals with collective harmony.",
        "Stepped medical stabilization combined with culturally sensitive re-nourishment."
      ],
      clinicalPearl: "Assuming all anorexic patients harbor Western 'fat phobia' leads to underdiagnosis in non-Western populations. Always assess culture-bound idioms of distress."
    }
  ],

  // Interactive Differential Tool Presets
  differentialPresets: [
    {
      label: "Spirit Visits vs. Psychotic Hallucinations",
      ids: ["VISITS"],
      clinicalRationale: "Crucial cultural differential: Distinguishing normative ancestral spirit communication validated by community elders from true psychotic hallucinations requiring neuroleptic medication."
    },
    {
      label: "Sorry Cutting vs. BPD Non-Suicidal Self-Injury",
      ids: ["SORRY_CUTTING"],
      clinicalRationale: "Differential between traditional communal bereavement mourning practices during Sorry Time and characterological borderline affect-regulation self-harm."
    },
    {
      label: "Being Sung vs. Delusional Disorder",
      ids: ["BEING_SUNG"],
      clinicalRationale: "Evaluating intense dread and perceived spiritual payback rooted in traditional lore vs persecutory paranoia."
    }
  ],

  // Clinical Case Vignettes (Two-Step Decision Flow)
  scenarios: [
    {
      id: "SCENARIO_2_1",
      title: "Case Vignette 1: Hearing an Ancestor Following Community Loss",
      patientProfile: "Jarrah, 17-year-old Murri youth, presenting after hearing voices at night.",
      vignette: "Jarrah is brought to a regional mental health clinic by his school guidance officer, who reports Jarrah has 'started hearing voices'. During the interview, Jarrah explains that his grandfather, a respected community elder, passed away three weeks ago. Since the funeral, while sitting by the river at dusk, Jarrah has heard his grandfather's voice calling his name and giving him advice to stay strong and take care of his mother. Jarrah reports feeling comfort, love, and protection when this occurs. His mother confirms that several family members have experienced grandfather's presence during Sorry Time. Jarrah shows clear, logical thought processes, excellent eye contact, and no bizarre beliefs.",
      step1Question: "Step 1: Based on culturally safe assessment principles and lecture notes, how should Jarrah's experience be formulated?",
      step1Options: [
        "First Episode Schizophrenia with auditory hallucinations",
        "Normative Ancestral Spirit Communication ('Visits') during Sorry Time",
        "Major Depressive Disorder with Psychotic Features",
        "Substance-Induced Psychotic Disorder"
      ],
      step1CorrectIndex: 1,
      step1Explanation: "Jarrah is experiencing 'Visits' (spirit presence/communication), a culturally congruent, sanctioned spiritual experience common during Sorry Business following bereavement. Thought form is intact, affect is warm and comforted, and the experience is validated by his family and community.",
      step2Question: "Step 2: What is the optimal, culturally safe clinical action for the psychologist?",
      step2Options: [
        "Prescribe immediate second-generation antipsychotic medication and arrange involuntary psychiatric hold",
        "Validate the experience within its cultural context, support Jarrah through Sorry Business in collaboration with an Aboriginal Health Worker, and avoid psychiatric pathologizing",
        "Conduct intense cognitive challenge to prove to Jarrah that his grandfather cannot speak from beyond the grave",
        "Administer a Western standardized WAIS cognitive assessment"
      ],
      step2CorrectIndex: 1,
      step2Explanation: "Culturally safe practice requires validating the experience as a normative spiritual phenomenon, avoiding diagnostic pathologization, liaising with an Aboriginal Health Worker or community elder, and supporting natural grief."
    },
    {
      id: "SCENARIO_2_2",
      title: "Case Vignette 2: Extreme Wasting and Terror Following Cultural Transgression",
      patientProfile: "Kaelen, 34-year-old man from a remote community, admitted to hospital with acute wasting.",
      vignette: "Kaelen is admitted to a regional hospital after losing 8 kg in three weeks. He refuses food, barely drinks water, exhibits extreme autonomic tachycardia, and whispers that he has 'broken sacred law' by entering a sacred men's site without permission. He states with total conviction that the elders have 'sung' him and that he will die within a week. Extensive medical exams, blood panels, CT head scans, and toxicology screens are completely unremarkable. His family arrives at the hospital in intense distress, affirming that a curse has been put on Kaelen.",
      step1Question: "Step 1: According to Westerman (2021) and the lecture notes on culture-bound presentations, what condition does Kaelen present with?",
      step1Options: [
        "Somatic Symptom Disorder",
        "Being Sung / Being Cursed (Aboriginal Culture-Bound Syndrome)",
        "Delusional Disorder, Persecutory Type",
        "Anorexia Nervosa, Restricting Type"
      ],
      step1CorrectIndex: 1,
      step1Explanation: "Kaelen presents with classic features of 'Being Sung' / 'Being Cursed', an Aboriginal culture-bound syndrome rooted in traditional lore where an individual believes a spiritual curse has been directed against them for breaking sacred law, producing severe somatic and autonomic decline.",
      step2Question: "Step 2: What is the vital evidence-based, culturally safe clinical management strategy?",
      step2Options: [
        "Commence high-dose antipsychotics and force-feed via nasogastric tube",
        "Coordinate immediately with hospital cultural liaison to engage Traditional Healers (Ngangkari) and respected elders to lift the curse, alongside medical hydration",
        "Implement CBT for health anxiety to restructure his irrational thoughts",
        "Transfer to an isolated locked psychiatric ward"
      ],
      step2CorrectIndex: 1,
      step2Explanation: "Lecture notes and Westerman emphasize that 'being sung' cannot be resolved solely with Western pharmacotherapy. Recovery requires immediate cultural intervention from Traditional Healers (Ngangkari) to lift the curse, combined with medical hydration and elder reconciliation."
    },
    {
      id: "SCENARIO_2_3",
      title: "Case Vignette 3: Lacerations Following a Cousin's Funeral",
      patientProfile: "Alinta, 21-year-old woman, presenting with forearm cuts during mourning.",
      vignette: "Alinta is brought to an emergency medical clinic by a community nurse with superficial, parallel lacerations across both forearms. The junior doctor writes a provisional diagnosis of 'Borderline Personality Disorder, non-suicidal self-injury'. During the psychological interview, Alinta explains that her first cousin tragically died in a car accident last week. Alinta participated in Sorry Business with her aunties and cousins yesterday, during which they cut their arms to demonstrate deep sorrow and respect for the deceased. Alinta has no history of self-harm, denies suicidal intent, has stable long-term relationships, and is employed as an early childhood educator.",
      step1Question: "Step 1: What is the accurate differential formulation for Alinta's presentation?",
      step1Options: [
        "Borderline Personality Disorder with chronic emotion dysregulation",
        "Non-Suicidal Self-Injury Disorder (DSM-5 Section III)",
        "Traditional 'Sorry Cutting' (Cultural Bereavement Practice during Sorry Time)",
        "Major Depressive Disorder with melancholic features"
      ],
      step1CorrectIndex: 2,
      step1Explanation: "Alinta's cutting occurred exclusively within the communal, ritualized context of 'Sorry Business' following a tragic family bereavement. She lacks any history of characterological dysregulation, relationship instability, or suicidal intent, making BPD an inaccurate ethnocentric misdiagnosis.",
      step2Question: "Step 2: How should the clinician document and manage this presentation?",
      step2Options: [
        "Refer for immediate 12-month Dialectical Behavior Therapy (DBT)",
        "Provide culturally safe wound care, document the presentation as traditional bereavement practice (Sorry Cutting), avoid stigmatizing psychiatric labels, and offer culturally grounded grief support",
        "Place on a 24-hour suicide watch with involuntary observation",
        "Mandate group therapy for self-harm reduction"
      ],
      step2CorrectIndex: 1,
      step2Explanation: "Culturally safe clinical practice requires appropriate wound care, documenting the behavior accurately as traditional Sorry Cutting, removing stigmatizing psychiatric labels from medical records, and respecting community mourning lore."
    }
  ],

  // Exam Practice Short Answer & Essay Practice Bank (NO SPOILERS IN TITLES)
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "SAQ_2_1",
        title: "Exam Practice SAQ 1 (5 Marks): Cultural Assessment Using the Hays ADDRESSING Framework",
        prompt: "Explain the clinical purpose and structure of Pamela A. Hays' (2001) ADDRESSING framework. List at least five of the specific identity dimensions included in the framework, and explain how utilizing this model prevents clinician stereotyping in psychological practice. (5 marks)",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Articulates clinical purpose of the ADDRESSING model (multidimensional, intersecting identities beyond ethnicity) (1 mark)",
          "Accurately defines and lists at least five of the 9 ADDRESSING dimensions (2.5 marks)",
          "Explains how the model prevents stereotyping and recognizes within-group heterogeneity and intersectionality (1.5 marks)"
        ],
        modelAnswer: "The clinical purpose of Pamela A. Hays' (2001) ADDRESSING framework is to assist psychologists in recognizing and responding to cultural complexities, acknowledging that individuals possess multi-layered, intersecting identities that are often equally or more influential than race or ethnicity alone.\n\nSpecific Identity Dimensions (Spans 9 Dimensions):\n1. A — Age and generational influences (cohort experiences, historical era, life stage).\n2. D — Developmental disabilities (lifelong neurodivergence, congenital conditions).\n3. D — Disabilities acquired later in life (sensory impairment, physical mobility limitations, chronic illness).\n4. R — Religion and spiritual orientation (worldviews, explanatory models of health, spiritual practices).\n5. E — Ethnicity and race (shared heritage, linguistic background, experiences of systemic racism).\n6. S — Socioeconomic status (financial resources, housing security, education, social class).\n7. S — Sexual orientation (LGBTIQA+ identity, minority stress, community belonging).\n8. I — Indigenous heritage (First Nations belonging, connection to Country, intergenerational trauma).\n9. N — National origin (citizenship, refugee/migration trajectory, acculturation).\n10. G — Gender and gender identity (gender role expectations, power differentials, trans/non-binary identity).\n\nPreventing Clinician Stereotyping:\nUtilizing the ADDRESSING framework prevents clinicians from treating cultural or ethnic groups as homogenous monoliths. It forces the practitioner to conceptualize the client idiographically across multiple intersecting social locations, recognizing within-group diversity and illuminating how intersecting privileges and marginalizations shape the client's psychological presentation."
      },
      {
        id: "SAQ_2_2",
        title: "Exam Practice SAQ 2 (5 Marks): Social and Emotional Wellbeing (SEWB) in First Peoples Mental Health",
        prompt: "Contrast the Western biomedical model of mental health with the Social and Emotional Wellbeing (SEWB) framework utilized with Australia's First Peoples. Detail at least four of the interconnected domains of wellbeing recognized within the SEWB model. (5 marks)",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Clearly contrasts Western biomedical model (individualistic, deficit-focused) with First Peoples SEWB model (holistic, communal, whole-of-life) (2 marks)",
          "Accurately names and describes at least four SEWB domains (Body, Mind/Emotions, Family/Kinship, Community, Culture, Country, Spirit/Ancestors) (2 marks)",
          "Acknowledges the impact of historical, political, or social determinants (1 mark)"
        ],
        modelAnswer: "Contrasting Western Biomedical Model vs. SEWB Framework:\nThe Western biomedical model defines mental health primarily through an individualistic, deficit-focused, symptom-reduction lens—focusing on neurobiology, internal cognitive processes, and discrete diagnostic categories (DSM-5).\n\nIn contrast, the National Aboriginal Health Strategy (NAHS, 1989) and Gee et al. (2014) define First Peoples health through the Social and Emotional Wellbeing (SEWB) framework: a holistic, whole-of-life, cyclical concept encompassing not just the physical wellbeing of an individual, but the social, emotional, and cultural wellbeing of the whole community.\n\nInterconnected Domains of the SEWB Model (Gee et al., 2014; Slide 16):\n1. Connection to Body: Physical health, vitality, freedom from organic disease.\n2. Connection to Mind and Emotions: Mental clarity, affective regulation, psychological resilience.\n3. Connection to Family and Kinship: Extended family relationships, skin systems, fulfilling roles and obligations.\n4. Connection to Community: Social cohesion, reciprocal support networks, communal celebrations and rituals.\n5. Connection to Culture: Cultural identity, traditional practices, ceremonies, lore, language retention.\n6. Connection to Country: Spiritual attachment to ancestral homelands, waters, and sacred geographic sites.\n7. Connection to Spirit, Spirituality, and Ancestors: Dreaming, spiritual protection, guidance from ancestors.\n\nThese domains are dynamically buffered by broader historical, political, and social determinants (colonization, Stolen Generations, systemic racism, self-determination)."
      },
      {
        id: "SAQ_2_3",
        title: "Exam Practice SAQ 3 (5 Marks): Differentiating Culture-Bound Presentations from Psychopathology",
        prompt: "Western diagnostic frameworks carry significant risk of misinterpreting cultural manifestations as psychiatric disorders when working with Australia's First Peoples. Using lecture material (Slide 46), describe: (a) 'Visits' (spirit presence); and (b) 'Sorry Cutting'. For each, identify the primary diagnostic misclassification made by Western clinicians and the critical factors that differentiate it from genuine psychopathology. (5 marks)",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Accurately describes 'Visits' as culturally validated ancestral presence/communication (1 mark)",
          "Identifies misclassification as psychosis and notes key differentials (intact thought form, comforting affect, cultural consensus) (1.5 marks)",
          "Accurately describes 'Sorry Cutting' as traditional ceremonial bereavement practice (1 mark)",
          "Identifies misclassification as BPD / NSSI and notes key differentials (time-limited mourning, absence of characterological dysregulation) (1.5 marks)"
        ],
        modelAnswer: "(a) 'Visits' (Spirit Presence / Ancestral Communication):\n- Cultural Manifestation: Perceptual experiences where deceased ancestors or spiritual beings appear, communicate, or provide comfort, guidance, or protection to the individual. Frequently occurs during Sorry Business or major life transitions and is validated by family and community elders.\n- Common Western Misclassification: Auditory or visual hallucinations indicating Schizophrenia or Psychotic Disorder.\n- Critical Differentiating Factors: Thought form is logical and coherent; absence of formal thought disorder or negative symptoms; affect is comforted and reassured rather than terrified/persecuted; the experience is culturally syntonic, shared, and valued within the community.\n\n(b) 'Sorry Cutting':\n- Cultural Manifestation: Traditional ceremonial practice occurring in some communities during 'Sorry Business' (mourning) where family members inflict superficial cuts on their arms or legs as a physical expression of profound grief, love, and respect for the deceased.\n- Common Western Misclassification: Non-Suicidal Self-Injury (NSSI) or Borderline Personality Disorder (BPD) self-harm.\n- Critical Differentiating Factors: Strictly time-limited and confined to the collective mourning period; absence of chronic emotional dysregulation, abandonment terror, or impulsivity; performed within community mourning lore rather than as an individual characterological coping strategy."
      }
    ],

    // Comprehensive Exam Essay Practice
    essayPrompt: {
      title: "Comprehensive Exam Essay Practice (20 Marks): Cultural Formulations, SEWB & First Peoples Clinical Practice",
      prompt: "Critically evaluate the cultural context of psychopathology and mental health service delivery when working with Australia's First Peoples. In your essay: (1) Critically evaluate the limitations and biases of Western diagnostic taxonomies (e.g., DSM-5) and standardized psychometric testing with Indigenous populations; (2) Detail the Social and Emotional Wellbeing (SEWB) multidimensional framework and its clinical application to intake, assessment, and formulation; (3) Contrast at least two culture-bound presentations (e.g., Spirit Visits, Sorry Cutting, Being Sung) with Western psychiatric disorders; and (4) Formulate a concrete plan for culturally safe clinical practice, incorporating cultural consultation, traditional healers, reflexivity, and the ethical guidance of Professor Marion Kickett.",
      suggestedWordCount: "1200 - 1500 words (40-45 minutes in exam)",
      scoringRubric: [
        {
          criterion: "Critique of Western DSM-5 & Psychometric Testing (25%)",
          indicators: "In-depth critique of Western diagnostic bias, individualism, normative standardization flaws, risk of unvalidated test adaptations, and Treating culture as distal rather than proximal (Westerman, 2020)."
        },
        {
          criterion: "SEWB Framework & Comprehensive Intake Elements (30%)",
          indicators: "Comprehensive articulation of the 7 SEWB domains (Body, Mind, Family/Kinship, Community, Culture, Country, Spirit/Ancestors). Explains First Peoples intake elements: Genograms, Community Mapping, kinship structures, and AHW partnership."
        },
        {
          criterion: "Culture-Bound Syndromes & Accurate Differentials (25%)",
          indicators: "Rigorous differential analysis of Spirit Visits vs Psychosis, Sorry Cutting vs BPD NSSI, and Being Sung vs Delusions, highlighting cultural consensus, intact thought processes, and traditional lore."
        },
        {
          criterion: "Culturally Safe Practice, Humility & Service Integration (20%)",
          indicators: "Synthesizes cultural humility (Prof Marion Kickett quote), relationship repairs, integration of Traditional Healers (Ngangkari), and partnership with Aboriginal Community Controlled Health Services (ACCHSs)."
        }
      ]
    }
  }
};
