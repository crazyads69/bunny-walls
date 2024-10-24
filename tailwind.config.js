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
                mont: typography.fonts.primary,
                pops: typography.fonts.secondary,
                space: typography.fonts.accent,
            },
            fontSize: typography.sizes,
        },
    },
    plugins: [],
};
