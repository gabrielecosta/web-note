import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string = '/dashboard';
baseUrl: string = "http://localhost/login_CRUD/angular/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient: HttpClient) { }
public userlogin(username: String, password: String) {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
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

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}
