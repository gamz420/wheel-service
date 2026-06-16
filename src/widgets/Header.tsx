'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { phoneHref } from '@/shared/config/site';
import { ActionLink } from '@/shared/ui/ActionLink';
import { Icon } from '@/shared/ui/Icon';

import styles from './Header.module.scss';

const navigation = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/prices', label: 'Цены' },
  { href: '/works', label: 'Работы' },
  { href: '/contacts', label: 'Контакты' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Wheel Service — главная">
          <Image
            src="/images/logo-white.png"
            alt="Wheel Service"
            width={210}
            height={120}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Основная навигация">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? styles.active : undefined}>
                {item.label}
              </Link>
            );
          })}
          <ActionLink href="/order" variant="primary" goal="header_order_click" className={styles.mobileOrder}>
            Записаться
          </ActionLink>
        </nav>

        <div className={styles.actions}>
          <a href={phoneHref} className={styles.phone} aria-label="Позвонить в Wheel Service">
            <Icon name="phone" />
            <span>+7 (989) 670-49-39</span>
          </a>
          <ActionLink href="/order" variant="primary" goal="header_order_click">
            Записаться
          </ActionLink>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
