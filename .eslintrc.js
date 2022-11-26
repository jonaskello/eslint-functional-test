module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["functional", "@typescript-eslint", "import"],
  rules: {
    // "functional/prefer-readonly-type": ["error", { allowLocalMutation: true, ignorePattern: "^[mM]utable" }],
    "functional/prefer-immutable-types": [
      "error",
      { enforcement: "ReadonlyDeep", variables: { ignoreInFunctions: true } },
    ],
  },
};
