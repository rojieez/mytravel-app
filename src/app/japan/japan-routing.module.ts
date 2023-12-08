import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JapanPage } from './japan.page';

const routes: Routes = [
  {
    path: '',
    component: JapanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JapanPageRoutingModule {}
