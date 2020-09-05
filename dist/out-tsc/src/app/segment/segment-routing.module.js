import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SegmentPage } from './segment.page';
const routes = [
    {
        path: '',
        component: SegmentPage
    }
];
let SegmentPageRoutingModule = /** @class */ (() => {
    let SegmentPageRoutingModule = class SegmentPageRoutingModule {
    };
    SegmentPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SegmentPageRoutingModule);
    return SegmentPageRoutingModule;
})();
export { SegmentPageRoutingModule };
//# sourceMappingURL=segment-routing.module.js.map