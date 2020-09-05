
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-viewvideo',
  templateUrl: './viewvideo.page.html',
  styleUrls: ['./viewvideo.page.scss'],
})
export class ViewvideoPage implements OnInit {
  public videourl;
  constructor(  private activeRoute:ActivatedRoute,
    public modalCtrl:ModalController,
    public navParms:NavParams,
    public  sanitizer:DomSanitizer) { 
      console.log(' this.navParms', this.navParms.data.url)
      this.videourl = this.navParms.data.url
     console.log(this.videourl)
    }

  ngOnInit() {
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }
}
