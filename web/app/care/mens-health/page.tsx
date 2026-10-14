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
  title: "Men's health | Very Transparent Healthcare",
  description:
    "Health checks, hair loss, erectile dysfunction, testosterone and heart health — discreet care from clinicians, with upfront prices.",
};

export default function MensHealthPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="peach">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Men&apos;s health
            </p>
            <span className={styles.label}>Men&apos;s health</span>
            <h1 id="page-title" className={styles.title}>
              Stay strong, <em>stay ahead</em>
            </h1>
            <p className={styles.lede}>Straightforward, discreet care that fits around work and life.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book a health check
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Discreet &amp; confidential</li>
              <li>Evening video slots</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/mens-health.png"
                alt="A confident young man"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">⚡</span>
              <span>
                <strong>Full health check</strong>
                heart, hormones, bloods
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Discreet delivery</strong>
                for prescriptions
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Concerns ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What&apos;s on your mind?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Health check",
                    title: "A proper MOT for your body",
                    plan: [
                      "Blood pressure, cholesterol and blood sugar",
                      "Heart risk score and lifestyle review",
                      "A doctor explains every result",
                    ],
                  },
                  {
                    label: "Hair loss",
                    title: "Thinning or receding hair",
                    plan: [
                      "Photo assessment and history",
                      "Evidence-based treatment options",
                      "Progress photos at 3 and 6 months",
                    ],
                  },
                  {
                    label: "Erectile dysfunction",
                    title: "It's more common than you think",
                    plan: [
                      "Confidential consultation",
                      "Heart and hormone checks if needed",
                      "Prescription treatment, delivered discreetly",
                    ],
                  },
                  {
                    label: "Low energy",
                    title: "Tired all the time?",
                    plan: [
                      "Blood tests including testosterone and thyroid",
                      "Sleep and stress review",
                      "Treatment based on what we find",
                    ],
                  },
                  {
                    label: "Mental wellbeing",
                    title: "Stress, mood and pressure",
                    plan: [
                      "Private wellbeing check-in",
                      "Therapy or coaching sessions",
                      "Medication options discussed openly",
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
                <Image src="/care/mens-health.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Straight talk</span>
              <h2 id="story-title" className={styles.h2}>No awkwardness. Just answers.</h2>
              <blockquote className={styles.quote}>“Should have done this years ago. Took twenty minutes.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>20</strong>min video consults</li>
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
                <li><h3>Answer a few questions</h3><p>Private and quick — about five minutes.</p></li>
                <li><h3>See a clinician</h3><p>By video or in person, with tests arranged near you.</p></li>
                <li><h3>Get your plan</h3><p>Treatment and prescriptions, delivered discreetly if you prefer.</p></li>
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
                  <summary>How often should I get a health check?</summary>
                  <p>Every one to three years is sensible for most adults, more often if you have risk factors. We&apos;ll recommend what&apos;s right for you.</p>
                </details>
                <details>
                  <summary>When is it urgent?</summary>
                  <p>Chest pain, sudden shortness of breath, or a painful swollen testicle need emergency care immediately.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["hypertension", "sexual-health", "mental-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Twenty minutes for your future self</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book a health check</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
