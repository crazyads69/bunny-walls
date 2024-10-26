// (auth)/privacy.tsx

import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function PrivacyPolicy() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-neutral-100">
            <ScrollView
                contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}
                className="flex-1 p-5"
            >
                <Animatable.View
                    animation="fadeInDown"
                    duration={1000}
                    className="mb-6 items-center"
                >
                    <Text className="font-space-bold text-4xl text-primary-denim">
                        Privacy Policy
                    </Text>
                    <Text className="mt-2 font-pops text-sm text-neutral-600">
                        BunnyWalls for NewJeans fans
                    </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
                    <Section title="1. Information We Collect">
                        We collect information you provide when using BunnyWalls, including account
                        details, uploaded wallpapers, and interactions within the app.
                    </Section>

                    <Section title="2. How We Use Your Information">
                        We use your information to provide and improve BunnyWalls services,
                        personalize your experience, and communicate with you about app updates and
                        features.
                    </Section>

                    <Section title="3. Information Sharing">
                        We don't sell your personal information. We may share anonymized data for
                        analytics purposes or when required by law.
                    </Section>

                    <Section title="4. Your Choices">
                        You can review and edit your account information anytime. You may also
                        request deletion of your account and associated data.
                    </Section>

                    <Section title="5. Data Security">
                        We implement reasonable security measures to protect your information, but
                        no method of transmission over the internet is 100% secure.
                    </Section>

                    <Section title="6. Children's Privacy">
                        BunnyWalls is not intended for children under 13. We do not knowingly
                        collect information from children under 13.
                    </Section>

                    <Section title="7. Changes to This Policy">
                        We may update our Privacy Policy from time to time. We will notify you of
                        any changes by posting the new Privacy Policy on this page.
                    </Section>

                    <Section title="8. Contact Us">
                        If you have any questions about this Privacy Policy, please contact us at
                        [Your Contact Information].
                    </Section>

                    <Text className="mt-6 text-center font-pops text-sm text-neutral-600">
                        By using BunnyWalls, you agree to this Policy.{"\n"}Stay awesome, Bunnies!
                        🐰
                    </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" duration={1000} delay={600} className="mt-8">
                    <TouchableOpacity
                        className="items-center rounded-full bg-primary py-3.5"
                        onPress={() => router.back()}
                    >
                        <Text className="font-space-bold text-lg text-white">I Understand</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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
