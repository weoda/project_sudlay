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
import Header from "../components/Header";

const SettingsCard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{ padding: 20, display: "flex", flexDirection: "column" }}
      >
        {/* fragment */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 56,
            backgroundColor: "pink",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              height: 56,
              width: "15%",
              backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.playArrow}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: COLORS.gray,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              width: "50%",
              backgroundColor: "cyan",
            }}
          >
            <Text style={{ fontSize: 16 }}>Системийн хэл</Text>
          </View>
          <View
            style={{
              width: "35%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Монгол</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
