import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePageRoutingModule } from './language-routing.module';

import { LanguagePage } from './language.page';
import { TranslateModule } from '@ngx-translate/core'; // ---- add this

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagePageRoutingModule,
     TranslateModule.forChild() // add this 
  ],
  declarations: [LanguagePage]
})
export class LanguagePageModule {}
