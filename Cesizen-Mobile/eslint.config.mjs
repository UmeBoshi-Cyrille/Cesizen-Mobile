import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...global.node,
        AudioWorkletGlobalScope: "readonly"
      }
    }
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  {
    files: ["karma.conf.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Allow require()
      "no-undef": "off" // Skip undefined checks for Node.js globals
    }
  }
]);
