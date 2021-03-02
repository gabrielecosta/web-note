import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string = '/dashboard';
baseUrl: string = "http://localhost/login_CRUD/angular/php";

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

constructor(private httpClient: HttpClient) { }

public userlogin(username: String, password: String) {
  //alert(username)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
      this.setToken(Users[0]);
      this.getLoggedInName.emit(true);
      return Users;
    }));
}

public userregistration(name: String, email: String, pwd: String) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
    .pipe(map(Users => {
      return Users;
    }));
}

//set Token: when the user logs, his name (that will be used as a key) will be
//stored on a localStorage. So, we can do a fitleredSearch in a second moment
setToken(token: Users) {
  localStorage.setItem('token', token.name);
}


//it is used as a method for getting the user
getToken() {
  return localStorage.getItem('token');
}

//it deletes the token when the user clicks logout
deleteToken() {
  localStorage.removeItem('token');
}


//checks if the token is null or not
isLoggedIn() {
  const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
    }
}
