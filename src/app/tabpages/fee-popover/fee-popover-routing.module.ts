import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeePopoverPage } from './fee-popover.page';

const routes: Routes = [
  {
    path: '',
    component: FeePopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeePopoverPageRoutingModule {}
