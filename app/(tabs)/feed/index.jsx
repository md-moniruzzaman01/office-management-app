import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image as ExpoImage,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../../../assets/images/profile.jpg";
import Navbar from "../../../common/widgets/navbar";

const newsData = [
  {
    id: "1",
    user: "Petter Jognston",
    action: "Posted an Event",
    title: "Bangladesh ICT & Innovation Awards 2025",
    image:
      "https://images.unsplash.com/photo-1758654307553-f067f0367f13?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    user: "Sarah Khan",
    action: "Shared a Story",
    title: "Future of AI in Bangladesh",
    image:
      "https://images.unsplash.com/photo-1758642882005-447873fd2d29?q=80&w=687&auto=format&fit=crop",
  },
];

export default function FeedsPage() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-xl shadow p-3 mb-4">
      <View className="flex-row items-center gap-4 mb-2">
        <ExpoImage
          source={profile}
          style={{ width: 48, height: 48, borderRadius: 9999 }}
        />
        <View>
          <Text className="font-bold">{item.user}</Text>
          <Text>{item.action}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => router.push(`/feed/${item.id}`)}>
        <View className="h-80 rounded-xl overflow-hidden mb-2">
          <ExpoImage
            source={{ uri: item.image }}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>

        <Text className="font-bold text-lg">{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="p-2 relative">
      <Navbar title="Feed" />

      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View className="absolute bottom-20 right-4 z-10">
        <TouchableOpacity
          className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center"
          onPress={() => {}}
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
