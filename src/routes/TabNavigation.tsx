import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import theme from "../global/styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
        },
        tabBarItemStyle: {
          paddingBottom: 22,
          paddingTop: 11,
        },
        tabBarStyle: {
          height: 83,
        },
      }}
    >
      <Screen
        name="Ralatório"
        component={Home}
        options={{
          tabBarLabel: "Relatório",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-newspaper-outline" size={28} color={color} />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Visão Geral",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={28} color={color} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={28} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
