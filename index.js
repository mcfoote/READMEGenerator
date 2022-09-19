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
        choices: ['MIT', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'BSD 3-clause license', 'ISC', 'Apache license 2.0',]
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
