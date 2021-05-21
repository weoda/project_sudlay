import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { icons, COLORS, FONTS } from "../constants";
import Header from "../components/Header";
import SettingsCard from "../components/SettingsCard";

/**
 * Тохиргооны хэсэг
 * @version 1.0.0
 * @author T.Gantsogt
 */

// Settings компонент "default export" хийсэн!!!
const Settings = () => {
  const [Sound, setSound] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{ padding: 20, display: "flex", flexDirection: "column" }}
      >
        <SettingsCard img={icons.play} txt={"Системийн хэл"} default={"MNG"} />
        <SettingsCard img={icons.loupe} txt={"Дуу"} default={"100%"} />
        <SettingsCard img={icons.star} txt={"Ресет хийх"} default={null} />
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
