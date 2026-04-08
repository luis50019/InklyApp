import { StyleSheet } from "react-native";
import { hp, wp } from "../../../../core/theme/responsive";

export const styleAuthHeader = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: wp(90),
    height: hp(60),
    objectFit: "fill",
  },
});
