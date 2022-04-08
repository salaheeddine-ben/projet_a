import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  confirmEmailUrl = "application/json"

  baseurl = "http://localhost:8081/api/";

  constructor(private http: HttpClient, private _route: Router) { }

  login(model: any) {
    return this.http.post(this.baseurl + "login", model).pipe(
      map((Response: any) => {
        const user = Response;
        localStorage.setItem('token', user.access_token)
        localStorage.setItem('role', 'admin')
        console.log(user.access_token);
        this._route.navigate(['pets'])
      }))
  }

  register(model: any) {
    return this.http.post(this.baseurl + 'user/save', model).pipe(
      map(() => {
        this._route.navigate(['persons'])
      }))
  }

  loggedin() {
    return !!localStorage.getItem('token')
  }
  isadmin() {
    if (localStorage.getItem('role') == 'admin') {
      return true
    } else return false
  }

}


