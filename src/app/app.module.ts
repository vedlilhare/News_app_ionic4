import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';
import { HttpConfigInterceptor } from './services/httpConfig.interceptor';
import { ThemeService } from './services/theme.service';
import { ThemePageModule } from './theme/theme.module';
import { IonicStorageModule } from '@ionic/storage';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ViewvideoPageModule } from './viewvideo/viewvideo.module'
import { LanguagePageModule } from './language/language.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './services/translate-config.service';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({ // <--- add this
      loader: { // <--- add this 
        provide: TranslateLoader, // <--- add this
        useFactory: (createTranslateLoader),  // <--- add this
        deps: [HttpClient] // <--- add this
      } // <--- add this
    }),
    ThemePageModule,
    ViewvideoPageModule,
    LanguagePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ThemeService,
    TranslateConfigService,
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
export class AppModule {}
