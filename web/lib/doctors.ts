export type Doctor = {
  /** Portrait illustration in /public/doctors/portraits */
  portrait: string;
  name: string;
  role: string;
  /** Qualifications, shown under the name */
  credentials: string;
  years: number;
  /** Short areas of focus */
  tags: string[];
};

export const DOCTORS: Doctor[] = [
  {
    portrait: "/doctors/portraits/doc-01.svg",
    name: "Dr Ananya Rao",
    role: "General Medicine",
    credentials: "MBBS, MD (Internal Medicine)",
    years: 14,
    tags: ["Everyday illness", "Health checks"],
  },
  {
    portrait: "/doctors/portraits/doc-02.svg",
    name: "Dr Vikram Shetty",
    role: "Endocrinology",
    credentials: "MBBS, DM (Endocrinology)",
    years: 17,
    tags: ["Diabetes", "Thyroid"],
  },
  {
    portrait: "/doctors/portraits/doc-03.svg",
    name: "Dr Meera Krishnan",
    role: "Psychiatry",
    credentials: "MBBS, MD (Psychiatry)",
    years: 12,
    tags: ["Anxiety", "ADHD"],
  },
  {
    portrait: "/doctors/portraits/doc-04.svg",
    name: "Dr Arjun Nair",
    role: "Cardiology",
    credentials: "MBBS, DM (Cardiology)",
    years: 19,
    tags: ["Blood pressure", "Heart risk"],
  },
  {
    portrait: "/doctors/portraits/doc-05.svg",
    name: "Dr Priya Deshmukh",
    role: "Obstetrics & Gynaecology",
    credentials: "MBBS, MS (OBG)",
    years: 15,
    tags: ["Maternity", "PCOS"],
  },
  {
    portrait: "/doctors/portraits/doc-06.svg",
    name: "Dr Rohan Mehta",
    role: "Dermatology",
    credentials: "MBBS, MD (Dermatology)",
    years: 11,
    tags: ["Acne", "Hair loss"],
  },
  {
    portrait: "/doctors/portraits/doc-07.svg",
    name: "Dr Kavya Iyer",
    role: "Paediatrics",
    credentials: "MBBS, MD (Paediatrics)",
    years: 13,
    tags: ["Newborns", "Vaccinations"],
  },
  {
    portrait: "/doctors/portraits/doc-08.svg",
    name: "Dr Sameer Khan",
    role: "Clinical Psychology",
    credentials: "MPhil, PhD (Clinical Psychology)",
    years: 10,
    tags: ["Therapy", "Burnout"],
  },
  {
    portrait: "/doctors/portraits/doc-09.svg",
    name: "Dr Lakshmi Pillai",
    role: "Nutrition & Metabolism",
    credentials: "MSc, RD (Clinical Nutrition)",
    years: 9,
    tags: ["Weight care", "Diet plans"],
  },
  {
    portrait: "/doctors/portraits/doc-10.svg",
    name: "Dr Imran Qureshi",
    role: "Dentistry",
    credentials: "BDS, MDS (Prosthodontics)",
    years: 16,
    tags: ["Check-ups", "Aligners"],
  },
  {
    portrait: "/doctors/portraits/doc-11.svg",
    name: "Dr Neha Bansal",
    role: "General Medicine",
    credentials: "MBBS, DNB (Family Medicine)",
    years: 8,
    tags: ["Sexual health", "Travel health"],
  },
  {
    portrait: "/doctors/portraits/doc-12.svg",
    name: "Dr Aditya Joshi",
    role: "Men's Health",
    credentials: "MBBS, MS (Urology)",
    years: 18,
    tags: ["Men's health", "Urology"],
  },
];

export type Specialty = {
  /** Icon in /public/doctors/specialties */
  icon: string;
  name: string;
  /** How many clinicians on the panel cover this area */
  count: number;
  /** Care page this specialty maps to */
  href: string;
};

export const SPECIALTIES: Specialty[] = [
  { icon: "/doctors/specialties/general-medicine.svg", name: "General medicine", count: 24, href: "/services" },
  { icon: "/doctors/specialties/mental-health.svg", name: "Mental health", count: 18, href: "/care/mental-health" },
  { icon: "/doctors/specialties/diabetes.svg", name: "Diabetes", count: 11, href: "/care/diabetes" },
  { icon: "/doctors/specialties/cardiology.svg", name: "Cardiology", count: 9, href: "/care/hypertension" },
  { icon: "/doctors/specialties/womens-health.svg", name: "Women's health", count: 14, href: "/care/womens-health" },
  { icon: "/doctors/specialties/pediatrics.svg", name: "Paediatrics", count: 12, href: "/care/pediatrics" },
  { icon: "/doctors/specialties/dermatology.svg", name: "Dermatology", count: 8, href: "/care/skincare" },
  { icon: "/doctors/specialties/dental.svg", name: "Dental", count: 10, href: "/care/dental" },
  { icon: "/doctors/specialties/nutrition.svg", name: "Nutrition", count: 7, href: "/care/weight" },
];

export type VettingStep = {
  /** Illustration in /public/doctors/vetting */
  art: string;
  title: string;
  text: string;
};

export const VETTING: VettingStep[] = [
  {
    art: "/doctors/vetting/credentials.svg",
    title: "Credentials verified",
    text: "We check every registration with the state medical council and confirm each qualification at source.",
  },
  {
    art: "/doctors/vetting/interview.svg",
    title: "Clinical interview",
    text: "A panel of our senior clinicians reviews real case discussions before anyone sees a patient.",
  },
  {
    art: "/doctors/vetting/fees.svg",
    title: "Transparent fees agreed",
    text: "Every clinician agrees to our published prices. No consultation is ever marked up at the point of care.",
  },
  {
    art: "/doctors/vetting/reviews.svg",
    title: "Reviewed continuously",
    text: "Patient feedback and clinical audits are reviewed quarterly, and we act on what they show.",
  },
];
