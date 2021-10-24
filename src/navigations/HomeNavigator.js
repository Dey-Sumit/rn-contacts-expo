import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React from "react";
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/routeNames";
import ContactsDetails from "../screens/contactDetail";
import Contacts from "../screens/contacts";
import CreateContact from "../screens/createContact";
import Settings from "../screens/settings";

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CONTACT_LIST} component={Contacts} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Stack.Screen name={CONTACT_DETAIL} component={ContactsDetails} />
      <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
