// This is where I will define the Circle CHILD class that inherit from the Shape class.
// Import the parent Shape class

const Shape = require("./shape");

class Circle extends Shape {
  constructor(color, radius, text, textColor) {
    super(color);
    this.radius = radius;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    // This might not work. Check back here if it doesn't.
    const width = 300;
    const height = 200;

    const circleX = width / 2; // X-coordinate for the center of the circle
    const circleY = height / 2; // Y-coordinate for the center of the circle

    const textX = 130; // X-coordinate for the text
    const textY = 108; // Y-coordinate for the text

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <circle cx="${circleX}" cy="${circleY}" r="${this.radius}" fill="${this.color}" />
        <text x="${textX}" y="${textY}" fill="${this.textColor}" font-size="20">${this.text}</text>
    </svg>`;
  }
}

module.exports = Circle; //Exports Circle class for index.js file later.
