import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LaptopListService = /** @class */ (function () {
    function LaptopListService(http) {
        this.http = http;
        this.url = "http://localhost:62152/api/LaptopList";
    }
    LaptopListService.prototype.LaptopList = function () {
        return this.http.get(this.url);
    };
    LaptopListService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LaptopListService);
    return LaptopListService;
}());
export { LaptopListService };
//# sourceMappingURL=LaptopList.service.js.map