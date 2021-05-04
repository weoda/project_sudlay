import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Course = () => {
  return (
    <View style={styles.container}>
      <Text>Course</Text>
    </View>
  );
};

export default Course;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
});
