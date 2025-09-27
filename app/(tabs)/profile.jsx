import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profle from "../../assets/images/profile.jpg";
import Navbar from "../../common/widgets/navbar";

const ProfilePage = () => {
  const router = useRouter();
  const menuItems = [
    {
      id: "leave",
      title: "My leave",
      subtitle: "Track you leaves and view history",
      icon: "file-tray-outline",
      iconColor: "#2563EB",
      iconBg: "#DBEAFE",
      onPress: () => router.push("/(routes)/leave"),
    },
    {
      id: "holydays",
      title: "Holydays",
      subtitle: "View Holydays",
      icon: "mail-outline",
      iconColor: "#059669",
      iconBg: "#D1FAE5",
      onPress: () => router.push("/(routes)/holydays"),
    },
    {
      id: "password",
      title: "Change Password",
      subtitle: "Update your account password",
      icon: "lock-closed-outline",
      iconColor: "#DC2626",
      iconBg: "#FEE2E2",
      onPress: () => router.push("/(routes)/change-password"),
    },
    {
      id: "setting",
      title: "Account Settings",
      subtitle: "Manage your account preferences",
      icon: "settings-outline",
      iconColor: "#6B7280",
      iconBg: "#F3F4F6",
      onPress: () => router.push("/(routes)/setting"),
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <Navbar title="Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        <View className="bg-white rounded-2xl p-4 m-2 shadow-[0_0_3px_rgba(0,0,0.3)] border border-gray-100 mb-6">
          <View className="flex-row items-center ">
            <View className="flex-row items-center mb-6 mr-6 relative">
              <Image
                source={profle}
                style={{
                  height: 90,
                  width: 90,
                  borderRadius: 9999,
                  overflow: "hidden",
                }}
                contentFit="cover"
              />

              <TouchableOpacity className="absolute -bottom-1 -right-0 w-6 h-6 bg-blue-600 rounded-full items-center justify-center">
                <Ionicons name="camera" color={"#fff"} size={12} />
              </TouchableOpacity>
            </View>

            <View className="">
              <Text className="text-xl font-bold">Petter Jognston</Text>
              <Text className="text-lg">admin@necgroupbd.net</Text>
              <TouchableOpacity className="mt-2">
                <Text className="text-blue-600 font-poppins-medium text-sm">
                  Change Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Status */}
          <View className="flex-row justify-center gap-4">
            <View className="flex items-center bg-gray-50 rounded-xl w-28 p-2">
              <View className="flex-row items-center mb-2 gap-2">
                <Ionicons name="time-outline" size={16} color={"#6B7280"} />
                <Text className="text-gray-600">Requests</Text>
              </View>
              <Text className="text-xl font-poppins-medium">7</Text>
            </View>
            <View className="flex items-center bg-gray-50 rounded-xl  w-28 p-2">
              <View className="flex-row items-center mb-2 gap-2">
                <Ionicons name="time-outline" size={16} color={"#6B7280"} />
                <Text className="text-gray-600">Dep.</Text>
              </View>
              <Text className="text-xl font-poppins-medium">1</Text>
            </View>
            <View className="flex items-center bg-gray-50 rounded-xl  w-28 p-2">
              <View className="flex-row items-center mb-2 gap-2">
                <Ionicons name="time-outline" size={16} color={"#6B7280"} />
                <Text className="text-gray-600">Access</Text>
              </View>
              <Text className="text-xl font-poppins-medium">5</Text>
            </View>
          </View>
        </View>
        {/* menu Items */}
        <View className="gap-4 px-2">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="bg-white rounded-2xl shadow-[0_0_1px_rbga(0,0,0,0.1)] border border-gray-100 p-4"
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <View className="flex-row items-center">
                <View
                  className="w-12 h-12 rounded-xl items-center justify-center mr-4"
                  style={{
                    backgroundColor:`${item.iconColor}30`,
                    borderRadius: 10,
                  }}
                >
                  <Ionicons name={item.icon} size={24} color={item.iconColor} />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-poppins-semibold text-gray-950">
                    {item.title}
                  </Text>
                  <Text className="text-gray-500 font-poppins-medium text-sm">
                    {item.subtitle}
                  </Text>
                </View>
                <View>
                  <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Logout Button */}
          <TouchableOpacity
            className="bg-red-50 rounded-2xl border border-red-200 p-4 mt-6"
            onPress={() => {}}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center justify-center">
              <Ionicons name="log-out-outline" size={20} color="#EF4444" />
              <Text className="ml-2 font-poppins-semibold text-red-500 text-lg">
                Logout
              </Text>
            </View>
          </TouchableOpacity>
          <View className="h-20"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
