import React from 'react';

import { EmptyPollIcon } from '@/assets/svgs/EmptyPollIcon';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

export const EmptyPollCard = () => {
  return (
    <Box alignItems="center" justifyContent="center" paddingTop={16}>
      <EmptyPollIcon />
      <Typography variant="headlineBold20" paddingTop={40} color="black">
        No voters yet
      </Typography>
    </Box>
  );
};
