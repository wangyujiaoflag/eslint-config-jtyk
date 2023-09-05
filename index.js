module.exports = {
  root: true,
  extends: ["./rules/base"].map(require.resolve),
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
