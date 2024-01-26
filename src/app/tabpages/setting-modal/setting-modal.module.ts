import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingModalPageRoutingModule } from './setting-modal-routing.module';

import { SettingModalPage } from './setting-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingModalPageRoutingModule
  ],
  declarations: [SettingModalPage]
})
export class SettingModalPageModule {}
