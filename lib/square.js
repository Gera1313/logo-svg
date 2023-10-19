// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Square extends Shape {
    constructor(color, sideLength, text, textColor) { // added text, textColor
        super(color);
        this.sideLength = sideLength;
        this.text = text; // added this
        this.textColor = textColor; // added this
    }

    render() {
        // Might not work. If it doesn't, check back here. 
        const width = 300;
        const height = 200;

        const rectX = (width - this.sideLength) / 2; // added this
        const rectY = (height - this.sideLength) / 2; // added this

        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect x="${rectX}" y="${rectY}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
        <text x="${width / 2}" y="${height / 2}" fill="${this.textColor}" font-size="20">${this.text}</text>
    </svg>`;
    }
}

module.exports = Square; //Exports Square class for index.js file.