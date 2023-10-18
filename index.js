 // First, some connections

const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// Here I will collect user input using inquirer.
async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for your logo:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the shape for your logo:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape color:',
        },
    ]);

    return userInput;
}