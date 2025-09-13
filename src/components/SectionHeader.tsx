import React from "react";
import { Pressable } from "react-native";

import { Box } from "./Box";
import { Typography } from "./Typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tokens } from "../constants/tokens";

type TSectionHeaderProps = {
  leftTitle?: string;
  rightTitle?: string;
  onPress?: () => void;
};

export const SectionHeader = ({
  leftTitle,
  rightTitle,
  onPress,
}: TSectionHeaderProps) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box flexDirection="row" alignItems="center">
        <Typography
          color="globalDark"
          paddingRight={4}
          variant="EncodeSansSemiExpandedBodyRegular14"
        >
          {leftTitle}
        </Typography>
        <MaterialCommunityIcons
          name="information-outline"
          size={14}
          color={tokens.colors.deepGray}
        />
      </Box>
        <Typography onPress={onPress}   variant="tiktokBodyMedium16" color="deepBlue">
          {rightTitle}
        </Typography>
  
    </Box>
  );
};
