let greetings: string  = "HELLO PAVAN";
console.log(greetings)
// greetings = 2  // cannot do this in .ts

let mynum = 6


// if you are initailizing at the time of declaration of variable then no need to keep the type , TypeScript automatically grab the type 
let myname = "ANNAPAVAN"
// myname = 2 // .ts doesn't allow this here , because it already made the type of myname as string


// number 
let userId: number = 334455

// boolean 
let isLoggedIn: boolean = false 


// any 
let hero; // in .ts , if u hover on it , it says type as any
function getHero() {
    return "ravi teja"
}
hero = getHero();








export {}  // it removes the error with let keyword