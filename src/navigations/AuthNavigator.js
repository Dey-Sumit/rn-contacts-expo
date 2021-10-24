import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React from "react";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from "../screens/login";
import Register from "../screens/register";

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
