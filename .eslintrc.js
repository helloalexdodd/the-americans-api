module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['prettier', 'no-loops'],
  rules: {
    'prettier/prettier': ['error'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['middleware', './src/lib/middleware'],
          ['controllers', './src/lib/contollers'],
          ['models', './src/lib/models'],
          ['routes', './src/lib/routes'],
          ['services', './src/lib/services'],
        ],
      },
    },
  },
};
