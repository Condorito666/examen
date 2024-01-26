import { Component, OnInit } from '@angular/core';
import homeData from './../../assets/data/home.json';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
// import { SettingModalPage } from '../setting-modal/setting-modal.page';
// import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { Subject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1.2s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('.4s ease-in', style({ opacity: 0 })),
  ]),
]);

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  animations: [fadeAnimation],
})
export class TabsPage implements OnInit {
  categories = [];
  highlights = [];
  featured = [];

  constructor(
    private modalCtrl: ModalController // private routerOutlet: RouterOutlet
  ) {}
  ngOnInit() {
    // para mostrar animacione sd eesqueleto tenemos el timer mientras no consumamos apis
    setTimeout(() => {
      this.categories = homeData.categories;
      this.highlights = homeData.highlights;
      this.featured = homeData.featured;
    }, 2000);
  }

  //header
  activeCat = 0;

  changeCategory(cat) {
    this.activeCat = cat;
    this.categories = [];
    this.highlights = [(this.featured = [])];
    setTimeout(() => {
      this.categories = homeData.categories;
      this.highlights = homeData.highlights;
      this.featured = homeData.featured;
    }, 2000);
  }

  // conexion directa con la pagina padre
  // para esto le pasamos un subject al modal que creamos y
  // estando suscrito al sujeto podemos gatillar en 2do Plano
  // changeCategory()
  // async openSettings() {
  //   const catSubject = new Subject();

  //   const modal = await this.modalCtrl.create({
  //     component: SettingModalPage,
  //     breakpoints: [0, 0.35, 0.5],
  //     cssClass: 'dark-backdrop',
  //     initialBreakpoint: 0.5,
  //     handle: true,
  //     componentProps: { catSubject },
  //   });

  //   await modal.present();

  //   catSubject.subscribe((cat) => {
  //     this.changeCategory(cat);
  //   });

  //   modal.onDidDismiss().then(() => {
  //     catSubject.unsubscribe();
  //   });
  // }

  // async openFilters() {
  //   const modal = await this.modalCtrl.create({
  //     component: FilterModalPage,
  //     presentingElement: document.getElementById('root-router'),
  //   });

  //   await modal.present();
  // }
}
