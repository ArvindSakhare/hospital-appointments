import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogin=true;

  constructor() { }

  ngOnInit(): void {
 
  }

  register(){   
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn"); 
    x.style.left = "-400px";
    y.style.left = " 50px";
    z.style.left = "110px";
  }

  loginMode(){
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn"); 
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  }


}
