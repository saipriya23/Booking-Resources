import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MobileListService } from '../_services/MobileList.service';
import { LaptopListService } from '../_services/LaptopList.service';
import { Router } from '@angular/router';
var ResourceDetailsComponent = /** @class */ (function () {
    function ResourceDetailsComponent(mobilelist, laptoplist, router) {
        this.mobilelist = mobilelist;
        this.laptoplist = laptoplist;
        this.router = router;
    }
    ResourceDetailsComponent.prototype.ngOnInit = function () {
        // this.mobilelist.Resource_list().subscribe(
        //   MobilesData=>this.ResourceData=MobilesData
        //  ) 
        //  this.laptoplist.LaptopList().subscribe(
        //    LaptopList=>this.ResourceData=LaptopList
        //   )
        this.mobile();
    };
    ResourceDetailsComponent.prototype.onclick = function () {
        this.router.navigate(['/availability']);
    };
    ResourceDetailsComponent.prototype.mobile = function () {
        var _this = this;
        this.mobilelist.Resource_list().subscribe(function (MobilesData) { return _this.ResourceData = MobilesData; });
    };
    ResourceDetailsComponent.prototype.laptop = function () {
        var _this = this;
        this.laptoplist.LaptopList().subscribe(function (LaptopList) { return _this.ResourceData = LaptopList; });
    };
    ResourceDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resource-details',
            templateUrl: './resource-details.component.html',
            styleUrls: ['./resource-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MobileListService, LaptopListService, Router])
    ], ResourceDetailsComponent);
    return ResourceDetailsComponent;
}());
export { ResourceDetailsComponent };
//# sourceMappingURL=resource-details.component.js.map