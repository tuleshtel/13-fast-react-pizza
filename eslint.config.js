import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import reactPlugin from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(["dist", ".eslint.config.js", "node_modules", "build"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      reactPlugin.configs.flat["jsx-runtime"],
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
    // allow eslint-plugin-react to detect React version automatically
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "no-console": "warn",
    },
  },
  // route/action-specific overrides: allow framework exports like `action`, `loader`, `handle`
  {
    rules: {
      "no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^(action|loader|handle)$|^[A-Z_]" },
      ],
      // these route files export an `action` function and may use console for debugging
      "react-refresh/only-export-components": "off",
      "no-console": "off",
    },
  },
]);
