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

const Detail = () => {
  let a = [0, 1, 2];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={{ height: 300, backgroundColor: "grey" }}></View>
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
              backgroundColor: "purple",
            }}
          ></View>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text>Одон орон судлал</Text>
            <View style={{}}>
              <Text>42 сэдэв</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 180, backgroundColor: "yellow" }}>
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
            ultricies erat ...цааш
          </Text>
        </View>
        <View style={{ padding: 20, backgroundColor: "pink" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: COLORS.gray }}
          >
            Үнэ: 1000 оноо
          </Text>
        </View>
        <View style={{ padding: 20, backgroundColor: "cyan", height: 72 }}>
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
        <View style={{ padding: 20, backgroundColor: "pink" }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Хичээлүүд</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "green",
            paddingHorizontal: 20,
            paddingBottom: 60,
          }}
        >
          {a.map(() => {
            return (
              <View
                style={{
                  height: 72,
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: 72,
                    backgroundColor: "gray",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
                  >
                    1
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "60%",
                    backgroundColor: "pink",
                    paddingLeft: 0,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>
                    Гар урлал ба аж ахуй
                  </Text>
                  <Text style={{}}>Видео</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "gray",
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
                </View>
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
});
