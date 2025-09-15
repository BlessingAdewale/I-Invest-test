import { useLocalSearchParams, useNavigation } from "expo-router";
import { Box } from "@/src/components/Box";
import { useLayoutEffect, useState } from "react";
import { tokens } from "@/src/constants/tokens";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { Pressable, ScrollView } from "react-native";
import { globalStyles } from "@/src/constants/globalStyles";
import { Typography } from "@/src/components/Typography";
import { StockValue } from "../Home/components/StockValue";
import React from "react";
import { StyleSheet } from "react-native";
import { DonutChart } from "./components/DonourtChart";
import { useRecoilState } from "recoil";
import {
  currencyTabState,
  NGN_TAB,
  USD_TAB,
} from "@/src/constants/recoil/recoilAtom";

export default function ViewPortfolio() {
  const { id, type } = useLocalSearchParams<{ id?: string; type?: string }>();
  const navigation = useNavigation();
  const [currencyTab, setCurrencyTab] = useRecoilState(currencyTabState);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: type ? type : "Portfolio",
      headerTitleStyle: {
        fontSize: tokens.spacing[14],
        fontWeight: "700",
        color: tokens.colors.headerTitleColor,
        fontFamily: "TikTokSans-Bold",
      },
    });
  }, [navigation, type]);

  const tabs = ["US", "NG"];

  const tabMap: Record<string, string> = {
    US: USD_TAB,
    NG: NGN_TAB,
  };

  type DetailItem = {
    label: string;
    value: string;
  };

  const details: DetailItem[] = [
    { label: "Today's Gain", value: "-$100.43 (-12.23%)" },
    { label: "Today's Gain", value: "-$100.43 (-12.23%)" },
    { label: "Total Cost", value: "$3,343.43" },
    { label: "First Purchase", value: "12 May, 2018" },
  ];

  return (
    <SafeScreenView
      backgroundColor={tokens.colors.background}
      edges={["left", "right", "bottom"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.containerScroll}
      >
        <Box
          paddingX={12}
          style={{
            marginTop: tokens.spacing[7],
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <Typography
            variant="EncodeSansSemiExpandedBodyRegular14"
            color="globalDark"
            paddingTop={16}
          >
            Overview
          </Typography>
          <Typography variant="tiktokBodyRegular12" color="deeperBlue">
            Breakdown of your stock impact on your portfolio
          </Typography>

          {type === "Stocks" && (
            <ScrollView
              horizontal
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 12,
              }}
              style={{ paddingVertical: tokens.spacing[12] }}
            >
              {tabs.map((tab) => {
                const isActive = currencyTab === tabMap[tab];
                return (
                  <Pressable
                    key={tab}
                    onPress={() => setCurrencyTab(tabMap[tab])}
                    style={{
                      borderRadius: tokens.borderRadius[8],
                      backgroundColor: isActive
                        ? tokens.colors.textBackground
                        : tokens.colors.textBackground2,
                    }}
                  >
                    <Typography
                      paddingX={14}
                      paddingY={8}
                      variant="tiktokHeadline700Bold12"
                      color={isActive ? "sharpPurple" : "lightText"}
                    >
                      {tab}
                    </Typography>
                  </Pressable>
                );
              })}
            </ScrollView>
          )}
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop={42}
            marginBottom={16}
          >
            <Box alignItems="center" flex={1}>
              <Box
                style={[
                  styles.dot,
                  { backgroundColor: tokens.colors.lightPurple },
                ]}
              />
              <Typography variant="tiktokHeadlineBold19" marginTop={2}>
                36%
              </Typography>
              <Typography variant="tiktokBodyRegular12" color="deeperBlue">
                $233.42
              </Typography>
              <Typography
                variant="tiktokBodyRegular12"
                color="deeperBlue"
                marginTop={2}
              >
                (Rest of portfolio)
              </Typography>
            </Box>
            <Box width={90} alignItems="center" justifyContent="center">
              <DonutChart
                data={[64, 36]}
                colors={[
                  tokens.colors.lightFairBlue,
                  tokens.colors.lightPurple,
                ]}
                radius={40}
                strokeWidth={12}
              />
            </Box>

            <Box alignItems="center" flex={1}>
              <Box
                style={[
                  styles.dot,
                  { backgroundColor: tokens.colors.lightFairBlue },
                ]}
              />
              <Typography variant="tiktokHeadlineBold19" marginTop={2}>
                64%
              </Typography>
              <Typography variant="tiktokBodyRegular12" color="deeperBlue">
                $7,343.43
              </Typography>
              <Typography
                variant="tiktokBodyRegular12"
                color="deeperBlue"
                marginTop={2}
              >
                (3 Funds)
              </Typography>
            </Box>
          </Box>
          <Box
            marginTop={12}
            style={{
              borderRadius: tokens.borderRadius[12],
              overflow: "hidden",
            }}
          >
            {details.map((item, index) => (
              <Box key={index}>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  paddingY={12}
                >
                  <Typography variant="tiktokEmphasisBold16" color="globalDark">
                    {item.label}
                  </Typography>
                  <Typography variant="tiktokBodyRegular13" color="globalDark">
                    {item.value}
                  </Typography>
                </Box>
                {index !== details.length - 1 && (
                  <Box
                    style={{
                      height: 1,
                      backgroundColor: tokens.colors.lightGray,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          style={{
            marginTop: tokens.spacing[7],
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <StockValue />
        </Box>
      </ScrollView>
    </SafeScreenView>
  );
}
const styles = StyleSheet.create({
  dot: {
    width: tokens.spacing[8],
    height: tokens.spacing[8],
    borderRadius: tokens.borderRadius[4],
    marginBottom: tokens.spacing[4],
  },
});
