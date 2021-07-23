import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function SwipeableImage({ user }) {
  return (
    <View>
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>
            {user.name.first}
          </Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {user.dob.age}
          </Text>
        </View>
        <View style={styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {user.location.city}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: "75vh", // WHAT THE FUCK IS GOING ON HERE
    resizeMode: "cover",
    borderRadius: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPrimary: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "white",
    fontSize: 25,
    marginLeft: 10,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
