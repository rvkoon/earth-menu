const Plop = require("./plop");

module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  Plop.generators.forEach((generator) => {
    plop.setGenerator(generator.generatorName, generator.config);
  });
};
