import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
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
];

export default routes;
