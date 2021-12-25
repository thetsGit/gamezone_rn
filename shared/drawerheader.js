import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalstyles } from "../styles/global";

export default function DrawerHeader({ navigation, title }) {
  return (
    <View style={globalstyles.headerwrap}>
      <AntDesign
        style={styles.menu}
        name="menu-fold"
        size={24}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.caption}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  menu: {
    color: "white",
    position: "absolute",
    left: 8,
  },
  caption: {
    fontFamily: "obitron",
    color: "white",
    fontSize: 20,
    letterSpacing: 1,
  },
});
