import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm: FormGroup;

constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
  this.angForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
    password: ['', Validators.required],
    name: ['', Validators.required],
    mobile: ['', Validators.required]
    });
}

ngOnInit(): void {
}

// tslint:disable-next-line: typedef
postdata(angForm1: { value: { name: string; password: string; email: string}; })
{
  this.dataService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password)
    .pipe(first())
      .subscribe(
      data => {
        console.log('registered');
        alert('User registered in the database');
        this.router.navigate(['/login']);
      },
      error => {
        this.router.navigate(['/login']);
        // alert("Username already exists in the database");
      });
}

// tslint:disable-next-line: typedef
get email() { return this.angForm.get('email'); }

// tslint:disable-next-line: typedef
get password() { return this.angForm.get('password'); }

// tslint:disable-next-line: typedef
get name() { return this.angForm.get('name'); }

}
