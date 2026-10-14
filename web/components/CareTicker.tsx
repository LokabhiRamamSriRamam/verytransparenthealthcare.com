"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CARE_TICKER_WORDS } from "@/lib/care";
import styles from "./CareTicker.module.css";

const INTERVAL_MS = 1200;

export default function CareTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % CARE_TICKER_WORDS.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="ticker-title">
      <h2 id="ticker-title" className={styles.title}>
        <span className={styles.lead}>Get care today for</span>
        <span className={styles.wordBox} aria-hidden="true">
          <span key={index} className={styles.word}>
            {CARE_TICKER_WORDS[index]}
          </span>
        </span>
        <span className={styles.srOnly}>{CARE_TICKER_WORDS.join(", ")}</span>
      </h2>

      <Link className={styles.link} href="/care">
        See all our services <span aria-hidden="true">›</span>
      </Link>
    </section>
  );
}
