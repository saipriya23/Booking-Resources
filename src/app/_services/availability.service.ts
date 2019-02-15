import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Available } from '../User';
@Injectable({
    providedIn: 'root'
  })
  export class AvailabilityService {
  
 constructor(private http:HttpClient) { }
        configurl="http://localhost:62152/api/Availability"
        record(details:Available):Observable<boolean>
        {
          return this.http.post<boolean>(this.configurl,details);
        }
  }
      