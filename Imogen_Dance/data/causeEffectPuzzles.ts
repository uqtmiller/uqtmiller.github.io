export interface StoryPuzzle {
  id: string;
  actNumber: number;
  question: string;
  promptTheme: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  deeperInsight: string;
  connectedSections: string[];
}

export const CAUSE_EFFECT_PUZZLES: StoryPuzzle[] = [
  {
    id: "puzzle-1",
    actNumber: 1,
    promptTheme: "The Awakening Journey",
    question: "Why does Terrain open with 'Red Brick' in a modern city instead of starting directly in the Lake Eyre desert?",
    options: [
      {
        id: "a",
        text: "Because it contrasts the heavy pressures of modern city life with the ancient spiritual 'Calling to Country' that draws the dancer back.",
        isCorrect: true,
        feedback: "Spot on! Frances Rings starts in the urban world where many Indigenous people live today to show the intense need to reconnect and 'refuel' on country."
      },
      {
        id: "b",
        text: "Because red brick was the traditional building material used by the Arabunna people in the desert thousands of years ago.",
        isCorrect: false,
        feedback: "Not quite. Red brick represents modern urban buildings and city architecture, which contrasts with the natural desert landscape."
      },
      {
        id: "c",
        text: "Because the choreographer wanted an easy warm-up section before introducing complex desert themes.",
        isCorrect: false,
        feedback: "In Bangarra productions, every section has deep cultural meaning! Red Brick is chosen deliberately to frame the journey from city to ancestral land."
      }
    ],
    deeperInsight: "Notice how the female solo dancer is manipulated and lifted by four male dancers: this physical relationship symbolises both the constraints of the urban environment and the ancestral gravity calling her home.",
    connectedSections: ["RED BRICK"]
  },
  {
    id: "puzzle-2",
    actNumber: 1,
    promptTheme: "Defending Sacred Ground",
    question: "Why is 'Shields' positioned right after Red Brick, before we explore the natural features of Lake Eyre?",
    options: [
      {
        id: "a",
        text: "Because the dancers needed to show off props before putting them away for the rest of the performance.",
        isCorrect: false,
        feedback: "Shields is far more than a prop display! It carries profound political and cultural significance."
      },
      {
        id: "b",
        text: "Because before celebrating the beauty of Country, the dance honours the continuous political struggle for Land Rights, recognition, and protection of sacred sites.",
        isCorrect: true,
        feedback: "Brilliant analysis! Indigenous connection to land cannot be separated from the historical and ongoing fight for Land Rights and sovereignty."
      },
      {
        id: "c",
        text: "Because Lake Eyre was historically famous for major ancient military shield battles between rival empires.",
        isCorrect: false,
        feedback: "Rather than a military battle, Rings uses shield motifs to symbolise collective cultural resistance and the defense of Aboriginal sovereignty."
      }
    ],
    deeperInsight: "The use of strong UNISON in Shields demonstrates solidarity—a unified collective voice standing firm together in political and cultural resistance.",
    connectedSections: ["RED BRICK", "SHIELDS"]
  },
  {
    id: "puzzle-3",
    actNumber: 1,
    promptTheme: "Cultural Continuity",
    question: "How does 'Reborn' complete the story arc of Act I (Human & Cultural Connection)?",
    options: [
      {
        id: "a",
        text: "It shows that despite city alienation and political struggle, culture survives unbroken because land, knowledge, and customs are passed down through family lineage.",
        isCorrect: true,
        feedback: "Excellent! Reborn shows that cultural survival relies on the generational chain—elders passing sacred knowledge and custodial responsibility to the youth."
      },
      {
        id: "b",
        text: "It depicts the biological birth of new desert wildlife hatching in the spring.",
        isCorrect: false,
        feedback: "Wildlife renewal is explored later in Deluge. Reborn focuses on human cultural lineage, kinship, and ancestral customs being passed down."
      },
      {
        id: "c",
        text: "It indicates that the dancers have completely forgotten their past and started fresh with new modern identities.",
        isCorrect: false,
        feedback: "In fact, it is the exact opposite! Reborn celebrates remembering and upholding ancient ancestral customs through family lines."
      }
    ],
    deeperInsight: "Choreographic devices like ACCUMULATION and MIRRORING in Reborn reflect how cultural knowledge builds layer upon layer as it is handed down across generations.",
    connectedSections: ["REBORN"]
  },
  {
    id: "puzzle-4",
    actNumber: 2,
    promptTheme: "The Long Wait in the Arid Land",
    question: "In 'Spinifex', spirit women are suspended in time. What are they waiting for, and which section delivers the answer?",
    options: [
      {
        id: "a",
        text: "They are waiting for tourists to leave Lake Eyre; answered in Salt.",
        isCorrect: false,
        feedback: "The spirit women are tied to ancient deep-time ecological cycles, not modern tourism!"
      },
      {
        id: "b",
        text: "They are waiting for the life-giving waters to arrive and transform the landscape; answered in the climactic flood of 'Deluge'!",
        isCorrect: true,
        feedback: "Spot on! Frances Rings imagined the contorted spinifex bushes as ancient spirit women waiting through centuries of drought for the floodwaters of Deluge."
      },
      {
        id: "c",
        text: "They are waiting for cold winter snow to blanket the red desert sand.",
        isCorrect: false,
        feedback: "Lake Eyre is located in remote, arid central Australia—it experiences intense heat and drought, waiting for monsoonal rains to travel down from the north."
      }
    ],
    deeperInsight: "Notice how the SUSTAINED and SUSPENDED movement qualities in Spinifex evoke quiet endurance—holding posture and breath just like desert plants holding moisture during drought.",
    connectedSections: ["SPINIFEX", "DELUGE"]
  },
  {
    id: "puzzle-5",
    actNumber: 2,
    promptTheme: "Deceptive Beauty & Hidden Danger",
    question: "Why does the choreography in 'Salt' feature angular, percussive movements and tension rather than soft, peaceful gliding?",
    options: [
      {
        id: "a",
        text: "Because while the vast salt flats look beautiful, the mineral crystals are acidic, skin-burning, and blindingly bright—a hazardous environment.",
        isCorrect: true,
        feedback: "Superb insight! Lake Eyre's salt crust is caustic and blinding. Rings uses sharp, angular partnering between two men to express this dangerous, brittle mineral reality."
      },
      {
        id: "b",
        text: "Because the dancers were cold from performing outdoors at night.",
        isCorrect: false,
        feedback: "Every movement choice connects to the specific physical properties of Lake Eyre's acidic salt crust!"
      },
      {
        id: "c",
        text: "Because salt crystals dissolve instantly in air, so dancers must move as quickly as possible.",
        isCorrect: false,
        feedback: "Salt crystals form heavy, razor-sharp crusts that persist for months under baking heat."
      }
    ],
    deeperInsight: "The MALE DUO in Salt represents the friction and interlocking structure of crystal formations. Sharp angles and sudden stops convey both crystalline precision and caustic danger.",
    connectedSections: ["SALT"]
  },
  {
    id: "puzzle-6",
    actNumber: 2,
    promptTheme: "The Wound and The Healing",
    question: "Why does 'Scar' lead directly into 'Landform' in the transition from Act II to Act III?",
    options: [
      {
        id: "a",
        text: "Because after showing the trauma of mining and human destruction (Scar), the work demonstrates that Country has an undying spirit that slowly regenerates and heals itself (Landform).",
        isCorrect: true,
        feedback: "Brilliant! Scar shows the wound inflicted on nature; Landform shows the ancient earth's resilient power to knit itself back together over millennia."
      },
      {
        id: "b",
        text: "Because Scar was too energetic, so the dancers needed a resting section on the floor.",
        isCorrect: false,
        feedback: "While Landform uses low floor levels, the choice is deeply philosophical: the land itself is breathing, shifting, and regenerating."
      },
      {
        id: "c",
        text: "Because human mining machinery transformed the desert into a tourist resort.",
        isCorrect: false,
        feedback: "Scar highlights disruption of environmental balance; Landform responds with cultural and ecological healing."
      }
    ],
    deeperInsight: "Contrast the COLLAPSING and violent percussive dynamics of Scar with the SUSTAINED, rolling, organic group floorwork of Landform.",
    connectedSections: ["SCAR", "LANDFORM"]
  },
  {
    id: "puzzle-7",
    actNumber: 3,
    promptTheme: "The Sacred Boundary",
    question: "What does the tranquil horizontal imagery in 'Reflect' communicate to the audience?",
    options: [
      {
        id: "a",
        text: "That the dancers are checking their physical appearance in a bathroom mirror.",
        isCorrect: false,
        feedback: "In dance analysis, always look beyond literal everyday meanings to the symbolic and spiritual meaning of the piece!"
      },
      {
        id: "b",
        text: "A sacred realm where the blinding white earth and celestial sky merge at the horizon, showing the unity of physical Country and spiritual cosmology.",
        isCorrect: true,
        feedback: "Beautiful understanding! The shimmering horizon mirage is a threshold where earthly life and ancestral Dreaming become one."
      },
      {
        id: "c",
        text: "That an impending thunderstorm is about to strike the stage with lightning.",
        isCorrect: false,
        feedback: "Reflect is a state of tranquil, meditative contemplation before the deluge arrives."
      }
    ],
    deeperInsight: "Notice the use of FLOATING dynamics, elongated eyelines, and horizontal spatial planes—these evoke a sense of infinite, timeless space.",
    connectedSections: ["REFLECT"]
  },
  {
    id: "puzzle-8",
    actNumber: 3,
    promptTheme: "The Cyclical Farewell",
    question: "At the end of 'Deluge', the dancers slowly leave the stage one by one. Why did Frances Rings choose this choreographic ending?",
    options: [
      {
        id: "a",
        text: "It reflects the natural ecological water cycle: floodwaters arrive, bring explosive life, and then slowly evaporate, departing until the cycle begins again.",
        isCorrect: true,
        feedback: "Perfection! In Lake Eyre, floods do not stay permanently. The waters evaporate under the desert sun, and the landscape returns to waiting for the next cycle."
      },
      {
        id: "b",
        text: "Because the theatre curtain malfunctioned and dancers had to exit manually.",
        isCorrect: false,
        feedback: "The gradual exit is a deliberate, poignant choreographic device set by Frances Rings!"
      },
      {
        id: "c",
        text: "To signify that Aboriginal people are abandoning the desert forever.",
        isCorrect: false,
        feedback: "Aboriginal connection to Country is eternal! The exit mirrors the water cycle, not human departure."
      }
    ],
    deeperInsight: "By mirroring the cyclical arrival and departure of water, Deluge closes Terrain on a message of eternal renewal: the water will one day return, and the spirit women will be waiting.",
    connectedSections: ["DELUGE", "SPINIFEX"]
  }
];
