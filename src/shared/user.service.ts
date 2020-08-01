import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {
    users:User[] = [
        new User("Arvind", "arvindsakhare1@gmail.com","12345678", true, false),
        new User("Akshay", "sakhare.akshay51@gmail.com","12345678", false, false)
    ];

    isCurrentUserLoggedIn = false;
    isCurrentUserAdmin = false;
    addUser(user:User) {
        this.users.push(user);
    }
    login(username:string, password:string){
        for(let i=0; i<this.users.length; i++){
            console.log("typed :"+username+"i :"+i);
            if(this.users[i].username === username && this.users[i].password === password){
                this.users[i].isLoggedIn = true;
                this.isCurrentUserLoggedIn = true;
                console.log(this.users[i]);
                if(this.users[i].isadmin){
                    this.isCurrentUserAdmin = true;
                }
                return true;
            }
        }
        return false;
    }

}