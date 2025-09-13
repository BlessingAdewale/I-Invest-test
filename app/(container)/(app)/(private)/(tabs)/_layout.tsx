import { Tabs } from 'expo-router';
import React from 'react';

import {
  EstateIcon,
  HomeIcon,
  PollsIcon,
  ProjectIcon,
  SettingsIcon,
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
      <Tabs.Screen
        name="project"
        options={{
          title: 'Project',
          tabBarIcon: ({ focused }) => <ProjectIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="polls"
        options={{
          title: 'Polls',
          tabBarIcon: ({ focused }) => <PollsIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="estate"
        options={{
          title: 'Estate',
          tabBarIcon: ({ focused }) => <EstateIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <SettingsIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
}
