import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import MovieScreen from "./MovieScreen";
import ProfileScreen from "./card";
import LoginScreen from "./LoginScreen";
import TodoApp from "./TodoApp";
// import { Icon } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color, size }) => (
              <Icon name="sign-in" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ToDo"
          component={TodoApp}
          options={{
            tabBarLabel: "ToDo",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="list-ul"
                type="font-awesome"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const Stack = createStackNavigator();

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Movie" component={MovieScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
