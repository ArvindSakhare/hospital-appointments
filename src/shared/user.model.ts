export class User {
    constructor(
        public username: string,
        public email:string,
        public password:string,
        public isadmin:boolean,
        public isLoggedIn:boolean) {}    
}