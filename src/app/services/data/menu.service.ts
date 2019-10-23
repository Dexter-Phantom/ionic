import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from 'src/app/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  returnMenu() {
    return this.http.get<Componente[]>('../../../assets/data/menu.json');
  }

}
