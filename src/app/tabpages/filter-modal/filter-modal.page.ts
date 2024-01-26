import { Component, OnInit } from '@angular/core';
import categoryData from '../../../assets/data/categories.json';
import { ModalController } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {
  categories = <{ selected: boolean; name; count }[]>[];
  hasChanges = false;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.categories = categoryData.map((data) => {
      return { selected: false, ...data };
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkboxChanged() {
    Haptics.impact({ style: ImpactStyle.Light });
    this.hasChanges =
      this.categories.filter((item) => item.selected).length > 0;
  }

  clear() {
    this.categories = this.categories.map((item) => {
      item.selected = false;
      return item;
    });
  }
}
