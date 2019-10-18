import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }


  loadData(event) {
    console.log('loading data');
    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
      }

      const newArr = Array(50);
      this.data.push(...newArr);
    }, 3000);
    // event.target.complete();
  }

}
