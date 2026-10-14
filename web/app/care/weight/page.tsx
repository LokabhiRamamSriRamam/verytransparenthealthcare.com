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
  title: "Weight & metabolism care | Very Transparent Healthcare",
  description:
    "Medically supervised weight care — nutrition, movement, sleep and medication where appropriate — with honest guidance and upfront pricing.",
};

export default function WeightPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="mint">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Weight &amp; metabolism
            </p>
            <span className={styles.label}>Weight &amp; metabolism</span>
            <h1 id="page-title" className={styles.title}>
              Reach a healthy weight <em>that lasts</em>
            </h1>
            <p className={styles.lede}>No crash diets, no shame: a plan built around your life.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Start your plan
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Medically supervised</li>
              <li>Dietitian support</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/obesity.png"
                alt="A smiling woman in workout clothes"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">↗</span>
              <span>
                <strong>Progress, not perfection</strong>
                tracked week by week
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Doctor + dietitian + coach</strong>
                one joined-up team
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Goals ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What&apos;s your main goal?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Lose weight",
                    title: "Steady, sustainable weight loss",
                    plan: [
                      "Metabolic health check and blood tests",
                      "Personal nutrition plan from a dietitian",
                      "Weekly coaching check-ins",
                    ],
                  },
                  {
                    label: "Medication options",
                    title: "Is weight-loss medication right for me?",
                    plan: [
                      "Doctor assessment of eligibility and risks",
                      "Clear pricing for medication and monitoring",
                      "Regular reviews while on treatment",
                    ],
                  },
                  {
                    label: "Keep it off",
                    title: "Maintain what you've achieved",
                    plan: [
                      "Maintenance-focused nutrition plan",
                      "Strength and activity guidance",
                      "Monthly check-ins to catch drift early",
                    ],
                  },
                  {
                    label: "PCOS & hormones",
                    title: "When hormones make it harder",
                    plan: [
                      "Hormone and thyroid testing",
                      "Plan designed around insulin resistance",
                      "Joint care with women's health if needed",
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
                <Image src="/care/obesity.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>No judgement, just support</span>
              <h2 id="story-title" className={styles.h2}>Built around your life, not a diet book</h2>
              <blockquote className={styles.quote}>“It&apos;s the first plan that didn&apos;t feel like punishment.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>3</strong>experts, one team</li>
                <li><strong>Weekly</strong>coaching check-ins</li>
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
                <li><h3>Health check</h3><p>Questionnaire, measurements and blood tests to understand your metabolism.</p></li>
                <li><h3>Your plan</h3><p>Food, movement, sleep and — if suitable — medication, agreed with your doctor.</p></li>
                <li><h3>Ongoing coaching</h3><p>Weekly check-ins and adjustments, so progress keeps coming.</p></li>
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
                  <summary>Do I have to take medication?</summary>
                  <p>No. Medication is one option among many and is only offered if it&apos;s clinically appropriate and you want it.</p>
                </details>
                <details>
                  <summary>Can I pause my plan?</summary>
                  <p>Yes. Pause or cancel whenever you need to, with no penalty.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["diabetes", "hypertension", "mental-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Your healthiest weight, your way</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Start your plan</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
