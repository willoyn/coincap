module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        '@react-native-community',
        'eslint:recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
          },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'global-require': 'off', // loading custom fonts for expo
        'react-native/no-inline-styles': 'off', // loading custom fonts for expo
      },
    },
  ],
}
