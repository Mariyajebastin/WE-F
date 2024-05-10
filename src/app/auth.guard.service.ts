import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployerDetailsService } from './employer.details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private employer: EmployerDetailsService, public router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.employer.isLoggedIn()
    if (!isAuthenticated) {
      this.router.navigate(['/employer']);
      return isAuthenticated;
    }
    return isAuthenticated;

  }
}
