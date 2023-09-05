module.exports = {
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    // 禁止在变量或函数声明之前使用它们
    "no-use-before-define": "off",
    // 检查代码中未使用的变量
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    // 检查函数括号前是否需要空格
    "space-before-function-paren": "off",
  },
};
