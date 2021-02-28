import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
constructor(private dataService: ApiService, private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
  const routeurl: string = state.url;
  return this.isLogin(routeurl);
}

isLogin (routeurl: string) : boolean {
  var newLocal: boolean = false;
if (this.dataService.isLoggedIn()) {
  newLocal = true;
}

this.dataService.redirectUrl = routeurl;
this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
return newLocal;
}
}
