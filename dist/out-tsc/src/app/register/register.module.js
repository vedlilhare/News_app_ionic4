import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
let RegisterPageModule = /** @class */ (() => {
    let RegisterPageModule = class RegisterPageModule {
    };
    RegisterPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RegisterPageRoutingModule
            ],
            declarations: [RegisterPage]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
})();
export { RegisterPageModule };
//# sourceMappingURL=register.module.js.map