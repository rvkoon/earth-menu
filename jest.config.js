// Do not remove PlopSlot, it is used by plop to add new paths

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@Api$": "src/api",
    "^@Tests$": "src/modules/tests",
    "^@Ui$": "src/modules/ui",
    "^@Home$": "src/modules/Home",
/*PlopSlot*/
  },
};

module.exports = createJestConfig(customJestConfig);
