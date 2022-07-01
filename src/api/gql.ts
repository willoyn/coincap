import { gql } from '@apollo/client'

// eslint-disable-next-line import/prefer-default-export
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
