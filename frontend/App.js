import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./views/Home";
import Tags from "./views/Tags";
import Playlist from "./views/Playlist";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tags" component={Tags} />
        <Stack.Screen name="Playlist" component={Playlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181922",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    padding: 30,
  },
  paragraph: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  button: {
    backgroundColor: "#3440AA",
    borderRadius: 45,
    padding: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Arial",
  },
});
