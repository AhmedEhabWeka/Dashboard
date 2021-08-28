import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserData: any = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('currentUser')) {
      this.saveCurrentUserData();
    }
  }
  register(formdata: object): Observable<any> {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', formdata)
  }

  login(formdata: object): Observable<any> {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', formdata)
  }
  logout() {
    this.currentUserData.next(null);
    localStorage.removeItem('currentUser');
    this._Router.navigate(['/login'])

  }

  saveCurrentUserData() {
    let encodedToken: any = localStorage.getItem('currentUser');
    console.log(encodedToken);
    let decodedToken = jwtDecode(encodedToken);
    this.currentUserData.next(decodedToken);
    console.log(this.currentUserData.value);
  }
}
