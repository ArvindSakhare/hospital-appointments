import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  bookAppointment(){
    if(this.userService.isCurrentUserLoggedIn){
      this.router.navigate(['/book']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
