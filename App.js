import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "create reducer", key: 3 },
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER GOES HERE */}
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>
      <View style={styles.content}>
        {/* TODO FORM */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
