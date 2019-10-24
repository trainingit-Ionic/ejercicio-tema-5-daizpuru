import { LoginModalPage } from './../login-modal/login-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      componentProps: {
        'paramID': 123,
        'paramTitle': 'Test Title'
      }
    });
    return await modal.present();
  }

}
