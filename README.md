# jtyk 项目配置

## 使用

```bash
npm install eslint-config-jtyk --save-dev
# package.json
extends: ["eslint-config-jtyk/vue3"]
```

## 大概思路

与普通项目的eslint配置一致，可以将配置细分为base、vue、react、typescript等等，然后根据项目进行配置，放到根目录下，比如vue3，使用时直接写在extend中即可

## 开发注意

- extend、plugin的区别？
- 插件放在package.json哪里？
- 如何判断插件是生产环境还是开发环境所需
  - 查看插件的文档和说明：很多插件会在其官方文档或说明中明确标注是用于生产环境还是开发环境。
  - 观察插件的使用场景：如果插件主要用于自动化测试、代码风格检查、调试等与开发过程相关的功能，那么它很可能是开发环境所需。如果插件主要用于优化代码性能、构建应用程序等与生产部署相关的功能，那么它很可能是生产环境所需。
  - 根据项目的实际需求：根据项目的具体情况和实际需求来判断插件是生产环境还是开发环境所需。例如，如果项目是一个Web应用程序，需要在生产环境中提供更好的性能和稳定性，那么可能需要安装一些生产环境所需的插件

## 学习

### vue

#### 需要安装插件

- eslint：主要的eslint核心模块。
- eslint-plugin-vue：Vue文件专属的Eslint插件，用于对.vue文件进行语法检查和风格规范。
  - [eslint-config-vue 插件规则](https://eslint.vuejs.org/rules/)
- vue-eslint-parser: 一个基于ESLint的插件，用于解析Vue文件并实现对其的ESLint语法检测。它依赖于@babel/eslint-parser来解析Vue文件，因为@babel/eslint-parser能够解析最新的ECMAScript标准，并且支持Babel提供的实验性功能和非标准语法
- @babel/core: @babel/eslint-parser依赖的
  <!-- - eslint-config-standard：一个符合JS编码规范的eslint配置。 -->
  <!-- - eslint-friendly-formatter：一种友好的Eslint输出格式化工具，使得Eslint的检查结果更易于理解和修改。 -->
