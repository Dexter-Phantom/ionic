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

}

interface Heroe {
  name: string;
}