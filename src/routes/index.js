import React from "react";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

import Signin from "../screens/auth/Signin";
import Signup from "../screens/auth/Signup";

import Breakfast from "../screens/Breakfast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SuggestedFoods from "../screens/Suggested Foods";
import CreateFood from "../screens/CreateFood";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Break Fast" component={Breakfast} />
          <Stack.Screen name="Suggested Foods" component={SuggestedFoods} />
          <Stack.Screen name="Create Food" component={CreateFood} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
