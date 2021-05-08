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

const Header = ({ ...props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 72,
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: 20,
          justifyContent: "center",
        }}
      >
        <Image
          source={null}
          resizeMode="contain"
          style={{
            tintColor: COLORS.primary,
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "70%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Roboto",
              color: COLORS.primary,
            }}
          >
            SUDLAY
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: 20,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.question}
          resizeMode="contain"
          style={{
            tintColor: COLORS.primary,
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
