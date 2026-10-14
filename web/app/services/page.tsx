import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServicesDirectory from "@/components/ServicesDirectory";
import Reveal from "@/components/care/Reveal";
import { CARE_CATEGORIES } from "@/lib/care";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services, plans & packages | Very Transparent Healthcare",
  description:
    "Every care package we offer — long-term conditions, mental health, women's, men's, family, sexual health, skin and dental — with prices shown upfront.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ============ Hero ============ */}
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="services-title">
          <div>
            <span className={styles.label}>Services</span>
            <h1 id="services-title" className={styles.title}>
              Healthcare that <em>fits around you</em>
            </h1>
            <p className={styles.lede}>
              From everyday worries to long-term conditions, find the care package that fits your life. Every
              package comes with a named care team, a clear plan, and the price before you book.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} href="#packages">Browse packages</Link>
              <Link className={styles.btnLink} href="#plans">
                How pricing works <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* collage of the people we care for */}
          <div className={styles.collage} aria-hidden="true">
            <span className={`${styles.bubble} ${styles.b1}`} data-theme="lavender">
              <Image src="/care/mental-health.png" alt="" fill sizes="280px" preload className={styles.bubbleImg} />
            </span>
            <span className={`${styles.bubble} ${styles.b2}`} data-theme="mint">
              <Image src="/care/pediatrics.png" alt="" fill sizes="220px" className={styles.bubbleImg} />
            </span>
            <span className={`${styles.bubble} ${styles.b3}`} data-theme="peach">
              <Image src="/care/hypertension.png" alt="" fill sizes="200px" className={styles.bubbleImg} />
            </span>
            <span className={`${styles.bubble} ${styles.b4}`} data-theme="purple">
              <Image src="/care/womens-health.png" alt="" fill sizes="180px" className={styles.bubbleImg} />
            </span>
          </div>
        </section>

        {/* ============ Intro & category jump links ============ */}
        <section className={styles.intro} aria-labelledby="partner-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="partner-title" className={styles.h2}>A true partner in your health</h2>
              <p className={styles.introText}>
                We care for everything from common illnesses to chronic conditions and mental health. Care
                isn&apos;t only for when you&apos;re unwell — we help you prevent illness and stay well, and we always
                take the time to listen.
              </p>
              <ul className={styles.categories}>
                {CARE_CATEGORIES.map((c) => (
                  <li key={c.id} className={styles.category}>
                    <strong>{c.label}</strong>
                    <span>{c.blurb}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ All packages ============ */}
        <section id="packages" className={styles.section} aria-labelledby="packages-title">
          <div className={styles.wrap}>
            <h2 id="packages-title" className={styles.h2}>All care packages</h2>
            <p className={styles.sub}>Filter by area or search for a symptom or condition.</p>
            <ServicesDirectory />
          </div>
        </section>

        {/* ============ Plans / ways to pay ============ */}
        <section id="plans" className={`${styles.section} ${styles.alt}`} aria-labelledby="plans-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="plans-title" className={styles.h2}>Choose how you pay</h2>
              <p className={styles.sub}>Three simple options. Whichever you choose, you see the full price before anything is booked.</p>
              <ul className={styles.plans}>
                <li className={styles.plan}>
                  <span className={styles.planTag}>Flexible</span>
                  <h3>Pay per visit</h3>
                  <p>Book a single consultation, test or treatment when you need it. No sign-up fee, no commitment.</p>
                  <ul>
                    <li>Price shown at booking</li>
                    <li>Video or in-person visits</li>
                    <li>Prescriptions if needed</li>
                  </ul>
                  <Link href="/login" className={styles.planCta}>Book a visit</Link>
                </li>
                <li className={`${styles.plan} ${styles.planFeatured}`}>
                  <span className={styles.planTag}>Most popular</span>
                  <h3>Care packages</h3>
                  <p>A complete, fixed-price plan for one goal — like diabetes, maternity or weight — with your care team, tests and reviews.</p>
                  <ul>
                    <li>Itemised package price</li>
                    <li>Named care team</li>
                    <li>Messaging between visits</li>
                  </ul>
                  <Link href="#packages" className={styles.planCta}>Choose a package</Link>
                </li>
                <li className={styles.plan}>
                  <span className={styles.planTag}>Everything</span>
                  <h3>Membership</h3>
                  <p>Ongoing primary care for you or your family, with priority booking and discounts across packages.</p>
                  <ul>
                    <li>Unlimited messaging</li>
                    <li>Priority appointments</li>
                    <li>Family options</li>
                  </ul>
                  <Link href="/plans" className={styles.planCta}>See membership plans</Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Promise strip ============ */}
        <section className={styles.section} aria-labelledby="promise-title">
          <div className={styles.wrap}>
            <Reveal>
              <h2 id="promise-title" className={styles.h2}>What &ldquo;very transparent&rdquo; means</h2>
              <ol className={styles.promises}>
                <li><h3>Prices before booking</h3><p>Every consult, test and treatment is priced before you agree to it.</p></li>
                <li><h3>Plain-language plans</h3><p>You get a written plan explaining what&apos;s recommended and why.</p></li>
                <li><h3>No surprise bills</h3><p>If something changes, we ask first. Nothing is added without your say-so.</p></li>
                <li><h3>Your data, your call</h3><p>Records are shared only with your permission — never with employers.</p></li>
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ============ Get started ============ */}
        <section className={styles.wrap} aria-labelledby="start-title">
          <Reveal>
            <div className={styles.closing}>
              <h2 id="start-title" className={styles.h2}>Get started today</h2>
              <div className={styles.audiences}>
                <Link href="/login" className={styles.audience}>
                  <span className={styles.audienceImg} data-theme="lavender">
                    <Image src="/care/diabetes.png" alt="" fill sizes="(max-width: 760px) 90vw, 520px" className={styles.bubbleImg} />
                  </span>
                  <span className={styles.audienceText}>
                    <strong>For you &amp; your family</strong>
                    <span>Create your account and book your first visit in minutes.</span>
                    <span className={styles.audienceCta}>Sign up <span aria-hidden="true">→</span></span>
                  </span>
                </Link>
                <Link href="/business" className={styles.audience}>
                  <span className={styles.audienceImg} data-theme="indigo">
                    <Image src="/care/mens-health.png" alt="" fill sizes="(max-width: 760px) 90vw, 520px" className={styles.bubbleImg} />
                  </span>
                  <span className={styles.audienceText}>
                    <strong>For employers</strong>
                    <span>Offer transparent healthcare to your team, with clear per-employee pricing.</span>
                    <span className={styles.audienceCta}>Talk to us <span aria-hidden="true">→</span></span>
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
