/**
 * 本文件的规则由 eslint-plugin-vue 提供，使用 vue-eslint-parser 作为 parser
 * 需要将 eslint-plugin-vue 和 vue-eslint-parser 安装为项目依赖
 */

module.exports = {
  extends: ["plugin:vue/vue3-recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // 检查HTML属性和事件监听器的顺序 v4.3.0
    "vue/attributes-order": "off",
    // 检查每个组件是否在单独的文件中 v7.0.0
    "vue/one-component-per-file": "off",
    // 检查HTML标签的闭合括号是否在新行上 v4.1.0
    "vue/html-closing-bracket-newline": "off",
    // 限制每行HTML属性的数量 v3.12.0
    "vue/max-attributes-per-line": "off",
    // 检查在多行HTML元素的内容中是否有多余的新行 v5.0.0
    "vue/multiline-html-element-content-newline": "off",
    // 检查组件名称是否符合规范 v7.20.0
    "vue/multi-word-component-names": "off",
    // 检查在一行HTML元素的内容中是否有多余的新行 v5.0.0
    "vue/singleline-html-element-content-newline": "off",
    // 检查HTML属性的连字符使用是否正确 v3.9.0
    "vue/attribute-hyphenation": "off",
    // 检查是否要求组件具有默认属性 v3.13.0
    "vue/require-default-prop": "off",
    // 检查HTML标签的自闭合方式是否正确 v3.11.0
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // void元素允许使用自闭和标签
          normal: "never",
          component: "always", // 自定义组件允许使用自闭和标签
        },
        svg: "always",
        math: "always",
      },
    ],

    // 检查自定义事件的命名是否符合规范 v7.0.0
    "vue/custom-event-name-casing": "off",
  },
};
