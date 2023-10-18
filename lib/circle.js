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
        const width = 300;
        const height = 200;

        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <circle cx="${width / 2}" cy="${height / 2}" r="${this.radius}" fill="${this.color}" />
        <text x="50" y="180" fill="${this.textColor}" font-size="20">${this.text}</text>
      </svg>`;
    }
}

module.exports = Circle; //Exports Circle class for index.js file later.