module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["react", "import"],
  rules: {
    "import/no-unresolved": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
