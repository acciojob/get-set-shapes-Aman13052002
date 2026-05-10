// Rectangle class
class Rectangle {
  constructor(width, height) {
    // Use different internal property names
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class inherits from Rectangle
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Make classes available globally for Cypress tests
window.Rectangle = Rectangle;
window.Square = Square;
