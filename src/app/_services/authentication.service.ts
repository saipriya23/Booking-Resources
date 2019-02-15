import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { IUser} from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

   configurl="http://localhost:62152/api/Login"
   Login(username:IUser):Observable<Boolean>
   {
     return this.http.post<Boolean>(this.configurl,username);
   }
  }
  