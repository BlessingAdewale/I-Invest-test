import { TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import BulletPoints from "./BulletPoints";
import { ReceiptIcon } from "@/assets/svgs/ReceiptIcon";
import { ACTIVE_OPACITY } from "@/src/constants/globalStyles";
import { ReceiptNoteIcon } from "@/assets/svgs/ReceiptNoteIcon";
import { tokens } from "@/src/constants/tokens";

const TradeSection = () => {
  return (
    <Box marginBottom={40}>
      <Typography
        variant="EncodeSansSemiExpandedEmphasisBold16"
        paddingBottom={4}
        textAlign="center"
        color="globalDark"
      >
        Trade documents
      </Typography>
      <Typography
        variant="latoBodyRegular14"
        paddingBottom={40}
        textAlign="center"
        color="textTertiaryLightDark"
      >
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

      <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      activeOpacity={ACTIVE_OPACITY}>
        <Box
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          style={{
            borderWidth: 1,
            borderColor: tokens.colors.textBorder,
            borderRadius: tokens.spacing[50],
             alignSelf: "center",
          }}
        >
          <Typography
            variant="latoHeadlineBold12"
            textAlign="center"
            color="sharpPurple2"
            paddingY={10}
            paddingX={16}
          >
            See all documents
          </Typography>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default TradeSection;
