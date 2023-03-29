const moduleActions = require("../actions/module");

module.exports = {
  generatorName: "generate:module",
  config: {
    description: "Generate a module with its subfolders",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "Module name ? ",
      },
    ],
    actions: moduleActions,
  },
};
