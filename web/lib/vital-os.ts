/** Content for the Vital OS product page (/vital-os). Art lives in /public/vital-os. */

export type VoIconName =
  | "stylus"
  | "handwriting"
  | "record"
  | "prescription"
  | "pharmacy"
  | "portal"
  | "billing"
  | "rupee"
  | "lab"
  | "calendar"
  | "bell"
  | "shield"
  | "sync"
  | "offline"
  | "insights"
  | "anatomy"
  | "transparency"
  | "clock"
  | "time-back"
  | "check"
  | "patient"
  | "share"
  | "tablet"
  | "message"
  | "heart"
  | "home";

export const VO_FEATURES = [
  {
    art: "/vital-os/features/handwriting.svg",
    title: "Write the way you always have",
    text: "A stylus on a tablet that feels like paper. Your handwriting, your shorthand, your abbreviations.",
  },
  {
    art: "/vital-os/features/auto-records.svg",
    title: "Records that file themselves",
    text: "Complaints, vitals, diagnosis and plan land in the right fields of the health record as you write.",
  },
  {
    art: "/vital-os/features/e-prescription.svg",
    title: "Prescriptions, sent",
    text: "Write Rx as usual. The patient gets a clear e-prescription and the pharmacy gets it too.",
  },
  {
    art: "/vital-os/features/lab-integration.svg",
    title: "Labs ordered and returned",
    text: "Tests you write down are ordered. Results come back into the patient's record, flagged when they need you.",
  },
  {
    art: "/vital-os/features/smart-scheduling.svg",
    title: "Appointments and follow-ups",
    text: "\"Review in 4 weeks\" books the follow-up and sends the reminder. Patients book and check in online.",
  },
  {
    art: "/vital-os/features/transparent-billing.svg",
    title: "Itemised billing",
    text: "Consultations, tests and procedures become a clear, itemised bill without anyone re-entering them.",
  },
  {
    art: "/vital-os/features/patient-portal.svg",
    title: "A patient portal, included",
    text: "Every patient sees their notes, prescriptions, results and bills in plain words, on their phone.",
  },
  {
    art: "/vital-os/features/anatomy-sketch.svg",
    title: "Draw, don't describe",
    text: "Sketch on body diagrams, circle a finding, annotate a scan. Drawings are saved with the visit.",
  },
  {
    art: "/vital-os/features/practice-insights.svg",
    title: "See how your practice is doing",
    text: "Patients seen, follow-ups kept, revenue and outstanding results, without building a spreadsheet.",
  },
  {
    art: "/vital-os/features/offline-sync.svg",
    title: "Works when the internet doesn't",
    text: "Keep writing through an outage. Notes are saved on the tablet and sync when you're back online.",
  },
  {
    art: "/vital-os/features/secure-records.svg",
    title: "Private by design",
    text: "Records are encrypted and access is in your hands. You decide who on your team sees what.",
  },
  {
    art: "/vital-os/features/time-back.svg",
    title: "Your evenings back",
    text: "When the consult ends, so does the paperwork. No catching up on notes after the last patient.",
  },
];

export const VO_RIPPLE: { icon: VoIconName; title: string; text: string }[] = [
  { icon: "record", title: "Health record", text: "Filed in the right fields and coded" },
  { icon: "pharmacy", title: "Pharmacy", text: "e-Prescription sent" },
  { icon: "lab", title: "Lab", text: "Tests ordered, results routed back" },
  { icon: "billing", title: "Billing", text: "Itemised bill ready" },
  { icon: "portal", title: "Patient portal", text: "Notes and results shared" },
  { icon: "bell", title: "Reminders", text: "Follow-up booked and reminded" },
];

export const VO_PORTAL_POINTS: { icon: VoIconName; title: string; text: string }[] = [
  {
    icon: "prescription",
    title: "Prescriptions they can read",
    text: "In your handwriting and typed out, with dose, timing and refill dates.",
  },
  { icon: "lab", title: "Results in plain words", text: "Numbers with what they mean, once you've reviewed them." },
  { icon: "rupee", title: "Every rupee itemised", text: "Bills that list each charge. No surprises at the counter." },
  { icon: "calendar", title: "Booking and check-in", text: "Patients book, fill forms and check in before they arrive." },
];

type Cell = boolean | string;
export const VO_COMPARE: { row: string; paper: Cell; emr: Cell; vital: Cell }[] = [
  { row: "Write naturally with a pen", paper: true, emr: false, vital: true },
  { row: "Eyes on the patient, not a keyboard", paper: true, emr: false, vital: true },
  { row: "Structured, searchable records", paper: false, emr: true, vital: true },
  { row: "Prescription, labs and bill from one note", paper: false, emr: "Re-typed", vital: true },
  { row: "Patient portal built in", paper: false, emr: "Often extra", vital: true },
  { row: "Keeps working without internet", paper: true, emr: "Varies", vital: true },
];

export const VO_FAQ = [
  {
    q: "Do I have to change how I write?",
    a: "No. Vital OS learns your handwriting, shorthand and abbreviations. If it reads something wrong, you correct it with a tap and it remembers.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "You keep writing. Notes are saved on the tablet and sync to the record as soon as the connection is back.",
  },
  {
    q: "Do my patients need to install anything?",
    a: "No. Patients open their portal from a link on their phone. Nothing to download, no new password to forget.",
  },
  {
    q: "Is patient data secure?",
    a: "Records are encrypted, and you control who on your team can see what. Patients see only their own records.",
  },
  {
    q: "Does it work for a clinic with several doctors?",
    a: "Yes. Each doctor writes on their own tablet with their own queue, and every patient has one shared record.",
  },
  {
    q: "What does it cost?",
    a: "It depends on how many doctors and locations you have. We'll show you the full price in the demo, line by line. Hidden fees would be a strange look for a company with our name.",
  },
];
