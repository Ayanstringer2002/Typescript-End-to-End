// define the structure of an object, specifying the required property types and method signatures

interface Employee {
    name: string;
    age: number;
    position: string;
}

class Manager implements Employee {
    name: string;
    age: number;
    position: string;
    
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

const manager1 = new Manager("John Doe", 35, "Project Manager");

console.log(manager1);

// Difference between Interfaces and Aliases
// Type Aliases: Allow the definition of types with a custom name,