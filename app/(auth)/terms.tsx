// (auth)/term.tsx

import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function TermsOfService() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-neutral-100">
            <ScrollView
                className="flex-1 p-5"
                contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}
            >
                <Animatable.View
                    animation="fadeInDown"
                    duration={1000}
                    className="mb-6 items-center"
                >
                    <Text className="font-space-bold text-4xl text-primary-denim">
                        Terms of Service
                    </Text>
                    <Text className="mt-2 font-pops text-sm text-neutral-600">
                        BunnyWalls for NewJeans fans
                    </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
                    <Section title="1. Acceptance of Terms">
                        By using BunnyWalls, you agree to these Terms of Service. If you disagree,
                        please don't use our service.
                    </Section>

                    <Section title="2. Description of Service">
                        BunnyWalls is a wallpaper app for NewJeans (Bunnies) fans. Browse, upload,
                        favorite, and rate wallpapers!
                    </Section>

                    <Section title="3. User Accounts">
                        Sign up with Google or email. Keep your account safe - it's your
                        responsibility.
                    </Section>

                    <Section title="4. User-Generated Content">
                        Upload wallpapers and comment freely. By uploading, you let us use your
                        content within the app.
                    </Section>

                    <Section title="5. Copyright">
                        Only upload content you own or have permission to use. We respect
                        intellectual property rights.
                    </Section>

                    <Section title="6. Be Nice!">
                        No illegal or offensive content. We may remove content or accounts that
                        violate these terms.
                    </Section>

                    <Section title="7. Liability">
                        BunnyWalls is provided as-is. We're not responsible for any issues from
                        using our service.
                    </Section>

                    <Section title="8. Changes">
                        We may change or stop the service anytime. We'll try to let you know when we
                        do.
                    </Section>

                    <Text className="mt-6 text-center font-pops text-sm text-neutral-600">
                        By using BunnyWalls, you agree to these Terms.{"\n"} Stay cool, Bunnies! 🐰
                    </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" duration={1000} delay={600} className="mt-8">
                    <TouchableOpacity
                        className="items-center rounded-full bg-primary py-3.5"
                        onPress={() => router.back()}
                    >
                        <Text className="font-space-bold text-lg text-white">I Agree</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    );
}

function Section({ title, children }: { title: string; children: string }) {
    return (
        <Animatable.View
            animation="fadeInLeft"
            duration={800}
            delay={400}
            className="mb-4 rounded-2xl bg-white p-4 shadow-sm"
        >
            <Text className="font-space-semibold mb-2 text-lg text-primary-denim">{title}</Text>
            <Text className="font-pops text-sm text-neutral-700">{children}</Text>
        </Animatable.View>
    );
}
