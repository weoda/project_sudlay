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
import OwnedCourseCard from "../components/OwnedCourseCard";
const Profile = ({ navigation }) => {
  let a = [0, 1, 2];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 200,
            backgroundColor: "red",
            margin: 20,
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{ height: 150, width: 150, backgroundColor: "white" }}
          ></View>
          <View
            style={{
              height: 150,
              width: 180,
              backgroundColor: "pink",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                height: 25,
                backgroundColor: "yellow",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "50%", alignItems: "flex-end" }}>
                <Text>Овог: </Text>
              </View>
              <View>
                <Text>Бат </Text>
              </View>
            </View>
            <View
              style={{
                height: 25,
                backgroundColor: "yellow",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "50%", alignItems: "flex-end" }}>
                <Text>Нэр: </Text>
              </View>
              <View>
                <Text>Дорж </Text>
              </View>
            </View>
            <View
              style={{
                height: 25,
                backgroundColor: "yellow",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "50%", alignItems: "flex-end" }}>
                <Text>Ангилал: </Text>
              </View>
              <View>
                <Text>12 - 17 нас</Text>
              </View>
            </View>
            <View
              style={{
                height: 25,
                backgroundColor: "yellow",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "50%", alignItems: "flex-end" }}>
                <Text>Оноо: </Text>
              </View>
              <View>
                <Text>1800 </Text>
              </View>
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: "blue",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "green",
                }}
              >
                <Text>Засварлах</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Тохиргоо</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: 370,
            backgroundColor: "pink",
            display: "flex",
            flexDirection: "row",
            padding: 20,
          }}
        >
          {a.map(() => {
            return <OwnedCourseCard text={"test1test1test1"} />;
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
