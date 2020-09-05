import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpConfigInterceptor } from './services/httpConfig.interceptor';
import { ThemeService } from './services/theme.service';
import { ThemePageModule } from './theme/theme.module';
import { IonicStorageModule } from '@ionic/storage';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ViewvideoPageModule } from './viewvideo/viewvideo.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = /** @class */ (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                IonicStorageModule.forRoot(),
                AppRoutingModule,
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    }
                }),
                ThemePageModule,
                ViewvideoPageModule,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                ThemeService,
                VideoPlayer,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpConfigInterceptor,
                    multi: true
                }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
export { AppModule };
//# sourceMappingURL=app.module.js.map