import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, StyleSheet } from "react-native";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";
import { Image } from "expo-image";
import { Skeleton } from "moti/skeleton";
import { SKELETON_COLORS } from "@/src/constants/globalStyles";

type THolding = {
  id: string;
  ticker: string;
  name: string;
  change: string;
  shares: string;
};

const dummyHoldings: THolding[] = [
  {
    id: "1",
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company.",
    change: "+$480.21",
    shares: "23 shares",
  },
  {
    id: "2",
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company.",
    change: "+$320.50",
    shares: "23 shares",
  },
  {
    id: "3",
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company.",
    change: "-$210.10",
    shares: "23 shares",
  },
  {
    id: "4",
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company.",
    change: "-$210.10",
    shares: "23 shares",
  },
  {
    id: "5",
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company.",
    change: "-$210.10",
    shares: "23 shares",
  },
];

const tabs = ["Stocks - NG", "Stocks - US", "T-Bills", "Fixed Deposit"];

const truncateText = (text: string, maxLength = 21) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
};

export const Holdings = () => {
  const [activeTab, setActiveTab] = useState("Stocks - NG");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box flex={1} backgroundColor="white" paddingTop={14}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: tokens.spacing[10],
          gap: 12,
        }}
        style={{ paddingVertical: tokens.spacing[12] }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <Pressable
              key={tab}
              hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
              onPress={() => setActiveTab(tab)}
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

      <Box paddingX={16}>
        {dummyHoldings.slice(0, 5).map((item) => (
          <Box
            key={item.id}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingY={12}
            style={{
              borderBottomWidth: 1,
              borderColor: tokens.colors.borderColor,
            }}
          >
            <Box flexDirection="row" alignItems="center" gap={12}>
              <Skeleton
                show={loading}
                height={40}
                width={40}
                radius={4}
                colorMode="light"
                colors={SKELETON_COLORS}
              >
                <Image
                  source={require("../../../../../assets/images/gtb.jpg")}
                  style={styles.image}
                />
              </Skeleton>

              <Box>
                <Skeleton
                  show={loading}
                  width={84}
                  height={19}
                  radius={4}
                  colorMode="light"
                  colors={SKELETON_COLORS}
                >
                  <Typography variant="tiktokEmphasisBold16" color="globalDark">
                    {item.ticker}
                  </Typography>
                </Skeleton>

                <Skeleton
                  show={loading}
                  width={182}
                  height={19}
                  radius={4}
                  colorMode="light"
                  colors={SKELETON_COLORS}
                >
                  <Typography variant="tiktokBodyRegular12" color="textGray2">
                    {truncateText(item.name)}
                  </Typography>
                </Skeleton>
              </Box>
            </Box>

            {/* Right side */}
            <Box alignItems="flex-end">
              <Skeleton
                show={loading}
                width={84}
                height={14}
                radius={4}
                colorMode="light"
            colors={SKELETON_COLORS}
              >
                <Typography
                  variant="tiktokHeadline500Bold12"
                  color="textPrimaryLightDark"
                >
                  {item.change}
                </Typography>
              </Skeleton>

              <Skeleton
                show={loading}
                width={66}
                height={14}
                radius={4}
                colorMode="light"
                colors={SKELETON_COLORS}
              >
                <Typography
                  variant="tiktokHeadline600Bold11"
                  color="deeperBlue"
                >
                  {item.shares}
                </Typography>
              </Skeleton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
