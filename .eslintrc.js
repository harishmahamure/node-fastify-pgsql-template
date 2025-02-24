module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "prettier", "import", "unused-imports"],
    rules: {
      "prettier/prettier": "error", // Ensures Prettier formatting
      "no-console": "warn", // Warns on console.logs
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "unused-imports/no-unused-imports": "error", // Remove unused imports
      "@typescript-eslint/no-explicit-any": "warn", // Warn against using "any"
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  };
  