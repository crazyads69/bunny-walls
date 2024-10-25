import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Href, useRouter } from "expo-router";

export default function WelcomeScreen() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/(auth)/login" as Href<string>);
    };

    const handleSignUp = () => {
        router.push("/(auth)/register" as Href<string>);
    };

    const handleGoogleLogin = () => {
        // Implement Google OAuth login logic here
        console.log("Google login pressed");
    };

    return (
        <SafeAreaView className="flex-1 bg-neutral-50">
            <View className="flex-1 justify-between p-5">
                <View className="mt-10 items-center">
                    {/* <Image
                        source={require("../assets/bunny-logo.png")} // Make sure to add this image
                        className="mb-4 h-24 w-24"
                    /> */}
                    <Text className="mb-2.5 font-space text-5xl font-bold text-primary">
                        BunnyWalls
                    </Text>
                    <Text className="font-pops text-lg text-neutral-600">
                        Stay in the NewJeans loop!
                    </Text>
                </View>

                <View className="w-full">
                    <TouchableOpacity
                        className="mb-4 items-center rounded-full bg-accent-mint py-4"
                        onPress={handleLogin}
                    >
                        <Text className="font-mont text-lg font-semibold text-primary-denim">
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="mb-4 items-center rounded-full border-2 border-accent-lavender bg-neutral-50 py-4"
                        onPress={handleSignUp}
                    >
                        <Text className="font-mont text-lg font-semibold text-primary-dark">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="mt-2.5 flex-row items-center justify-center rounded-full bg-accent-peach py-4"
                        onPress={handleGoogleLogin}
                    >
                        <Text className="font-mont text-base font-medium text-primary-denim">
                            Continue with Google
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="mb-5 items-center">
                    <Text className="mb-1.5 font-pops text-sm text-neutral-500">
                        By continuing, you agree to our
                    </Text>
                    <View className="flex-row">
                        <Text className="font-pops text-sm text-primary underline">
                            Terms of Service
                        </Text>
                        <Text className="mx-1.5 text-neutral-400"> • </Text>
                        <Text className="font-pops text-sm text-primary underline">
                            Privacy Policy
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
