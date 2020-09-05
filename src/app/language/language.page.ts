import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  MenuController,
  NavController,
  ModalController,
  ActionSheetController
} from "@ionic/angular";

import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

 selectedLanguage:string;

  constructor(public menuCtrl: MenuController, public actionSheetController: ActionSheetController,public viewCtrl: ModalController ,private translateConfigService: TranslateConfigService,) { }

  languageChanged(){
  	localStorage.setItem("lang",this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);
    this.viewCtrl.dismiss(this.selectedLanguage);

  }

  ngOnInit() {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
     console.log('language page', this.selectedLanguage);
    this.menuCtrl.enable(false);
  }


  closemodal(){

this.viewCtrl.dismiss(null);

  }


}
