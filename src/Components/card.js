import React from "react";
import { Text, Card, Icon } from "@rneui/themed";
import { StyleSheet, View, Button, ScrollView, Linking } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";
import MySocialMedia from "../Components/socialMedia";
import MyInfo from "../Components/PersonalInformation";
import Progress from "../Components/progress";

export default function MyCard(props) {
  return (
    <ScrollView>
      <Card>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Card.Image
            style={{
              width: 150,
              height: 150,
              padding: 0,
              borderRadius: 75,
            }}
            source={{
              uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
            }}
          />
        </View>
        <Card.Title style={{ fontSize: 30 }}>Youssef Mohamed</Card.Title>
        {/* <Card.Title>{props.job}</Card.Title> */}

        <MySocialMedia></MySocialMedia>
        <Card.Divider style={{ margin: 20 }} />

        <View
          style={{
            color: "white",
          }}
        >
          <MyInfo title="Age:" desc="24"></MyInfo>
          <MyInfo title="Residence:" desc="BO"></MyInfo>
          <MyInfo title="Freelancer:" desc="Available"></MyInfo>
          <MyInfo title="Address:" desc="Assiut"></MyInfo>
        </View>
        <Card.Divider style={{ margin: 20 }} />
        <View>
          <Text style={{ fontSize: 25 }}>Languages</Text>
          <Progress title="Bangla" percent="80"></Progress>
          <Progress title="English" percent="90"></Progress>
          <Progress title="spanish" percent="60"></Progress>
          <Progress title="Hindi" percent="80"></Progress>
        </View>
        <Card.Divider style={{ margin: 20 }} />
        <View>
          <Text style={{ fontSize: 25 }}>Skills</Text>
          <Progress title="HTML" percent="80"></Progress>
          <Progress title="CSS" percent="90"></Progress>
          <Progress title="JS" percent="60"></Progress>
          <Progress title="PHP" percent="20"></Progress>
        </View>

        <Button
          title="Download CV"
          onPress={() => {
            Linking.openURL("https://www.facebook.com");
          }}
        />
      </Card>
    </ScrollView>
  );
}
