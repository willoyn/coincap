/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from 'recyclerlistview'

import CurrenciesListItem, {
  itemTotalHeight,
  itemTotalWidth,
} from '../CurrenciesListItem/CurrenciesListItem'
import CustomLoader from '../CustomLoader/CustomLoader'

import { Assets, AssetsItem } from '../../types/api/AssetsResponse'

type Props = {
  data: Assets
  onItemPressed: (id: string, name: string) => void
  onAddItemPressed: (id: string, name: string) => void
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

  const footer = () => (
    <View style={styles.footer}>
      <CustomLoader />
    </View>
  )

  return (
    <RecyclerListView
      style={styles.list}
      rowRenderer={rowRenderer}
      dataProvider={list}
      layoutProvider={layoutProvider}
      onEndReached={onEndReached}
      renderFooter={footer}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flex: 1,
  },
})

export default CurrenciesList
