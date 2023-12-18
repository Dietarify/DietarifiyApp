import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import GettingStarted from "@screens/GettingStarted";
import Home from "@screens/Home";

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
];

export default routes;
