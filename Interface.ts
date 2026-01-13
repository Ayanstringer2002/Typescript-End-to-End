/*

class ClassName implements InterfaceName {
  // Class properties and methods
}

In TypeScript, interfaces define the structure that classes must adhere to,
ensuring consistent object shapes and facilitating type-checking.

*/

interface Shape {
  calculateArea(): number;
}

interface Color {
  color: string;
}

class Circle implements Shape, Color {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5, 'red');
console.log(`Color: ${circle.color}`);
console.log(`Area: ${circle.calculateArea()}`);