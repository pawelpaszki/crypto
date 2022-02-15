import { Component, ViewChild } from '@angular/core';
import { CryptoService } from '../crypto/crypto.service';
import { Coin } from '../coin/coin';
import { COINS } from '../coin/krystian';
import { Subscription, interval, config } from 'rxjs';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import { CryptocurrencyComponent } from '../cryptocurrency/cryptocurrency.component';

@Component({
  selector: 'app-krystian',
  templateUrl: './krystian.component.html',
  styleUrls: ['../style/other.css']
})
export class KrystianComponent {

  public coins: Coin[] = COINS;
  
    public jsonCoins: Coin[];
  
    // total: number = 7050;
    tax: number = 4000;
    balance: number = 0;
    usdBalance: number = 0;
    public sortBy = 'value';
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
  
    Highcharts: typeof Highcharts = Highcharts;
    updateFlag = false;
    chartOptions: Highcharts.Options = {
      series: [{
        data: [],
        type: 'pie'
      }],
    };
  
    updateCoins() {
      this.balance = 0;
      this.usdBalance = 0;
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
              this.usdBalance = this.usdBalance + (coin.usd * coin.quantity);
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
        this.chartOptions = {
           chart : {
              plotBorderWidth: 0,
              backgroundColor: 'transparent',
              plotShadow: false
           },
           title : {
              text: '',
              style: {
                color: 'white'
              }
           },
           tooltip : {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
           },
           plotOptions : {
              pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
           
                 dataLabels: {
                    enabled: false           
                 },
           
                 showInLegend: false
              }
           },
           series : [{
              type: 'pie',
              name: 'portfolio share',
              data: []
           }]
        };
        var prices: any[] = [];
        var index: number = 0;
        this.coins.forEach(coin => {
          var value: number = (coin.value / this.balance) * 100;
          console.log(value)
            prices[index] = {
              name: coin.name + ` (${coin.location})`,
              y: value,
              sliced: false,
              selected: false
            }
          
            prices[index] = {
              name: coin.name + ` (${coin.location})`,
              y: value,
              sliced: false,
              selected: false
            }
          index++
        });
        console.log(prices);
        if (this.chartOptions.series !== undefined &&  this.chartOptions.plotOptions != undefined && this.chartOptions.plotOptions.pie != undefined) {
          this.chartOptions.series[0] = {
            type: 'pie',
            data: prices,
            name: this.chartOptions.series[0].name
          }
          this.chartVisible = true;
          this.chartOptions.plotOptions.pie.dataLabels = {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
               color: 'white'
            }
          }
        }
      }, 5000);
      console.log(this.coins)
    }
  
    public chartVisible: boolean = false;
  
    @ViewChild(CryptocurrencyComponent) child : CryptocurrencyComponent;
  
    async invertChartVisibility(coin: Coin) {
      await this.child.getChartData(coin.id, coin.name, 14);
    }
  }
  