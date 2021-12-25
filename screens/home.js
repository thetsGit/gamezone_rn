import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalstyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Background from "../shared/background";
import Card from "../shared/card";
import ReviewForm from "./reviewform";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "The ingredients to becoming a hero in The Legend of Zelda: Breath of the Wild – quick reflexes, expert knowledge of swords and bows, and the culinary ingenuity of a trained chef. Survival in Nintendo’s fantasy epic for Wii U and its latest device, Nintendo Switch, requires a different set of skills compared to previous entries in The Legend of Zelda’s 31-year run. You have to mind your stamina. You must preserve your weapons lest they break. And you need to cook your own food. It’s a major reason why Breath of the Wild is one of the best launch titles for a new video game console ever, not to mention a journey worthy of Zelda’s glorious reputation.",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "The first pair of Pokémon games released in North America, Pokémon Red and Blue, were labeled with the catchphrase below the Pokémon logo. Their sequels, Pokémon Gold and Silver, and later, Pokémon Crystal, had the catchphrase in the same position. Pokémon Yellow was the only exception, instead advertising that it was the 'Special Pikachu edition' of the game below the logo. The slogan was then retired for all subsequent games. The slogan's appearance on pre-release box art for Pokémon Ruby and Sapphire indicates that the slogan was initially intended to be kept, but was dropped sometime between January 2003 and March 2003. Despite the slogan being brought back after the release of Pokémon X and Y, the phrase has not reappeared on the box art akin to the earlier generations. In Pokémon Sword and Shield, players are not able to achieve the goal of gotta catch ‘em all, due to the fact that there is no National Pokédex and the Pokémon not native to the Galar region are unobtainable, sans a few exceptions. ",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "Two years have passed since the war in which the vast and militaristic Arcadian Empire annihilated the kingdom of Dalmasca… Vaan, a young man who lost his family to the fires of war, lives a stoic existence in the occupied city of Rabanastre, while dreaming of a life of freedom, soaring the skies as a Sky Pirate. Princess Ashe, the last remaining member of the Dalmascan royal family, vows revenge on the empire, and secretly leads a resistance in the hopes of restoring her homeland. Brought together in a chaotic age, the hopes and dreams of these two heroes will unite the fates of the people and change the destiny of nations.",
      key: "3",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalVisible(false);
  };

  const deleteReview = (key) => {
    setReviews((preReviews) =>
      preReviews.filter((review) => review.key != key)
    );
  };

  return (
    <Background>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.centeredView}>
            <Card height={{ height: 400 }}>
              <View style={styles.modalContainer}>
                <ReviewForm addReview={addReview} />
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={styles.downBtnWrap}
                >
                  <Ionicons
                    name="ios-caret-down-circle"
                    size={30}
                    color="deeppink"
                  />
                </Pressable>
              </View>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.openModalWrap}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons
            name="add"
            size={40}
            color="white"
            style={{ alignSelf: "center", paddingLeft: 3 }}
          />
        </Pressable>
      </View>
      <Card height={{ height: 220 }}>
        <View style={globalstyles.homecapwrap}>
          <Text style={styles.cap}>
            <MaterialCommunityIcons
              name="nintendo-switch"
              size={27}
              color="black"
            />
            GAMES
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={reviews}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ReviewDetails", item)}
                onLongPress={() =>
                  Alert.alert(
                    "Are you sure to delete?",
                    "Press 'Cancel' to ditch the action.",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel pressed."),
                      },
                      { text: "OK", onPress: () => deleteReview(item.key) },
                    ],
                    {
                      cancelable: true,
                      onDismiss: () => {
                        Alert.alert("Delete action was canceled...");
                      },
                    }
                  )
                }
              >
                <View style={globalstyles.homecontent}>
                  <MaterialCommunityIcons
                    name="cursor-default-click"
                    size={24}
                    color="black"
                  />
                  <Text style={styles.subtitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Card>
    </Background>
  );
}

const styles = StyleSheet.create({
  cap: {
    fontFamily: "sigmarone",
    fontSize: 25,
    marginBottom: 10,
  },
  subtitle: {
    marginLeft: 5,
    fontFamily: "cairo",
    fontSize: 17,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    width: 300,
  },
  openModalWrap: {
    position: "absolute",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 60,
    shadowOpacity: 5,
    shadowColor: "#ddd",
    elevation: 3,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    bottom: 75,
    right: 35,
    borderWidth: 1,
    borderColor: "deeppink",
    backgroundColor: "deeppink",
  },
  downBtnWrap: {
    position: "absolute",
    alignSelf: "center",
    bottom: -20,
  },
});
