export type RadiusPrice = {
  radius: string;
  balancing: number;
  tireService: number;
  painting: number;
  wheelRepair: number;
};

export const radiusPrices: RadiusPrice[] = [
  { radius: 'R13–14', balancing: 1000, tireService: 1400, painting: 10000, wheelRepair: 600 },
  { radius: 'R15', balancing: 1100, tireService: 1600, painting: 11000, wheelRepair: 700 },
  { radius: 'R16', balancing: 1200, tireService: 1800, painting: 12000, wheelRepair: 800 },
  { radius: 'R17', balancing: 1400, tireService: 2000, painting: 13000, wheelRepair: 900 },
  { radius: 'R18', balancing: 1600, tireService: 2200, painting: 14000, wheelRepair: 1000 },
  { radius: 'R19', balancing: 1800, tireService: 2500, painting: 15000, wheelRepair: 1200 },
  { radius: 'R20', balancing: 2000, tireService: 3000, painting: 16000, wheelRepair: 1400 },
  { radius: 'R21', balancing: 2200, tireService: 3500, painting: 17000, wheelRepair: 1600 },
  { radius: 'R22', balancing: 2500, tireService: 4000, painting: 18000, wheelRepair: 1800 },
  { radius: 'R23', balancing: 3000, tireService: 5000, painting: 19000, wheelRepair: 2000 },
];

export const extraPrices = [
  { title: 'Кроссовер: балансировка', price: '+300 ₽' },
  { title: 'Джип: балансировка', price: '+600 ₽' },
  { title: 'Кроссовер: шиномонтаж', price: '+600 ₽' },
  { title: 'Джип: шиномонтаж', price: '+1 000 ₽' },
  { title: 'Железные диски R13–14: правка', price: '300 ₽' },
  { title: 'Железные диски R15–16: правка', price: '400 ₽' },
  { title: 'Резина RunFlat', price: '100 ₽' },
  { title: 'Резина M/T', price: '100 ₽' },
  { title: 'Заплатка', price: 'от 500 ₽' },
  { title: 'Замена вентиля', price: '50 ₽' },
  { title: 'Герметик бортов', price: '100 ₽' },
  { title: 'Аргон', price: 'от 500 ₽' },
  { title: 'Установка датчика', price: '100 ₽' },
];

export const formatPrice = (price: number) => `${new Intl.NumberFormat('ru-RU').format(price)} ₽`;
