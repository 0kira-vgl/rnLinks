import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : []; // se tiver conteudo converta para objeto, caso contrario retorna um array vazio

  return response;
}

async function save(newLink: LinkStorage) {
  try {
    const storage = await get();
    const update = JSON.stringify([...storage, newLink]); // trasnforma em string

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, update);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();
    const updated = storage.filter((link) => link.id != id); // romovendo pelo id

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
}

export const linkStorage = { get, save, remove };
