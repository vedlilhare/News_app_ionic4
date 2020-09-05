import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VideosPageRoutingModule } from './videos-routing.module';
import { VideosPage } from './videos.page';
let VideosPageModule = /** @class */ (() => {
    let VideosPageModule = class VideosPageModule {
    };
    VideosPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                VideosPageRoutingModule
            ],
            declarations: [VideosPage]
        })
    ], VideosPageModule);
    return VideosPageModule;
})();
export { VideosPageModule };
//# sourceMappingURL=videos.module.js.map