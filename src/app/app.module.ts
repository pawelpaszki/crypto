import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CryptoService } from './crypto/crypto.service';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,

  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  