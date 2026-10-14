"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import styles from "./ConcernPicker.module.css";

export type Concern = {
  /** Short chip label */
  label: string;
  /** Heading shown in the panel */
  title: string;
  body?: string;
  /** What we'd typically do, shown as a short list */
  plan: string[];
};

/** Chips that swap a detail panel: "What brings you here?" */
export default function ConcernPicker({ concerns }: { concerns: Concern[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (i: number) => {
    const n = (i + concerns.length) % concerns.length;
    setActive(n);
    tabsRef.current[n]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); select(active + 1); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); select(active - 1); }
    if (e.key === "Home") { e.preventDefault(); select(0); }
    if (e.key === "End") { e.preventDefault(); select(concerns.length - 1); }
  };

  const c = concerns[active];

  return (
    <div className={styles.picker}>
      <div className={styles.chips} role="tablist" aria-label="Choose what brings you here">
        {concerns.map((item, i) => (
          <button
            key={item.label}
            ref={(el) => { tabsRef.current[i] = el; }}
            type="button"
            role="tab"
            id={`${base}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${base}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={styles.chip}
            onClick={() => setActive(i)}
            onKeyDown={onKey}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        key={active}
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${active}`}
        className={styles.panel}
      >
        <h3 className={styles.title}>{c.title}</h3>
        {c.body && <p className={styles.body}>{c.body}</p>}
        <p className={styles.planLabel}>How we&apos;d usually help</p>
        <ol className={styles.plan}>
          {c.plan.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
