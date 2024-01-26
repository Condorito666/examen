import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeHeaderDirective } from './fade-header.directive';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  declarations: [FadeHeaderDirective, ParallaxDirective],
  imports: [CommonModule],
  exports: [FadeHeaderDirective, ParallaxDirective],
})
export class SharedDirectivesModule {}
