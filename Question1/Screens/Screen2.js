import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import UserContext from "../Context/UserContext";
import { TextInput, Button } from "react-native";

const Screen2 = ({navigation}) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [RegNo, setRegNo] = useState("");
  const updateValues = () => {
    setUser({
      Name: name,
      RegNo: RegNo,
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name:{user.Name}</Text>
      <Text>Registration Number:{user.RegNo}</Text>

      <TextInput
        placeholder="enter new name"
        style={{ padding: 4, borderWidth: 2 }}
        onChangeText={setName}
        
      />
      <TextInput
        placeholder="enter new RegNo"
        style={{ padding: 4, borderWidth: 2, marginTop: 5 }}
        onChangeText={setRegNo}
        
      />
      <Button title="Update" onPress={updateValues} />
      <Button
        title="Go Back To Screen 1"
        onPress={() => navigation.navigate("Screen1")}
      />
           <Button
        title="Go To Screen 3"
        onPress={() => navigation.navigate("Screen3")}
      />
    </View>
  );
};

export default Screen2;
