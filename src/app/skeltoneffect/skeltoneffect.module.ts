import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeltoneffectPageRoutingModule } from './skeltoneffect-routing.module';

import { SkeltoneffectPage } from './skeltoneffect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeltoneffectPageRoutingModule
  ],
  declarations: [SkeltoneffectPage]
})
export class SkeltoneffectPageModule {}
