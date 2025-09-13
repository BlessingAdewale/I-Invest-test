import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';

import { tokens } from '@/src/constants/tokens';

const POLL_DURATION_OPTIONS = ['12 hours', '24 hours', '3 days', '1 week'];

type TPollDuration = {
  selectedDuration: string;
  setDuration: (duration: string) => void;
};

export const PollDuration = ({
  selectedDuration,
  setDuration,
}: TPollDuration) => {
  return (
    <Box>
      <Typography paddingBottom={20}>Poll duration</Typography>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        style={styles.gridContainer}
      >
        {POLL_DURATION_OPTIONS.map((duration) => {
          const isSelected = selectedDuration === duration;
          return (
            <Pressable
              key={duration}
              onPress={() => setDuration(duration)}
              style={[
                styles.periodOption,
                isSelected && styles.periodOptionSelected,
              ]}
            >
              <Typography
                color={isSelected ? 'white' : 'black'}
                variant={isSelected ? 'emphasisBold18' : 'subtitleMedium18'}
                textAlign="center"
              >
                {duration}
              </Typography>
            </Pressable>
          );
        })}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing[8],
    justifyContent: 'space-between',
  },
  periodOption: {
    borderColor: tokens.colors.lightGray,
    borderRadius: tokens.borderRadius[32],
    borderWidth: 1,
    flexBasis: '23%',
    marginBottom: tokens.spacing[12],
    paddingHorizontal: tokens.spacing[8],
    paddingVertical: tokens.spacing[12],
  },
  periodOptionSelected: {
    backgroundColor: tokens.colors.black,
  },
})