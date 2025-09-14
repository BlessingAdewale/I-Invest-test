import { Tabs } from 'expo-router';
import React from 'react';

import {
  EstateIcon,
  HomeIcon,
} from '@/assets/svgs';

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
          title: 'Home',
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        }}
      />

   
    </Tabs>
  );
}
