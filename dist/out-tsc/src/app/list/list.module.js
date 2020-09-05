import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ListPage } from './list.page';
let ListPageModule = /** @class */ (() => {
    let ListPageModule = class ListPageModule {
    };
    ListPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: ListPage
                    }
                ])
            ],
            declarations: [ListPage]
        })
    ], ListPageModule);
    return ListPageModule;
})();
export { ListPageModule };
//# sourceMappingURL=list.module.js.map