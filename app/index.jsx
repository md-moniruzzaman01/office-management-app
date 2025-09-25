import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo.png";

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#4863A0" />
      <KeyboardAvoidingView behavior="padding" style={{height:"100%"}}>
        <View className="flex-1 justify-center items-center h-screen px-4">
          {/* Header */}
          <View className=" flex justify-center items-center p-2">
            <Image source={logo} className="w-32 h-32" contentFit="contain" />
            <Text className=" text-xl font-semibold">
              Always there for you.
            </Text>
          </View>

          {/* Form */}
          <View className=" w-full bg-white rounded-3xl p-4 shadow-lg ">
            <Text className="text-2xl font-bold text-center mb-6 text-[#4863A0]">
              Sign In
            </Text>

            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
              keyboardType="email"
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
            />

            <TouchableOpacity
              className="bg-[#4863A0] rounded-xl py-4 items-center mb-4"
              onPress={() => router.push("/home")}
            >
              <Text className="text-white text-lg font-semibold">Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text className="text-center text-gray-600">
                Don’t have an account?{" "}
                <Text className="text-[#4863A0] font-semibold">Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
