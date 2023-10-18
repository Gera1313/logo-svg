// This is where I will define the Circle CHILD class that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    render() {
        // something goes here
    }
}

module.exports = Circle; //Exports Circle class