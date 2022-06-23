import { ResponseTemplate } from './ResponseTemplate'

// https://docs.coincap.io/#61e708a8-8876-4fb2-a418-86f12f308978
// https://api.coincap.io/v2/assets/ID/history
export interface AssetHistoryResponse extends ResponseTemplate {
  data: AssetHistory
}

export type AssetHistory = Array<AssetHistoryItem>

export type AssetHistoryItem = {
  priceUsd: string
  time: number
  circulatingSupply?: string
  date?: string
}
