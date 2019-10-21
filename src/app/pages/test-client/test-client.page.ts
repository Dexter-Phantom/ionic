import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-test-client',
  templateUrl: './test-client.page.html',
  styleUrls: ['./test-client.page.scss'],
})
export class TestClientPage implements OnInit {

  business: any = [];

  constructor(private newsServices: NewsService) { }

  ngOnInit() {
    this.newsServices.getTop()
    .subscribe(resp => {
      console.log(resp, 'services');
      this.business = resp;
    });
  }

}
