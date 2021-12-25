import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Separator from "../shared/separator";
import Card from "../shared/card";

export default function ReviewDetails({ navigation, route }) {
  const { body, rating, title } = route.params;
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Separator margin={{ marginHorizontal: 55 }} />

          <View style={styles.bodyWrap}>
            <ScrollView>
              <Text style={styles.bodyText}>{body}</Text>
            </ScrollView>
          </View>
        </View>
        <Text style={styles.ratingLabel}>
          Rating
          <AntDesign name="caretright" size={10} color="black" />
        </Text>
        <View style={styles.ratingWrap}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "deepskyblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "sigmarone",
    color: "black",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 15,
  },
  bodyText: {
    textAlign: "center",
    fontFamily: "cairo",
    color: "black",
    fontSize: 17,
    letterSpacing: 2,
  },
  content: {
    width: 250,
  },
  bodyWrap: {
    maxHeight: 150,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  ratingWrap: {
    position: "absolute",
    backgroundColor: "deeppink",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    borderBottomRightRadius: 55,
    borderWidth: 1,
    borderColor: "white",
    width: 55,
    height: 55,
    top: -49,
    right: -33,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    color: "white",
    fontFamily: "sigmarone",
    fontSize: 20,
  },
  ratingLabel: {
    position: "absolute",
    top: -25,
    right: 23,
    fontFamily: "pacifico",
    color: "pink",
  },
});
