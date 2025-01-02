import {
  Alert,
  FlatList,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../components/header";
import { Categories } from "../components/categories";
import { Link } from "../components/link";
import { colors } from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Option } from "../components/option";
import { useCallback, useState } from "react";
import { categories } from "../utils/categories";
import { LinkStorage, linkStorage } from "../storage/linkStorage";
import { useFocusEffect } from "expo-router";

export default function App() {
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

  async function getLinks() {
    try {
      const response = await linkStorage.get();
      const filtered = response.filter((link) => link.category === category);

      setLinks(filtered);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  function handleDetails(selected: LinkStorage) {
    setShowModal(true);
    setLink(selected);
  }

  async function linkRemove() {
    try {
      await linkStorage.remove(link.id);
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir  o link");
      console.log(error);
    }
  }

  function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir?", [
      { style: "cancel", text: "Não" },
      { style: "destructive", text: "Sim", onPress: linkRemove },
    ]);
  }

  async function handleOpen() {
    try {
      await Linking.openURL(link.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert("Link", "Não foi possível abrir o link.");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category]) // sempre que mudar a categoria ele renderiza dnv
  );

  return (
    <View className="flex-1 pt-[62]">
      <Header />

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={{
          borderTopWidth: 1,
          borderTopColor: colors.gray[600],
        }}
        contentContainerStyle={{ gap: 20, padding: 24, paddingBottom: 100 }}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View className="flex-1 justify-end">
          <View
            className="bg-GRAY-900 pb-12 p-6"
            style={{
              backgroundColor: colors.gray[900],
              borderTopWidth: 1,
              borderTopColor: colors.gray[800],
            }}
          >
            <View className="w-full flex-row items-center mb-8">
              <Text className="flex-1 text-base font-medium text-GRAY-400">
                {link.category}
              </Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text className="text-lg font-semibold text-GRAY-300">
              {link.name}
            </Text>
            <Text className="text-sm text-GRAY-400">{link.url}</Text>

            <View
              className="flex-row mt-8 w-full justify-between py-[14]"
              style={{ borderTopWidth: 1, borderTopColor: colors.gray[600] }}
            >
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleRemove}
              />
              <Option name="Abrir" icon="language" onPress={handleOpen} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
