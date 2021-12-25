import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import RootNavigator from "./routes/drawer";
import LoadingPage from "./screens/loading";

export default function App() {
  const [loaded, setloaded] = useState(false);
  async function getFonts() {
    await Font.loadAsync({
      bigshoulder: require("./assets/fonts/BigShouldersDisplay-Regular.ttf"),
      obitron: require("./assets/fonts/Orbitron-VariableFont_wght.ttf"),
      cairo: require("./assets/fonts/Cairo-SemiBold.ttf"),
      sigmarone: require("./assets/fonts/SigmarOne-Regular.ttf"),
      pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
    });
    setloaded(true);
  }
  setTimeout(() => {
    getFonts();
  }, 2000);
  if (loaded) {
    return <RootNavigator />;
  } else {
    return <LoadingPage />;
  }
}
