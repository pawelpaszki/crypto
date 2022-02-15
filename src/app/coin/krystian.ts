import { Coin } from './coin';

export const COINS: Coin[] = [
  // { id: 'bitcoin', name: 'Bitcoin', quantity: 0.000216, eur: 0, usd: 0, location: 'cb', paid: 0, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'fantom', name: 'Fantom', quantity: 866, eur: 0, usd: 0, location: 'binance', paid: 1720, value: 0, sellPrice: 8.25, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'fantom', name: 'Fantom', quantity: 4377, eur: 0, usd: 0, location: 'binance', paid: 4378.92, value: 0, sellPrice: 8  , image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'fantom', name: 'Fantom', quantity: 1415, eur: 0, usd: 0, location: 'binance', paid: 1428.697, value: 0, sellPrice: 8.25, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
   { id: 'ethereum', name: 'ethereum', quantity: 0.006, eur: 0, usd: 0, location: 'mm', paid: 13, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'ethereum', name: 'ethereum', quantity: 0.07, eur: 0, usd: 0, location: 'ledger', paid: 160, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'saito', name: 'Saito', quantity: 1000395.527, eur: 0, usd: 0, location: 'ledger', paid: 9076.7, value: 0, sellPrice: 0.3, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'dungeonswap', name: 'DungeonSwap', quantity: 561.118, eur: 0, usd: 0, location: 'bsc', paid: 840, value: 0, sellPrice: 12, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'hedera-hashgraph', name: 'Hedera Hashgraph', quantity: 9207.783, eur: 0, usd: 0, location: 'ledger', paid: 2400, value: 0, sellPrice: 3.1, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'hedera-hashgraph', name: 'Hedera Hashgraph', quantity: 12196, eur: 0, usd: 0, location: 'ledger', paid: 2573.453, value: 0, sellPrice: 3.1, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'cardano', name: 'Cardano', quantity: 2728.4566, eur: 0, usd: 0, location: 'bsc', paid: 3146.64, value: 0, sellPrice: 100, image: '', xD: 0, prices: []},
  // { id: 'konomi-network', name: 'Konomi Network', quantity: 2501.457, eur: 0, usd: 0, location: 'mm', paid: 1486.6965, value: 0, sellPrice: 15, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'tether', name: 'Tether', quantity: 2678.5339, eur: 0, usd: 0, location: 'binance', paid: 2249.97, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'tether', name: 'Tether', quantity: 341.957, eur: 0, usd: 0, location: 'mm', paid: 300, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'arcade', name: 'Arcade', quantity: 76876.146, eur: 0, usd: 0, location: 'bsc', paid: 435, value: 0, sellPrice: 1, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
    { id: 'binance-usd', name: 'Binance USD', quantity: 1250, eur: 0, usd: 0, location: 'pulsechain', paid: 1080, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
    { id: 'binance-usd', name: 'Binance USD', quantity: 4151, eur: 0, usd: 0, location: 'pulseX', paid: 3600, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'binance-usd', name: 'Binance USD', quantity: 601.814, eur: 0, usd: 0, location: 'bsc', paid: 10, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
    { id: 'inpulse-x', name: 'InpulseX', quantity: 17375000000, eur: 0, usd: 0, location: 'bsc', paid: 423, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  { id: 'everdome', name: 'Everdome', quantity: 104207, eur: 0, usd: 0, location: 'bsc', paid: 4500, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'solana', name: 'Solana', quantity: 0.4508, eur: 0, usd: 0, location: 'sollet', paid: 77.249, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
  // { id: 'usd-coin', name: 'USD Coin', quantity: 408.3967, eur: 0, usd: 0, location: 'sollet', paid: 343, value: 0, sellPrice: 0, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: []},
   { id: 'binancecoin', name: 'Binance Coin', quantity: 0.11, eur: 0, usd: 0, location: 'bsc', paid: 30, value: 0, sellPrice: 1000, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
  // { id: 'tenset', name: 'Tenset', quantity: 3000, eur: 0, usd: 0, location: 'bsc', paid: 7600, value: 0, sellPrice: 0.5, image: '', xD: 0,_24h: 0, _7d: 0, _30d: 0, prices: [], visible: false},
];

// everdome 589 usd
