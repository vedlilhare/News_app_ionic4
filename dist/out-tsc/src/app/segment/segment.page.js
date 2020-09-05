import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
import { ToastController, PopoverController, LoadingController } from "@ionic/angular";
let SegmentPage = /** @class */ (() => {
    let SegmentPage = class SegmentPage {
        constructor(httpService, loadingService, toastController, popoverController, loadingController) {
            this.httpService = httpService;
            this.loadingService = loadingService;
            this.toastController = toastController;
            this.popoverController = popoverController;
            this.loadingController = loadingController;
            this.data = 'health';
        }
        ngOnInit() {
        }
        segmentChanged(ev) {
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
    };
    SegmentPage = __decorate([
        Component({
            selector: 'app-segment',
            templateUrl: './segment.page.html',
            styleUrls: ['./segment.page.scss'],
        }),
        __metadata("design:paramtypes", [HttpService,
            LoadingService,
            ToastController,
            PopoverController,
            LoadingController])
    ], SegmentPage);
    return SegmentPage;
})();
export { SegmentPage };
//# sourceMappingURL=segment.page.js.map