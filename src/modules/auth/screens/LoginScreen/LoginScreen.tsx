import { styleLoginScreen } from "./LoginScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/authHeader/AuthHeader";
import AuthTitle from "../../components/authTitle/AuthTitle";
import GoogleButton from "../../components/googleButton/GoogleButton";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styleLoginScreen.container}>
      <AuthHeader />
      <AuthTitle />
      <GoogleButton />
    </SafeAreaView>
  );
}
