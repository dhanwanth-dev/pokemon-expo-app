import { Stack } from "expo-router";
import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";

export default function Layout() {
  const [showSplash, setShowSplash] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      // ✅ Smooth fade + scale transition
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.85,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowSplash(false);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <Animated.View
        style={[
          styles.splash,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <LottieView
          source={require("../assets/pikachu.json")}
          autoPlay
          loop={false}
          style={{ width: 300, height: 300 }}
        />
      </Animated.View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "PokéDex Stickers" }} />
      <Stack.Screen name="poke_details" options={{ title: "Pokémon Details" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#FFEB3B",
    justifyContent: "center",
    alignItems: "center",
  },
});
