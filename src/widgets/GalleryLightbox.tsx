'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { GalleryWork } from '@/entities/service/works';
import { Icon } from '@/shared/ui/Icon';

import styles from './GalleryLightbox.module.scss';
import sectionStyles from './Sections.module.scss';

type Props = {
  works: GalleryWork[];
};

export function GalleryLightbox({ works }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeWork = activeIndex === null ? null : works[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? works.length - 1 : current - 1;
    });
  };
  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === works.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => {
          if (current === null) return current;
          return current === 0 ? works.length - 1 : current - 1;
        });
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => {
          if (current === null) return current;
          return current === works.length - 1 ? 0 : current + 1;
        });
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, works.length]);

  return (
    <>
      <div className={sectionStyles.galleryGrid}>
        {works.map((work, index) => (
          <figure
            key={work.src}
            className={index === 0 || index === 5 ? sectionStyles.galleryLarge : undefined}
          >
            <Image src={work.src} alt={work.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
            <figcaption>
              <span>{work.title}</span>
              <small>Wheel Service</small>
            </figcaption>
            <button
              type="button"
              className={styles.trigger}
              onClick={() => setActiveIndex(index)}
              aria-label={`Открыть работу: ${work.title}`}
            />
          </figure>
        ))}
      </div>

      {activeIndex !== null && activeWork && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={activeWork.title}>
          <button type="button" className={styles.backdrop} onClick={() => setActiveIndex(null)} aria-label="Закрыть просмотр" />

          <div className={styles.viewer}>
            <div className={styles.stage}>
              <Image
                src={activeWork.src}
                alt={activeWork.alt}
                fill
                sizes="100vw"
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.caption}>
              <div>
                <strong>{activeWork.title}</strong>
                <span>
                  {activeIndex + 1} / {works.length}
                </span>
              </div>
              <button type="button" onClick={() => setActiveIndex(null)} aria-label="Закрыть просмотр">
                <Icon name="close" />
              </button>
            </div>

            {works.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.navButtonPrev}`}
                  onClick={showPrevious}
                  aria-label="Предыдущая работа"
                >
                  <Icon name="arrow" />
                </button>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.navButtonNext}`}
                  onClick={showNext}
                  aria-label="Следующая работа"
                >
                  <Icon name="arrow" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
