import { gql } from '@apollo/client'

export const ASSETS = gql`
  query getAssets($offset: Int!) {
    getAssets(offset: $offset) {
      id
      rank
      symbol
      name
      maxSupply
      marketCapUsd
      volumeUsd24Hr
      priceUsd
      changePercent24Hr
      vwap24Hr
      explorer
    }
  }
`

export const ASSET_HISTORY = gql`
  query getAssetHistory($id: String!, $interval: String!) {
    getAssetHistory(id: $id, interval: $interval) {
      priceUsd
      time
      circulatingSupply
      date
    }
  }
`
