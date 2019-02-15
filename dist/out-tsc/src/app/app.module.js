import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { AvailabilityComponent } from './availability/availability.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                UserLoginComponent,
                ResourceDetailsComponent,
                AvailabilityComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterModule.forRoot([
                    {
                        path: '', component: UserLoginComponent
                    },
                    {
                        path: 'resourcedetails', component: ResourceDetailsComponent
                    },
                    {
                        path: 'laptopdetails', component: ResourceDetailsComponent
                    },
                    {
                        path: 'availability', component: AvailabilityComponent
                    }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map