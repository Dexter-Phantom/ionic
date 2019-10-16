import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {


  // tslint:disable-next-line:max-line-length
  apiGetCoin: string = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-16&sortBy=publishedAt&apiKey=3b5a575db2d44191a308a3c068706f5a';

  constructor(private http: HttpClient) { }

  getInfoCoin = () => {
    return this.http.get(this.apiGetCoin);
  }
}
