import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndonesiaPage } from './indonesia.page';

const routes: Routes = [
  {
    path: '',
    component: IndonesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndonesiaPageRoutingModule {}
