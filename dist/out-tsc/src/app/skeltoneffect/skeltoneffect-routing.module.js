import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkeltoneffectPage } from './skeltoneffect.page';
const routes = [
    {
        path: '',
        component: SkeltoneffectPage
    }
];
let SkeltoneffectPageRoutingModule = /** @class */ (() => {
    let SkeltoneffectPageRoutingModule = class SkeltoneffectPageRoutingModule {
    };
    SkeltoneffectPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SkeltoneffectPageRoutingModule);
    return SkeltoneffectPageRoutingModule;
})();
export { SkeltoneffectPageRoutingModule };
//# sourceMappingURL=skeltoneffect-routing.module.js.map