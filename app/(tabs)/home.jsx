import { Image } from "expo-image";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profle from "../../assets/images/profile.jpg";
import Navbar from "../../common/widgets/navbar";

export default function HomePage() {
  return (
    <SafeAreaView>
      <Navbar title="Home" />
      <View className="bg-white w-11/12 m-4 py-7 px-4 rounded-2xl">
        <View className="flex justify-center items-center ">
          <Image
            source={profle}
            style={{height:150, width:150,borderRadius:9999,overflow: "hidden",}}
            contentFit="cover"
          />
          <View className="mt-4">
            <View className="flex items-center">
              <Text className="text-xl font-bold">Petter Jognston</Text>
              <Text className="text-lg font-light">Sr. Executive Sales & Marketing</Text>
            </View>
            <View className="mt-4 gap-2">
              <Text>ID No.  : </Text>
              <Text>Blood Group : </Text>
              <Text>Contact Number : </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
