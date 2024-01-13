// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require("./shape");

class Square extends Shape {
  constructor(color, sideLength, text, textColor) {
    // added text, textColor
    super(color);
    this.sideLength = sideLength;
    this.text = text; // added this
    this.textColor = textColor; // added this
  }

  render() {
    // Might not work. If it doesn't, check back here.
    const width = 300;
    const height = 200;

    const squareX = 133; // X-coordinate for the square
    const squareY = 60; // Y-coordinate for the square

    const textX = 150; // X-coordinate for the text
    const textY = 100; // Y-coordinate for the text

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect x="${squareX}" y="${squareY}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
        <text x="${textX}" y="${textY}" fill="${this.textColor}" font-size="20">${this.text}</text>
    </svg>`;
  }
}

module.exports = Square; //Exports Square class for index.js file.
