import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";

const StatContainer = () => {
  return (
    <Box
      marginX={8}
      flexDirection="row"
      marginBottom={21}
      style={{
        borderWidth: 1,
        borderColor: tokens.colors.borderColor,
        borderRadius: tokens.borderRadius[16],
        overflow: "hidden", 
      }}
    >
      <Box flex={1} paddingTop={12} paddingBottom={17} alignItems="center" justifyContent="center">
        <Box flexDirection="row" alignItems="center">
          <Typography
            variant="tiktokBodyRegular12"
            marginLeft={2}
            color="lightText"
          >
            Today’s Return
          </Typography>
        </Box>
        <Typography paddingTop={4} variant="tiktokBodyRegular14" color="green">
          +$20.32 (+0.55%)
        </Typography>
      </Box>

    
      <Box
        width={1}
        marginY={12}
        style={{
          backgroundColor: tokens.colors.borderColor,
        }}
      />
      <Box flex={1} paddingTop={12} paddingBottom={17} justifyContent="center" alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Typography variant="tiktokBodyRegular12" color="lightText">
            Total Returns
          </Typography>
        </Box>
        <Typography  paddingTop={4} variant="tiktokBodyRegular14" color="red">
          -$200.32 (-0.35%)
        </Typography>
      </Box>
    </Box>
  );
};

export default StatContainer;

const styles = StyleSheet.create({});
