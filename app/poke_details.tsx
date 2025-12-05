import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Animated, Image } from "react-native";

const colorsByType: any = {
  grass: "#4CAF50",
  fire: "#FF5722",
  water: "#2196F3",
  bug: "#8BC34A",
  normal: "#9E9E9E",
  poison: "#9C27B0",
  electric: "#FFEB3B",
  ground: "#795548",
  fairy: "#FF80AB",
  fighting: "#D32F2F",
  psychic: "#E91E63",
  rock: "#A1887F",
  ghost: "#5E35B1",
  ice: "#00BCD4",
  dragon: "#3F51B5",
  dark: "#212121",
  steel: "#607D8B",
  flying: "#81D4FA",
};

export default function Details() {
  const { name, type } = useLocalSearchParams();
  const [image, setImage] = useState<string>("");

  const energy = Math.floor(Math.random() * 100 + 1);
  const power = Math.floor(Math.random() * 500 + 300);

  const energyAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  const color = colorsByType[type as string] || "#999";

  // ✅ Fetch the ACTUAL Pokémon image that was clicked
  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) throw new Error("Failed to fetch Pokemon");
        const data = await res.json();
        setImage(
          data.sprites.other["official-artwork"].front_default || ""
        );
      } catch (error) {
        console.warn("Error fetching image:", error);
        setImage("");
      }
    }

    fetchImage();

    // ✅ Energy Bar Animation
    Animated.timing(energyAnim, {
      toValue: energy,
      duration: 1200,
      useNativeDriver: false,
    }).start();

    // ✅ Floating Animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -8,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [name, energy, energyAnim, floatAnim]);

  const widthInterpolation = energyAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.card, { backgroundColor: color + "33" }]}>
        
        {/* ✅ CORRECT Animated Pokémon Image */}
        {image !== "" && (
          <Animated.Image
            source={{ uri: image }}
            style={[
              styles.image,
              { transform: [{ translateY: floatAnim }] },
            ]}
          />
        )}

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>Type: {type}</Text>

        <View style={styles.statsBox}>
          <Text style={styles.stat}>⚡ Power Level: {power}</Text>
          <Text style={styles.stat}>🔋 Energy Core: {energy}%</Text>
        </View>

        {/* ✅ Animated Energy Bar */}
        <View style={styles.energyBarContainer}>
          <Animated.View
            style={[
              styles.energyBarFill,
              {
                width: widthInterpolation,
                backgroundColor: color,
              },
            ]}
          />
        </View>

        <Text style={styles.desc}>
          This Pokémon generates raw {type} energy and converts it into destructive
          power. When the core reaches 100%, its attacks become unstoppable.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: "100%",
    borderRadius: 26,
    padding: 22,
    alignItems: "center",
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 12,
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  type: {
    fontSize: 18,
    marginBottom: 14,
    fontWeight: "bold",
  },
  statsBox: {
    width: "100%",
    backgroundColor: "#00000020",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
  },
  stat: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  energyBarContainer: {
    width: "100%",
    height: 18,
    backgroundColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
  },
  energyBarFill: {
    height: "100%",
    borderRadius: 20,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
