import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import CityContext from "../Context/CityContext";
import { TextInput, Button } from "react-native";

const Screen4 = ({ navigation }) => {
  const { City, setCity } = useContext(CityContext);
  const [Name, setName] = useState("");
  const [Province, setProvince] = useState("");
  const updateValues = () => {
    setCity({
      cityName: Name,
      cityProvince: Province,
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name:{City.cityName}</Text>
      <Text>Registration Number:{City.cityProvince}</Text>

      <TextInput
        placeholder="enter new city name"
        style={{ padding: 4, borderWidth: 2 }}
        onChangeText={setName}
      />
      <TextInput
        placeholder="enter province"
        style={{ padding: 4, borderWidth: 2, marginTop: 5 }}
        onChangeText={setProvince}
      />
      <Button title="Update" onPress={updateValues} />
      <Button
        title="Go Back To Screen 3"
        onPress={() => navigation.navigate("Screen3")}
      />
    </View>
  );
};

export default Screen4;
