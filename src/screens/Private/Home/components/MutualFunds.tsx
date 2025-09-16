import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import React from "react";
import { Box } from "@/src/components/Box";
import { FundIcon } from "@/assets/svgs/FundIcon";
import { Typography } from "@/src/components/Typography";
import { Entypo } from "@expo/vector-icons";
import { tokens } from "@/src/constants/tokens";

const MutualFundsCard = () => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      paddingY={16}
      backgroundColor="white"
      style={styles.card}
    >
      <Box style={{ marginLeft: -22 }}>
        <FundIcon />
      </Box>
      <Box flex={1}>
        <Typography variant="tiktokEmphasisBold16" color="globalDark">
          Mutual funds
        </Typography>

        <Typography
          variant="tiktokBodyRegular13"
          color="lightText"
          numberOfLines={3}
        >
          Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
          consectetur
        </Typography>

        {/* Explore row */}
        <Box flexDirection="row" alignItems="center" marginTop={6}>
          <Typography variant="tiktokBodyRegular13" color="sharpPurple2">
            Explore
          </Typography>
          <Entypo
            name="chevron-right"
            size={16}
            color={tokens.colors.stockGreen}
            style={{ marginLeft: 4 }}
          />
        </Box>
      </Box>
    </Box>
  );
};
const InformationCard = () => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      paddingY={16}
      paddingX={12}
      backgroundColor="white"
      style={styles.card}
    >
      <Box flex={1}>
        <Typography variant="tiktokEmphasisBold16" color="globalDark">
          Good faith Violations
        </Typography>
        <Typography
          variant="tiktokBodyRegular13"
          color="lightText"
          numberOfLines={3}
        >
          Good faith violations can affect how quickly your funds settle
        </Typography>
      </Box>
    </Box>
  );
};

const MutualFunds = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <MutualFundsCard />
      <InformationCard />
    </ScrollView>
  );
};

export default MutualFunds;

const styles = StyleSheet.create({
  scrollContainer: {
    gap: tokens.spacing[12], // space between cards
  },
  card: {
    width: 360,
    overflow: "hidden",
    shadowColor: "#000",
    backgroundColor: tokens.colors.white,
    borderRadius: tokens.borderRadius[5],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
});
