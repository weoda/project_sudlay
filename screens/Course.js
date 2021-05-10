import React from "react";
//Course компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { icons, COLORS, FONTS, images, SIZE } from "../constants";
// Course компонентэд ашиглагдах жижиг компонентүүд
import Header from "../components/Header";
import SuggestCard from "../components/SuggestCard";

// Course компонент "default export" хийсэн!!!
const Course = ({ navigation }) => {
  const dataSuggest = [
    {
      id: 1,
      name: "Газарзүй",
      price: 0,
      photo: images.compass,
      icon: icons.star,
      state: false,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae diam tristique, rutrum lorem et, viverra purus. Nunc consequat ultrices tortor, in faucibus purus cursus sed. Proin bibendum consequat odio, at eleifend tellus laoreet vitae. Vestibulum ultricies erat ...цааш",
      lesson: [
        {
          id: 1,
          name: "Дэлхийн хэлбэр",
          type: "Бичвэр",
          link: "https://sudlay123.firebaseapp.com/",
        },
        {
          id: 2,
          name: "Эртний газар зүй",
          type: "Видео",
          link: "https://sudlay123.firebaseapp.com/",
        },
        {
          id: 3,
          name: "Далай",
          type: "Тоглоом",
          link: "https://sudlay123.firebaseapp.com/",
        },
      ],
    },
    {
      id: 2,
      name: "Автомашин",
      price: 1000,
      photo: images.car,
      icon: icons.star,
      state: false,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae diam tristique, rutrum lorem et, viverra purus. Nunc consequat ultrices tortor, in faucibus purus cursus sed. Proin bibendum consequat odio, at eleifend tellus laoreet vitae. Vestibulum ultricies erat ...цааш",
      lesson: [
        {
          id: 1,
          name: "Түүх 1",
          type: "Бичвэр",
          link: "https://sudlay123.firebaseapp.com/",
        },
        {
          id: 2,
          name: "Форд болон Бенз",
          type: "Видео",
          link: "https://sudlay123.firebaseapp.com/",
        },
        {
          id: 3,
          name: "Дугуй",
          type: "Тоглоом",
          link: "https://sudlay123.firebaseapp.com/",
        },
      ],
    },
    {
      id: 3,
      name: "Далай",
      price: 500,
      photo: images.sea,
      icon: icons.star,
      state: false,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae diam tristique, rutrum lorem et, viverra purus. Nunc consequat ultrices tortor, in faucibus purus cursus sed. Proin bibendum consequat odio, at eleifend tellus laoreet vitae. Vestibulum ultricies erat ...цааш",
      lesson: [
        {
          id: 1,
          name: "Амьтан",
          type: "Бичвэр",
          link: "https://sudlay123.firebaseapp.com/",
        },
        {
          id: 2,
          name: "Ургамал",
          type: "Видео",
          link: "https://sudlay123.firebaseapp.com/",
        },
        {
          id: 3,
          name: "Идэш",
          type: "Тоглоом",
          link: "https://sudlay123.firebaseapp.com/",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <Header
        leftIcon={null}
        rightIcon={icons.question}
        text={"SUDLAY"}
        leftPress={null}
        rightPress={"FAQ"}
      />
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: 65,
            paddingHorizontal: SIZE.big_padding,
            paddingVertical: SIZE.sml_padding,
          }}
        >
          <View style={[styles.searchArea, styles.shadow]}>
            <Image
              source={icons.loupe}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: COLORS.gray,
              }}
            />
            <TextInput
              keyboardType={"default"}
              style={{
                width: 300,
                height: 48,
                backgroundColor: "white",
                marginLeft: SIZE.sml_margin,
              }}
            />
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Санал болгох</Text>
        </View>
        <ScrollView horizontal={true} style={styles.suggestCourse}>
          {dataSuggest.map((data, id) => {
            return (
              <SuggestCard
                nameColor={COLORS.white}
                name={data.name}
                number={data.lesson.length}
                value={data.price}
                bgImage={data.photo}
                data={data}
              />
            );
          })}
        </ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Онцлох</Text>
        </View>
        <View style={styles.topCourse}>
          <TouchableOpacity
            onPress={() => {}}
            style={[{ width: "100%", height: 280 }, styles.shadow]}
          >
            <ImageBackground
              source={images.compass}
              imageStyle={{ borderRadius: SIZE.sml_radius }}
              style={styles.topCourseImage}
            />
            <Text style={styles.topCourseText}>Газарзүй</Text>
            <View style={styles.topCourseTag}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Эрэлттэй
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[
              { width: "100%", height: 280, marginTop: SIZE.big_margin },
              styles.shadow,
            ]}
          >
            <ImageBackground
              source={images.compass}
              imageStyle={{ borderRadius: SIZE.sml_radius }}
              style={styles.topCourseImage}
            />
            <Text style={styles.topCourseText}>Газарзүй</Text>
            <View style={styles.topCourseTag}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Эрэлттэй
              </Text>
            </View>
          </TouchableOpacity>
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
    marginTop: SIZE.sml_margin * 3,
  },
  header: {
    paddingHorizontal: SIZE.big_padding,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  topCourse: {
    padding: SIZE.big_padding,
    height: 680,
    display: "flex",
    flexDirection: "column",
  },
  topCourseImage: {
    height: 280,
    width: "100%",
    position: "absolute",
    borderRadius: SIZE.sml_radius,
  },
  topCourseTag: {
    position: "absolute",
    height: 30,
    width: 80,
    backgroundColor: COLORS.secondary,
    right: 0,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topCourseText: {
    margin: 20,
    position: "absolute",
    bottom: 0,
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  suggestCourse: {
    height: 245,
    display: "flex",
    flexDirection: "row",
    padding: SIZE.big_padding,
  },
  searchArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZE.sml_padding,
    borderRadius: SIZE.sml_radius,
    backgroundColor: "white",
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
