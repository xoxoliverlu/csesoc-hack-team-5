import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { styles } from "../App";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({ navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={homeStyle.title}>
        shuffles<Text style={{ fontFamily: "Gill Sans", fontSize: 45 }}>.</Text>
      </Text>
      <Text style={styles.paragraph}>
        Generate a{" "}
        <Text style={{ color: "#f3bce6" }}>curated travel soundtrack</Text>
      </Text>
      <View style={homeStyle.searchContainer}>
        <MaterialCommunityIcon name="magnify" size={30} color="#ffffff" />
        <TextInput
          style={homeStyle.searchBox}
          placeholder="Search your destination"
          onChange={(e) => setText(e.target.value)}
        />
      </View>
      <Pressable
        title="submit"
        style={styles.button}
        onPressOut={() => navigation.navigate("Tags", { location: text })}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3D3F59",
    borderRadius: 45,
    padding: 15,
    gap: 15,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3D3F59",
    borderRadius: 45,
    padding: 15,
    gap: 15,
  },
  searchBox: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#676a88",
  },
  title: {
    color: "#c29df1",
    fontWeight: "bold",
    fontSize: 60,
    fontFamily: "Arial",
  },
});
