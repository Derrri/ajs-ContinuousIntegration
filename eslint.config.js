const { ESLint } = require("eslint");

const eslint = new ESLint();

module.exports = [
  {
    languageOptions: {
      globals: {
        "jest": true,
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {},
    ignores: [
      'coverage/', // Игнорирование директории coverage   
    ],
  },
];