import { Component, OnInit } from '@angular/core';
import offerData from '../../../assets/data/offers.json';
import categoryData from '../../../assets/data/categories.json';
import { ModalController } from '@ionic/angular';
import { CategoryModalPage } from '../category-modal/category-modal.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  offers = offerData;
  buttons: Array<{ name; selected?; count? }> = [
    { name: 'Sort', selected: false },
    { name: 'Offers', selected: false },
    { name: 'Dietary', selected: false },
    ...categoryData.map((item) => {
      item['selected'] = false;
      return item;
    }),
  ];
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async selectBtn(index) {
    const item = this.buttons[index];
    if (!item.count) {
      const modal = await this.modalController.create({
        component: CategoryModalPage,
        breakpoints: [0, 0.35, 0.5],
        cssClass: 'dark-backdrop',
        initialBreakpoint: 0.35,
      });

      await modal.present();
    } else {
      item.selected = !item.selected;
    }
  }
}
