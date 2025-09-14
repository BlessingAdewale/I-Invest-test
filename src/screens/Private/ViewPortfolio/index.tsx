import { useLocalSearchParams, useNavigation } from "expo-router";
import { Box } from "@/src/components/Box";
import { useLayoutEffect, useState } from "react";
import { tokens } from "@/src/constants/tokens";
import SafeScreenView from "@/src/components/SafeAreaScreen";
import { Pressable, ScrollView } from "react-native";
import { globalStyles } from "@/src/constants/globalStyles";
import { Typography } from "@/src/components/Typography";

export default function ViewPortfolio() {
  const { id, type } = useLocalSearchParams<{ id?: string; type?: string }>();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("US");
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

  return (
    <SafeScreenView
      backgroundColor={tokens.colors.background}
      edges={["left", "right"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.containerScroll}
      >
        <Box
          style={{
            marginTop: tokens.spacing[7],
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        >
          <Typography>Overview</Typography>
          <Typography>
            Breakdown of your stock impact on your portfolio
          </Typography>
          <ScrollView
            horizontal
            scrollEnabled={false}
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
        </Box>

        <Box
          style={{
            marginTop: tokens.spacing[7],
            backgroundColor: tokens.colors.white,
            borderRadius: tokens.borderRadius[4],
          }}
        ></Box>
      </ScrollView>
    </SafeScreenView>
  );
}
