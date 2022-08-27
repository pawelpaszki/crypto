import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {
  private REST_API_SERVER = 'https://api.coingecko.com/api/v3/coins/';

  constructor(private httpClient: HttpClient) { }

  public getCoinInfo(id: string){
    return this.httpClient.get(`${this.REST_API_SERVER}${id}`);
  }

  public getCoinChart(id: string, days: number) {
    return this.httpClient.get(`${this.REST_API_SERVER}${id}/market_chart?vs_currency=usd&days=${days}`)
  }
}