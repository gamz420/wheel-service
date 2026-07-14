import Image from 'next/image';
import Link from 'next/link';

import { siteConfig, telegramHref, whatsappHref } from '@/shared/config/site';
import { Icon } from '@/shared/ui/Icon';

import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/images/logo-white.png" alt="Wheel Service" width={210} height={120} />
          <p>
            Шиномонтаж, ремонт шин, покраска и полное восстановление дисков в Махачкале.
          </p>
        </div>

        <div>
          <h3>Разделы</h3>
          <div className={styles.links}>
            <Link href="/services">Услуги</Link>
            <Link href="/prices">Цены</Link>
            <Link href="/works">Примеры работ</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="/privacy">Конфиденциальность</Link>
          </div>
        </div>

        <div>
          <h3>Связаться</h3>
          <div className={styles.links}>
            {siteConfig.phones.map((phone) => (
              <a key={phone.value} href={`tel:+${phone.value}`}>
                {phone.label}
              </a>
            ))}
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={telegramHref} target="_blank" rel="noreferrer">
              Telegram @{siteConfig.telegram}
            </a>
          </div>
        </div>

        <div>
          <h3>Адрес</h3>
          <p className={styles.address}>
            <Icon name="pin" />
            <span>{siteConfig.address}</span>
          </p>
          <p className={styles.address}>
            <Icon name="clock" />
            <span>{siteConfig.workHours}</span>
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Wheel Service</span>
        <span>Цены на сайте не являются публичной офертой.</span>
        <a className={styles.creator} href="https://t.me/gamzalievgamz" target="_blank" rel="noreferrer">
          Создание сайта: gamzalievgamz
        </a>
      </div>
    </footer>
  );
}
