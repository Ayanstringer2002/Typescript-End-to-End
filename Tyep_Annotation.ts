// Type Annotations -> Specify type of Varibale

const num: number = 6;
const arr : (number | string)[] = ["Ayan", "Typescript", 50,200];
console.log(typeof num);
console.log(arr);

// First Annotation (input taken string and return string)
function greeting(name: string): string {
    return 'Hello, ${name}!';
}
console.log(greeting("Alice")); // output -> Hello, world!

// Object with Annotations
const person: {name: string; age: number} = {
    name: "Alice",
    age: 30

};
console.log(person);

// Array type Annotation
const numbers: number[] = [1,2,3,4,5];
console.log(numbers);


