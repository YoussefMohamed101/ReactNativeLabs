import React from "react";

import { Text, Card, Icon } from "@rneui/themed";

import { StyleSheet, View, Button, ScrollView, Linking } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";

export default function MySocialMedia(props) {
  // alert(JSON.stringify(props))
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Icon
        raised
        color="#1da1f2"
        name="facebook"
        onPress={() => {
          Linking.openURL("https://www.facebook.com");
        }}
      />
      <Icon
        raised
        type="font-awesome"
        name="twitter"
        color="#1da1f2"
        onPress={() => {
          Linking.openURL("https://www.twitter.com");
        }}
      />
      <Icon
        raised
        type="font-awesome"
        name="linkedin"
        color="#0077b5"
        onPress={() => {
          Linking.openURL("https://www.linkedin.com");
        }}
      />
      <Icon
        raised
        type="font-awesome"
        name="instagram"
        color="#c32aa3"
        onPress={() => {
          Linking.openURL("https://www.instagram.com");
        }}
      />
      <Icon
        raised
        type="font-awesome"
        name="whatsapp"
        color="#25d366"
        onPress={() => {
          Linking.openURL("https://www.whatsapp.com");
        }}
      />
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
