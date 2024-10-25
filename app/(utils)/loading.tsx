import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors } from "@/theme/colors";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [loadingText, setLoadingText] = useState("Loading");

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText((current) => {
                if (current === "Loading...") return "Loading";
                return current + ".";
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <View className="flex-1 items-center justify-center bg-neutral-50">
            {/* Background Bubbles */}
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                className="absolute h-64 w-64 rounded-full bg-accent-mint/20"
            />
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                delay={300}
                className="absolute h-48 w-48 rounded-full bg-accent-pink/20"
            />

            {/* CD Animation */}
            <Animatable.View
                animation="rotate"
                iterationCount="infinite"
                duration={3000}
                easing="linear"
                className="mb-8 h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-gradient-to-r from-primary-light to-primary"
            >
                {/* CD Center */}
                <View className="h-6 w-6 rounded-full bg-white" />
            </Animatable.View>

            {/* Loading Text */}
            <Animatable.Text className="font-space text-2xl tracking-wider text-primary-denim">
                {loadingText}
            </Animatable.Text>

            {/* Bouncing Dots */}
            <View className="mt-8 flex-row space-x-2">
                {[
                    colors.accent.pink,
                    colors.accent.mint,
                    colors.accent.lavender,
                    colors.accent.peach,
                ].map((color, index) => (
                    <Animatable.View
                        key={index}
                        animation="bounce"
                        iterationCount="infinite"
                        duration={1500}
                        delay={index * 200}
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </View>

            {/* Additional Decorative Elements */}
            <View className="absolute inset-0">
                {/* Randomly positioned stars */}
                {Array(6)
                    .fill(null)
                    .map((_, index) => (
                        <Animatable.Text
                            key={index}
                            animation="flash"
                            iterationCount="infinite"
                            duration={2000}
                            delay={index * 400}
                            className="absolute text-lg opacity-60"
                            style={{
                                left: `${Math.random() * 80 + 10}%`,
                                top: `${Math.random() * 80 + 10}%`,
                                color: [
                                    colors.accent.pink,
                                    colors.accent.mint,
                                    colors.accent.lavender,
                                    colors.accent.peach,
                                ][index % 4],
                            }}
                        >
                            ✦
                        </Animatable.Text>
                    ))}

                {/* Y2K-style decorative elements */}
                <Animatable.Text
                    animation="pulse"
                    iterationCount="infinite"
                    duration={2000}
                    className="absolute left-4 top-20 rotate-[-15deg] font-space text-sm text-accent-pink"
                >
                    ⟡ NewJeans
                </Animatable.Text>
                <Animatable.Text
                    animation="pulse"
                    iterationCount="infinite"
                    duration={2000}
                    delay={300}
                    className="absolute bottom-20 right-4 rotate-[15deg] font-space text-sm text-accent-mint"
                >
                    Loading... ⟡
                </Animatable.Text>
            </View>

            {/* Mini Bunny */}
            <Animatable.Text
                animation="bounce"
                iterationCount="infinite"
                duration={2000}
                className="absolute bottom-8 font-space text-2xl"
            >
                🐰
            </Animatable.Text>

            {/* Progress Bar */}
            <View className="absolute bottom-16 w-48 overflow-hidden rounded-full bg-white/50">
                <Animatable.View
                    animation="slideInLeft"
                    iterationCount="infinite"
                    duration={2000}
                    className="h-1.5 w-full bg-gradient-to-r from-accent-pink via-accent-mint to-accent-lavender"
                />
            </View>
        </View>
    );
}
