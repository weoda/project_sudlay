import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { icons, COLORS, FONTS, images } from "../constants";
import ProgressCircle from "react-native-progress-circle";
import { useNavigation } from "@react-navigation/native";

const OwnedCourseCard = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${props.press}`)}
      style={{
        width: 180,
        height: 320,
        backgroundColor: "white",
        marginRight: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ImageBackground
        source={props.bgImage}
        imageStyle={{ borderRadius: 10 }}
        style={{
          height: 320,
          width: 180,
          position: "absolute",
          borderRadius: 10,
        }}
      />
      <View
        style={{
          padding: 10,
          height: "50%",
        }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>{props.text}</Text>
      </View>
      <View
        style={{
          padding: 10,
          height: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProgressCircle
          percent={props.percent}
          radius={60}
          borderWidth={8}
          color={COLORS.primary}
          shadowColor="#E0E0E0"
          bgColor="#fff"
        >
          <Text
            style={{ fontSize: 24, color: COLORS.primary }}
          >{`${props.percent}%`}</Text>
        </ProgressCircle>
      </View>
    </TouchableOpacity>
  );
};

export default OwnedCourseCard;
