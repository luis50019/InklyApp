//Es el root de la aplicacion,
//el que se encarga de mostrar las pantallas dependiendo
//del estado de la aplicacion (si el usuario esta logueado o no)
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";

export default function () {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
