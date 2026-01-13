abstract class Animals {
  abstract makeSound(): void;

  move(): void {
    console.log('Moving...');
  }
}

class Dogs extends Animals {
  makeSound(): void {
    console.log('Bark');
  }
}

const myDoggy = new Dogs();
myDoggy.makeSound(); // Bark
myDoggy.move();   // Moving