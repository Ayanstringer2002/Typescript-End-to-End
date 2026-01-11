// Declaring varibales Method 1
let age: number = 25;

// Declaring varibales Method 2
let city: string = undefined!;
console.log(city);

// Declaring varibale Mthod 3
let country = 'India';
console.log(country)

// var let const
// var -> Functional Level scoping
function testVar() {
  var globalVar = "I am a function-scoped variable";
  console.log(globalVar);  
}
testVar(); // outside function globalVar is not possible and need to avoid

// Let -> only run inside scope
let count = 5;
if (count > 0) {
  let message = "Count is positive";
  console.log(message); 
}
// console.log(message);  // Error: message is not accessible here

// const -> Not be reassigned once it gets assigned
const area = "Patna"
// area = "Bhopal" -> This gives error
console.log(area);

// Local Varibale
function testLocalscope(){
    let localvar = "I am bhopali";
    console.log(localvar);
}
// console.log(localvar); -> produces error

// Global Varibale
let globalVar = 10;  
function displayGlobalVar() {
  console.log(globalVar); 
}
displayGlobalVar();

// Example hand's on:
let globalLogic: number = 10;
class figure {
    private classLogic: number = 11;
    assignNum() : void {
        let localGoal: number = 12;
        console.log('Local Variable' + localGoal);
    }
}
console.log('Global varibale' + globalLogic);
let obje = new figure();
obje.assignNum(); // Output : GV: 10, Localvariable = 12







