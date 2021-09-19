import { Component } from '@angular/core';
import { CryptoService } from './crypto/crypto.service';
import { Coin } from './coin/coin';
import { COINS } from './coin/coinS';
import { Subscription, interval, config } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style/style.css']
})
export class AppComponent {

  public coins: Coin[] = COINS;

  public jsonCoins: Coin[];

  // total: number = 7050;
  tax: number = 4000;
  balance: number = 0;
  public sortBy = 'xD';
  public sortOrder = 'asc';
  constructor(public dataService: CryptoService, private titleService: Title) { }

  public updateSubscription: Subscription;

  ngOnInit() {
    this.updateCoins()
    this.updateSubscription = interval(60000).subscribe(
      (val) => { this.updateCoins()
    });
  };

  sort(sortBy: string, sortOrder: string) {
    this.sortOrder = sortOrder;
    this.sortBy = sortBy;

    if (this.sortBy === 'name') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => (a.name > b.name ? -1 : 1));
      } else {
        this.coins.sort((a, b) => (a.name < b.name ? -1 : 1));
      }
    } else if (this.sortBy === 'usd') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.usd - b.usd);
      } else {
        this.coins.sort((a, b) => b.usd - a.usd);
      }
    } else if (this.sortBy === 'sellPrice') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.sellPrice - b.sellPrice);
      } else {
        this.coins.sort((a, b) => b.sellPrice - a.sellPrice);
      }
    } else if (this.sortBy === 'eur') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.eur - b.eur);
      } else {
        this.coins.sort((a, b) => b.eur - a.eur);
      }
    } else if (this.sortBy === 'quantity') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.quantity - b.quantity);
      } else {
        this.coins.sort((a, b) => b.quantity - a.quantity);
      }
    } else if (this.sortBy === 'paid') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.paid - b.paid);
      } else {
        this.coins.sort((a, b) => b.paid - a.paid);
      }
    } else if (this.sortBy === 'value') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.value - b.value);
      } else {
        this.coins.sort((a, b) => b.value - a.value);
      }
    } else if (this.sortBy === 'xD') {
      if (this.sortOrder === 'asc') {
        this.coins.sort((a, b) => a.xD - b.xD);
      } else {
        this.coins.sort((a, b) => b.xD - a.xD);
      }
    }
  }

  updateCoins() {
    this.balance = 0;
    this.coins = COINS;
    this.coins.forEach(coin => {
      if (coin.name !== 'Euro' && coin.id != 'flith') {
        this.dataService.getCoinInfo(coin.id).subscribe((data: any)=>{
            coin.name = (data as any).name;
            if ((data as any).market_data.current_price.usd !== undefined) {
              if ((data as any).market_data.current_price.eur === 0) {
                coin.eur = (data as any).market_data.current_price.usd;
              } else {
                coin.eur = (data as any).market_data.current_price.eur;
              }
              coin.usd = (data as any).market_data.current_price.usd;
              coin._24h = (data as any).market_data.price_change_percentage_24h;
              coin.image = (data as any).image.thumb;
              coin.value = coin.eur * coin.quantity;
              if (coin.name === 'Tether' || coin.name === 'Binance USD') {
                coin.xD = 1;
              } else {
                coin.xD = coin.value / coin.paid;
              }
              this.balance = this.balance + coin.value;
              console.log(this.balance);
            }
        });
      } else if (coin.id === 'flith') {
        coin.value = coin.eur * coin.quantity;
        coin.xD = coin.value / coin.paid;
        this.balance = this.balance + coin.value;
      } else {
        this.balance = this.balance + coin.eur;
      }
    });
    this.sort(this.sortBy, this.sortOrder);
    setTimeout(() => {
      this.titleService.setTitle((Math.round(this.balance * 100) / 100).toString() + "€");
      console.log(this.balance);
    }, 5000);
    console.log(this.coins)
  }
}
