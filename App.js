import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [change, setChange] = useState(false);
  return (
    <View style={styles.container}>
      <Text>My name is {!change ? "shaun" : "riley"}</Text>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button
          title="change name"
          color="#841584"
          onPress={() => {
            setChange(!change);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
    marginTop: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 30,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
