import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AvailabilityService } from '../_services/availability.service';
var AvailabilityComponent = /** @class */ (function () {
    function AvailabilityComponent(availabilityService) {
        this.availabilityService = availabilityService;
        this.availability = false;
    }
    AvailabilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.availabilityService.Available().subscribe(function (available) { return _this.available = available; });
        // this.availabilityService.record(userInfo).subscribe(
        //  available=>this.available=available
        // )
    };
    AvailabilityComponent = tslib_1.__decorate([
        Component({
            selector: 'app-availability',
            templateUrl: './availability.component.html',
            styleUrls: ['./availability.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AvailabilityService])
    ], AvailabilityComponent);
    return AvailabilityComponent;
}());
export { AvailabilityComponent };
//# sourceMappingURL=availability.component.js.map