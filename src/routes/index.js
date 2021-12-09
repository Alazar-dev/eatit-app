import { createNativeStackNavigator } from "react-native-screens/native-stack";
import LoginScreen from "../screens/auth/Login";

export default function Route() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
