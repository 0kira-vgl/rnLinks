import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";

type LinkProps = {
  name: string;
  url: string;
  onDetails: () => void;
};

export function Link({ name, url, onDetails }: LinkProps) {
  return (
    <View className="flex-row w-full items-center gap-3">
      <View className="flex-1">
        <Text
          className="text-GRAY-100 text-base font-semibold"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-GRAY-400 text-sm" numberOfLines={1}>
          {url}
        </Text>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
