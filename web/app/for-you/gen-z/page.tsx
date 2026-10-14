import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ConcernPicker from "@/components/care/ConcernPicker";
import RelatedCare from "@/components/care/RelatedCare";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../../care/care.module.css";
import fy from "../for-you.module.css";

export const metadata: Metadata = {
  title: "Healthcare for Gen Z | Very Transparent Healthcare",
  description:
    "Private, judgement-free care that fits in your phone — mental health, skin, sexual health and everyday illness, with prices shown before you book.",
};

const CARE = [
  {
    art: "/for-you/gen-z/chat.svg",
    title: "Text a clinician",
    text: "Ask the question you'd rather not ask out loud. A real clinician replies, usually the same day.",
  },
  {
    art: "/for-you/gen-z/mind.svg",
    title: "Mental health",
    text: "Therapy and psychiatry for anxiety, low mood, burnout and ADHD, by video or in person.",
  },
  {
    art: "/for-you/gen-z/skin.svg",
    title: "Skin & acne",
    text: "Send photos, get a prescription plan, and check in on progress without another waiting room.",
  },
  {
    art: "/for-you/gen-z/private.svg",
    title: "Sexual health",
    text: "STI tests at home or in clinic, contraception and PrEP, in plain packaging.",
  },
];

export default function GenZPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="lavender">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / For you / Gen Z
            </p>
            <span className={styles.label}>For Gen Z</span>
            <h1 id="page-title" className={styles.title}>
              Healthcare that <em>gets you</em>
            </h1>
            <p className={styles.lede}>
              Private, judgement-free care from your phone. Mental health, skin, sexual health and the stuff you&apos;ve
              been googling at 2am, with the price shown before you book.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Get started
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Chat or video</li>
              <li>No judgement</li>
              <li>Prices upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/for-you/hero/gen-z.svg"
                alt="A young person in a hoodie messaging a clinician on their phone as replies pop up"
                fill
                preload
                unoptimized
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✦</span>
              <span>
                <strong>Message a clinician</strong>
                replies the same day
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Your records</strong>
                shared only with your say-so
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Concerns ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>What&apos;s going on?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Anxiety & stress",
                    title: "When your brain won't switch off",
                    plan: [
                      "A private check-in to understand what's happening",
                      "Matched with a therapist who fits you",
                      "Psychiatry and medication options if they'd help",
                    ],
                  },
                  {
                    label: "Acne & skin",
                    title: "Breakouts that won't quit",
                    plan: [
                      "Photo consultation, no clinic visit needed",
                      "Prescription treatment that actually works",
                      "Progress check at 8–12 weeks",
                    ],
                  },
                  {
                    label: "Sexual health",
                    title: "Testing, contraception, questions",
                    plan: [
                      "Home or clinic STI testing",
                      "Contraception or PrEP, discussed openly",
                      "Results and treatment, kept confidential",
                    ],
                  },
                  {
                    label: "Focus & ADHD",
                    title: "Struggling to focus?",
                    plan: [
                      "Screening questionnaire and history",
                      "Assessment with a specialist",
                      "Treatment and study or work strategies",
                    ],
                  },
                  {
                    label: "Feeling unwell",
                    title: "Sore throat, UTI, that weird rash",
                    plan: [
                      "Video visit, often the same day",
                      "Prescription sent to a pharmacy near you",
                      "Follow-up message to check you're better",
                    ],
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* ============ Care built for you ============ */}
        <section className={styles.section} aria-labelledby="care-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Built around your life</span>
              <h2 id="care-title" className={styles.h2}>Care that fits in your pocket</h2>
              <p className={styles.intro}>No phone trees, no waiting rooms unless you need one, and no awkward conversations at the front desk.</p>
            </Reveal>
            <ul className={styles.grid}>
              {CARE.map((c, i) => (
                <li key={c.title}>
                  <Reveal delay={i * 80}>
                    <div className={`${styles.tile} ${fy.artTile}`}>
                      <Image src={c.art} alt="" width={240} height={180} unoptimized className={fy.art} />
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Story ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="story-title">
          <div className={`${styles.wrap} ${styles.story}`}>
            <Reveal>
              <div className={styles.storyPhoto} data-white-bg>
                <Image src="/care/dental.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>No awkwardness</span>
              <h2 id="story-title" className={styles.h2}>Ask anything. Seriously.</h2>
              <blockquote className={styles.quote}>“I finally asked the thing I&apos;d been too embarrassed to ask for a year.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>Same day</strong>replies to messages</li>
                <li><strong>1</strong>clinician who knows you</li>
                <li><strong>0</strong>hidden fees</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Budget & privacy ============ */}
        <section className={styles.section} aria-labelledby="included-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="included-title" className={styles.h2}>Works on a student budget</h2>
              <p className={styles.intro}>You see the full price before you book, and you only pay for what you use.</p>
              <ul className={styles.checks}>
                <li>Pay per visit, or add a membership when it makes sense</li>
                <li>Chat for quick questions, video when you need to talk it through</li>
                <li>Prescriptions sent to a pharmacy near you</li>
                <li>Evening and weekend slots that work around lectures and shifts</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>Your privacy</span>
                <h3>Your health is your business</h3>
                <p>Your records are shared only with your permission. Not with employers, not with colleges.</p>
                <ul>
                  <li>Discreet billing and packaging</li>
                  <li>You choose who sees what</li>
                  <li>Delete your data whenever you like</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ How it works ============ */}
        <section id="how-it-works" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="how-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="how-title" className={styles.h2}>How it works</h2>
              <ol className={styles.steps}>
                <li><h3>Tell us what&apos;s up</h3><p>A few quick questions, in your own words. No forms that feel like an exam.</p></li>
                <li><h3>Talk to a clinician</h3><p>By chat or video, and in person only when you need to be examined.</p></li>
                <li><h3>Get a plan</h3><p>Treatment, prescriptions and a follow-up, all in the app with the price shown.</p></li>
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
                  <summary>Will my parents find out?</summary>
                  <p>If you&apos;re 18 or over, your care is confidential and your records are shared only with your permission. If you&apos;re under 18, some care needs a parent or guardian&apos;s consent, and we&apos;ll tell you upfront when that applies.</p>
                </details>
                <details>
                  <summary>Can I use this alongside college or work health cover?</summary>
                  <p>Yes. We&apos;ll give you itemised bills you can submit to your insurer or employer scheme.</p>
                </details>
                <details>
                  <summary>What if I&apos;m in crisis?</summary>
                  <p>If you&apos;re thinking about harming yourself or you&apos;re in danger, call your local emergency number or go to the nearest emergency department now. You can also reach Tele-MANAS, India&apos;s free mental health helpline, on 14416.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Popular with Gen Z</h2>
            <RelatedCare slugs={["mental-health", "skincare", "sexual-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Your health, on your terms</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Get started</Link>
                <Link className={styles.btnLink} href="/services">Browse all care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
