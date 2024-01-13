// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color, sideLength, text, textColor) {
    // added text, textColor
    super(color);
    this.sideLength = sideLength;
    this.text = text; // added this
    this.textColor = textColor; // added this
  }

  render() {
    // This might not work. Check back here if it doesn't.
    const width = 300;
    const height = 200;

    const triangleX = width / 2; // X-coordinate for the center of the triangle
    const triangleY = height / 2; // Y-coordinate for the center of the triangle

    const textX = 134; // X-coordinate for the text
    const textY = 125; // Y-coordinate for the text

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <polygon points="${triangleX - this.sideLength / 2},${
      triangleY + this.sideLength / 2
    } ${triangleX},${triangleY - this.sideLength / 2} ${
      triangleX + this.sideLength / 2
    },${triangleY + this.sideLength / 2}" fill="${this.color}" />
        <text x="${textX}" y="${textY}" fill="${
      this.textColor
    }" font-size="20">${this.text}</text>
    </svg>`;
  }
}

module.exports = Triangle; //Exports Triangle class for index.js file.
