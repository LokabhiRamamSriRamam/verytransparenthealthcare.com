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
  title: "Dental care | Very Transparent Healthcare",
  description:
    "Check-ups, cleanings, fillings, aligners and emergency dental care — with a written quote before any treatment begins.",
};

export default function DentalPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="peach">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Dental
            </p>
            <span className={styles.label}>Dental</span>
            <h1 id="page-title" className={styles.title}>
              A smile you&apos;re <em>proud of</em>
            </h1>
            <p className={styles.lede}>Gentle dental care, with a written quote before any treatment starts.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book a dental visit
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Written quotes</li>
              <li>Gentle, anxiety-aware</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap} data-white-bg>
              <Image
                src="/care/dental.png"
                alt="Two friends laughing with bright smiles"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">☺</span>
              <span>
                <strong>Quote before treatment</strong>
                in writing, every time
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Emergency slots</strong>
                for sudden toothache
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Concerns ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What do you need today?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Check-up & clean",
                    title: "Keep your teeth healthy",
                    plan: [
                      "Full examination and gum health check",
                      "Scale and polish by a hygienist",
                      "X-rays only when clinically needed",
                    ],
                  },
                  {
                    label: "Toothache",
                    title: "Pain that won't go away",
                    plan: [
                      "Emergency assessment, often same day",
                      "Pain relief and infection treatment",
                      "Written quote for any follow-up work",
                    ],
                  },
                  {
                    label: "Straighter teeth",
                    title: "Aligners and braces",
                    plan: [
                      "Orthodontic assessment and scans",
                      "Digital preview of your new smile",
                      "Fixed total price, including retainers",
                    ],
                  },
                  {
                    label: "Whiter smile",
                    title: "Brighter, safely",
                    plan: [
                      "Check that teeth and gums are healthy first",
                      "Custom trays or in-clinic whitening",
                      "Aftercare to keep results longer",
                    ],
                  },
                  {
                    label: "Nervous patient",
                    title: "Dental anxiety? You're not alone",
                    plan: [
                      "A chat-only first visit if you prefer",
                      "Longer appointments with breaks",
                      "Sedation options discussed openly",
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
              <div className={styles.storyPhoto} data-white-bg>
                <Image src="/care/dental.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Honest dentistry</span>
              <h2 id="story-title" className={styles.h2}>Only the treatment you need</h2>
              <blockquote className={styles.quote}>“They showed me the X-ray and the price. No pressure at all.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>100%</strong>written quotes</li>
                <li><strong>1</strong>dentist who knows you</li>
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
                <li><h3>Book a visit</h3><p>Choose a time that suits you, including emergency slots.</p></li>
                <li><h3>Examination &amp; quote</h3><p>Your dentist explains what they find and gives you a written quote.</p></li>
                <li><h3>Treatment, your call</h3><p>Go ahead when you&apos;re ready. The quoted price is the price you pay.</p></li>
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
                  <summary>How often should I have a check-up?</summary>
                  <p>Usually every 6–12 months, depending on your oral health. Your dentist will recommend what&apos;s right for you.</p>
                </details>
                <details>
                  <summary>What counts as a dental emergency?</summary>
                  <p>Severe pain, facial swelling or a knocked-out tooth. Swelling that affects breathing or swallowing needs emergency care immediately.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["pediatrics", "skincare", "diabetes"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Smile a little wider</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book a dental visit</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
