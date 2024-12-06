// module.exports = {
//   parser: "@babel/eslint-parser",
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//     requireConfigFile: false,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:import/errors",
//     "plugin:import/warnings",
//     "plugin:import/typescript",
//   ],
//   plugins: ["react", "import"],
//   rules: {
//     "import/no-unresolved": "warn", // Instead of "error", it will display only a warning
//     "react/prop-types": "off", // Disables PropTypes validation
//     "react/react-in-jsx-scope": "off", // Not needed for newer versions of React
//     "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Warning instead of an error
//     "no-console": "warn", // Warning for using console.log
//   },
//   settings: {
//     "import/resolver": {
//       node: {
//         paths: ["src"],
//       },
//     },
//     react: {
//       version: "detect",
//     },
//   },
//   ignorePatterns: ["node_modules/"],
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
// };

//npx eslint ./src --ext .js,.jsx
//npx eslint . --fix
