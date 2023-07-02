import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { styles } from "../App";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 1500);

    return () => {
      // clears timeout before running the new effect
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.discordapp.net/attachments/1124528655784222740/1124869666158944366/cassette.png",
        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
