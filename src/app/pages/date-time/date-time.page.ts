import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  dayNow: Date = new Date();
  dateMin: string = '1989-06-04';

  constructor() { }

  ngOnInit() {
  }

  getNewDate = (event) => {
    console.log(event);
  }
}
