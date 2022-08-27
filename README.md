# Crypto portfolio tracker (angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

It uses coingecko api to get the prices for cryptocurrencies in your portfolio. The list of currencies is stored [here](./src/app/coin/coins.ts). If your currency isn't tracked (or for example it is in a (pre-)ido stage), you can use the value of a stable coin and change the currency location to describe it meaningfully in the portfolio (see `93750 ADRIA` in the coins list). You can also apply logic in this [component](./src/app/pawel/pawel.component.ts) to hardcode values of nfts and others.

![Alt text](./src/assets/wen_mun.png?raw=true "Portfolio tracker view")

## Auto refresh

The prices of the cryptocurrencies are refreshed every 60 seconds and reflected in the list of your cryptocurrencies

## Pie chart

There is a pie chart with % share of your currencies automatically displayed below the list of your cryptocurrencie (it displays 5 seconds after the view is loaded/ refreshed)

## Showing price charts for cryptocurrencies

When you click at a name of the cryptocurrency, price chart will show up (you can select from a few time span options to display the price chart)

![Alt text](./src/assets/chart.png?raw=true "Price chart")

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

You can deploy this app as is in firebase for free. See [this tutorial](https://www.positronx.io/deploy-angular-app-to-production-with-firebase-hosting/) for more details
