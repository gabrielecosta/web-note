import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Users } from '../model/users';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl = '/dashboard';
baseUrl = 'http://localhost/login_CRUD/angular/php';

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

constructor(private httpClient: HttpClient) { }

// tslint:disable-next-line: typedef
public userlogin(username: string, password: string) {
  // alert(username)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(users => {
      this.setToken(users[0]);
      this.getLoggedInName.emit(true);
      return Users;
    }));
}

// tslint:disable-next-line: typedef
public userregistration(name: string, email: string, pwd: string) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
    .pipe(map(users => {
      return users;
    }));
}

// set Token: when the user logs, his name (that will be used as a key) will be
// stored on a localStorage. So, we can do a fitleredSearch in a second moment
// tslint:disable-next-line: typedef
setToken(token: Users) {
  localStorage.setItem('token', token.name);
}


// it is used as a method for getting the user
// tslint:disable-next-line: typedef
getToken() {
  return localStorage.getItem('token');
}

// it deletes the token when the user clicks logout
// tslint:disable-next-line: typedef
deleteToken() {
  localStorage.removeItem('token');
}


// checks if the token is null or not
// tslint:disable-next-line: typedef
isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
      return true;
    }
  return false;
    }


// crud operations

readProducts(): Observable<Product[]> {
  return this.httpClient.get<Product[]>(`${this.baseUrl}/index.php`);
}

createProduct(product: Product): Observable<Product>{
  return this.httpClient.post<Product>(`${this.baseUrl}/create.php`, product);
}

// tslint:disable-next-line: typedef
updateProduct(product: Product) {
  return this.httpClient.put<Product>(`${this.baseUrl}/update.php`, product);
}

// tslint:disable-next-line: typedef
deleteProduct(id: number) {
  return this.httpClient.delete<Product>(`${this.baseUrl}/delete.php/?id=${id}`);
}

}
