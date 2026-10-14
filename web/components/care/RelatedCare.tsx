import Image from "next/image";
import Link from "next/link";
import { CARE_GOALS } from "@/lib/care";
import styles from "./RelatedCare.module.css";

/** Image cards linking to other care pages. */
export default function RelatedCare({ slugs }: { slugs: string[] }) {
  const goals = slugs
    .map((slug) => CARE_GOALS.find((g) => g.slug === slug))
    .filter((g) => g !== undefined);

  return (
    <ul className={styles.list} role="list">
      {goals.map((goal) => (
        <li key={goal.slug}>
          <Link href={`/care/${goal.slug}`} className={styles.card} data-theme={goal.theme}>
            <span className={styles.imgWrap} data-white-bg={goal.whiteBackground || undefined}>
              <Image
                src={goal.image.src}
                alt=""
                fill
                sizes="(max-width: 760px) 90vw, 360px"
                className={styles.img}
              />
            </span>
            <span className={styles.text}>
              <span className={styles.label}>{goal.label}</span>
              <span className={styles.title}>{goal.title}</span>
              <span className={styles.more}>
                Explore care <span aria-hidden="true">→</span>
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
