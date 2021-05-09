import React from "react";
//Intro компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
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

// Intro компонент "default export" хийсэн!!!
const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.backImage}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      />
      <View
        style={{
          width: "100%",
          height: "50%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 20,
          paddingTop: 100,
          paddingBottom: 30,
        }}
      >
        <View style={{ height: "50%" }}>
          <Text
            style={{ fontSize: 24, color: COLORS.primary, fontWeight: "bold" }}
          >
            Сургалтын шинэ орчинд тавтай морил
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ color: COLORS.gray }}>
            Та шинэ хэрэглэгч бол{" "}
            <Text style={{ color: COLORS.primary }}>БҮРТГҮҮЛЭХ</Text> товчийг
            дарж цааш үргэлжлүүлнэ үү.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={{
                height: 48,
                width: 174,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: COLORS.primary }}>БҮРТГҮҮЛЭХ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                height: 48,
                width: 174,
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>НЭВТРЭХ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[
          {
            width: 144,
            height: 144,
            borderRadius: 30,
            position: "absolute",
            alignSelf: "center",
            top: "40%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
          },
          styles.shadow,
        ]}
      >
        <ImageBackground
          source={images.logo}
          style={{
            height: 56,
            width: 56,
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 30,
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
