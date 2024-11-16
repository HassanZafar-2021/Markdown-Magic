// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
  "What is your project title?",
  "What is your project description?",
  "What are the installation instructions?",
  "What is the usage information?",
  "Did you have any collaborators on this project?",
  "List collaborators and thier github links",
  "What license did you use for this project?",
  "What badges would you like to include?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("File created successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "confirm",
        message: questions[4],
        name: "collaborators",
        default: false,
      },
      {
        type: "input",
        message: questions[5],
        name: "collaboratorsList",
      },
      {
        type: "list",
        message: questions[6],
        name: "license",
        choices: ["MIT", "Apache", "GPL", "None"],
      },
      {
        type: "input",
        message: questions[7],
        name: "username",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ])
    .then((response) => {
      const markdownContent = `# ${response.title}

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Tests
${response.test}

## License
This project is licensed under the ${response.license} license.

## Questions
If you have any questions, please contact me at ${response.email}. You can also find more of my work at [${response.username}](https://github.com/${response.username}).`;

      writeToFile("README.md", markdownContent);
    });
}

// Function call to initialize app
init();
