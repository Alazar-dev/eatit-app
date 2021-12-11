import React from "react";
import Home from "../screens/Home";
import Signin from "../screens/auth/Signin";
import Signup from "../screens/auth/Signup";
import Breakfast from "../screens/Breakfast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangeFood from "../screens/Change Food";
import CreateFood from "../screens/CreateFood";
import Profile from "../screens/Profile";
import Dinner from "../screens/Dinner";
import Lunch from "../screens/Lunch";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Breakfast" component={Breakfast} />
        <Stack.Screen name="Dinner" component={Dinner} />
        <Stack.Screen name="Lunch" component={Lunch} />
        <Stack.Screen name="Change Food" component={ChangeFood} />
        <Stack.Screen name="Create Food" component={CreateFood} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </>
  );
}
