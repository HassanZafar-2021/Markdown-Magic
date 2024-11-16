import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown";

const questions = [
  "What is your project title?",
  "What is your project description?",
  "What are the installation instructions?",
  "What is the usage information?",
  "Did you have any collaborators on this project?",
  "List collaborators and their github links",
  "What license did you use for this project?",
  "What badges would you like to include?",
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("File created successfully!");
  });
}

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
        when: (answers) => answers.collaborators,
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
      const markdownContent = generateMarkdown(response);
      writeToFile("README.md", markdownContent);
    });
}

init();
