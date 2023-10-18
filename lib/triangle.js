// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Triangle extends Shape {
    constructor(color, sideLength, text, textColor) { // added text, textColor
        super(color);
        this.sideLength = sideLength;
        this.text = text; // added this
        this.textColor = textColor; // added this
    }

    render() {
        // This might not work. Check back here if it doesn't. 
        const width = 300;
        const height = 200;

        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const halfSideLength = this.sideLength / 2; // added this

        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><polygon points="${halfWidth},${halfHeight - halfSideLength} ${halfWidth - halfSideLength},${halfHeight + halfSideLength} ${halfWidth + halfSideLength},${halfHeight + halfSideLength}" fill="${this.color}" /><text x="50" y="180" fill="${this.textColor}" font-size="20">${this.text}</text></svg>`; 
    }
}

module.exports = Triangle; //Exports Triangle class for index.js file.
