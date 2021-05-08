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

const OwnedCourseCard = ({ ...props }) => {
  return (
    <View
      style={{
        width: 180,
        height: 320,
        backgroundColor: "white",
        marginRight: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          padding: 10,
          height: "50%",
          backgroundColor: "blue",
        }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>{props.text}</Text>
      </View>
      <View
        style={{
          padding: 10,
          height: "50%",
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 120,
            width: 120,
          }}
        ></View>
      </View>
    </View>
  );
};

export default OwnedCourseCard;
