import React from "react";
import { View, StyleSheet } from "react-native";

export default Card = (props) => (
  <View style={[styles.cardWrap, props.height]}>
    <View style={styles.cardContent}>{props.children}</View>
  </View>
);

const styles = StyleSheet.create({
  cardWrap: {
    maxWidth: 300,
    shadowColor: "#a2a2a1ff",
    shadowRadius: 6,
    elevation: 9,
    borderRadius: 25,
    backgroundColor: "white",
  },
  cardContent: {
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 10,
  },
});
