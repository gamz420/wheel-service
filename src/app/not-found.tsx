import { ActionLink } from '@/shared/ui/ActionLink';
import { Icon } from '@/shared/ui/Icon';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ minHeight: '55vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <span style={{ color: 'var(--yellow)', fontWeight: 900 }}>404</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', margin: '0.5rem 0 1rem' }}>Страница не найдена</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Вернитесь на главную или откройте список услуг.</p>
          <ActionLink href="/">На главную <Icon name="arrow" /></ActionLink>
        </div>
      </div>
    </section>
  );
}
