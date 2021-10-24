import { Text, View } from "react-native";

const CreateContact = ({ navigation }) => {
  return (
    <View>
      <Text>CreateContact Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CreateContact;
