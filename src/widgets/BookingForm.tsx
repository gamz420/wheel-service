'use client';

import { FormEvent, useState } from 'react';

import { primaryPhone } from '@/shared/config/site';
import { trackGoal } from '@/shared/lib/analytics';
import { Icon } from '@/shared/ui/Icon';

import styles from './BookingForm.module.scss';

const services = [
  'Порошковая покраска дисков',
  'Полное восстановление дисков',
  'Правка / сварка дисков',
  'Алмазная проточка',
  'Шиномонтаж',
  'Ремонт шин',
  'Покраска суппортов',
  'Подбор шин или дисков',
  'Другое',
];

export function BookingForm() {
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const service = String(formData.get('service') ?? '').trim();
    const car = String(formData.get('car') ?? '').trim();
    const comment = String(formData.get('comment') ?? '').trim();
    const consent = formData.get('consent');

    if (!name || !phone || !service || !consent) {
      setError('Заполните имя, телефон, услугу и подтвердите согласие.');
      return;
    }

    if (phone.replace(/\D/g, '').length < 10) {
      setError('Проверьте номер телефона.');
      return;
    }

    const message = [
      'Здравствуйте! Хочу записаться в Wheel Service.',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Услуга: ${service}`,
      car ? `Автомобиль / размер: ${car}` : '',
      comment ? `Комментарий: ${comment}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    trackGoal('booking_form_submit', { service });
    window.open(`https://wa.me/${primaryPhone.value}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.intro}>
        <span className={styles.icon}><Icon name="calendar" /></span>
        <div>
          <h3>Запись на услугу</h3>
          <p>Заполните короткую форму — заявка откроется в WhatsApp с готовым текстом.</p>
        </div>
      </div>

      <div className={styles.grid}>
        <label>
          <span>Ваше имя *</span>
          <input name="name" type="text" autoComplete="name" placeholder="Например, Магомед" />
        </label>
        <label>
          <span>Телефон *</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__" />
        </label>
        <label className={styles.full}>
          <span>Услуга *</span>
          <select name="service" defaultValue="Порошковая покраска дисков">
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>
        <label className={styles.full}>
          <span>Автомобиль, радиус или размер</span>
          <input name="car" type="text" placeholder="Например, Toyota Camry, R18" />
        </label>
        <label className={styles.full}>
          <span>Комментарий</span>
          <textarea name="comment" rows={4} placeholder="Опишите повреждение, желаемый цвет или удобное время" />
        </label>
      </div>

      <label className={styles.consent}>
        <input name="consent" type="checkbox" />
        <span>Я согласен на обработку данных для связи по заявке.</span>
      </label>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className={styles.submit}>
        Отправить в WhatsApp
        <Icon name="whatsapp" />
      </button>

      <p className={styles.note}>Предоплаты нет. Оплата после оказания услуг.</p>
    </form>
  );
}
