import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full space-x-0">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Text className="text-4xl font-pblack text-[#EBD9B4] pt-4">
            Biblioteca
          </Text>
          <Text className="text-2xl font-pblack text-[#EBD9B4] my-[-8px]">
            do Vinão
          </Text>

          <Image
            source={images.books}
            className="max-w-[380px] w-full h-[300px] my-[-20px]"
            resizeMode="contain"
          />
          <Text className="text-3xl text-white font-pblack text-center mx-4 my-[-10px]">
            Para organizar a sua coleção!
          </Text>

          <CustomButton
            title="Entrar"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-80 mt-10"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#638889" style="light" />
    </SafeAreaView>
  );
}
