// This is where I will define the PARENT Shape class.

class Shape {
  constructor(color, text, textColor) {
    // added text, textColor
    this.color = color;
    this.text = text; // added this
    this.textColor = textColor; // added this
  }

  render() {
    // feel like something goes here. Not sure yet.
  }
}

module.exports = Shape;
