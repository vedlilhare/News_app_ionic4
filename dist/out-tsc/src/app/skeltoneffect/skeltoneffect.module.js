import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SkeltoneffectPageRoutingModule } from './skeltoneffect-routing.module';
import { SkeltoneffectPage } from './skeltoneffect.page';
let SkeltoneffectPageModule = /** @class */ (() => {
    let SkeltoneffectPageModule = class SkeltoneffectPageModule {
    };
    SkeltoneffectPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SkeltoneffectPageRoutingModule
            ],
            declarations: [SkeltoneffectPage]
        })
    ], SkeltoneffectPageModule);
    return SkeltoneffectPageModule;
})();
export { SkeltoneffectPageModule };
//# sourceMappingURL=skeltoneffect.module.js.map