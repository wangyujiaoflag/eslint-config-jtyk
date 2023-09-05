/**
 * 本文件的规则由 @typescript-eslint/eslint-plugin 提供，使用 @typescript-eslint/parser 作为 parser
 * 需要将 @typescript-eslint/eslint-plugin 和 @typescript-eslint/parser 安装为项目依赖
 */

module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 禁用// @ts-ignore注释
    "@typescript-eslint/ban-ts-ignore": "off",
    // 禁用明确函数返回类型
    "@typescript-eslint/explicit-function-return-type": "off",
    // 禁用明确的any类型
    "@typescript-eslint/no-explicit-any": "off",
    // 禁用模块的显式var声明。这表示应该直接使用require或import而不是使用var声明变量
    "@typescript-eslint/no-var-requires": "off",
    // 禁用空函数
    "@typescript-eslint/no-empty-function": "off",
    // 禁用在定义之前使用变量或函数
    "@typescript-eslint/no-use-before-define": "off",
    // 禁用// @ts-nocheck注释。这个注释用于告诉TypeScript编译器忽略某些错误，但通常应该避免使用，而是尝试解决错误
    "@typescript-eslint/ban-ts-comment": "off",
    // 禁用某些特定的类型，这可能会导致类型不安全的情况，因此通常应该避免使用
    "@typescript-eslint/ban-types": "off",
    // 禁用非空断言操作符!
    "@typescript-eslint/no-non-null-assertion": "off",
    // 禁用明确模块边界类型。这意味着你可以在模块内部使用非公共类型，而不需要明确地将其声明为模块的导出
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // 关于未使用的变量的规则
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
