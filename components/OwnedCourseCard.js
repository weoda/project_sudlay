import React from "react";
//OwnedCourseCard компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { icons, COLORS, FONTS, images } from "../constants";
// OwnedCourseCard компонентэд ашиглагдах жижиг компонентүүд
import ProgressCircle from "react-native-progress-circle";
import { useNavigation } from "@react-navigation/native";

/**OwnedCourseCard компонент нь хэрэглэгчийн худалдаж авсан
 * хичээлүүдийг, харуулах зорилготой юм.
 * OwnedCourseCard нь дараах props-ууд эцэг компонентээс
 * дамжиж ирнэ
 * 1. press
 * 2. bgImage
 * 3. percent
 * 4. text
 *
 * эсвэл
 *
 * 1. data буюу JSON өгөгдөл ирж болно
 */

// OwnedCourseCard компонент "default export" хийсэн!!!
class OwnedCourseCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    let navigation = useNavigation();
    let data = this.FONTSprops.data;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(`Detail`, { data })}
        style={styles.mainBody}
      >
        <ImageBackground
          source={data.photo}
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
          <Text
            style={{
              fontSize: 24,
              color: COLORS.secondary,
              fontWeight: "bold",
            }}
          >
            {data.name}
          </Text>
        </View>
        <View style={styles.progbrArea}>
          <ProgressCircle
            percent={data.percent * 100}
            radius={60}
            borderWidth={8}
            color={COLORS.primary}
            shadowColor="#E0E0E0"
            bgColor="#fff"
          >
            <Text style={{ fontSize: 24, color: COLORS.primary }}>{`${
              data.percent * 100
            }%`}</Text>
          </ProgressCircle>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainBody: {
    width: 180,
    height: 320,
    backgroundColor: "white",
    marginRight: 20,
    display: "flex",
    flexDirection: "column",
  },
  progbrArea: {
    padding: 10,
    height: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OwnedCourseCard;
