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

const Profile = () => {
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
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Тохиргоо</Text>
              </View>
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
          {/* jijig fragment card with circle  */}
          <View
            style={{
              width: 180,
              height: 320,
              backgroundColor: "white",
              marginRight: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{ padding: 10, height: "50%", backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 24, color: "white" }}>
                Одон орон судлал
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                height: "50%",
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ backgroundColor: "white", height: 120, width: 120 }}
              ></View>
            </View>
          </View>
          {/* jijig fragment card with circle  */}
          {/* jijig fragment card with circle  */}
          <View
            style={{
              width: 180,
              height: 320,
              backgroundColor: "white",
              marginRight: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{ padding: 10, height: "50%", backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 24, color: "white" }}>
                Одон орон судлал
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                height: "50%",
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ backgroundColor: "white", height: 120, width: 120 }}
              ></View>
            </View>
          </View>
          {/* jijig fragment card with circle  */}
          {/* jijig fragment card with circle  */}
          <View
            style={{
              width: 180,
              height: 320,
              backgroundColor: "white",
              marginRight: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{ padding: 10, height: "50%", backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 24, color: "white" }}>
                Одон орон судлал
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                height: "50%",
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ backgroundColor: "white", height: 120, width: 120 }}
              ></View>
            </View>
          </View>
          {/* jijig fragment card with circle  */}
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
