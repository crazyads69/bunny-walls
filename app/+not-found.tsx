import { colors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RandomDot from "@/components/error/RandomDot";
import { router } from "expo-router";
import * as Animatable from "react-native-animatable";

interface Dot {
    id: number;
    color: string;
}

export default function NotFoundScreen() {
    const [dots, setDots] = useState<Dot[]>([]);
    useEffect(() => {
        // Create array of dots with NewJeans colors
        const newDots = Array(12)
            .fill(null)
            .map((_, index) => ({
                id: index,
                color: [
                    colors.accent.pink,
                    colors.accent.mint,
                    colors.accent.lavender,
                    colors.accent.peach,
                ][index % 4],
            }));
        setDots(newDots);

        // Recreate dots every 5 seconds
        const interval = setInterval(() => {
            setDots([...newDots.map((dot) => ({ ...dot, key: Math.random() }))]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View className="flex-1 items-center justify-center bg-neutral-50 p-6">
            {/* Background Dots */}
            {dots.map((dot) => (
                <RandomDot key={`${dot.id}-${dot.color}`} color={dot.color} />
            ))}

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
                    className="mb-4 font-space text-7xl font-bold tracking-wider text-primary"
                >
                    404
                </Animatable.Text>

                {/* Error Message */}
                <Animatable.Text
                    animation="fadeInUp"
                    delay={300}
                    className="mb-2 text-center font-mont text-2xl font-semibold text-primary-denim"
                >
                    Oops! 페이지를 찾을 수 없음
                </Animatable.Text>

                {/* Cute Message */}
                <Animatable.Text
                    animation="fadeInUp"
                    delay={500}
                    className="mb-6 text-center font-pops text-base text-neutral-500"
                >
                    이 토끼가 너무 멀리 뛰어갔나 봐요! 🐰
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
                        <Text className="font-space text-base font-bold tracking-wider text-primary-denim">
                            Back Home
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </Animatable.View>
        </View>
    );
}
