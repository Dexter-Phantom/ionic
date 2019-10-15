import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  urlState: string = 'assets/avatar/season_fortnite.jpg';
  urlState2: string = 'assets/images/battle_fortnite.png';
  urlState3: string = 'assets/images/Fortnite_battle.png';

  constructor() { }

  ngOnInit() {
  }

}
