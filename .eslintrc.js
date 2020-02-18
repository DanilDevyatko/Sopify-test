module.exports = {
  env: {
    browser: true,
    // jest: true,
    es6: true,
    node: true
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        trailingComma: "none"
      }
    ]
  },
  parserOptions: {
    ecmaFeatures: {
      // jsx: true
    }
  }
};
