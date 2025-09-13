import dayjs from 'dayjs';

export const isSameDay = (a: string | Date, b: string | Date): boolean =>
  dayjs(a).isSame(dayjs(b), 'day');

export const getDateLabel = (createdAt: string): string => {
  const created = dayjs(createdAt);
  const now = dayjs();

  if (created.isSame(now, 'day')) return 'Today';
  if (created.isSame(now.subtract(1, 'day'), 'day')) return 'Yesterday';

  return created.format('DD MMM, YYYY'); // e.g., "04 Jun, 2025"
};
