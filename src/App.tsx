import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import routes from "./routes";
import useAuth from "./hooks/auth";

const Stack = createNativeStackNavigator();

function App() {
  const [user, initialized] = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="getting-started">
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
  );
}

export default registerRootComponent(App);
