import React from "react";
import { View } from "react-native";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          // Floating Tab Bar...
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="signup"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="bacon"
                  size={20}
                  color={focused ? "#ca8a04" : "gray"}
                />
              </View>
            ),
          }}
          listeners={() => ({
            // Onpress Update....
          })}
        />
        <Tab.Screen
          name="home"
          component={Login}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
          }}
          listeners={() => ({
            // Onpress Update....
          })}
        />
        <Tab.Screen
          name="login"
          component={Signup}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user"
                  size={20}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
          }}
          listeners={() => ({
            // Onpress Update....
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
