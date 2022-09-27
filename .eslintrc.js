const config = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint','eslint-plugin-import-helpers','prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          '/^react/',
          'module',
          '/^shared/',
          '/^screens/',
          '/^components/',
          '/^services/',
          '/^store/',
          '/^hooks/',
          '/^helpers/',
          '/^utils/',
          '/^constants/',
          '/^theme/',
          '/^styled-components/',
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ]
  },
};


module.exports = config
