import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import jasminePlugin from "eslint-plugin-jasmine";


export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.spec.ts"],
    plugins: {
      jasmine: jasminePlugin
    },
    languageOptions: {
      globals: {
        ...globals.jasmine,
        ...globals.node
      }
    },
    rules: {
      "jasmine/no-focused-tests": "error",
      "jasmine/no-suite-dupes": ["error", "branch"]
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        AudioWorkletGlobalScope: "readonly"
      }
    }
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  {
    files: ["karma.conf.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Allow require()
      "no-undef": "off", // Skip undefined checks for Node.js globals
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
]);
