import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { colors } from "../styles/colors";
import { twMerge } from "tailwind-merge";

type OptionProps = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Option({
  name,
  icon,
  variant = "primary",
  ...rest
}: OptionProps) {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />

      <Text
        className={twMerge(
          variant === "primary"
            ? "text-GREEN-300 text-base font-semibold"
            : "text-GRAY-400 text-base"
        )}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
