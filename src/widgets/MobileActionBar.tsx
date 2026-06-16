'use client';

import { siteConfig, phoneHref, whatsappHref } from '@/shared/config/site';
import { trackGoal } from '@/shared/lib/analytics';
import { Icon } from '@/shared/ui/Icon';

import styles from './MobileActionBar.module.scss';

const actions = [
  { href: phoneHref, label: 'Позвонить', icon: 'phone' as const, goal: 'mobile_phone_click' },
  { href: whatsappHref, label: 'WhatsApp', icon: 'whatsapp' as const, goal: 'mobile_whatsapp_click' },
  { href: siteConfig.mapUrl, label: 'Маршрут', icon: 'map' as const, goal: 'mobile_map_click' },
  { href: '/order', label: 'Записаться', icon: 'calendar' as const, goal: 'mobile_order_click' },
];

export function MobileActionBar() {
  return (
    <div className={styles.bar} aria-label="Быстрые действия">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
          onClick={() => trackGoal(action.goal)}
        >
          <Icon name={action.icon} />
          <span>{action.label}</span>
        </a>
      ))}
    </div>
  );
}
