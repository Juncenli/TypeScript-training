import { Customer } from "./Customer";

let myCustomer = new Customer("Juncen", "Li");

console.log(myCustomer.firstName);
myCustomer.firstName = "JC"; // 用的set
console.log(myCustomer.firstName); // 用到get