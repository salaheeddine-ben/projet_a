import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  baseurl = "http://localhost:8081/api/";


  getusers():Observable <Users[]> {
    return this.http.get<Users[]>("http://localhost:8081/api/users")
  }
 
}
