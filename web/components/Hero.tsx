import Link from "next/link";
import styles from "./Hero.module.css";

const ORBIT_WORDS = ["your goals", "your options", "your care", "your costs", "your pace", "your team"];

// Orbit geometry (SVG viewBox 400×400). The path starts at the left and runs clockwise.
const ORBIT_C = 200;
const ORBIT_R = 172;

/** Point on the orbit at fraction f (0–1) of the way along the path. */
function orbitPoint(f: number) {
  const a = 2 * Math.PI * f;
  return { x: ORBIT_C - ORBIT_R * Math.cos(a), y: ORBIT_C - ORBIT_R * Math.sin(a) };
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        <span className={styles.lineTop}>Reshaping healthcare,</span>
        <span className={styles.lineMid}>
          <span>with</span>

          <span className={styles.stage}>
            {/* Spotlight beam and pool of light */}
            <span className={styles.beam} aria-hidden="true" />
            <span className={styles.halo} aria-hidden="true" />

            {/* Care around you: translucent petals from the logo */}
            <svg className={styles.petals} viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="vth-hero-petal-g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#914BFA" />
                  <stop offset="1" stopColor="#5C3FD0" />
                </linearGradient>
              </defs>
              <g fill="url(#vth-hero-petal-g)" fillOpacity="0.13">
                <circle cx="32" cy="17" r="15" />
                <circle cx="47" cy="32" r="15" />
                <circle cx="32" cy="47" r="15" />
                <circle cx="17" cy="32" r="15" />
              </g>
            </svg>

            {/* Orbiting ring of what revolves around you */}
            <svg className={styles.orbit} viewBox="0 0 400 400" aria-hidden="true">
              <defs>
                <path id="vth-orbit-path" d="M200,200 m-172,0 a172,172 0 1,1 344,0 a172,172 0 1,1 -344,0" />
              </defs>
              <circle cx="200" cy="200" r="186" className={styles.orbitLine} />
              {/* Each phrase centred in an equal slice of the ring, a dot between slices */}
              {ORBIT_WORDS.map((word, i) => (
                <text key={word} className={styles.orbitText} dominantBaseline="central">
                  <textPath
                    href="#vth-orbit-path"
                    startOffset={`${((i + 0.5) / ORBIT_WORDS.length) * 100}%`}
                    textAnchor="middle"
                  >
                    {word}
                  </textPath>
                </text>
              ))}
              {ORBIT_WORDS.map((word, i) => {
                const p = orbitPoint(i / ORBIT_WORDS.length);
                return <circle key={`dot-${word}`} cx={p.x} cy={p.y} r="3" className={styles.orbitDot} />;
              })}
            </svg>

            <span className={styles.you}>you</span>
          </span>

          <span className={styles.sideRight}>at the centre.</span>
        </span>
      </h1>

      <p className={styles.subline}>
        Understand your health, your options, and your care—without the confusion, hidden costs, or
        unnecessary complexity.
      </p>

      <div className={styles.ctaRow}>
        <Link className={styles.btnPrimary} href="#explore">
          Explore Your Healthcare
        </Link>
        <Link className={styles.btnLink} href="#how-it-works">
          How It Works <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
