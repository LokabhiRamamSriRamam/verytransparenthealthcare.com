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
  title: "Maternity care | Very Transparent Healthcare",
  description:
    "Pregnancy care from planning to postpartum — scans, tests, check-ups and support, with every cost explained before you commit.",
};

export default function MaternityPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="lavender">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Maternity
            </p>
            <span className={styles.label}>Maternity</span>
            <h1 id="page-title" className={styles.title}>
              Care through <em>every trimester</em>
            </h1>
            <p className={styles.lede}>One team from the first positive test to your baby&apos;s first months.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Start maternity care
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>One care team</li>
              <li>Scans &amp; tests arranged</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/maternity.png"
                alt="A smiling pregnant woman"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">♡</span>
              <span>
                <strong>Planning to postpartum</strong>
                one continuous journey
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Message your team</strong>
                whenever you need
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Stage picker ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>Where are you in your journey?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Planning",
                    title: "Getting ready for pregnancy",
                    plan: [
                      "Pre-conception consultation",
                      "Blood tests and vaccination review",
                      "Folic acid and lifestyle guidance",
                    ],
                  },
                  {
                    label: "First trimester",
                    title: "Weeks 1–12: the early days",
                    plan: [
                      "Booking appointment and dating scan",
                      "Screening tests explained, your choice",
                      "Support for nausea and fatigue",
                    ],
                  },
                  {
                    label: "Second trimester",
                    title: "Weeks 13–27: growing and glowing",
                    plan: [
                      "Anatomy scan at around 20 weeks",
                      "Blood pressure and sugar checks",
                      "Birth preparation classes",
                    ],
                  },
                  {
                    label: "Third trimester",
                    title: "Weeks 28–40: nearly there",
                    plan: [
                      "More frequent check-ups",
                      "Birth plan and hospital coordination",
                      "Feeding and newborn preparation",
                    ],
                  },
                  {
                    label: "Postpartum",
                    title: "The fourth trimester",
                    plan: [
                      "Postnatal check for you and baby",
                      "Feeding and lactation support",
                      "Mood check-ins and mental health support",
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
                <Image src="/care/maternity.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Continuity of care</span>
              <h2 id="story-title" className={styles.h2}>Familiar faces, start to finish</h2>
              <blockquote className={styles.quote}>“I never felt like just another appointment.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>40</strong>weeks, one team</li>
                <li><strong>6</strong>weeks postnatal support</li>
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
                <li><h3>Tell us about you</h3><p>Your due date (or plans), health history and what matters most.</p></li>
                <li><h3>Meet your team</h3><p>A doctor or midwife-led team, with a schedule mapped out for your pregnancy.</p></li>
                <li><h3>Go at your pace</h3><p>Appointments, scans and support timed to each stage, plus messaging in between.</p></li>
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
                  <summary>When should I get in touch?</summary>
                  <p>As soon as you have a positive test — or before, if you&apos;re planning. Early care helps with screening and planning.</p>
                </details>
                <details>
                  <summary>When is it urgent?</summary>
                  <p>Bleeding, severe pain, fluid leaking, reduced baby movements, severe headache or vision changes need urgent care — contact your maternity unit or emergency services right away.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["pediatrics", "womens-health", "mental-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Welcome to this next chapter</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Start maternity care</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
