import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import offerData from '../../../assets/data/offers.json';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  segments = [
    'All offers',
    'Up to 50% off',
    'Restaurant picks',
    'Order more, save more',
    'Free items',
    'Meal Deals',
  ];

  offers = offerData

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openFilters(){
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      presentingElement: document.getElementById('root-router')
    })
    await modal.present();
  }
}
