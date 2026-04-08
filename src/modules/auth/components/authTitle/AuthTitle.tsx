import { View, Text } from "react-native";
import { styleAuthTitle } from "./AuthTitle.style";

export default function AuthTitle() {
  return (
    <View style={styleAuthTitle.container}>
      <Text style={styleAuthTitle.title}>Bienvenido</Text>
      <Text style={styleAuthTitle.subtitle}>
        Tu biblioteca y comunidad en un solo lugar
      </Text>
    </View>
  );
}
