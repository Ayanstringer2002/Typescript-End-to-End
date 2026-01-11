/*
Rest parameters in TypeScript enable functions to handle an unlimited number of arguments by grouping them into an array. 
*/

function average(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return numbers.length === 0 ? 0 : total / numbers.length;
}

console.log("Average of the given numbers is:", average(10, 20, 30, 60));
console.log("Average of the given numbers is:", average(5, 6));
console.log("Average of the given numbers is:", average(4));

