/*
get propertyname(): returnType {

}
*/ 

class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);

/*
set propertyName(value: type) {
  // logic to set the value
} Used for validation
*/

class User {
    private _age: number = 0;
    get age(): number {
        return this._age;
    }
    set age(value: number){
        if(value > 0 && value < 150){
            this._age = value;
        }else{
            console.error('Invalid age value');
        }
    }
}
const user = new User();
user.age = 25;
console.log(user.age);
user.age = -5;
