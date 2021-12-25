import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function About() {
  const [active, setactive] = useState(0);
  const scrollHandler = ({ nativeEvent }) => {
    let slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (active !== slide) {
      setactive(slide);
    }
  };
  const clients = [
    {
      name: "Vito",
      review:
        "It's true I have a lot of friends in politics, but they wouldn't be so friendly if they knew my business was drugs instead of gambling.",
      path: require("../assets/clients/vito.jpg"),
    },
    {
      name: "Michael",
      review:
        "There are many things my father taught me in this room. He taught me: keep your friends close, but your enemies closer.",
      path: require("../assets/clients/michael.jpg"),
    },
    {
      name: "Kay",
      review:
        "But you are not like him, Michael. I thought you weren't going to become a man like your father. That's what you told me.",
      path: require("../assets/clients/kay.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionWrap}>
          <Text style={styles.title}>About us</Text>

          <Text style={styles.aboutusText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <View style={styles.space} />
        <View style={styles.sectionWrap}>
          <Text style={styles.title}>Our future goals</Text>

          <Text style={styles.contactText}>
            <MaterialCommunityIcons
              name="nintendo-game-boy"
              size={50}
              color="black"
            />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Text>
        </View>
        <View style={styles.sectionWrap}>
          <Text style={styles.title}>Our Clients</Text>
          <View style={styles.reviewOuterBox}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={scrollHandler}
            >
              {clients.map(({ name, review, path }) => (
                <View style={styles.reviewInnerBox} key={name}>
                  {console.log(typeof path)}
                  <Text style={styles.clientName}>{name}:</Text>
                  <Text style={styles.clientReview}>{review}</Text>
                  <Image source={path} style={styles.clientAvator} />
                </View>
              ))}
            </ScrollView>
            <View style={styles.pointerWrap}>
              {clients.map((val, key) => {
                {
                  if (key == active) {
                    return (
                      <FontAwesome
                        key={key}
                        name="window-minimize"
                        size={10}
                        color="black"
                        style={{ paddingHorizontal: 1 }}
                      />
                    );
                  } else {
                    return (
                      <FontAwesome
                        key={key}
                        name="window-minimize"
                        size={10}
                        color="lightgrey"
                        style={{
                          paddingHorizontal: 1,
                        }}
                      />
                    );
                  }
                }
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "deeppink",
  },
  title: {
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },
  aboutusText: {
    marginVertical: 8,
    fontFamily: "cairo",
    letterSpacing: 1,
  },
  sectionWrap: {
    marginVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: "white",
  },
  contactText: {
    textAlign: "left",
    marginVertical: 8,
    fontFamily: "cairo",
    letterSpacing: 1,
  },
  reviewOuterBox: {
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 240,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  reviewInnerBox: {
    backgroundColor: "white",
    alignSelf: "center",
    width: 250,
    height: 180,
    marginHorizontal: 15,
    marginTop: 40,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 8,
  },
  clientName: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 8,
    letterSpacing: 2,
  },
  clientReview: {
    fontFamily: "cairo",
  },
  clientAvator: {
    position: "absolute",
    alignSelf: "center",
    top: -30,
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "grey",
  },
  pointerWrap: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
  },
});
