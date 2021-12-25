import React from "react";
import About from "../screens/about";
import { createStackNavigator } from "@react-navigation/stack";
import { defaultoptions } from "../styles/global";
import DrawerHeader from "../shared/drawerheader";

const stack = createStackNavigator();

export default AboutStack = ({ navigation }) => (
  <stack.Navigator
    screenOptions={{
      ...defaultoptions,
      headerStyle: { backgroundColor: "deeppink" },
    }}
  >
    <stack.Screen
      name="About"
      headerMode="float"
      options={() => ({
        headerTitle: () => (
          <DrawerHeader navigation={navigation} title={"About"} />
        ),
      })}
    >
      {(props) => <About {...props} />}
    </stack.Screen>
  </stack.Navigator>
);
