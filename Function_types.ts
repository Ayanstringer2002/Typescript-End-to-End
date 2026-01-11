function added(a: number, b: number): number {
    return a + b;
}

console.log(added(3, 4));

// Anonymous function
const subtract = function(a: number, b: number): number {
    return a - b;
}

console.log(subtract(5, 2));

// Arrow Functions 
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 5));

//Default Parameters
function greeted(firstName: string, lastName: string = "Doe"): string {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greeted("John"));
console.log(greeted("Joe", "Smith"));

// Rest Parameters
// function functionName(...args: type): type { }
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
