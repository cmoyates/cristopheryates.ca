// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

// Use typescript-eslint's helper to compose flat configs (recommended by the project).
// It plays nicely with ESLint v9 typing and avoids defineConfig type friction.
export default tseslint.config(
  // Core JS rules
  eslint.configs.recommended,

  // TypeScript rules (no type info)
  ...tseslint.configs.recommendedTypeChecked,

  // Astro rules for .astro files
  ...astro.configs.recommended,

  // Disable rules that conflict with Prettier
  eslintConfigPrettier,

  // Repo-wide ignores
  { ignores: ["dist", "build", ".astro"] },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
