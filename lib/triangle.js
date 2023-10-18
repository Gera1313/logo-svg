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
        const halfSide = this.sideLength / 2;
        return `<svg><polygon points="50,10 ${50 - halfSide},90 ${50 + halfSide},90" fill="${this.color}" /></svg>`; 
    }
}

module.exports = Triangle; //Exports Triangle class for index.js file.
