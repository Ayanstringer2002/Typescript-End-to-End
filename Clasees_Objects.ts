// Objects
// Objects An object is an instance of class which contains set of key value pairs. 
/*
let obj = {
    key1: value1,
    key2: value2,
    // ...
};
*/
class Rectangle {
    width: number;
    height: number;
    constructor(width : number, height: number){
        this.width = width;
        this.height = height;
    }
    calculateAreas(): number {
        return this.width * this.height;
    }
}
const react = new Rectangle(10,5); // const object = new Class();
console.log('Area of the rectangle ${react.calculateAreas()');

class BankAccount {
    accountHolder: string;
    balance: number;
    constructor(accountHolder: string, initialBalance: number){
        this.accountHolder = accountHolder;
        this.balance = initialBalance;

    }
    deposit(amount : number): void {
        this.balance += amount;
    }
    getBalance() : string {
        return 'The balance for ${this.accountHolder} is $${this.balance}';
    }
}
const account = new BankAccount("John Doe", 500);
account.deposit(200);
console.log(account.getBalance());