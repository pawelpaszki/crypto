import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CryptoService } from './crypto/crypto.service';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { AppRoutingModule } from './app-routing.module';
import { PawelComponent } from './pawel/pawel.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    PawelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
    AppRoutingModule,

  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  