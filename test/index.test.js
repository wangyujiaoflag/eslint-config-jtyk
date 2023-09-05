const assert = require("assert");
const eslint = require("eslint");
const path = require("path");
const sumBy = require("lodash/sumBy");
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

it("Validate eslint-config-jtyk/vue3", async () => {
  const configPath = `${path.dirname(__dirname)}/vue3.js`;
  const filePath = path.join(__dirname, "./ts-vue.vue");

  const cli = new eslint.ESLint({
    overrideConfigFile: configPath,
    useEslintrc: false,
    ignore: false,
  });

  // 验证导出的 config 是否正常
  const config = await cli.calculateConfigForFile(filePath);
  assert.ok(isObject(config));

  // 验证 lint 工作是否正常
  const results = await cli.lintFiles([filePath]);
  // console.log(results, "results");
  assert.equal(sumBy(results, "fatalErrorCount"), 0);
  assert.equal(sumBy(results, "warningCount"), 0);
  assert.notEqual(sumBy(results, "errorCount"), 0);

  // 验证 eslint-plugin-vue 及 @typescript-eslint 工作是否正常
  const { messages } = results[0];
  const errorReportedByTSPlugin = messages.filter((result) => {
    return result.ruleId && result.ruleId.indexOf("@typescript-eslint/") !== -1;
  });
  console.log(errorReportedByTSPlugin, "errorReportedByTSPlugin");
  assert.notEqual(errorReportedByTSPlugin.length, 0);
});
