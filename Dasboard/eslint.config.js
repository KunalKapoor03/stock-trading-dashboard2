import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx}"],

    extends: [
      js.configs.recommended,

      // Google style rules
      "google",

      // React rules
      react.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,

      // Turn off formatting rules that Prettier will handle
      "prettier",
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // Google style tweaks (common + sane)
      "require-jsdoc": "off",
      "valid-jsdoc": "off",

      // Allow unused vars starting with _
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      // React 17+ (no need to import React)
      "react/react-in-jsx-scope": "off",
    },
  },
]);
