import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MobileListService = /** @class */ (function () {
    function MobileListService(http) {
        this.http = http;
        this.url = "http://localhost:62152/api/MobileList";
    }
    MobileListService.prototype.Resource_list = function () {
        return this.http.get(this.url);
    };
    MobileListService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MobileListService);
    return MobileListService;
}());
export { MobileListService };
//# sourceMappingURL=MobileList.service.js.map