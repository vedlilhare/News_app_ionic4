import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage(){
    // let language = this.translate.getBrowserLang();
    let lang = localStorage.getItem("lang");
    if(lang !== null){
      localStorage.setItem("lang",lang);
    	this.translate.setDefaultLang(lang);
    return lang;
    }else{
      localStorage.setItem("lang",'en');
    	this.translate.setDefaultLang('en');
    return 'en';
    }
    
  }

  setLanguage(setLang) {  	
    this.translate.use(setLang);
  }
}
