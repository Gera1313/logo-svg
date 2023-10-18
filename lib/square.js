// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        // Something goes here. Will Google it in a bit.
    }
}

module.exports = Square; //Exports Square class for index.js file.