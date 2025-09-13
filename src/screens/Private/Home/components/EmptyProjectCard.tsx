import React from 'react';
import { Pressable } from 'react-native';

import { EmptyProjectIcon } from '@/assets/svgs/EmptyProjectIcon';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { useUser } from '@/src/hooks/useUser';

export const EmptyProjectCard = () => {
  const { isAdmin } = useUser();
  return (
    <Box alignItems="center" justifyContent="center" paddingTop={16}>
      <EmptyProjectIcon />
      <Typography variant="headlineBold20" paddingTop={40} color="black">
        No projects have been created
      </Typography>
      {isAdmin && (
        <Pressable onPress={() => null}>
          <Typography variant="bodyMedium14" paddingTop={12} color="primary">
            Choose from template
          </Typography>
        </Pressable>
      )}
    </Box>
  );
};
