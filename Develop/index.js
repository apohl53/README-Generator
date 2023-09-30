// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a description of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please write a description of your project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "GNU"],
      default: ["MIT"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please write the steps required to install your project!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this app?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a usage description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function init() {
  questions()
    .then((data) => {
      const readmeData = generateReadme(data); // Replace with your own function to generate the README content
      writeToFile("README.md", readmeData);
    })
    .catch((err) => {
      console.error(err);
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((data) => {
      const readmeData = generateMarkdown(data);
      writeToFile("README.md", readmeData);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
