// 1- import libraries
// 2- create component
// 3- render component
// --> <p>, <div> ==> <Text>, <View>

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Linking,
} from "react-native";
// import { Button } from '@rneui/themed';
import Navigation from "./src/Components/Navigation";
import MyCard from "./src/Components/card";

import { Icon } from "@rneui/themed";

export default function App() {
  const [name, setName] = useState("NEW NAME");

  const [age, setAge] = useState(14);

  const handleClick = () => {
    // name = "hello"
    console.log("hellllllooooo");
    setName("OLD NAME");
    setAge(100);
  };

  return (
    <Navigation />
    // <ScrollView>
    //   <MyCard name="Youssef Mohamed" job="FrontEnd Developer" />
    // </ScrollView>

    // <Text style={styles.text}> {name} </Text>

    // <Text style={styles.text}> {age} </Text>

    // <Button title="Change Name" onPress={handleClick} />
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  view1: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around",
  },
  view2: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "blue",
  },
});
