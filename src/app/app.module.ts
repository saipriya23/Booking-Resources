import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule } from '@angular/router';
import {FormsModule}from '@angular/forms';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { AvailabilityComponent } from './availability/availability.component';
import { BookComponent } from './book/book.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ResourceDetailsComponent,
    AvailabilityComponent,
    BookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot
    ([
      {
        path:'', component:UserLoginComponent 
      },
      {
        path:'resourcedetails',component:ResourceDetailsComponent
      },
      {
         path:'laptopdetails',component:ResourceDetailsComponent
      },
      {
         path:'availability/:id',component:AvailabilityComponent
      },
      {
         path:'book/:id',component:BookComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
