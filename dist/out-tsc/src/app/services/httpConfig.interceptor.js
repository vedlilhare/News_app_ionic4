import { __awaiter, __decorate, __metadata } from "tslib";
//httpConfig.interceptor.ts
import { HttpResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoadingController, AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { LoadingService } from "./loading.service";
import { HttpService } from "./http.service";
let HttpConfigInterceptor = /** @class */ (() => {
    let HttpConfigInterceptor = class HttpConfigInterceptor {
        constructor(loadingController, alertController, storage, loadingService, httpService) {
            this.loadingController = loadingController;
            this.alertController = alertController;
            this.storage = storage;
            this.loadingService = loadingService;
            this.httpService = httpService;
            this.debug = true;
        }
        intercept(request, next) {
            const token = localStorage.getItem('token');
            if (token) {
                request = request.clone({
                    headers: request.headers.set("Authorization", "Bearer " + token)
                });
            }
            if (!request.headers.has("Content-Type")) {
                request = request.clone({
                    headers: request.headers.set("Content-Type", "application/x-www-form-urlencoded")
                });
            }
            // this.showLoader();
            return next.handle(request).pipe(map((event) => {
                if (event instanceof HttpResponse) {
                    // do nothing for now
                }
                // this.hideLoader();
                return event;
            }), catchError((error) => {
                const status = error.status;
                const reason = error && error.error.reason ? error.error.reason : "";
                // this.hideLoader();
                // this.loadingService.dismiss();
                this.presentAlert(status, reason);
                return throwError(error);
            }));
            this.showLoader();
            return next.handle(request).pipe(map((event) => {
                if (event instanceof HttpResponse) {
                    console.log("event--->>>", event);
                }
                this.hideLoader();
                return event;
            }), catchError((error) => {
                console.error(error);
                this.hideLoader();
                return throwError(error);
            }));
        }
        showLoader() {
            this.loaderToShow = this.loadingController
                .create({
                message: "Please wait..",
                duration: 2000
            })
                .then(res => {
                res.present();
                res.onDidDismiss().then(dis => {
                    console.log("Loading dismissed!");
                });
            });
            this.hideLoader();
        }
        hideLoader() {
            this.loadingController.dismiss(null, null, undefined);
        }
        presentAlert(status, reason) {
            return __awaiter(this, void 0, void 0, function* () {
                let msg = '';
                if (status == 0) {
                    msg = 'No Internet Connection!';
                    this.loadingService.dismiss();
                }
                else {
                    msg = "Something went wrong please try again !";
                    this.loadingService.dismiss();
                }
                const alert = yield this.alertController.create({
                    header: "Error",
                    /*  subHeader: "Subtitle", */
                    message: msg,
                    buttons: ["OK"]
                });
                yield alert.present();
            });
        }
    };
    HttpConfigInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoadingController,
            AlertController,
            Storage,
            LoadingService, HttpService])
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
})();
export { HttpConfigInterceptor };
//# sourceMappingURL=httpConfig.interceptor.js.map