import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/care/Reveal";
import { DOCTORS_LINK } from "@/lib/navigation";
import { VO_COMPARE, VO_FAQ, VO_FEATURES, VO_PORTAL_POINTS, VO_RIPPLE, type VoIconName } from "@/lib/vital-os";
import styles from "./vital-os.module.css";

export const metadata: Metadata = {
  title: "Vital OS for doctors | Very Transparent Healthcare",
  description:
    "Keep your pen, lose the paperwork. Vital OS is a tablet-and-stylus clinic system: write as you always have, and the health record, prescriptions, labs, billing and patient portal update themselves.",
};

const DEMO_HREF = DOCTORS_LINK.href;

function Icon({ name, className }: { name: VoIconName; className?: string }) {
  return (
    <svg className={className ?? styles.icon} aria-hidden="true">
      <use href={`/vital-os/icons/sprite.svg#vo-${name}`} />
    </svg>
  );
}

function CompareCell({ value }: { value: boolean | string }) {
  if (value === true) return <span className={styles.yes}><span className="sr-only">Yes</span></span>;
  if (value === false) return <span className={styles.no}><span className="sr-only">No</span></span>;
  return <span className={styles.partial}>{value}</span>;
}

export default function VitalOsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div className={styles.heroText}>
            <span className={styles.label}>
              <Image src="/vital-os/brand/vital-os-mark.svg" alt="" width={22} height={22} unoptimized />
              Vital OS · for doctors and clinics
            </span>
            <h1 id="page-title" className={styles.title}>
              Keep your pen. <em>Lose the paperwork.</em>
            </h1>
            <p className={styles.lede}>
              Vital OS is a clinic system built around a tablet and a stylus. You write notes and prescriptions exactly
              as you do today. The health record, e-prescription, lab orders, bill and patient portal fill themselves in.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href={DEMO_HREF}>
                Book a demo
              </Link>
              <Link className={styles.btnLink} href="#how-it-works">
                See it work <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>No typing</li>
              <li>Patient portal included</li>
              <li>Works offline</li>
            </ul>
          </div>

          <div className={styles.heroStage}>
            <span className={styles.heroGlow} aria-hidden="true" />
            <Image
              className={styles.heroArt}
              src="/vital-os/hero/pen-to-record.svg"
              alt="A doctor handwrites a consultation note on the Vital OS tablet. Each line becomes a coded record, an e-prescription, a lab order and a follow-up booking, and the patient's portal updates."
              width={1200}
              height={820}
              preload
              unoptimized
            />
          </div>
        </section>

        {/* ============ The problem ============ */}
        <section className={`${styles.section} ${styles.sectionWhite}`} aria-labelledby="problem-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.head}>
                <span className={styles.label}>The problem</span>
                <h2 id="problem-title" className={styles.h2}>
                  Medicine is one job. <em>Paperwork became a second.</em>
                </h2>
              </div>
            </Reveal>
            <div className={styles.beforeAfter}>
              <Reveal>
                <figure className={`${styles.baCard} ${styles.baBefore}`}>
                  <Image src="/vital-os/story/before-paperwork.svg" alt="A doctor typing at a computer with their back to a waiting patient, paperwork piled on the desk" width={360} height={180} unoptimized className={styles.baArt} />
                  <figcaption>
                    <h3>Today</h3>
                    <ul>
                      <li>Typing while your patient talks to the back of your screen</li>
                      <li>The same details entered in the register, the software and the bill</li>
                      <li>Notes finished after the last patient has gone home</li>
                    </ul>
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <figure className={`${styles.baCard} ${styles.baAfter}`}>
                  <Image src="/vital-os/story/after-vital-os.svg" alt="A doctor facing a seated patient, writing on a tablet while record cards update beside them" width={360} height={180} unoptimized className={styles.baArt} />
                  <figcaption>
                    <h3>With Vital OS</h3>
                    <ul>
                      <li>Face your patient and write on the tablet</li>
                      <li>Write once, and every system updates from that one note</li>
                      <li>When the consult ends, the paperwork is already done</li>
                    </ul>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ How it works ============ */}
        <section id="how-it-works" className={styles.section} aria-labelledby="how-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.head}>
                <span className={styles.label}>How it works</span>
                <h2 id="how-title" className={styles.h2}>
                  Write it once. <em>Digital happens as a side effect.</em>
                </h2>
                <p className={styles.intro}>
                  No forms, no drop-downs, no new habits. Vital OS reads your note while you write it and puts every
                  line where it belongs.
                </p>
              </div>
              <ol className={styles.steps}>
                <li>
                  <Icon name="stylus" className={styles.stepIcon} />
                  <h3>You write</h3>
                  <p>Complaint, vitals, diagnosis, Rx, tests, follow-up. In your own hand, on a page that feels like paper.</p>
                </li>
                <li>
                  <Icon name="handwriting" className={styles.stepIcon} />
                  <h3>Vital OS reads</h3>
                  <p>Each line is recognised as you go and sorted into the right part of the record. A tap fixes anything it misreads.</p>
                </li>
                <li>
                  <Icon name="check" className={styles.stepIcon} />
                  <h3>Everything updates</h3>
                  <p>The record, prescription, lab order, bill, follow-up and patient portal are done before you put the pen down.</p>
                </li>
              </ol>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.showcase}>
                <Image
                  src="/vital-os/product/ink-to-data.svg"
                  alt="A handwritten consultation note beside the structured encounter record Vital OS builds from it, line by line, with nothing typed"
                  width={1200}
                  height={640}
                  unoptimized
                  className={styles.fluid}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ One note, six jobs ============ */}
        <section className={`${styles.section} ${styles.sectionWhite}`} aria-labelledby="ripple-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <Image
                src="/vital-os/product/one-note-ripple.svg"
                alt="One handwritten prescription on the tablet updating the health record, pharmacy, lab, billing, patient portal and reminders"
                width={1000}
                height={720}
                unoptimized
                className={styles.fluid}
              />
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>One note</span>
              <h2 id="ripple-title" className={styles.h2}>
                One stroke of the pen. <em>Six jobs done.</em>
              </h2>
              <p className={styles.intro}>
                In most clinics, a single prescription is written, typed, printed, re-entered for billing and explained
                again on the phone. With Vital OS it happens once.
              </p>
              <ul className={styles.rippleList}>
                {VO_RIPPLE.map((r) => (
                  <li key={r.title}>
                    <Icon name={r.icon} />
                    <span>
                      <strong>{r.title}</strong>
                      {r.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Features ============ */}
        <section className={styles.section} aria-labelledby="features-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.head}>
                <span className={styles.label}>What's inside</span>
                <h2 id="features-title" className={styles.h2}>
                  A complete clinic system. <em>None of the typing.</em>
                </h2>
              </div>
            </Reveal>
            <ul className={styles.features}>
              {VO_FEATURES.map((f, i) => (
                <li key={f.title}>
                  <Reveal delay={(i % 3) * 80}>
                    <div className={styles.feature}>
                      <Image src={f.art} alt="" width={240} height={180} unoptimized className={styles.featureArt} />
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Patient portal ============ */}
        <section className={`${styles.section} ${styles.portal}`} aria-labelledby="portal-title">
          <div className={`${styles.wrap} ${styles.portalGrid}`}>
            <Reveal>
              <span className={styles.label}>Patient portal</span>
              <h2 id="portal-title" className={styles.h2}>
                Your patients see <em>what you see.</em>
              </h2>
              <p className={styles.intro}>
                Every patient gets a portal with their visits, prescriptions, results and bills, explained in plain
                words. They stop calling to ask what the doctor said, and your front desk gets its day back.
              </p>
              <ul className={styles.portalPoints}>
                {VO_PORTAL_POINTS.map((p) => (
                  <li key={p.title}>
                    <Icon name={p.icon} />
                    <span>
                      <strong>{p.title}</strong>
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.phoneStage}>
                <Image
                  src="/vital-os/product/patient-portal-phone.svg"
                  alt="The patient portal on a phone: next visit, the prescription in the doctor's handwriting and typed out, lab results in plain words, and an itemised bill"
                  width={400}
                  height={820}
                  unoptimized
                  className={styles.phone}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Doctor's day ============ */}
        <section className={styles.section} aria-labelledby="day-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.head}>
                <span className={styles.label}>For you</span>
                <h2 id="day-title" className={styles.h2}>
                  Your whole day, <em>on one screen.</em>
                </h2>
                <p className={styles.intro}>
                  See who's waiting, who checked in from home, which results need your eyes and what was filed from your
                  pen, all from the tablet you write on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.showcase}>
                <Image
                  src="/vital-os/product/doctor-dashboard.svg"
                  alt="The Vital OS home screen: today's patient queue, notes filed from handwriting, lab results and portal messages"
                  width={1200}
                  height={840}
                  unoptimized
                  className={styles.fluid}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Compare ============ */}
        <section className={`${styles.section} ${styles.sectionWhite}`} aria-labelledby="compare-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.head}>
                <span className={styles.label}>Compare</span>
                <h2 id="compare-title" className={styles.h2}>
                  The best of paper <em>and software.</em>
                </h2>
                <p className={styles.intro}>
                  Paper is fast and human but goes nowhere. Typical clinic software is organised but puts a keyboard
                  between you and your patient. Vital OS keeps what's good about both.
                </p>
              </div>
              <div className={styles.tableScroll}>
                <table className={styles.compare}>
                  <thead>
                    <tr>
                      <th scope="col"><span className="sr-only">Capability</span></th>
                      <th scope="col">Paper</th>
                      <th scope="col">Typical EMR</th>
                      <th scope="col" className={styles.us}>Vital OS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VO_COMPARE.map((c) => (
                      <tr key={c.row}>
                        <th scope="row">{c.row}</th>
                        <td><CompareCell value={c.paper} /></td>
                        <td><CompareCell value={c.emr} /></td>
                        <td className={styles.us}><CompareCell value={c.vital} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Why we built it ============ */}
        <section className={styles.section} aria-labelledby="why-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.promise}>
                <Image src="/vital-os/features/shared-view.svg" alt="" width={240} height={180} unoptimized className={styles.promiseArt} />
                <div>
                  <span className={styles.label}>Why we built it</span>
                  <h2 id="why-title" className={styles.promiseTitle}>
                    Healthcare should be transparent, and built around the patient.
                  </h2>
                  <p>
                    Vital OS started as the system our own clinics run on. We built it because care gets lost in the
                    gaps between the doctor&apos;s note, the pharmacy, the lab, the bill and the patient. Close those
                    gaps and two things happen: doctors get their time back, and patients finally understand their own
                    care.
                  </p>
                  <ul>
                    <li>Patients see their records, not a summary of them</li>
                    <li>Prices and bills are itemised, always</li>
                    <li>Doctors practise medicine, not data entry</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Getting started ============ */}
        <section className={`${styles.section} ${styles.sectionWhite}`} aria-labelledby="start-title">
          <div className={styles.wrap}>
            <Reveal>
              <div className={styles.head}>
                <span className={styles.label}>Getting started</span>
                <h2 id="start-title" className={styles.h2}>
                  We set it up <em>with you.</em>
                </h2>
              </div>
              <ol className={`${styles.steps} ${styles.stepsNumbered}`}>
                <li>
                  <h3>See it with your handwriting</h3>
                  <p>In the demo you write a real note on Vital OS and watch it become a record.</p>
                </li>
                <li>
                  <h3>We configure your practice</h3>
                  <p>Your medicines, tests, fees, templates and team, set up before your first patient.</p>
                </li>
                <li>
                  <h3>Start writing</h3>
                  <p>Your first consult on Vital OS looks like any other. That&apos;s the point.</p>
                </li>
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="faq-title" className={styles.h2}>Questions doctors ask us</h2>
              <div className={styles.faq}>
                {VO_FAQ.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section id="demo" aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <Image src="/vital-os/brand/vital-os-mark.svg" alt="" width={56} height={56} unoptimized />
              <h2 id="closing-title" className={styles.h2}>
                Watch your own handwriting <em>become a record.</em>
              </h2>
              <p className={styles.intro}>A live demo on a real tablet. Bring your hardest handwriting.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href={DEMO_HREF}>
                  Book a demo
                </Link>
                <Link className={styles.btnLink} href="#how-it-works">
                  How it works <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
