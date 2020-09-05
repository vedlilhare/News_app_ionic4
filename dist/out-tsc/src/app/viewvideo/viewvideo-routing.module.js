import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewvideoPage } from './viewvideo.page';
const routes = [
    {
        path: '',
        component: ViewvideoPage
    }
];
let ViewvideoPageRoutingModule = /** @class */ (() => {
    let ViewvideoPageRoutingModule = class ViewvideoPageRoutingModule {
    };
    ViewvideoPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ViewvideoPageRoutingModule);
    return ViewvideoPageRoutingModule;
})();
export { ViewvideoPageRoutingModule };
//# sourceMappingURL=viewvideo-routing.module.js.map