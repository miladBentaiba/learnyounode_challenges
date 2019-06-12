let x = process.argv.reduce(
  (accumulator, currentValue, index) => {
    return (index > 1) ? accumulator + +currentValue : accumulator
  }, 0)

console.log(x)