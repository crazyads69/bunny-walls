import { Href, Link, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function WelcomeScreen() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/(auth)/login" as Href<string>);
    };

    const handleSignUp = () => {
        router.push("/(auth)/register" as Href<string>);
    };

    const handleGoogleLogin = () => {
        console.log("Google login pressed");
    };

    return (
        <SafeAreaView className="flex-1 bg-neutral-100">
            {/* Decorative Background Elements */}
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                className="absolute left-[-20%] top-[-10%] h-64 w-64 rounded-full bg-accent-mint/20"
            />
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                delay={300}
                className="absolute bottom-[-10%] right-[-20%] h-48 w-48 rounded-full bg-accent-pink/20"
            />

            {/* Main Content */}
            <View className="flex-1 justify-between p-5">
                {/* Header Section */}
                <View className="mt-10 items-center">
                    <Animatable.View
                        animation="bounceIn"
                        duration={1500}
                        className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-accent-pink to-accent-mint p-1"
                    >
                        <View className="h-full w-full items-center justify-center rounded-full bg-neutral-50">
                            <Text className="text-4xl">🐰</Text>
                        </View>
                    </Animatable.View>

                    <Animatable.Text
                        animation="fadeInDown"
                        duration={1000}
                        className="font-space-bold mb-2.5 text-5xl text-primary-denim"
                    >
                        BunnyWalls
                    </Animatable.Text>
                    <Animatable.Text
                        animation="fadeInUp"
                        duration={1000}
                        className="font-pops text-lg text-neutral-700"
                    >
                        ❀ Stay in the NewJeans loop! ❀
                    </Animatable.Text>
                </View>

                {/* Buttons Section */}
                <Animatable.View
                    animation="fadeInUp"
                    duration={1000}
                    delay={300}
                    className="w-full space-y-4"
                >
                    {/* Sign Up Button */}
                    <TouchableOpacity
                        className="items-center overflow-hidden rounded-full bg-primary"
                        onPress={handleSignUp}
                    >
                        <View className="w-full items-center py-3.5">
                            <Text className="font-space-bold text-lg text-white">Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Login Text */}
                    <View className="mt-4 flex-row items-center justify-center">
                        <Text className="font-pops text-sm text-neutral-600">
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text className="font-pops-semibold ml-1.5 text-sm text-primary-dark underline">
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Divider */}
                    <View className="my-4 flex-row items-center">
                        <View className="h-[1px] flex-1 bg-neutral-200" />
                        <Text className="mx-4 font-space text-xs uppercase text-neutral-500">
                            Or
                        </Text>
                        <View className="h-[1px] flex-1 bg-neutral-200" />
                    </View>

                    {/* Google Login Button */}
                    <TouchableOpacity
                        className="flex-row items-center justify-center rounded-full border-2 border-primary bg-neutral-50 py-3.5"
                        onPress={handleGoogleLogin}
                    >
                        <Text className="font-space-semibold text-base text-primary-denim">
                            Continue with Google
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

                {/* Footer Section */}
                <Animatable.View
                    animation="fadeIn"
                    duration={1000}
                    delay={600}
                    className="mb-5 items-center"
                >
                    <Text className="mb-1.5 font-pops text-sm text-neutral-500">
                        By continuing, you agree to our
                    </Text>
                    <View className="flex-row">
                        <Link href="/(auth)/terms" asChild>
                            <Text className="font-pops text-sm text-primary underline">
                                Terms of Service
                            </Text>
                        </Link>
                        <Text className="mx-1.5 text-neutral-400">•</Text>
                        <Link href="/(auth)/privacy" asChild>
                            <Text className="font-pops text-sm text-primary underline">
                                Privacy Policy
                            </Text>
                        </Link>
                    </View>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
}
