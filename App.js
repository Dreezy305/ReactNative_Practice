import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [change, setChange] = useState(false);
  const [person, setPerson] = useState({ name: "mario", age: 40 });
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>My name is {!change ? "shaun" : "riley"}</Text>
      <Text>
        His name is {person.name}, his age is {person.age} and his best friend's
        name is {text}
      </Text>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="e.g. John doe"
        onChangeText={(val) => setText(val)}
      />
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
            setPerson({ name: "riley", age: 42 });
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
