import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";


const RegistrationScreen = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [RegNo, setRegNo] = useState("");
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");

  const RegisterStudent = async () => {
    try {
      const newStudent = {
        RegNo: RegNo,
        studentName: studentName,
        password: password,
      };

      setStudents([...students, newStudent]);


      await AsyncStorage.setItem("students", JSON.stringify([...students, newStudent]));
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View>
      <Text>Welcome to Registration Screen!</Text>
      <TextInput
        placeholder="Enter Registration Number"
        value={RegNo}
        onChangeText={setRegNo}
      />
      <TextInput
        placeholder="Enter Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register Student" onPress={RegisterStudent} />
      <Button title="Go to Search Screen" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

export default RegistrationScreen;
