import React, { useMemo } from 'react';
import { SectionList } from 'react-native';

import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

import { EmptyNotification } from './components/EmptyNotification';
import { NotificationItem } from './components/NotificationItem';
import { groupNotifications } from './helpers/groupNotification';

export type TNotification = {
  id: number;
  title: string;
  subtitle: string;
  createdAt: string;
  timestamp: string;
};

export type TNotificationWithLabel = TNotification & {
  dateLabel: string;
};

const data: TNotification[] = [
  {
    id: 1,
    title: 'A new project has been set up',
    subtitle:
      'The committee has set up a new project plan scheduled for 10 May.',
    createdAt: '2025-06-02T21:18:20.811Z',
    timestamp: '7:40 PM',
  },
  {
    id: 2,
    title: 'A new project has been set up',
    subtitle:
      'The committee has set up a new project plan scheduled for 10 May.',
    createdAt: '2025-06-03T21:18:20.811Z',
    timestamp: '7:40 PM',
  },
  {
    id: 3,
    title: 'A new project has been set up',
    subtitle:
      'The committee has set up a new project plan scheduled for 10 May.',
    createdAt: '2025-06-04T21:18:20.811Z',
    timestamp: '7:40 PM',
  },
];

export default function Notifications() {
  const groupedData = useMemo(() => groupNotifications(data), []);

  return (
    <SafeScreenView edges={['bottom', 'left', 'right']}>
      <SectionList
        sections={groupedData}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => `notification-${item.id}`}
        renderSectionHeader={({ section: { label } }) => (
          <Typography
            variant="emphasisBold14"
            marginBottom={8}
            marginTop={16}
            color="darkGray"
          >
            {label}
          </Typography>
        )}
        renderItem={({ item }) => <NotificationItem item={item} />}
        ListEmptyComponent={() => <EmptyNotification />}
        contentContainerStyle={{
          paddingHorizontal: tokens.spacing[16],
          paddingBottom: tokens.spacing[8],
          flexGrow: 1, // necessary for vertical centering
        }}
      />
    </SafeScreenView>
  );
}
