"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CARE_GOALS, type CareGoal } from "@/lib/care";
import styles from "./GoalsScroller.module.css";

/** Auto-scroll speed in px per second */
const SPEED = 75;

function GoalCard({ goal, hidden }: { goal: CareGoal; hidden?: boolean }) {
  return (
    <Link
      href={`/care/${goal.slug}`}
      className={styles.card}
      data-theme={goal.theme}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      draggable={false}
    >
      <span className={styles.rings} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />

      <span className={styles.text}>
        <span className={styles.label}>{goal.label}</span>
        <span className={styles.title}>{goal.title}</span>
      </span>

      <span className={styles.imgWrap} data-white-bg={goal.whiteBackground || undefined}>
        <Image
          src={goal.image.src}
          alt={hidden ? "" : goal.image.alt}
          fill
          sizes="(max-width: 760px) 90vw, 420px"
          loading="eager" /* cards scroll into view continuously; avoid pop-in */
          className={styles.img}
          draggable={false}
        />
      </span>

      <span className={styles.cta}>
        Explore care <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export default function GoalsScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const holdUntilRef = useRef(0);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      pausedRef.current = true;
      setPaused(true);
    }

    // Width of one full set of cards (the list is rendered twice for a seamless loop)
    let loopWidth = 0;
    const measure = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      const n = cards.length / 2;
      loopWidth = n > 0 ? cards[n].offsetLeft - cards[0].offsetLeft : 0;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(el);

    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;

      const running =
        !pausedRef.current && !hoverRef.current && visible && now > holdUntilRef.current && loopWidth > 0;

      if (running) {
        pos += (SPEED * dt) / 1000;
        if (pos >= loopWidth) pos -= loopWidth;
        el.scrollLeft = pos;
      } else {
        // Follow manual scrolling, and keep it looping in both directions
        if (loopWidth > 0 && el.scrollLeft >= loopWidth) el.scrollLeft -= loopWidth;
        pos = el.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const hold = (ms: number) => {
    holdUntilRef.current = performance.now() + ms;
  };

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    if (!el || !card) return;
    hold(1200);
    // Allow stepping backwards from the very start by jumping one loop ahead first
    if (dir === -1 && el.scrollLeft < card.offsetWidth) {
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      el.scrollLeft += cards[cards.length / 2].offsetLeft - cards[0].offsetLeft;
    }
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  };

  return (
    <section id="explore" className={styles.section} aria-labelledby="goals-title">
      <div className={styles.intro}>
        <h2 id="goals-title" className={styles.heading}>
          Stop fitting yourself into the healthcare system.
        </h2>
        <p className={styles.accent}>Healthcare should fit around you.</p>
        <p className={styles.sub}>Choose your goal. See what personalised care can look like.</p>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        onFocus={() => (hoverRef.current = true)}
        onBlur={() => (hoverRef.current = false)}
        onPointerDown={() => hold(3000)}
        onTouchMove={() => hold(3000)}
        onWheel={() => hold(1500)}
      >
        <ul className={styles.list} role="list">
          {CARE_GOALS.map((goal) => (
            <li key={goal.slug} data-card>
              <GoalCard goal={goal} />
            </li>
          ))}
          {CARE_GOALS.map((goal) => (
            <li key={`${goal.slug}-loop`} data-card aria-hidden="true">
              <GoalCard goal={goal} hidden />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.ctrl} onClick={() => step(-1)} aria-label="Previous goals">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M11 3.5 5.5 9l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className={styles.ctrl}
          onClick={togglePause}
          aria-label={paused ? "Play auto-scroll" : "Pause auto-scroll"}
          aria-pressed={paused}
        >
          {paused ? (
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4.5 2.8v10.4L13 8z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="3.5" y="2.8" width="3" height="10.4" rx="1" fill="currentColor" />
              <rect x="9.5" y="2.8" width="3" height="10.4" rx="1" fill="currentColor" />
            </svg>
          )}
        </button>
        <button type="button" className={styles.ctrl} onClick={() => step(1)} aria-label="Next goals">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M7 3.5 12.5 9 7 14.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
