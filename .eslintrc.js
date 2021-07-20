module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['prettier', 'react', 'jsx-a11y'],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-props-no-spreading': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': ['off'],
    'react/prop-types': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': ['off'],
    'valid-jsdoc': ['error'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    react: {
      version: '^16.12.0',
    },
    'import/resolver': {
      alias: {
        map: [['src/pages', '.src/pages', 'src/components', '.src/components']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
