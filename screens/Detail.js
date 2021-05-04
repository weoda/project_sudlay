import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
