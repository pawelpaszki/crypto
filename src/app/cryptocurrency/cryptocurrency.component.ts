import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Coin } from '../coin/coin';
import { CryptoService } from '../crypto/crypto.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['../style/style.css']
})
export class CryptocurrencyComponent implements OnInit {

  prices = [];

  @Input() coin: Coin = { id: 'a', name: 'a', quantity: 1, eur: 0, usd: 0, location: '', paid: 0, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []};
  constructor(public dataService: CryptoService,) { }

  ngOnInit() {}

  showChart() {
    if (!this.chartVisible) {
      this.getChartData(14);
    } else {
      this.chartVisible = false;
    }
  }

  async getChartData(days: number) {
    this.chartVisible = false;
    await this.dataService.getCoinChart(this.coin.id, days).subscribe((chartData: any)=>{
      var tempPrices = [];
      tempPrices = chartData.prices;
      if (tempPrices.length > 0) {
        tempPrices.forEach((price: any) => {
          if (price.length == 2) {
            price[0] = new Date(price[0]).toLocaleString();
          }
        });
      }
      this.prices = chartData.prices
      if (this.chartOptions.series !== undefined) {
        this.chartOptions.series[0] = {
          type: 'line',
          data: this.prices,
          name: `${this.coin.name} price`
        }
      }
      this.chartOptions.xAxis = {
        title: {
            text: `${this.coin.name} ${days} days chart`
        },
        visible: false
      }
      this.chartOptions.yAxis = {
        title: {
          text: `price in $`
        },
      }
      this.updateFlag = true;
      console.log(this.prices);
      this.chartOptions.title =  {
        text: `${this.coin.name} ${days} days price chart`
      };
      this.chartVisible = true;
    });
  }

  chartVisible = false
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  chartOptions: Highcharts.Options = {
    series: [{
      data: this.prices,
      type: 'line'
    }]
  };
}
