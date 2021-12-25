import React from "react";
import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flex: 1,
    backgroundColor: "#ddd",
  },
  homecapwrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  homecontent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  paragraph: {
    fontSize: 20,
  },
  headerwrap: {
    height: 25,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const defaultoptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  headerTintColor: "grey",
  headerTitleStyle: {
    fontFamily: "obitron",
  },
};

export const ratingimg = {
  1: require("../assets/rating-1.png"),
  2: require("../assets/rating-2.png"),
  3: require("../assets/rating-3.png"),
  4: require("../assets/rating-4.png"),
  5: require("../assets/rating-5.png"),
};
