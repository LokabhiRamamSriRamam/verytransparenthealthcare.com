import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../../care/care.module.css";
import biz from "../business.module.css";

export const metadata: Metadata = {
  title: "Healthcare for small businesses | Very Transparent Healthcare",
  description:
    "Team healthcare from two people upwards. No minimum headcount, no broker, no annual contract — set it up in an afternoon and pay month to month.",
};

const FITS = [
  {
    art: "/business/small/no-minimum.svg",
    title: "No minimum headcount",
    text: "Two people is a team. You get the same clinicians and the same price per head as a company of five hundred.",
  },
  {
    art: "/business/small/quick-setup.svg",
    title: "Set up in an afternoon",
    text: "Add your team by email. They get a link, create an account, and can book the same day.",
  },
  {
    art: "/business/small/month-to-month.svg",
    title: "Month to month",
    text: "No annual contract and no exit fee. Add or remove people whenever your team changes.",
  },
  {
    art: "/business/small/simple-admin.svg",
    title: "Admin you can do yourself",
    text: "One dashboard, one invoice. No broker to chase and no renewal negotiation each year.",
  },
];

export default function SmallBusinessesPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="mint">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / <Link href="/business">For Business</Link> / For Small Businesses
            </p>
            <span className={styles.label}>For small businesses</span>
            <h1 id="page-title" className={styles.title}>
              Big-company healthcare, <em>from two people up</em>
            </h1>
            <p className={styles.lede}>
              You should not need an HR department or a broker to look after your team. Add everyone by email,
              pay per person per month, and change it whenever your team changes.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="/business#talk-to-us">
                Get started
              </Link>
              <Link className={styles.btnLink} href="#pricing">
                See pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>From 2 people</li>
              <li>No contract</li>
              <li>Same price per head</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/business/hero/small-team.svg"
                alt="Two colleagues outside a small shopfront with a care badge above the door"
                fill
                preload
                unoptimized
                sizes="(max-width: 900px) 92vw, 600px"
                className={styles.img}
              />
            </span>
            <span className={`${styles.badge} ${styles.badgeA}`}>
              <span className={styles.badgeIcon} aria-hidden="true">2</span>
              <span>
                <strong>From two people</strong>
                no minimum team size
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Cancel any month</strong>
                no exit fee, no haggling
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Why it fits ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="fit-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Built for small teams</span>
              <h2 id="fit-title" className={styles.h2}>Nothing here assumes an HR department</h2>
              <p className={styles.intro}>
                Group health cover is usually priced and sold for companies with hundreds of staff. Below that
                you get quoted badly, or not at all. We price the same way whatever your size.
              </p>
            </Reveal>
            <ul className={styles.grid}>
              {FITS.map((f, i) => (
                <li key={f.title}>
                  <Reveal delay={i * 80}>
                    <div className={`${styles.tile} ${biz.artTile}`}>
                      <Image src={f.art} alt="" width={240} height={180} unoptimized className={biz.art} />
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
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
              <h2 id="pricing-title" className={styles.h2}>What it costs a small team</h2>
              <p className={styles.intro}>
                The same per-employee plans as any larger account. These examples assume a team of ten, billed
                monthly, excluding GST.
              </p>
              <ul className={biz.tiers}>
                <li className={biz.tier}>
                  <span className={biz.tierTag}>Essentials</span>
                  <h3>Core care</h3>
                  <p className={biz.price}>₹4,990 <span>/ month for 10</span></p>
                  <p>₹499 per person. Unlimited primary care, so a common illness never costs a working day.</p>
                  <ul className={biz.tierList}>
                    <li>Unlimited video consultations</li>
                    <li>Messaging with a clinician</li>
                    <li>Prescriptions and sick notes</li>
                    <li>Annual health check</li>
                  </ul>
                  <Link className={biz.tierCta} href="/business#talk-to-us">Get started</Link>
                </li>
                <li className={`${biz.tier} ${biz.tierFeatured}`}>
                  <span className={biz.tierTag}>Most chosen</span>
                  <h3>Core + mind</h3>
                  <p className={biz.price}>₹8,990 <span>/ month for 10</span></p>
                  <p>₹899 per person. Everything in Core, plus therapy and psychiatry people can actually book.</p>
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
                  <p className={biz.price}>₹16,990 <span>/ month for 10</span></p>
                  <p>₹1,699 per person. Partners and children covered, with specialist access included.</p>
                  <ul className={biz.tierList}>
                    <li>Everything in Core + mind</li>
                    <li>Partner and children covered</li>
                    <li>Specialist referrals</li>
                    <li>Long-term condition packages</li>
                  </ul>
                  <Link className={biz.tierCta} href="/business#talk-to-us">Get started</Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Setup ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="setup-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="setup-title" className={styles.h2}>Set up this afternoon</h2>
              <ol className={styles.steps}>
                <li>
                  <h3>Pick a plan</h3>
                  <p>Choose the plan that fits and tell us how many people are on it. No quote process to sit through.</p>
                </li>
                <li>
                  <h3>Add your team</h3>
                  <p>Paste in their email addresses. They each get a link to create their own private account.</p>
                </li>
                <li>
                  <h3>They book care</h3>
                  <p>From the same day. You get one invoice a month and can change the list whenever you like.</p>
                </li>
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ============ Sole traders ============ */}
        <section className={styles.section} aria-labelledby="solo-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="solo-title" className={styles.h2}>Working for yourself?</h2>
              <p className={styles.intro}>
                If it is just you, a personal membership covers the same primary care without the team
                administration — and you can switch to a team plan later if you hire.
              </p>
              <ul className={styles.checks}>
                <li>Same clinicians, same prices shown upfront</li>
                <li>Itemised invoices you can put through the business</li>
                <li>Move to a team plan whenever you take someone on</li>
              </ul>
              <div className={styles.ctaRow}>
                <Link className={styles.btnLink} href="/plans">
                  See personal plans <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>No surprises</span>
                <h3>The price is the price</h3>
                <p>
                  What you pay per person does not change because your team is small, and it does not jump at
                  renewal because someone made a claim.
                </p>
                <ul>
                  <li>No broker commission</li>
                  <li>No claims-based repricing</li>
                  <li>30 days&apos; notice of any change</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="faq-title" className={styles.h2}>Questions small teams ask</h2>
              <div className={styles.faq}>
                <details>
                  <summary>Is there really no minimum?</summary>
                  <p>
                    Two enrolled people is the minimum, at the same per-person price as any other account. If it
                    is only you, take a personal membership instead.
                  </p>
                </details>
                <details>
                  <summary>What if someone leaves?</summary>
                  <p>
                    Remove them from the dashboard and billing stops at the end of that month. Any care already
                    under way is finished off properly rather than cut short.
                  </p>
                </details>
                <details>
                  <summary>Can I cover contractors?</summary>
                  <p>
                    Yes. Anyone you pay regularly can go on the plan — the cover is the same, though the tax
                    treatment may differ, so check with your accountant.
                  </p>
                </details>
                <details>
                  <summary>Do I see my team&apos;s medical information?</summary>
                  <p>
                    Never. You see how many people used the benefit and what you were billed, and nothing
                    clinical about anyone.
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
              <h2 id="closing-title" className={styles.h2}>Look after your team, whatever its size</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/business#talk-to-us">Get started</Link>
                <Link className={styles.btnLink} href="/business">Back to overview <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
