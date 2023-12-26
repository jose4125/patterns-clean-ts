module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    'no-console': 1, // Means warning
    // 'prettier/prettier': 2, // Means error
    // 'unicorn/filename-case': [
    //   'error',
    //   {
    //     cases: {
    //       camelCase: true,
    //       pascalCase: true,
    //     },
    //     ignore: ['react-app-env.d.ts'],
    //   },
    // ],
    // 'unicorn/prevent-abbreviations': [
    //   'error',
    //   {
    //     ignore: ['react-app-env'],
    //   },
    // ],
  },
}