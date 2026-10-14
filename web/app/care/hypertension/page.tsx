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
  title: "Blood pressure care | Very Transparent Healthcare",
  description:
    "Diagnose and manage high blood pressure with home monitoring, medication reviews and lifestyle support — at prices you see upfront.",
};

export default function HypertensionPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="peach">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Hypertension
            </p>
            <span className={styles.label}>Hypertension</span>
            <h1 id="page-title" className={styles.title}>
              Keep your blood pressure <em>in check</em>
            </h1>
            <p className={styles.lede}>Measure it properly, treat it early, and keep it steady.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Get a blood pressure review
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Home monitoring plans</li>
              <li>Medication reviews</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/hypertension.png"
                alt="A cheerful middle-aged man"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">♥</span>
              <span>
                <strong>Heart-risk check</strong>
                included in your review
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Readings from home</strong>
                reviewed by a doctor
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Where are you now ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What best describes you?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Had a high reading",
                    title: "One high number — now what?",
                    plan: [
                      "A week of guided home readings",
                      "Doctor review of your average",
                      "A clear answer: monitor, change habits, or treat",
                    ],
                  },
                  {
                    label: "Already on tablets",
                    title: "Still high on medication?",
                    plan: [
                      "Medication and side-effect review",
                      "Blood tests to check kidneys and salts",
                      "Step-by-step adjustments with follow-up",
                    ],
                  },
                  {
                    label: "Family history",
                    title: "It runs in the family",
                    plan: [
                      "Blood pressure and cholesterol check",
                      "10-year heart risk estimate",
                      "Prevention plan that fits your routine",
                    ],
                  },
                  {
                    label: "Want to come off meds",
                    title: "Could lifestyle be enough?",
                    plan: [
                      "Honest assessment of what's realistic",
                      "Coaching on food, activity and sleep",
                      "Supervised dose reductions if appropriate",
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
                <Image src="/care/hypertension.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Quiet condition, clear plan</span>
              <h2 id="story-title" className={styles.h2}>Small numbers, big difference</h2>
              <blockquote className={styles.quote}>“I finally know my real numbers — and they&apos;re coming down.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>7</strong>days of home readings</li>
                <li><strong>1</strong>doctor who follows up</li>
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
                <li><h3>Measure at home</h3><p>We show you how to take accurate readings, or lend you a validated monitor.</p></li>
                <li><h3>Review with a doctor</h3><p>Your readings, risks and medicines, discussed in one consultation.</p></li>
                <li><h3>Adjust &amp; follow up</h3><p>Treatment tuned over weeks, with check-ins until you&apos;re at target.</p></li>
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
                  <summary>Do I need my own monitor?</summary>
                  <p>It helps, and we can recommend validated models. If you don&apos;t have one, we can arrange one for the monitoring week.</p>
                </details>
                <details>
                  <summary>When should I seek urgent help?</summary>
                  <p>A very high reading with chest pain, severe headache, confusion, weakness or trouble speaking needs emergency care immediately.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["diabetes", "weight", "mens-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Know your numbers. Protect your heart.</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Get a blood pressure review</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
