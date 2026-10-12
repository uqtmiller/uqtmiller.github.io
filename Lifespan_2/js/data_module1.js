// Complete clinical content, differential diagnostic matrix, scenario quizzes, and essay prompts for Module 1: Intro, Psychopathology & Differential Diagnosis
const MODULE_1_DATA = {
  moduleId: 1,
  title: "Module 1: Introduction, Psychopathology & Differential Diagnosis",
  subtitle: "Theoretical Underpinnings, DSM-5 Criticisms, First's 6-Step Differential Diagnosis Framework, and Transdiagnostic vs Disorder-Specific Models",
  coordinator: "Dr Bonnie Clough (Clinical Psychologist, MAPS, Senior Lecturer)",

  // High-yield Theoretical Core (VERBATIM LECTURE NOTES)
  theoreticalPillars: [
    {
      title: "Barlow's Unified Protocol (UP) Transdiagnostic Model of Emotional Disorders",
      author: "David H. Barlow (2010)",
      summary: "Transdiagnostic interventions make use of eclectic treatment strategies to address multiple diagnostic problem sets linked by common underlying etiological or maintaining mechanisms (Chu, 2012). Biological and psychological vulnerabilities, high comorbidity, latent structure, and cognitive-behavioral maintaining factors demonstrate that commonalities across emotional disorders outweigh differences. 50 studies demonstrate large effect sizes for anxiety (g = 0.85) and depression (g = 0.91), performing equal to or superior to disorder-specific treatments."
    },
    {
      title: "Casey et al. Cognitive Model of Panic Disorder (Disorder-Specific)",
      author: "Casey, Oei, & Newcombe (2004)",
      summary: "A disorder-specific cognitive-behavioral model conceptualizing Panic Disorder as arising from catastrophic misinterpretation of normal physiological sensations (e.g., palpitations, light-headedness) as imminent catastrophe (heart attack, death, losing control). This misinterpretation amplifies autonomic arousal, escalating into a full panic attack and maintaining agoraphobic avoidance and interoceptive hypervigilance."
    },
    {
      title: "First's 6-Step DSM-5 Differential Diagnosis Framework",
      author: "Michael B. First (2014, 2015)",
      summary: "A systematic 6-step clinical decision tree designed to prevent diagnostic error: (1) Rule out malingering and factitious disorder; (2) Rule out substance aetiology (drugs of abuse & medications — the most common clinician error); (3) Rule out disorder due to a general medical condition; (4) Determine specific primary disorder(s) using decision trees, MSE trees, and differential tables; (5) Differentiate adjustment disorders from residual other specified/unspecified disorders; (6) Establish the boundary with no mental disorder (clinical significance)."
    },
    {
      title: "The Four Conceptual Models of Abnormality",
      author: "Lilienfeld, Frances & Watts (2017)",
      summary: "Four conceptual models distinguish normal from abnormal functioning: (1) Statistical Model (statistical rarity; fails to define cut-offs or recognize common disorders like depression); (2) Subjective Distress Model (core feature is psychological pain; fails with ego-syntonic conditions or low insight); (3) Biological Model (biological disadvantage); (4) Need for Treatment Model (heterogeneous conditions characterized by perceived intervention need). In clinical practice, an integrated combination of all four is utilized."
    },
    {
      title: "Transdiagnostic Maintenance Models across Psychopathology",
      author: "Fairburn, Cooper & Shafran (2003) / Tai & Carey",
      summary: "Transdiagnostic theory understands psychological disorders outside traditional diagnostic silos by targeting common functional maintaining mechanisms: Fairburn's model targets core over-evaluation of shape/weight and shared maintenance loops across eating disorders; Tai & Carey demonstrate transdiagnostic maintenance mechanisms in psychotic disorders; and Norton & Barrera (2011) target shared neuroticism/negative affect in anxiety."
    }
  ],

  // Deep-Dive Content Review Sections (Extracted directly from Lecture Notes)
  contentReviewSections: [
    {
      id: "mod1_key_terms",
      title: "Key Terms & Conceptual Foundations in Psychopathology",
      icon: "📖",
      badge: "Core Terminology (Notes)",
      contentHtml: `
        <p style="margin-bottom: 12px;">Psychopathology aims to <em>"make sense of, or comprehend, that which at first seems incomprehensible"</em> (Fernandez & Stanghellini, 2019). It is interdisciplinary, person-oriented, and explores lived experience alongside the hunt for causes.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-top: 14px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Psychopathology</strong>
            <p style="margin-top: 6px; font-size: 13.5px; color: #475569;">The interdisciplinary, scientific study of mental disorders, including their theoretical underpinnings, aetiology, progression, symptomology, diagnosis, and treatment (APA, 2020). It attempts to describe a patient's experience and their relationship to the world, exploring lived experience and personal meaning rather than mere symptom counts (Stanghellini et al., 2019).</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Symptomology vs. Nosology</strong>
            <p style="margin-top: 6px; font-size: 13.5px; color: #475569;"><strong>Symptomology:</strong> The combined signs, markers, or indications of a disease or disorder studied in view of clinical and diagnostic significance.<br><strong>Nosology:</strong> The scientific study, classification, and taxonomy of diseases and disorders into diagnostic categories (APA, 2020).</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Aetiology</strong>
            <p style="margin-top: 6px; font-size: 13.5px; color: #475569;">The causes, developmental origins, and progression of a disease or disorder. Investigated through the Biopsychosocial Model: complex transaction of biological (genetics, biochemical), psychological (mood, behavior, personality), and social (SES, culture) factors.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Comorbidity</strong>
            <p style="margin-top: 6px; font-size: 13.5px; color: #475569;">The joint occurrence of two or more mental disorders in the same individual. In clinical practice, comorbidity is <strong>the rule rather than the exception</strong>. Associated with poorer prognosis and greater treatment needs. May reflect a common underlying vulnerability/root cause or a disorder chain effect (Borsboom et al., 2011).</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Ego-Syntonic vs. Ego-Dystonic</strong>
            <p style="margin-top: 6px; font-size: 13.5px; color: #475569;"><strong>Ego-Dystonic:</strong> Symptoms experienced as unacceptable, alien, and causing subjective distress (e.g., panic attacks, OCD obsessions).<br><strong>Ego-Syntonic:</strong> Symptoms perceived as acceptable, consistent with self-identity, or valued (e.g., restricting anorexia nervosa, OCPD traits, mania, antisocial behavior), posing challenges to subjective distress criteria.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <strong style="color: var(--primary); font-size: 14.5px;">Transdiagnostic Theory</strong>
            <p style="margin-top: 6px; font-size: 13.5px; color: #475569;">An approach to understanding and treating psychological disorders outside of traditional categorical nosology by targeting core psychological processes (e.g., perfectionism, experiential avoidance, emotion dysregulation) that cause and maintain multiple disorders (Chu, 2012).</p>
          </div>
        </div>
      `
    },
    {
      id: "mod1_dsm_criticisms",
      title: "Major Criticisms of the DSM-5 Framework",
      icon: "⚠️",
      badge: "Nosology Critiques (Lilienfeld et al., 2017)",
      contentHtml: `
        <p style="margin-bottom: 12px;">The lecture notes highlight six major conceptual and clinical criticisms of the DSM-5 taxonomy (Lilienfeld, Frances & Watts, 2017):</p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="background: #fff; border-left: 4px solid #ef4444; padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #991b1b;">1. Inadequate Accounting for Comorbidity:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Comorbidity is the rule rather than the exception. Rather than representing true independent co-occurring diseases, high rates of comorbidity point to shared underlying root vulnerabilities (e.g., neuroticism/negative affectivity) or transdiagnostic symptom networks that the categorical DSM obscures.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #b45309;">2. Medicalisation of Normality:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Lowering diagnostic thresholds medicalizes everyday human distress. Examples cited in notes include the introduction of <em>Disruptive Mood Dysregulation Disorder (DMDD)</em> for childhood temper tantrums and the removal of the <em>bereavement exclusion</em> criterion for Major Depressive Disorder.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #1d4ed8;">3. Neglect of the Attenuation Paradox:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">In psychometrics, maximizing internal reliability by narrowing criteria to a tight set of observable behaviors often causes a paradox: external validity and real-world applicability decrease. The trade-off between reliability and external validity is acknowledged in the DSM's own introduction but unresolved.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid #8b5cf6; padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #6d28d9;">4. Categorical Rather Than Dimensional Approach:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Arbitrary diagnostic cut-offs (e.g., needing 5 of 9 symptoms for MDD) treat psychopathology as a binary 'present or absent' phenomenon, when evidence demonstrates that mental health problems lie along continuous dimensions.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid #06b6d4; padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #0e7490;">5. Failure to Define 'Clinical Significance':</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">Criterion B in DSM requires symptoms to cause 'clinically significant distress or impairment in social, occupational, or other important areas of functioning', yet the DSM provides no operational definition, standardized threshold, or objective guidelines for what constitutes 'clinically significant'.</p>
          </div>
          <div style="background: #fff; border-left: 4px solid #10b981; padding: 12px 16px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <strong style="color: #047857;">6. Disorder-Specific Silos vs Transdiagnostic Realities:</strong>
            <p style="font-size: 13.5px; color: #475569; margin-top: 4px;">The DSM taxonomy fosters siloed conceptualizations and separate manuals for every disorder code, missing common maintaining mechanisms across emotional, eating, and psychotic disorders.</p>
          </div>
        </div>
      `
    },
    {
      id: "mod1_differential_framework",
      title: "First's (2014) 6-Step Differential Diagnosis Protocol",
      icon: "🔬",
      badge: "Clinical Decision Process",
      contentHtml: `
        <p style="margin-bottom: 12px;"><strong>Differential Diagnosis:</strong> The distinction between two or more similar conditions by identifying critical symptoms present in one but not the other (APA, 2020). Michael B. First (2014) outlines the essential 6-step hierarchical process:</p>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 14px;">
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #0f172a; font-size: 15px;">Step 1: Rule Out Malingering and Factitious Disorder</strong>
              <span class="badge badge-secondary">Feigned Symptoms</span>
            </div>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">While clinical practice assumes good faith, feigning must be evaluated. Both involve symptom fabrication or exaggeration, differing in <strong>motivation</strong>:</p>
            <ul style="font-size: 13px; color: #475569; margin-left: 20px; margin-top: 4px;">
              <li><strong>Malingering:</strong> Motivated by clear external incentives (financial compensation, avoiding criminal prosecution, obtaining prescription drugs, evading work/military duty).</li>
              <li><strong>Factitious Disorder:</strong> Motivated by adopting the 'sick role' without external material incentives.</li>
              <li><strong>Red Flags to Watch For:</strong> Presence of clear external incentives; symptom clusters conforming to layperson stereotypes of mental illness rather than genuine syndromes; symptoms shifting drastically between encounters; presentation mimicking a role model (e.g. another patient on the unit); patient is characteristically manipulative or suggestible.</li>
            </ul>
          </div>

          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #0f172a; font-size: 15px;">Step 2: Rule Out Substance Aetiology (Drugs of Abuse & Medications)</strong>
              <span class="badge badge-danger">Most Common Error</span>
            </div>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">Frequently identified as <strong>the most common diagnostic error made by clinicians</strong>. Process involves two clinical determinations:</p>
            <ol style="font-size: 13px; color: #475569; margin-left: 20px; margin-top: 4px;">
              <li>Determine whether the individual has been using a substance (illicit drugs, alcohol, OTC preparations, or prescribed medications like corticosteroids or stimulants).</li>
              <li>Determine the etiological relationship between substance and symptoms. Three possibilities exist:
                <br>&bull; <em>Independent:</em> Use and symptoms are unrelated.
                <br>&bull; <em>Substance-induced:</em> Symptoms are the direct physiological result of intoxication or withdrawal.
                <br>&bull; <em>Consequence:</em> Substance use is secondary self-medication for pre-existing symptoms.
              </li>
            </ol>
          </div>

          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #0f172a; font-size: 15px;">Step 3: Rule Out Disorder Due to a General Medical Condition</strong>
              <span class="badge badge-secondary">Organic Aetiology</span>
            </div>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">Use medical history, physical exams, and medical consults to identify underlying organic conditions (thyroid disease, stroke, epilepsy, endocrine dysfunction, vitamin deficiencies). Determine the relationship:</p>
            <p style="font-size: 13px; color: #475569; margin-top: 4px;"><em>Example from notes:</em> An individual develops depression following a stroke. This may be dual-faceted: the direct physiological damage to frontal/limbic pathways combined with psychological adjustment reactions to physical paralysis.</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #0f172a; font-size: 15px;">Step 4: Determine the Specific Primary Disorder(s)</strong>
              <span class="badge badge-primary">Primary Nosology</span>
            </div>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">Navigate DSM-5 groupings using structured decision tools:</p>
            <ul style="font-size: 13px; color: #475569; margin-left: 20px; margin-top: 4px;">
              <li><strong>Diagnostic Decision Trees by Symptom:</strong> E.g., decision tree for Panic Attacks (distinguishing Panic Disorder vs Social Anxiety vs Specific Phobia vs PTSD vs Agoraphobia); decision tree for Child Behavioural Problems (First, 2015).</li>
              <li><strong>Decision Trees by MSE Domain:</strong> E.g., speech disturbance decision tree (differentiating dysarthria, aphasia, pressured speech in mania, poverty of speech in depression/schizophrenia).</li>
              <li><strong>Differential Diagnosis Tables:</strong> Tabular symptom contrast (e.g., Bulimia Nervosa vs Anorexia Binge-Purge vs Binge Eating Disorder).</li>
              <li><strong>'Variance Explained':</strong> Selecting the diagnosis that accounts for the maximum breadth of clinical symptom presentation with the fewest redundant labels.</li>
            </ul>
          </div>

          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #0f172a; font-size: 15px;">Step 5: Differentiate Adjustment Disorders from Residual Other Specified/Unspecified</strong>
              <span class="badge badge-secondary">Subthreshold Presentations</span>
            </div>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">If criteria for a specific primary disorder are not fully met, determine whether an identifiable psychosocial stressor occurred within the past 3 months (Adjustment Disorder with depressed mood, anxiety, or mixed). If subthreshold symptoms lack an identifiable stressor, classify as <em>Other Specified</em> or <em>Unspecified</em> disorder.</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #0f172a; font-size: 15px;">Step 6: Establish the Boundary with No Mental Disorder</strong>
              <span class="badge badge-secondary">Normative Boundary</span>
            </div>
            <p style="font-size: 13.5px; color: #475569; margin-top: 6px;">Determine whether symptoms cross the threshold of clinical significance or represent expected, transient reactions to life stress or normative developmental variation. Crucial when comorbidity is high to avoid overpathologizing transient distress.</p>
          </div>
        </div>
      `
    },
    {
      id: "mod1_panic_differential",
      title: "Clinical Application: Differential Diagnosis of Panic Attacks & Case of Frank",
      icon: "⚡",
      badge: "Clinical Decision Tree (Slide 50)",
      contentHtml: `
        <p style="margin-bottom: 12px;"><strong>Lecture Activity Case (Slide 50):</strong> <em>'Frank has presented to the clinic wanting treatment for recurring panic attacks. What differential diagnoses should you consider and what information would be needed to differentiate between each diagnosis?'</em></p>
        <div class="table-responsive">
          <table class="table" style="font-size: 13.5px;">
            <thead>
              <tr style="background: #f1f5f9;">
                <th>Diagnostic Possibility</th>
                <th>Differentiating Clinical Trigger / Core Fear</th>
                <th>Key Assessment Question to Differentiate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Panic Disorder</strong></td>
                <td>Recurrent <em>unexpected</em> (out of the blue) panic attacks followed by persistent fear of future attacks or behavioral change.</td>
                <td>'Do panic attacks occur without an obvious trigger, and do you fear losing control or dying from the symptoms themselves?'</td>
              </tr>
              <tr>
                <td><strong>Agoraphobia</strong></td>
                <td>Fear/avoidance of situations where escape might be difficult or help unavailable if panic symptoms occur (crowds, public transit).</td>
                <td>'Do you avoid specific places because you fear you cannot get out if you panic?'</td>
              </tr>
              <tr>
                <td><strong>Social Anxiety Disorder</strong></td>
                <td>Panic attacks occur <em>only</em> in anticipation of or during social scrutiny, embarrassment, or negative evaluation by others.</td>
                <td>'Do you only experience panic when you are speaking, being watched, or interacting with unfamiliar people?'</td>
              </tr>
              <tr>
                <td><strong>Specific Phobia</strong></td>
                <td>Panic attacks triggered <em>exclusively</em> by exposure to a circumscribed object or situation (e.g. needles, heights, spiders).</td>
                <td>'Do attacks occur only when encountering a specific feared object or animal?'</td>
              </tr>
              <tr>
                <td><strong>PTSD</strong></td>
                <td>Panic attacks triggered by reminders, trauma cues, intrusive memories, or flashbacks relating to a traumatic life event.</td>
                <td>'Do your panic attacks follow intrusive flashbacks or traumatic memories?'</td>
              </tr>
              <tr>
                <td><strong>Substance-Induced Anxiety</strong></td>
                <td>Panic symptoms triggered by stimulants, caffeine excess, cannabis, or withdrawal from alcohol/benzodiazepines.</td>
                <td>'How much caffeine or other substances are you consuming, and did the attacks begin following substance use/cessation?'</td>
              </tr>
              <tr>
                <td><strong>General Medical Condition</strong></td>
                <td>Hyperthyroidism, pheochromocytoma, cardiac arrhythmias, mitral valve prolapse, hypoglycaemia.</td>
                <td>'Have you had recent blood tests checking thyroid function and an ECG to rule out physical cardiac aetiology?'</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],

  // Clinical Disorders & Differential Patterns Table
  disorders: [
    {
      id: "PANIC",
      code: "DSM-5 300.01 (F41.0)",
      name: "Panic Disorder",
      type: "Primary Anxiety Disorder",
      ageRange: "Adolescence to Adulthood",
      coreDefinition: "Recurrent unexpected panic attacks accompanied by persistent worry about additional attacks or their consequences, or a significant maladaptive change in behavior designed to avoid having attacks.",
      dsmCriteria: [
        "Recurrent unexpected panic attacks (abrupt surge of intense fear reaching a peak within minutes, with >=4 physical/cognitive symptoms).",
        "At least one of the attacks followed by 1 month (or more) of: (1) Persistent concern/worry about additional panic attacks or their consequences (e.g., losing control, having a heart attack, 'going crazy'); or (2) A significant maladaptive change in behavior related to the attacks (e.g., behaviors designed to avoid panic attacks).",
        "The disturbance is not attributable to the physiological effects of a substance or general medical condition.",
        "The disturbance is not better explained by another mental disorder (e.g., Social Anxiety, Specific Phobia, OCD, PTSD, Separation Anxiety)."
      ],
      howToDiagnose: [
        "First's Step 2 & 3: Rule out caffeine intoxication, stimulant use, thyroid disease, and cardiac arrhythmias with medical consultation.",
        "Detailed timeline of attacks: Determine whether initial attacks were truly unexpected (uncued) vs situationally cued.",
        "Administer Panic Disorder Severity Scale (PDSS) or Anxiety and Related Disorders Interview Schedule (ADIS-5).",
        "Differentiate Agoraphobia (diagnosed comorbidly if avoidance extends to >=2 agoraphobic situations)."
      ],
      factorsLookedFor: [
        "Interoceptive Conditioning: Hyper-awareness of body sensations (heart rate, dizziness).",
        "Catastrophic Cognitions: Casey et al. (2004) cognitive loops of bodily catastrophe.",
        "Safety Behaviors: Carrying water bottles, anti-anxiety meds, sitting near exits.",
        "Avoidance: Limiting exercise, caffeine, or hot environments that induce autonomic arousal."
      ],
      potentialTreatments: [
        "CBT for Panic (Casey et al., 2004 / Barlow): Psychoeducation on physiology of panic, cognitive restructuring of catastrophic misinterpretations.",
        "Interoceptive Exposure: Systematic exposure to feared bodily sensations (hyperventilation, spinning, straw breathing) to break fear conditioning.",
        "In Vivo Exposure: Hierarchical re-engagement with avoided situations.",
        "Barlow's Unified Protocol (UP): Transdiagnostic emotional regulation skills targeting negative affectivity."
      ],
      clinicalPearl: "The hallmark of Panic Disorder is fear of the bodily sensations themselves. In Social Anxiety or Phobia, panic occurs secondary to external social or phobic triggers."
    },
    {
      id: "FEIGNING",
      code: "DSM-5 V65.2 (Z76.5) / 300.19 (F68.10)",
      name: "Malingering vs. Factitious Disorder",
      type: "Feigned Symptom Conditions",
      ageRange: "Any Age",
      coreDefinition: "The intentional fabrication, simulation, or profound exaggeration of physical or psychological symptoms, differentiated fundamentally by underlying motivation (external incentive vs. sick role).",
      dsmCriteria: [
        "Malingering (V-code): Intentional production of false or grossly exaggerated physical or psychological symptoms, motivated by external incentives (economic gain, avoiding criminal prosecution, obtaining drugs, avoiding military duty).",
        "Factitious Disorder Imposed on Self: Falsification of physical or psychological signs, or induction of injury or disease, associated with identified deception. The individual presents themselves as ill, impaired, or injured, in the absence of obvious external rewards."
      ],
      howToDiagnose: [
        "First's Step 1 Assessment: Check for clear external incentives (legal trials, workers' compensation claims, disability pension applications).",
        "Evaluate symptom consistency: Genuine symptoms follow neurobiological syndromes; feigned symptoms conform to layperson stereotypes of mental illness.",
        "Collateral interview and behavioral observation: Note discrepancies between self-report and ward/waiting-room behavior.",
        "Psychometric validity testing: Administer PAI validity scales (Negative Impression Management [NIM], Malingering Index) or MMPI-3 validity scales (F, F-r)."
      ],
      factorsLookedFor: [
        "Motivation: External reward (Malingering) vs. Psychological need to adopt the patient role (Factitious).",
        "Shifting symptoms: Dramatic symptom presentation changes from one clinician encounter to the next.",
        "Resistance to diagnostic workup: Malingerers often resist testing; Factitious patients eagerly undergo invasive diagnostic procedures.",
        "Suggestibility: Endorsing bizarre, fabricated symptoms when subtly suggested by the assessor."
      ],
      potentialTreatments: [
        "Malingering: Not a mental disorder; non-punitive confrontation, clarify diagnostic boundaries, refuse fraudulent secondary gain.",
        "Factitious Disorder: Supportive, face-saving psychotherapeutic engagement; avoid direct humiliating exposure; treat underlying attachment and personality vulnerability."
      ],
      clinicalPearl: "Malingerers feign illness to gain an external reward or avoid an unpleasant duty; factitious patients feign illness because being a patient is their emotional goal."
    },
    {
      id: "SUBSTANCE_INDUCED",
      code: "DSM-5 Variable by Substance (e.g. 292.89)",
      name: "Substance/Medication-Induced Mental Disorder",
      type: "Etiological Diagnostic Category",
      ageRange: "All Ages",
      coreDefinition: "A clinically significant presentation of a mental disorder (anxiety, depression, psychosis) where symptoms developed during or within 1 month of substance intoxication, withdrawal, or medication exposure.",
      dsmCriteria: [
        "A clinically significant symptomatic presentation of a mental disorder (e.g., anxiety, depression, psychosis).",
        "Evidence from history, physical exam, or lab findings that: (1) Symptoms developed during or within 1 month of substance intoxication or withdrawal; or (2) The involved substance/medication is capable of producing the symptoms.",
        "Disturbance is not better explained by an independent mental disorder (e.g., symptoms preceded onset of substance use; symptoms persist >1 month after cessation).",
        "Disturbance does not occur exclusively during delirium."
      ],
      howToDiagnose: [
        "First's Step 2 Process: Thorough substance timeline, urine toxicology screens, medication reconciliation (steroids, stimulants, beta-blockers).",
        "Determine temporal onset: Did symptoms precede substance use, or did they only emerge following heavy intoxication or withdrawal?",
        "Assess washout period: Do symptoms remit after 4 weeks of abstinence? (If persisting >1 month, consider an independent primary disorder)."
      ],
      factorsLookedFor: [
        "Three possibilities in notes: (1) Independent, (2) Direct causal result of substance, or (3) Consequence (self-medication).",
        "Class of substance: Stimulants/cannabis causing panic/psychosis; alcohol/sedative withdrawal causing severe autonomic anxiety.",
        "Medication side effects: Corticosteroid-induced mania/depression; propranolol-induced fatigue/depression."
      ],
      potentialTreatments: [
        "Supervised detoxification and cessation of the offending substance/medication.",
        "Motivational Interviewing (MI) and dual-diagnosis behavioral interventions.",
        "Supportive symptom monitoring during the acute withdrawal phase before initiating long-term psychotropics."
      ],
      clinicalPearl: "Failing to recognize substance or medication aetiology is the most common diagnostic error made by clinicians. Always take a forensic substance and OTC history."
    },
    {
      id: "GMC_DISORDER",
      code: "DSM-5 Variable by Condition (e.g. 293.89)",
      name: "Mental Disorder Due to Another Medical Condition",
      type: "General Medical Aetiology",
      ageRange: "All Ages (High in Older Adults)",
      coreDefinition: "A prominent mental disturbance (depression, anxiety, psychosis, neurocognitive change) judged to be the direct pathophysiological consequence of an underlying general medical condition.",
      dsmCriteria: [
        "A prominent mental health disturbance causing clinically significant distress or functional impairment.",
        "Evidence from history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.",
        "The disturbance is not better explained by another mental disorder (including an adjustment reaction to the illness).",
        "The disturbance does not occur exclusively during the course of a delirium."
      ],
      howToDiagnose: [
        "First's Step 3 Protocol: Comprehensive medical history, physical exam, and laboratory investigations (CBC, thyroid panel, electrolytes, neuroimaging).",
        "Establish physiological plausibility: Is there a known biological mechanism linking the medical condition to the psychiatric presentation?",
        "Temporal association: Did psychiatric symptoms begin, fluctuate, or resolve in tandem with the medical condition?"
      ],
      factorsLookedFor: [
        "Direct neurological insult vs psychological reaction: Post-stroke depression reflects both direct brain tissue disruption and psychological grief over paralysis.",
        "Endocrine disorders: Hyperthyroidism masquerading as Panic Disorder; hypothyroidism masquerading as Major Depression.",
        "Neurological conditions: Multiple sclerosis, temporal lobe epilepsy, Parkinson's disease, brain tumors."
      ],
      potentialTreatments: [
        "Primary medical treatment of the underlying somatic disease (e.g., thyroid hormone replacement, neurological management).",
        "Adjunctive psychological support targeting adaptation to chronic illness.",
        "Collaborative multidisciplinary care between psychologist and treating medical specialist."
      ],
      clinicalPearl: "A sudden psychiatric onset in an older adult with no prior psychiatric history must always be treated as a medical condition until proven otherwise."
    },
    {
      id: "ADJUSTMENT",
      code: "DSM-5 309.xx (F43.2x)",
      name: "Adjustment Disorders",
      type: "Stress-Response Syndrome",
      ageRange: "All Ages",
      coreDefinition: "The development of emotional or behavioral symptoms in response to an identifiable psychosocial stressor occurring within 3 months of stressor onset, which do not meet full criteria for another specific mental disorder.",
      dsmCriteria: [
        "Development of emotional or behavioral symptoms in response to an identifiable stressor(s) occurring within 3 months of the onset of the stressor(s).",
        "Clinically significant symptoms, evidenced by: (1) Marked distress out of proportion to the severity/intensity of the stressor; or (2) Significant impairment in social, occupational, or other important areas of functioning.",
        "Stress-related disturbance does not meet the criteria for another mental disorder and is not merely an exacerbation of a preexisting mental disorder.",
        "Symptoms do not represent normal bereavement.",
        "Once the stressor or its consequences have terminated, symptoms do not persist for more than an additional 6 months."
      ],
      howToDiagnose: [
        "First's Step 5 Process: Confirm identifiable stressor within 3 months (divorce, job loss, illness diagnosis, university relocation).",
        "Rule out full-threshold primary disorders: Ensure criteria for Major Depressive Disorder, GAD, or PTSD are NOT met.",
        "Assess proportion of distress: Distinguish normative situational distress from clinically impairing adjustment reactions."
      ],
      factorsLookedFor: [
        "Subtype classification: With Depressed Mood, With Anxiety, With Mixed Anxiety and Depressed Mood, With Disturbance of Conduct.",
        "Coping resources: Problem-solving deficits, low social support, acute life transition.",
        "Timeframe: Resolves within 6 months of stressor termination unless chronic stressor continues."
      ],
      potentialTreatments: [
        "Solution-focused brief therapy, crisis intervention, and problem-solving skills training.",
        "Stress management, sleep hygiene, and cognitive reframing of the life transition.",
        "Mobilizing social support systems and functional environmental adjustments."
      ],
      clinicalPearl: "Adjustment Disorder is a residual category: if a patient meets full criteria for Major Depression following a stressor, they are diagnosed with Major Depression, not Adjustment Disorder."
    },
    {
      id: "TRANSDIAGNOSTIC_EMOTIONAL",
      code: "Theoretical Construct / UP Target",
      name: "Transdiagnostic Emotional Disorders",
      type: "Unified Dimensional Spectrum",
      ageRange: "Adolescence to Adulthood",
      coreDefinition: "A broad spectrum encompassing anxiety, depressive, and related emotional disorders united by high negative affectivity, neuroticism, aversive reactions to emotional experiences, and maladaptive emotion regulation strategies.",
      dsmCriteria: [
        "Clinical construct unifying multiple categorical DSM disorders (GAD, Panic Disorder, Agoraphobia, Social Anxiety, Major Depression, Persistent Depressive Disorder).",
        "Core features include: (1) Frequent, intense negative emotions; (2) Aversive evaluation of internal emotional experiences; (3) Chronic behavioral and experiential avoidance designed to suppress or escape negative emotional states.",
        "Pervasive comorbidity across anxiety and unipolar depressive categories."
      ],
      howToDiagnose: [
        "Functional assessment of emotion regulation strategies (experiential avoidance, thought suppression, safety behaviors).",
        "Evaluate dimensional neuroticism and positive/negative affectivity (PANAS, OASIS, ODSIS).",
        "Identify shared maintenance loops rather than tallying isolated categorical symptom criteria."
      ],
      factorsLookedFor: [
        "Negative Affectivity / Neuroticism: Shared biological vulnerability across emotional disorders.",
        "Experiential Avoidance: Unwillingness to remain in contact with difficult emotions, sensations, and thoughts.",
        "Emotion-Driven Behaviors (EDBs): Action urges driven by distress (withdrawal, reassurance-seeking, hypervigilance)."
      ],
      potentialTreatments: [
        "Barlow's Unified Protocol (UP): 5 core treatment modules: Mindful emotion awareness, cognitive flexibility, countering emotion-driven behaviors, interoceptive & situational emotion exposures.",
        "Mindfulness and Acceptance-Based Therapies (ACT): Defusion and values-based behavioral action.",
        "Eclectic evidence-based strategies targeting shared maintaining mechanisms."
      ],
      clinicalPearl: "Barlow's UP demonstrates large effect sizes across anxiety and depression because treating the common underlying vulnerability is more efficient than treating comorbid disorders sequentially."
    }
  ],

  // Interactive Differential Tool Presets
  differentialPresets: [
    {
      label: "Panic Disorder vs. Substance-Induced Anxiety vs. GMC",
      ids: ["PANIC", "SUBSTANCE_INDUCED", "GMC_DISORDER"],
      clinicalRationale: "Essential differential flow: Ruling out medical conditions (thyroid/cardiac) and substance triggers (caffeine, stimulant, cannabis) before diagnosing primary Panic Disorder."
    },
    {
      label: "Malingering vs. Factitious Disorder",
      ids: ["FEIGNING"],
      clinicalRationale: "First's Step 1: Differentiating feigned symptoms driven by external gain (Malingering) from those driven by the psychological need to adopt the sick role (Factitious Disorder)."
    },
    {
      label: "Adjustment Disorder vs. Primary Anxiety / Depression",
      ids: ["ADJUSTMENT", "PANIC", "TRANSDIAGNOSTIC_EMOTIONAL"],
      clinicalRationale: "First's Step 5: Differentiating situational stress-response reactions from full-threshold primary psychiatric conditions."
    }
  ],

  // Clinical Case Vignettes (Two-Step Practice)
  scenarios: [
    {
      id: "SCENARIO_1_1",
      title: "Case Vignette 1: Sudden Pounding Heart in a 28-Year-Old Architect",
      patientProfile: "Frank, 28-year-old architect, presenting with recurrent sudden surges of intense terror.",
      vignette: "Frank presents to an outpatient clinic reporting that over the past 6 weeks, he has experienced 5 sudden episodes of severe chest tightness, racing heart, dizziness, and shaking. The first episode occurred while he was watching television at home; he felt convinced he was having a fatal heart attack and rushed to the emergency department. Full ECG, cardiac enzymes, and physical exams were normal. Frank now spends hours reading about heart attacks, avoids intense gym workouts or coffee, and constantly monitors his pulse. He reports intense dread about when the next attack will strike.",
      step1Question: "Step 1: Based on First's 6-step differential diagnostic process, what is Frank's most accurate primary clinical diagnosis?",
      step1Options: [
        "General Medical Condition (Undiagnosed Cardiac Arrhythmia)",
        "Panic Disorder (with Interoceptive Catastrophic Misinterpretation)",
        "Social Anxiety Disorder",
        "Factitious Disorder Imposed on Self"
      ],
      step1CorrectIndex: 1,
      step1Explanation: "Frank experiences recurrent unexpected (uncued) panic attacks with persistent worry about future attacks and maladaptive behavioral avoidance (avoiding exercise, checking pulse), meeting criteria for Panic Disorder. Organic cardiac pathology was ruled out in the ED.",
      step2Question: "Step 2: According to the cognitive-behavioral model of Panic Disorder (Casey et al., 2004 / Barlow), what is the optimal evidence-based psychological treatment protocol?",
      step2Options: [
        "Long-term supportive psychodynamic psychotherapy exploring childhood unconscious trauma",
        "Cognitive restructuring of catastrophic body misinterpretations combined with interoceptive exposure to feared bodily sensations",
        "Teaching avoidance techniques to ensure he prevents his heart rate from elevating",
        "Prescribing high-dose sedatives whenever he feels a pulse change"
      ],
      step2CorrectIndex: 1,
      step2Explanation: "Casey et al. (2004) and Barlow identify catastrophic misinterpretation of bodily sensations as the core maintaining loop. The treatment of choice is psychoeducation, cognitive restructuring, and interoceptive exposure (e.g. hyperventilation, spinning, stair climbing) to break the fear of arousal sensations."
    },
    {
      id: "SCENARIO_1_2",
      title: "Case Vignette 2: Dramatic Symptoms Following a Workplace Dispute",
      patientProfile: "Darren, 42-year-old warehouse supervisor, undergoing a contested workers' compensation claim.",
      vignette: "Darren is referred for psychological evaluation after claiming total psychiatric disability following a minor dispute with his supervisor 2 months ago. He reports severe, non-stop hallucinations of 'monsters whispering', complete amnesia for his entire adult life, and inability to speak above a whisper. During the interview, he frequently checks whether the psychologist is taking notes, and his described hallucinations shift dramatically between appointments. When asked whether he experiences an unusual symptom that does not exist in genuine psychosis ('Do you see words floating in backward order?'), he eagerly agrees that he experiences this daily. A $250,000 compensation claim is pending.",
      step1Question: "Step 1: In accordance with First's Step 1 for Differential Diagnosis, how should Darren's clinical presentation be classified?",
      step1Options: [
        "Schizophrenia, First Episode",
        "Factitious Disorder Imposed on Self",
        "Malingering (Feigned Symptoms Motivated by External Financial Incentive)",
        "Adjustment Disorder with Depressed Mood"
      ],
      step1CorrectIndex: 2,
      step1Explanation: "Darren demonstrates classic red flags for Malingering identified by First (2014): presence of clear external incentive ($250,000 workers' comp claim), symptoms conforming to layperson stereotypes of mental illness rather than genuine syndromes (non-stop monster whispers, global amnesia), extreme suggestibility, and shifting symptoms.",
      step2Question: "Step 2: What is the recommended clinical management strategy for this presentation?",
      step2Options: [
        "Support the compensation claim and prescribe antipsychotic medications",
        "Objective psychometric validity testing (e.g. PAI NIM scale), non-punitive confrontation, and refusal to validate fraudulent external secondary gain",
        "Immediate involuntary hospitalization for severe psychosis",
        "Intensive schema therapy addressing childhood modes"
      ],
      step2CorrectIndex: 1,
      step2Explanation: "Malingering is not a mental disorder. The clinician should document objective findings, utilize validity scales (PAI, MMPI), gently and non-punitively address discrepancies, and decline to endorse fraudulent disability gain."
    },
    {
      id: "SCENARIO_1_3",
      title: "Case Vignette 3: Low Mood and Anxiety Following University Relocation",
      patientProfile: "Sophia, 19-year-old first-year university student, presenting with crying spells and worry.",
      vignette: "Sophia moved interstate 6 weeks ago to commence university. She presents to student health reporting feeling overwhelmed, tearful in the evenings, and anxious about making friends. She reports trouble falling asleep due to worrying about course deadlines. However, she attends all lectures, completes assignments on time, maintains good appetite, has no psychomotor changes, and continues to enjoy FaceTime calls with high-school friends. She denies any suicidal ideation or prior psychiatric history.",
      step1Question: "Step 1: Applying First's Step 5 and 6, what is Sophia's clinical diagnosis?",
      step1Options: [
        "Major Depressive Disorder, Moderate",
        "Adjustment Disorder with Mixed Anxiety and Depressed Mood",
        "Generalized Anxiety Disorder",
        "Normative Stress with No Mental Disorder (Sub-threshold)"
      ],
      step1CorrectIndex: 1,
      step1Explanation: "Sophia developed clinically significant distress and emotional disturbance in direct response to an identifiable stressor (relocation/university transition within 3 months). She does not meet full criteria for MDD (no anhedonia, no cognitive/physical vegetative clusters, preserved functioning) or GAD.",
      step2Question: "Step 2: What is the optimal evidence-based intervention for Sophia's presentation?",
      step2Options: [
        "Long-term transdiagnostic SSRI pharmacotherapy",
        "Brief problem-solving, stress management, sleep hygiene, and campus social connection support",
        "Intensive Dialectical Behavior Therapy (DBT)",
        "Immediate referral for ECT evaluation"
      ],
      step2CorrectIndex: 1,
      step2Explanation: "Adjustment Disorders respond excellently to brief solution-focused therapy, psychoeducation, problem-solving skills, sleep hygiene, and mobilizing social supports, with expected resolution as adaptation occurs."
    }
  ],

  // Exam Practice Short Answer & Essay Practice Bank (NO SPOILERS IN TITLES)
  shortAnswerAndEssay: {
    shortAnswerQuestions: [
      {
        id: "SAQ_1_1",
        title: "Exam Practice SAQ 1 (5 Marks): Differential Diagnosis Protocol and Ruling Out Feigned Presentations",
        prompt: "According to Michael B. First's (2014) DSM-5 differential diagnosis framework, outline Step 1 of the diagnostic process. In your response: (a) Differentiate between Malingering and Factitious Disorder, identifying their primary motivational distinctions; and (b) List three clinical 'red flags' or indicators that should prompt a clinician to suspect feigned psychopathology. (5 marks)",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Correctly identifies First's Step 1 as ruling out feigned psychopathology (1 mark)",
          "Accurately defines Malingering with explicit focus on external incentives / material gain (1 mark)",
          "Accurately defines Factitious Disorder with explicit focus on adoption of the sick role without external gain (1 mark)",
          "Provides at least two valid clinical red flags from lecture notes (shifting symptoms, layperson stereotype, external incentive, mimicry, suggestibility) (2 marks)"
        ],
        modelAnswer: "According to Michael B. First (2014), Step 1 of the differential diagnosis process requires clinicians to rule out Malingering and Factitious Disorder before assuming the report of symptoms reflects genuine psychopathology.\n\n(a) Motivational Distinctions:\n- Both conditions involve the intentional fabrication, simulation, or gross exaggeration of physical or psychological symptoms.\n- Malingering is defined by external motivation: the production of symptoms is driven by clear, tangible external incentives or secondary gain (e.g., financial compensation, avoiding criminal prosecution, evading military service or work duties, obtaining prescription narcotics).\n- Factitious Disorder is defined by internal/psychological motivation: the individual intentionally produces symptoms in the absence of external incentives, driven by a compulsive psychological need to adopt the 'sick role' and receive medical attention and care.\n\n(b) Clinical Red Flags for Feigned Psychopathology (Notes Slide 38):\n1. Clear external incentives or legal/financial contexts associated with the diagnosis (e.g. pending litigation, disability claims, forensic evaluations).\n2. Symptoms that conform to a layperson's stereotype of mental illness rather than genuine neurobiological syndromes (e.g. bizarre, movie-like delusions; total amnesia for personal identity; constant visual monsters).\n3. Dramatic shifting of symptoms: the nature, severity, or presentation of symptoms changes drastically from one clinician encounter to the next.\n4. Symptoms mimicking a role model (e.g. another patient on the psychiatric ward or a close family member).\n5. Characteristically manipulative, evasive, or highly suggestible interpersonal presentation (e.g. eagerly endorsing impossible or contrived symptoms suggested by the clinician)."
      },
      {
        id: "SAQ_1_2",
        title: "Exam Practice SAQ 2 (5 Marks): Conceptual Criticisms of the DSM-5 Framework",
        prompt: "Critically evaluate the DSM-5 classification system using the conceptual arguments outlined by Lilienfeld, Frances, and Watts (2017) in the lecture notes. Detail three major criticisms of the DSM-5, explaining the clinical implications of each critique. (5 marks)",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Explains comorbidity criticism: rule rather than exception, obscures shared latent vulnerabilities (1.5 marks)",
          "Explains medicalisation of normality with lecture examples (DMDD, bereavement exclusion) (1.5 marks)",
          "Explains the attenuation paradox (trade-off between reliability and external validity) OR categorical vs dimensional cut-offs (1.5 marks)",
          "Discusses clinical implications of these diagnostic limitations (0.5 marks)"
        ],
        modelAnswer: "Lilienfeld, Frances, and Watts (2017) highlight several fundamental conceptual and empirical limitations of the DSM-5 taxonomy:\n\n1. Inadequate Accounting for Comorbidity:\nIn clinical practice, comorbidity is the rule rather than the exception. The DSM treats comorbid diagnoses as co-occurring independent diseases, which multiplies labels without explaining underlying pathology. Comorbidity typically indicates shared latent vulnerabilities (e.g., neuroticism, negative affectivity) or transdiagnostic symptom networks that categorical diagnoses artificially divide, resulting in poorer prognosis and fragmented care.\n\n2. Medicalisation of Normality:\nBy progressively lowering diagnostic thresholds, the DSM pathologizes normal human suffering and transient emotional reactions. Notable lecture examples include introducing Disruptive Mood Dysregulation Disorder (DMDD) for childhood temper outbursts and eliminating the bereavement exclusion for Major Depression, turning natural grief reactions into psychiatric illness and risking inappropriate pharmacotherapy.\n\n3. Neglect of the Attenuation Paradox:\nThe attenuation paradox describes the psychometric reality where maximizing internal reliability by narrowing symptom criteria to concrete observable behaviors actually diminishes external construct validity. Although acknowledged in the DSM's introduction, the manual prioritizes inter-rater reliability at the expense of capturing the nuanced, complex lived experience of psychopathology.\n\n4. Categorical vs. Dimensional Cut-offs & Unoperationalized Clinical Significance:\nThe DSM enforces arbitrary categorical thresholds (e.g., requiring 5 of 9 symptoms) on continuous biological and psychological traits. Furthermore, it mandates that symptoms cause 'clinically significant impairment or distress' (Criterion B) without providing an objective definition or standard threshold for what constitutes clinical significance."
      },
      {
        id: "SAQ_1_3",
        title: "Exam Practice SAQ 3 (5 Marks): Transdiagnostic vs Disorder-Specific Models in Clinical Practice",
        prompt: "Compare and contrast disorder-specific cognitive-behavioral models with transdiagnostic models of emotional disorders (e.g., Barlow's Unified Protocol). Outline two advantages and one cautionary consideration associated with adopting a transdiagnostic treatment approach in clinical psychology. (5 marks)",
        suggestedTime: "8-10 minutes",
        keyCriteria: [
          "Clearly contrasts disorder-specific (e.g. Casey panic model) with transdiagnostic models (e.g. Barlow UP) (1.5 marks)",
          "Outlines two evidence-based advantages from lecture notes (efficiency/dissemination, treating comorbidities simultaneously, large effect sizes) (2 marks)",
          "Identifies the key caution from notes: risk of clinician complacency; requirement that transdiagnostic therapy remains structured and mechanism-focused (1.5 marks)"
        ],
        modelAnswer: "Disorder-specific models conceptualize psychopathology through isolated categorical lenses, designing specialized treatment protocols for single diagnoses (e.g., Casey et al., 2004 cognitive model of Panic Disorder targeting catastrophic misinterpretations of somatic arousal).\n\nIn contrast, transdiagnostic models (e.g., Barlow, 2010 Unified Protocol for Emotional Disorders; Fairburn et al., 2003 for eating disorders; Tai & Carey for psychosis) view disorders outside traditional diagnostic silos, targeting common underlying aetiological and maintaining mechanisms—such as high negative affectivity, experiential avoidance, and maladaptive emotion regulation.\n\nAdvantages of Transdiagnostic Approaches (Notes Slides 58–61):\n1. Increased Efficiency and Resource Dissemination: Clinicians master a single core protocol that can treat diverse co-occurring presentations, eliminating the need to sequentially deliver multiple distinct manualized treatments.\n2. Increased Clinical Efficacy Across Comorbidities: Meta-analytic evidence (50 studies) demonstrates large effect sizes for anxiety (g = 0.85) and depression (g = 0.91), performing as well as disorder-specific treatments for anxiety and potentially superior for depression, while simultaneously resolving comorbid conditions.\n\nCautionary Considerations (Notes Slide 66):\n1. Risk of Complacency and Loss of Specificity: Transdiagnostic treatment is not unstructured, eclectic therapy; it requires precise targeting of core maintaining mechanisms. Clinicians must not become complacent and must maintain up-to-date knowledge of disorder-specific developments and unique clinical presentations."
      }
    ],

    // Comprehensive Exam Essay Practice
    essayPrompt: {
      title: "Comprehensive Exam Essay Practice (20 Marks): Nosological Limitations, Differential Process & Transdiagnostic Horizons",
      prompt: "Critically evaluate the DSM-5 diagnostic framework and the process of differential diagnosis in clinical practice. In your essay: (1) Detail the major conceptual criticisms of the categorical DSM taxonomy (including comorbidity, medicalisation of normality, and the attenuation paradox); (2) Walk through Michael B. First's (2014) 6-step differential diagnosis process, explaining the clinical rationale and potential hazards of clinician error at each step; and (3) Contrast disorder-specific cognitive models (e.g. Casey et al., 2004 Panic model) with transdiagnostic frameworks (e.g. Barlow's Unified Protocol), evaluating empirical evidence and clinical utility across the lifespan.",
      suggestedWordCount: "1200 - 1500 words (40-45 minutes in exam)",
      scoringRubric: [
        {
          criterion: "Critique of DSM-5 Taxonomy (25%)",
          indicators: "Sophisticated critical evaluation of DSM-5 limitations: comorbidity as rule vs exception, medicalisation of normality (DMDD, bereavement), attenuation paradox trade-off between reliability and validity, arbitrary categorical thresholds, and failure to define clinical significance."
        },
        {
          criterion: "First's 6-Step Differential Diagnosis Protocol (35%)",
          indicators: "Comprehensive step-by-step examination: (1) Malingering vs Factitious feigning; (2) Substance aetiology (the most common clinician error); (3) General medical conditions (organic etiology); (4) Primary disorder selection (decision trees, MSE trees, variance explained); (5) Adjustment disorders vs unspecified; (6) Boundary with no disorder."
        },
        {
          criterion: "Disorder-Specific vs Transdiagnostic Models (25%)",
          indicators: "Rigorous contrast between disorder-specific cognitive formulation (Casey et al. panic model) and transdiagnostic emotional models (Barlow's UP, Fairburn, Tai & Carey). Cites empirical effect sizes and discusses efficiency vs risk of clinician complacency."
        },
        {
          criterion: "Clinical Synthesis & Lifespan Application (15%)",
          indicators: "Person-centered synthesis highlighting that accurate diagnosis goes beyond DSM symptom-matching to explore lived experience, functional maintaining mechanisms, and individualized treatment planning."
        }
      ]
    }
  }
};
