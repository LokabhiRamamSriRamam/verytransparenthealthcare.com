import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "Login or sign up | Very Transparent Healthcare",
  description:
    "Sign in to book care, message your clinician and see your records — or create an account in a couple of minutes.",
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      {/* ============ Form ============ */}
      <div className={styles.formSide}>
        <Link className={styles.brand} href="/" aria-label="Very Transparent Healthcare — home">
          <Logo width={200} />
        </Link>

        <div className={styles.formInner}>
          <h1 className={styles.title}>Your care, in one place</h1>
          <p className={styles.sub}>
            Book appointments, message your clinician and see every price before you confirm.
          </p>

          {/* Radios drive the view with CSS, so the page works before any JS loads */}
          <div className={styles.switch} role="group" aria-label="Sign in or create an account">
            <input
              className={styles.switchInput}
              type="radio"
              name="auth-mode"
              id="mode-signin"
              defaultChecked
            />
            <label className={styles.switchLabel} htmlFor="mode-signin">Sign in</label>
            <input className={styles.switchInput} type="radio" name="auth-mode" id="mode-signup" />
            <label className={styles.switchLabel} htmlFor="mode-signup">Create account</label>
          </div>

          {/* Authentication is not wired up yet; this posts nowhere until it is. */}
          <form className={styles.form} method="post" action="#">
            <p className={`${styles.field} ${styles.signupOnly}`}>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" autoComplete="name" />
            </p>

            <p className={styles.field}>
              <label htmlFor="email">Email or mobile number</label>
              <input id="email" name="email" type="text" autoComplete="username" required />
            </p>

            <p className={styles.field}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                minLength={8}
              />
              <span className={`${styles.hint} ${styles.signupOnly}`}>At least 8 characters.</span>
            </p>

            <Link className={`${styles.forgot} ${styles.signinOnly}`} href="/login/reset">
              Forgotten your password?
            </Link>

            <button type="submit" className={styles.submit}>
              <span className={styles.submitLabel} />
            </button>
          </form>

          <p className={styles.or}>or</p>

          <div className={styles.alts}>
            <a className={styles.alt} href="#">
              <span aria-hidden="true">✉</span> Email me a sign-in link
            </a>
            <a className={styles.alt} href="#">
              <span aria-hidden="true">☎</span> Send a code to my mobile
            </a>
          </div>

          <p className={styles.legal}>
            By continuing you agree to our <Link href="/terms">terms</Link> and{" "}
            <Link href="/privacy">privacy notice</Link>. Your records are shared only with your permission.
          </p>

          <p className={styles.doctorsNote}>
            Are you a clinician? <Link href="/doctors">Visit the doctors panel</Link> to apply or sign in to your
            clinical account.
          </p>
        </div>
      </div>

      {/* ============ Reassurance ============ */}
      <aside className={styles.aside} aria-label="Why people join">
        <span className={styles.asideGlow} aria-hidden="true" />
        <h2 className={styles.asideTitle}>
          Healthcare without the <em>guesswork</em>
        </h2>

        {/* The brand petal mark, drawn large and slowly turning */}
        <svg className={styles.asideArt} viewBox="0 0 220 180" aria-hidden="true">
          <g className={styles.petalSpin} fill="#FFFFFF" fillOpacity="0.22">
            <circle cx="110" cy="58" r="34" />
            <circle cx="144" cy="92" r="34" />
            <circle cx="110" cy="126" r="34" />
            <circle cx="76" cy="92" r="34" />
          </g>
          <circle className={styles.pulse} cx="110" cy="92" r="20" fill="#FFFFFF" />
          <path d="M110 82 v20 M100 92 h20" stroke="#5C3FD0" strokeWidth="5" strokeLinecap="round" />
          <path
            d="M30 150 q22 -16 44 0 t44 0 t44 0 t28 -6"
            stroke="#D8C8FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        <ul className={styles.asideList}>
          <li>
            <strong>Every price before you book</strong>
            Consultations, tests and treatments are priced upfront. Nothing is added without your say-so.
          </li>
          <li>
            <strong>The same clinician each time</strong>
            Someone who knows your history, not whoever happens to be free.
          </li>
          <li>
            <strong>Your records stay yours</strong>
            Shared only with your permission — never with employers, never sold.
          </li>
          <li>
            <strong>Appointments in days</strong>
            Including evenings and weekends, by video or in person.
          </li>
        </ul>
        <blockquote className={styles.asideQuote}>
          &ldquo;The first time a clinic told me the cost before the appointment instead of after.&rdquo;
          <footer>A member, with us since 2024</footer>
        </blockquote>
      </aside>
    </main>
  );
}
