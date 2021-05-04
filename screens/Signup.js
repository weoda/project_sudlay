import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
