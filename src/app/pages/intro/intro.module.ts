import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IntroPageRoutingModule],
  declarations: [IntroPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntroPageModule {}
