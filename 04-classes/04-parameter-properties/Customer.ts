class Customer {

    constructor(private _firstName: string, private _lastName: string) {}
    // accessors
    public get firstName(): string {
        return this._firstName;
    }
    // overload
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer("Juncen", "Li");
console.log(myCustomer.firstName);
myCustomer.firstName = "JC"; // 用的set
console.log(myCustomer.firstName); // 用到get

// console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);