const moduleActions = require("../actions/module");
const componentActions = require("../actions/component");

module.exports = {
  generatorName: "generate:page",
  config: {
    description: "Generate a page and its associated module",
    prompts: [
      {
        type: "list",
        name: "pageType",
        message: "What type of page is it ?",
        choices: ["static", "ssr"],
      },
      {
        type: "input",
        name: "pageName",
        message: "Page name ? ",
      },
    ],
    actions: (data) => {
      data.moduleName = data.pageName;
      data.componentName = data.pageName;
      return [
        {
          type: "add",
          path: `pages/{{dashCase pageName}}.tsx`,
          templateFile: "plop/templates/page/{{pageType}}.hbs",
        },
        ...moduleActions,
        ...componentActions,
      ];
    },
  },
};
