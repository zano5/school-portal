import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './backend/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isUserAuthenticated()) {
      this.router.navigate(["/"])
    }
    return this.auth.isUserAuthenticated();
  }

}
