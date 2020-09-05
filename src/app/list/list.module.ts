import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { TranslateModule } from '@ngx-translate/core'; // ---- add this

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     TranslateModule.forChild(), // add this 
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
