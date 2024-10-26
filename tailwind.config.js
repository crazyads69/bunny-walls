/** @type {import('tailwindcss').Config} */
const { colors } = require("./theme/colors");
const { typography } = require("./theme/typography");

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./theme/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: colors,
            fontFamily: {
                "mont-light": [typography.fonts.primary.light],
                mont: [typography.fonts.primary.regular],
                "mont-medium": [typography.fonts.primary.medium],
                "mont-semibold": [typography.fonts.primary.semibold],
                "mont-bold": [typography.fonts.primary.bold],
                "pops-light": [typography.fonts.secondary.light],
                pops: [typography.fonts.secondary.regular],
                "pops-medium": [typography.fonts.secondary.medium],
                "pops-semibold": [typography.fonts.secondary.semibold],
                "pops-bold": [typography.fonts.secondary.bold],
                "space-light": [typography.fonts.accent.light],
                space: [typography.fonts.accent.regular],
                "space-medium": [typography.fonts.accent.medium],
                "space-semibold": [typography.fonts.accent.semibold],
                "space-bold": [typography.fonts.accent.bold],
            },
            fontSize: typography.sizes,
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "bounce-slow": "bounce 2s infinite",
            },
        },
    },
    plugins: [],
};
