import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../coin/coin';
import { CryptoService } from '../crypto/crypto.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['../style/other.css']
})
export class CryptocurrencyComponent implements OnInit {

  constructor(public dataService: CryptoService,) { }

  public prices : any[] = [];

  ngOnInit() {}

  async getChartData(id: string, name: string, days: number) {
    if (!this.chartVisible) {
      await this.dataService.getCoinChart(id, days).subscribe((chartData: any)=>{
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
            name: `${name} price`
          }
        }
        this.chartOptions.xAxis = {
          title: {
              text: `${name} ${days} days chart`
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
          text: `${name} ${days} days price chart`
        };
        this.chartVisible = true;
      });
    } else {
      this.chartVisible = false;
    }
  }

  chartVisible = false;
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  chartOptions: Highcharts.Options = {
    series: [{
      data: this.prices,
      type: 'line'
    }]
  };
}
