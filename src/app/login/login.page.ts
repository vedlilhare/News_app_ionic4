import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
import {
  ToastController,
  LoadingController,
  MenuController,
  NavController,
  ModalController
} from "@ionic/angular";

import { TranslateConfigService } from '../services/translate-config.service';
import { LanguagePage } from '../language/language.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   selectedLanguage:string;
   msg: string;

  constructor(private _translate: TranslateService,private translateConfigService: TranslateConfigService,private authService: AuthenticationService ,public navCtrl: NavController, public menuCtrl: MenuController, public toastController: ToastController,
    public loadingController: LoadingController, private httpService: HttpService,
    private loadingService: LoadingService,public modalController: ModalController) {

      }


 
  ngOnInit() {
    
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();     
    this.menuCtrl.enable(false);
  }

  ionViewDidEnter() {
    //this.loadingService.present();
    // this.httpService.gettoken().subscribe(data => {
    //   //this.loadingService.dismiss();
      
    //   localStorage.setItem("token",data.results);

    //   console.log(data.results, "data"); 
    // });
  }


  login() {
    // this.authService.login();
    this.navCtrl.navigateRoot(['home']);
    localStorage.setItem('userid','10846');
  }


async selectlang(){
 const modal = await this.modalController.create({
 component: LanguagePage
 });
  await modal.present();


modal.onDidDismiss().then(data=>{

if(data.data != null){
this.presentToast();
}

})

}


 async presentToast() {

this._translate.get('alert_success').subscribe((res: string) => {
      this.msg = res;
    });

    const toast = await this.toastController.create({
      message: this.msg,
     cssClass: "toast-mess_success",
      duration: 2000
    });
    toast.present();
  }


}
