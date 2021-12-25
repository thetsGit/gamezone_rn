import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./homestack";
import AboutStack from "./aboutstack";

const Drawer = createDrawerNavigator();

export default RootNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen name="Home">
        {(props) => <HomeStack {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="About">
        {(props) => <AboutStack {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
);
