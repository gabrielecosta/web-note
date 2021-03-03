import { Component, OnInit } from '@angular/core';

import { ApiService } from './../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService: ApiService) {
  dataService.getLoggedInName.subscribe(name => this.changeName(name));
  if (this.dataService.isLoggedIn())
  {
  console.log('loggedin');
  this.loginbtn = false;
  this.logoutbtn = true;
  }
  else{
  this.loginbtn = true;
  this.logoutbtn = false;
  }

  }

  collapsed = true;

  loginbtn: boolean;
  logoutbtn: boolean;

  ngOnInit(): void {
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
  }

  logout(): void {
  this.dataService.deleteToken();
  window.location.href = window.location.href;
  }

}
