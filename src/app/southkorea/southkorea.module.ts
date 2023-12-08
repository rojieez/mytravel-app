import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthkoreaPageRoutingModule } from './southkorea-routing.module';

import { SouthkoreaPage } from './southkorea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthkoreaPageRoutingModule
  ],
  declarations: [SouthkoreaPage]
})
export class SouthkoreaPageModule {}
