import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }
  isCurrentUserLoggedIn = false;
  isCurrentUserAdmin = false;
  ngDoCheck(){
    this.isCurrentUserAdmin = this.userService.isCurrentUserAdmin;
    this.isCurrentUserLoggedIn = this.userService.isCurrentUserLoggedIn;
  }
  ngOnInit(): void {
  }

}
