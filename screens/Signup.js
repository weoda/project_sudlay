import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { icons, COLORS, FONTS, images, SIZE } from "../constants";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const Signup = ({ navigation }) => {
  // const [password, setpassword] = useState(null);
  // const [phone, setphone] = useState(null);
  // const [firstname, setfirstname] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("103.153.141.56:8000/user/signup", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    // .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: COLORS.primary,
          fontWeight: "bold",
          marginBottom: 10,
          ...FONTS.largeText,
        }}
      >
        Бүртгүүлэх
      </Text>
      <Text style={{ color: COLORS.gray, marginBottom: 10, ...FONTS.smlText }}>
        Та өөрийн мэдээллийг үнэн зөв бөглөнө үү.{" "}
      </Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={"Овог"}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="lastname"
          rules={{ required: true }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={"Нэр"}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="firstname"
          rules={{ required: true }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={"РД"}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="registerNum"
          rules={{ required: true }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={"Утасны дугаар"}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="phone"
          rules={{ required: true }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={"Нууц үг"}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={"Нас"}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="age"
          rules={{ required: true }}
          defaultValue=""
        />
        <TouchableOpacity
          style={{ width: 200, height: 50, backgroundColor: "cyan" }}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZE.sml_margin * 6,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 48,
            width: 174,
            borderWidth: 2,
            borderColor: COLORS.primary,
            borderRadius: SIZE.sml_radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.primary }}>БУЦАХ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            height: 48,
            width: 174,
            backgroundColor: COLORS.primary,
            borderRadius: SIZE.sml_radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>НЭВТРЭХ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    marginTop: SIZE.sml_margin * 3,
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
