import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{
    constructor(private route: Router) {}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.isLoggedIn()) {
        this.route.navigate(['/login']);
        return false;
      }
      return true;
    }
    
    isLoggedIn() {
      return localStorage.getItem('user');
    }
  }