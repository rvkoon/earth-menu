module.exports = [
  {
    type: "add",
    path: `src/modules/{{moduleName}}/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx`,
    templateFile: "plop/templates/component/component.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.tsx`,
    templateFile: "plop/templates/component/test.hbs",
  },
  {
    type: "add",
    path: `src/modules/{{moduleName}}/components/{{pascalCase componentName}}/index.ts`,
    templateFile: "plop/templates/component/index.hbs",
  },
  {
    type: "append",
    path: "src/modules/{{moduleName}}/components/index.ts",
    pattern: /[;]/,
    template: "\nexport * from './{{pascalCase componentName}}';",
  },
];
