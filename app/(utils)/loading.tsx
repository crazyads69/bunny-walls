import { colors } from "@/theme/colors";
import { useEffect, useState } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function LoadingScreen() {
    const [loadingText, setLoadingText] = useState("Get up");

    useEffect(() => {
        const phrases = [
            "Tell Me",
            "New Jeans",
            "Attention",
            "Hype Boy",
            "Ditto",
            "OMG",
            "Hurt",
            "Zero",
            "Be Who You Are",
            "Super Shy",
            "Get Up",
            "ETA",
            "Cool With You",
            "Gods",
            "How Sweet",
            "Bubble Gum",
            "Supernatural",
            "Right Now",
        ];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % phrases.length;
            setLoadingText(phrases[currentIndex]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View className="relative flex-1 items-center justify-center bg-neutral-100">
            {/* Background Decorative Elements */}
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                className="absolute left-[-20%] top-[-10%] h-64 w-64 rounded-full bg-accent-mint/10"
            />
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                delay={300}
                className="absolute bottom-[-10%] right-[-20%] h-48 w-48 rounded-full bg-accent-pink/10"
            />

            {/* NewJeans Logo Animation */}
            <Animatable.View
                animation="bounceIn"
                duration={1500}
                className="mb-8 h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-accent-pink to-accent-mint p-1"
            >
                <View className="h-full w-full items-center justify-center rounded-full bg-neutral-50">
                    <Animatable.Text
                        animation="rotate"
                        iterationCount="infinite"
                        duration={3000}
                        className="text-2xl"
                    >
                        🐰
                    </Animatable.Text>
                </View>
            </Animatable.View>

            {/* Loading Text */}
            <Animatable.Text
                animation="fadeIn"
                iterationCount="infinite"
                duration={1000}
                className="font-space-bold text-3xl tracking-wider text-primary-denim"
            >
                {loadingText}
            </Animatable.Text>

            {/* Animated Dots */}
            <View className="mt-6 flex-row space-x-3">
                {[
                    colors.accent.mint,
                    colors.accent.pink,
                    colors.accent.lavender,
                    colors.accent.peach,
                ].map((color, index) => (
                    <Animatable.View
                        key={index}
                        animation={{
                            0: {
                                transform: [{ scale: 1 }, { translateY: 0 }],
                            },
                            0.5: {
                                transform: [{ scale: 1.2 }, { translateY: -10 }],
                            },
                            1: {
                                transform: [{ scale: 1 }, { translateY: 0 }],
                            },
                        }}
                        iterationCount="infinite"
                        duration={1500}
                        delay={index * 200}
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </View>

            {/* Mini Bunnies */}
            <View className="absolute bottom-10 flex-row space-x-4">
                {[0, 1, 2, 3, 4].map((index) => (
                    <Animatable.Text
                        key={index}
                        animation="bounce"
                        iterationCount="infinite"
                        duration={2000}
                        delay={index * 200}
                        className="text-2xl"
                    >
                        {index % 2 === 0 ? "🐰" : "✨"}
                    </Animatable.Text>
                ))}
            </View>

            {/* Footer Text */}
            <Animatable.Text
                animation="fadeIn"
                iterationCount="infinite"
                duration={2000}
                className="absolute bottom-4 font-space text-sm text-neutral-500"
            >
                Bunny time loading...
            </Animatable.Text>
        </View>
    );
}
