function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;
function calculateArea(...args: number[]): number {
    if (args.length === 1) {
        return Math.PI * args[0] ** 2;
    } else {
        return args[0] * args[1];
    }
}

console.log(calculateArea(5));         
console.log(calculateArea(10, 20));

