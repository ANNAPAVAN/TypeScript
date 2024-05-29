const User = {
    name: "apavan",
    email: "pavan@gmail.com",
    isActive: true
}

function createUser({name:string, isPaid: boolean}){}
createUser({name:"pavan",isPaid:false})
// createUser({name:"pavan",isPaid:false,email:"a@gmail.com"}) // not work in ts
let newUser = {name:"pavan",isPaid:false,email:"a@gmail.com"}
createUser(newUser) // it works fine


function createCourse():{name:string, price: number}{
    return {name:"angular",price:999}
}


// type

type User1 = {
    name: string,
    email: string,
    isActive: boolean
}
function createUser1(user: User1): User1{
    return {name: '',email:'',isActive:false}
}
createUser1({name: '',email:'',isActive:false})





type User2 = {
    readonly _id: string    
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number  // ?  makes it optional
}
let myUser: User2 = {
    _id: "123",
    name:"ap",
    email:"ap@gmail.com",
    isActive: false
    
}
myUser.email = "pavan@gmail.com"
// myUser._id = "147";  // it is readonly , so we should not do this



type cardNumber = {
    cardnumber: string 
}
type cardDate = {
    carddate: string
}
type cardDetails = cardNumber & cardDate & {  // like extends
    cvv: number
}








export {}