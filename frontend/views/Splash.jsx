import React, { useEffect } from "react";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);

    return () => {
      // clears timeout before running the new effect
      clearTimeout(timeout);
    };
  }, []);

  return <View></View>;
}
