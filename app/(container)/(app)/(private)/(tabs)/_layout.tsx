import { Tabs } from "expo-router";
import React from "react";

import {  HomeIcon } from "@/assets/svgs";
import { WalletIcon } from "@/assets/svgs/WalletIcon";
import { TransactionsIcon } from "@/assets/svgs/TransactionsIcon";
import { ProfileIcon } from "@/assets/svgs/ProfileIcon";
import { tokens } from "@/src/constants/tokens";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tokens.colors.globalDark,
        tabBarInactiveTintColor: tokens.colors.globalGray,
        tabBarBackground: undefined,
        tabBarStyle: {
          borderTopWidth: 0.4,
          borderColor: tokens.colors.borderColor,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transaction",
          tabBarIcon: ({ focused }) => <TransactionsIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ focused }) => <WalletIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
}
