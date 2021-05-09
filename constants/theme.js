import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#9A39FC", //pink
  secondary: "#F59B47", //orange
  gray: "#696969",
  black: "#1E1F20",
  green: "#5EE86B",
  white: "#FFFFFF",
};

export const SIZE = {
  sml_radius: 10,
  big_radius: 20,
  sml_padding: 10,
  big_padding: 20,
  sml_margin: 10,
  big_margin: 20,
  big_text: 24,
  mid_text: 20,
  sml_text: 16,
  width,
  height,
};

export const FONTS = {
  largeText: {
    fontFamily: "Roboto",
    fontSize: SIZE.big_text,
  },
  midText: {
    fontFamily: "normal",
    fontSize: SIZE.mid_text,
  },
  smlText: {
    fontFamily: "normal",
    fontSize: SIZE.sml_text,
  },
};

const mainTheme = { COLORS, SIZE, FONTS };
export default mainTheme;
