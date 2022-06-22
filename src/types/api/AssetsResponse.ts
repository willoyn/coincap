import { ResponseTemplate } from './ResponseTemplate'

// https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91
// https://api.coincap.io/v2/assets
export interface AssetsResponse extends ResponseTemplate {
  data: Assets
}

export type Assets = Array<AssetsItem>

export type AssetsItem = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string | null
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
  explorer: string
}
