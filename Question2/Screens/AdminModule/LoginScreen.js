import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (userName === "admin" && password === "123") {
      AsyncStorage.setItem("isLoggedIn", "true");
      navigation.navigate("Registration");
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter user name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
