import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { AssetHistory } from '../../types/api/AssetsHistoryResponse'

type Props = {
  history: AssetHistory
}

const convertHistoryToGraphData = (history: AssetHistory) =>
  history.map(item => ({
    x: item.time,
    y: parseFloat(item.priceUsd),
  }))

const CurrencyHistoryGraph = ({ history }: Props) => {
  const graphData = convertHistoryToGraphData(history)

  const areaTheme = {
    gradient: {
      from: {
        color: 'black',
      },
      to: {
        color: 'black',
        opacity: 0.5,
      },
    },
  }

  const priceLabelFormatter = (price: number) => {
    if (price < 10) {
      return `$${price.toFixed(5)}`
    }
    return `$${Math.round(price)}`
  }

  const horizontalAxisTheme = {
    labels: {
      formatter: priceLabelFormatter,
      label: {
        fontSize: 10,
        dx: -wp(1.3),
      },
    },
  }

  const dateLabelFormatter = (date: number) =>
    new Date(date).toDateString().slice(4, 10)

  const verticalAxisTheme = {
    labels: {
      formatter: dateLabelFormatter,
      label: {
        fontSize: 8,
        dy: -hp(1.8),
      },
    },
  }

  // VerticalAxis is actually horizontal and HorizontalAxis is vertical
  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <Chart
        style={styles.graph}
        data={graphData}
        padding={styles.graphPaddings}
      >
        <VerticalAxis theme={horizontalAxisTheme} tickCount={10} />
        <HorizontalAxis theme={verticalAxisTheme} tickCount={10} />
        <Area theme={areaTheme} />
        <Line />
      </Chart>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
  graph: {
    width: wp(90),
    height: hp(35),
  },
  graphPaddings: {
    top: hp(1),
    left: wp(12),
    right: wp(3.8),
    bottom: hp(2),
  },
})

export default CurrencyHistoryGraph
