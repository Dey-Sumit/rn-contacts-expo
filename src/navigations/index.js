import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { View, Text } from "react-native";
import HomeNavigator from "./HomeNavigator";

export default function AppNavContainer() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
