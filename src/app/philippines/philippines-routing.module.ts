import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilippinesPage } from './philippines.page';

const routes: Routes = [
  {
    path: '',
    component: PhilippinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilippinesPageRoutingModule {}
