import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of service | Very Transparent Healthcare",
  description:
    "The agreement between you and Very Transparent Healthcare — what we provide, what things cost, how to cancel, and what this service is not.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <p className={styles.crumbs}>
            <Link href="/">Home</Link> / Terms
          </p>
          <span className={styles.label}>Terms</span>
          <h1 className={styles.title}>Terms of service</h1>
          <p className={styles.updated}>
            Last updated 14 October 2026. <strong>Draft — pending legal review before launch.</strong>
          </p>
          <p className={styles.lede}>
            This is the agreement between you and Very Transparent Healthcare. It would be odd to promise
            transparency and then bury the terms, so this is written to be read.
          </p>

          <div className={styles.summary}>
            <h2>The short version</h2>
            <ul>
              <li>We show you the price before you book, and we honour it.</li>
              <li>You can cancel a membership any month. No exit fee.</li>
              <li>This is not emergency care. In an emergency call 112.</li>
              <li>Clinical decisions belong to your clinician, not to us.</li>
            </ul>
          </div>

          <ul className={styles.toc}>
            <li><a href="#emergency">1. This is not an emergency service</a></li>
            <li><a href="#service">2. What we provide</a></li>
            <li><a href="#eligibility">3. Who can use it</a></li>
            <li><a href="#account">4. Your account</a></li>
            <li><a href="#prices">5. Prices and payment</a></li>
            <li><a href="#cancelling">6. Cancelling and refunds</a></li>
            <li><a href="#clinical">7. Clinical responsibility</a></li>
            <li><a href="#prescriptions">8. Prescriptions</a></li>
            <li><a href="#conduct">9. Using the service properly</a></li>
            <li><a href="#liability">10. Our liability</a></li>
            <li><a href="#complaints">11. Complaints</a></li>
            <li><a href="#changes">12. Changes to these terms</a></li>
          </ul>

          <div className={styles.body}>
            <h2 id="emergency">1. This is not an emergency service</h2>
            <p>
              Do not use this service for a medical emergency. If someone is seriously unwell, having chest
              pain, struggling to breathe, bleeding heavily, or at risk of harming themselves, call{" "}
              <a href="tel:112">112</a> or go to the nearest hospital. Messages and bookings are not monitored
              continuously and are not a route to urgent help.
            </p>

            <h2 id="service">2. What we provide</h2>
            <p>
              We provide access to consultations with registered clinicians, by video, message or in person;
              care packages for specific health goals; tests arranged through partner laboratories; and a record
              of your care. The clinical care itself is delivered by the clinician you see, who is professionally
              responsible for it.
            </p>
            <p>
              We are not an insurer. A membership is not health insurance and does not cover hospital admission,
              surgery or emergency treatment. See <Link href="/plans">plans and pricing</Link> for what each
              option includes.
            </p>

            <h2 id="eligibility">3. Who can use it</h2>
            <ul>
              <li>You must be 18 or over to hold an account in your own name.</li>
              <li>A parent or guardian can hold an account covering a child and must consent to their care.</li>
              <li>You must be physically in a location we serve at the time of your appointment, because prescribing is regulated by where you are.</li>
              <li>You must give accurate information about your health. A clinician can only advise on what they are told.</li>
            </ul>

            <h2 id="account">4. Your account</h2>
            <p>
              Keep your sign-in details to yourself and tell us promptly if you think someone else has access.
              You are responsible for activity on your account, except where it results from our failure to
              secure it. Do not create an account for someone else without their knowledge, other than a child
              in your care.
            </p>

            <h2 id="prices">5. Prices and payment</h2>
            <ul>
              <li>The price of anything you book is shown before you confirm it, and that is the price you pay.</li>
              <li>If your care needs to change, we tell you the cost and ask before going ahead. Nothing is added without your agreement.</li>
              <li>Memberships are billed monthly in advance. Package prices may be spread across the length of the package.</li>
              <li>We give 30 days&apos; notice by email before any price change. Your price does not increase because you used your plan.</li>
              <li>If a payment fails we will tell you and try again before any plan is suspended.</li>
            </ul>

            <h2 id="cancelling">6. Cancelling and refunds</h2>
            <ul>
              <li><strong>Memberships</strong> can be cancelled any month from your account. Cover runs to the end of the period you have paid for.</li>
              <li><strong>Appointments</strong> cancelled more than 12 hours ahead are refunded in full. Inside 12 hours we may keep a fee, because the slot usually cannot be filled.</li>
              <li><strong>Packages</strong> can be ended early. You pay for the care already delivered, at the itemised prices shown when you started, and we refund the rest.</li>
              <li>If we cancel on you, you are refunded in full, whatever the notice.</li>
              <li>Care already under way is always completed properly, even if billing has ended.</li>
            </ul>

            <h2 id="clinical">7. Clinical responsibility</h2>
            <p>
              Clinical decisions are made by your clinician using their own professional judgement. We do not
              set targets for prescribing, testing or appointment volume, and our clinicians are salaried rather
              than paid per treatment.
            </p>
            <p>
              A clinician may decline to treat something remotely, or at all, if they judge it unsafe or outside
              their competence. That is them doing their job properly. Where that happens we will tell you why
              and help you find the right route.
            </p>
            <p>
              Information on this website is general and is not medical advice for your situation. Advice given
              to you in a consultation is.
            </p>

            <h2 id="prescriptions">8. Prescriptions</h2>
            <p>
              A prescription is issued only where a clinician judges it appropriate after assessing you. We
              cannot guarantee a prescription, and we do not prescribe on request. Some medicines cannot be
              prescribed remotely at all. Controlled drugs are subject to further restriction.
            </p>

            <h2 id="conduct">9. Using the service properly</h2>
            <p>Please do not:</p>
            <ul>
              <li>Give false information about your identity or your health.</li>
              <li>Seek medication by misrepresenting symptoms.</li>
              <li>Record a consultation without your clinician&apos;s agreement.</li>
              <li>Abuse or threaten our staff or clinicians. We will end an account for this.</li>
              <li>Attempt to access another person&apos;s records, or to disrupt the service.</li>
            </ul>

            <h2 id="liability">10. Our liability</h2>
            <p>
              We are responsible for providing the service with reasonable care and skill, and our clinicians
              carry professional indemnity cover for the care they give. Nothing in these terms limits liability
              for death or personal injury caused by negligence, for fraud, or for anything else that cannot
              lawfully be limited.
            </p>
            <p>
              We are not liable for losses caused by inaccurate information you gave us, by a failure to follow
              clinical advice, or by services provided by a third party you chose. Other than as set out above,
              our liability for any claim is limited to the amount you paid us for the care in question.
            </p>

            <h2 id="complaints">11. Complaints</h2>
            <p>
              Tell us and a senior clinician reviews it within two working days. You can request a second
              opinion from the panel at no cost, whatever the outcome. If we cannot resolve it between us, you
              can take the matter to the relevant medical council or consumer forum, and we will tell you how.
            </p>

            <h2 id="changes">12. Changes to these terms</h2>
            <p>
              If we change anything that affects you materially, we will email you at least 30 days before it
              takes effect. If you do not accept a change, you can cancel without charge.
            </p>
          </div>

          <div className={styles.contact}>
            <h2>Questions about these terms</h2>
            <p>
              Email <a href="mailto:hello@verytransparenthealthcare.com">hello@verytransparenthealthcare.com</a>.
              For anything about your data, see our <Link href="/privacy">privacy notice</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
