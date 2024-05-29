let score: number | string = 33
score = 44 
score = "very good"




type User = {
    name: string;
    id: number
}
type Admin = {
    adminname: string;
    id: number
}
let pavan: User | Admin = {
    name: "pavan",
    id: 122
}
pavan = { adminname:'apavan', id:123}



function getDbId(id: number| string) {
    console.log(`DB id is : ${id}`)
}
getDbId(123)
getDbId("123")

// not work in ts
// function getDbId2(id: number| string) {
//     id.toLowerCase()
// }

function getDbId2(id: number| string) {
    if(typeof id === 'string'){
        id.toLowerCase()
    }else{
        id = id+20
    }
}




// array

const data: number[] = [1,2,3]
const data2: string[] = ['1','2','3']
const data3: number[] | string[] = [1,2,3]  // it is either all numbers or all strings
const data4: (number | string | boolean)[] = [1,2,3,'4','5',6,true]



let pi:3.14 = 3.14 
// pi = 3.1456  // doesnot allow

let seatAllotment : 'aisle' | 'middle' | 'window' 
seatAllotment = 'aisle'
// seatAllotment = 'crew'  // not allowed in ts

















export {}