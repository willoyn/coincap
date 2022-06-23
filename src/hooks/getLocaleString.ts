/* 
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") is 
  equal to .toLocaleString('en-US') but it works on Android too;
  using it because .toLocaleString('en-US') works on iOS only
*/
export default (value: string, addDollarSymbol: boolean) => {
  const prefix = addDollarSymbol ? '$' : ''
  return `${prefix}${Math.round(Number(value))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}
