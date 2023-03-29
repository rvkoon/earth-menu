const fs = require("fs");
const files = fs.readdirSync("src/modules/");
const componentAcions = require("../actions/component");

module.exports = {
  generatorName: "generate:component",
  config: {
    description:
      "Generate a UI component with its associates test folder and file",
    prompts: [
      {
        type: "list",
        name: "moduleName",
        message: "This component belongs to : ",
        choices: files,
      },
      {
        type: "input",
        name: "componentName",
        message: "Component name ? ",
      },
    ],
    actions: componentAcions,
  },
};
