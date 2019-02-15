import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AvailabilityService = /** @class */ (function () {
    function AvailabilityService(http) {
        this.http = http;
        this.availurl = "http://localhost:62152/api/Availability";
        this.configurl = "http://localhost:62152/api/Availability";
    }
    AvailabilityService.prototype.Available = function () {
        return this.http.get(this.availurl);
    };
    AvailabilityService.prototype.record = function (details) {
        return this.http.post(this.configurl, details);
    };
    AvailabilityService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AvailabilityService);
    return AvailabilityService;
}());
export { AvailabilityService };
//# sourceMappingURL=availability.service.js.map