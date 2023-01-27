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
    // "functional/prefer-immutable-types": ["error", { enforcement: "Readonly", variables: { ignoreInFunctions: true } }],
    "functional/prefer-immutable-types": [
      "error",
      {
        enforcement: "ReadonlyShallow",
        ignoreInferredTypes: true,
        variables: { ignoreInFunctions: true },
        parameters: { ignoreInferredTypes: true },
        returnTypes: { ignoreInferredTypes: true },
      },
    ],
    // "functional/type-declaration-immutability": [
    //   "error",
    //   {
    //     rules: [{ identifiers: "^(?!I?Mutable).+", immutability: "ReadonlyShallow" }],
    //     fixer: [
    //       { pattern: "^(Array|Map|Set)<(.+)>$", replace: "Readonly$1<$2>" },
    //       { pattern: "^(.+)$", replace: "Readonly<$1>" },
    //     ],
    //   },
    // ],
    "functional/type-declaration-immutability": [
      "error",
      {
        rules: [
          {
            identifiers: "^(?!I?Mutable).+",
            immutability: "ReadonlyShallow",
            fixer: [
              { pattern: "^(Array|Map|Set)<(.+)>$", replace: "Readonly$1<$2>" },
              { pattern: "^(.+)$", replace: "Readonly<$1>" },
            ],
          },
        ],
      },
    ],
    "functional/readonly-type": ["error", "keyword"],
  },
};
