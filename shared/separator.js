import React from "react";
import { View } from "react-native";

export default Separator = ({ margin }) => (
  <View
    style={[
      {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      margin,
    ]}
  />
);
