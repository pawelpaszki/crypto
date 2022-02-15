import { Component, ViewChild } from '@angular/core';
import { CryptoService } from './crypto/crypto.service';
import { Coin } from './coin/coin';
import { COINS } from './coin/coins';
import { Subscription, interval, config } from 'rxjs';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './style/other.css'
  ]
})
export class AppComponent {

}
