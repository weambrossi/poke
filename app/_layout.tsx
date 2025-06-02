import { Tabs } from "expo-router";
import React from "react";
// Import TabBar component (adjust the path as needed)
import TabBar from "../components/TabBar";

export default function RootLayout() {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
      name="index"
      options={{title: "Home"}}
      />
      <Tabs.Screen
      name="exploreScreen"
      options={{title: "Explore"}}
      />
      <Tabs.Screen
      name="profileScreen"
      options={{title: "Profile"}}
      />
      </Tabs>
  )
} 
