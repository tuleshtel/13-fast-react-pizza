import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import { ESLint } from "eslint";

export default defineConfig([
  globalIgnores(["dist", ".eslint.config.js", "node_modules", "build"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      ESLint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "no-console": "warn",
      "no-unescaped-entities": "on",
      "unused-imports/no-unused-imports": "error",
      "no-undef": "error",
    },
  },
]);
