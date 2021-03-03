import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
this.angForm = this.fb.group({
name: ['', [Validators.required, Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}

ngOnInit(): void {
}

// tslint:disable-next-line: typedef
postdata(angForm1: { value: { name: string; password: string; }; }) {
  this.dataService.userlogin(angForm1.value.name, angForm1.value.password)
    .pipe(first())
      .subscribe(
      data => {
      const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
      console.log('logged in');
      this.router.navigate([redirect]);
      },
      error => {
      alert('Username or password is incorrect');
      });
}

// tslint:disable-next-line: typedef
get email() { return this.angForm.get('email'); }

// tslint:disable-next-line: typedef
get password() { return this.angForm.get('password'); }

// tslint:disable-next-line: typedef
get name() { return this.angForm.get('name'); }

}
