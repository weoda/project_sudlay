import React, { useContext } from "react";
//Header компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { icons, COLORS, FONTS, SIZE } from "../constants";
import { useNavigation } from "@react-navigation/native";

/** Header компонент нь дэлгэцийн дээд хэсэгт байрлах
 * туслах цэс ба үүгээр буцах болон бусад үндсэн бус
 * үйлдлүүдийг хийхэд ашиглана.
 * Header нь дараах "props"-ийг эцэг компонентээс
 * хүлээж авна:
 * 1. leftIcon
 * 2. rightIcon
 * 3. text
 * 4. leftPress
 * 5. rightPress
 */

// Header компонент "default export" хийсэн!!!
const Header = ({ ...props }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 72,
        borderBottomWidth: 0.2,
        borderColor: COLORS.gray,
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
          <Text style={[styles.mainText, { ...FONTS.largeText }]}>
            {props.text}
          </Text>
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
