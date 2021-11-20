import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function flatlist() {
  const [people, setPeople] = useState([
    { id: 1, name: "shaun" },
    { id: 2, name: "yoshi" },
    { id: 3, name: "mario" },
    { id: 4, name: "luigi" },
    { id: 5, name: "android" },
    { id: 6, name: "window" },
    { id: 7, name: "mac" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
