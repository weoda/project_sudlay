import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { icons, COLORS, FONTS } from "../constants";
import Header from "../components/Header";
import SuggestCard from "../components/SuggestCard";
const Course = () => {
  let a = [0, 1, 2];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{ height: 48, backgroundColor: "red", padding: 20 }}
        ></View>
        <ScrollView
          horizontal={true}
          style={{
            height: 245,
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
            padding: 20,
          }}
        >
          {a.map(() => {
            return <SuggestCard />;
          })}
        </ScrollView>
        <View
          style={{
            padding: 20,
            height: 680,
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{ width: "100%", height: 280, backgroundColor: "white" }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 280,
              backgroundColor: "white",
              marginTop: 20,
            }}
          ></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Course;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
