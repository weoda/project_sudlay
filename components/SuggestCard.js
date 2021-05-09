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
import { useNavigation } from "@react-navigation/native";
const SuggestCard = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail")}
      style={[
        {
          width: 150,
          height: 200,
          borderRadius: 20,
          marginRight: 20,
          padding: 10,
          display: "flex",
          flexDirection: "column",
        },
        styles.shadow,
      ]}
    >
      <ImageBackground
        source={props.bgImage}
        imageStyle={{ borderRadius: 10 }}
        style={{
          height: 200,
          width: 150,
          position: "absolute",
          borderRadius: 10,
        }}
      />
      <View style={{ height: "75%" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: `${props.nameColor}`,
          }}
        >
          {props.name}
        </Text>
      </View>
      <Text style={{ color: COLORS.secondary, fontWeight: "bold" }}>
        {props.number}
      </Text>
      <Text style={{ color: "white" }}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
export default SuggestCard;
