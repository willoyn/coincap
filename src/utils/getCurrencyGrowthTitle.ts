import getLocaleString from '../hooks/getLocaleString'
import getDifferenceInPercents from './getDifferenceInPercents'
import getPrefixSymbol from './getPrefixSymbol'

// returns a string like `134,32 USD +2,38 (+1,80 %)`
export default (relevantCostInUsd: number, previousCostInUsd: number) => {
  const formattedRelevantCostInUsd = getLocaleString(
    String(relevantCostInUsd),
    false,
  )
  const differenceInUsd = relevantCostInUsd - previousCostInUsd
  const formattedDifferenceInUsd = differenceInUsd.toFixed(2)
  const differenceInPercents = getDifferenceInPercents(
    previousCostInUsd,
    relevantCostInUsd,
  )
  return `${formattedRelevantCostInUsd} USD ${getPrefixSymbol(
    differenceInUsd,
  )}${formattedDifferenceInUsd} (${getPrefixSymbol(
    differenceInPercents,
  )}${differenceInPercents.toFixed(2)} %)`
}
