import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../../common/widgets/navbar";
export default function ProfilePage() {
  return (
      <SafeAreaView>
        <Navbar title="Home" />
        <View className="flex items-center">
          <View>
            <View>
              <Text>Welcome to </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
  );
}
