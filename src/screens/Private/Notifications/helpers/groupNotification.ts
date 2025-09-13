import { TNotification, TNotificationWithLabel } from '..';
import { getDateLabel } from './getDateLabel';

export type GroupedNotification = {
  label: string;
  data: TNotificationWithLabel[];
};

export const groupNotifications = (
  notifications: TNotification[]
): GroupedNotification[] => {
  const groups: Record<string, TNotificationWithLabel[]> = {};

  notifications.forEach((item) => {
    const label = getDateLabel(item.createdAt);
    const itemWithLabel: TNotificationWithLabel = { ...item, dateLabel: label };

    if (!groups[label]) groups[label] = [];
    groups[label].push(itemWithLabel);
  });

  // Sort notifications within each group by createdAt (newest first)
  Object.values(groups).forEach((items) =>
    items.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  );

  return Object.entries(groups)
    .map(([label, items]) => ({ label, data: items }))
    .reverse();
};
