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

    private _courseCount = 1;

    private readonly city: string = "Hyd"
    constructor(
        public email: string,
        public name:string 
      ){}


      private deleteToken(){
        console.log("delete token")
      }

      get getAppleEmail(): string{
        return `apple${this.email}`
      }

      get courseCount(): number {
        return this._courseCount;
      }
      
      set courseCount(courseNumber: number) {
        if(courseNumber <=1 ){
            throw new Error("Course count should be greater than 1")
        }
        this._courseCount = courseNumber;
      }

}

class SubUser extends User {
    isFamily: boolean = true;
    
}

const pavan = new User("pavan@gmail.com", "pavan")








