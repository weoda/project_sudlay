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
import SuggestCard from "../components/SuggestCard";
import * as Progress from "react-native-progress";
const Home = ({ navigation }) => {
  let a = [0, 1, 2];
  return (
    <View style={styles.container}>
      <Header leftIcon={null} rightIcon={icons.question} text={"SUDLAY"} />
      <ScrollView style={styles.mainBody}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Таны сургалтын үйл явц</Text>
        </View>
        <View style={styles.firstArea}>
          {a.map(() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail")}
                style={[styles.firstAreaButton, styles.shadow]}
              >
                <View style={styles.firstAreaBtnIcon}>
                  <Image
                    source={icons.star}
                    resizeMode="contain"
                    style={{
                      width: 28,
                      height: 28,
                      tintColor: COLORS.primary,
                    }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text style={{ paddingBottom: 10 }}>Одон орон судлал</Text>
                  <Progress.Bar
                    progress={0.7}
                    width={280}
                    color={COLORS.primary}
                    unfilledColor={"#E0E0E0"}
                    borderWidth={0}
                    borderRadius={5}
                    height={10}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Санал болгох</Text>
        </View>
        <ScrollView horizontal={true} style={styles.secondArea}>
          {a.map(() => {
            return (
              <SuggestCard
                nameColor={COLORS.gray}
                name={"Газарзүй"}
                number={"42 сэдэв"}
                value={"1000 оноо"}
                bgImage={images.compass}
              />
            );
          })}
        </ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Урамшуулал</Text>
        </View>
        <ScrollView horizontal={true} style={styles.thirdArea}>
          {a.map(() => {
            return (
              <View style={styles.thirdAreaCard}>
                <ImageBackground
                  source={images.banner}
                  imageStyle={{ borderRadius: 10 }}
                  style={{
                    height: 200,
                    width: 300,
                    position: "absolute",
                    borderRadius: 10,
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
  mainBody: {
    display: "flex",
    flexDirection: "column",
  },
  firstArea: {
    height: 300,
    padding: 20,
    justifyContent: "space-between",
  },
  secondArea: {
    height: 245,
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  thirdArea: {
    height: 300,
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  firstAreaButton: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    height: 72,
    alignItems: "center",
    borderRadius: 20,
  },
  firstAreaBtnIcon: {
    height: 48,
    width: 48,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3E3E3",
    borderRadius: 10,
  },
  firstAreaBtnBar: {
    height: 10,
    width: 270,
    backgroundColor: "black",
    marginTop: 10,
  },
  thirdAreaCard: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    marginRight: 20,
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
