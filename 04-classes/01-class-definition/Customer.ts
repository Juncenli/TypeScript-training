class Customer {
    firstName: string;
    lastName: string;
    constructor(theFirst: string, theScond: string) {
        this.firstName = theFirst;
        this.lastName = theScond;
    }
}

let myCustomer = new Customer("Juncen", "Li");
// myCustomer.firstName = "Juncen";
// myCustomer.lastName = "Li";

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);