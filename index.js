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

// Function to run the application
async function run() {
    try {
        const userInput = await getUserInput();

        let shape;

        if (userInput.shape === 'Circle') {
            shape = new Circle(userInput.shapeColor, 50); // may have to change 50
        } else if (userInput.shape === 'Triangle') {
            shape = new Triangle(userInput.shapeColor, 50); // may have to change 50
        } else if (userInput.shape === 'Square') {
            shape = new Square(userInput.shapeColor, 50); // may have to change 50
        }

        // render
    const svg = shape.render();

    // saves the SVG to a file
    fs.writeFileSync('./examples/logo.svg', svg);

    // prints feedback for user if successful or not
    console.log('Success! A file has been generated!');
    } catch (error) {
        console.error('Error has occurred:', error);
    }
}

// Run it
run();