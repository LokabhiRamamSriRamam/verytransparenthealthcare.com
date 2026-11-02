import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../care/care.module.css";
import biz from "./business.module.css";

export const metadata: Metadata = {
  title: "Healthcare for your team | Very Transparent Healthcare",
  description:
    "Give your team primary care, mental health and specialist access with per-employee pricing shown upfront — no brokers, no surprise renewals.",
};

const PILLARS = [
  {
    art: "/business/pillars/primary-care.svg",
    title: "Everyday primary care",
    text: "Video and in-person visits for the illnesses and worries that would otherwise cost your team a day off.",
  },
  {
    art: "/business/pillars/mental-health.svg",
    title: "Mental health, properly resourced",
    text: "Therapy and psychiatry with real appointment availability, not a helpline that books six weeks out.",
  },
  {
    art: "/business/pillars/conditions.svg",
    title: "Long-term conditions",
    text: "Diabetes, blood pressure and weight care that keeps people well instead of waiting for a claim.",
  },
  {
    art: "/business/pillars/screening.svg",
    title: "Screening & health checks",
    text: "Annual checks with results explained in plain language, and follow-up booked in the same place.",
  },
];

export default function BusinessPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="indigo">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / For Business
            </p>
            <span className={styles.label}>For Business</span>
            <h1 id="page-title" className={styles.title}>
              Healthcare your team <em>can actually use</em>
            </h1>
            <p className={styles.lede}>
              Primary care, mental health and specialist access for your people — with per-employee pricing shown
              upfront, no broker in the middle, and no surprise at renewal.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="#talk-to-us">
                Talk to us
              </Link>
              <Link className={styles.btnLink} href="#pricing">
                See pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>Per-employee pricing</li>
              <li>No broker fees</li>
              <li>Cancel any month</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/business/hero/team.svg"
                alt="A team of five colleagues standing together under a care umbrella"
                fill
                preload
                unoptimized
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">₹</span>
              <span>
                <strong>One price per employee</strong>
                billed monthly, nothing hidden
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>You never see their records</strong>
                only anonymised, aggregate use
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Why ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="why-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>The problem</span>
              <h2 id="why-title" className={styles.h2}>Most team health cover goes unused</h2>
              <p className={styles.intro}>
                Your people are covered on paper, then wait weeks for an appointment, give up, and pay out of
                pocket anyway. You renew at a higher premium for a benefit nobody could get to. We built the
                opposite: care your team books today, at a price you both know in advance.
              </p>
            </Reveal>
            <ul className={styles.grid}>
              {PILLARS.map((p, i) => (
                <li key={p.title}>
                  <Reveal delay={i * 80}>
                    <div className={`${styles.tile} ${biz.artTile}`}>
                      <Image src={p.art} alt="" width={240} height={180} unoptimized className={biz.art} />
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Pricing ============ */}
        <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Pricing</span>
              <h2 id="pricing-title" className={styles.h2}>One price per employee, per month</h2>
              <p className={styles.intro}>
                No joining fee, no broker commission, and no minimum contract. Change plan or leave with a
                month&apos;s notice.
              </p>
              <ul className={biz.tiers}>
                <li className={biz.tier}>
                  <span className={biz.tierTag}>Essentials</span>
                  <h3>Core care</h3>
                  <p className={biz.price}>₹499 <span>/ employee / month</span></p>
                  <p>Unlimited primary care so an everyday illness never costs a working day.</p>
                  <ul className={biz.tierList}>
                    <li>Unlimited video consultations</li>
                    <li>Messaging with a clinician</li>
                    <li>Prescriptions and sick notes</li>
                    <li>Annual health check</li>
                  </ul>
                  <Link className={biz.tierCta} href="#talk-to-us">Talk to us</Link>
                </li>
                <li className={`${biz.tier} ${biz.tierFeatured}`}>
                  <span className={biz.tierTag}>Most chosen</span>
                  <h3>Core + mind</h3>
                  <p className={biz.price}>₹899 <span>/ employee / month</span></p>
                  <p>Everything in Core, plus therapy and psychiatry with appointments people can actually get.</p>
                  <ul className={biz.tierList}>
                    <li>Everything in Core care</li>
                    <li>8 therapy sessions a year</li>
                    <li>Psychiatry reviews</li>
                    <li>Manager mental health training</li>
                  </ul>
                  <Link className={biz.tierCta} href="/business/mental-health">See mental health</Link>
                </li>
                <li className={biz.tier}>
                  <span className={biz.tierTag}>Complete</span>
                  <h3>Whole family</h3>
                  <p className={biz.price}>₹1,699 <span>/ employee / month</span></p>
                  <p>Cover partners and children too, with specialist access and long-term condition care.</p>
                  <ul className={biz.tierList}>
                    <li>Everything in Core + mind</li>
                    <li>Partner and children covered</li>
                    <li>Specialist referrals</li>
                    <li>Long-term condition packages</li>
                  </ul>
                  <Link className={biz.tierCta} href="#talk-to-us">Talk to us</Link>
                </li>
              </ul>
              <p className={biz.formNote} style={{ marginTop: 18 }}>
                Prices are per enrolled employee and exclude GST. Teams over 500 people get bespoke pricing — tell
                us your headcount below.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ What you see / don't see ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="privacy-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="privacy-title" className={styles.h2}>What you see, and what you never will</h2>
              <p className={styles.intro}>
                You get the reporting you need to run the benefit. You never get anything that would tell you
                about an individual&apos;s health.
              </p>
              <ul className={styles.checks}>
                <li>Take-up and usage rates across the team</li>
                <li>Anonymised, aggregate themes — never names</li>
                <li>Spend per month against your plan</li>
                <li>A named account manager who knows your account</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>Confidentiality</span>
                <h3>Their care is theirs alone</h3>
                <p>
                  Your employees&apos; records belong to them. Nothing clinical reaches you, and we tell them so in
                  plain language when they join.
                </p>
                <ul>
                  <li>No diagnoses, ever</li>
                  <li>No attendance or claim detail</li>
                  <li>Groups under 10 aren&apos;t reported on</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ How to roll it out ============ */}
        <section className={styles.section} aria-labelledby="how-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="how-title" className={styles.h2}>Live in about two weeks</h2>
              <ol className={styles.steps}>
                <li>
                  <h3>Tell us your team</h3>
                  <p>Headcount, locations and what you cover today. We come back with a written quote.</p>
                </li>
                <li>
                  <h3>We set it up</h3>
                  <p>Upload your team list and we handle onboarding emails, consent and the welcome session.</p>
                </li>
                <li>
                  <h3>Your team books care</h3>
                  <p>They sign in and book from day one. You get a usage report at the end of each month.</p>
                </li>
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ============ Explore ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="explore-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="explore-title" className={styles.h2}>Go deeper</h2>
              <ul className={styles.grid}>
                <li>
                  <Link className={styles.tile} href="/business/results" style={{ display: "block", textDecoration: "none" }}>
                    <h3>Results</h3>
                    <p>What changes when care is easy to reach — the numbers from teams already with us.</p>
                  </Link>
                </li>
                <li>
                  <Link className={styles.tile} href="/business/mental-health" style={{ display: "block", textDecoration: "none" }}>
                    <h3>Mental health</h3>
                    <p>How we staff therapy and psychiatry so appointments are days away, not months.</p>
                  </Link>
                </li>
                <li>
                  <Link className={styles.tile} href="/business/small-businesses" style={{ display: "block", textDecoration: "none" }}>
                    <h3>For small businesses</h3>
                    <p>From two people upwards, with no minimum headcount and month-to-month billing.</p>
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Talk to us ============ */}
        <section id="talk-to-us" className={styles.section} aria-labelledby="talk-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <span className={styles.label}>Talk to us</span>
              <h2 id="talk-title" className={styles.h2}>Get a written quote</h2>
              <p className={styles.intro}>
                Tell us about your team and we&apos;ll come back within two working days with a price per employee
                and what&apos;s included. No sales sequence, no broker.
              </p>
              <ul className={styles.checks}>
                <li>A real quote, in writing, not a &ldquo;from&rdquo; price</li>
                <li>A walkthrough with the clinician who&apos;d lead your account</li>
                <li>No obligation and no follow-up unless you ask</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              {/* No CRM is wired up yet, so this opens the visitor's mail client
                  with the enquiry rather than silently dropping it. */}
              <form className={biz.form} action="mailto:business@verytransparenthealthcare.com" method="post" encType="text/plain">
                <div className={biz.formRow}>
                  <p className={biz.field}>
                    <label htmlFor="name">Your name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required />
                  </p>
                  <p className={biz.field}>
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" autoComplete="organization" required />
                  </p>
                </div>
                <div className={biz.formRow}>
                  <p className={biz.field}>
                    <label htmlFor="email">Work email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </p>
                  <p className={biz.field}>
                    <label htmlFor="headcount">Team size</label>
                    <select id="headcount" name="headcount" defaultValue="2-25">
                      <option value="2-25">2–25 people</option>
                      <option value="26-100">26–100 people</option>
                      <option value="101-500">101–500 people</option>
                      <option value="500+">More than 500</option>
                    </select>
                  </p>
                </div>
                <p className={biz.field}>
                  <label htmlFor="message">What are you looking for?</label>
                  <textarea id="message" name="message" placeholder="What you cover today, and what isn't working." />
                </p>
                <button type="submit" className={styles.btnPrimary}>Request a quote</button>
                <p className={biz.formNote}>
                  We use your details only to answer this enquiry. See our <Link href="/privacy">privacy notice</Link>.
                </p>
              </form>
            </Reveal>
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>Healthcare your team will actually use</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="#talk-to-us">Talk to us</Link>
                <Link className={styles.btnLink} href="/services">See what&apos;s covered <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
