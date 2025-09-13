import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { Box } from '@/src/components/Box';
import { TextInput } from '@/src/components/TextInput';
import { Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

type TResponseOption = { id: string; value: string };

type TPoll = {
  responseOptions: TResponseOption[];
};

type TPollResponsesProps = {
  poll: TPoll;
  updatePoll: (updates: Partial<TPoll>) => void;
};

export const PollResponses = ({ poll, updatePoll }: TPollResponsesProps) => {
  const handleAddResponse = useCallback(() => {
    updatePoll({
      responseOptions: [
        ...poll.responseOptions,
        { id: Date.now().toString(), value: '' },
      ],
    });
  }, [poll.responseOptions, updatePoll]);

  const handleChangeResponseText = useCallback(
    (id: string, text: string) => {
      updatePoll({
        responseOptions: poll.responseOptions.map((r) =>
          r.id === id ? { ...r, value: text } : r
        ),
      });
    },
    [poll.responseOptions, updatePoll]
  );

  return (
    <Box>
      {poll.responseOptions.map((response, index) => (
        <TextInput
          key={response.id}
          label={`Response ${index + 1}`}
          placeholder={`Option ${index + 1}`}
          value={response.value}
          onChangeText={(text) => handleChangeResponseText(response.id, text)}
        />
      ))}

      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={handleAddResponse}
        style={{
          marginTop: tokens.spacing[4],
          marginBottom: tokens.spacing[32],
        }}
      >
        <Typography variant="bodyMedium16" color="black">
          + Add more responses
        </Typography>
      </TouchableOpacity>
    </Box>
  );
};
