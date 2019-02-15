import { Component, OnInit } from '@angular/core';
import { Available } from '../User';
import { AvailabilityService } from '../_services/availability.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../_services/localstorage.service';

@Component({
  selector   : 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  public id:number;
  form:FormGroup;
  availability=false;
  available:Available;

  constructor( private availabilityService:AvailabilityService,
               private formBuilder: FormBuilder,
               private route:ActivatedRoute,
               private router: Router,
               private localstorage:LocalstorageService) {}
  
  ngOnInit() {
         this.form = this.formBuilder.group({
          Start_Date: ['', Validators.required],
          End_Date:   ['', Validators.required]  
         });
         this.route.params.subscribe(params => {
         this.id = params['id']
         });
    }
    postdetails(){
       var data=this.form.value;
        data["Resource_Id"]=this.id
        this.availabilityService.record(data).subscribe(
        data=>{
           if(data===true)
           {
            this.router.navigate([`book/${this.id}`]);
           }
          else
           {
            this.availability=true;
           }
           }); 
    }
} 