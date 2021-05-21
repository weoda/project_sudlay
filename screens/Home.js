import React from "react";
//Home компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
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
// Home компонентэд ашиглагдах жижиг компонентүүд
import Header from "../components/Header";
import SuggestCard from "../components/SuggestCard";
// Нэмэлт сангаас ашиглаж буй "progressBar"
import * as Progress from "react-native-progress";
import axios from "axios";

//Home компонент "default export" хийсэн!!!
const Home = ({ navigation }) => {
  let a = [0, 1, 2];
  const [data, setData] = useState(null);
  const [dataOwn, setDataOwn] = useState(null);
  const dataSuggest = [
    {
      id: 1,
      name: "Холболт салсан",
      price: 0,
      photo: images.error,
      icon: icons.error,
      state: false,
      desc: "Холболт салсан байна",
    },
  ];
  const dataOwned = [
    {
      id: 1,
      name: "Холболт салсан",
      photo: images.error,
      icon: icons.error,
      percent: 0,
      state: true,
      desc: "Холболт салсан",
      lesson: null,
    },
  ];
  useEffect(() => {
    axios
      .get("103.153.141.56:8000/course/list")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setData(dataSuggest));

    axios
      .get("103.153.141.56:8000/course/ownlist")
      .then((res) => {
        setDataOwn(res.data);
      })
      .catch((err) => setDataOwn(dataOwned));
  });

  return (
    <View style={styles.container}>
      <Header
        leftIcon={null}
        rightIcon={icons.question}
        text={"SUDLAY"}
        leftPress={null}
        rightPress={"FAQ"}
      />
      <ScrollView style={styles.mainBody}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Таны сургалтын үйл явц</Text>
        </View>
        <View style={styles.firstArea}>
          {dataOwn.map((data) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { data })}
                style={[styles.firstAreaCard, styles.shadow]}
              >
                <View style={styles.firstAreaCardIcon}>
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text style={{ paddingBottom: 10 }}>{data.name}</Text>
                  <Progress.Bar
                    progress={data.percent}
                    width={SIZE.width * 0.7}
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
        <View style={styles.title}>
          <Text style={styles.titleText}>Санал болгох</Text>
        </View>
        <ScrollView horizontal={true} style={styles.secondArea}>
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
        <View style={styles.title}>
          <Text style={styles.titleText}>Урамшуулал</Text>
        </View>
        <ScrollView horizontal={true} style={styles.thirdArea}>
          {a.map(() => {
            return (
              <View style={styles.thirdAreaCard}>
                <ImageBackground
                  source={images.banner}
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.thirdAreaCardImg}
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
    marginTop: SIZE.sml_margin * 3,
  },
  mainBody: {
    display: "flex",
    flexDirection: "column",
  },
  firstArea: {
    height: 300,
    padding: SIZE.big_padding,
    justifyContent: "space-between",
  },
  secondArea: {
    height: 245,
    display: "flex",
    flexDirection: "row",
    padding: SIZE.big_padding,
  },
  thirdArea: {
    height: 300,
    padding: SIZE.big_padding,
    display: "flex",
    flexDirection: "row",
  },
  firstAreaCard: {
    display: "flex",
    flexDirection: "row",
    padding: SIZE.sml_padding,
    backgroundColor: "white",
    height: 72,
    alignItems: "center",
    borderRadius: SIZE.big_radius,
  },
  firstAreaCardIcon: {
    height: 48,
    width: 48,
    marginRight: SIZE.sml_margin,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3E3E3",
    borderRadius: SIZE.sml_radius,
  },
  firstAreaBtnBar: {
    height: 10,
    width: 270,
    backgroundColor: "black",
    marginTop: SIZE.sml_margin,
  },
  thirdAreaCard: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    marginRight: SIZE.big_margin,
  },
  thirdAreaCardImg: {
    height: 200,
    width: 300,
    position: "absolute",
    borderRadius: SIZE.sml_radius,
  },
  title: {
    paddingHorizontal: SIZE.big_padding,
    marginTop: SIZE.sml_margin,
  },
  titleText: {
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
