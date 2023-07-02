import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import { styles } from "../App";
import { useState } from "react";

let tags = [
  "pop",
  "rock",
  "electronic",
  "indie",
  "metal",
  "rap",
  "blues",
  "folk",
  "r&b",
  "country",
  "jazz",
  "synthpop",
  "classical",
  "breakcore",
  "instrumental",
  "techno",
  "house",
  "shoegaze",
].map((x) => {
  return {
    selected: false,
    name: x,
  };
});

export default function Tags({ route, navigation }) {
  const { location } = route.params;

  const [selectedTags, setSelectedTags] = useState(tags);

  const Tag = ({ tag, selected }) => {
    return (
      <View>
        <Pressable
          style={selected ? tagStyles.selected : tagStyles.unselected}
          onPress={() =>
            setSelectedTags((prev) =>
              prev.map((x) =>
                x.name === tag ? { name: tag, selected: !x.selected } : x
              )
            )
          }
        >
          <Text style={tagStyles.tagText}>{tag}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Select 3 or more <Text style={{ color: "#f3bce6" }}>genres</Text>
      </Text>
      <View style={tagsStyles.tagsContainer}>
        {selectedTags.map((t) => (
          <Tag tag={t.name} selected={t.selected} />
        ))}
      </View>
      <Pressable
        title="submit"
        style={styles.button}
        onPressOut={() =>
          navigation.navigate("Playlist", {
            location: location,
            genres: selectedTags.filter((x) => x.selected).map((x) => x.name),
          })
        }
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const tagsStyles = StyleSheet.create({
  tagsContainer: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const tagStyles = StyleSheet.create({
  selected: {
    backgroundColor: "#c29df1",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
  },
  unselected: {
    backgroundColor: "#24273a",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  tagText: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
});
