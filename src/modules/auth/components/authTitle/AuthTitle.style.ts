import { StyleSheet } from "react-native";
import { TYPOGRAPHY } from "../../../../core/theme/typography";
import { TEXT_COLORS } from "../../../../core/theme/colors";

export const styleAuthTitle = StyleSheet.create({
  container: {
    display: "flex",
    flexDiorection: "column",
  },
  title: {
    color: TEXT_COLORS.textPrimary,
    fontSize: TYPOGRAPHY.header.fontSize,
    fontWeight: TYPOGRAPHY.header.fontWeight,
  },
  subtitle: {
    color: TEXT_COLORS.textWhite,
    opacity: 0.7,
    fontSize: TYPOGRAPHY.caption.fontSize,
  },
});
