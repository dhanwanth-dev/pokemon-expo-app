import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet, Animated } from "react-native";
import { Link } from "expo-router";

interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  types: any[];
}

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

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fetchPokemons();
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.05, duration: 800, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, [scaleAnim]);

  async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
    const data = await response.json();

    const detailed = await Promise.all(
      data.results.map(async (p: any) => {
        const res = await fetch(p.url);
        const det = await res.json();
        return {
          name: p.name,
          image: det.sprites.front_default,
          imageBack: det.sprites.back_default,
          types: det.types,
        };
      })
    );

    setPokemons(detailed);
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      {pokemons.map((pokemon) => {
        const type = pokemon.types[0].type.name;
        return (
          <Link
            key={pokemon.name}
            href={{ pathname: "/poke_details", params: { name: pokemon.name, type } }}
            style={[
              styles.card,
              { backgroundColor: colorsByType[type] + "50" },
            ]}
          >
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Text style={styles.type}>{type}</Text>

              <View style={styles.row}>
                <Image source={{ uri: pokemon.image }} style={styles.img} />
                <Image source={{ uri: pokemon.imageBack }} style={styles.img} />
              </View>
            </Animated.View>
          </Link>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 22,
    alignItems: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  img: {
    width: 120,
    height: 120,
  },
});
