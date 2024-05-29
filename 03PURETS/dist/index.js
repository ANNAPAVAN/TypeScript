"use strict";
// class User {
//     public email: string 
//     name: string   // default allocated modifier is public  
//     private readonly city: string = "Hyd"
//     constructor(email: string, name:string ){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Hyd";
    }
    deleteToken() {
        console.log("delete token");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
}
const pavan = new User("pavan@gmail.com", "pavan");
