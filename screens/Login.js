import React, { useContext } from "react";
//Login компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import { icons, COLORS, FONTS, images, SIZE } from "../constants";
// Контекст
import { PageContext } from "../context";

// Login компонент "default export" хийсэн!!!
const Login = ({ navigation }) => {
  const [Logged, setLogged] = useContext(PageContext);
  function changeLoginState() {
    setLogged((Logged) => !Logged);
  }
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
          paddingHorizontal: SIZE.big_padding,
          paddingTop: SIZE.sml_padding * 3,
          paddingBottom: SIZE.sml_padding * 3,
        }}
      >
        <View style={{}}>
          <Text
            style={{
              fontSize: 24,
              color: COLORS.primary,
              fontWeight: "bold",
            }}
          >
            Нэвтрэх
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ color: COLORS.gray, marginTop: 10 }}>
            Та өөрийн хэрэглэгчийн нэр, нууц үгээ ашиглан нэвтэрнэ үү.
          </Text>
          <View
            style={{
              height: 65,
              paddingVertical: SIZE.sml_padding,
            }}
          >
            <View style={[styles.searchArea, styles.shadow]}>
              <Image
                source={icons.userLogin}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: COLORS.gray,
                }}
              />
              <TextInput
                placeholder={"Нэвтрэх нэр"}
                keyboardType={"default"}
                style={{
                  width: 300,
                  height: 48,
                  backgroundColor: "white",
                  marginLeft: SIZE.sml_margin,
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: 65,
              paddingVertical: 10,
            }}
          >
            <View style={[styles.searchArea, styles.shadow]}>
              <Image
                source={icons.lock}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: COLORS.gray,
                }}
              />
              <TextInput
                placeholder={"Нууц үг"}
                keyboardType={"default"}
                style={{
                  width: 300,
                  height: 48,
                  backgroundColor: "white",
                  marginLeft: SIZE.sml_margin,
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZE.sml_margin * 6,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 48,
                width: 174,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: SIZE.sml_radius,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: COLORS.primary }}>БУЦАХ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeLoginState()}
              style={{
                height: 48,
                width: 174,
                backgroundColor: COLORS.primary,
                borderRadius: SIZE.sml_radius,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>НЭВТРЭХ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: SIZE.sml_margin * 3,
  },
  searchArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZE.sml_padding,
    borderRadius: SIZE.sml_radius,
    backgroundColor: "white",
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
