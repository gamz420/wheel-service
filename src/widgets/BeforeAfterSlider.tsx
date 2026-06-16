'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './BeforeAfterSlider.module.scss';

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(54);

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <Image
          src="/images/work-lexus-after.webp"
          alt="Диск после восстановления и алмазной проточки"
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
          className={styles.image}
        />
        <div className={styles.before} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src="/images/work-lexus-before.webp"
            alt="Диск до восстановления"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.image}
          />
        </div>

        <span className={`${styles.label} ${styles.labelBefore}`}>До</span>
        <span className={`${styles.label} ${styles.labelAfter}`}>После</span>
        <div className={styles.divider} style={{ left: `${position}%` }} aria-hidden="true">
          <span>↔</span>
        </div>

        <input
          className={styles.range}
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Сравнить диск до и после восстановления"
        />
      </div>
      <p className={styles.hint}>Передвигайте ползунок, чтобы сравнить результат.</p>
    </div>
  );
}
