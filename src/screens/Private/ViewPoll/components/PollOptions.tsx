import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Fragment } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { Typography } from '@/src/components/Typography';
import { tokens } from '@/src/constants/tokens';

type TPollOptionsProps = {
  responses: {
    id: string;
    option: string;
    votes: number;
    voters: unknown[];
  }[];
  selectedIndex: number | null;
  hasVoted: boolean;
  isCompleted: boolean;
  totalVotes: number;
  handleVote: (index: number) => void;
};

export const PollOptions = ({
  responses,
  selectedIndex,
  hasVoted,
  isCompleted,
  totalVotes,
  handleVote,
}: TPollOptionsProps) => {
  return (
    <Box gap={tokens.spacing[12]}>
      {responses.map((item) => {
        const responseIndex = responses.findIndex((r) => r.id === item.id);
        const isSelected = selectedIndex === responseIndex;
        const percentage =
          totalVotes === 0 ? 0 : (item.votes / totalVotes) * 100;

        return (
          <Box
            backgroundColor={isSelected && hasVoted ? 'primaryLight' : 'white'}
            key={item.id}
            style={styles.wrapper}
          >
            {hasVoted && (
              <Fragment>
                <Box
                  backgroundColor={isSelected ? 'primary' : 'primaryLight'}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: `${percentage}%`,
                  }}
                />
                {isSelected && (
                  <Box
                    backgroundColor="primaryLight"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: `${percentage}%`,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                )}
              </Fragment>
            )}

            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              paddingY={12}
              paddingX={16}
              style={{
                borderColor: isSelected
                  ? tokens.colors.primary
                  : tokens.colors.transparent,
                zIndex: 1,
              }}
            >
              <Pressable
                onPress={() => handleVote(responseIndex)}
                disabled={hasVoted}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                {selectedIndex === null && !isCompleted ? (
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={20}
                    color={tokens.colors.gray}
                    style={{ marginRight: tokens.spacing[10] }}
                  />
                ) : isSelected ? (
                  <AntDesign
                    name="checkcircle"
                    size={20}
                    color="white"
                    style={{ marginRight: tokens.spacing[10] }}
                  />
                ) : null}

                <Typography
                  variant="bodyMedium16"
                  color={isSelected ? 'white' : 'black'}
                  style={{ flexShrink: 1 }}
                >
                  {item.option}
                </Typography>
              </Pressable>

              {hasVoted && (
                <Typography
                  variant="bodyMedium16"
                  color={isSelected ? 'white' : 'black'}
                  marginLeft={12}
                >
                  {item.votes} votes
                </Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    borderRadius: tokens.borderRadius[8],
    overflow: 'hidden',
  },
});
