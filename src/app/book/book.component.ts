import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/Book.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../User';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:FormGroup;
  Booking:Book;
  public id:number;
  bookingStatus=false;

  constructor(private Bookservice:BookService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,) { }

  ngOnInit()
  {
    this.book=this.formBuilder.group({
      Start_Date:['',Validators.required],
      End_Date:['',Validators.required]
      });
      this.route.params.subscribe(params => {
      this.id = params['id']
      });
  }
  
 bookdetails()
  {
     var details=this.book.value;
     console.log(details);
     details["Resource_Id"]=this.id;
     details["UserName"]=localStorage.getItem("UserName")
     this.Bookservice.record(details).subscribe(
     available=>this.Booking=available
     )
    this.bookingStatus=true;
  }
}
