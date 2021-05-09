import React from "react";
//tabs компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
//tabs компонентэд ашиглагдах нэмэлт сан
import Svg, { Path } from "react-native-svg";
import { COLORS, icons } from "../constants";
//tabs компонентэд ашиглагдах жижиг компонентүүд
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Course from "../screens/Course";

// Menu буюу олон сонголтод цэсний загвар
const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  var isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

// Tabs компонент "default export" хийсэн!!!
const Tabs = () => {
  return (
    // Олон сонголтод цэсний бүрэлдүүлбэр компонентүүдийг нэгдсэн байдлаар Navigator-т тусгаж өгнө
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          left: 0,
          bottom: 10,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.homie}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.book}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
