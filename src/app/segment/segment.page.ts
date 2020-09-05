import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
import {
  ToastController,
  PopoverController,
  LoadingController
} from "@ionic/angular";
@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
articles;

 constructor(private httpService: HttpService,
  private loadingService: LoadingService,
  public toastController: ToastController,
  private popoverController: PopoverController,
  public loadingController: LoadingController,) { }
public data: any = 'health';
  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment button clicked', ev.detail);
    this.data = ev.detail.value;
    this.ionViewDidEnter();

  }

  ionViewDidEnter() {
    this.loadingService.present();
    this.httpService.getcategorynews(this.data).subscribe(data => {
      this.loadingService.dismiss();
      this.articles = data["articles"];
 
      console.log(this.articles.length, "length");
    });
  }
}
