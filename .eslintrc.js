module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["import", "unused-imports"],
  rules: {
    "import/no-anonymous-default-export": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    "no-unused-vars": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_$",
        varsIgnorePattern: "^_$",
      },
    ],
  },
};
