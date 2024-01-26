import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AnimationController,
  NavController,
  ToastController,
} from '@ionic/angular';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  total = 0;
  progress = 0;

  @ViewChild('orderbar', { read: ElementRef }) orderBar: ElementRef;
  @ViewChild('successbar', { read: ElementRef }) successBar: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animationCtrl: AnimationController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.total = this.router.getCurrentNavigation().extras.state['sum'];
      }
    });
  }

  ngOnInit() {}

  startOrder() {
    const barMove = this.animationCtrl
      .create('move')
      .addElement(this.orderBar.nativeElement)
      .fromTo('opacity', 1, 0)
      .fromTo('left', 0, '-100vw');

    const success = this.animationCtrl
      .create('success')
      .addElement(this.successBar.nativeElement)
      .fromTo('left', '*', 0)
      .afterClearStyles(['success-bar']);

    const wrapper = this.animationCtrl
      .create('wrapper')
      .duration(400)
      .easing('ease-in')
      .addAnimation([barMove, success])
      .play();

    wrapper.then(() => {
      this.fakeProgress();
    });
  }
  fakeProgress() {
    if (this.progress >= 1) {
      this.close();
      return;
    }

    setTimeout(() => {
      this.progress += 0.01;
      this.fakeProgress();
    }, 20);
  }
  async close() {
    const toast = await this.toastCtrl.create({
      message: 'Tu orden fue Aceptadaaaa',
      duration: 30000,
    });
    await toast.present();

    this.navCtrl.setDirection('root');
    this.router.navigateByUrl('/tabs');
  }
}
