import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndonesiaPageRoutingModule } from './indonesia-routing.module';

import { IndonesiaPage } from './indonesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndonesiaPageRoutingModule
  ],
  declarations: [IndonesiaPage]
})
export class IndonesiaPageModule {}
