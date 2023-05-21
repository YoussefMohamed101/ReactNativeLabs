import React from "react";

import { Text, Card, Icon } from "@rneui/themed";

import { StyleSheet, View, Button, ScrollView, Linking } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";

export default function Progress(props) {
  // alert(JSON.stringify(props))
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {props.title}
        </Text>
        <Text style={{ color: "black" }}>{props.percent}%</Text>
      </View>
      <ProgressBar progress={props.percent / 100} color="orange" />
    </View>
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
  icon: {
    flexDirection: "row",
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
