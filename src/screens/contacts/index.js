import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../../components/common/Icon";
import ContactsComponent from "../../components/ContactsComponent";

const Contacts = ({ navigation }) => {
  return (
    <View>
      <Text>Contacts List</Text>
    </View>
  );
};

export default Contacts;
