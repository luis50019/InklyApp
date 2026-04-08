import { StyleSheet } from "react-native";
import { BG_COLORS, TEXT_COLORS } from "../../../../core/theme/colors";
import { TYPOGRAPHY } from "../../../../core/theme/typography";
import { wp } from "../../../../core/theme/responsive";

export const styleGoogleButton = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: BG_COLORS.bgWhite,
    width: "100%",
    height: wp(10),
    borderRadius: 20,
    paddingHorizontal: 20,
    gap: 10,
  },
  Logo: {
    height: 20,
    width: 20,
  },
  message: {
    color: TEXT_COLORS.textNeutral,
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: "bold",
  },
});
