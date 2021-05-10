import React from "react";
//Suggest компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
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

/**SuggestedCard компонент нь тухайн хэрэглэгчид санал
 * болгож буй хичээлүүдийг харуулах зорилготой жижиг
 * карт юм.
 * Үүнд дараах props-ууд эцэг компонентээс дамжиж ирнэ:
 * 1. bgImage
 * 2. nameColor
 * 3. name
 * 4. number
 * 5. value
 *
 * эсвэл
 *
 * 1. data буюу JSON өгөгдөл ирж болно
 */

// Profile компонент "default export" хийсэн!!!
const SuggestCard = ({ ...props }) => {
  const navigation = useNavigation();
  const data = props.data;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { data })}
      style={[styles.mainBody, styles.shadow]}
    >
      <ImageBackground
        source={data.photo}
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
        {`${props.number} сэдэв`}
      </Text>
      <Text style={{ color: "white" }}>{`${props.value} оноо`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    width: 150,
    height: 200,
    borderRadius: 20,
    marginRight: 20,
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
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
