import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import UserContext from "../Context/UserContext";

const Screen1 = ({ navigation }) => {
  const { user } = useContext(UserContext);
  console.warn(user);
  return (
    <View>
      <Text>Name:{user.Name}</Text>
      <Text>Registration Number:{user.RegNo}</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
};

export default Screen1;
