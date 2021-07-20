import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SwipeableImage({ user }) {
  return (
    <View>
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: "75vh",        // WHAT THE FUCK IS GOING ON HERE
    resizeMode: "cover",
    borderRadius: 20,
  },
});
