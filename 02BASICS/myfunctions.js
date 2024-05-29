"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("pavan");
function signUpUser(name, email, password, isPaid) {
    console.log("Welcome");
}
signUpUser("pavan", "pavan@gmail.com", "pavan", true);
var loginUser = function (name, email, isPaid) { };
loginUser("pavan", "pavan@gmail.com", true);
var loginUser2 = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser2("pavan", "pavan@gmail.com");
