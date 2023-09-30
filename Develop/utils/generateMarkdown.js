// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "GNU GPLv3":
      return "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.`;
  } else {
    return "";
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
