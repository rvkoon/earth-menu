const moduleGenerator = require("./generators/module.js");
const componentGenerator = require("./generators/component.js");
const pageGenerator = require("./generators/page.js");

module.exports = {
  generators: [moduleGenerator, componentGenerator, pageGenerator],
};
