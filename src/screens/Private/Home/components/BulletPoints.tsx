import React, { ReactNode } from "react";

import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";

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
    <Box>
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
              variant="tiktokBodyRegular14"
              color="textTertiaryLightDark"
              testID={titleTestID}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="tiktokBodyRegular14"
            color="lightGray"
            testID={subTitleTestID}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BulletPoints;
