import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Book } from '../User';
@Injectable({
    providedIn: 'root'
  })
  export class BookService {
  
    constructor(private http:HttpClient) { }
        configurl="http://localhost:62152/api/BookResource"
        record(details:Book):Observable<Book>
        {
          return this.http.post<Book>(this.configurl,details);
        }
  }