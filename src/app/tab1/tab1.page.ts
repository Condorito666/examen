import { AuthenticationService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import homeData from './../../assets/data/home.json';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { SettingModalPage } from './../tabpages/setting-modal/setting-modal.page';
import { FilterModalPage } from './../tabpages/filter-modal/filter-modal.page';
import { Subject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [fadeAnimation],
})
export class Tab1Page implements OnInit {
  categories = [];
  highlights = [];
  featured = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private modalCtrl: ModalController
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
  async openSettings() {
    const catSubject = new Subject();

    const modal = await this.modalCtrl.create({
      component: SettingModalPage,
      breakpoints: [0, 0.35, 0.5],
      cssClass: 'dark-backdrop',
      initialBreakpoint: 0.5,
      handle: true,
      componentProps: { catSubject },
    });

    await modal.present();

    catSubject.subscribe((cat) => {
      this.changeCategory(cat);
    });

    modal.onDidDismiss().then(() => {
      catSubject.unsubscribe();
    });
  }

  async openFilters() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      presentingElement: document.getElementById('root-router'),
    });

    await modal.present();
  }

  //auth y notas
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
