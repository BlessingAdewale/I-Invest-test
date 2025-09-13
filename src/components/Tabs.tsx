import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, useWindowDimensions } from 'react-native';
import { Box } from './Box';
import { Typography } from './Typography';
import { tokens } from '../constants/tokens';

type TabItem = {
  key: string;
  label: string;
};

type TabsProps = {
  tabs: TabItem[];
  activeTab: string;
  setTab: (key: string) => void;
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  activeTabStyle?: ViewStyle;
};

export const Tabs = memo(
  ({ tabs, activeTab, setTab, containerStyle, headerStyle, tabStyle, activeTabStyle }: TabsProps) => {
    const { width } = useWindowDimensions(); 

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
            width: width * 0.4, 
          },
        ]}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, tabStyle, isActive && [styles.activeTab, activeTabStyle]]}
              onPress={() => setTab(tab.key)}
            >
              <Typography
                color={isActive ? 'globalDark' : 'globalGray'}
                variant="tiktokHeadlineBold17"
                paddingY={8}
                paddingX={14}
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

Tabs.displayName = 'Tabs';

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: tokens.colors.white,
    borderColor: tokens.colors.white,
    borderRadius: tokens.borderRadius[32] + 28,
    borderWidth: tokens.borderWidth.normal,
  },
  header: {
    borderRadius: tokens.borderRadius[32]+ 28,
  },
  tab: {
    borderColor: tokens.colors.transparent,
    borderWidth: tokens.borderWidth.normal,
    marginLeft: tokens.spacing[8],
    marginVertical: tokens.spacing[10],
  },
});
