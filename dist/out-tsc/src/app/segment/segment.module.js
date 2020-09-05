import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SegmentPageRoutingModule } from './segment-routing.module';
import { SegmentPage } from './segment.page';
let SegmentPageModule = /** @class */ (() => {
    let SegmentPageModule = class SegmentPageModule {
    };
    SegmentPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SegmentPageRoutingModule
            ],
            declarations: [SegmentPage]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
})();
export { SegmentPageModule };
//# sourceMappingURL=segment.module.js.map