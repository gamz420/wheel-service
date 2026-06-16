'use client';

declare global {
  interface Window {
    ym?: (id: number, method: string, goal: string, params?: Record<string, unknown>) => void;
  }
}

export const trackGoal = (goal: string, params?: Record<string, unknown>) => {
  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);

  if (counterId && typeof window !== 'undefined' && typeof window.ym === 'function') {
    window.ym(counterId, 'reachGoal', goal, params);
  }
};
