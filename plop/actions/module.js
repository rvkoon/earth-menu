module.exports = [
  {
    type: "add",
    path: `src/modules/{{moduleName}}/index.ts`,
    templateFile: "plop/templates/module/moduleIndex.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/components/index.ts`,
    templateFile: "plop/templates/common/defaultComponentsIndex.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/helpers/index.ts`,
    templateFile: "plop/templates/common/defaultHelpersIndex.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/services/index.ts`,
    templateFile: "plop/templates/common/defaultServicesIndex.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/hooks/index.ts`,
    templateFile: "plop/templates/common/defaultHooksIndex.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/types.ts`,
    templateFile: "plop/templates/common/defaultTypes.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/constants.ts`,
    templateFile: "plop/templates/common/defaultConstants.hbs",
  },
  {
    type: "modify",
    path: "tsconfig.json",
    pattern: /\/\*PlopSlot\*\//,
    template: `"@{{pascalCase moduleName}}": ["src/modules/{{moduleName}}"],\n/*PlopSlot*/`,
  },
  {
    type: "modify",
    path: "jest.config.js",
    pattern: /\/\*PlopSlot\*\//,
    template: `"^@{{pascalCase moduleName}}$": "src/modules/{{moduleName}}",\n/*PlopSlot*/`,
  },
];
