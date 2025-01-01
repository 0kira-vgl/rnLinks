import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, className, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5} // controla opacidade
      className={twMerge(
        "h-[52] w-full bg-GREEN-300 rounded-lg justify-center items-center",
        className
      )}
      {...rest}
    >
      <Text className="text-GREEN-900 text-lg font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
