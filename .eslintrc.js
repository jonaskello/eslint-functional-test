// module.exports = {
//   extends: "divid",
//   parserOptions: {
//     project: "./packages/tsconfig.settings.json",
//   },
//   ignorePatterns: [
//     "packages/server/performance-service/src/oas-generated/**/*",
//     "packages/server/client-gateway/src/oas-generated/**/*",
//   ],
//   rules: {
//     "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "_[iI]gnored" }],
//     "no-console": "error",
//     "require-yield": 0,
//     "max-lines": ["error", 2000],
//     // Should be fixed in eslint-config-divid:
//     // Enable these rules once code is fixed (or perhaps disable in eslint-config-divid):
//     "@typescript-eslint/naming-convention": "off",
//     "@typescript-eslint/consistent-type-imports": "off",
//     "@typescript-eslint/no-shadow": "off",
//     "@typescript-eslint/no-unnecessary-condition": "off",
//     "@typescript-eslint/prefer-nullish-coalescing": "off",
//     "@typescript-eslint/prefer-readonly-parameter-types": "off",
//     "@typescript-eslint/no-unsafe-return": "off",
//     "@typescript-eslint/prefer-optional-chain": "off",
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//     "@typescript-eslint/no-redeclare": "off", // We want to name type same as const
//     "@typescript-eslint/ban-types": "off",
//     "@typescript-eslint/no-unsafe-member-access": "off",
//     "@typescript-eslint/dot-notation": "off",
//     "@typescript-eslint/no-unsafe-assignment": "off",
//     "@typescript-eslint/no-implicit-any-catch": "off",
//     "@typescript-eslint/init-declarations": "off",
//     "@typescript-eslint/restrict-template-expressions": "off",
//     "@typescript-eslint/no-unused-expressions": "off",
//     "@typescript-eslint/no-unsafe-call": "off",
//     // "no-param-reassign": ["error", { props: false }],
//   },
//   overrides: [
//     {
//       files: ["packages/**/*"],
//       excludedFiles: [
//         "packages/client/elements/**/*",
//         "packages/client/client/src/pages/unit-editor/parts/sketch/parts/3d/**/*",
//       ],
//       rules: {
//         "no-restricted-syntax": [
//           "error",
//           { selector: "CallExpression[callee.name='useState']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useEffect']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useContext']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useReducer']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useCallback']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useMemo']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useRef']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useImperativeHandle']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useLayoutEffect']", message: "Perfer TEA over hooks." },
//           { selector: "CallExpression[callee.name='useDebugValue']", message: "Perfer TEA over hooks." },
//         ],
//       },
//     },
//   ],
// };

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
