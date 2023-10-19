// Testing shape classes here

const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

// Test code for Circle class
test('Circle render() method should return the correct SVG string', () => {
    const circle = new Circle('red', 50);

    const result = circle.render();

    expect(result).toContain('<circle');
    expect(result).toContain('fill="red"');
    expect(result).toContain('r="50"');
  });
  
  // Test code for Triangle class
  test('Triangle render() method should return the correct SVG string', () => {
    const someColor = 'blue';

    const triangle = new Triangle(someColor, 50, 'SampleText', 'red');

    const result = triangle.render();

    expect(result).toContain('<polygon');
    expect(result).toContain(`fill="${someColor}"`);
    expect(result).toContain(`fill="red"`);

  });
  
  // Test code for Square class
  test('Square render() method should return the correct SVG string', () => {
    const someColor = 'yellow';

    const square = new Square(someColor, 50, 'SampleText', 'green');

    const result = square.render();

    expect(result).toContain('<rect');
    expect(result).toContain(`fill="${someColor}"`);
    expect(result).toContain(`fill="green"`);
  });
  
