import { Assets } from '../api/AssetsResponse'

export type AppState = {
  currencies: {
    data: Assets | any[]
    isFetching: boolean
    error: string | null
    isError: boolean
  }
}
