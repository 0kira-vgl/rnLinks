import { Button } from "@/src/components/button";
import { Categories } from "@/src/components/categories";
import { Input } from "@/src/components/input";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    if (!category) {
      return Alert.alert("Categoria", "Selecione a categoria");
    }

    // "trim()" remove o caracter "espaço"
    if (!name.trim()) {
      return Alert.alert("Nome", "Preencha o nome");
    }

    if (!url.trim()) {
      return Alert.alert("URL", "Preencha a URL");
    }

    console.log({ category, name, url });
  }

  return (
    <View className="flex-1 pt-[62]">
      <View className="flex-row justify-between px-6 mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text className="text-GRAY-200 text-2xl font-semibold">Novo</Text>
      </View>

      <Text className="text-GRAY-400 text-sm px-6 pb-5">
        Selecione uma categoria
      </Text>

      <Categories onChange={setCategory} selected={category} />

      <View className="px-6 py-3 gap-4">
        <Input
          placeholder="Nome"
          onChangeText={setName} // recupera o valor do input
          autoCorrect={false} // desativa o corretor
        />
        <Input
          placeholder="URL"
          onChangeText={setUrl}
          autoCorrect={false}
          keyboardType="url" // define o tipo de teclado do dispositivo
        />

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
