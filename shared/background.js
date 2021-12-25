import { Assets } from "@react-navigation/stack";
import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";

export default Background = (props) => (
  <View style={{ flex: 1 }}>
    <View style={styles.contentBox}>{props.children}</View>
    <View style={styles.box1}></View>
    <View style={styles.box2}>
      <ImageBackground
        source={require("../assets/game_bg.png")}
        style={{ flex: 1 }}
      ></ImageBackground>
    </View>
  </View>
);
const styles = StyleSheet.create({
  box1: {
    backgroundColor: "deepskyblue",
    flex: 4,
  },
  box2: {
    flex: 5,
  },
  contentBox: {
    position: "absolute",
    zIndex: 3,
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
