import React from 'react';
import { Pressable } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { IMAGE_SIZE } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

import { TNotificationWithLabel } from '..';

type Props = {
  item: TNotificationWithLabel;
};

export const NotificationItem = ({ item }: Props) => {
  const isToday = item.dateLabel === 'Today';

  return (
    <Box key={`notification-${item.id}`} marginY={20}>
      <Box
        flexDirection="row"
        gap={12}
        padding={isToday ? 12 : 0}
        backgroundColor={isToday ? 'lighterGray' : 'white'}
        style={{
          borderRadius: isToday ? tokens.borderRadius[14] : 0,
        }}
      >
        <Box
          backgroundColor={isToday ? 'primary' : 'gray'}
          style={{
            width: IMAGE_SIZE - 16,
            height: IMAGE_SIZE - 16,
            borderRadius: tokens.borderRadius.circle,
          }}
        />
        <Box flex={1}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="bodyMedium16">{item.title}</Typography>
            <Typography variant="bodyRegular14" color="gray">
              {item.timestamp}
            </Typography>
          </Box>
          <Typography variant="bodyRegular14" color="darkGray" marginTop={4}>
            {item.subtitle}
          </Typography>
          <Pressable onPress={() => null}>
            <Typography
              color={isToday ? 'primary' : 'black'}
              marginTop={6}
              variant="bodyMedium14"
            >
              View project
            </Typography>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};
