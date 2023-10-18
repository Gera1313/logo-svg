// This is where I will define the Circle CHILD class that inherit from the Shape class.
// Import the parent Shape class

const Shape = require('./shape');

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    render() {
        // This might not work. Check back here if it doesn't. 
        return `<svg><circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" /></svg>`;
    }
}

module.exports = Circle; //Exports Circle class for index.js file later.