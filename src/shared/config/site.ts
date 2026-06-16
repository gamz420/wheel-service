export const siteConfig = {
  name: 'Wheel Service',
  description:
    'Шиномонтаж, ремонт шин, порошковая покраска, правка и полное восстановление дисков в Махачкале и Хушете.',
  address:
    '5-я Гражданская улица, 68, квартал Перестройка, Махачкала, Республика Дагестан',
  shortAddress: 'Махачкала, 5-я Гражданская улица, 68',
  workHours: '09:00–21:00',
  phones: [
    {
      label: '+7 (989) 670-49-39',
      value: '79896704939',
    },
    {
      label: '+7 (989) 882-76-83',
      value: '79898827683',
    },
  ],
  telegram: 'WHEEL_SERVICE',
  mapUrl:
    'https://yandex.ru/maps/org/wheel_service/178010786627/?ll=47.563706%2C42.921273&z=14',
  mapEmbedUrl:
    'https://yandex.ru/map-widget/v1/?ll=47.563706%2C42.921273&z=14&oid=178010786627',
  coordinates: {
    latitude: 42.921273,
    longitude: 47.563706,
  },
  guarantee: '1 год',
} as const;

export const primaryPhone = siteConfig.phones[0];
export const phoneHref = `tel:+${primaryPhone.value}`;
export const whatsappHref = `https://wa.me/${primaryPhone.value}`;
export const telegramHref = `https://t.me/${siteConfig.telegram}`;
