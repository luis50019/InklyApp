import { View, Text, Pressable, Image } from "react-native";
import { images } from "../../../../../assets/images";
import { styleGoogleButton } from "./GoogleButton.style";

export default function GoogleButton() {
  return (
    <Pressable style={styleGoogleButton.container}>
      <>
        <Image source={images.googleLogo} style={styleGoogleButton.Logo} />
        <Text style={styleGoogleButton.message}>Accede con tu cuenta</Text>
      </>
    </Pressable>
  );
}
