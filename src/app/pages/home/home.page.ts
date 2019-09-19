import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'appstore',
      name: 'action sheet',
      redirectTo: 'action-sheet'
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
