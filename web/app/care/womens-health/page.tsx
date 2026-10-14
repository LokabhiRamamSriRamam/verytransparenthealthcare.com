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
  title: "Women's health | Very Transparent Healthcare",
  description:
    "Periods, PCOS, contraception, fertility, menopause and screening — care for every stage of life, with prices shown before you book.",
};

export default function WomensHealthPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="purple">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Women&apos;s health
            </p>
            <span className={styles.label}>Women&apos;s health</span>
            <h1 id="page-title" className={styles.title}>
              Care for every <em>stage of you</em>
            </h1>
            <p className={styles.lede}>Clinicians who take your symptoms seriously, at every stage of life.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book a consultation
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Heard, not dismissed</li>
              <li>Video or in person</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/womens-health.png"
                alt="Two women dancing joyfully"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">♀</span>
              <span>
                <strong>Hormone-aware care</strong>
                from teens to menopause
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Choose your clinician</strong>
                including female doctors
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
                    label: "Periods",
                    title: "Heavy, painful or irregular periods",
                    plan: [
                      "Symptom and cycle review",
                      "Tests or a scan if needed",
                      "Treatment options, from pain relief to hormonal care",
                    ],
                  },
                  {
                    label: "PCOS",
                    title: "Understanding PCOS",
                    plan: [
                      "Hormone blood tests and ultrasound",
                      "Plan for cycles, skin and metabolism",
                      "Fertility planning if relevant",
                    ],
                  },
                  {
                    label: "Contraception",
                    title: "Find the method that suits you",
                    plan: [
                      "Consultation about your needs and health",
                      "Prescription or fitting arranged",
                      "Review to check it's working for you",
                    ],
                  },
                  {
                    label: "Fertility",
                    title: "Thinking about a family?",
                    plan: [
                      "Fertility and hormone testing",
                      "Pre-conception health review",
                      "Referral to specialists if needed",
                    ],
                  },
                  {
                    label: "Menopause",
                    title: "Perimenopause and menopause",
                    plan: [
                      "Symptom assessment",
                      "HRT and non-hormonal options explained",
                      "Bone and heart health checks",
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
                <Image src="/care/womens-health.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Listened to, finally</span>
              <h2 id="story-title" className={styles.h2}>Your symptoms are real</h2>
              <blockquote className={styles.quote}>“After years of being brushed off, someone actually listened.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>1</strong>clinician who knows you</li>
                <li><strong>All</strong>ages and stages</li>
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
                <li><h3>Share your symptoms</h3><p>A private questionnaire — you can choose a female clinician.</p></li>
                <li><h3>Talk it through</h3><p>A consultation by video or in person, with tests arranged if needed.</p></li>
                <li><h3>Get your plan</h3><p>Treatment, prescriptions and follow-ups, all explained and priced.</p></li>
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
                  <summary>Can I request a female clinician?</summary>
                  <p>Yes. Just choose your preference when booking.</p>
                </details>
                <details>
                  <summary>When should I seek urgent care?</summary>
                  <p>Severe pelvic pain, very heavy bleeding with dizziness, or pain in early pregnancy needs urgent medical attention.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["maternity", "sexual-health", "skincare"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Care that takes you seriously</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book a consultation</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
