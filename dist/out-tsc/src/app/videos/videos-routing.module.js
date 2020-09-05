import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideosPage } from './videos.page';
const routes = [
    {
        path: '',
        component: VideosPage
    }
];
let VideosPageRoutingModule = /** @class */ (() => {
    let VideosPageRoutingModule = class VideosPageRoutingModule {
    };
    VideosPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], VideosPageRoutingModule);
    return VideosPageRoutingModule;
})();
export { VideosPageRoutingModule };
//# sourceMappingURL=videos-routing.module.js.map