// SearchScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      // Get student data from AsyncStorage
      const studentsString = await AsyncStorage.getItem("students");
      
      // Check if studentsString is not null or undefined
      if (studentsString) {
        const students = JSON.parse(studentsString);

        // Search for the student using the provided term
        const result = students.find(
          (student) =>
            student.studentName.toLowerCase() === searchTerm.toLowerCase() ||
            student.regNumber.toLowerCase() === searchTerm.toLowerCase()
        );

        if (result) {
          setSearchResult(result);
          Alert.alert("Search Result", `Student found: ${result.studentName}`);
        } else {
          setSearchResult(null);
          Alert.alert("Search Result", "No student found");
        }
      } else {
        Alert.alert("Error", "No student data found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search by Name or Registration Number"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchResult && (
        <View>
          <Text>Result:</Text>
          <Text>Registration Number: {searchResult.regNumber}</Text>
          <Text>Student Name: {searchResult.studentName}</Text>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;
