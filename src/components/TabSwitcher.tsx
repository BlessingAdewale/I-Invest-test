import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, View } from 'react-native';
import { Typography } from './Typography';
import { tokens } from '../constants/tokens';

type TabItem = {
  key: string;
  label: string;
};

type TabSwitcherProps = {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
  containerStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  activeTabStyle?: ViewStyle;
};

export const TabSwitcher = memo(
  ({ tabs, activeTab, onTabChange, containerStyle, tabStyle, activeTabStyle }: TabSwitcherProps) => {
    return (
      <View style={[styles.container, containerStyle]}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, tabStyle, isActive && [styles.activeTab, activeTabStyle]]}
              onPress={() => onTabChange(tab.key)}
            >
              <Typography
                variant="tiktokBodyMedium16"
                color={isActive ? 'globalDark' : 'globalGray'}
                padding={12}
              >
                {tab.label}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

TabSwitcher.displayName = 'TabSwitcher';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: tokens.colors.lightGray,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: tokens.colors.black,
  },
});
