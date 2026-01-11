// Literals allow developers to specify some exact values for varibales, 
// String literals, Numeric literals, Boolean Literals

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
 function rollDice() : DiceRoll {
    return 4;
    // return 7 will generate error
 }
 console.log(rollDice());

// Boolean Literals 
type sucess = true;
function operation() : sucess {
    return true;
    // return false will give error
}
console.log(operation())
