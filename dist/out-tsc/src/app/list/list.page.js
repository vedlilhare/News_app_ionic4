import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../services/http.service";
import { LoadingService } from "../services/loading.service";
let ListPage = /** @class */ (() => {
    let ListPage = class ListPage {
        constructor(activatedRoute, httpService, loadingService) {
            this.activatedRoute = activatedRoute;
            this.httpService = httpService;
            this.loadingService = loadingService;
            this.items = [];
        }
        ngOnInit() {
            this.category = this.activatedRoute.snapshot.paramMap.get('category');
            console.log(this.category, 'category');
            this.getcatorynews(this.category);
        }
        getcatorynews(category) {
            this.loadingService.present();
            this.httpService.getcategorynews(category).subscribe(data => {
                if (data) {
                    this.loadingService.dismiss();
                    console.log(data);
                    this.articles = data["articles"];
                }
                else {
                    this.loadingService.dismiss();
                }
            }, (err) => {
                //hideloading
                this.loadingService.dismiss();
            });
        }
    };
    ListPage = __decorate([
        Component({
            selector: 'app-list',
            templateUrl: 'list.page.html',
            styleUrls: ['list.page.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, HttpService, LoadingService])
    ], ListPage);
    return ListPage;
})();
export { ListPage };
//# sourceMappingURL=list.page.js.map