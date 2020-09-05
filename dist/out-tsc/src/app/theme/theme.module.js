import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThemePageRoutingModule } from './theme-routing.module';
import { ThemePage } from './theme.page';
let ThemePageModule = /** @class */ (() => {
    let ThemePageModule = class ThemePageModule {
    };
    ThemePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ThemePageRoutingModule
            ],
            declarations: [ThemePage]
        })
    ], ThemePageModule);
    return ThemePageModule;
})();
export { ThemePageModule };
//# sourceMappingURL=theme.module.js.map