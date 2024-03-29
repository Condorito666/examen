import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }

}
