// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
      name: "install",
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

//Project Title
//Description
//Installation
//Usage
//Contributing
//Tests
//License
//Github username
//Email address

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
