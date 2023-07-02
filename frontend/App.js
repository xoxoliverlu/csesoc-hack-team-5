import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Home from "./views/Home";
import Tags from "./views/Tags";
import Playlist from "./views/Playlist";
import Splash from "./views/Splash";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tags"
          component={Tags}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Playlist"
          component={Playlist}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24273a",
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
    backgroundColor: "#c29df1",
    borderRadius: 45,
    padding: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Arial",
  },
  headerStyle: {
    backgroundColor: "#181922",
  },
});
