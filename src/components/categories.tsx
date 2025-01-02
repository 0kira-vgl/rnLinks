import { FlatList } from "react-native";
import { categories as allCategories } from "../utils/categories";
import { Category } from "./category";

type CategoriesProps = {
  selected: string;
  onChange: (category: string) => void;
  exclude?: string[]; // add para permitir exclusões
};

export function Categories({
  selected,
  onChange,
  exclude = [],
}: CategoriesProps) {
  // filtra as categorias, excluindo as especificadas
  const filteredCategories = allCategories.filter(
    (category) => !exclude.includes(category.name)
  );

  return (
    <FlatList
      data={filteredCategories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected} // se o nome da categoria é igual ao que está selecionado...
          onPress={() => onChange(item.name)} // passa o nome da categoria clicada
        />
      )}
      horizontal
      style={{ height: 52, maxHeight: 52 }}
      contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
