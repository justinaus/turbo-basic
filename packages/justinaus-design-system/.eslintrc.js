module.exports = {
  extends: ['custom/react-internal'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
