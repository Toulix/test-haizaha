import { AuthService } from 'src/app/core/service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
                                  Promise<boolean | UrlTree> | 
                                  boolean | UrlTree {

    const userInfo = this.authService.getUserInfoFromLocalStorage();

    if(userInfo)
      return true;

     return this.router.createUrlTree(['/authentication']);
  }
  
}
