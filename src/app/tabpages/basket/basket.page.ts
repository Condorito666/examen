import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FeePopoverPage } from '../fee-popover/fee-popover.page';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage {
  cart = [];
  sum = 0;
  tip = 0;
  deliveryFee = 2.5;
  serviceFee = 0.65;
  cartItems = [];

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private popoverController: PopoverController
  ) {
    // esto es para traer el carrito a la pagina y transformar el array en objetos
    //para, si tenemos duplicados poder renderarlos correctamente
    //por lo que creamos un objeto donde guardamos cada id de meal(comida) y su cantidad
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cart = this.router.getCurrentNavigation().extras.state['cart'];
        this.sum = this.cart.reduce((val, item) => (val += item.price), 0);

        const items = {};
        for (let item of this.cart) {
          if (!items[item.id]) {
            items[item.id] = {
              amount: 1,
              ...item,
            };
          } else {
            items[item.id].amount += 1;
          }
        }

        for (const [key, value] of Object.entries(items)) {
          this.cartItems.push(value);
        }
      }
    });
  }
  addTip() {
    this.tip += 1;
  }

  removeTip() {
    if (this.tip > 0) {
      this.tip -= 1;
    }
  }
  remove(toRemove) {
    this.cart = this.cart.filter((item) => item.id != toRemove.id);
    this.sum = this.cart.reduce((val, item) => (val += item.price), 0);
    this.cartItems = this.cartItems.filter((item) => item.id != toRemove.id);
  }
  async feeinfo(ev: any) {
    const popover = await this.popoverController.create({
      component: FeePopoverPage,
      event: ev,
    });
    await popover.present();
  }
}
