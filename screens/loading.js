import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default LoadingPage = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.snippet}>Game Zone</Text>
    <Image
      source={require("../assets/loading.gif")}
      style={styles.loadingGif}
    />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loadingGif: {
    resizeMode: "contain",
    width: 150,
  },
  snippet: {
    marginTop: 100,
    color: "deepskyblue",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 3,
  },
});
