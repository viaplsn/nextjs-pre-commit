const path = require("path");

const buildTypescriptCommand = () => `npm run tsc`;

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = () => `npm run prettier`;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [
    buildTypescriptCommand,
    buildEslintCommand,
    buildPrettierCommand,
  ],
};
