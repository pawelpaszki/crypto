export interface Coin {
  id: string;
  name: string;
  paid: number
  quantity: number
  usd: number  
  eur: number
  location: string
  image: string
  value: number
  sellPrice: number
  xD: number
  _24h: number
  _7d: number
  _30d: number
  prices: any[]
  visible: boolean
}
