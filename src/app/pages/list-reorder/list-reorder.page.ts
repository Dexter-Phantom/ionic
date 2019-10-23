import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})

export class ListReorderPage implements OnInit {

  heroes: Heroe[] = [
    {
      name: 'Aquaman'
    },
    {
      name: 'The flash'
    },
    {
      name: 'Superman'
    },
    {
      name: 'Wonder woman'
    },
    {
      name: 'Super girl'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  reorder = (event) => {
    console.log(event);
    const itemMove = this.heroes.splice(event.detail.from, 1)[0];
    console.log(itemMove, 'move');
    this.heroes.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
  }

  valid = () => {
    console.log(this.heroes);
  }

}

interface Heroe {
  name: string;
}
