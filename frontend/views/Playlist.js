import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { styles } from "../App";

const BE_URL = "http://localhost:3000";

export default function Playlist({ route, navigator }) {
  const { location, genres } = route.params;

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    console.log(location, genres);

    const fetchData = async () => {
      fetch(`${BE_URL}/tracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ location: location, genres: genres }),
      })
        .then((res) => res.json())
        .then((res) => setTracks(res));
    };

    fetchData();
  }, []);

  const Track = ({ imageURL, name, artist }) => {
    return (
      <View style={tagStyles.card}>
        <Image style={{ width: 50, height: 50 }} source={{ uri: imageURL }} />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={tagStyles.tagText}>{name + "\n"}</Text>
          <Text style={tagStyles.tagText}>{artist}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Your playlist is ready</Text>
      <View style={{ display: "flex" }}>
        {tracks.map((t) => (
          <Track imageURL={t.imageURL} name={t.name} artist={t.artist} />
        ))}
      </View>
    </View>
  );
}

const tagStyles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    gap: 5,
  },
  tagText: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
});
