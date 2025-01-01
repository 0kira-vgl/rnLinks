import { FlatList } from "react-native";
import { categories } from "../utils/categories";
import { Category } from "./category";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={{ height: 52, maxHeight: 52 }}
      contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
