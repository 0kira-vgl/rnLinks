import { Image, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

export function Header() {
  return (
    <View className="px-6 w-full flex-row justify-between items-center mb-8">
      <Image source={require("../assets/logo.png")} className="h-8 w-[38]" />

      <TouchableOpacity>
        <MaterialIcons name="add" size={32} color={colors.green[300]} />
      </TouchableOpacity>
    </View>
  );
}
