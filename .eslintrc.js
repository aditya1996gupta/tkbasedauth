module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console" :"off",
    "vue/max-attributes-per-line": ["error", {
    "singleline": 4,
    "multiline": {
      "max": 1,
      "allowFirstLine": false
    }
  }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
