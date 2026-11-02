import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import { DOCTORS, SPECIALTIES, VETTING } from "@/lib/doctors";
import styles from "../care/care.module.css";
import d from "./doctors.module.css";

export const metadata: Metadata = {
  title: "Our doctors panel | Very Transparent Healthcare",
  description:
    "Meet the clinicians behind your care — how we verify every credential, how they are paid, and why that means nobody is ever sold treatment they don't need.",
};

export default function DoctorsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="indigo">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / Doctors Panel
            </p>
            <span className={styles.label}>Doctors panel</span>
            <h1 id="page-title" className={styles.title}>
              The clinicians <em>behind your care</em>
            </h1>
            <p className={styles.lede}>
              Every doctor on our panel is verified at source, interviewed by our senior clinicians, and paid a
              salary — never a commission. So the advice you get is the advice you need.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/login">
                Book with a doctor
              </Link>
              <Link className={styles.btnLink} href="#vetting">
                How we vet them <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Council-verified</li>
              <li>Salaried, not commissioned</li>
              <li>Reviewed quarterly</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/doctors/hero/panel.svg"
                alt="Five doctors from the panel standing together"
                fill
                preload
                unoptimized
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Every credential checked</strong>
                with the medical council
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">₹</span>
              <span>
                <strong>Paid a salary</strong>
                never per prescription
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Why it matters ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="why-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <span className={styles.label}>Why this matters</span>
              <h2 id="why-title" className={styles.h2}>How a doctor is paid changes what you are told</h2>
              <p className={styles.intro}>
                In much of private healthcare, a clinician earns more by ordering more — another scan, another
                procedure, a longer course. We removed that incentive entirely.
              </p>
              <ul className={styles.checks}>
                <li>Salaried clinicians, with no per-treatment bonus</li>
                <li>No commission on tests, scans or prescriptions</li>
                <li>No targets for appointment volume</li>
                <li>No payments from pharmaceutical companies</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>What this buys you</span>
                <h3>&ldquo;You don&apos;t need anything&rdquo; is a normal answer</h3>
                <p>
                  A doctor who gains nothing from treating you is free to tell you when watchful waiting is the
                  right call. That is the whole point of the panel.
                </p>
                <ul>
                  <li>Second opinions from the panel, free</li>
                  <li>Written reasoning with every plan</li>
                  <li>You can change clinician at any time</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Specialties ============ */}
        <section className={styles.section} aria-labelledby="specialties-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Areas of care</span>
              <h2 id="specialties-title" className={styles.h2}>Specialties on the panel</h2>
              <p className={styles.intro}>
                More than 110 clinicians across these areas, with cover on evenings and weekends.
              </p>
              <ul className={d.specialties}>
                {SPECIALTIES.map((s) => (
                  <li key={s.name}>
                    <Link className={d.specialty} href={s.href}>
                      <Image
                        src={s.icon}
                        alt=""
                        width={96}
                        height={96}
                        unoptimized
                        className={d.specialtyIcon}
                      />
                      <span className={d.specialtyName}>{s.name}</span>
                      <span className={d.specialtyCount}>{s.count} clinicians</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Meet the panel ============ */}
        <section id="panel" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="panel-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Meet the panel</span>
              <h2 id="panel-title" className={styles.h2}>Some of the people who&apos;ll look after you</h2>
              <p className={styles.intro}>
                A selection from the panel. You are matched to the clinician who fits what you need, and you see
                the same person at each visit.
              </p>
            </Reveal>
            <ul className={d.panel}>
              {DOCTORS.map((doc, i) => (
                <li key={doc.name}>
                  <Reveal delay={(i % 4) * 70}>
                    <article className={d.doc}>
                      <Image
                        src={doc.portrait}
                        alt=""
                        width={160}
                        height={160}
                        unoptimized
                        className={d.docPortrait}
                      />
                      <h3 className={d.docName}>{doc.name}</h3>
                      <p className={d.docRole}>{doc.role}</p>
                      <p className={d.docMeta}>
                        {doc.credentials}
                        <br />
                        {doc.years} years in practice
                      </p>
                      <ul className={d.docTags}>
                        {doc.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Vetting ============ */}
        <section id="vetting" className={styles.section} aria-labelledby="vetting-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Our standard</span>
              <h2 id="vetting-title" className={styles.h2}>How a clinician joins the panel</h2>
              <p className={styles.intro}>
                Roughly one in six applicants makes it through. Here is what they go through, and what keeps
                them on.
              </p>
            </Reveal>
            <ul className={d.vetting}>
              {VETTING.map((v, i) => (
                <li key={v.title}>
                  <Reveal delay={i * 80}>
                    <div className={d.vetStep}>
                      <Image src={v.art} alt="" width={240} height={180} unoptimized className={d.vetArt} />
                      <h3>{v.title}</h3>
                      <p>{v.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Join us ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="join-title">
          <div className={`${styles.wrap} ${d.join}`}>
            <Reveal>
              <Image
                src="/doctors/join.svg"
                alt="A doctor writing on a tablet as notes turn into tidy records"
                width={240}
                height={180}
                unoptimized
                className={d.joinArt}
              />
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>For clinicians</span>
              <h2 id="join-title" className={styles.h2}>Practise medicine, not paperwork</h2>
              <p className={styles.intro}>
                If you have ever wanted to give a patient the honest answer without worrying what it does to
                your numbers, you will recognise why we built this.
              </p>
              <ul className={styles.checks}>
                <li>A salary, with no volume or prescribing targets</li>
                <li>Proper consultation lengths — 15 minutes minimum</li>
                <li>Notes and admin handled by the platform</li>
                <li>Choose your own clinic, remote or hybrid pattern</li>
              </ul>
              <div className={styles.ctaRow}>
                <a className={styles.btnPrimary} href="mailto:clinicians@verytransparenthealthcare.com">
                  Apply to join
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="faq-title" className={styles.h2}>Questions about our doctors</h2>
              <div className={styles.faq}>
                <details>
                  <summary>Can I choose my doctor?</summary>
                  <p>
                    Yes. We suggest a match based on what you need, and you can pick someone else from the panel
                    or change later without explaining why.
                  </p>
                </details>
                <details>
                  <summary>Will I see the same person each time?</summary>
                  <p>
                    For ongoing care, yes — that continuity is most of what makes care good. For an urgent
                    same-day problem you may see whoever is on, and your notes go with you.
                  </p>
                </details>
                <details>
                  <summary>Can I check a doctor&apos;s registration myself?</summary>
                  <p>
                    Please do. Every clinician&apos;s registration number is on their profile in the app, and you
                    can verify it on the state medical council register.
                  </p>
                </details>
                <details>
                  <summary>What if I&apos;m unhappy with my care?</summary>
                  <p>
                    Tell us and a senior clinician reviews it within two working days. You can request a second
                    opinion from the panel at no cost, whatever the outcome.
                  </p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Care from someone with no reason to oversell it</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Book an appointment</Link>
                <Link className={styles.btnLink} href="/services">Browse all care <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
