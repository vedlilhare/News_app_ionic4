import { __decorate, __metadata } from "tslib";
import { Platform, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'auth-token';
let AuthenticationService = /** @class */ (() => {
    let AuthenticationService = class AuthenticationService {
        constructor(storage, plt, navCtrl) {
            this.storage = storage;
            this.plt = plt;
            this.navCtrl = navCtrl;
            this.authenticationState = new BehaviorSubject(null);
            this.plt.ready().then(() => {
                this.checkToken();
            });
        }
        checkToken() {
            this.storage.get(TOKEN_KEY).then(res => {
                if (res) {
                    this.authenticationState.next(true);
                }
                else {
                    this.authenticationState.next(false);
                }
            });
        }
        login() {
            return this.storage.set(TOKEN_KEY, '1234567').then(() => {
                this.authenticationState.next(true);
            });
        }
        logout() {
            localStorage.clear();
            return this.storage.remove(TOKEN_KEY).then(() => {
                // this.authenticationState.next(false);
                this.navCtrl.navigateRoot(['login']);
            });
        }
        isAuthenticated() {
            return this.authenticationState.value;
        }
    };
    AuthenticationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Storage, Platform, NavController])
    ], AuthenticationService);
    return AuthenticationService;
})();
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map