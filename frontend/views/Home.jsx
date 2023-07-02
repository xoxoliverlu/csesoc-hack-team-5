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
      <Text style={homeStyle.title}>SHUFFLES</Text>
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1124528655784222740/1124662573032284303/cassette.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.paragraph}>
        Generate a{" "}
        <Text style={{ color: "#D471E4" }}>curated travel soundtrack</Text>
      </Text>
      <View style={homeStyle.container}>
        <MaterialCommunityIcon name="magnify" size={30} color="#ffffff" />
        <TextInput
          style={homeStyle.searchBox}
          placeholder="Search for your destination"
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
  searchBox: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#676a88",
  },
  title: {
    color: "#D471E4",
    fontWeight: "bold",
    fontSize: 60,
  },
});
