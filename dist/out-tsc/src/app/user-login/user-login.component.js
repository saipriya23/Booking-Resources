import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.wrongCredentials = false;
    }
    Object.defineProperty(UserLoginComponent.prototype, "val", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    UserLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.Login(this.loginForm.value)
            .subscribe(function (data) {
            if (data === true) {
                _this.router.navigate(['/resourcedetails']);
            }
            else {
                _this.wrongCredentials = true;
            }
        });
    };
    UserLoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-login',
            templateUrl: './user-login.component.html',
            styleUrls: ['./user-login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            AuthenticationService])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map