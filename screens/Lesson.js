import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Lesson = () => {
  return (
    <View style={styles.container}>
      <Text>Lesson</Text>
    </View>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
