"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "apavan",
    email: "pavan@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "pavan", isPaid: false });
// createUser({name:"pavan",isPaid:false,email:"a@gmail.com"}) // not work in ts
var newUser = { name: "pavan", isPaid: false, email: "a@gmail.com" };
createUser(newUser); // it works fine
function createCourse() {
    return { name: "angular", price: 999 };
}
function createUser1(user) {
    return { name: '', email: '', isActive: false };
}
createUser1({ name: '', email: '', isActive: false });
var myUser = {
    _id: "123",
    name: "ap",
    email: "ap@gmail.com",
    isActive: false
};
myUser.email = "pavan@gmail.com";
