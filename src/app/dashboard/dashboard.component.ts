import { Component, OnInit } from '@angular/core';

import { ApiService } from './../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    console.log(this.service.getToken());
  }

  // get ID of the logged in user
  getToken(): string | null {
    return this.service.getToken();
  }

}
