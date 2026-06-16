import type { SVGProps } from 'react';

export type IconName =
  | 'phone'
  | 'whatsapp'
  | 'telegram'
  | 'map'
  | 'calendar'
  | 'clock'
  | 'pin'
  | 'arrow'
  | 'check'
  | 'menu'
  | 'close'
  | 'shield'
  | 'camera'
  | 'tool'
  | 'palette';

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: Props) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />,
    whatsapp: <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.48-4.7A8.5 8.5 0 1 1 20.5 11.6Z" /><path d="M8.1 7.8c.3-.7.6-.7.9-.7h.5c.2 0 .4.1.5.5l.8 2c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.7 2.1 2.2.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l2 .9c.3.1.5.3.5.5 0 .3-.1 1.5-.7 2.1-.5.5-1.2.8-2 .7-1-.1-2.6-.6-4.4-2.2-1.5-1.3-2.5-2.9-2.8-4-.4-1.2.1-2.2.3-2.7Z" /></>,
    telegram: <><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></>,
    map: <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="16" y1="3" x2="16" y2="7" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="3" y1="11" x2="21" y2="11" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>,
    close: <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    camera: <><path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5Z" /><circle cx="12" cy="13" r="3.5" /></>,
    tool: <><path d="M14.7 6.3a4 4 0 0 0-5-5l2.2 2.2-2.8 2.8-2.2-2.2a4 4 0 0 0 5 5L20 17.2a2 2 0 1 1-2.8 2.8l-8.1-8.1" /></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a1.5 1.5 0 0 1 0-3h2a7 7 0 0 0 0-14h-2Z" /><circle cx="7.5" cy="10" r=".8" fill="currentColor" stroke="none" /><circle cx="10" cy="6.5" r=".8" fill="currentColor" stroke="none" /><circle cx="15" cy="7" r=".8" fill="currentColor" stroke="none" /></>,
  };

  return (
    <svg {...common} {...props}>
      {paths[name]}
    </svg>
  );
}
