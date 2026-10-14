import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ConcernPicker from "@/components/care/ConcernPicker";
import RelatedCare from "@/components/care/RelatedCare";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../care.module.css";

export const metadata: Metadata = {
  title: "Diabetes care | Very Transparent Healthcare",
  description:
    "Doctor-led care for type 1, type 2 and prediabetes — regular HbA1c checks, medication reviews and nutrition support, with prices shown upfront.",
};

export default function DiabetesPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="purple">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Diabetes
            </p>
            <span className={styles.label}>Diabetes</span>
            <h1 id="page-title" className={styles.title}>
              Take charge of your <em>blood sugar</em>
            </h1>
            <p className={styles.lede}>A care team that tracks your numbers with you and adjusts treatment early.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Start diabetes care
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Doctor-led plans</li>
              <li>Lab tests arranged</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/diabetes.png"
                alt="A smiling family of three generations"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">↓</span>
              <span>
                <strong>HbA1c tracked</strong>
                every three months
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Whole-family support</strong>
                meals, habits, routines
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Where are you now ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>Where are you right now?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Newly diagnosed",
                    title: "Just found out? Let's make sense of it",
                    plan: [
                      "An unhurried first consultation with a doctor",
                      "Baseline blood tests, kidney and eye screening",
                      "A simple starter plan for food, movement and medication",
                    ],
                  },
                  {
                    label: "Prediabetes",
                    title: "Catch it early, turn it around",
                    plan: [
                      "Risk assessment and HbA1c test",
                      "Personalised nutrition and activity coaching",
                      "Re-testing to show your progress",
                    ],
                  },
                  {
                    label: "Type 2",
                    title: "Steady numbers, fewer surprises",
                    plan: [
                      "Quarterly reviews of HbA1c, blood pressure and cholesterol",
                      "Medication adjustments, including newer options where suitable",
                      "Annual foot, eye and kidney checks",
                    ],
                  },
                  {
                    label: "Type 1",
                    title: "Support that keeps pace with you",
                    plan: [
                      "Insulin and device reviews",
                      "CGM data reviewed with you",
                      "Clear sick-day and travel plans",
                    ],
                  },
                  {
                    label: "Caring for someone",
                    title: "Helping a parent or partner",
                    plan: [
                      "Shared appointments and care notes",
                      "Medication and appointment reminders",
                      "Guidance on meals and warning signs",
                    ],
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* ============ Story ============ */}
        <section className={styles.section} aria-labelledby="story-title">
          <div className={`${styles.wrap} ${styles.story}`}>
            <Reveal>
              <div className={styles.storyPhoto}>
                <Image src="/care/diabetes.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Care for the whole family</span>
              <h2 id="story-title" className={styles.h2}>Healthy habits work better together</h2>
              <blockquote className={styles.quote}>“For the first time, I understand what my numbers actually mean.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>3</strong>monthly check-ins</li>
                <li><strong>1</strong>shared care plan</li>
                <li><strong>0</strong>hidden fees</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ How it works ============ */}
        <section id="how-it-works" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="how-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="how-title" className={styles.h2}>How it works</h2>
              <ol className={styles.steps}>
                <li><h3>Share your history</h3><p>Tell us about your diagnosis, medicines and recent results.</p></li>
                <li><h3>Get tested &amp; reviewed</h3><p>We arrange blood tests near you, then a doctor walks you through the results.</p></li>
                <li><h3>Stay on track</h3><p>Regular reviews, refills and a team you can message between visits.</p></li>
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
                  <summary>Can I keep my current doctor?</summary>
                  <p>Yes. We can work alongside your existing doctor and share updates with them if you&apos;d like.</p>
                </details>
                <details>
                  <summary>What if my sugar is very high or low?</summary>
                  <p>If you feel very unwell, confused, or cannot keep fluids down, seek emergency care immediately. Your plan will include clear warning signs.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["hypertension", "weight", "dental"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Better numbers start with one conversation</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Start diabetes care</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
