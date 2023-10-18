// This is where I will define the child classes that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Triangle extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        // Something goes here. Figure it out later. 
    }
}

module.exports = Triangle; //Exports Triangle class for index.js file.
