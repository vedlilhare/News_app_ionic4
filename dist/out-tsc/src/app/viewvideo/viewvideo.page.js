import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
let ViewvideoPage = /** @class */ (() => {
    let ViewvideoPage = class ViewvideoPage {
        constructor(activeRoute, modalCtrl, navParms, sanitizer) {
            this.activeRoute = activeRoute;
            this.modalCtrl = modalCtrl;
            this.navParms = navParms;
            this.sanitizer = sanitizer;
            console.log(' this.navParms', this.navParms.data.url);
            this.videourl = this.navParms.data.url;
            console.log(this.videourl);
        }
        ngOnInit() {
        }
        dismiss() {
            this.modalCtrl.dismiss();
        }
    };
    ViewvideoPage = __decorate([
        Component({
            selector: 'app-viewvideo',
            templateUrl: './viewvideo.page.html',
            styleUrls: ['./viewvideo.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ModalController,
            NavParams,
            DomSanitizer])
    ], ViewvideoPage);
    return ViewvideoPage;
})();
export { ViewvideoPage };
//# sourceMappingURL=viewvideo.page.js.map