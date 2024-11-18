function renderLicenseBadge(license) {
  // TODO: Add logic to render the license badge
  return !license || license === "None"
    ? ""
    : `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  // TODO: Add logic to render the license link
  return !license || license === "None"
    ? ""
    : `https://opensource.org/licenses/${license}`;
}

function renderLicenseSection(license) {
  // TODO: Add logic to render the license section
  return !license || license === "None"
    ? ""
    : `This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  // TODO: Generate markdown content based on the provided data
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data.tableOfContents ? data.tableOfContents : ""}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please open an issue or contact [${
    data.github
  }](https://github.com/${data.github}) directly at ${data.email}.
${renderLicenseBadge(data.license)}`;
}

export default generateMarkdown;
