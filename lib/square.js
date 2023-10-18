// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        // Might not work. If it doesn't, check back here. 
        return `<svg><rect x="${50 - this.sideLength / 2}" y="10" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" /></svg>`;
    }
}

module.exports = Square; //Exports Square class for index.js file.