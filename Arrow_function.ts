// Also called Lambda function

// (param1, param2, ..., paramN) => expression; 

class Calculatoring {
    add = (a: number, b: number): number => a + b;
}

const calc = new Calculatoring();
console.log(calc.add(5, 3));