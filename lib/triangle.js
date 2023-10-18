// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Triangle extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        // This might not work. Check back here if it doesn't. 
        const width = 300;
        const height = 200;

        const halfWidth = width / 2;
        const halfHeight = height / 2;

        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><polygon points="${halfWidth},${halfHeight - this.sideLength} ${halfWidth - this.sideLength},${halfHeight + this.sideLength} ${halfWidth + this.sideLength},${halfHeight + this.sideLength}" fill="${this.color}" /></svg>`; 
    }
}

module.exports = Triangle; //Exports Triangle class for index.js file.
