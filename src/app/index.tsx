import { View, Text } from "react-native";
import { Header } from "../components/header";
import { Category } from "../components/category";

export default function App() {
  return (
    <View className="flex-1 pt-[62]">
      <Header />

      <Category title="Projeto" icon="code" />
      <Category title="Site" icon="language" />
      <Category title="Video" icon="movie" />
    </View>
  );
}
