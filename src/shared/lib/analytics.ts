'use client';

type YandexMetrikaOptions = Record<string, unknown>;

declare global {
  interface Window {
    ym?: (
      id: number,
      method: 'hit' | 'reachGoal' | 'params' | 'userParams',
      value?: string | YandexMetrikaOptions,
      options?: YandexMetrikaOptions,
    ) => void;
  }
}

export const trackGoal = (goal: string, params?: YandexMetrikaOptions) => {
  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);

  if (counterId && typeof window !== 'undefined' && typeof window.ym === 'function') {
    window.ym(counterId, 'reachGoal', goal, params);
  }
};
