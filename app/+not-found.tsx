import { colors } from "@/theme/colors";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function NotFoundScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-neutral-50 p-6">
            {/* Main Container */}
            <Animatable.View
                animation="fadeIn"
                duration={1000}
                className="items-center justify-center rounded-3xl border-2 border-primary-light/30 bg-white/90 p-8 shadow-lg"
            >
                {/* Animated 404 */}
                <Animatable.Text
                    animation="bounceIn"
                    duration={1500}
                    className="font-space-bold mb-4 text-7xl tracking-wider text-primary"
                >
                    404
                </Animatable.Text>

                {/* Error Message */}
                <Animatable.Text
                    animation="fadeInUp"
                    delay={300}
                    className="font-mont-semibold mb-2 text-center text-2xl text-primary-denim"
                >
                    Oops! Page Not Found
                </Animatable.Text>

                {/* Cute Message */}
                <Animatable.Text
                    animation="fadeInUp"
                    delay={500}
                    className="mb-6 text-center font-pops text-base text-neutral-500"
                >
                    Looks like this bunny hopped too far! 🐰
                </Animatable.Text>

                {/* Decorative Dots */}
                <Animatable.View animation="fadeIn" delay={700} className="mb-6 flex-row space-x-3">
                    {[
                        colors.accent.pink,
                        colors.accent.mint,
                        colors.accent.lavender,
                        colors.accent.peach,
                    ].map((color, index) => (
                        <Animatable.View
                            key={index}
                            animation="pulse"
                            iterationCount="infinite"
                            duration={2000}
                            delay={index * 200}
                            className="h-4 w-4 rounded-full"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </Animatable.View>

                {/* NewJeans Style Label */}
                <Animatable.Text
                    animation="fadeIn"
                    delay={900}
                    className="mb-6 font-space text-sm uppercase tracking-widest text-primary-light"
                >
                    ❀ NewJeans Error ❀
                </Animatable.Text>

                {/* Button Container */}
                <Animatable.View animation="fadeInUp" delay={1100} className="flex-row space-x-2">
                    {/* Primary Button */}
                    <TouchableOpacity
                        onPress={() => router.push("/")}
                        className="rounded-full bg-accent-mint px-6 py-3 shadow-sm active:scale-95"
                    >
                        <Text className="font-space-bold text-base tracking-wider text-primary-denim">
                            Back Home
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </Animatable.View>
        </View>
    );
}
