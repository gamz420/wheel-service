'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

import { trackGoal } from '@/shared/lib/analytics';

import styles from './ActionLink.module.scss';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'md' | 'lg';
  className?: string;
  goal?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ActionLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  goal,
  external,
  ariaLabel,
}: Props) {
  const classNames = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ');
  const commonProps = {
    className: classNames,
    onClick: () => goal && trackGoal(goal, { href }),
    'aria-label': ariaLabel,
  };

  if (external || href.startsWith('http') || href.startsWith('tel:')) {
    return (
      <a {...commonProps} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link {...commonProps} href={href}>
      {children}
    </Link>
  );
}
