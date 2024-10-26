import { RootState } from "@/store/store";
import { convertFirebaseUserToUser } from "@/util/auth/authUtil";
import { Href, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess, setLoading, setUser } from "../store/slice/authSlice";
import { auth } from "../util/firebaseConfig";
import LoadingScreen from "./(utils)/loading";

// Define types for routes and segments
type RouteSegment = "(auth)" | "(tabs)" | "wallpaper" | string;
type AppRoute =
    | "/(auth)"
    | "/(auth)/login"
    | "/(auth)/register"
    | "/(tabs)"
    | "/(tabs)/favorite"
    | "/(tabs)/leaderboard"
    | "/(tabs)/profile"
    | "/(tabs)/upload"
    | "/wallpaper/[id]"
    | "/";

export default function Index() {
    const dispatch = useDispatch();
    const router = useRouter();
    const segments = useSegments();
    const isLoading = useSelector((state: RootState) => state.auth.isLoading);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        dispatch(setLoading(true));
        const minLoadingTime = 5000; // 1 second minimum loading time
        const startTime = Date.now();

        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                const user = convertFirebaseUserToUser(firebaseUser);
                dispatch(setUser(user));
            } else {
                dispatch(logoutSuccess());
            }

            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

            setTimeout(() => {
                setIsInitialized(true);
                dispatch(setLoading(false));
            }, remainingTime);
        });

        return unsubscribe;
    }, [dispatch]);

    const navigateTo = (route: AppRoute) => {
        router.replace(route as Href<string>);
    };

    useEffect(() => {
        if (!isInitialized) return;

        const currentSegment = segments[0] as RouteSegment;
        const inAuthGroup = currentSegment === "(auth)";
        const inWallpaperRoute = currentSegment === "wallpaper";

        if (!isAuthenticated) {
            // If not authenticated, redirect to auth index page
            if (!inAuthGroup) {
                navigateTo("/(auth)");
            }
        } else {
            // If authenticated
            if (inAuthGroup) {
                // Redirect to tabs if trying to access auth pages while authenticated
                navigateTo("/(tabs)");
            } else if (inWallpaperRoute) {
                // Allow access to wallpaper route
                // The route is already correct, so we don't need to do anything
            } else if (currentSegment !== "(tabs)") {
                // If not in tabs or wallpaper route, redirect to tabs
                navigateTo("/(tabs)");
            }
        }
    }, [isAuthenticated, segments, isInitialized, router]);

    if (isLoading || !isInitialized) {
        return <LoadingScreen />;
    }

    return null;
}
