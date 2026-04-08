import { Image, View } from "react-native";
import { images } from "../../../../../assets/images";
import { styleAuthHeader } from "./AuthHeader.style";

export default function AuthHeader() {
  return (
    <View style={styleAuthHeader.container}>
      <Image style={styleAuthHeader.logo} source={images.logo} />
    </View>
  );
}
