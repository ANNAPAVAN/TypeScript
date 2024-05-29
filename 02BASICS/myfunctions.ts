
function addTwo(num: number): number{
    return num + 2;
}
addTwo(5)


function getUpper(val: string): string{
    return val.toUpperCase();
}
getUpper("pavan")


function signUpUser(name:string, email:string, password:string, isPaid:boolean): void{
    console.log("Welcome")
}
signUpUser("pavan","pavan@gmail.com","pavan",true)


let loginUser = (name:string, email:string, isPaid:boolean) => {}
loginUser("pavan","pavan@gmail.com",true)


let loginUser2 = (name:string, email:string, isPaid:boolean=false) => {}
loginUser2("pavan","pavan@gmail.com")

function getValue(myVal: number): boolean | string {
    if(myVal > 5){
        return true;
    }
    return "200 OK"
}



const getHello = (s: string): string => {
    return 'Hello'
}


const heros = ["thor", "spideman", "ironman"]  // ts detects the array as type of string
heros.map((hero: string) => {
    return `hero is ${hero}`
})



function consoleError(errmsg :string): void{
    console.log(errmsg);
}


function handleError(errmsg :string): never{
    throw new Error(errmsg)
}












export {}