import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewdetails";
import DrawerHeader from "../shared/drawerheader";
import { defaultoptions } from "../styles/global";

const Stack = createStackNavigator();
export default HomeStack = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="float"
    screenOptions={{
      ...defaultoptions,
      headerStyle: { backgroundColor: "deepskyblue" },
    }}
  >
    <Stack.Screen
      name="Home"
      options={({ navigation }) => ({
        headerTitle: () => (
          <DrawerHeader navigation={navigation} title={"Overview"} />
        ),
      })}
    >
      {(props) => <Home {...props} />}
    </Stack.Screen>
    <Stack.Screen
      name="ReviewDetails"
      options={{
        title: "Review details",
        headerTintColor: "white",
      }}
    >
      {(props) => <ReviewDetails {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
);
