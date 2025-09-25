import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../../common/widgets/navbar";

export default function ActivitiesPage() {
  return (
    <SafeAreaView>
      <Navbar title="Activities" />
      <View>
        <Text>ActivitiesPage</Text>
      </View>
    </SafeAreaView>
  );
}
