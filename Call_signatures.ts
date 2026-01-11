/* type MyCallableObject = {
    (parameter1: Type1, parameter2: Type2): ReturnType; 
    propertyName: PropertyType;
};
*/

type GreetingFunction = {
    (name: string): string; 
    description: string; 
};

const greet: GreetingFunction = (name: string) => {
    return `Hello, ${name}!`;
};

greet.description = "A function to greet users";

console.log(greet("Alice"));          
console.log(greet.description);

// Build Calculation
type Calculator = {
    (a: number, b: number): number; 
    operation: string;  
};

const add: Calculator = (a: number, b: number) => a + b;
add.operation = "Addition";

const multiply: Calculator = (a: number, b: number) => a * b;
multiply.operation = "Multiplication";

console.log(`${add.operation}: ${add(5, 3)}`);        
console.log(`${multiply.operation}: ${multiply(5, 3)}`);