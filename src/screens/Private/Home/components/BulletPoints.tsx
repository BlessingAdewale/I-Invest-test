import React, { ReactNode, useState, useEffect } from "react";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import SaveIcon from "@/assets/svgs/SaveIcon";
import { tokens } from "@/src/constants/tokens";
import { TouchableOpacity } from "react-native";
import { ACTIVE_OPACITY, SKELETON_COLORS } from "@/src/constants/globalStyles";
import { Skeleton } from "moti/skeleton";

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
  const [loading, setLoading] = useState(true);
  const hasTitle = !!title;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box justifyContent="space-between" flexDirection="row">
      <Box
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        paddingBottom={32}
      >
        <Skeleton
          show={loading}
          height={24}
          width={24}
          radius={4}
          colorMode="light"
         colors={SKELETON_COLORS}
        >
          <Box marginTop={2} paddingRight={paddingRight}>
            {iconLeft}
          </Box>
        </Skeleton>

        <Box flexShrink={1} paddingLeft={hasTitle ? 0 : textPaddingLeft}>
          {hasTitle && (
            <Skeleton
              show={loading}
              height={18}
              width={140}
              radius={4}
              colorMode="light"
              colors={["#f2f2f2", "#e6e6e6", "#f2f2f2"]}
            >
              <Typography
                variant="latoBodyRegular14"
                color="globalDark"
                testID={titleTestID}
              >
                {title}
              </Typography>
            </Skeleton>
          )}

          <Skeleton
            show={loading}
            height={18}
            width={104}
            radius={4}
            colorMode="light"
             colors={SKELETON_COLORS}
          >
            <Typography
              variant="latoBodyRegular12"
              color="textTertiaryLightDark2"
              testID={subTitleTestID}
            >
              {subTitle}
            </Typography>
          </Skeleton>
        </Box>
      </Box>

      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        activeOpacity={ACTIVE_OPACITY}
      >
        <Skeleton
          show={loading}
          height={38}
          width={80}
          radius={50}
          colorMode="light"
          colors={SKELETON_COLORS}
        >
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
        </Skeleton>
      </TouchableOpacity>
    </Box>
  );
};

export default BulletPoints;
