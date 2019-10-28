import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/sliding/users.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {

  @ViewChild('lista', {static: true}) list: IonList;

  usuarios: Observable<any>;

  constructor(private dataServices: UsersService) { }

  ngOnInit() {
    this.usuarios = this.dataServices.getUser();
  }

  favorite(id) {
    console.log(id);
    this.list.closeSlidingItems(); // close automatic when you touching the button
  }

}
