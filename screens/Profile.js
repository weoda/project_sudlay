import React from "react";
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
import Header from "../components/Header";
import OwnedCourseCard from "../components/OwnedCourseCard";
const Profile = ({ navigation }) => {
  let a = [0, 1, 2];
  return (
    <View style={styles.container}>
      <Header
        leftIcon={null}
        rightIcon={icons.question}
        text={"SUDLAY"}
        leftPress={null}
        rightPress={"FAQ"}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              height: 200,
              backgroundColor: "white",
              margin: 20,
              alignItems: "center",
              paddingHorizontal: 20,
              borderRadius: 10,
            },
            styles.shadow,
          ]}
        >
          <View
            style={{
              height: 150,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageBackground
              source={images.profile}
              imageStyle={{ borderRadius: 100 }}
              style={{
                height: 128,
                width: 128,
                position: "absolute",
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              height: 150,
              width: 180,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                height: 25,
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
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: COLORS.secondary }}>
                  Засварлах
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
                  Тохиргоо
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Санал болгох</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: 370,
            display: "flex",
            flexDirection: "row",
            padding: 20,
          }}
        >
          {a.map(() => {
            return (
              <OwnedCourseCard
                press={"Detail"}
                text={"Одон орон судлал"}
                bgImage={images.car}
                percent={30}
              />
            );
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
  header: {
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
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
