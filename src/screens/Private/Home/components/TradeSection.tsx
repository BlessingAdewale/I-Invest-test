import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import BulletPoints from "./BulletPoints";
import { FontAwesome6 } from "@expo/vector-icons";
import { ReceiptIcon } from "@/assets/svgs/ReceiptIcon";
import { ACTIVE_OPACITY } from "@/src/constants/globalStyles";
import { ReceiptNoteIcon } from "@/assets/svgs/ReceiptNoteIcon";

const TradeSection = () => {
  return (
    <Box marginBottom={40}>
      <Typography textAlign="center" color="globalDark">
        Trade documents
      </Typography>
      <Typography textAlign="center" color="textTertiaryLightDark">
        Download printable copies of you account statements and trade
        confirmations.
      </Typography>
      <BulletPoints
        title="Trade Confirmation"
        subTitle="Mar 12, 2022"
        iconLeft={<ReceiptNoteIcon />}
        paddingRight={16}
      />
      <BulletPoints
        title="Trade Confirmation"
        subTitle="Mar 12, 2022"
        iconLeft={<ReceiptNoteIcon />}
        paddingRight={16}
      />
      <BulletPoints
        title="Account Statement"
        subTitle="Apr 3, 2022"
        iconLeft={<ReceiptIcon />}
        paddingRight={16}
      />
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
        <Typography>See all documents</Typography>
      </TouchableOpacity>
    </Box>
  );
};

export default TradeSection;

const styles = StyleSheet.create({});
