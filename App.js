import React from "react";
//App компонентэд ашиглагдах RN сангийн үндсэн компонентүүд
import { StyleSheet, Text, View } from "react-native";
//Navigation нэмэлт сангийн ашиглах нэмэлтүүд
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Бусад компонентүүд
import Course from "./screens/Course";
import Profile from "./screens/Profile";
import Tabs from "./navigation/Tabs";
import Detail from "./screens/Detail";
import Settings from "./screens/Settings";
import FAQ from "./screens/FAQ";
import Lesson from "./screens/Lesson";
import Login from "./screens/Login";
import Intro from "./screens/Intro";
import Signup from "./screens/Signup";
//Контекст
import { PageContext } from "./context";

/**@version v1.0.0
 * Main Component ---> App.js
 *
 *
 * Author T.Gantsogt(18b1num0917), A.Delgersaikhan(18b1)
 * Year - 2021
 *
 *
 * Made for educational purpose
 * Software Construction (ICSI402), National University of Mongolia
 */

//App компонент "default export" хийсэн!!!
export default function App() {
  const [Logged, setLogged] = React.useState(false);
  const Stack = createStackNavigator();
  return (
    <PageContext.Provider value={[Logged, setLogged]}>
      <NavigationContainer>
        {Logged ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Home"}
          >
            {/* Хэрэглэгч нэвтэрсний дараа үүсэх стекний цуглуулга */}
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Course" component={Course} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="FAQ" component={FAQ} />
            <Stack.Screen name="Lesson" component={Lesson} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Intro"}
          >
            {/* Хэрэглэгч нэвтрэхээс өмнө үүсэх стекний цуглуулга */}
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PageContext.Provider>
  );
}
