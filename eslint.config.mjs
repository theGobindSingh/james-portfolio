import config from '@kami-ui/eslint-config/next';

export default [
  ...config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@eslint-react/no-forward-ref': 'off',
    },
  },
];
