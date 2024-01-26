import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  ElementRef,
  RendererStyleFlags2,
} from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]',
})
export class FadeHeaderDirective {
  @Input('appFadeHeader') overlay: any;
  content: ElementRef;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
    private elRef: ElementRef
  ) {}

  ngAfterViewInit() {
    this.content = this.elRef.nativeElement;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;

    let newPosition = scrollTop;
    let newOpacity = newPosition / 100;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.overlay, 'opacity', newOpacity);

      if (scrollTop > 100) {
        this.renderer.setStyle(
          this.content,
          'background',
          '#fff',
          RendererStyleFlags2.DashCase
        );
      } else {
        this.renderer.setStyle(
          this.content,
          'background',
          'rgb(0, 126, 137)',
          RendererStyleFlags2.DashCase
        );
      }
    });
  }
}
