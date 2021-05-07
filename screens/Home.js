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

const Home = () => {
  let a = [0, 1, 2];
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
            source={null}
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
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainBody}>
        <View
          style={{
            height: 300,
            backgroundColor: "red",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          {/* jijig fragments */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 10,
              backgroundColor: "white",
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
              <View
                style={{
                  height: 10,
                  width: 270,
                  backgroundColor: "black",
                  marginTop: 10,
                }}
              ></View>
            </View>
          </View>
          {/* jijig fragments */}
          {/* jijig fragments */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 10,
              backgroundColor: "white",
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
              <View
                style={{
                  height: 10,
                  width: 270,
                  backgroundColor: "black",
                  marginTop: 10,
                }}
              ></View>
            </View>
          </View>
          {/* jijig fragments */}
          {/* jijig fragments */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 10,
              backgroundColor: "white",
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
              <View
                style={{
                  height: 10,
                  width: 270,
                  backgroundColor: "black",
                  marginTop: 10,
                }}
              ></View>
            </View>
          </View>
          {/* jijig fragments */}
        </View>
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
        <ScrollView
          horizontal={true}
          style={{
            height: 300,
            backgroundColor: "pink",
            padding: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Jijig fragment 3 */}
          <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: "white",
              marginRight: 20,
            }}
          >
            <Text>ЭНД ЮУ Ч БАЙХЫН ЗДУ</Text>
          </View>
          {/* Jijig fragment 3 */}
          {/* Jijig fragment 3 */}
          <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: "white",
              marginRight: 20,
            }}
          >
            <Text>ЭНД ЮУ Ч БАЙХЫН ЗДУ</Text>
          </View>
          {/* Jijig fragment 3 */}
          {/* Jijig fragment 3 */}
          <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: "white",
              marginRight: 20,
            }}
          >
            <Text>ЭНД ЮУ Ч БАЙХЫН ЗДУ</Text>
          </View>
          {/* Jijig fragment 3 */}
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
});
