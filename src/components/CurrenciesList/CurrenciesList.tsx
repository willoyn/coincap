/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from 'recyclerlistview'

import CurrenciesListItem, {
  itemTotalHeight,
  itemTotalWidth,
} from '../CurrenciesListItem/CurrenciesListItem'

import { Assets, AssetsItem } from '../../types/api/AssetsResponse'

type Props = {
  data: Assets
  onItemPressed: () => void
  onAddItemPressed: () => void
  onEndReached: () => void
}

type ListDataItem = {
  type: string
  item: {
    id: number
    data: AssetsItem
  }
}

const CurrenciesList = ({
  data,
  onItemPressed,
  onAddItemPressed,
  onEndReached,
}: Props) => {
  const listData = data.map((item, index) => {
    const listItem: ListDataItem = {
      type: 'DEFAULT',
      item: {
        id: index,
        data: item,
      },
    }
    return listItem
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState(
    new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listData),
  )

  useEffect(() => {
    if (data.length) {
      setList(new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listData))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length])

  const layoutProvider = new LayoutProvider(
    index => list.getDataForIndex(index).type,
    (type, dimension) => {
      switch (type) {
        case 'DEFAULT':
          dimension.width = itemTotalWidth
          dimension.height = itemTotalHeight
          break
        default:
          dimension.width = 0
          dimension.height = 0
          break
      }
    },
  )

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const rowRenderer = (type: string, { item: { data } }: ListDataItem) => (
    <CurrenciesListItem
      data={data}
      onItemPress={onItemPressed}
      onAddItemPress={onAddItemPressed}
    />
  )

  return (
    <RecyclerListView
      style={styles.list}
      rowRenderer={rowRenderer}
      dataProvider={list}
      layoutProvider={layoutProvider}
      onEndReached={onEndReached}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    height: '100%',
  },
})

export default CurrenciesList
