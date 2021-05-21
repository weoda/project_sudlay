import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";
import { icons, COLORS, FONTS, images, SIZE } from "../constants";

const Lesson = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={icons.arrow}
        rightIcon={null}
        text={"Lesson"}
        leftPress={() => {
          navigation.goBack();
        }}
        rightPress={null}
      />
      <WebView source={route.params.link} />
    </View>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
