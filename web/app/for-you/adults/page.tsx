import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ConcernPicker from "@/components/care/ConcernPicker";
import RelatedCare from "@/components/care/RelatedCare";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../../care/care.module.css";
import fy from "../for-you.module.css";

export const metadata: Metadata = {
  title: "Healthcare for adults under 65 | Very Transparent Healthcare",
  description:
    "Health checks, long-term conditions and everyday care that fit around work and family, with one care team and prices shown before you book.",
};

const CARE = [
  {
    art: "/for-you/adults/health-check.svg",
    title: "Annual health check",
    text: "Blood pressure, sugar, cholesterol and heart risk, with a doctor who explains every number.",
  },
  {
    art: "/for-you/adults/work.svg",
    title: "Care around your workday",
    text: "Early, lunchtime and evening video visits, so a check-up doesn't cost you half a day.",
  },
  {
    art: "/for-you/adults/long-term.svg",
    title: "Long-term conditions",
    text: "Diabetes, blood pressure, thyroid and weight, managed with regular reviews and refills.",
  },
  {
    art: "/for-you/adults/screening.svg",
    title: "Screening on schedule",
    text: "Reminders for the tests that matter at your age, before they're overdue.",
  },
];

export default function AdultsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="peach">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / For you / Adults under 65
            </p>
            <span className={styles.label}>For adults under 65</span>
            <h1 id="page-title" className={styles.title}>
              Stay well <em>without the hassle</em>
            </h1>
            <p className={styles.lede}>
              Health checks, long-term conditions and everyday illness, handled by one care team that fits around your
              work and family. You see the price before you book.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book a health check
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Evening &amp; weekend slots</li>
              <li>One care team</li>
              <li>Prices upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/for-you/hero/adults.svg"
                alt="Two adults side by side, with a heart-rate card and a calendar reminder beside them"
                fill
                preload
                unoptimized
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">♥</span>
              <span>
                <strong>Know your numbers</strong>
                explained in plain words
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Video visits</strong>
                before or after work
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Concerns ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What would you like help with?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Health check",
                    title: "A proper look under the bonnet",
                    plan: [
                      "Blood tests, blood pressure and heart risk score",
                      "A doctor walks you through every result",
                      "A written plan for anything worth acting on",
                    ],
                  },
                  {
                    label: "Blood pressure & sugar",
                    title: "Numbers creeping up?",
                    plan: [
                      "Home monitoring to find your real numbers",
                      "Lifestyle changes first, medication if needed",
                      "Regular reviews so nothing drifts",
                    ],
                  },
                  {
                    label: "Stress & sleep",
                    title: "Running on empty",
                    plan: [
                      "Check for physical causes like thyroid or anaemia",
                      "Sleep and stress review",
                      "Therapy or coaching if it would help",
                    ],
                  },
                  {
                    label: "Aches & pains",
                    title: "Back, neck and joints",
                    plan: [
                      "Assessment by video or in person",
                      "Exercises and pain relief that suit your day",
                      "Referral for scans or physio only when needed",
                    ],
                  },
                  {
                    label: "Weight",
                    title: "A healthier weight that lasts",
                    plan: [
                      "Metabolic blood tests",
                      "A dietitian plan built around your routine",
                      "Medical treatment options discussed openly",
                    ],
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* ============ Care built for you ============ */}
        <section className={styles.section} aria-labelledby="care-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Built around your week</span>
              <h2 id="care-title" className={styles.h2}>Healthcare that respects your time</h2>
              <p className={styles.intro}>Most of what you need can happen by video or at home, and the rest is booked for you.</p>
            </Reveal>
            <ul className={styles.grid}>
              {CARE.map((c, i) => (
                <li key={c.title}>
                  <Reveal delay={i * 80}>
                    <div className={`${styles.tile} ${fy.artTile}`}>
                      <Image src={c.art} alt="" width={240} height={180} unoptimized className={fy.art} />
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Story ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="story-title">
          <div className={`${styles.wrap} ${styles.story}`}>
            <Reveal>
              <div className={styles.storyPhoto}>
                <Image src="/care/hypertension.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Prevention first</span>
              <h2 id="story-title" className={styles.h2}>Catch it early, keep it simple</h2>
              <blockquote className={styles.quote}>“One check-up on a lunch break, and for the first time I understood my own results.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>1</strong>care team for your family</li>
                <li><strong>20</strong>min video visits</li>
                <li><strong>0</strong>hidden fees</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ What's included ============ */}
        <section className={styles.section} aria-labelledby="included-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="included-title" className={styles.h2}>Everything in one place</h2>
              <p className={styles.intro}>One record, one care team, and one bill you can actually read.</p>
              <ul className={styles.checks}>
                <li>Health checks and screening reminders by age</li>
                <li>Long-term condition reviews and repeat prescriptions</li>
                <li>Home sample collection for blood tests</li>
                <li>Family members on the same account, if you want them</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>Our promise</span>
                <h3>No surprise bills</h3>
                <p>Every consult, test and treatment is priced before you agree to it. If something changes, we ask first.</p>
                <ul>
                  <li>Itemised bills for insurance claims</li>
                  <li>Written quotes before any procedure</li>
                  <li>Records never shared with employers</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ How it works ============ */}
        <section id="how-it-works" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="how-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="how-title" className={styles.h2}>How it works</h2>
              <ol className={styles.steps}>
                <li><h3>Create your profile</h3><p>Add your health history, medicines and any family members you look after.</p></li>
                <li><h3>Book around your day</h3><p>Video for most things, in person when you need an exam, and tests collected at home.</p></li>
                <li><h3>Stay on track</h3><p>Results explained, reminders for reviews, and messaging between visits.</p></li>
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="faq-title" className={styles.h2}>Questions, answered</h2>
              <div className={styles.faq}>
                <details>
                  <summary>How often should I have a health check?</summary>
                  <p>Every one to three years suits most adults, and more often if you have risk factors like high blood pressure, diabetes or a family history of heart disease. We&apos;ll recommend what&apos;s right for you.</p>
                </details>
                <details>
                  <summary>Can I use my health insurance?</summary>
                  <p>You get itemised bills and reports for every visit and test, so you can claim from your insurer or employer scheme.</p>
                </details>
                <details>
                  <summary>When should I go to the emergency room instead?</summary>
                  <p>Chest pain, sudden weakness or numbness, slurred speech, severe breathlessness or heavy bleeding need emergency care immediately. Call your local emergency number.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["hypertension", "diabetes", "weight"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Twenty minutes for the years ahead</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book a health check</Link>
                <Link className={styles.btnLink} href="/services">Browse all care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
