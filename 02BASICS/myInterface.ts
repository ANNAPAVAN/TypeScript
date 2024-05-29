interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId? : string, // optional
    startTrail: () => string
    start2Trail(): string 
    getCoupon(coupanname: string, value: number): number

}

// we can also add more properties to User by defining it again at anywhere
// ReOpening of the interface
interface User {
    githubToken: string
}


// inherit
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const pavan: Admin= {
    dbId: 101,
    role: 'admin',
    email: "ap@gmal.com",
    userId: 1,
    startTrail: () => {
        return "trail started"
    },
    start2Trail: ()=>{
        return "trail2 started"
    },
    getCoupon: (name: "pavan10", off: 10) => {
        return 10
    },
    githubToken: 'git@Pavan'
}

pavan.email = 'apavan@gmail.com'
// pavan.dbId = 202 // not allowed






