import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  since: string = 'Hello';
  title: string = null;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      }
    );
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert using multiple',
        subHeader: 'SubHeader',
        message: 'Message <strong> Hi! </strong>',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: '',
            handler: (value) => {
              console.log('confirm cancel');
            }
          },
          {
            text: 'ok',
            handler: () => {
              console.log('confirm ok');
            }
          }
        ]
      }
    );
    await alert.present();
  }

  async alertConfirm() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Confirm!',
        message: 'Message',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log('Confirmed!');
            }
          }
        ]
      }
    );
    await alert.present();
  }

  async alertPrompt() {
    const alert = await this.alertCtrl.create(
      {
        header: 'prompt',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            placeholder: 'placeholder 1'
          },
          {
            name: 'name2',
            type: 'text',
            id: 'name2-id',
            value: 'hello',
            placeholder: 'placeholder 2'
          },
          {
            name: 'name3',
            type: 'url',
            placeholder: 'Favorite site',
            value: 'http://ionicframework.com'
          },
          {
            name: 'name4',
            type: 'date',
            min: '2017-03-01',
            max: '2020-04-04'
          },
          {
            name: 'name5',
            type: 'date'
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
          },
          {
            name: 'name7',
            type: 'number'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      }
    );
    await alert.present();
  }


  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertCheckbox() {
    const alert = await this.alertCtrl.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  async alertToast() {
    const toast = await this.alertCtrl.create(
      {
        backdropDismiss: false,
        header: 'Input your name',
        inputs: [
          {
            type: 'text',
            placeholder: 'Input your name',
            name: 'yourName',
            min: 5
          }
        ],
        buttons: [
          {
            text: 'cancel',
            role: 'cancel',
            handler: () => {
              console.log('You have canceled');
            }
          },
          {
            text: 'ok',
            handler: data => {
              console.log('input your name', data);
              this.title = data.yourName;
            }
          }
        ]
      }
    );
    await toast.present();
  }

}
