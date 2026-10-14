export type CareTheme = "lavender" | "peach" | "mint" | "purple" | "indigo";

export type CareCategory = "conditions" | "mind" | "family" | "men-sexual" | "skin-smile";

export const CARE_CATEGORIES: { id: CareCategory; label: string; blurb: string }[] = [
  {
    id: "conditions",
    label: "Long-term conditions",
    blurb: "Ongoing care for diabetes, blood pressure and weight, with regular reviews and support between visits.",
  },
  {
    id: "mind",
    label: "Mental health",
    blurb: "Therapy, psychiatry and support for anxiety, low mood, stress and more.",
  },
  {
    id: "family",
    label: "Women, family & kids",
    blurb: "Care for every stage, from periods and pregnancy to newborns and teens.",
  },
  {
    id: "men-sexual",
    label: "Men's & sexual health",
    blurb: "Discreet, judgement-free care, from health checks to STI testing.",
  },
  {
    id: "skin-smile",
    label: "Skin & smile",
    blurb: "Medical skincare and honest dentistry, with written quotes before any treatment.",
  },
];

export type CareGoal = {
  slug: string;
  category: CareCategory;
  /** One-line description for the services directory */
  summary: string;
  /** Headline inclusions shown on the package card */
  includes: string[];
  /** Short category label shown above the title */
  label: string;
  /** The goal, in the patient's words */
  title: string;
  image: { src: string; width: number; height: number; alt: string };
  theme: CareTheme;
  /** Image has a solid white background instead of a transparent cut-out */
  whiteBackground?: boolean;
};

export const CARE_GOALS: CareGoal[] = [
  {
    slug: "mental-health",
    category: "mind",
    summary: "Therapy and psychiatry for anxiety, low mood, stress, ADHD and more.",
    includes: ["Matched therapist", "Psychiatry reviews", "Messaging between sessions"],
    label: "Mental health",
    title: "Feel more like yourself again",
    image: { src: "/care/mental-health.png", width: 1569, height: 1002, alt: "Two women talking and smiling together" },
    theme: "lavender",
  },
  {
    slug: "diabetes",
    category: "conditions",
    summary: "Doctor-led care for type 1, type 2 and prediabetes.",
    includes: ["Quarterly HbA1c reviews", "Medication management", "Dietitian coaching"],
    label: "Diabetes",
    title: "Take charge of your blood sugar",
    image: { src: "/care/diabetes.png", width: 1557, height: 1010, alt: "A smiling family of three generations" },
    theme: "purple",
  },
  {
    slug: "hypertension",
    category: "conditions",
    summary: "Find your real numbers and bring blood pressure down safely.",
    includes: ["Home monitoring plan", "Heart-risk check", "Medication reviews"],
    label: "Hypertension",
    title: "Keep your blood pressure in check",
    image: { src: "/care/hypertension.png", width: 1536, height: 1024, alt: "A cheerful middle-aged man" },
    theme: "peach",
  },
  {
    slug: "weight",
    category: "conditions",
    summary: "Medically supervised weight care that lasts.",
    includes: ["Metabolic blood tests", "Dietitian plan", "Weekly coaching"],
    label: "Weight & metabolism",
    title: "Reach a healthy weight that lasts",
    image: { src: "/care/obesity.png", width: 1558, height: 1010, alt: "A smiling woman in workout clothes" },
    theme: "mint",
  },
  {
    slug: "skincare",
    category: "skin-smile",
    summary: "Prescription treatment for acne, eczema, pigmentation and hair loss.",
    includes: ["Photo consultation", "Prescription treatment", "Progress reviews"],
    label: "Skincare",
    title: "Skin you feel good in",
    image: { src: "/care/skincare.png", width: 1536, height: 1024, alt: "A woman with eyes closed, hair in the breeze" },
    theme: "indigo",
  },
  {
    slug: "dental",
    category: "skin-smile",
    summary: "Check-ups, fillings, aligners and emergencies, with written quotes.",
    includes: ["Exam & clean", "Written quotes", "Emergency slots"],
    label: "Dental",
    title: "A smile you're proud of",
    image: { src: "/care/dental.png", width: 1184, height: 864, alt: "Two friends laughing with bright smiles" },
    theme: "peach",
    whiteBackground: true,
  },
  {
    slug: "maternity",
    category: "family",
    summary: "One team from planning to postpartum.",
    includes: ["Antenatal check-ups", "Scans & screening", "Postnatal support"],
    label: "Maternity",
    title: "Care through every trimester",
    image: { src: "/care/maternity.png", width: 1280, height: 800, alt: "A smiling pregnant woman" },
    theme: "lavender",
  },
  {
    slug: "pediatrics",
    category: "family",
    summary: "Friendly care for babies, children and teens.",
    includes: ["Well-child checks", "Vaccinations", "Illness visits"],
    label: "Pediatrics",
    title: "Healthy, happy kids",
    image: { src: "/care/pediatrics.png", width: 1569, height: 1002, alt: "Parents with their two young children" },
    theme: "mint",
  },
  {
    slug: "womens-health",
    category: "family",
    summary: "Periods, PCOS, contraception, fertility and menopause.",
    includes: ["Hormone testing", "Contraception & HRT", "Screening reminders"],
    label: "Women's health",
    title: "Care for every stage of you",
    image: { src: "/care/womens-health.png", width: 1536, height: 1024, alt: "Two women dancing joyfully" },
    theme: "purple",
  },
  {
    slug: "mens-health",
    category: "men-sexual",
    summary: "Health checks, hair loss, ED and testosterone, discreetly.",
    includes: ["Full health check", "Confidential consults", "Discreet delivery"],
    label: "Men's health",
    title: "Stay strong, stay ahead",
    image: { src: "/care/mens-health.png", width: 2400, height: 1600, alt: "A confident young man" },
    theme: "peach",
  },
  {
    slug: "sexual-health",
    category: "men-sexual",
    summary: "STI testing, treatment, PrEP and contraception.",
    includes: ["Home or clinic tests", "Fast treatment", "All-inclusive pricing"],
    label: "Sexual health",
    title: "Private, judgement-free care",
    image: { src: "/care/sexual-health.png", width: 1408, height: 768, alt: "A couple standing close together" },
    theme: "indigo",
  },
];

/** Words cycled in "Get care today for …" */
export const CARE_TICKER_WORDS = [
  "anxiety",
  "diabetes",
  "high blood pressure",
  "weight loss",
  "acne & skin",
  "dental care",
  "pregnancy",
  "your little ones",
  "PCOS",
  "men's health",
  "sexual health",
  "back pain",
  "menopause",
  "hair loss",
  "erectile dysfunction",
  "high cholesterol",
  "contraception",
  "fatigue",
  "menstrual issues",
  "sports injuries",
  "ADHD",
  "that weird rash",
];
