import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode=true;
  isLoggedIn = false;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
 
  }

  register(){   
    this.isLoginMode = false;
    let z = document.getElementById("btn"); 
    z.style.left = "110px";
  }

  login(){
    this.isLoginMode = true;
    let z = document.getElementById("btn"); 
    z.style.left = "0px";
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    form.reset();
    if(this.isLoginMode){
      this.isLoggedIn = this.userservice.login(username,password);
      if(this.isLoggedIn){
        this.router.navigate(['/book']);
      }else{
        this.router.navigate(['/login']);
      }
    }
  }

}
