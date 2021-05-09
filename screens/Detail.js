import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { icons, COLORS, FONTS, images } from "../constants";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {
  const navigation = useNavigation();

  let a = [0, 1, 2];
  return (
    <View style={styles.container}>
      <Header
        leftIcon={icons.arrow}
        rightIcon={icons.question}
        text={"ХИЧЭЭЛ"}
        leftPress={() => {
          navigation.goBack();
        }}
        rightPress={"FAQ"}
      />
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ width: 200, height: 100, backgroundColor: "red" }}
      /> */}
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Image
          source={images.compass}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 300,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 20,
            height: 72,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 48,
              width: 48,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3E3E3",
              borderRadius: 10,
            }}
          >
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
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Одон орон судлал
            </Text>
            <View style={{}}>
              <Text>42 сэдэв</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 180 }}>
          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: 20,
              color: COLORS.gray,
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
            est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae
            diam tristique, rutrum lorem et, viverra purus. Nunc consequat
            ultrices tortor, in faucibus purus cursus sed. Proin bibendum
            consequat odio, at eleifend tellus laoreet vitae. Vestibulum
            ultricies erat
          </Text>
        </View>
        <View style={{ padding: 20 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: COLORS.gray }}
          >
            Үнэ: 1000 оноо
          </Text>
        </View>
        <View style={{ padding: 20, height: 72 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              backgroundColor: COLORS.secondary,
              height: 48,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                color: COLORS.white,
                fontSize: 15,
              }}
            >
              ХУДАЛДАЖ АВАХ
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Хичээлүүд</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            paddingHorizontal: 20,
            paddingBottom: 60,
          }}
        >
          {a.map((num) => {
            return (
              <View
                style={[
                  {
                    height: 72,
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 20,
                    borderRadius: 10,
                  },
                  styles.shadow,
                ]}
              >
                <View
                  style={{
                    height: "100%",
                    width: 72,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "60%",
                    paddingLeft: 0,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>
                    Гар урлал ба аж ахуй
                  </Text>
                  <Text style={{}}>Видео</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "21%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={icons.playArrow}
                    resizeMode="contain"
                    style={{
                      width: 28,
                      height: 28,
                      tintColor: COLORS.secondary,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
  header: {},
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
