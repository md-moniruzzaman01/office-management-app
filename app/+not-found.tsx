import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../common/widgets/navbar";
const NotFoundPage = () => {
  return (
    <SafeAreaView>
      {/* <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} /> */}
      <Navbar />
      <View className="flex-1 items-center justify-center h-screen my-auto">
        <View>
          <Link href="/">
            <Text>Go to home screen</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotFoundPage;
