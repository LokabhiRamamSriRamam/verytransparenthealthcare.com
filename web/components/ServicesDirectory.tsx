"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CARE_CATEGORIES, CARE_GOALS, type CareCategory, type CareGoal } from "@/lib/care";
import styles from "./ServicesDirectory.module.css";

type Filter = "all" | CareCategory;

function PackageCard({ goal }: { goal: CareGoal }) {
  return (
    <Link href={`/care/${goal.slug}`} className={styles.card} data-theme={goal.theme}>
      <span className={styles.imgWrap} data-white-bg={goal.whiteBackground || undefined}>
        <Image src={goal.image.src} alt={goal.image.alt} fill sizes="(max-width: 760px) 92vw, 380px" className={styles.img} />
      </span>
      <span className={styles.body}>
        <span className={styles.label}>{goal.label}</span>
        <span className={styles.title}>{goal.title}</span>
        <span className={styles.summary}>{goal.summary}</span>
        <span className={styles.includes}>
          {goal.includes.map((item) => (
            <span key={item} className={styles.include}>{item}</span>
          ))}
        </span>
        <span className={styles.more}>
          View package <span aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}

export default function ServicesDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      CARE_GOALS.filter((g) => {
        if (filter !== "all" && g.category !== filter) return false;
        if (!q) return true;
        return [g.label, g.title, g.summary, ...g.includes].join(" ").toLowerCase().includes(q);
      }),
    [filter, q],
  );

  // Grouped by category when browsing everything, like a catalogue; flat when narrowing down
  const grouped = filter === "all" && !q;

  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.chips} role="group" aria-label="Filter by category">
          {[{ id: "all" as const, label: "All care" }, ...CARE_CATEGORIES].map((c) => (
            <button
              key={c.id}
              type="button"
              className={styles.chip}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="m12.2 12.2 3.8 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="sr-only">Search care packages</span>
          <input
            type="search"
            placeholder="Search e.g. acne, PCOS, blood pressure"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <p className={styles.count} aria-live="polite">
        {matches.length} {matches.length === 1 ? "package" : "packages"}
      </p>

      {matches.length === 0 ? (
        <div className={styles.empty}>
          <p>No packages match “{query}”. Try a different word, or talk to us and we&apos;ll point you the right way.</p>
          <button type="button" className={styles.reset} onClick={() => { setQuery(""); setFilter("all"); }}>
            Show all care
          </button>
        </div>
      ) : grouped ? (
        CARE_CATEGORIES.map((cat) => {
          const goals = matches.filter((g) => g.category === cat.id);
          if (goals.length === 0) return null;
          return (
            <section key={cat.id} className={styles.group} aria-labelledby={`cat-${cat.id}`}>
              <div className={styles.groupHead}>
                <h3 id={`cat-${cat.id}`} className={styles.groupTitle}>{cat.label}</h3>
                <p className={styles.groupBlurb}>{cat.blurb}</p>
              </div>
              <ul className={styles.grid} role="list">
                {goals.map((g) => (
                  <li key={g.slug}><PackageCard goal={g} /></li>
                ))}
              </ul>
            </section>
          );
        })
      ) : (
        <ul className={styles.grid} role="list">
          {matches.map((g) => (
            <li key={g.slug}><PackageCard goal={g} /></li>
          ))}
        </ul>
      )}
    </div>
  );
}
