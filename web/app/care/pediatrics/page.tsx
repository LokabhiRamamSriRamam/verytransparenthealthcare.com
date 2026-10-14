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
  title: "Pediatric care | Very Transparent Healthcare",
  description:
    "Care for babies, children and teens — check-ups, vaccinations, everyday illnesses and development support, with clear prices for parents.",
};

export default function PediatricsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="mint">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Pediatrics
            </p>
            <span className={styles.label}>Pediatrics</span>
            <h1 id="page-title" className={styles.title}>
              Healthy, <em>happy</em> kids
            </h1>
            <p className={styles.lede}>Friendly care for babies, kids and teens, and quick answers for parents.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book for your child
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Child-friendly clinicians</li>
              <li>Video visits for parents</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/pediatrics.png"
                alt="Parents with their two young children"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">★</span>
              <span>
                <strong>Growth &amp; milestones</strong>
                tracked at every visit
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Worried at 9pm?</strong>
                message a clinician
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Age picker ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>How old is your child?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Newborn (0–3 months)",
                    title: "Those first weeks",
                    plan: [
                      "Newborn check and weight monitoring",
                      "Feeding and sleep guidance",
                      "Vaccination schedule started",
                    ],
                  },
                  {
                    label: "Baby (3–12 months)",
                    title: "Rolling, crawling, discovering",
                    plan: [
                      "Developmental check-ups",
                      "Weaning and nutrition advice",
                      "Vaccinations on schedule",
                    ],
                  },
                  {
                    label: "Toddler (1–4)",
                    title: "Big feelings, busy days",
                    plan: [
                      "Speech and development reviews",
                      "Care for everyday illnesses",
                      "Sleep and behaviour support",
                    ],
                  },
                  {
                    label: "School age (5–12)",
                    title: "Growing, learning, playing",
                    plan: [
                      "Annual well-child check",
                      "Asthma and allergy plans",
                      "School and sports forms",
                    ],
                  },
                  {
                    label: "Teen (13–17)",
                    title: "Space to talk openly",
                    plan: [
                      "Confidential time with the clinician",
                      "Mental health and wellbeing support",
                      "Acne, periods and growth questions",
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
                <Image src="/care/pediatrics.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Care for the whole family</span>
              <h2 id="story-title" className={styles.h2}>Parents are part of the team</h2>
              <blockquote className={styles.quote}>“They talked to my daughter, not just about her.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>0–17</strong>years covered</li>
                <li><strong>1</strong>family care team</li>
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
                <li><h3>Add your child</h3><p>Create a family profile with their health history and vaccination record.</p></li>
                <li><h3>Choose a visit</h3><p>Video for quick questions, in person for check-ups and exams.</p></li>
                <li><h3>Stay in touch</h3><p>Reminders for checks and vaccines, and messaging when you&apos;re unsure.</p></li>
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
                  <summary>Can a video visit work for a child?</summary>
                  <p>For many things — rashes, colds, feeding questions — yes. If your child needs to be examined in person, we&apos;ll tell you.</p>
                </details>
                <details>
                  <summary>When should I go to the emergency room?</summary>
                  <p>Difficulty breathing, a seizure, unusual drowsiness, a non-blanching rash, or a fever in a baby under 3 months need emergency care immediately.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["maternity", "dental", "mental-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Care that grows with them</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book for your child</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
