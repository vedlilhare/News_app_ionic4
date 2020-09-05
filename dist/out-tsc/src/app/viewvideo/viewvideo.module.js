import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewvideoPageRoutingModule } from './viewvideo-routing.module';
import { ViewvideoPage } from './viewvideo.page';
let ViewvideoPageModule = /** @class */ (() => {
    let ViewvideoPageModule = class ViewvideoPageModule {
    };
    ViewvideoPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ViewvideoPageRoutingModule
            ],
            declarations: [ViewvideoPage]
        })
    ], ViewvideoPageModule);
    return ViewvideoPageModule;
})();
export { ViewvideoPageModule };
//# sourceMappingURL=viewvideo.module.js.map