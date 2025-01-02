import { MaterialIcons } from "@expo/vector-icons";

type CategoryProps = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap; // icone dinamico
};

export const categories: CategoryProps[] = [
  {
    id: "1",
    name: "Todos",
    icon: "all-inclusive",
  },
  {
    id: "2",
    name: "Curso",
    icon: "code",
  },
  {
    id: "3",
    name: "Projeto",
    icon: "folder",
  },
  {
    id: "4",
    name: "Site",
    icon: "language",
  },
  {
    id: "5",
    name: "Artigo",
    icon: "newspaper",
  },
  {
    id: "6",
    name: "Vídeo",
    icon: "movie",
  },
  {
    id: "7",
    name: "Documentação",
    icon: "content-paste",
  },
];
