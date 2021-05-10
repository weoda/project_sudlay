import React, { useState, useEffect } from "react";
//Detail компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { icons, COLORS, FONTS, images, SIZE } from "../constants";
// Detail компонентэд ашиглагдах жижиг компонентүүд
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

// Detail компонент "default export" хийсэн!!!
const Detail = ({ route }) => {
  const [isOwned, setOwned] = useState(null);
  const navigation = useNavigation();
  const data = route.params.data;
  const lsn = data.lesson;

  useEffect(() => {
    setOwned(data.state);
  }, [data.state]);

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
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Image
          source={data.photo}
          resizeMode="cover"
          style={styles.courseImg}
        />
        <View style={styles.courseTitleHeader}>
          <View style={styles.courseTitleIcon}>
            <Image
              source={data.icon}
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
              {data.name}
            </Text>
            <View style={{}}>
              <Text>{`${data.lesson.length} сэдэв`}</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 180 }}>
          <Text style={styles.courseDesc}>{data.desc}</Text>
        </View>
        {isOwned ? null : (
          <View style={{ padding: SIZE.big_padding }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: COLORS.gray }}
            >
              {`Үнэ: ${data.price} оноо`}
            </Text>
          </View>
        )}
        {isOwned ? null : (
          <View
            style={{
              padding: SIZE.big_padding,
              height: 72,
            }}
          >
            <TouchableOpacity
              onPress={() => setOwned((isOwned) => !isOwned)}
              style={styles.courseBtn}
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
            </TouchableOpacity>
          </View>
        )}
        <View style={{ padding: SIZE.big_padding }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Хичээлүүд</Text>
          </View>
        </View>
        {isOwned ? (
          <View style={styles.courseMembers}>
            {lsn.map((obj) => {
              return (
                <View style={[styles.courseMemberComponent, styles.shadow]}>
                  <View style={styles.courseMemberI}>
                    <Text
                      style={{
                        color: COLORS.gray,
                        fontSize: 24,
                        fontWeight: "bold",
                      }}
                    >
                      {obj.id}
                    </Text>
                  </View>
                  <View style={styles.courseMemberTitle}>
                    <Text style={{ fontWeight: "bold" }}>{obj.name}</Text>
                    <Text style={{}}>{obj.type}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Lesson", obj.link)}
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
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text style={{ ...FONTS.smlText }}>
              Худалдаж авсаны дараа үзэх эрх үүснэ
            </Text>
          </View>
        )}
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
    marginTop: SIZE.sml_margin * 3,
  },
  header: {},
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  courseImg: {
    width: "100%",
    height: 300,
  },
  courseTitleHeader: {
    display: "flex",
    flexDirection: "row",
    padding: SIZE.big_padding,
    height: 72,
    alignItems: "center",
  },
  courseTitleIcon: {
    height: 48,
    width: 48,
    marginRight: SIZE.sml_margin,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3E3E3",
    borderRadius: SIZE.sml_radius,
  },
  courseDesc: {
    fontSize: 16,
    paddingHorizontal: SIZE.big_padding,
    color: COLORS.gray,
    textAlign: "justify",
  },
  courseBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: COLORS.secondary,
    height: 48,
    borderRadius: SIZE.sml_radius,
  },
  courseMembers: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: SIZE.big_padding,
    paddingBottom: SIZE.big_padding * 6,
  },
  courseMemberComponent: {
    height: 72,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    marginBottom: SIZE.big_margin,
    borderRadius: SIZE.sml_radius,
  },
  courseMemberI: {
    height: "100%",
    width: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  courseMemberTitle: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "60%",
    paddingLeft: 0,
    justifyContent: "center",
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
