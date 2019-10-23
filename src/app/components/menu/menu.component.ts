import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/data/menu.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(public menService: MenuService) { }

  ngOnInit() {
    this.componentes = this.menService.returnMenu();
  }

  getMenui() {
    console.log('staua menu');
  }

}
