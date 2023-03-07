"use strict";
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // accessors
    get firstName() {
        return this._firstName;
    }
    // overload
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Juncen", "Li");
console.log(myCustomer.firstName);
myCustomer.firstName = "JC"; // 用的set
console.log(myCustomer.firstName); // 用到get
// console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);
