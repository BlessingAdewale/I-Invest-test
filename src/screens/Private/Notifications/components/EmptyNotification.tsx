import React from 'react';

import { EmptyNotificationIcon } from '@/assets/svgs/EmptyNotificationIcon';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

export const EmptyNotification = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      paddingBottom={40}
    >
      <EmptyNotificationIcon />
      <Typography variant="headlineBold20" paddingTop={40} color="black">
        No notifications
      </Typography>
      <Typography variant="bodyMedium16" paddingTop={12} color="darkGray">
        You’re all caught up on right now
      </Typography>
    </Box>
  );
};
