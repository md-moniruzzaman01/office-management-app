import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import logo from "../../../assets/images/logo.png";

export default function Navbar() {
  const router = useRouter();

  return (
    <View className="bg-white">
      {/* Top Navbar */}
      <View className="flex-row justify-between items-center px-4 py-2 h-16">
        {/* Left: Logo */}
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Image
            source={logo}
            resizeMode="contain"
            style={{ width: 50, height: 70 }}
          />
        </TouchableOpacity>

        {/* Right: Icons */}
        <View className="flex-row items-center justify-between  w-3/12">
          <TouchableOpacity onPress={() => router.push("/notification")}>
            <View className=" p-2">
              <Ionicons name="notifications-outline" size={24} color="gray" />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => router.push("/chats")}>
            <View className="p-2">
              <Ionicons name="chatbox-ellipses-outline" size={24} color="gray" />
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => router.push("/profile")}>
            <View className="border-gray-500 border-2 rounded-full p-1">
              <Ionicons name="person-outline" size={24} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
