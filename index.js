// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for this project.',
        choices: ['MIT', 'Mozilla', 'GNU', 'BSD', 'ISC', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'about',
        message: 'Enter a description of the project.',
    },
    {
        type: 'input',
        name: 'use',
        message: 'Enter an explanation of the projects use case.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions for the project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter contact email for the projects author.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github username for the projects author.',
    },
    {
        type: 'input',
        name: 'outputName',
        message: 'Enter output file name.',
    },
];

function input() {

    return inquirer.prompt(questions);

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.error(err) : console.log(`${fileName}.md has been successfully generated.`))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile((answers.outputName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
