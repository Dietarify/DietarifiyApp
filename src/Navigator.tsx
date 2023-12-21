import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Goals from "./screens/Goals";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string, isFocused: boolean) => {
  if (routeName === "Home") {
    return isFocused ? "home-sharp" : "home-outline";
  } else if (routeName === "Goals") {
    return isFocused ? "checkbox" : "checkbox-outline";
  } else if (routeName === "Profile") {
    return isFocused ? "person" : "person-outline";
  }
};

const Navigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconName = getIconName(route.name, focused);
            const iconColor = focused ? "#15DA97" : "gray";
            return <Ionicons name={iconName} size={25} color={iconColor} />;
          },
          tabBarActiveTintColor: "#15DA97",
        })}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconName = getIconName(route.name, focused);
            const iconColor = focused ? "#15DA97" : "gray";
            return <Ionicons name={iconName} size={25} color={iconColor} />;
          },
          tabBarActiveTintColor: "#15DA97",
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconName = getIconName(route.name, focused);
            const iconColor = focused ? "#15DA97" : "gray";
            return <Ionicons name={iconName} size={25} color={iconColor} />;
          },
          tabBarActiveTintColor: "#15DA97",
        })}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
