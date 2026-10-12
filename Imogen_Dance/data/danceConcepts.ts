export interface ConceptItem {
  id: string;
  name: string;
  definition: string;
  examApplicationTip: string;
}

export interface ConceptCategory {
  title: string;
  subtitle: string;
  color: string;
  groups: {
    groupName: string;
    items: ConceptItem[];
  }[];
}

export const DANCE_CONCEPTS: ConceptCategory[] = [
  {
    title: "Elements of Dance",
    subtitle: "The fundamental building blocks used by dancers and choreographers to construct movement",
    color: "amber",
    groups: [
      {
        groupName: "Space",
        items: [
          {
            id: "levels",
            name: "Levels (Low, Medium, High)",
            definition: "The vertical distance of movement from the floor—ranging from grounded crawling (low), upright standing (med), to airborne jumps or lifts (high).",
            examApplicationTip: "Use levels to highlight power dynamics (e.g. standing tall over a grounded dancer to show dominance, or crouching to show connection to earth)."
          },
          {
            id: "shapes",
            name: "Shape (Angular, Curved, Twisted)",
            definition: "The physical contour formed by the dancer's body or group of bodies—can be sharp/jagged (angular), soft/fluid (curved), or contorted (twisted).",
            examApplicationTip: "Connect angular shapes to harsh minerals (Salt) or conflict (Shields), curved shapes to water and lineage, twisted shapes to contorted trees (Spinifex)."
          },
          {
            id: "negative-positive-space",
            name: "Positive & Negative Space",
            definition: "Positive space is the physical area occupied by the dancer's body; Negative space is the empty space around or between dancers' limbs.",
            examApplicationTip: "Analyse negative space when limbs create frames or windows (e.g. viewing the horizon through interlaced arms in Reflect)."
          },
          {
            id: "pathways-direction",
            name: "Pathways & Direction",
            definition: "The patterns traced on the floor (straight, curved, zigzag, circular) and the directional orientation (forward, backward, diagonal) of dancers.",
            examApplicationTip: "Mention how curved pathways represent ancient riverbeds in Deluge, whereas linear pathways evoke the vast desert horizon in Reflect."
          },
          {
            id: "formations-planes",
            name: "Formation & Planes",
            definition: "The spatial arrangement of groups on stage (lines, circles, clusters) and movement along horizontal, vertical, or sagittal planes.",
            examApplicationTip: "Clustered formations evoke vegetation or defensive shields; expansive scattered formations evoke open desert vastness."
          }
        ]
      },
      {
        groupName: "Time",
        items: [
          {
            id: "tempo-speed",
            name: "Fast & Slow (Tempo)",
            definition: "The speed at which movements and choreography progress, from rapid accelerations to slow-motion decelerations.",
            examApplicationTip: "Slow tempo conveys ancient timelessness or sustained waiting; fast tempo conveys rushing floodwaters or violent destruction."
          },
          {
            id: "rhythm-accents",
            name: "Rhythm & Accents",
            definition: "The recurring beat structure and deliberate emphasis placed on specific movements or beats in time.",
            examApplicationTip: "Sudden accents grab the audience's attention and communicate sudden strikes, fractures, or impacts (e.g. Scar or Salt)."
          }
        ]
      },
      {
        groupName: "Dynamics (Effort Actions & Movement Qualities)",
        items: [
          {
            id: "movement-qualities",
            name: "Movement Qualities (Suspended, Sustained, Percussive, Vibratory, Swinging, Collapse)",
            definition: "The texture and flow of energy: Suspended (hanging in air), Sustained (smooth, continuous), Percussive (sharp, striking), Vibratory (quivering, trembling), Swinging (pendulum momentum), Collapse (sudden release of tension).",
            examApplicationTip: "Essential for exam answers! Always pair a movement quality with an emotional meaning (e.g. collapsing in Scar shows ecological grief; suspended in Spinifex shows patient waiting)."
          },
          {
            id: "effort-actions",
            name: "Effort Actions (Float, Punch, Flowy, Dab, Slash, Glide, Push, Slice, Flick)",
            definition: "Specific combinations of weight, time, space, and flow that characterise bodily action.",
            examApplicationTip: "Use dynamic verbs: 'punching' into space communicates aggressive defense (Shields); 'gliding' conveys a mirage on salt flats (Reflect)."
          }
        ]
      },
      {
        groupName: "Relationships",
        items: [
          {
            id: "relationships-group",
            name: "Relationships (Body, Others, Space, Props)",
            definition: "How a dancer connects internally across their own limbs, with other dancers (lead/follow, weight-bearing, manipulation), with the stage environment, and with objects.",
            examApplicationTip: "Highlight manipulation in Red Brick (four men controlling one woman) vs intimate mutual support in Landform (bodies forming earth mounds)."
          }
        ]
      }
    ]
  },
  {
    title: "Choreographic Devices",
    subtitle: "Tools and structures choreographers use to shape, manipulate, and organize movement motifs into full works",
    color: "emerald",
    groups: [
      {
        groupName: "Organisational Devices",
        items: [
          {
            id: "unison",
            name: "Unison",
            definition: "Two or more dancers performing the exact same movement sequence simultaneously at the same time and speed.",
            examApplicationTip: "Always links to unity, solidarity, collective voice, or cultural consensus (e.g. warriors in Shields or flood swells in Deluge)."
          },
          {
            id: "canon",
            name: "Canon",
            definition: "Dancers performing the same movement phrase one after another in a cascading wave or staggered ripple effect.",
            examApplicationTip: "Canon vividly communicates waves of water flowing through channels (Deluge) or ripples of generational inheritance (Reborn)."
          },
          {
            id: "accumulation",
            name: "Accumulation",
            definition: "A choreographic device where new movements are added sequentially to an ongoing phrase (e.g. 1, 1+2, 1+2+3).",
            examApplicationTip: "Directly mirrors the layering of knowledge and customs passed down through generations in Reborn."
          },
          {
            id: "motif-repetition",
            name: "Motif & Repetition",
            definition: "A recurring movement phrase that symbolizes an overarching theme, repeated throughout the work with variations.",
            examApplicationTip: "Identify the reaching motif in Red Brick or the twisting hand gesture in Spinifex and explain how repetition imprints meaning on the audience."
          },
          {
            id: "contrast",
            name: "Contrast",
            definition: "Juxtaposing opposing elements (high vs low levels, fast vs slow tempo, percussive vs sustained) to highlight tension or duality.",
            examApplicationTip: "Notice how contrast between opposing directions and levels in the sample exam answer for 'Lovely' suggests internal conflict or yin/yang."
          },
          {
            id: "mirroring-duos-solos",
            name: "Mirroring, Duos & Solos",
            definition: "Mirroring creates reflective symmetry; duos explore intimate dialogues or combat; solos expose internal emotion and personal journeys.",
            examApplicationTip: "Duo in Salt shows interpersonal friction and crystalline geometry; solo in Red Brick shows personal yearning."
          },
          {
            id: "choreographic-form",
            name: "Form (Ternary, Rondo, Binary, Narrative)",
            definition: "The overarching structure of the piece: Narrative tells a continuous story, Ternary is ABA, Rondo is ABACADA, Binary is AB.",
            examApplicationTip: "Terrain as a whole follows a profound cyclical / narrative arc ending with the cyclical arrival and departure of water."
          }
        ]
      }
    ]
  },
  {
    title: "Production Elements",
    subtitle: "The non-movement theatrical elements that transform the dance into a multi-sensory theatrical experience",
    color: "purple",
    groups: [
      {
        groupName: "Staging & Atmosphere",
        items: [
          {
            id: "costume",
            name: "Costume & Design (Jennifer Irwin)",
            definition: "Garments, fabrics, and adornments designed specifically to extend movement qualities and communicate character or natural environment.",
            examApplicationTip: "Highlight Jennifer Irwin's textured raffia fringing in Spinifex mimicking desert scrub, or crystalline minimalist fabrics in Salt."
          },
          {
            id: "lighting",
            name: "Lighting (Karen Norris)",
            definition: "The color, intensity, angle, and focus of stage lighting shaping mood, time of day, and emotional intensity.",
            examApplicationTip: "Discuss blinding white light in Salt causing horizon mirages vs warm dawn ochres in Landform."
          },
          {
            id: "music-sound",
            name: "Music & Sound Design (David Page)",
            definition: "The auditory landscape combining traditional Indigenous chants, natural field recordings (wind, water, cicadas), and contemporary orchestration.",
            examApplicationTip: "David Page's soundscapes provide emotional cues—metallic distortion in Scar vs rushing liquid percussion in Deluge."
          },
          {
            id: "set-design",
            name: "Set Design & Props (Jacob Nash)",
            definition: "Physical backdrops, cycloramas, textures, and spatial objects situated on stage.",
            examApplicationTip: "Jacob Nash's backdrops evoke the vast Lake Eyre horizon line where earth and celestial sky meet."
          }
        ]
      }
    ]
  },
  {
    title: "Technical & Expressive Skills",
    subtitle: "The physical proficiency and artistic communication required of dancers to execute the choreographer's vision",
    color: "sky",
    groups: [
      {
        groupName: "Technical Skills",
        items: [
          {
            id: "technical-skills-list",
            name: "Balance, Flexibility, Strength, Alignment, Agility, Coordination, Control",
            definition: "The physical attributes required to execute complex contemporary and Indigenous choreographic sequences safely and precisely.",
            examApplicationTip: "Mention how balance and core strength are vital during weight-bearing lifts in Red Brick or precarious duo locks in Salt."
          }
        ]
      },
      {
        groupName: "Expressive Skills",
        items: [
          {
            id: "expressive-skills-list",
            name: "Facial Expression, Eyeline, Projection, Musicality, Focus, Body Language",
            definition: "The communication of character, emotion, and cultural meaning to the audience through intentional artistic delivery.",
            examApplicationTip: "Point out how eyeline directed into the infinite distance in Reflect conveys spiritual contemplation of ancient country."
          }
        ]
      }
    ]
  }
];
