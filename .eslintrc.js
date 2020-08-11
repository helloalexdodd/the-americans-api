module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: { ecmaVersion: 11 },
  plugins: ['prettier', 'no-loops'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': [2, { allow: ['_id'] }],
    'object-curly-newline': 'off',
    'consistent-return': 0,
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
