import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import RelatedCare from "@/components/care/RelatedCare";
import Reveal from "@/components/care/Reveal";
import TiltStage from "@/components/care/TiltStage";
import styles from "../care/care.module.css";
import p from "./plans.module.css";

export const metadata: Metadata = {
  title: "Plans & pricing | Very Transparent Healthcare",
  description:
    "Pay per visit, take a care package, or join as a member. Every price is shown before you book, and nothing is added without your say-so.",
};

const WAYS_TO_PAY = [
  {
    art: "/plans/pay-per-visit.svg",
    title: "Pay per visit",
    text: "Best if you need care now and then. Book a consultation, test or treatment, pay for that one thing, done.",
  },
  {
    art: "/plans/package.svg",
    title: "Care packages",
    text: "Best for one goal over months — diabetes, maternity, weight. A fixed price covering the whole plan, not each appointment.",
  },
  {
    art: "/plans/membership.svg",
    title: "Membership",
    text: "Best if you want a doctor on hand all year. Unlimited consultations for a monthly fee, for you or the whole family.",
  },
];

const PAY_AS_YOU_GO = [
  { item: "Video consultation", note: "15 minutes with a doctor", price: "₹499" },
  { item: "In-person consultation", note: "At a partner clinic near you", price: "₹899" },
  { item: "Specialist consultation", note: "Dermatology, psychiatry, gynaecology and more", price: "₹1,299" },
  { item: "Therapy session", note: "50 minutes with your matched therapist", price: "₹1,499" },
  { item: "Annual health check", note: "Bloods, vitals and a doctor review", price: "₹2,999" },
  { item: "Home blood test", note: "Phlebotomist to your door, results in the app", price: "₹699" },
];

export default function PlansPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} data-theme="lavender">
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="page-title">
          <div>
            <p className={styles.crumbs}>
              <Link href="/">Home</Link> / Plans
            </p>
            <span className={styles.label}>Plans &amp; pricing</span>
            <h1 id="page-title" className={styles.title}>
              Know the price <em>before you book</em>
            </h1>
            <p className={styles.lede}>
              Pay for a single visit, take a fixed-price package for one goal, or join as a member. Whichever you
              choose, you see the full cost upfront and nothing is added without your say-so.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="#memberships">
                Compare plans
              </Link>
              <Link className={styles.btnLink} href="#pay-as-you-go">
                See one-off prices <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className={styles.trust}>
              <li>No joining fee</li>
              <li>Cancel any month</li>
              <li>No surprise bills</li>
            </ul>
          </div>

          <TiltStage className={styles.visual}>
            <span className={styles.rings} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.imgWrap}>
              <Image
                src="/plans/hero.svg"
                alt="An itemised bill and a price tag, shown before anything is booked"
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
                <strong>Every price upfront</strong>
                shown before you confirm
              </span>
            </span>
            <span className={`${styles.badge} ${styles.badgeB}`}>
              <span className={styles.badgeIcon} aria-hidden="true">✓</span>
              <span>
                <strong>No lock-in</strong>
                leave with a month&apos;s notice
              </span>
            </span>
          </TiltStage>
        </section>

        {/* ============ Three ways to pay ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="ways-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Three ways to pay</span>
              <h2 id="ways-title" className={styles.h2}>Pick what suits how you use care</h2>
              <p className={styles.intro}>
                Most people start by paying per visit, then move to a package or membership once they know what
                they need. You can switch at any time.
              </p>
            </Reveal>
            <ul className={styles.grid}>
              {WAYS_TO_PAY.map((w, i) => (
                <li key={w.title}>
                  <Reveal delay={i * 80}>
                    <div className={`${styles.tile} ${p.artTile}`}>
                      <Image src={w.art} alt="" width={240} height={180} unoptimized className={p.art} />
                      <h3>{w.title}</h3>
                      <p>{w.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Memberships ============ */}
        <section id="memberships" className={styles.section} aria-labelledby="memberships-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>Membership</span>
              <h2 id="memberships-title" className={styles.h2}>Monthly plans</h2>
              <p className={styles.intro}>
                Billed monthly, with no joining fee. Prices include GST. Cancel whenever you like — care already
                under way is always finished properly.
              </p>
              <ul className={p.tiers}>
                <li className={p.tier}>
                  <span className={p.tierTag}>Free</span>
                  <h3>Pay as you go</h3>
                  <p className={p.price}>₹0 <span>/ month</span></p>
                  <p className={p.tierFor}>For when you just want a doctor occasionally, at a price you can see.</p>
                  <ul className={p.tierList}>
                    <li>Book any consultation at list price</li>
                    <li>Your records and results in the app</li>
                    <li>Prescriptions to a pharmacy near you</li>
                    <li>No monthly fee and no commitment</li>
                  </ul>
                  <Link className={p.tierCta} href="/login">Create an account</Link>
                </li>
                <li className={`${p.tier} ${p.tierFeatured}`}>
                  <span className={p.tierTag}>Most popular</span>
                  <h3>Individual</h3>
                  <p className={p.price}>₹699 <span>/ month</span></p>
                  <p className={p.tierFor}>For one person who would rather never think about the cost of asking.</p>
                  <ul className={p.tierList}>
                    <li>Unlimited video consultations</li>
                    <li>Unlimited messaging with your doctor</li>
                    <li>Annual health check included</li>
                    <li>20% off packages, tests and specialists</li>
                    <li>Priority booking, including evenings</li>
                  </ul>
                  <Link className={p.tierCta} href="/login">Join now</Link>
                </li>
                <li className={p.tier}>
                  <span className={p.tierTag}>Up to 5 people</span>
                  <h3>Family</h3>
                  <p className={p.price}>₹1,499 <span>/ month</span></p>
                  <p className={p.tierFor}>For a household — partners, children and parents on one plan.</p>
                  <ul className={p.tierList}>
                    <li>Everything in Individual, for up to five</li>
                    <li>Paediatric and women&apos;s health included</li>
                    <li>Annual health check for every member</li>
                    <li>One bill, separate private records</li>
                    <li>Add a sixth member for ₹249</li>
                  </ul>
                  <Link className={p.tierCta} href="/login">Join now</Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Pay as you go price list ============ */}
        <section id="pay-as-you-go" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="payg-title">
          <div className={styles.wrap}>
            <Reveal>
              <span className={styles.label}>One-off prices</span>
              <h2 id="payg-title" className={styles.h2}>What things cost without a membership</h2>
              <p className={styles.intro}>
                The full list price, before any member discount. If a clinician recommends anything beyond these,
                you get a written quote first.
              </p>
              <ul className={p.priceList}>
                {PAY_AS_YOU_GO.map((row) => (
                  <li key={row.item} className={p.priceItem}>
                    <strong>
                      {row.item}
                      <small>{row.note}</small>
                    </strong>
                    <span>{row.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Packages ============ */}
        <section className={styles.section} aria-labelledby="packages-title">
          <div className={`${styles.wrap} ${styles.split}`}>
            <Reveal>
              <h2 id="packages-title" className={styles.h2}>Care packages, priced as a whole</h2>
              <p className={styles.intro}>
                For a goal that runs over months, a package is one price for the whole plan — the consultations,
                the tests, the reviews and the messaging in between.
              </p>
              <ul className={styles.checks}>
                <li>One itemised price, agreed before you start</li>
                <li>A named care team who know your history</li>
                <li>Tests and reviews already included, not billed as extras</li>
                <li>Pay monthly across the length of the package</li>
              </ul>
              <div className={styles.ctaRow}>
                <Link className={styles.btnLink} href="/services">
                  Browse all packages <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.promise}>
                <span className={styles.label}>Our promise</span>
                <h3>No surprise bills, ever</h3>
                <p>
                  If your care needs to change, we tell you what it costs and ask before anything happens. A
                  price we quoted is a price we honour.
                </p>
                <ul>
                  <li>Written quotes before treatment</li>
                  <li>Nothing added without your agreement</li>
                  <li>Itemised bills you can claim on insurance</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="faq-title" className={styles.h2}>Questions about paying</h2>
              <div className={styles.faq}>
                <details>
                  <summary>Can I use my health insurance?</summary>
                  <p>
                    We are not an insurer and we do not bill insurers directly. You get an itemised invoice for
                    everything you pay for, which you can submit to your insurer or employer scheme to claim
                    back.
                  </p>
                </details>
                <details>
                  <summary>Is membership the same as insurance?</summary>
                  <p>
                    No. Membership covers the care listed on the plan — consultations, messaging, your health
                    check and discounts. It does not cover hospital admission, surgery or emergency treatment,
                    which is what insurance is for. Many people have both.
                  </p>
                </details>
                <details>
                  <summary>What if I need something not on the price list?</summary>
                  <p>
                    You get a written quote before anything is booked. If you would rather not go ahead, you
                    simply do not, and nothing is charged.
                  </p>
                </details>
                <details>
                  <summary>Can I cancel?</summary>
                  <p>
                    Yes, any month, from your account. Your membership runs to the end of the period you have
                    paid for, and any treatment already under way is completed.
                  </p>
                </details>
                <details>
                  <summary>Do prices change?</summary>
                  <p>
                    Occasionally, and we give 30 days&apos; notice by email before they do. Your price never goes
                    up because you used your plan.
                  </p>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Related ============ */}
        <section className={styles.section} aria-labelledby="related-title">
          <div className={styles.wrap}>
            <h2 id="related-title" className={styles.h2}>Popular packages</h2>
            <RelatedCare slugs={["diabetes", "maternity", "weight"]} />
          </div>
        </section>

        {/* ============ Closing ============ */}
        <section aria-labelledby="closing-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="closing-title" className={styles.h2}>No hidden costs. That is the whole idea.</h2>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} href="/login">Get started</Link>
                <Link className={styles.btnLink} href="/business">Looking for your team? <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
