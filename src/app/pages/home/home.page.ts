import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'appstore',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'american-football',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check box',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'Date time',
      redirectTo: '/date-time'
    },
    {
      icon: 'calendar',
      name: 'Ion fab',
      redirectTo: '/ion-fab'
    },
    {
      icon: 'calendar',
      name: 'Using services',
      redirectTo: '/test-client'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
