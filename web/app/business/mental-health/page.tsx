import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import RelatedCare from "@/components/care/RelatedCare";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../../care/care.module.css";
import biz from "../business.module.css";

export const metadata: Metadata = {
  title: "Workplace mental health | Very Transparent Healthcare",
  description:
    "Therapy and psychiatry for your team with appointments days away, not months — plus manager training, and reporting that never identifies a person.",
};

const SUPPORT = [
  {
    art: "/business/mind/therapy.svg",
    title: "Therapy that starts quickly",
    text: "Matched to a therapist in days, by video or in person, with the same person each session.",
  },
  {
    art: "/business/mind/psychiatry.svg",
    title: "Psychiatry when it's needed",
    text: "Assessment, medication and reviews for anxiety, depression, ADHD and bipolar disorder.",
  },
  {
    art: "/business/mind/crisis.svg",
    title: "Support in a crisis",
    text: "A same-day route to a clinician, and a clear handover to emergency services when that is the right call.",
  },
  {
    art: "/business/mind/training.svg",
    title: "Training for managers",
    text: "Short, practical sessions on spotting difficulty early and having the first conversation well.",
  },
];

export default function BusinessMentalHealthPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="lavender">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/business">For Business</Link> / Mental Health
            </p>
            <span className={styles.label}>Workplace mental health</span>
            <h1 id="page-title" className={styles.title}>
              Support your team can <em>book this week</em>
            </h1>
            <p className={styles.lede}>
              Most workplace mental health cover is a phone number and a waiting list. Ours is a therapist with
              appointments free in days, psychiatry behind it, and nothing about any of it reaching you.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/business#talk-to-us">
                Talk to us
              </Link>
              <Link className={styles.btnLink} href="#confidentiality">
                How confidentiality works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Days, not months</li>
              <li>Same therapist each time</li>
              <li>Nothing reported to you</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/business/hero/mind.svg"
                alt="A person in a therapy session, with a calendar showing an appointment four days away"
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
                <strong>4 days</strong>
                median wait for a first session
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>You are never told</strong>
                who used it, or why
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Why most EAPs fail ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="why-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>The problem</span>
              <h2 id="why-title" className={styles.h2}>Why most programmes go unused</h2>
              <p className={styles.intro}>
                Staff are given a number, get triaged by someone they will never speak to again, and are offered
                a slot weeks out with whoever is free. By then the moment they were ready to ask for help has
                passed. Two things fix it: speed, and seeing the same clinician each time.
              </p>
            </Reveal>
            <ul className={styles.grid}>
              {SUPPORT.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 80}>
                    <div className={`${styles.tile} ${biz.artTile}`}>
                      <Image src={s.art} alt="" width={240} height={180} unoptimized className={biz.art} />
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Comparison ============ */}
        <section className={styles.section} aria-labelledby="compare-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="compare-title" className={styles.h2}>How it compares with a typical EAP</h2>
              <p className={styles.intro}>
                The honest version. A traditional EAP is cheaper per head — it is also the reason take-up sits
                near one in twenty.
              </p>
              <div className={biz.tableWrap}>
                <table className={biz.table}>
                  <caption className="sr-only">
                    Comparison of a typical employee assistance programme with Very Transparent Healthcare
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">Typical EAP</th>
                      <th scope="col">Very Transparent Healthcare</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Wait for a first session</th>
                      <td className={biz.no}>2–6 weeks</td>
                      <td className={biz.yes}>About 4 days</td>
                    </tr>
                    <tr>
                      <th scope="row">Same therapist each session</th>
                      <td className={biz.no}>Often not</td>
                      <td className={biz.yes}>Always</td>
                    </tr>
                    <tr>
                      <th scope="row">Sessions included</th>
                      <td className={biz.no}>3–6, then referred out</td>
                      <td className={biz.yes}>8 a year, extendable</td>
                    </tr>
                    <tr>
                      <th scope="row">Psychiatry and medication</th>
                      <td className={biz.no}>Not included</td>
                      <td className={biz.yes}>Included</td>
                    </tr>
                    <tr>
                      <th scope="row">Typical take-up</th>
                      <td className={biz.no}>3–5%</td>
                      <td className={biz.yes}>About 30%</td>
                    </tr>
                    <tr>
                      <th scope="row">Cost per employee</th>
                      <td className={biz.no}>Lower</td>
                      <td className={biz.yes}>Higher, and used</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Confidentiality ============ */}
        <section id="confidentiality" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="conf-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="conf-title" className={styles.h2}>Confidentiality, spelled out</h2>
              <p className={styles.intro}>
                People only use mental health support they trust. So we tell your team the limits in plain
                language before they book, and we hold to them.
              </p>
              <ul className={styles.checks}>
                <li>You are never told who booked, or what was discussed</li>
                <li>Sessions do not appear in any report you receive</li>
                <li>Notes are the clinician&apos;s and the patient&apos;s, not yours</li>
                <li>Leaving the company does not end care mid-course</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>The one exception</span>
                <h3>When there is a risk to life</h3>
                <p>
                  If someone is at immediate risk of serious harm, a clinician may involve emergency services or
                  a named contact. That is a clinical duty, and it still does not route through you.
                </p>
                <ul>
                  <li>Explained to every patient upfront</li>
                  <li>Clinical judgement, not an HR process</li>
                  <li>Shared with emergency services, not the employer</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ How it works ============ */}
        <section className={styles.section} aria-labelledby="how-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="how-title" className={styles.h2}>How your team gets started</h2>
              <ol className={styles.steps}>
                <li>
                  <h3>They reach out</h3>
                  <p>In the app, in their own words. No manager approval and no HR form.</p>
                </li>
                <li>
                  <h3>Matched in days</h3>
                  <p>A short intake with a clinician, then matched to a therapist who fits what they need.</p>
                </li>
                <li>
                  <h3>Care continues</h3>
                  <p>The same therapist each session, with psychiatry alongside if that would help.</p>
                </li>
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="faq-title" className={styles.h2}>Questions employers ask</h2>
              <div className={styles.faq}>
                <details>
                  <summary>Can we see who is using it?</summary>
                  <p>
                    No. You see how many people used mental health support in total, and only where the group is
                    large enough that no one could be identified. Never who, and never why.
                  </p>
                </details>
                <details>
                  <summary>What happens after the eight sessions?</summary>
                  <p>
                    If more would help, the therapist says so and we extend, either on your plan or privately at
                    a price shown upfront. Nobody is cut off mid-treatment.
                  </p>
                </details>
                <details>
                  <summary>Can managers refer someone?</summary>
                  <p>
                    A manager can encourage someone to book, and our training covers how to do that well. They
                    cannot book on a person&apos;s behalf or be told whether they did.
                  </p>
                </details>
                <details>
                  <summary>What about someone in crisis right now?</summary>
                  <p>
                    If a person is in immediate danger, call your local emergency number. Tele-MANAS, India&apos;s
                    free mental health helpline, is on 14416 and answers at any hour.
                  </p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={styles.section} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>The care behind it</h2>
            <RelatedCare slugs={["mental-health", "womens-health", "mens-health"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Mental health support that gets used</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/business#talk-to-us">Talk to us</Link>
                <Link className={styles.btnLink} href="/business/results">See the results <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
