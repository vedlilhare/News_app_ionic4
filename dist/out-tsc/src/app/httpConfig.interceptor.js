import * as tslib_1 from "tslib";
//httpConfig.interceptor.ts
import { HttpResponse } from "@angular/common/http";
import { throwError, from } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoadingController, AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(loadingController, alertController, storage) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.storage = storage;
        this.debug = true;
    }
    intercept(request, next) {
        const token = "my-token-string-from-server";
        /*
          //Authentication by setting header with token value
          if (token) {
            request = request.clone({
              setHeaders: {
                'Authorization': 'Bearer '+token,
              }
            });
          }
        
          if (!request.headers.has('Content-Type')) {
            request = request.clone({
              setHeaders: {
               
              }
            });
          }
       
          request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
          }); */
        return from(this.storage.get("TOKEN_KEY")).pipe(switchMap(token => {
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
            this.showLoader();
            return next.handle(request).pipe(map((event) => {
                if (event instanceof HttpResponse) {
                    // do nothing for now
                }
                this.hideLoader();
                return event;
            }), catchError((error) => {
                const status = error.status;
                const reason = error && error.error.reason ? error.error.reason : "";
                // this.hideLoader();
                this.presentAlert(status, reason);
                return throwError(error);
            }));
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
            duration: 1000
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let msg = '';
            if (status == 0) {
                msg = 'No Internet Connection!';
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
HttpConfigInterceptor = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [LoadingController,
        AlertController,
        Storage])
], HttpConfigInterceptor);
export { HttpConfigInterceptor };
//# sourceMappingURL=httpConfig.interceptor.js.map