import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemePage } from './theme.page';
const routes = [
    {
        path: '',
        component: ThemePage
    }
];
let ThemePageRoutingModule = /** @class */ (() => {
    let ThemePageRoutingModule = class ThemePageRoutingModule {
    };
    ThemePageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ThemePageRoutingModule);
    return ThemePageRoutingModule;
})();
export { ThemePageRoutingModule };
//# sourceMappingURL=theme-routing.module.js.map