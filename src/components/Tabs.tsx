import React, { memo } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Box } from "./Box";
import { Typography } from "./Typography";
import { tokens } from "../constants/tokens";

type TabItem = {
  key: string;
  label: string;
};

type TabsProps = {
  tabs: TabItem[];
  activeTab: string;
  setTab: (key: string) => void;
  size?: "default" | "compact";
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  activeTabStyle?: ViewStyle;
};

export const Tabs = memo(
  ({
    tabs,
    activeTab,
    setTab,
    size = "default",
    containerStyle,
    headerStyle,
    tabStyle,
    activeTabStyle,
  }: TabsProps) => {
   
    const isCompact = size === "compact";

    return (
      <Box
        flexDirection="row"
        marginBottom={12}
        style={[
          styles.header,
          headerStyle,
          containerStyle,
          {
            backgroundColor: tokens.colors.lightGray,
            width: isCompact ? undefined : undefined,
            alignSelf: "flex-start",
            paddingRight: isCompact ? undefined : tokens.spacing[8],
          },
        ]}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tab,
                isCompact && styles.compactTab,
                tabStyle,
                isActive && [styles.activeTab, activeTabStyle],
              ]}
              onPress={() => setTab(tab.key)}
            >
              <Typography
                color={isActive ? "globalDark" : "globalGray"}
                variant={
                  isCompact ? "tiktokHeadlineBold19" : "tiktokHeadlineBold11"
                }
                {...(isCompact
                  ? { padding: 0 }
                  : {
                      paddingY: 6,
                      paddingX: 6,
                    })}
                marginX={isCompact ? 4 : 0}
              >
                {tab.label}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </Box>
    );
  }
);

Tabs.displayName = "Tabs";

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: tokens.colors.white,
    borderColor: tokens.colors.white,
    borderRadius: tokens.borderRadius.circle,
    borderWidth: tokens.borderWidth.normal,
  },
  header: {
    borderRadius: tokens.borderRadius[32] + 28,
  },
  tab: {
    borderColor: tokens.colors.transparent,
    borderWidth: tokens.borderWidth.normal,
    marginLeft: tokens.spacing[8],
    marginVertical: tokens.spacing[6],
  },
  compactTab: {
    width: tokens.spacing[36],
    height: tokens.spacing[36],
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: tokens.spacing[4],
    marginVertical: tokens.spacing[4],
    marginLeft: tokens.spacing[4],
    borderRadius: tokens.borderRadius[16] + 2,
  },
});
