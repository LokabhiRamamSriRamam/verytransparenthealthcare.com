import Link from "next/link";
import { CARE_GOALS } from "@/lib/care";
import { AUTH_LINK, DOCTORS_LINK, MAIN_NAV, isGroup, type NavLink } from "@/lib/navigation";
import Logo from "./Logo";
import styles from "./SiteFooter.module.css";

type Column = { title: string; links: NavLink[] };

const groups = MAIN_NAV.filter(isGroup);
const singles = MAIN_NAV.filter((e): e is NavLink => !isGroup(e));

const COLUMNS: Column[] = [
  ...groups.map((g) => ({ title: g.label, links: g.items })),
  {
    title: "Care",
    links: CARE_GOALS.slice(0, 6).map((g) => ({ label: g.label, href: `/care/${g.slug}` })),
  },
  { title: "Company", links: [...singles, DOCTORS_LINK, AUTH_LINK] },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label="Very Transparent Healthcare — home">
              <Logo variant="dark" width={220} />
            </Link>
            <p className={styles.tagline}>
              Healthcare shaped around <em className={styles.you}>you</em> — your goals, your pace, your care.
            </p>
            <p className={styles.emergency}>
              <span className={styles.emergencyDot} aria-hidden="true" />
              <span>
                In a medical emergency, call <a href="tel:112">112</a> or go to your nearest hospital.
              </span>
            </p>
          </div>

          <nav className={styles.cols} aria-label="Footer">
            {COLUMNS.map((col) => (
              <div key={col.title} className={styles.col}>
                <h2 className={styles.colTitle}>{col.title}</h2>
                <ul className={styles.links}>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link className={styles.link} href={l.href}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.legal}>
          <p>© {year} Very Transparent Healthcare. All rights reserved.</p>
          <ul className={styles.legalLinks}>
            <li>
              <Link className={styles.link} href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Full-width wordmark; SVG textLength makes it span edge to edge at any width */}
        <svg className={styles.wordmark} viewBox="0 0 1000 80" role="img" aria-label="verytransparenthealthcare">
          <defs>
            <linearGradient id="vth-footer-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#B99BFF" />
              <stop offset="0.5" stopColor="#914BFA" />
              <stop offset="1" stopColor="#5C3FD0" />
            </linearGradient>
          </defs>
          {/* font-size is set so the natural width is ~1000; textLength only trims the spacing */}
          <text x="0" y="59" textLength="1000" lengthAdjust="spacing" className={styles.wordmarkText}>
            very<tspan fill="url(#vth-footer-g)">transparent</tspan>healthcare
          </text>
        </svg>
      </div>
    </footer>
  );
}
