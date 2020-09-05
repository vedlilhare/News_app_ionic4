import { Component, Inject } from "@angular/core";
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
import {
  ToastController,
  PopoverController,
  LoadingController,
  MenuController
} from "@ionic/angular";
import { ThemePage } from "../theme/theme.page";
import { Storage } from "@ionic/storage";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  articles;
  filterData = []; //Store filtered data
  public searchTerm: string = "";

  constructor(
    private httpService: HttpService,
    private loadingService: LoadingService,
    @Inject(DOCUMENT) private document: Document,
    public toastController: ToastController,
    private popoverController: PopoverController,
    public loadingController: LoadingController,
    public menuCtrl: MenuController,
    public storage: Storage
  ) {
    storage.get("theme").then(cssText => {
      // <--- GET SAVED THEME
      this.setGlobalCSS(cssText);
    });

    this.menuCtrl.enable(true);

  }

  setFilteredItems(searchTerm) {
    this.filterData = this.articles.filter(location => {
      return (
        location.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      );
    });
  }

  filterItems(searchTerm) {
    return this.articles.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  private setGlobalCSS(css: string) {
    this.document.documentElement.style.cssText = css;
  }

  ionViewDidEnter() {
    this.loadingService.present();
    this.httpService.getNews().subscribe(data => {
      this.loadingService.dismiss();
      this.articles = data["articles"];
      this.filterData = this.articles;
      console.log(this.articles.length, "length");
    });
  }

  doRefresh(event) {
    this.searchTerm = "";
    if (this.articles.length > 20) {
      setTimeout(() => {
        this.presentToast();
        event.target.complete();
      }, 1000);
    } else {
      this.ionViewDidEnter();
      console.log("Async operation has ended");
      event.target.complete();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "No new data available",
      duration: 1500,
      position: "top"
    });
    toast.present();
  }

  async theme(ev: any) {
    const popover = await this.popoverController.create({
      component: ThemePage,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait..."
    });
    return loading.present();
  }
}
