import { Component, OnInit } from '@angular/core';
import { MobileListService } from '../_services/MobileList.service';
import { LaptopListService } from '../_services/LaptopList.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  ResourceData:any
  constructor(private mobilelist:MobileListService,private laptoplist:LaptopListService,private router:Router) { }

  ngOnInit()
  {
   this.mobile();
  }

   onclick(Id:number)
   {
     this.router.navigate([`availability/${Id}`]);
   }

   mobile()
   {
     this.mobilelist.Resource_list().subscribe(
       MobilesData=>
        {
         this.ResourceData=MobilesData;
        }
       ) 
   }
   laptop(){
    this.laptoplist.LaptopList().subscribe(
      LaptopList=>
      {
        this.ResourceData=LaptopList; 
      }
     )
  }

}
