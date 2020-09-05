import { __awaiter, __decorate, __metadata, __param } from "tslib";
import { Component, Inject } from "@angular/core";
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
import { ToastController, PopoverController, LoadingController, MenuController } from "@ionic/angular";
import { ThemePage } from "../theme/theme.page";
import { Storage } from "@ionic/storage";
import { DOCUMENT } from "@angular/common";
let HomePage = /** @class */ (() => {
    let HomePage = class HomePage {
        constructor(httpService, loadingService, document, toastController, popoverController, loadingController, menuCtrl, storage) {
            this.httpService = httpService;
            this.loadingService = loadingService;
            this.document = document;
            this.toastController = toastController;
            this.popoverController = popoverController;
            this.loadingController = loadingController;
            this.menuCtrl = menuCtrl;
            this.storage = storage;
            this.filterData = []; //Store filtered data
            this.searchTerm = "";
            storage.get("theme").then(cssText => {
                // <--- GET SAVED THEME
                this.setGlobalCSS(cssText);
            });
            this.menuCtrl.enable(true);
        }
        setFilteredItems(searchTerm) {
            this.filterData = this.articles.filter(location => {
                return (location.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
            });
        }
        filterItems(searchTerm) {
            return this.articles.filter(item => {
                return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }
        setGlobalCSS(css) {
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
            }
            else {
                this.ionViewDidEnter();
                console.log("Async operation has ended");
                event.target.complete();
            }
        }
        presentToast() {
            return __awaiter(this, void 0, void 0, function* () {
                const toast = yield this.toastController.create({
                    message: "No new data available",
                    duration: 1500,
                    position: "top"
                });
                toast.present();
            });
        }
        theme(ev) {
            return __awaiter(this, void 0, void 0, function* () {
                const popover = yield this.popoverController.create({
                    component: ThemePage,
                    event: ev,
                    animated: true,
                    showBackdrop: true
                });
                return yield popover.present();
            });
        }
        presentLoading() {
            return __awaiter(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: "Please Wait..."
                });
                return loading.present();
            });
        }
    };
    HomePage = __decorate([
        Component({
            selector: "app-home",
            templateUrl: "home.page.html",
            styleUrls: ["home.page.scss"]
        }),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [HttpService,
            LoadingService,
            Document,
            ToastController,
            PopoverController,
            LoadingController,
            MenuController,
            Storage])
    ], HomePage);
    return HomePage;
})();
export { HomePage };
//# sourceMappingURL=home.page.js.map