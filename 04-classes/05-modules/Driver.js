"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer("Juncen", "Li");
console.log(myCustomer.firstName);
myCustomer.firstName = "JC"; // 用的set
console.log(myCustomer.firstName); // 用到get
