import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeePopoverPageRoutingModule } from './fee-popover-routing.module';

import { FeePopoverPage } from './fee-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeePopoverPageRoutingModule
  ],
  declarations: [FeePopoverPage]
})
export class FeePopoverPageModule {}
