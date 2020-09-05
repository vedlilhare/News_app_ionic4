import { __decorate, __metadata } from "tslib";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { MenuController, Platform, ToastController, IonRouterOutlet, ActionSheetController, PopoverController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
let AppComponent = /** @class */ (() => {
    let AppComponent = class AppComponent {
        constructor(platform, splashScreen, authenticationService, navCtrl, menuCtrl, menu, router, toastCtrl, actionSheetCtrl, popoverCtrl, modalCtrl, statusBar) {
            this.platform = platform;
            this.splashScreen = splashScreen;
            this.authenticationService = authenticationService;
            this.navCtrl = navCtrl;
            this.menuCtrl = menuCtrl;
            this.menu = menu;
            this.router = router;
            this.toastCtrl = toastCtrl;
            this.actionSheetCtrl = actionSheetCtrl;
            this.popoverCtrl = popoverCtrl;
            this.modalCtrl = modalCtrl;
            this.statusBar = statusBar;
            this.lastTimeBackPress = 0;
            this.timePeriodToExit = 2000;
            this.appPages = [
                {
                    title: 'Home',
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: 'Business',
                    url: '/list/business',
                    icon: 'create'
                },
                {
                    title: 'Sports',
                    url: '/list/sports',
                    icon: 'football'
                },
                {
                    title: 'Entertainment',
                    url: '/list/entertainment',
                    icon: 'thumbs-up'
                },
                {
                    title: 'Health',
                    url: '/list/health',
                    icon: 'shirt'
                },
                {
                    title: 'Science',
                    url: '/list/science',
                    icon: 'planet'
                },
                {
                    title: 'Technology',
                    url: '/list/technology',
                    icon: 'flower'
                },
                {
                    title: 'Videos',
                    url: '/videos',
                    icon: 'videocam'
                },
                {
                    title: 'segment',
                    url: '/segment',
                    icon: 'card'
                },
                {
                    title: 'My Profile',
                    url: '/profile',
                    icon: 'person'
                }
            ];
            this.initializeApp();
        }
        initializeApp() {
            this.platform.ready().then(() => {
                this.statusBar.overlaysWebView(false);
                let userid = localStorage.getItem('userid');
                if (userid) {
                    this.menuCtrl.enable(true);
                    this.navCtrl.navigateRoot(['home']);
                    let TIME_IN_MS = 500;
                    setTimeout(() => {
                        this.splashScreen.hide();
                    }, TIME_IN_MS);
                }
                else {
                    this.navCtrl.navigateRoot(['login']);
                    let TIME_IN_MS = 500;
                    setTimeout(() => {
                        this.splashScreen.hide();
                    }, TIME_IN_MS);
                }
                // set status bar to white
                this.statusBar.backgroundColorByHexString('#fff');
                this.statusBar.styleDefault();
                this.setAndroidBackButtonBehavior();
            });
        }
        setAndroidBackButtonBehavior() {
            if (this.platform.is('android')) {
                this.platform.backButton.subscribe(() => {
                    if (window.location.pathname == "/home" || window.location.pathname == "/login") {
                        navigator['app'].exitApp();
                    }
                });
            }
        }
        logout() {
            this.authenticationService.logout();
        }
    };
    __decorate([
        ViewChildren(IonRouterOutlet),
        __metadata("design:type", QueryList)
    ], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        }),
        __metadata("design:paramtypes", [Platform,
            SplashScreen,
            AuthenticationService,
            NavController,
            MenuController,
            MenuController,
            Router,
            ToastController,
            ActionSheetController,
            PopoverController,
            ModalController,
            StatusBar])
    ], AppComponent);
    return AppComponent;
})();
export { AppComponent };
//# sourceMappingURL=app.component.js.map