"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FEATURES, type Feature } from "@/lib/features";
import styles from "./Features.module.css";

export default function Features() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Feature | null>(null);

  const open = (feature: Feature) => {
    setActive(feature);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  };

  const close = () => dialogRef.current?.close();

  // Touch screens have no hover: flip the card to its question-mark face briefly, then open.
  const [flipping, setFlipping] = useState<string | null>(null);
  const activate = (feature: Feature) => {
    const noHover = window.matchMedia("(hover: none)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!noHover || reduceMotion) return open(feature);
    setFlipping(feature.slug);
    window.setTimeout(() => {
      open(feature);
      setFlipping(null);
    }, 280);
  };

  // Restore page scroll however the dialog closes (button, Esc, backdrop)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const d = active?.detail;

  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="features-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <h2 id="features-title" className={styles.heading}>
            Fall in <em className={styles.em}>love</em> with being <em className={styles.em}>healthy</em>
          </h2>
          <p className={styles.lead}>Set a goal. We&apos;ll do the work around it.</p>
          <p className={styles.less}>
            <span>Less planning.</span> <span>Less chasing appointments.</span>{" "}
            <span>Less wondering what to do next.</span>
          </p>
          <p className={styles.sub}>Just a simpler way to keep moving towards the healthier you.</p>
        </header>

        <ul className={styles.grid}>
          {FEATURES.map((f) => (
            <li key={f.slug} className={styles.item}>
              <button
                type="button"
                className={styles.card}
                onClick={() => activate(f)}
                data-flip={flipping === f.slug || undefined}
                aria-haspopup="dialog"
              >
                <span className={styles.content}>
                  <span className={styles.art}>
                    <Image className={styles.artImg} src={f.art} alt="" width={240} height={180} unoptimized />
                  </span>
                  <span className={styles.itemText}>
                    <span className={styles.itemTitle}>{f.title}</span>
                    <span className={styles.itemDesc}>{f.description}</span>
                  </span>
                  {/* touch screens: visible cue that the row opens something */}
                  <span className={styles.chip} aria-hidden="true">
                    ?
                  </span>
                </span>

                {/* the whole card turns into a question mark */}
                <span className={styles.reveal} aria-hidden="true">
                  <span className={styles.qmark}>?</span>
                  <span className={styles.hint}>
                    <span className={styles.hintPointer}>Click to know more</span>
                    <span className={styles.hintTouch}>Tap to know more</span>
                  </span>
                </span>
                <span className="sr-only">— know more</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="feature-dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close(); // backdrop click
        }}
      >
        {active && d && (
          <div className={styles.modal}>
            <button type="button" className={styles.close} onClick={close} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>

            <div className={styles.modalHead}>
              <Image className={styles.modalArt} src={active.art} alt="" width={240} height={180} unoptimized />
              <div>
                {d.kicker && <p className={styles.kicker}>{d.kicker}</p>}
                <h3 id="feature-dialog-title" className={styles.modalTitle}>
                  {active.title}
                </h3>
                <p className={styles.modalLead}>{d.lead}</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalText}>{d.body}</p>

              <ul className={styles.points} data-count={d.points.length}>
                {d.points.map((p) => (
                  <li key={p.title} className={styles.point}>
                    <span className={styles.pointTitle}>{p.title}</span>
                    <span className={styles.pointText}>{p.text}</span>
                  </li>
                ))}
              </ul>

              {(d.closing || d.signoff) && (
                <p className={styles.closing}>
                  {d.closing} {d.signoff && <span className={styles.signoff}>{d.signoff}</span>}
                </p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
