import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilippinesPageRoutingModule } from './philippines-routing.module';

import { PhilippinesPage } from './philippines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilippinesPageRoutingModule
  ],
  declarations: [PhilippinesPage]
})
export class PhilippinesPageModule {}
