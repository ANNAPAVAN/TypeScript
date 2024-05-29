
const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

// generic
function identityThree<Type>(val: Type): Type {
    return val;
}
identityThree(3)
identityThree("three")


function identityFour<T>(val: T): T {
    return val;
}


interface Bottle {
    brand: string ,
    type: number 
}

identityFour<Bottle>({brand:"tata",type:4})
identityFour({brand:"tata",type:4})



function getSearchProducts<T>(products: T[]): T {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T =>{
    // do some db operations 
    const myIndex = 4 
    return products[myIndex]
} 


interface DataBase {
    connection :string ,
    username: string, 
    password: string 
}



function anotherFunction<T,U extends number>(valOne: T, valTwo: U ): object{
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3, 4.6589);


function anotherFunctionTwo<T,U extends DataBase>(valOne: T, valTwo: U ): object{
    return {
        valOne,
        valTwo
    }
}
anotherFunctionTwo(3, {connection:"a", username: "a" ,password: "a"})



interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string, 
    subject: string 
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}










