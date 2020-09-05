import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardtemplatePage } from './cardtemplate.page';

const routes: Routes = [
  {
    path: '',
    component: CardtemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardtemplatePageRoutingModule {}
