import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
<StatusBar style="auto" />;
