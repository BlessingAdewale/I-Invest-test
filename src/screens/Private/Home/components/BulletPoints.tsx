import React, { ReactNode } from "react";

import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import SaveIcon from "@/assets/svgs/SaveIcon";
import { tokens } from "@/src/constants/tokens";
import { TouchableOpacity } from "react-native";
import { ACTIVE_OPACITY } from "@/src/constants/globalStyles";

type TBulletsPointsProps = {
  title?: string;
  subTitle: string;
  iconLeft: ReactNode;
  titleTestID?: string;
  subTitleTestID?: string;
  paddingRight?:
    | 0
    | 2
    | 4
    | 6
    | 8
    | 10
    | 12
    | 14
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 64
    | 80;
  textPaddingLeft?:
    | 0
    | 2
    | 4
    | 6
    | 8
    | 10
    | 12
    | 14
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 64
    | 80;
};

export const BulletPoints = ({
  title,
  subTitle,
  iconLeft,
  paddingRight,
  textPaddingLeft = 16,
  titleTestID,
  subTitleTestID,
}: TBulletsPointsProps) => {
  const hasTitle = !!title;

  return (
    <Box justifyContent="space-between" flexDirection="row">
      <Box
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        paddingBottom={32}
      >
        <Box marginTop={2} paddingRight={paddingRight}>
          {iconLeft}
        </Box>
        <Box flexShrink={1} paddingLeft={hasTitle ? 0 : textPaddingLeft}>
          {hasTitle && (
            <Typography
              variant="latoBodyRegular14"
              color="globalDark"
              testID={titleTestID}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="latoBodyRegular12"
            color="textTertiaryLightDark2"
            testID={subTitleTestID}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>

      <TouchableOpacity 
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      activeOpacity={ACTIVE_OPACITY}>
        <Box
          flexDirection="row"
          alignItems="center"
          paddingX={10}
          justifyContent="center"
          style={{
            borderRadius: tokens.spacing[50],
            height: tokens.spacing[36],
            backgroundColor: tokens.colors.textBackground3,
          }}
        >
          <SaveIcon />
          <Typography
            paddingLeft={4}
            variant="latoHeadlineBold12"
            color="globalDark"
          >
            Save
          </Typography>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default BulletPoints;
