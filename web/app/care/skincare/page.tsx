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
  title: "Skincare & dermatology | Very Transparent Healthcare",
  description:
    "Expert help for acne, eczema, pigmentation, hair loss and more — prescription treatments from qualified clinicians, priced upfront.",
};

export default function SkincarePage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="indigo">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Skincare
            </p>
            <span className={styles.label}>Skincare</span>
            <h1 id="page-title" className={styles.title}>
              Skin you <em>feel good</em> in
            </h1>
            <p className={styles.lede}>Send a few photos and get a clinician&apos;s treatment plan.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Get a skin consultation
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Photo-based consults</li>
              <li>Prescription treatments</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/skincare.png"
                alt="A woman with eyes closed, hair in the breeze"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✦</span>
              <span>
                <strong>Plan in 48 hours</strong>
                from your photos
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Follow-up photos</strong>
                to track progress
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Concerns ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What&apos;s your skin concern?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Acne",
                    title: "Clearer skin, without the guesswork",
                    plan: [
                      "Photo assessment of acne type and scarring risk",
                      "Topical or oral prescription treatment",
                      "Review at 8–12 weeks with new photos",
                    ],
                  },
                  {
                    label: "Eczema",
                    title: "Calm the itch, protect your skin",
                    plan: [
                      "Trigger review and skincare routine reset",
                      "Prescription creams for flares",
                      "Maintenance plan for calmer skin",
                    ],
                  },
                  {
                    label: "Pigmentation",
                    title: "Even out dark spots and melasma",
                    plan: [
                      "Assessment of pigmentation type",
                      "Prescription brightening treatment",
                      "Sun protection plan that you'll actually use",
                    ],
                  },
                  {
                    label: "Hair loss",
                    title: "Thinning hair, taken seriously",
                    plan: [
                      "Scalp photos and medical history",
                      "Blood tests where needed",
                      "Evidence-based treatment and progress photos",
                    ],
                  },
                  {
                    label: "Rash or mole",
                    title: "Something new on your skin?",
                    plan: [
                      "Photo review by a clinician",
                      "Treatment, or referral for in-person examination",
                      "Clear advice on what to watch for",
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
                <Image src="/care/skincare.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Real results, honestly explained</span>
              <h2 id="story-title" className={styles.h2}>Fewer products. Better skin.</h2>
              <blockquote className={styles.quote}>“I stopped buying everything on social media and my skin finally calmed down.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>48h</strong>to your plan</li>
                <li><strong>1</strong>clinician follows you</li>
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
                <li><h3>Upload photos</h3><p>A few clear photos and a short questionnaire about your skin.</p></li>
                <li><h3>Get your plan</h3><p>A clinician reviews and sends a personalised plan and prescription if needed.</p></li>
                <li><h3>Track progress</h3><p>Follow-up photos let us fine-tune treatment as your skin changes.</p></li>
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
                  <summary>How good do my photos need to be?</summary>
                  <p>Phone photos in natural light are perfect. We&apos;ll guide you on angles and ask for more if needed.</p>
                </details>
                <details>
                  <summary>Can you check a mole online?</summary>
                  <p>We can review photos, but any mole that&apos;s changing, bleeding or irregular will be referred for an in-person examination.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["womens-health", "mens-health", "weight"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Your skin, understood</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Get a skin consultation</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
