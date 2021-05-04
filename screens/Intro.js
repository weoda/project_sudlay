import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text>Intro</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
