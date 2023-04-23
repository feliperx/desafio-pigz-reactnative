import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import TabNavigation from "./TabNavigation";
import { NewDelivery } from "../screens/NewDelivery";


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Navigation" component={TabNavigation} />
      <Screen name="NewDelivery" component={NewDelivery} />
    </Navigator>
  );
}
