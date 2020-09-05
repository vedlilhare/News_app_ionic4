import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
let AuthGuard = /** @class */ (() => {
    let AuthGuard = class AuthGuard {
        constructor(auth) {
            this.auth = auth;
        }
        canActivate() {
            return this.auth.isAuthenticated();
        }
    };
    AuthGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AuthenticationService])
    ], AuthGuard);
    return AuthGuard;
})();
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map