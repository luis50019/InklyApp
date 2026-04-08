import AppNavigation from "./src/navigation/AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }} edges={["top", "bottom"]}>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
