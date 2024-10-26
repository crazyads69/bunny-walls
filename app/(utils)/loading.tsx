import { colors } from "@/theme/colors";
import { useEffect, useState } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

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
        <View className="flex-1 items-center justify-center bg-white">
            {/* Loading Text */}
            <Animatable.Text
                animation="pulse"
                iterationCount="infinite"
                duration={1500}
                className="font-space-bold text-2xl tracking-wider text-primary-denim"
            >
                {loadingText}
            </Animatable.Text>

            {/* Bouncing Dots */}
            <View className="my-2 mt-4 flex-row space-x-2">
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

            {/* Mini Bunny */}
            <Animatable.Text
                animation="bounce"
                iterationCount="infinite"
                duration={2000}
                className="absolute bottom-8 font-space text-3xl"
            >
                🐰
            </Animatable.Text>
        </View>
    );
}
