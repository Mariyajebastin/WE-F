import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeDetailsService } from './employee.details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {


  constructor(public router: Router, private employee : EmployeeDetailsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.employee.isLoggedIn()
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return isAuthenticated;
    }
    return isAuthenticated;

  }
}
