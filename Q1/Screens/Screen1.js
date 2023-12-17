import React, { useContext } from "react";

import { Text, View, StyleSheet, Button } from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Name:</Text>
      <Text style={styles.title}>Registration:</Text>

      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Screen1;
