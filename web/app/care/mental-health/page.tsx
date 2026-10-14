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
  title: "Mental health care | Very Transparent Healthcare",
  description:
    "Therapy, psychiatry and ongoing support for anxiety, depression, stress and more — with a clear plan and clear prices from day one.",
};

export default function MentalHealthPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="lavender">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Mental health
            </p>
            <span className={styles.label}>Mental health</span>
            <h1 id="page-title" className={styles.title}>
              Feel more like <em>yourself</em> again
            </h1>
            <p className={styles.lede}>Talk to a licensed therapist who listens first, with a clear plan and clear prices.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book a first session
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Licensed therapists</li>
              <li>Video or in person</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/mental-health.png"
                alt="Two women talking and smiling together"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">♡</span>
              <span>
                <strong>Matched to you</strong>
                by need, language &amp; style
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Private &amp; confidential</strong>
                always
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ What brings you here ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What brings you here?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Anxiety & worry",
                    title: "When your mind won't switch off",
                    plan: [
                      "A 50-minute assessment with a therapist",
                      "Cognitive behavioural therapy (CBT) tailored to your triggers",
                      "Optional psychiatry review if medication could help",
                    ],
                  },
                  {
                    label: "Low mood",
                    title: "When everything feels heavy",
                    plan: [
                      "Screening and a conversation about what's going on",
                      "Weekly talking therapy with a consistent therapist",
                      "Medication options discussed openly, never pushed",
                    ],
                  },
                  {
                    label: "Stress & burnout",
                    title: "Running on empty",
                    plan: [
                      "Short-term focused therapy (6–8 sessions)",
                      "Practical tools for sleep, rest and workload",
                      "A check-in plan so you don't slide back",
                    ],
                  },
                  {
                    label: "Relationships",
                    title: "When connection feels hard",
                    plan: [
                      "Individual or couples sessions",
                      "Grief and bereavement support",
                      "Communication skills you can use right away",
                    ],
                  },
                  {
                    label: "Focus & ADHD",
                    title: "When focus never comes easily",
                    plan: [
                      "Structured ADHD assessment with a specialist",
                      "Coaching and therapy strategies",
                      "Medication review and follow-up if appropriate",
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
                <Image src="/care/mental-health.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Care that listens</span>
              <h2 id="story-title" className={styles.h2}>The same person, every session</h2>
              <blockquote className={styles.quote}>“It felt like talking to someone who actually had time for me.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>1</strong>consistent therapist</li>
                <li><strong>0</strong>hidden fees</li>
                <li><strong>24/7</strong>messages to your team</li>
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
                <li><h3>Tell us how you&apos;re feeling</h3><p>A short, private questionnaire — about five minutes.</p></li>
                <li><h3>Meet your therapist</h3><p>Matched by need, language and style. Switch any time, no questions asked.</p></li>
                <li><h3>Follow a clear plan</h3><p>Agreed goals, regular check-ins, and progress you can see.</p></li>
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
                  <summary>Do I need a referral?</summary>
                  <p>No. You can book directly. If you have a referral from your GP, share it and we&apos;ll include it in your notes.</p>
                </details>
                <details>
                  <summary>Is this for emergencies?</summary>
                  <p>No. If you are in immediate danger or thinking about ending your life, call your local emergency number or a crisis line right away.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["womens-health", "mens-health", "sexual-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Ready to feel a little lighter?</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book a first session</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
