import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../components/header";
import { Categories } from "../components/categories";
import { Link } from "../components/link";
import { colors } from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Option } from "../components/option";

export default function App() {
  return (
    <View className="flex-1 pt-[62]">
      <Header />

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Youtube"
            url="https://youtube.com"
            onDetails={() => console.log("click")}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={{
          borderTopWidth: 1,
          borderTopColor: colors.gray[600],
        }}
        contentContainerStyle={{ gap: 20, padding: 24, paddingBottom: 100 }}
      />

      <Modal transparent visible={false}>
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
                Curso
              </Text>

              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text className="text-lg font-semibold text-GRAY-300">
              React Native
            </Text>
            <Text className="text-sm text-GRAY-400">https://youtube.com</Text>

            <View
              className="flex-row mt-8 w-full justify-between py-[14]"
              style={{ borderTopWidth: 1, borderTopColor: colors.gray[600] }}
            >
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
