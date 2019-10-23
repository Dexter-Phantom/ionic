import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loading: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loading.create(
      {
        message: 'Hello',
        duration: 2000
      }
    );
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
    console.log('role', role, 'data', data);
  }


}
