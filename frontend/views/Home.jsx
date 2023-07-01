import React from "react";
import { Button, View, Text } from "react-native";
import { styles } from "../App";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen</Text>
      <Button title="Go to next screen" onPress={() => navigation.navigate('Tags')}/>
    </View>
  );
};
