import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.configurl = "http://localhost:62152/api/Login";
    }
    AuthenticationService.prototype.Login = function (username) {
        return this.http.post(this.configurl, username);
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { User } from '../_models';
// @Injectable({ providedIn: 'root' })
// export class AuthenticationService {
//     private currentUserSubject: BehaviorSubject<User>;
//     public currentUser: Observable<User>;
//     constructor(private http: HttpClient) {
//         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
//         this.currentUser = this.currentUserSubject.asObservable();
//     }
//     public get currentUserValue(): User {
//         return this.currentUserSubject.value;
//     }
//     login(username: string, password: string) {
//         return this.http.post<any>(`/users/authenticate`, { username, password })
//             .pipe(map(user => {
//                 // login successful if there's a jwt token in the response
//                 if (user && user.token) {
//                     // store user details and jwt token in local storage to keep user logged in between page refreshes
//                     localStorage.setItem('currentUser', JSON.stringify(user));
//                     this.currentUserSubject.next(user);
//                 }
//                 return user;
//             }));
//     }
//     logout() {
//         // remove user from local storage to log user out
//         localStorage.removeItem('currentUser');
//         this.currentUserSubject.next(null);
//     }
// }
//# sourceMappingURL=authentication.service.js.map