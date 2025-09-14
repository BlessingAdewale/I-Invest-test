import React, { useEffect, useState } from "react";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";

import { AmountDisplay } from "./AmountDisplay";
import { useRecoilValue } from "recoil";
import { currencyTabState, USD_TAB } from "@/src/constants/recoil/recoilAtom";
import { ArrowUpIcon } from "@/assets/svgs/ArrowIcon";

import {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedReaction,
  runOnJS,
} from "react-native-reanimated";

type TUserDetails = {
  walletBalance: string;
};

type BalanceDashboardProps = {
  onBankingInfoPress?: () => void;
  date?: string
};

export const BalanceDashboard = ({
  onBankingInfoPress,
  date='This month'
}: BalanceDashboardProps) => {
  const activeTab = useRecoilValue(currencyTabState);

  const userDetails: TUserDetails = {
    walletBalance: activeTab === USD_TAB ? "$2,800.34" : "₦24,262,450.30",
  };

  const numericBalance =
    parseFloat(userDetails.walletBalance.replace(/[^0-9.-]+/g, "")) || 0;
  const isZeroBalance = numericBalance === 0;
  const zeroAmount = isZeroBalance
    ? tokens.colors.gray
    : tokens.colors.darkGray;

  const percentShared = useSharedValue(0);
  const [percent, setPercent] = useState(0);

  useAnimatedReaction(
    () => percentShared.value,
    (value) => {
      runOnJS(setPercent)(value);
    },
    []
  );

  useEffect(() => {
    percentShared.value = withTiming(2.16, {
      duration: 1500,
      easing: Easing.out(Easing.cubic),
    });
  }, []);

  return (
    <Box paddingTop={12} paddingBottom={20} paddingX={8}>
      <Typography
        variant="tiktokBodyMedium14"
        color="text"
        style={{ color: zeroAmount }}
      >
        Portfolio Balance
      </Typography>

      <Box
        paddingTop={8}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <AmountDisplay amount={userDetails.walletBalance} />
      </Box>

      <Box paddingTop={4} flexDirection="row" alignItems="center">
        <Box
          flexDirection="row"
          alignItems="center"
          style={{ backgroundColor: tokens.colors.stockGreen }}
        >
          <Box flexDirection="row" alignItems="center" paddingY={6} marginX={8}>
            <ArrowUpIcon />
            <Typography variant="tiktokHeadlineBold12" marginLeft={4}>
              {percent.toFixed(2)}%
            </Typography>
          </Box>
        </Box>
        <Typography
          paddingLeft={4}
          variant="tiktokEmphasisBold16"
          color="textGray"
        >
{date}
        </Typography>
      </Box>
    </Box>
  );
};
