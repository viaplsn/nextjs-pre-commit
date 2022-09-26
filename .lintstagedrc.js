const path = require("path");

const buildTypescriptCommand = () => `tsc --noEmit`;

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `yarn prettier --write ${filenames.join(" ")}`;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [
    buildTypescriptCommand,
    buildEslintCommand,
    buildPrettierCommand,
  ],
};
