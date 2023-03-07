var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // accessors
        get: function () {
            return this._firstName;
        },
        // overload
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Juncen", "Li");
console.log(myCustomer.firstName);
myCustomer.firstName = "JC"; // 用的set
console.log(myCustomer.firstName); // 用到get
// console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);
