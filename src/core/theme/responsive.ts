import { Dimensions, PixelRatio } from "react-native";

// Tamaño base de diseño (puedes cambiarlo si tu diseño usa otro)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const { width, height } = Dimensions.get("window");

// Escalas base
const scale = width / BASE_WIDTH;
const verticalScale = height / BASE_HEIGHT;

// Ancho en porcentaje (para layouts grandes)
export const wp = (percentage: number): number => {
  return width * (percentage / 100);
};

// Alto en porcentaje
export const hp = (percentage: number): number => {
  return height * (percentage / 100);
};

// Escalado moderado (recomendado para UI general)
export const ms = (size: number, factor = 0.5): number => {
  return size + (scale * size - size) * factor;
};

// FontSize RESPONSIVE (la más importante)
export const fs = (size: number): number => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Bordes / íconos
export const rs = (size: number): number => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Export útil (por si lo necesitas)
export const screen = {
  width,
  height,
};
