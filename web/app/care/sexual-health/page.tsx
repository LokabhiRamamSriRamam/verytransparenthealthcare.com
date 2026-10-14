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
  title: "Sexual health | Very Transparent Healthcare",
  description:
    "Private, judgement-free sexual health care — STI testing, treatment, PrEP, contraception and advice, with clear prices upfront.",
};

export default function SexualHealthPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="indigo">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/#explore">Care</Link> / Sexual health
            </p>
            <span className={styles.label}>Sexual health</span>
            <h1 id="page-title" className={styles.title}>
              Private, <em>judgement-free</em> care
            </h1>
            <p className={styles.lede}>Discreet testing, quick results and no judgement.</p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Get tested privately
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                How it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Discreet home kits</li>
              <li>LGBTQIA+ inclusive</li>
              <li>Prices shown upfront</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/care/sexual-health.png"
                alt="A couple standing close together"
                fill
                preload
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">🔒</span>
              <span>
                <strong>Results in your app</strong>
                never in a letter home
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Plain packaging</strong>
                for every kit
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Concerns ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="concerns-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="concerns-title" className={styles.h2}>How can we help today?</h2>
              <ConcernPicker
                concerns={[
                  {
                    label: "Routine testing",
                    title: "A regular check, no symptoms",
                    plan: [
                      "Home kit or clinic test, your choice",
                      "Results in your app, usually within days",
                      "Clinician call if anything needs treatment",
                    ],
                  },
                  {
                    label: "I have symptoms",
                    title: "Something doesn't feel right",
                    plan: [
                      "Same-week consultation",
                      "Targeted testing",
                      "Treatment and partner notification support",
                    ],
                  },
                  {
                    label: "PrEP & PEP",
                    title: "HIV prevention",
                    plan: [
                      "Eligibility and kidney function check",
                      "Prescription with regular monitoring",
                      "Urgent PEP guidance, fast",
                    ],
                  },
                  {
                    label: "Contraception",
                    title: "Prevent pregnancy your way",
                    plan: [
                      "Consultation about options",
                      "Prescription or fitting arranged",
                      "Emergency contraception advice",
                    ],
                  },
                  {
                    label: "Sex & intimacy",
                    title: "Desire, pain or performance",
                    plan: [
                      "Private conversation with a clinician",
                      "Physical and hormonal checks if needed",
                      "Treatment or therapy referral",
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
                <Image src="/care/sexual-health.png" alt="" fill sizes="(max-width: 900px) 90vw, 520px" className={styles.storyImg} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Zero judgement</span>
              <h2 id="story-title" className={styles.h2}>Healthy is normal. So is asking.</h2>
              <blockquote className={styles.quote}>“Easy, fast, and I didn&apos;t feel awkward once.”</blockquote>
              <ul className={styles.stats}>
                <li><strong>100%</strong>confidential</li>
                <li><strong>Home</strong>or clinic testing</li>
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
                <li><h3>Choose your test</h3><p>A short questionnaire recommends the right tests for you.</p></li>
                <li><h3>Test at home or in clinic</h3><p>Kits arrive in plain packaging; results appear securely in your app.</p></li>
                <li><h3>Get treated</h3><p>If needed, a clinician calls you and arranges treatment quickly.</p></li>
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
                  <summary>How often should I get tested?</summary>
                  <p>It depends on your situation — commonly once a year, or more often with new or multiple partners. We&apos;ll suggest a schedule.</p>
                </details>
                <details>
                  <summary>I think I was exposed to HIV — what now?</summary>
                  <p>Seek care immediately. PEP must be started as soon as possible, ideally within 72 hours, so go to an emergency department or sexual health clinic now.</p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Often explored together</h2>
            <RelatedCare slugs={["womens-health", "mens-health", "mental-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Peace of mind, privately</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Get tested privately</Link>
                <Link className={styles.btnLink} href="/#explore">Explore other care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
