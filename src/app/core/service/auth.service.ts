import { AuthData } from './../../models/authData';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // userSubject = new Subject<any>();

  // user$ = this.userSubject.asObservable();

  constructor(private route: Router) {}

  login(userName: string, password:string) {

    // send http request to verify credentials... (should return back a token)

    // test@gmail.com is a dummy email address since we don't have an api for now
    const userData = { userName, email: 'test@gmail.com' };
    
    // this.userSubject.next(userData);

    localStorage.setItem('user', JSON.stringify(userData));
  }

  logout() {
    // this.userSubject.next(null);
    localStorage.removeItem('user');
    this.route.navigate(['/'])
  }

  //Get user information from local storage
  getUserInfoFromLocalStorage() {
    const userData = localStorage.getItem('user');
    return JSON.parse(userData as string);
  }


}
