const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

// Define a function to collect user input
async function getUserInput() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for shape color:',
    },
  ]);

  return userInput;
}

// Define a function to run the application
async function run() {
  try {
    const userInput = await getUserInput();

    let shape;

    // Create the appropriate shape instance based on the user's choice
    if (userInput.shape === 'Circle') {
      shape = new Circle(userInput.shapeColor, 50); // You may need to adjust the radius
    } else if (userInput.shape === 'Triangle') {
      shape = new Triangle(userInput.shapeColor, 60); // You may need to adjust the side length
    } else if (userInput.shape === 'Square') {
      shape = new Square(userInput.shapeColor, 70); // You may need to adjust the side length
    }

    // Render the shape to get the SVG string
    const svg = shape.render();

    // Save the SVG to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the application
run();
