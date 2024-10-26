import store from "@/store/store";
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        MontserratLight: Montserrat_300Light,
        MontserratRegular: Montserrat_400Regular,
        MontserratMedium: Montserrat_500Medium,
        MontserratSemiBold: Montserrat_600SemiBold,
        MontserratBold: Montserrat_700Bold,
        PoppinsLight: Poppins_300Light,
        PoppinsRegular: Poppins_400Regular,
        PoppinsMedium: Poppins_500Medium,
        PoppinsSemiBold: Poppins_600SemiBold,
        PoppinsBold: Poppins_700Bold,
        SpaceGroteskLight: SpaceGrotesk_300Light,
        SpaceGroteskRegular: SpaceGrotesk_400Regular,
        SpaceGroteskMedium: SpaceGrotesk_500Medium,
        SpaceGroteskSemiBold: SpaceGrotesk_600SemiBold,
        SpaceGroteskBold: SpaceGrotesk_700Bold,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
}
