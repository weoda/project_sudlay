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

const Course = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 72,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 20,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.arrow}
            resizeMode="contain"
            style={{
              tintColor: COLORS.primary,
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto",
                color: COLORS.primary,
              }}
            >
              SUDLAY
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: 20,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.question}
            resizeMode="contain"
            style={{
              tintColor: COLORS.primary,
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{ height: 48, backgroundColor: "red", padding: 20 }}
        ></View>
        <ScrollView
          horizontal={true}
          style={{
            height: 245,
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
            padding: 20,
          }}
        >
          {/* Jijig fragment -- card */}
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "white",
              marginRight: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ height: "75%", backgroundColor: "orange" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Газарзүй
              </Text>
            </View>
            <Text style={{ color: COLORS.secondary }}>42 сэдэв</Text>
            <Text>1000 оноо</Text>
          </View>
          {/* Jijig fragment -- card */}
          {/* Jijig fragment -- card */}
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "white",
              marginRight: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ height: "75%", backgroundColor: "orange" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Газарзүй
              </Text>
            </View>
            <Text style={{ color: COLORS.secondary }}>42 сэдэв</Text>
            <Text>1000 оноо</Text>
          </View>
          {/* Jijig fragment -- card */}
          {/* Jijig fragment -- card */}
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "white",
              marginRight: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ height: "75%", backgroundColor: "orange" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Газарзүй
              </Text>
            </View>
            <Text style={{ color: COLORS.secondary }}>42 сэдэв</Text>
            <Text>1000 оноо</Text>
          </View>
          {/* Jijig fragment -- card */}
          {/* Jijig fragment -- card */}
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "white",
              marginRight: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ height: "75%", backgroundColor: "orange" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Газарзүй
              </Text>
            </View>
            <Text style={{ color: COLORS.secondary }}>42 сэдэв</Text>
            <Text>1000 оноо</Text>
          </View>
          {/* Jijig fragment -- card */}
        </ScrollView>
        <View
          style={{
            padding: 20,
            height: 680,
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{ width: "100%", height: 280, backgroundColor: "white" }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 280,
              backgroundColor: "white",
              marginTop: 20,
            }}
          ></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Course;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: 30,
  },
});
