import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { colors } from "../styles/colors";

type CategoryProps = TouchableOpacityProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ icon, name, isSelected, ...rest }: CategoryProps) {
  const color = isSelected ? colors.green[300] : colors.gray[400];

  return (
    <TouchableOpacity
      // className="flex-row items-center gap-[5]"
      className="h-9 border border-GRAY-800 items-center rounded-full justify-center flex-row px-3 gap-[5]"
      {...rest}
    >
      <MaterialIcons name={icon} size={16} color={color} />

      <Text
        className={twMerge(
          isSelected
            ? "text-GREEN-300 text-base font-semibold"
            : "text-GRAY-400 text-base font-semibold"
        )}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
