import { Tabs } from "expo-router";
import React from "react";

import {  HomeIcon } from "@/assets/svgs";
import { WalletIcon } from "@/assets/svgs/WalletIcon";
import { TransactionsIcon } from "@/assets/svgs/TransactionsIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: undefined,
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
    </Tabs>
  );
}
