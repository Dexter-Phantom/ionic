import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3b5a575db2d44191a308a3c068706f5a';

  constructor(private http: HttpClient) { }

  getTop() {
    return this.http.get(this.url);
  }

}
