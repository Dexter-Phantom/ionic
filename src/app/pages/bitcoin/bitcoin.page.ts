import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {

  bitcoinData: any = [];

  constructor(private bitcoin: BitcoinService) { }

  ngOnInit() {
    this.bitcoin.getInfoCoin().subscribe(
      api => {
        console.log(api);
        this.bitcoinData = api;
       }
    );
  }

}
