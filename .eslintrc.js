module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'handlebarlabs',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
    'react/require-default-props': 0,
    'import/extensions': 0,
    semi: 'off',
    '@typescript-eslint/semi': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  globals: {
    __DEV__: 'readonly',
  },
  plugins: [],
};
