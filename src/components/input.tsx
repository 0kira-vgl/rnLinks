import { TextInput, TextInputProps } from "react-native";
import { colors } from "../styles/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="h-[52] w-full bg-GRAY-900 rounded-lg border border-GRAY-800 p-[10] text-GRAY-100"
      style={{ fontSize: 16 }}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}
