import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  urlState: string = 'assets/avatar/season_fortnite.jpg';

  constructor() { }

  ngOnInit() {
  }

}
