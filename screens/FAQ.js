import React from "react";
//FAQ компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
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
// FAQ компонентэд ашиглагдах жижиг компонентүүд
import Header from "../components/Header";
import { WebView } from "react-native-webview";

// FAQ компонент "default export" хийсэн!!!
const FAQ = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={icons.arrow}
        rightIcon={null}
        text={"FAQ"}
        leftPress={() => {
          navigation.goBack();
        }}
        rightPress={null}
      />
      <WebView source={{ uri: "https://sudlay123.firebaseapp.com/" }} />
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
