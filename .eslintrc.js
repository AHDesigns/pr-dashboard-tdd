module.exports = {
  parser:  '@typescript-eslint/parser',
  parserOptions:  {
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  extends:  [
    'react-app',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules:  {
    'no-console': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'func-names': 'off',
    '@typescript-eslint/no-use-before-define': 0,
    'import/extensions': ['error', 'never', { json: 'always' }],
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
  ],
  env: {
    node: true,
    jest: true,
  },
};
