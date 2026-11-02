import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "../login.module.css";

export const metadata: Metadata = {
  title: "Reset your password | Very Transparent Healthcare",
  description: "Send yourself a link to choose a new password for your Very Transparent Healthcare account.",
};

export default function ResetPasswordPage() {
  return (
    <main className={styles.page}>
      <div className={styles.formSide}>
        <Link className={styles.brand} href="/" aria-label="Very Transparent Healthcare — home">
          <Logo width={200} />
        </Link>

        <div className={styles.formInner}>
          <h1 className={styles.title}>Reset your password</h1>
          <p className={styles.sub}>
            Enter the email address on your account and we&apos;ll send you a link to choose a new password. The
            link works once and expires after an hour.
          </p>

          {/* Authentication is not wired up yet; this posts nowhere until it is. */}
          <form className={styles.form} method="post" action="#">
            <p className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </p>
            <button type="submit" className={styles.submit}>
              Send reset link
            </button>
          </form>

          <p className={styles.legal}>
            If an account exists for that address, the email will arrive within a few minutes. We don&apos;t say
            whether an address is registered — that would tell anyone who asked whether you have an account
            here.
          </p>

          <p className={styles.or}>or</p>

          <div className={styles.alts}>
            <Link className={styles.alt} href="/login">
              <span aria-hidden="true">←</span> Back to sign in
            </Link>
          </div>

          <p className={styles.doctorsNote}>
            Still stuck? Email{" "}
            <a href="mailto:hello@verytransparenthealthcare.com">hello@verytransparenthealthcare.com</a> and a
            person will help you back in.
          </p>
        </div>
      </div>

      <aside className={styles.aside} aria-label="Account security">
        <span className={styles.asideGlow} aria-hidden="true" />
        <h2 className={styles.asideTitle}>
          Your records stay <em>yours</em>
        </h2>
        <ul className={styles.asideList}>
          <li>
            <strong>Reset links expire</strong>
            Each link works once and only for an hour, so an old email in your inbox is not a way in.
          </li>
          <li>
            <strong>We never ask for your password</strong>
            Not by email, not by phone. If someone does, it is not us.
          </li>
          <li>
            <strong>You&apos;ll be told about changes</strong>
            We email you whenever your password or sign-in details change.
          </li>
        </ul>
      </aside>
    </main>
  );
}
