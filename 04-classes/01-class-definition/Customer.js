var Customer = /** @class */ (function () {
    function Customer(theFirst, theScond) {
        this.firstName = theFirst;
        this.lastName = theScond;
    }
    return Customer;
}());
var myCustomer = new Customer("Juncen", "Li");
// myCustomer.firstName = "Juncen";
// myCustomer.lastName = "Li";
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
