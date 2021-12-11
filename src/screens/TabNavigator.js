import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Signin from "./auth/Signin";
import Home from "./Home";
import Profile from "./Profile";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Signin"
        component={Signin}
        options={{
          tabBarIcon: () => <Icon size={20} color="#ca8a04" name="bacon" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon size={20} color="#ca8a04" name="home" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon size={20} color="#ca8a04" name="user" />,
        }}
      />
    </Tab.Navigator>
  );
}
