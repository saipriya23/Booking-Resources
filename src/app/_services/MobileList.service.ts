import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { MobileList } from '../User';
@Injectable({
    providedIn: 'root'
  })
  export class MobileListService {
  
 constructor(private http:HttpClient) { }
        url="http://localhost:62152/api/MobileList"
       Resource_list() :Observable<MobileList>
        {
        return this.http.get<MobileList>(this.url);
        }
  }
      