import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../../common/widgets/navbar";

const AttendancePage = () => {
  return (
    <SafeAreaView>
      <Navbar title="Attendance" />
      <View>
        <Text>Attendace page</Text>
      </View>
    </SafeAreaView>
  );
};

export default AttendancePage;
