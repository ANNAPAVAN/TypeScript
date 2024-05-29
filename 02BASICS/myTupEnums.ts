// const user: (string | number)[] = [2,'ap',1]

// in case of tuples order also matters
let tUser : [string,number,boolean]
tUser = ["pavan",21,true]
// tUser = ["pavan",true,21] // doesnot work in ts

let rgb: [number, number, number] = [255,125,235]


type User = [number, string]

const newUser: User = [23,'ap@gmail.com']
newUser[1] = "nsodl@gmail.com";
// newUser[1] = 23; // doesnot work in ts
























export {}