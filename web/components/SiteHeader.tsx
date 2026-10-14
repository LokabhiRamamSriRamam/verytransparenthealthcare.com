"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AUTH_LINK, DOCTORS_LINK, MAIN_NAV, isGroup } from "@/lib/navigation";
import Logo from "./Logo";
import styles from "./SiteHeader.module.css";

const menuId = (label: string) => `menu-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

function Chevron() {
  return (
    <svg className={styles.chev} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Close everything on navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click and Escape
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={styles.wrap}>
      <div ref={barRef} className={styles.bar}>
        <div className={styles.row}>
          <Link className={styles.brand} href="/" aria-label="Very Transparent Healthcare — home">
            <Logo width={196} />
          </Link>

          <nav className={styles.nav} aria-label="Main">
            <ul className={styles.links}>
              {MAIN_NAV.map((entry) =>
                isGroup(entry) ? (
                  <li
                    key={entry.label}
                    className={styles.item}
                    onMouseEnter={() => setOpenMenu(entry.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      className={styles.trigger}
                      aria-expanded={openMenu === entry.label}
                      aria-controls={menuId(entry.label)}
                      onClick={() => setOpenMenu((cur) => (cur === entry.label ? null : entry.label))}
                    >
                      {entry.label}
                      <Chevron />
                    </button>
                    <ul
                      id={menuId(entry.label)}
                      className={styles.menu}
                      data-open={openMenu === entry.label}
                    >
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <Link className={styles.menuLink} href={item.href}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={entry.href} className={styles.item}>
                    <Link className={styles.link} href={entry.href}>
                      {entry.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link className={styles.login} href={AUTH_LINK.href}>
              {AUTH_LINK.label}
            </Link>
            <Link className={styles.doctors} href={DOCTORS_LINK.href}>
              {DOCTORS_LINK.label}
            </Link>
          </div>

          <button
            type="button"
            className={styles.burger}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span data-open={mobileOpen} />
          </button>
        </div>

        {/* Mobile menu: expands inside the same rounded bar */}
        <nav id="mobile-nav" className={styles.mobile} data-open={mobileOpen} aria-label="Main mobile">
          <ul className={styles.mobileList}>
            {MAIN_NAV.map((entry) =>
              isGroup(entry) ? (
                <li key={entry.label}>
                  <button
                    type="button"
                    className={styles.mobileTrigger}
                    aria-expanded={mobileGroup === entry.label}
                    onClick={() => setMobileGroup((cur) => (cur === entry.label ? null : entry.label))}
                  >
                    {entry.label}
                    <Chevron />
                  </button>
                  <ul className={styles.mobileSub} data-open={mobileGroup === entry.label}>
                    {entry.items.map((item) => (
                      <li key={item.href}>
                        <Link className={styles.mobileSubLink} href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={entry.href}>
                  <Link className={styles.mobileLink} href={entry.href}>
                    {entry.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className={styles.mobileActions}>
            <Link className={styles.mobileLogin} href={AUTH_LINK.href}>
              {AUTH_LINK.label}
            </Link>
            <Link className={styles.doctors} href={DOCTORS_LINK.href}>
              {DOCTORS_LINK.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
