/* 
this behaves mostly same as functions as constructors
are same as functions under the hood
*/

class Vehicle{
    constructor(){
        this.tyres = 4;
        this.color = 'red';
        console.log(this);
    }
}

let car = new Vehicle();

/* 
Also in derived classes before using 'this' you should
call super method which is same as implementing this line

this = new BaseClass()

Derived classes must not return before calling super()
unless they return an object or have no constructor as all
*/

//No error
class Car extends Vehicle{
    constructor(){
        //super();
        //console.log(this);
        return {};
    }
}

//Error
class Scooty extends Vehicle{
    constructor(){
        console.log("Class without super")
    }
}

//const s = new Scooty(); // error
const c = new Car();
