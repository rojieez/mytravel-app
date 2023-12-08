import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthkoreaPage } from './southkorea.page';

const routes: Routes = [
  {
    path: '',
    component: SouthkoreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthkoreaPageRoutingModule {}
