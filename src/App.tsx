import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { RootSiblingParent } from "react-native-root-siblings";
import routes from "./routes";
import useAuth from "./hooks/auth";
import GettingStarted from "./screens/GettingStarted";

const Stack = createNativeStackNavigator();

function App() {
  const { isInitializing, user } = useAuth();

  return !isInitializing && user != null ? (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          {routes.map((el) => (
            <Stack.Screen
              key={el.name}
              options={el.options}
              name={el.name}
              component={el.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  ) : (
    <GettingStarted />
  );
}

export default registerRootComponent(App);
