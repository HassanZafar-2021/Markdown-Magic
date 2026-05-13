import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.error("Error writing file:", err);
    else console.log(`✅ README.md created successfully!`);
  });
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Project title:",
        validate: (input) => input.trim() !== "" || "Title cannot be empty.",
      },
      {
        type: "input",
        name: "description",
        message: "Project description:",
        validate: (input) => input.trim() !== "" || "Description cannot be empty.",
      },
      {
        type: "input",
        name: "installation",
        message: "Installation instructions:",
        default: "Run `npm install` to install dependencies.",
      },
      {
        type: "input",
        name: "usage",
        message: "Usage information:",
        validate: (input) => input.trim() !== "" || "Usage cannot be empty.",
      },
      {
        type: "confirm",
        name: "collaborators",
        message: "Did you have collaborators on this project?",
        default: false,
      },
      {
        type: "input",
        name: "collaboratorsList",
        message: 'List collaborators as "Name: URL", separated by commas:',
        when: (answers) => answers.collaborators,
        validate: (input) => input.trim() !== "" || "Please enter at least one collaborator.",
      },
      {
        type: "list",
        name: "license",
        message: "Which license applies to this project?",
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "None"],
      },
      {
        type: "input",
        name: "contributing",
        message: "Contribution guidelines:",
        default: "Contributions are welcome! Please open a pull request.",
      },
      {
        type: "input",
        name: "tests",
        message: "Test instructions:",
        default: "Run `npm test` to execute tests.",
      },
      {
        type: "input",
        name: "username",
        message: "Your GitHub username:",
        validate: (input) => input.trim() !== "" || "GitHub username cannot be empty.",
      },
      {
        type: "input",
        name: "email",
        message: "Your email address:",
        validate: (input) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) || "Please enter a valid email address.",
      },
    ])
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile("README.md", markdownContent);
    })
    .catch((err) => console.error("Something went wrong:", err));
}

init();