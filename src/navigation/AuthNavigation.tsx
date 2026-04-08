import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../modules/auth/screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
