export default (previousValue: number, currentValue: number) => {
  const difference = currentValue - previousValue
  return (difference * 100) / previousValue
}
