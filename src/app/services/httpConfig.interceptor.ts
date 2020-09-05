//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError, from } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoadingController, AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { LoadingService } from "./loading.service";
import { HttpService } from "./http.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  loaderToShow: any;
  protected debug = true;
  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
    private loadingService: LoadingService,private httpService: HttpService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   const token = localStorage.getItem('token');

        if (token) {
          request = request.clone({
            headers: request.headers.set("Authorization", "Bearer " + token)
          });
        }

        if (!request.headers.has("Content-Type")) {
          request = request.clone({
            headers: request.headers.set(
              "Content-Type",
              "application/x-www-form-urlencoded"
            )
          });
        }

        // this.showLoader();
        return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do nothing for now
            }

            // this.hideLoader();
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            const status = error.status;
            const reason =
              error && error.error.reason ? error.error.reason : "";

            // this.hideLoader();
            // this.loadingService.dismiss();
            this.presentAlert(status, reason);
            return throwError(error);
          })
        );
    
    this.showLoader();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("event--->>>", event);
        }
        this.hideLoader();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.hideLoader();
        return throwError(error);
      })
    );
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

  async presentAlert(status ,reason) {
    let msg = '';
    if(status == 0){
      msg = 'No Internet Connection!'
      this.loadingService.dismiss();
    }else{
      msg = "Something went wrong please try again !"
      this.loadingService.dismiss();
    }
    const alert = await this.alertController.create({
      header:"Error",
     /*  subHeader: "Subtitle", */
      message: msg,
      buttons: ["OK"]
    });

    await alert.present();
  }
}
