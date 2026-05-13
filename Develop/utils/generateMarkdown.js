function renderLicenseBadge(license) {
  if (!license || license === "None") return "";
  const encoded = encodeURIComponent(license);
  return `![License: ${license}](https://img.shields.io/badge/License-${encoded}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license || license === "None") return "";
  return `[${license} License](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  if (!license || license === "None") return "No license specified.";
  return `This project is licensed under the ${renderLicenseLink(license)}.`;
}

function renderCredits(data) {
  if (!data.collaborators || !data.collaboratorsList) return "No collaborators.";

  const lines = data.collaboratorsList
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      // Support "Name: https://github.com/..." or just a plain name
      const match = entry.match(/^(.+?):\s*(https?:\/\/.+)$/);
      if (match) return `- [${match[1].trim()}](${match[2].trim()})`;
      return `- ${entry}`;
    });

  return lines.join("\n");
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${renderCredits(data)}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, open an issue or contact [${data.username}](https://github.com/${data.username}) at ${data.email}.
`;
}

export default generateMarkdown;