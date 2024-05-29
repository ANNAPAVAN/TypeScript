"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// generic
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("three");
function identityFour(val) {
    return val;
}
identityFour({ brand: "tata", type: 4 });
identityFour({ brand: "tata", type: 4 });
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some db operations 
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, 4.6589);
function anotherFunctionTwo(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunctionTwo(3, { connection: "a", username: "a", password: "a" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
