import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy notice | Very Transparent Healthcare",
  description:
    "What health information we hold, why we hold it, who can see it, and how to get it changed or deleted — in plain language.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <p className={styles.crumbs}>
            <Link href="/">Home</Link> / Privacy
          </p>
          <span className={styles.label}>Privacy</span>
          <h1 className={styles.title}>Your health information</h1>
          <p className={styles.updated}>
            Last updated 14 October 2026. <strong>Draft — pending legal review before launch.</strong>
          </p>
          <p className={styles.lede}>
            Health records are about the most personal information there is. This page explains what we hold,
            why, who can see it, and how to get it changed or deleted. We have tried to write it the way we
            would explain it out loud.
          </p>

          <div className={styles.summary}>
            <h2>The short version</h2>
            <ul>
              <li>Your records are yours. We share them only when you tell us to.</li>
              <li>We never sell your data, and we never use it for advertising.</li>
              <li>Your employer is never told anything clinical about you.</li>
              <li>You can see everything we hold, and ask us to correct or delete it.</li>
            </ul>
          </div>

          <ul className={styles.toc}>
            <li><a href="#who">1. Who we are</a></li>
            <li><a href="#what">2. What we collect</a></li>
            <li><a href="#why">3. Why we hold it</a></li>
            <li><a href="#sharing">4. Who we share it with</a></li>
            <li><a href="#employers">5. Employers and the business plans</a></li>
            <li><a href="#keeping">6. How long we keep it</a></li>
            <li><a href="#security">7. How we protect it</a></li>
            <li><a href="#rights">8. Your rights</a></li>
            <li><a href="#cookies">9. Cookies</a></li>
            <li><a href="#changes">10. Changes to this notice</a></li>
          </ul>

          <div className={styles.body}>
            <h2 id="who">1. Who we are</h2>
            <p>
              Very Transparent Healthcare provides the care platform described on this site. For the purposes of
              data protection law we are the data controller for the information described here, and our
              clinicians are responsible for the clinical records they create.
            </p>

            <h2 id="what">2. What we collect</h2>
            <h3>Information you give us</h3>
            <ul>
              <li>Account details: your name, date of birth, email address and mobile number.</li>
              <li>Health information: symptoms, history, medication, allergies, and anything you tell a clinician.</li>
              <li>Documents you upload, including photographs and reports from other providers.</li>
              <li>Payment details, which are processed by our payment provider — we do not store your card number.</li>
            </ul>
            <h3>Information created by your care</h3>
            <ul>
              <li>Consultation notes, diagnoses, prescriptions and referrals written by your clinician.</li>
              <li>Test results ordered through us.</li>
              <li>Appointment history and messages exchanged with your care team.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>Basic technical data — device type, browser and IP address — needed to run the service securely.</li>
              <li>Which pages you visited, so we can see what is confusing and fix it.</li>
            </ul>

            <h2 id="why">3. Why we hold it</h2>
            <p>We hold your information for these reasons, and no others:</p>
            <ul>
              <li><strong>To provide your care.</strong> A clinician cannot treat you safely without your history.</li>
              <li><strong>To meet legal and professional duties.</strong> Medical records must be kept to a required standard, and prescribing is regulated.</li>
              <li><strong>To take payment</strong> for the care you have agreed to.</li>
              <li><strong>To keep the service safe and working</strong> — preventing fraud and abuse, and fixing faults.</li>
            </ul>
            <p>
              Where the law requires your explicit consent for us to handle health information, we ask for it,
              and you can withdraw it at any time.
            </p>

            <h2 id="sharing">4. Who we share it with</h2>
            <p>We share your information only in these situations:</p>
            <ul>
              <li><strong>Your care team</strong> — the clinicians treating you, so they can do so safely.</li>
              <li><strong>Where you ask us to</strong> — for example sending a report to another doctor or to your insurer.</li>
              <li><strong>Labs, pharmacies and clinics</strong> we use to deliver care you have booked, limited to what they need.</li>
              <li><strong>Service providers</strong> who host and secure our systems, under contracts that forbid them using your data for anything else.</li>
              <li><strong>Where the law requires it</strong> — for example a court order, or a serious risk to someone&apos;s life.</li>
            </ul>
            <p>
              We do not sell your information. We do not share it with advertisers or data brokers, and we do
              not use your health information to target advertising.
            </p>

            <h2 id="employers">5. Employers and the business plans</h2>
            <p>
              If your employer pays for your care, they are our customer for billing — not for your records.
              They are told how many people used the service and what they were billed. They are never told who
              booked, what was discussed, what was diagnosed or what was prescribed. Where a group is small
              enough that a figure could identify someone, we do not report that figure at all.
            </p>

            <h2 id="keeping">6. How long we keep it</h2>
            <p>
              Medical records are kept for the period required by law and professional guidance, which is
              generally several years after your last contact, and longer for children&apos;s records. Account and
              billing records are kept as long as needed for tax and accounting. When a retention period ends,
              we delete the information or irreversibly anonymise it.
            </p>

            <h2 id="security">7. How we protect it</h2>
            <ul>
              <li>Encrypted in transit and at rest.</li>
              <li>Access limited to the clinicians and staff who need it, and logged when used.</li>
              <li>Staff trained in confidentiality, with access removed when they leave.</li>
              <li>Regular security testing, and a plan for telling you promptly if something goes wrong.</li>
            </ul>

            <h2 id="rights">8. Your rights</h2>
            <p>You can ask us to:</p>
            <ul>
              <li>Show you everything we hold about you.</li>
              <li>Correct anything that is wrong.</li>
              <li>Delete your information, where no legal duty requires us to keep it.</li>
              <li>Send your records to you or to another provider in a portable format.</li>
              <li>Stop a particular use of your information, or withdraw a consent you gave.</li>
            </ul>
            <p>
              Email <a href="mailto:privacy@verytransparenthealthcare.com">privacy@verytransparenthealthcare.com</a>{" "}
              and we will respond within 30 days. There is no charge. If you are unhappy with how we have
              handled your information, you can complain to the relevant data protection authority.
            </p>

            <h2 id="cookies">9. Cookies</h2>
            <p>
              We use the cookies needed to sign you in and keep your session secure, and a small amount of
              analytics to understand which pages are unclear. We do not use advertising or cross-site tracking
              cookies. You can clear or block cookies in your browser, though signing in will stop working.
            </p>

            <h2 id="changes">10. Changes to this notice</h2>
            <p>
              If we change anything significant, we will email you before it takes effect rather than quietly
              updating this page. The date at the top always shows the current version.
            </p>
          </div>

          <div className={styles.contact}>
            <h2>Questions about your data</h2>
            <p>
              Email <a href="mailto:privacy@verytransparenthealthcare.com">privacy@verytransparenthealthcare.com</a>.
              A person reads it — you will not get a form letter.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
