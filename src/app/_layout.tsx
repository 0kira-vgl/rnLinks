import { colors } from "../styles/colors";
import "../styles/global.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // remove header
        contentStyle: { backgroundColor: colors.gray[950] }, // define o bg do app
      }}
    />
  ); // renderiza as telas
}
