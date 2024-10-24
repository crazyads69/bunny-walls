module.exports = {
  extends: [
    "expo",
    "prettier",
    "universe",
    "universe/shared/typescript-analysis",
  ],
  plugins: ["prettier", "prettier-plugin-tailwindcss"],
  rules: {
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
