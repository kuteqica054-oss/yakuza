import { CALC } from '../config/site';

export type CalcInput = { area: number; hours: number; price: number; occupancy: number };

/** Revenue estimate. Pure function — shared by the server render and the browser. */
export function estimate(i: CalcInput, c = CALC) {
  const capacity = Math.max(1, Math.min(c.maxPlayers, Math.floor(i.area / c.m2PerPlayer)));
  const sessions = Math.floor((i.hours * 60) / c.slotMinutes);
  const daily = capacity * sessions * (i.occupancy / 100) * i.price;
  const monthly = daily * c.daysPerMonth;
  return { capacity, sessions, monthly, yearly: monthly * 12 };
}
