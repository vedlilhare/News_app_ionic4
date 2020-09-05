
import { Router } from '@angular/router';
import {  NavController} from '@ionic/angular';
import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { Events, MenuController, Platform, ToastController, IonRouterOutlet, ActionSheetController, PopoverController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthenticationService } from './services/authentication.service';
import { IRoot } from '../../plugins/cordova-plugin-iroot/www/iroot';
import { TranslateConfigService } from './services/translate-config.service';

declare var IRoot: IRoot;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

appLang: string;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  lastTimeBackPress = 0;
    timePeriodToExit = 2000;

  public appPages = [
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
    }
    ,
    {
      title: 'segment',
      url: '/segment',
      icon: 'card'
    }
    ,
    {
      title: 'My Profile',
      url: '/profile',
      icon: 'person'
    }
    ,
    {
      title: 'Card View',
      url: '/cardtemplate',
      icon: 'card'
    }


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private authenticationService: AuthenticationService,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private menu: MenuController,
    private router: Router,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public translateConfigService: TranslateConfigService,
    private statusBar: StatusBar) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translateConfigService.getDefaultLanguage(); 
        this.statusBar.overlaysWebView(false);
                    let userid = localStorage.getItem('userid');
                    if (userid) {
                      this.menuCtrl.enable(true);
                      this.navCtrl.navigateRoot(['home']);
                      let TIME_IN_MS = 500;
                  setTimeout( () => {
                    this.splashScreen.hide();   
                  }, TIME_IN_MS);
                    } else {
                      this.navCtrl.navigateRoot(['login'] );
                      let TIME_IN_MS = 500;
                      setTimeout( () => {
                        this.splashScreen.hide();   
                      }, TIME_IN_MS);
                    }     
            
            // set status bar to white
            this.statusBar.backgroundColorByHexString('#fff');
            this.statusBar.styleDefault();
        this.setAndroidBackButtonBehavior();
             
    });
  }

  private setAndroidBackButtonBehavior(): void {
    if ( this.platform.is('android')) {
      this.platform.backButton.subscribe(() => {
        if (window.location.pathname == "/home" || window.location.pathname == "/login") {
          navigator['app'].exitApp();
        }
      });
    }
  }

  logout(){
    // localStorage.clear();
     localStorage.setItem('userid','');
    this.authenticationService.logout();

  }


}
