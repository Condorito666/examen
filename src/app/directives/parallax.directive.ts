import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  @Input('appParallax') imageEl: any;
  private moveImage: number;
  private scaleImage: number;
  constructor(private renderer: Renderer2, private domCtrl: DomController) {}
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop = $event.detail.scrollTop;
    if (scrollTop > 0) {
      // Use higher values to move the image out faster
      // Use lower values to move it out slower
      this.moveImage = scrollTop / 2;
      this.scaleImage = 1;
    } else {
      // +1 at the end as the other part can become 0
      // and the image would disappear
      this.scaleImage = -scrollTop / 300 + 1;
      this.moveImage = scrollTop / 1.6;
    }
    this.domCtrl.write(() => {
      this.renderer.setStyle(
        this.imageEl,
        'transform',
        `translateY(${this.moveImage}px) scale(${this.scaleImage})`
      );
    });
  }
}
