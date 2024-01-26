import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingModalPage } from './setting-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SettingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingModalPageRoutingModule {}
