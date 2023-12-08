import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JapanPageRoutingModule } from './japan-routing.module';

import { JapanPage } from './japan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JapanPageRoutingModule
  ],
  declarations: [JapanPage]
})
export class JapanPageModule {}
