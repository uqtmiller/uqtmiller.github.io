export interface TerrainSection {
  id: number;
  slug: string;
  title: string;
  actNumber: 1 | 2 | 3;
  actTitle: string;
  actTheme: string;
  tagline: string;
  meaning: string;
  detailedMeaning: string;
  culturalContext: string;
  dancers: string;
  movementMetaphor: string;
  keyConcepts: {
    space: string;
    dynamics: string;
    relationships: string;
    devices: string;
    production: string;
    skills: string;
  };
  visualAnchor: {
    icon: string;
    colors: string;
    costume: string;
    lighting: string;
  };
  whyItMattersForExam: string;
  sampleQuestionHook: string;
}

export const ACTS = [
  {
    number: 1,
    title: "Act I: Human & Cultural Connection",
    theme: "Urban Disconnect, Political Resistance & Ancestral Continuity",
    description: "The journey begins in the contemporary world and establishes the unshakeable foundation of culture before moving deep onto country.",
    color: "from-amber-700 to-rose-900",
    bgBadge: "bg-amber-900/40 text-amber-300 border-amber-700/60",
    sections: [1, 2, 3]
  },
  {
    number: 2,
    title: "Act II: The Arid Land & Human Impact",
    theme: "Patience of Spirit Flora, Acidic Minerals & Man-Made Scars",
    description: "Venturing into the harsh beauty of Lake Eyre's dry landscape, examining ancient flora, treacherous mineral crusts, and the trauma of human exploitation.",
    color: "from-stone-700 to-amber-900",
    bgBadge: "bg-stone-800/60 text-stone-300 border-stone-600/60",
    sections: [4, 5, 6]
  },
  {
    number: 3,
    title: "Act III: Regeneration & The Water Cycle",
    theme: "Tectonic Healing, Sacred Horizons & The Deluge Transformation",
    description: "The cyclical climax where the ancient land heals itself, meets the sacred sky at the horizon, and undergoes miraculous rebirth through torrential floodwaters.",
    color: "from-cyan-900 to-blue-950",
    bgBadge: "bg-cyan-950/60 text-cyan-300 border-cyan-700/60",
    sections: [7, 8, 9]
  }
];

export const TERRAIN_SECTIONS: TerrainSection[] = [
  {
    id: 1,
    slug: "red-brick",
    title: "RED BRICK",
    actNumber: 1,
    actTitle: "Act I: Human & Cultural Connection",
    actTheme: "Ancestral Calling vs Urban Constraint",
    tagline: "Looking beyond the urban landscape to hear an ancestral Calling to Country.",
    meaning: "Aboriginal people's deep sense of 'calling' to return 'on country' despite the alienating pressures and rigid structures of modern urban city life.",
    detailedMeaning: "With the pressures of modern life and living in urban environments, the need to reconnect to country is an extremely strong instinct—a vital chance to refuel spiritually and culturally.",
    culturalContext: "Frances Rings explores the contemporary Indigenous reality: living in concrete cities while feeling the ancient spiritual gravitational pull of ancestral lands.",
    dancers: "Solo female dancer, supported and manipulated by four male dancers.",
    movementMetaphor: "The female dancer is physically hoisted, restricted, and directed by four male dancers—embodying both the claustrophobic scaffolding of city architecture and the intense internal struggle to break away toward Country.",
    keyConcepts: {
      space: "High levels (lifted into mid-air) contrasting with forced drops; confined personal space surrounded by four bodies; sharp forward pathways.",
      dynamics: "Sudden shifts between heavy, sustained weight and sudden percussive struggling; floating suspensions when elevated.",
      relationships: "Manipulation and weight-bearing between the solo female and male quartet; counterbalances; dependence vs yearning for freedom.",
      devices: "Solos with quartet accompaniment; contrast between rigid angular male framing and fluid female extensions; motif of reaching outward.",
      production: "Warm brick-red lighting contrasting with stark shadows; soundtrack blending urban ambient noise with resonant ancestral acoustics.",
      skills: "Core strength, balance during partnering lifts, expressive eyeline reaching beyond the dancers' physical circle."
    },
    whyItMattersForExam: "Frequently tested to examine how 'manipulation' (Relationship) and 'levels' (Space) represent external pressures vs personal freedom.",
    sampleQuestionHook: "How does Frances Rings use levels and relationships between dancers to communicate the conflict between city pressure and spiritual longing?"
  },
  {
    id: 2,
    slug: "shields",
    title: "SHIELDS",
    actNumber: 1,
    actTitle: "Act I: Human & Cultural Connection",
    actTheme: "Defiance & The Struggle for Land Rights",
    tagline: "Reflecting on the struggle for Land Rights and Recognition that continues to affect Indigenous people today.",
    meaning: "The collective resilience, political struggle, and unyielding defense of Aboriginal land rights, sovereignty, and cultural identity.",
    detailedMeaning: "Reflects the ongoing historical and contemporary fight for Land Rights and Recognition. Indigenous peoples have stood firm for generations to protect sacred sites, legal rights, and cultural heritage.",
    culturalContext: "Draws from traditional warrior stances and shield-bearing rituals, transmuting ancient defense mechanisms into modern socio-political protest.",
    dancers: "Male ensemble moving in powerful formations.",
    movementMetaphor: "Dancers form impenetrable human barricades—wide, grounded stances with braced forearms and tense torsos, projecting immovable strength against encroaching forces.",
    keyConcepts: {
      space: "Low to medium grounded levels; wide horizontal defensive formations; sharp direct pathways driving toward the audience.",
      dynamics: "Percussive, punchy, and slash effort actions; sustained tension held in isometric poses; forceful accents.",
      relationships: "Tight group proximity; interlocking arms; unison and flank formations acting as one protective body.",
      devices: "Unison (to symbolize solidarity and unified voice); canon (rippling defensive stances); repetition of strong lunges.",
      production: "Dramatic chiaroscuro side-lighting highlighting muscular definition; powerful rhythmic drumming and resonant percussive soundscape.",
      skills: "Endurance, explosive strength, grounded alignment, fierce facial expression and unwavering focus."
    },
    whyItMattersForExam: "Prime example for questions on 'Unison' (Choreographic Device) communicating unity, and 'Percussive Dynamics' communicating conflict.",
    sampleQuestionHook: "Analyse Rings' use of choreographic devices (such as unison and canon) in Shields to embody political resistance."
  },
  {
    id: 3,
    slug: "reborn",
    title: "REBORN",
    actNumber: 1,
    actTitle: "Act I: Human & Cultural Connection",
    actTheme: "Lineage, Inheritance & Passing on Customs",
    tagline: "Land is passed down through the lineage along with knowledge and customs.",
    meaning: "The continuous intergenerational transmission of traditional culture, law, sacred stories, and custodial belonging from elders to youth.",
    detailedMeaning: "Land is not merely owned; it is passed down through bloodline, accompanied by the sacred songs, dance customs, and environmental stewardship that keep Country alive.",
    culturalContext: "Celebrates the unbroken survival of the world's oldest continuous living culture through elders nurturing the next generation.",
    dancers: "Ensemble / generational groupings.",
    movementMetaphor: "Gentle unfolding and unfurling movements, passing physical weight and breath between dancers like an invisible flame or sacred thread passed hand-to-hand.",
    keyConcepts: {
      space: "Curved and twisted shapes; fluid vertical and horizontal planes; circular travelling pathways evoking cyclical time.",
      dynamics: "Sustained, flowing, gliding, and swinging qualities; gentle release and continuous momentum without jarring stops.",
      relationships: "Body-to-body contact; gentle cradling and mirroring; physical handoffs and supportive weight distribution.",
      devices: "Accumulation (movements built incrementally step-by-step); mirroring between generations; narrative structure.",
      production: "Soft golden dawn lighting; acoustic soundscape featuring traditional instruments and elder vocal chants.",
      skills: "Flexibility, control, sensitive musicality, expressive body language projecting reverence."
    },
    whyItMattersForExam: "Great choice for 'Accumulation' and 'Mirroring' to show how traditions build up and are inherited across time.",
    sampleQuestionHook: "How does the choreographic device of accumulation or mirroring in Reborn communicate the continuation of cultural lineage?"
  },
  {
    id: 4,
    slug: "spinifex",
    title: "SPINIFEX",
    actNumber: 2,
    actTitle: "Act II: The Arid Land & Human Impact",
    actTheme: "Patience, Spirit Women & Suspended Drought",
    tagline: "Inspired by the trees that resemble the gatherings of spirit women waiting, suspended in time.",
    meaning: "Inspired by Frances Rings sitting in the Lake Eyre basin, envisioning the contorted spinifex bushes as ancient spirit women waiting across millennia for the rains to arrive.",
    detailedMeaning: "This section was inspired by Rings' experience of sitting in the open landscape near Lake Eyre and imagining the contorted spinifex trees as women from thousands of years ago, waiting for the waters to come and the transformation of landscape to happen. The design of the women's costumes is integral to this section.",
    culturalContext: "Connects women's ancestral dreaming and connection to arid vegetation. The spinifex survives the harshest drought by holding deep moisture, symbolising feminine spiritual endurance.",
    dancers: "Female ensemble.",
    movementMetaphor: "Rooted, twisted postures with low centers of gravity; slow organic swaying in the desert breeze; sustained freezes evoking patience through centuries of drought.",
    keyConcepts: {
      space: "Low crouching levels rising into twisted shapes; clustered organic formations resembling patches of desert shrub; personal space rooted to one spot.",
      dynamics: "Suspended and sustained qualities; subtle dabbing and flicking arm gestures resembling prickly spinifex leaves fluttering in dry wind.",
      relationships: "With costumes (textured fringed skirts moving as an extension of the body); with space (rooted to the stage floor); ensemble shared breath.",
      devices: "Repetition of twisting motifs; subtle canons of swaying; contrast between stillness and sudden quivering.",
      production: "Costumes featuring layered shredded/fringed raffia fabrics mimicking spinifex; warm terracotta lighting; ambient wind score with cicadas and dry rustling.",
      skills: "Balance on uneven foot placements, stamina in holding sustained isometric contractions, focus on the distant horizon."
    },
    whyItMattersForExam: "Directly cited in the official exam curriculum! Excellent for demonstrating how costume (Production) and levels/dynamics (Elements) unite to express patience.",
    sampleQuestionHook: "Analyse and evaluate Rings' use of elements of dance and costume in Spinifex to communicate the idea of spirit women waiting across time."
  },
  {
    id: 5,
    slug: "salt",
    title: "SALT",
    actNumber: 2,
    actTitle: "Act II: The Arid Land & Human Impact",
    actTheme: "Crystalline Geometry, Caustic Beauty & Danger",
    tagline: "Beyond the white salt vastness lies an abstract landscape that resonates an ancient power.",
    meaning: "The deceptive, razor-sharp, and acidic nature of Lake Eyre's dried salt crust—stunningly beautiful from afar, yet chemically caustic, skin-burning, and disorienting.",
    detailedMeaning: "Expresses how vast salt crystals completely transform the landscape as water evaporates. While magnificent, the acidic compound burns skin (as early explorers suffered) and produces blinding light that disrupts horizons, posing hazards for pilots. The duo depicts the nature and texture of salt crystals.",
    culturalContext: "Lake Eyre as a sacred living entity whose harsh mineral defenses protect it from reckless human intrusion.",
    dancers: "Two male dancers (duo partnering).",
    movementMetaphor: "Brittle, angular, crystalline interlocking of limbs; sharp geometric lines and sudden frozen crystallisations that evoke razor-sharp salt flakes under immense heat.",
    keyConcepts: {
      space: "Angular shapes with sharp negative spaces; cutting diagonally through planes; low floor-slides contrasting with sharp upright pivots.",
      dynamics: "Percussive, slicing, slashing, and punchy dynamics; quick accents followed immediately by frozen, brittle stillness.",
      relationships: "Male duo partnering: tension-filled counterweights, sharp limb locks, friction, and precarious mutual balance.",
      devices: "Contrast (between smooth rolling and razor-sharp cuts); mirroring in opposition; motif of sharp elbow and knee angles.",
      production: "Blinding stark white lighting bleaching the stage floor; minimalist pale costumes with crystalline textures; high-pitched, shimmering, brittle sound design.",
      skills: "Agility, joint articulation, core control during abrupt stops, unwavering focus."
    },
    whyItMattersForExam: "A staple for exam questions on 'Duo Partnering' (Choreographic Device) and 'Angular Shapes / Percussive Dynamics' (Elements).",
    sampleQuestionHook: "Analyse how the choreographer uses angular shapes, percussive dynamics, and duo relationships in Salt to communicate dangerous beauty."
  },
  {
    id: 6,
    slug: "scar",
    title: "SCAR",
    actNumber: 2,
    actTitle: "Act II: The Arid Land & Human Impact",
    actTheme: "Disruption, Environmental Wound & Industrial Trauma",
    tagline: "The impact of man's actions scars and disrupts the delicate balance between man and environment.",
    meaning: "The violent degradation and physical gouging of Country caused by colonisation, mining exploration, and human neglect, rupturing the sacred natural equilibrium.",
    detailedMeaning: "The delicate balance between humans and the environment is torn apart when industry exploits the land without custodial respect, leaving visible, painful scars across Country.",
    culturalContext: "Direct commentary on mining operations and colonial destruction of Arabunna land around the Lake Eyre Basin.",
    dancers: "Full ensemble.",
    movementMetaphor: "Bodies fracturing and collapsing under sudden unseen pressure; convulsive, disjointed spasms; pathways torn across the stage like bulldozer tracks slicing sacred ground.",
    keyConcepts: {
      space: "Disrupted, asymmetric formations; irregular jagged pathways; chaotic level shifts from upright stability collapsing to the ground.",
      dynamics: "Collapse, vibratory, and percussive qualities; explosive sudden force; jarring rhythmic syncopations.",
      relationships: "Conflict and disunity; dancers colliding or being repelled by one another; strained, unnatural weight-bearing.",
      devices: "Contrast between previous organic flows and violent ruptures; disjointed canon; abstraction of industrial machinery.",
      production: "Harsh, fractured lighting with ominous red or cold steel hues; jarring metallic audio distortion layered over distressed earth sounds.",
      skills: "Safe execution of collapsing floorwork, physical agility, intense expressive body language conveying grief and pain."
    },
    whyItMattersForExam: "Ideal for questions focusing on 'Collapse' and 'Vibratory' dynamics, or how dance communicates contemporary social and environmental themes.",
    sampleQuestionHook: "Evaluate Rings' use of collapsing dynamics and chaotic formations in Scar to depict environmental trauma."
  },
  {
    id: 7,
    slug: "landform",
    title: "LANDFORM",
    actNumber: 3,
    actTitle: "Act III: Regeneration & The Water Cycle",
    actTheme: "Geological Resilience, Healing & Undying Spirit",
    tagline: "Through each evolution, the land regenerates and heals, awakening the cultural ties that connect people to place.",
    meaning: "The ancient earth's supernatural ability to slowly repair itself after trauma, and the enduring resilience of Aboriginal people's spiritual bond with place across eons.",
    detailedMeaning: "Landform is about the land's capacity to heal itself, to regenerate after damage that is caused by man or nature. The land's strength is in its undying spirit, despite being ravaged by traumatic events. The group illustrates shifting shapes of land over millennia.",
    culturalContext: "Affirms that despite colonisation and environmental destruction, Country is eternal and possesses ancient restorative power.",
    dancers: "Group ensemble.",
    movementMetaphor: "Dancers form undulating, breathing geological strata—slowly rolling, stacking, and reforming like sand dunes and bedrock shifting over thousands of years.",
    keyConcepts: {
      space: "Low floor levels with bodies merged into collective mounds; curved and organic shapes; dense, evolving group formations.",
      dynamics: "Sustained and swinging qualities; gradual organic momentum; heavy, grounded weight providing mutual support.",
      relationships: "Continuous tactile contact between dancers; bodies functioning as an interconnected ecological system; deep floor connection.",
      devices: "Accumulation (layering bodies together); unison in slow rolling sequences; rondo/narrative structural progression.",
      production: "Warm earthy ochre lighting gradually brightening; deep resonant bass notes and ancient earth soundscapes.",
      skills: "Coordination in group partnering, endurance, smooth transitions between floor levels, serene internal focus."
    },
    whyItMattersForExam: "Frequently linked to 'Relationships (with others/space)' and 'Sustained Dynamics' to express healing after Scar.",
    sampleQuestionHook: "Explain how the choreographers use low levels, sustained dynamics, and group relationships in Landform to communicate regeneration."
  },
  {
    id: 8,
    slug: "reflect",
    title: "REFLECT",
    actNumber: 3,
    actTitle: "Act III: Regeneration & The Water Cycle",
    actTheme: "Transcendence, The Horizon Line & Sacred Mirage",
    tagline: "Traversing the horizon to glimpse the sacred realm where earth and sky meet.",
    meaning: "The sublime, meditative space of the Lake Eyre horizon, where heat haze and white salt dissolve the boundary between the physical earth and the ancestral spirit sky.",
    detailedMeaning: "A moment of deep spiritual stillness. On the vast salt pans, the horizon becomes a magical line where earthly existence merges into timeless cosmological dreaming.",
    culturalContext: "Reflects the spiritual dimension of Aboriginal cosmology: physical Country and celestial sky dreaming are one continuous realm.",
    dancers: "Soloist or duet/ensemble with elongated lines.",
    movementMetaphor: "Weightless, horizontal suspensions; tranquil extensions with long eyelines gazing into eternity; dancers moving as slowly and effortlessly as a mirage shimmering in the midday heat.",
    keyConcepts: {
      space: "Horizontal planes; medium to high elevated levels; general space appearing vast and infinite; linear, undisturbed pathways.",
      dynamics: "Floating and gliding effort actions; suspended movement quality; slow, meditative tempo with lingering pauses.",
      relationships: "Harmonious body alignment with the distant horizon; peaceful proximity between dancers; spatial balance.",
      devices: "Mirroring across symmetrical axes; motif of outstretched horizontal arms; deliberate stillness as punctuation.",
      production: "Soft gradient backdrop where desert salt meets pale pastel sky; luminous, diffused lighting; ethereal, ambient sonic textures.",
      skills: "Impeccable balance, line extension, control during slow-motion decelerations, serene and transcendent facial expression."
    },
    whyItMattersForExam: "Great example for 'Floating / Gliding Dynamics' and 'Negative Space / Symmetry' communicating spiritual peace.",
    sampleQuestionHook: "How do floating dynamics and horizontal spatial planes in Reflect communicate the spiritual meeting of earth and sky?"
  },
  {
    id: 9,
    slug: "deluge",
    title: "DELUGE",
    actNumber: 3,
    actTitle: "Act III: Regeneration & The Water Cycle",
    actTheme: "Torrential Life, Transformation & Cyclical Departure",
    tagline: "Waters begin their journey towards Lake Eyre bringing transformation and ensuring the life cycle continues.",
    meaning: "The spectacular, life-giving arrival of floods that travel hundreds of kilometres down ancient river channels to fill Lake Eyre, followed by the inevitable evaporation and cyclical departure.",
    detailedMeaning: "Illustrates the waters travelling down through ancient river channels to fill the lake with explosive new life. Dancers move as an ensemble, and towards the end slowly leave the stage—reflecting the waters arriving, transforming the desert, and departing as they have for thousands of years.",
    culturalContext: "Lake Eyre's flood cycle occurs only once every few years or decades, representing an epic resurrection of fish, birds, and flowers in Arabunna country.",
    dancers: "Full ensemble.",
    movementMetaphor: "A rolling, unstoppable tidal wave—ripples of movement surging through the dancers like whitecaps and swelling river rapids, before gently receding from view.",
    keyConcepts: {
      space: "Expansive curving pathways; dynamic shifts across low, medium, and soaring high levels; stage flooded with multi-directional travelling.",
      dynamics: "Surging, swinging, flowing, and percussive wave crests; rapid accelerations followed by a calm, sustained fading diminuendo.",
      relationships: "Ensemble fluid synchronicity; wave crests where dancers lift and carry each other; shared momentum.",
      devices: "Canon (ripples passing progressively through bodies); unison during peak flood impact; gradual sequential exit off stage.",
      production: "Rippling water-effect lighting in shimmering blues, silvers, and deep greens; swelling symphonic score with rushing water samples; flowing silk-like costumes.",
      skills: "Agility, cardiovascular stamina, spatial awareness in rapid travelling, musicality riding swelling tempos."
    },
    whyItMattersForExam: "The ultimate climax of the work! Frequently used to test 'Canon' (Device) representing rolling waves, and 'Gradual Exit' representing the ecological water cycle.",
    sampleQuestionHook: "Analyse Rings' use of canon, travelling pathways, and the gradual ensemble exit in Deluge to represent the cyclical arrival and departure of water."
  }
];
