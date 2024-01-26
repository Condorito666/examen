import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-setting-modal',
  templateUrl: './setting-modal.page.html',
  styleUrls: ['./setting-modal.page.scss'],
})
export class SettingModalPage implements OnInit {
  activeCat = 0;
  @Input('catSubject') catSubject: BehaviorSubject<number>;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  changeCategory(cat) {
    this.activeCat = cat;
    this.catSubject.next(cat);
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
