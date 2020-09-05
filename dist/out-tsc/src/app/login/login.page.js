import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
import { ToastController, LoadingController, MenuController, NavController } from "@ionic/angular";
let LoginPage = /** @class */ (() => {
    let LoginPage = class LoginPage {
        constructor(authService, navCtrl, menuCtrl, toastController, loadingController, httpService, loadingService) {
            this.authService = authService;
            this.navCtrl = navCtrl;
            this.menuCtrl = menuCtrl;
            this.toastController = toastController;
            this.loadingController = loadingController;
            this.httpService = httpService;
            this.loadingService = loadingService;
        }
        ngOnInit() {
            this.menuCtrl.enable(false);
        }
        ionViewDidEnter() {
            //this.loadingService.present();
            this.httpService.gettoken().subscribe(data => {
                //this.loadingService.dismiss();
                localStorage.setItem("token", data.results);
                console.log(data.results, "data");
            });
        }
        login() {
            // this.authService.login();
            this.navCtrl.navigateRoot(['home']);
            localStorage.setItem('userid', '10846');
        }
    };
    LoginPage = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthenticationService, NavController, MenuController, ToastController,
            LoadingController, HttpService,
            LoadingService])
    ], LoginPage);
    return LoginPage;
})();
export { LoginPage };
//# sourceMappingURL=login.page.js.map