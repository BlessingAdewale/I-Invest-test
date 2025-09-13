import React from 'react';
import { Pressable } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { EmptyMembersIcon } from '@/assets/svgs/EmptyMembersIcon';

type Spacing =
  | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14
  | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 80;

type EmptyMembersProps = {
  text?: string;
  executive?: boolean;
  onPress?: () => void;
  paddingTop?: Spacing;
};

export const EmptyMembers = ({
  text = 'Invite members',
  onPress = () => {},
  executive = false,
  paddingTop = 16,
}: EmptyMembersProps) => {
  return (
    <Box alignItems="center" justifyContent="center" paddingTop={paddingTop}>
      <EmptyMembersIcon />
      <Typography variant="headlineBold20" paddingTop={40} color="black">
        No {executive ? 'executives' : 'members'} have been added
      </Typography>
      {!executive && (
        <Pressable onPress={onPress}>
          <Typography variant="bodyMedium14" paddingTop={12} color="primary">
            {text || ''}
          </Typography>
        </Pressable>
      )}
    </Box>
  );
};
