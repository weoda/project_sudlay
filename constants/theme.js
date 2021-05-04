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
  radius: 10,
  main_logo_size: 24,
  width,
  height,
};

export const FONTS = {
  large_logo: {
    fontFamily: "Sansation_Bold",
    fontSize: SIZE.main_logo_size,
    lineHeight: 1,
  },
};

const mainTheme = { COLORS, SIZE, FONTS };
export default mainTheme;
