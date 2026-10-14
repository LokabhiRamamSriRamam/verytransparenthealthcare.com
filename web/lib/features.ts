export type FeaturePoint = { title: string; text: string };

export type FeatureDetail = {
  kicker?: string;
  /** Bold opening line */
  lead: string;
  body: string;
  points: FeaturePoint[];
  /** Optional closing sentence and serif sign-off */
  closing?: string;
  signoff?: string;
};

export type Feature = {
  slug: string;
  title: string;
  /** One line shown in the grid */
  description: string;
  /** Illustration in /public/features */
  art: string;
  /** Shown in the "know more" modal */
  detail: FeatureDetail;
};

export const FEATURES: Feature[] = [
  {
    slug: "wellness-partner",
    title: "A dedicated Wellness Partner",
    description: "Someone in your corner who checks in, follows up and keeps your care on track.",
    art: "/features/wellness-partner.svg",
    detail: {
      kicker: "Included with every package",
      lead: "You shouldn't have to manage your healthcare alone.",
      body:
        "With every package, you get a dedicated Wellness Partner who stays connected with you throughout your journey — checking in, listening, following up, and helping you stay on track.",
      points: [
        {
          title: "Regular check-ins",
          text: "Your Wellness Partner regularly checks in to see how you're doing, how you're progressing, and whether you need any support.",
        },
        {
          title: "Someone who knows your journey",
          text: "You build a relationship with someone who understands where you are, what you're working towards, and what matters to you.",
        },
        {
          title: "Support between appointments",
          text: "Questions, concerns, follow-ups, or simply having someone to talk to — your Wellness Partner helps you stay connected and moving forward.",
        },
      ],
      closing: "Because your health shouldn't become another thing to worry about.",
      signoff: "Live your life. We'll stay connected with your health.",
    },
  },
  {
    slug: "vip",
    title: "VIP care, as standard",
    description:
      "No waits, longer sessions, cashless treatment and consultations, priority appointments — and your Wellness Partner by your side.",
    art: "/features/vip.svg",
    detail: {
      kicker: "Included with every package",
      lead: "Healthcare that runs on your time, not the other way round.",
      body:
        "Every package comes with the kind of care that's usually reserved for a few — so you spend less time waiting and more time actually being looked after.",
      points: [
        { title: "No waits", text: "Arrive for your appointment and be seen, without sitting in a waiting room." },
        { title: "Longer sessions", text: "Unhurried time with your doctor to talk, ask questions and understand your options." },
        { title: "Cashless treatment", text: "Consultations and treatment without paying upfront and chasing claims later." },
        { title: "Priority appointments", text: "You're at the front of the queue whenever you need care." },
      ],
      signoff: "Care that treats you like you matter. Because you do.",
    },
  },
  {
    slug: "same-day",
    title: "Same-day or next-day appointments",
    description: "Get seen on priority when you need it, in person or over video.",
    art: "/features/same-day.svg",
    detail: {
      lead: "When you need care, you shouldn't have to wait days for it.",
      body:
        "Book a same-day or next-day appointment on priority — in person or over video, whichever suits your day.",
      points: [
        { title: "Priority booking", text: "Your Wellness Partner finds the earliest slot with the right doctor for you." },
        { title: "In person or on video", text: "Visit a clinic near you, or consult from wherever you are." },
        { title: "No chasing", text: "We confirm, remind and reschedule for you, so you don't have to." },
      ],
    },
  },
  {
    slug: "home-lab",
    title: "Lab tests without lifting a finger",
    description: "Regular and periodic tests collected from home, on schedule, with results sent straight to your doctors.",
    art: "/features/home-lab.svg",
    detail: {
      lead: "Your tests come to you.",
      body:
        "Regular and periodic lab tests are scheduled around your care plan and collected from your home — no queues, no trips, no reminders to set.",
      points: [
        { title: "Scheduled for you", text: "Tests are planned around your goals and your doctor's advice." },
        { title: "Collected at home", text: "Samples are collected at home, at a time that suits you." },
        {
          title: "Results, explained",
          text: "Your doctors review every result, and your Wellness Partner walks you through what it means.",
        },
      ],
    },
  },
  {
    slug: "compassionate-providers",
    title: "Compassionate providers",
    description: "Hand-picked, highly experienced doctors who listen first and never make you feel rushed.",
    art: "/features/compassionate-providers.svg",
    detail: {
      lead: "The best care starts with being heard.",
      body:
        "We work with some of the best healthcare providers — chosen as much for how they care as for what they know.",
      points: [
        { title: "Carefully chosen", text: "Every provider is selected for their expertise and the way they treat people." },
        { title: "Time to listen", text: "Longer sessions mean you're never rushed out of the room." },
        { title: "Shaped around you", text: "Your doctors build their advice around your goals, not a script." },
      ],
    },
  },
  {
    slug: "continuous-care",
    title: "Doctors who keep watching",
    description: "Your doctors continuously review your reports and check-ups, so nothing slips through the cracks.",
    art: "/features/continuous-care.svg",
    detail: {
      lead: "Your health doesn't stop between appointments. Neither do we.",
      body:
        "Your doctors constantly and continuously review your reports, check-ups and progress — so changes are caught early and your plan keeps up with you.",
      points: [
        { title: "Ongoing review", text: "Every new report is looked at by your care team, not filed away." },
        { title: "Early action", text: "If something changes, we reach out — you don't have to notice it first." },
        { title: "A plan that evolves", text: "Your care adapts as you move towards your goal." },
      ],
    },
  },
  {
    slug: "one-roof",
    title: "Everything under one roof",
    description:
      "Physicals, chronic care and mental health — coordinated by your Wellness Partner, so everyone knows your story from the first second.",
    art: "/features/one-roof.svg",
    detail: {
      lead: "One team. One story. No repeating yourself.",
      body:
        "From physicals and chronic care to mental health, everything happens under one roof — with your Wellness Partner coordinating between every provider.",
      points: [
        { title: "Every kind of care", text: "Check-ups, long-term conditions, mental health and more, all in one place." },
        { title: "Coordinated for you", text: "Your Wellness Partner keeps every doctor in the loop." },
        {
          title: "Known from the first second",
          text: "Everyone already knows your history, so you never have to explain yourself to anyone.",
        },
      ],
    },
  },
  {
    slug: "mumbai",
    title: "Doctors across Mumbai",
    description: "A trusted network of providers spanning the city, close to wherever you are.",
    art: "/features/mumbai.svg",
    detail: {
      lead: "Great care, close to home.",
      body: "Our network of doctors spans Mumbai, so the right care is never far from where you live or work.",
      points: [
        { title: "Across the city", text: "Providers in neighbourhoods all over Mumbai." },
        { title: "Matched to you", text: "We connect you with the right doctor, near you." },
        { title: "Video when it suits", text: "When travelling isn't easy, consult from wherever you are." },
      ],
    },
  },
];
