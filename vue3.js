module.exports = {
  extends: ["./index", "./rules/typescript", "./rules/vue3"].map(
    require.resolve
  ),
};
