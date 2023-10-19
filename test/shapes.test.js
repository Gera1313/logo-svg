// Testing shape classes here

const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

test('Circle render() method should return the correct SVG string', () => {
    // Test code for Circle class
    const circle = new Circle('red', 50);

    const result = circle.render();

    expect(result).toContain('<circle');
    expect(result).toContain('fill="red"');
    expect(result).toContain('r="50"');
  });
  
  test('Triangle render() method should return the correct SVG string', () => {
    // Test code for Triangle class
    const someColor = 'blue';

    const triangle = new Triangle(someColor, 50, 'SampleText', 'red');

    const result = triangle.render();

    expect(result).toContain('<polygon');
    expect(result).toContain(`fill="${someColor}"`);
    expect(result).toContain(`fill="red"`);

  });
  
  test('Square render() method should return the correct SVG string', () => {
    // Test code for Square class
  });
  
