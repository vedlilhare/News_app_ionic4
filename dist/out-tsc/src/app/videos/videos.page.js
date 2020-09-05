import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ViewvideoPage } from '../viewvideo/viewvideo.page';
let VideosPage = /** @class */ (() => {
    let VideosPage = class VideosPage {
        constructor(videoPlayer, modalCtrl) {
            this.videoPlayer = videoPlayer;
            this.modalCtrl = modalCtrl;
        }
        ngOnInit() {
        }
        playVideoLocal() {
            this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
                console.log('video completed');
            }).catch(err => {
                console.log(err);
            });
        }
        viewVideo() {
            return __awaiter(this, void 0, void 0, function* () {
                const modal = yield this.modalCtrl.create({
                    component: ViewvideoPage,
                    componentProps: { url: 'https://www.youtube.com/embed/zewyvQEqsS4?autoplay=1&cc_load_policy=1' },
                    cssClass: 'viewVideoModal'
                });
                return modal.present();
            });
        }
        playVideoHosted() {
            this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
                console.log('video completed');
            }).catch(err => {
                console.log(err);
            });
        }
    };
    VideosPage = __decorate([
        Component({
            selector: 'app-videos',
            templateUrl: './videos.page.html',
            styleUrls: ['./videos.page.scss'],
        }),
        __metadata("design:paramtypes", [VideoPlayer, ModalController])
    ], VideosPage);
    return VideosPage;
})();
export { VideosPage };
//# sourceMappingURL=videos.page.js.map