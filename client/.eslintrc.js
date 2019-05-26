module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['standard', 'standard-preact'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'only-multiline'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
