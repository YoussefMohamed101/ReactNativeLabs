import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [addTodoVisible, setAddTodoVisible] = useState(false);

  const handleAddTodo = async () => {
    if (todoText.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false,
    };
    await saveTodo(newTodo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoText("");
    setAddTodoVisible(false);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodoById(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = async (id, newText) => {
    const updatedTodo = { id, text: newText };
    await updateTodoById(id, updatedTodo);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  const handleCompleteTodo = async (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      await updateTodoById(id, updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      );
    }
  };

  const saveTodo = async (todo) => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      let updatedTodos = [];
      if (storedTodos) {
        updatedTodos = JSON.parse(storedTodos);
      }
      updatedTodos.push(todo);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.log("Error saving todo: ", error);
    }
  };

  const deleteTodoById = async (id) => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      let updatedTodos = [];
      if (storedTodos) {
        updatedTodos = JSON.parse(storedTodos).filter((todo) => todo.id !== id);
        await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
    } catch (error) {
      console.log("Error deleting todo: ", error);
    }
  };

  const updateTodoById = async (id, updatedTodo) => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      let updatedTodos = [];
      if (storedTodos) {
        updatedTodos = JSON.parse(storedTodos).map((todo) => {
          if (todo.id === id) {
            return updatedTodo;
          }
          return todo;
        });
        await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
    } catch (error) {
      console.log("Error updating todo: ", error);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => handleCompleteTodo(item.id)}
      >
        <Ionicons
          name={item.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.completed ? "green" : "black"}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "gray",
          padding: 5,
          textDecorationLine: item.completed ? "line-through" : "none",
          opacity: item.completed ? 0.3 : 1,
        }}
        value={item.text}
        onChangeText={(newText) =>
          item.completed ? null : handleEditTodo(item.id, newText)
        }
        editable={!item.completed} // Disable editing for completed tasks
      />
      <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const toggleAddTodoVisible = () => {
    setAddTodoVisible((prevVisible) => !prevVisible);
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Todo App</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            No tasks available
          </Text>
        }
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          alignSelf: "center",
          backgroundColor: "#3D85C6",
          borderRadius: 30,
          padding: 10,
          backgroundColor: "orange",
        }}
        onPress={toggleAddTodoVisible}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
      <Modal visible={addTodoVisible} animationType="slide" transparent>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ backgroundColor: "white", padding: 20 }}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 5,
                marginBottom: 10,
                width: 300,
              }}
              placeholder="Add Todo"
              value={todoText}
              onChangeText={(text) => setTodoText(text)}
            />
            <Button
              title="Add"
              onPress={handleAddTodo}
              disabled={todoText.trim() === ""}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TodoApp;
