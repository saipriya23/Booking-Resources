import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LaptopList } from '../User';
@Injectable({
    providedIn: 'root'
  })
  export class LaptopListService {
  
 constructor(private http:HttpClient) { }
       url="http://localhost:62152/api/LaptopList"
      LaptopList() :Observable<LaptopList>
        {
        return this.http.get<LaptopList>(this.url);
        }
  }     