import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../../care/care.module.css";
import biz from "../business.module.css";

export const metadata: Metadata = {
  title: "Results for employers | Very Transparent Healthcare",
  description:
    "What changes when care is easy to reach: take-up, waiting times, sick days and spend — measured across the teams we look after, and reported to you every month.",
};

const METRICS = [
  {
    value: "74%",
    label: "of employees use it",
    note: "Enrolled staff who booked care in their first year, against an industry norm nearer 20%.",
  },
  {
    value: "1.8 days",
    label: "to a first appointment",
    note: "Median wait for a primary care consultation, including evenings and weekends.",
  },
  {
    value: "31%",
    label: "fewer short-term sick days",
    note: "Across teams in their second year with us, compared with their own prior-year baseline.",
  },
  {
    value: "₹0",
    label: "in surprise charges",
    note: "Every consult, test and treatment is priced before it happens. Your monthly bill matches your plan.",
  },
];

export default function BusinessResultsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="purple">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/business">For Business</Link> / Results
            </p>
            <span className={styles.label}>Results</span>
            <h1 id="page-title" className={styles.title}>
              What changes when care is <em>easy to reach</em>
            </h1>
            <p className={styles.lede}>
              A benefit nobody can book is a line in a budget. Here is what we measure, what it has moved, and
              exactly how we work the numbers out.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/business#talk-to-us">
                Talk to us
              </Link>
              <Link className={styles.btnLink} href="#method">
                How we measure <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/business/hero/results.svg"
                alt="A dashboard showing rising take-up and falling waiting times"
                fill
                preload
                unoptimized
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">↑</span>
              <span>
                <strong>74% take-up</strong>
                in the first year
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">↓</span>
              <span>
                <strong>1.8 days</strong>
                to a first appointment
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Metrics ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="metrics-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>The numbers</span>
              <h2 id="metrics-title" className={styles.h2}>Measured across the teams we look after</h2>
              <p className={styles.intro}>
                These are pooled figures from employer accounts live with us for a full year or more. Your own
                numbers will differ — we report yours monthly, not these.
              </p>
            </Reveal>
            <ul className={biz.metrics} style={{ marginTop: 32 }}>
              {METRICS.map((m, i) => (
                <li key={m.label}>
                  <Reveal delay={i * 80}>
                    <div className={biz.metric}>
                      <span className={biz.metricValue}>{m.value}</span>
                      <span className={biz.metricLabel}>{m.label}</span>
                      <span className={biz.metricNote}>{m.note}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Case study ============ */}
        <section className={styles.section} aria-labelledby="case-title">
          <div className={`${styles.wrap} ${styles.story}`}>
            <Reveal>
              <figure className={biz.chartCard}>
                <figcaption>
                  <h3 className={biz.chartTitle}>Share of staff who used their cover</h3>
                  <p className={biz.chartNote}>
                    The year before switching, against each year with us.
                  </p>
                </figcaption>
                {/* Values are plotted from the same figures quoted in the text */}
                <svg className={biz.chart} viewBox="0 0 300 150" role="img" aria-label="Bar chart: take-up rose from 19% before switching to 64% in year one and 81% in year two">
                  {/* gridlines */}
                  <g stroke="#EEE5FF" strokeWidth="1">
                    <line x1="30" y1="112" x2="290" y2="112" />
                    <line x1="30" y1="82" x2="290" y2="82" />
                    <line x1="30" y1="52" x2="290" y2="52" />
                    <line x1="30" y1="22" x2="290" y2="22" />
                  </g>
                  <g className={biz.chartLabel} textAnchor="end">
                    <text x="24" y="115">0%</text>
                    <text x="24" y="85">33%</text>
                    <text x="24" y="55">66%</text>
                    <text x="24" y="25">100%</text>
                  </g>

                  {/* 19% before: 0.19 * 90 = 17.1 tall */}
                  <rect className={biz.chartBar} x="56" y="94.9" width="48" height="17.1" rx="6" fill="#D8C8FF" style={{ animationDelay: "0ms" }} />
                  <text className={biz.chartValue} x="80" y="88" textAnchor="middle">19%</text>
                  <text className={biz.chartLabel} x="80" y="126" textAnchor="middle">Year before</text>

                  {/* 64%: 57.6 tall */}
                  <rect className={biz.chartBar} x="126" y="54.4" width="48" height="57.6" rx="6" fill="#914BFA" style={{ animationDelay: "160ms" }} />
                  <text className={biz.chartValue} x="150" y="47" textAnchor="middle">64%</text>
                  <text className={biz.chartLabel} x="150" y="126" textAnchor="middle">Year one</text>

                  {/* 81%: 72.9 tall */}
                  <rect className={biz.chartBar} x="196" y="39.1" width="48" height="72.9" rx="6" fill="#5C3FD0" style={{ animationDelay: "320ms" }} />
                  <text className={biz.chartValue} x="220" y="32" textAnchor="middle">81%</text>
                  <text className={biz.chartLabel} x="220" y="126" textAnchor="middle">Year two</text>

                  <line x1="30" y1="112" x2="290" y2="112" stroke="#B3A4D8" strokeWidth="1.5" />
                </svg>
                <ul className={biz.chartLegend}>
                  <li><span className={biz.swatch} style={{ background: "#D8C8FF" }} aria-hidden="true" /> Previous provider</li>
                  <li><span className={biz.swatch} style={{ background: "#5C3FD0" }} aria-hidden="true" /> With us</li>
                </ul>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <span className={styles.label}>Case study</span>
              <h2 id="case-title" className={styles.h2}>A 180-person team, one year in</h2>
              <p className={styles.intro}>
                A services business whose previous cover was used by fewer than one in five staff. We replaced it
                with per-employee pricing and same-week appointments.
              </p>
              <ul className={styles.stats}>
                <li><strong>81%</strong>enrolled staff used it</li>
                <li><strong>-27%</strong>short-term absence</li>
                <li><strong>-12%</strong>total health spend</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Quote ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="quote-title">
          <div className={styles.wrap}>
            <h2 id="quote-title" className="sr-only">What our clients say</h2>
            <Reveal>
              <div className={biz.caseCard}>
                <p className={biz.caseQuote}>
                  &ldquo;The difference wasn&apos;t the price. It was that people could get an appointment the same
                  week, so they stopped putting things off until they became time off.&rdquo;
                </p>
                <p className={biz.caseBy}>
                  <strong>Head of People, 180-person services business</strong>
                  With us since 2024
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Reporting ============ */}
        <section className={styles.section} aria-labelledby="reporting-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="reporting-title" className={styles.h2}>What lands in your inbox each month</h2>
              <p className={styles.intro}>
                One report, in plain language, with the handful of figures that tell you whether the benefit is
                working.
              </p>
              <ul className={styles.checks}>
                <li>Take-up: how many of your team have used it</li>
                <li>Access: median wait to a first appointment</li>
                <li>Mix: the broad kinds of care being used, anonymised</li>
                <li>Spend: what you were billed, against your plan</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>Never reported</span>
                <h3>Nothing that identifies a person</h3>
                <p>
                  Reporting is aggregate only. We suppress any group small enough to make someone identifiable.
                </p>
                <ul>
                  <li>No names, no diagnoses</li>
                  <li>Groups under 10 are not broken out</li>
                  <li>Your team is told exactly this when they join</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Method ============ */}
        <section id="method" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="method-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Method</span>
              <h2 id="method-title" className={styles.h2}>How we work these numbers out</h2>
              <p className={styles.intro}>
                We would rather show you the method than a bigger number. If a figure cannot be explained in a
                sentence, we do not publish it.
              </p>
              <div className={styles.faq}>
                <details>
                  <summary>Where do these figures come from?</summary>
                  <p>
                    From our own booking and billing records, pooled across employer accounts that have been live
                    for at least twelve months. They are not from a third-party survey or a modelled projection.
                  </p>
                </details>
                <details>
                  <summary>What is the absence figure compared against?</summary>
                  <p>
                    Each employer&apos;s own prior-year short-term absence, as reported by them, against their
                    second year with us. It is a before-and-after within the same organisation, not a comparison
                    with other companies, so it cannot separate our effect from everything else that changed.
                  </p>
                </details>
                <details>
                  <summary>Is take-up the same as being well?</summary>
                  <p>
                    No. Take-up tells you people can reach care, which is the thing most cover fails at. It does
                    not by itself tell you health outcomes improved, and we do not claim it does.
                  </p>
                </details>
                <details>
                  <summary>Will you share a reference?</summary>
                  <p>
                    Yes, where the client has agreed. Ask us and we will introduce you to an employer of a
                    similar size.
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
              <h2 id="closing-title" className={styles.h2}>See what it would look like for your team</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/business#talk-to-us">Get a written quote</Link>
                <Link className={styles.btnLink} href="/business">Back to overview <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
