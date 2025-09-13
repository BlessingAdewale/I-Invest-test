import { Feather } from '@expo/vector-icons';
import React, { memo } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from './Box';
import { Typography } from './Typography';
import { ACTIVE_OPACITY } from '../constants/globalStyles';
import { tokens } from '../constants/tokens';

type TAddNewEstateButton = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
export const AddNewEstateButton = memo(
  ({ style, onPress }: TAddNewEstateButton) => {
    const { bottom } = useSafeAreaInsets();
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={ACTIVE_OPACITY}
        style={style}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginX={16}
          marginBottom={bottom ? 0 : 24}
        >
          <Feather name="plus" size={24} color={tokens.colors.darkGray} />
          <Typography
            variant="bodyRegular14"
            color="darkGray"
            textAlign="center"
            paddingY={16}
            paddingLeft={8}
          >
            Add new estate
          </Typography>
        </Box>
      </TouchableOpacity>
    );
  }
);

AddNewEstateButton.displayName = 'AddNewEstateButton';
