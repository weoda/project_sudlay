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
import { useNavigation } from "@react-navigation/native";

const Header = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 72,
      }}
    >
      <TouchableOpacity onPress={() => props.leftPress()} style={styles.btn}>
        <Image
          source={props.leftIcon}
          resizeMode="contain"
          style={styles.btnIcon}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.textArea}>
          <Text style={styles.mainText}>{props.text}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(`${props.rightPress}`)}
        style={styles.btn}
      >
        <Image
          source={props.rightIcon}
          resizeMode="contain"
          style={styles.btnIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 60,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnIcon: {
    tintColor: COLORS.primary,
    width: 20,
    height: 20,
  },
  textArea: {
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 20,
    fontFamily: "",
    fontWeight: "bold",
    color: COLORS.primary,
  },
});

export default Header;
