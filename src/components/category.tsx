import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, View } from "react-native";
import { colors } from "../styles/colors";

type CategoryProps = PressableProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ icon, title, ...rest }: CategoryProps) {
  return (
    <Pressable className="flex-row items-center gap-[5]" {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />

      <Text className="text-base font-semibold text-GRAY-600">Projetos</Text>
    </Pressable>
  );
}
