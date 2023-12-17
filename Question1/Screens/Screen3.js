import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import CityContext from "../Context/CityContext";

const Screen3 = ({ navigation }) => {
  const { city } = useContext(CityContext);
  console.warn(city);
  return (
    <View>
      <Text>City Name:{city.cityName}</Text>
      <Text>Registration Number:{city.cityProvince}</Text>
      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate("Screen4")}
      />
    </View>
  );
};

export default Screen3;
