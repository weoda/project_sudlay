import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FAQ = () => {
  return (
    <View style={styles.container}>
      <Text>FAQ</Text>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
