import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import GettingStarted from "@screens/GettingStarted";
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import DietHistory from "./screens/DietHistory";

interface RouteItem {
  options: NativeStackNavigationOptions;
  name: string;
  component: any;
}

const routes: RouteItem[] = [
  {
    options: {
      headerShown: false,
    },
    name: "home",
    component: Home,
  },
  {
    options: { headerShown: false },
    name: "getting-started",
    component: GettingStarted,
  },
  {
    options: {
      headerShown: false,
    },
    name: "profile",
    component: Profile,
  },
  {
    options: {
      headerShown: false,
    },
    name: "diet-history",
    component: DietHistory,
  },
];

export default routes;
