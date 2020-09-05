import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeltoneffectPage } from './skeltoneffect.page';

const routes: Routes = [
  {
    path: '',
    component: SkeltoneffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeltoneffectPageRoutingModule {}
