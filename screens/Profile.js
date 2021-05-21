import React, { useContext } from "react";
//Profile компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { icons, COLORS, FONTS, images, SIZE } from "../constants";
// Profile компонентэд ашиглагдах жижиг компонентүүд
import Header from "../components/Header";
import OwnedCourseCard from "../components/OwnedCourseCard";
//Контекст
import { PageContext } from "../context";

// Profile компонент "default export" хийсэн!!!
const Profile = ({ navigation }) => {
  const dataOwn = [
    {
      id: 1,
      name: "Одон орон судлал",
      photo: images.compass,
      icon: icons.star,
      percent: 0.66,
      state: true,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae diam tristique, rutrum lorem et, viverra purus. Nunc consequat ultrices tortor, in faucibus purus cursus sed. Proin bibendum consequat odio, at eleifend tellus laoreet vitae. Vestibulum ultricies erat ...цааш",
      lesson: [
        {
          id: 1,
          name: "Од",
          type: "Бичвэр",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
        {
          id: 2,
          name: "Нар",
          type: "Видео",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
        {
          id: 3,
          name: "Сар",
          type: "Тоглоом",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
      ],
    },
    {
      id: 2,
      name: "Одон орон судлал 2",
      photo: images.compass,
      icon: icons.star,
      percent: 0.33,
      state: true,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae diam tristique, rutrum lorem et, viverra purus. Nunc consequat ultrices tortor, in faucibus purus cursus sed. Proin bibendum consequat odio, at eleifend tellus laoreet vitae. Vestibulum ultricies erat ...цааш",
      lesson: [
        {
          id: 1,
          name: "Дэлхийн хэлбэр",
          type: "Бичвэр",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
        {
          id: 2,
          name: "Эртний газар зүй",
          type: "Видео",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
        {
          id: 3,
          name: "Далай",
          type: "Тоглоом",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
      ],
    },
    {
      id: 3,
      name: "Одон орон судлал 3",
      photo: images.compass,
      icon: icons.star,
      percent: 0.5,
      state: true,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ante. Phasellus gravida fermentum lorem et dapibus. Cras vitae diam tristique, rutrum lorem et, viverra purus. Nunc consequat ultrices tortor, in faucibus purus cursus sed. Proin bibendum consequat odio, at eleifend tellus laoreet vitae. Vestibulum ultricies erat ...цааш",
      lesson: [
        {
          id: 1,
          name: "Дэлхийн хэлбэр",
          type: "Бичвэр",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
        {
          id: 2,
          name: "Эртний газар зүй",
          type: "Видео",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
        {
          id: 3,
          name: "Далай",
          type: "Тоглоом",
          link: "https://sudlay123.firebaseapp.com/",
          state: false,
        },
      ],
    },
  ];
  const profileData = {
    lastname: "Дорж",
    firstname: "Бат",
    age: 15,
    point: 1200,
  };
  const [Logged, setLogged] = useContext(PageContext);
  function loginStateChange() {
    setLogged((Logged) => !Logged);
  }
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
        <View style={[styles.profileCard, styles.shadow]}>
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
                borderRadius: SIZE.big_radius,
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
                <Text>{profileData.lastname} </Text>
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
                <Text>{profileData.firstname} </Text>
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
                <Text>Нас: </Text>
              </View>
              <View>
                <Text>{profileData.age}</Text>
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
                <Text>{profileData.point} </Text>
              </View>
            </View>
            <View
              style={{
                height: 50,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => loginStateChange()}
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: COLORS.secondary }}>
                  Гарах
                </Text>
              </TouchableOpacity>
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
        <View style={styles.title}>
          <Text style={styles.titleText}>Санал болгох</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            height: 370,
            display: "flex",
            flexDirection: "row",
            padding: SIZE.big_padding,
          }}
        >
          {dataOwn.map((data) => {
            return <OwnedCourseCard data={data} />;
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
    marginTop: SIZE.sml_margin * 3,
  },
  title: {
    paddingHorizontal: SIZE.big_padding,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileCard: {
    display: "flex",
    flexDirection: "row",
    height: 200,
    backgroundColor: "white",
    margin: SIZE.sml_margin,
    alignItems: "center",
    paddingHorizontal: SIZE.big_padding,
    borderRadius: SIZE.sml_radius,
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
