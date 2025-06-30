import React, { ComponentProps, FC } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { NAV_THEME } from "@/lib/constants";
import { useColorScheme } from "nativewind";

type TabBarIconProps = {
  name: ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const TabBarIcon: FC<TabBarIconProps> = (props) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};

const TabLayout: FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: NAV_THEME[colorScheme ?? "light"].primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
