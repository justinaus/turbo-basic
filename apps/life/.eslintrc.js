module.exports = {
  extends: ['custom/next', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  settings: {
    next: {
      rootDir: 'apps/life/',
    },
  },
};
