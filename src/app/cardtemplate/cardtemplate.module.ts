import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardtemplatePageRoutingModule } from './cardtemplate-routing.module';

import { CardtemplatePage } from './cardtemplate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardtemplatePageRoutingModule
  ],
  declarations: [CardtemplatePage]
})
export class CardtemplatePageModule {}
