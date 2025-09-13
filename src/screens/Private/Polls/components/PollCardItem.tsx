import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { PollBarIcon } from '@/assets/svgs/PollBarIcon';
import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';
import { TPoll } from '@/src/mock/MockUser';

import { usePollCountdown } from '../helper/pollCountDown';

type TPollCardItem = {
  item: TPoll;
  onPress?: () => void;
};

export const PollCardItem = ({ item, onPress }: TPollCardItem) => {
  const { timeLeft, isCompleted } = usePollCountdown(item);

  const CardContent = (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box flexDirection="row" alignItems="center">
        <Box
          justifyContent="center"
          alignItems="center"
          backgroundColor={isCompleted ? 'lighterGray' : 'primaryLight'}
          marginRight={12}
          style={styles.boxWrap}
        >
          <PollBarIcon
            color={isCompleted ? tokens.colors.darkGray : tokens.colors.primary}
          />
        </Box>

        <Box>
          <Typography variant="bodyMedium16" color="black">
            {item.title}
          </Typography>
          <Box flexDirection="row" alignItems="center" paddingTop={8}>
            <Typography variant="bodyRegular14" color="darkGray">
              {item.voters.length} votes
              <Typography
                color="black"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: tokens.borderRadius[8],
                }}
              >
                {' '}
                •{' '}
              </Typography>
              {timeLeft}
            </Typography>
          </Box>
        </Box>
      </Box>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color={tokens.colors.darkGray}
      />
    </Box>
  );

  return onPress ? (
    <Pressable onPress={onPress}>{CardContent}</Pressable>
  ) : (
    CardContent
  );
};

const styles = StyleSheet.create({
  boxWrap: {
    width: 48,
    height: 48,
    borderRadius: tokens.borderRadius.circle,
  },
});
